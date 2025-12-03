import { Client } from 'pg';

// User provided Neon Database URL
const DATABASE_URL = "postgresql://neondb_owner:npg_Wwnx6o2QXMfK@ep-super-meadow-ae312qd5-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require";

export const handler = async (event: any, context: any) => {
  // 1. Connect to the database
  const client = new Client({
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false }, // Required for Neon connection stability
  });

  try {
    await client.connect();

    // 2. Handle POST request (Add Movie)
    if (event.httpMethod === 'POST') {
      const body = JSON.parse(event.body || '{}');
      const { title, description, image, embedUrl, genre, year, rating, duration } = body;

      const query = `
        INSERT INTO movies (title, description, image, embed_url, genre, year, rating, duration)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *;
      `;
      
      const values = [title, description, image, embedUrl, genre, year, rating, duration];
      const result = await client.query(query, values);
      
      await client.end();
      
      // Map back to frontend structure
      const row = result.rows[0];
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: row.id,
          title: row.title,
          description: row.description,
          image: row.image,
          embedUrl: row.embed_url,
          genre: [row.genre],
          year: row.year,
          rating: row.rating,
          duration: row.duration
        })
      };
    }

    // 3. Handle GET request (Fetch Movies)
    if (event.httpMethod === 'GET') {
      const result = await client.query('SELECT * FROM movies ORDER BY id DESC');
      await client.end();

      const movies = result.rows.map(row => ({
        id: row.id,
        title: row.title,
        description: row.description,
        image: row.image,
        embedUrl: row.embed_url,
        genre: [row.genre], // Store as single string in DB, wrap in array for frontend
        year: row.year,
        rating: row.rating,
        duration: row.duration
      }));

      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movies)
      };
    }

    await client.end();
    return { statusCode: 405, body: "Method not allowed" };

  } catch (error) {
    console.error('Database Error:', error);
    // Ensure client is closed on error
    try { await client.end(); } catch (e) {} 
    
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: "Database operation failed: " + String(error) })
    };
  }
};