import { Client } from 'pg';

// User provided Neon Database URL
const DATABASE_URL = "postgresql://neondb_owner:npg_Wwnx6o2QXMfK@ep-super-meadow-ae312qd5-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require";

export default async (req: Request) => {
  // 1. Connect to the database
  const client = new Client({
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false }, // Required for Neon connection stability
  });

  try {
    await client.connect();

    // 2. Handle POST request (Add Movie)
    if (req.method === 'POST') {
      const body = await req.json();
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
      return new Response(JSON.stringify({
        id: row.id,
        title: row.title,
        description: row.description,
        image: row.image,
        embedUrl: row.embed_url,
        genre: [row.genre],
        year: row.year,
        rating: row.rating,
        duration: row.duration
      }), { headers: { 'Content-Type': 'application/json' } });
    }

    // 3. Handle GET request (Fetch Movies)
    if (req.method === 'GET') {
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

      return new Response(JSON.stringify(movies), { 
        headers: { 'Content-Type': 'application/json' } 
      });
    }

    await client.end();
    return new Response("Method not allowed", { status: 405 });

  } catch (error) {
    console.error('Database Error:', error);
    // Ensure client is closed on error
    try { await client.end(); } catch (e) {} 
    
    return new Response(JSON.stringify({ error: "Database operation failed: " + String(error) }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};