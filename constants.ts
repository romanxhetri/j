import { Movie } from './types';

// The specific embed link for the featured movie (currently Welcome)
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
    id: 101,
    title: "Stranger Things",
    image: "https://images.unsplash.com/photo-1627637819845-a4645398d361?q=80&w=800&auto=format&fit=crop",
    rating: "TV-14",
    year: 2024,
    duration: "Season 5",
    description: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
    genre: ["Sci-Fi", "Horror"],
    embedUrl: "https://dintezuvio.com/embed/hpow0ir439f7"
  },
  {
    id: 102,
    title: "Predator: Badlands",
    image: "https://images.unsplash.com/photo-1550100136-e074fa714874?q=80&w=800&auto=format&fit=crop",
    rating: "R",
    year: 2025,
    duration: "2h 10m",
    description: "In the near future, a group of elite mercenaries find themselves hunted by an evolved predator in a desolate wasteland.",
    genre: ["Action", "Sci-Fi"],
    embedUrl: "https://dintezuvio.com/embed/3searyff87wf"
  },
  {
    id: 103,
    title: "Last Samurai Standing",
    image: "https://images.unsplash.com/photo-1614186926073-7464d183918a?q=80&w=800&auto=format&fit=crop",
    rating: "TV-MA",
    year: 2024,
    duration: "Season 1",
    description: "In a feudal Japan overrun by dark magic, one lone warrior fights to restore honor to his clan against impossible odds.",
    genre: ["Action", "Drama", "History"],
    embedUrl: "https://dintezuvio.com/embed/0b982ger5u0n"
  },
  {
    id: 104,
    title: "Aaryan",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=800&auto=format&fit=crop",
    rating: "NR",
    year: 2025,
    duration: "2h 15m",
    description: "An undercover cop delves deep into the criminal underworld to dismantle a powerful syndicate from the inside.",
    genre: ["Action", "Thriller"],
    embedUrl: "https://dintezuvio.com/embed/8tqmb10ekaap"
  },
  {
    id: 105,
    title: "Troll 1",
    image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=800&auto=format&fit=crop",
    rating: "PG-13",
    year: 1986,
    duration: "1h 22m",
    description: "A family vacation turns into a nightmare when they are hunted by goblins disguised as humans in the forest.",
    genre: ["Fantasy", "Horror"],
    embedUrl: "https://dintezuvio.com/embed/zmi9qnwhqic7"
  },
  {
    id: 106,
    title: "Primitive War",
    image: "https://images.unsplash.com/photo-1549488497-69502752eb4a?q=80&w=800&auto=format&fit=crop",
    rating: "R",
    year: 2025,
    duration: "1h 58m",
    description: "A squad of soldiers encounters prehistoric horrors in a remote jungle during a rescue mission gone wrong.",
    genre: ["War", "Sci-Fi", "Horror"],
    embedUrl: "https://dintezuvio.com/embed/iyjhbog3hoqr"
  },
  {
    id: 107,
    title: "Dracula: A Love Tale",
    image: "https://images.unsplash.com/photo-1505673542670-a5e3ff5b14a3?q=80&w=800&auto=format&fit=crop",
    rating: "R",
    year: 2024,
    duration: "2h 00m",
    description: "A reimagining of the classic tale, exploring the eternal romance and tragedy behind the monster.",
    genre: ["Romance", "Horror"],
    embedUrl: "https://dintezuvio.com/embed/eqlwrgc8udk3"
  },
  {
    id: 108,
    title: "Troll 2",
    image: "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?q=80&w=800&auto=format&fit=crop",
    rating: "PG-13",
    year: 1990,
    duration: "1h 35m",
    description: "A family moves to a small town where they discover that the inhabitants are goblins in disguise who want to eat them.",
    genre: ["Comedy", "Horror"],
    embedUrl: "https://dintezuvio.com/embed/la96qke5mit5"
  },
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
  }
];

export const SYSTEM_INSTRUCTION = `You are Anymovie's intelligent movie assistant. 
Your goal is to help users decide what to watch, explain plot points, and discuss film theory.
Be concise, friendly, and enthusiastic about cinema.
The catalog includes new hits like "Stranger Things", "Predator: Badlands", "Last Samurai Standing", "Aaryan", "Troll 1 & 2", "Primitive War", and "Dracula: A Love Tale".
If the user asks about the "Featured Movie" or "Welcome", tell them it is the latest thriller premiere about a couple's nightmare in a secluded estate.
Keep responses under 3 sentences unless asked for a detailed analysis.`;