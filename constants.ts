import { Movie } from './types';

// The specific embed link requested by the user
export const FEATURED_MOVIE_EMBED_URL = "https://dintezuvio.com/embed/la96qke5mit5";

export const FEATURED_MOVIE: Movie = {
  id: 1000,
  title: "Welcome",
  image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop",
  rating: "R",
  year: 2024,
  duration: "2h 05m",
  description: "A young couple's dream of a fresh start turns into a nightmare when they move into a secluded estate. As they uncover the property's dark history, they realize that some invitations should never be accepted.",
  genre: ["Thriller", "Horror", "Mystery"],
  embedUrl: FEATURED_MOVIE_EMBED_URL
};

export const POPULAR_MOVIES: Movie[] = [
  {
    id: 1000,
    title: "Welcome",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=600&auto=format&fit=crop",
    rating: "R",
    year: 2024,
    duration: "2h 05m",
    description: "A young couple's dream of a fresh start turns into a nightmare.",
    genre: ["Thriller", "Horror"],
    embedUrl: FEATURED_MOVIE_EMBED_URL
  },
  {
    id: 1,
    title: "Neon Nights",
    image: "https://picsum.photos/seed/movie1/600/900",
    rating: "R",
    year: 2023,
    duration: "1h 50m",
    description: "Cyberpunk detective thriller set in 2089.",
    genre: ["Action", "Sci-Fi"]
  },
  {
    id: 2,
    title: "The Last Horizon",
    image: "https://picsum.photos/seed/movie2/600/900",
    rating: "PG",
    year: 2024,
    duration: "2h 30m",
    description: "An epic journey across the galaxy to find a new home.",
    genre: ["Adventure", "Drama"]
  },
  {
    id: 3,
    title: "Shadows of the Past",
    image: "https://picsum.photos/seed/movie3/600/900",
    rating: "PG-13",
    year: 2022,
    duration: "1h 45m",
    description: "A historical mystery that threatens to rewrite history.",
    genre: ["Mystery", "Thriller"]
  },
  {
    id: 4,
    title: "Velocity",
    image: "https://picsum.photos/seed/movie4/600/900",
    rating: "PG-13",
    year: 2023,
    duration: "2h 05m",
    description: "High speed racing drama.",
    genre: ["Action", "Sport"]
  },
  {
    id: 5,
    title: "Silent Deep",
    image: "https://picsum.photos/seed/movie5/600/900",
    rating: "R",
    year: 2024,
    duration: "1h 55m",
    description: "Something ancient wakes up in the Marianas Trench.",
    genre: ["Horror", "Sci-Fi"]
  },
  {
    id: 6,
    title: "Canvas of Love",
    image: "https://picsum.photos/seed/movie6/600/900",
    rating: "PG",
    year: 2021,
    duration: "1h 35m",
    description: "A romantic comedy about two artists in Paris.",
    genre: ["Romance", "Comedy"]
  }
];

export const SYSTEM_INSTRUCTION = `You are Anymovie's intelligent movie assistant. 
Your goal is to help users decide what to watch, explain plot points, and discuss film theory.
Be concise, friendly, and enthusiastic about cinema.
If the user asks about the "Featured Movie" or "Welcome", tell them it is the latest thriller premiere about a couple's nightmare in a secluded estate.
Keep responses under 3 sentences unless asked for a detailed analysis.`;