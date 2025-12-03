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
    id: 201,
    title: "The Family Man S1 E1",
    image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=800&auto=format&fit=crop",
    rating: "TV-MA",
    year: 2019,
    duration: "45m",
    description: "The Family Man: Srikant Tiwari struggles to balance his life as a middle-class father and a top-secret intelligence officer. A terror threat looms over Mumbai.",
    genre: ["Action", "Thriller"],
    embedUrl: "https://dintezuvio.com/embed/o5c8tpfw9vq8"
  },
  {
    id: 202,
    title: "The Family Man S1 E2",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    rating: "TV-MA",
    year: 2019,
    duration: "42m",
    description: "Sleepers: As the investigation deepens, Srikant tracks a suspect. Meanwhile, his family life hits a rough patch as secrets begin to weigh him down.",
    genre: ["Action", "Thriller"],
    embedUrl: "https://dintezuvio.com/embed/u9zue3yhv61e"
  },
  {
    id: 203,
    title: "The Family Man S1 E3",
    image: "https://images.unsplash.com/photo-1461696114087-397271a7aedc?q=80&w=800&auto=format&fit=crop",
    rating: "TV-MA",
    year: 2019,
    duration: "48m",
    description: "The Anti-National: Srikant faces pressure from his superiors. A chase through the crowded streets leads to a critical realization about the enemy's plan.",
    genre: ["Action", "Thriller"],
    embedUrl: "https://dintezuvio.com/embed/7dksuu1zik4t"
  },
  {
    id: 204,
    title: "The Family Man S1 E4",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    rating: "TV-MA",
    year: 2019,
    duration: "46m",
    description: "Patriots: A joint operation is launched to intercept the terrorists. Srikant's commitment to duty is tested against his moral compass.",
    genre: ["Action", "Thriller"],
    embedUrl: "https://dintezuvio.com/embed/uy9ohp3kb1am"
  },
  {
    id: 205,
    title: "The Family Man S1 E5",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800&auto=format&fit=crop",
    rating: "TV-MA",
    year: 2019,
    duration: "50m",
    description: "Pariah: Srikant goes undercover in a high-risk mission. The boundaries between friend and foe blur as he navigates the criminal underworld.",
    genre: ["Action", "Thriller"],
    embedUrl: "https://dintezuvio.com/embed/3oogcwtkc6sk"
  },
  {
    id: 206,
    title: "The Family Man S1 E6",
    image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=800&auto=format&fit=crop",
    rating: "TV-MA",
    year: 2019,
    duration: "47m",
    description: "Dance of Death: Betrayal strikes close to home. The team races against time to decode an encrypted message before a major attack.",
    genre: ["Action", "Thriller"],
    embedUrl: "https://dintezuvio.com/embed/uy9ohp3kb1am"
  },
  {
    id: 207,
    title: "The Family Man S1 E7",
    image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7c1f?q=80&w=800&auto=format&fit=crop",
    rating: "TV-MA",
    year: 2019,
    duration: "52m",
    description: "Paradise: In the season climax, Srikant confronts the mastermind. The fate of the city hangs in the balance as the countdown begins.",
    genre: ["Action", "Thriller"],
    embedUrl: "https://dintezuvio.com/embed/uy9ohp3kb1am"
  },
  {
    id: 101,
    title: "Stranger Things",
    image: "https://images.unsplash.com/photo-1627637819845-a4645398d361?q=80&w=800&auto=format&fit=crop",
    rating: "TV-14",
    year: 2024,
    duration: "Season 5",
    description: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back. The final chapter begins.",
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
    description: "In the near future, a group of elite mercenaries find themselves hunted by an evolved predator in a desolate wasteland where survival is the only option.",
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
    description: "In a feudal Japan overrun by dark magic, one lone warrior fights to restore honor to his clan against impossible odds and ancient demons.",
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
    description: "An undercover cop delves deep into the criminal underworld to dismantle a powerful syndicate from the inside, risking everything he holds dear.",
    genre: ["Action", "Thriller"],
    embedUrl: "https://dintezuvio.com/embed/8tqmb10ekaap"
  },
  {
    id: 105,
    title: "Troll 1",
    image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=800&auto=format&fit=crop",
    rating: "PG-13",
    year: 2024,
    duration: "1h 30m",
    description: "A family vacationing in a small town discovers that the forest is inhabited by vegetarian goblins who turn people into plants to eat them.",
    genre: ["Fantasy", "Comedy"],
    embedUrl: "https://dintezuvio.com/embed/zmi9qnwhqic7"
  },
  {
    id: 106,
    title: "Primitive War",
    image: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?q=80&w=800&auto=format&fit=crop",
    rating: "R",
    year: 2025,
    duration: "1h 55m",
    description: "During the Vietnam War, a squad of soldiers encounters a prehistoric threat in the jungle that is far deadlier than the enemy they were trained to fight.",
    genre: ["Action", "Horror"],
    embedUrl: "https://dintezuvio.com/embed/iyjhbog3hoqr"
  },
  {
    id: 107,
    title: "Dracula: A Love Tale",
    image: "https://images.unsplash.com/photo-1505672675380-4d33a61986f1?q=80&w=800&auto=format&fit=crop",
    rating: "R",
    year: 2024,
    duration: "2h 00m",
    description: "A reimagining of the classic tale, exploring the tragic origin of the immortal vampire and the eternal love that drives his darkness.",
    genre: ["Romance", "Horror"],
    embedUrl: "https://dintezuvio.com/embed/eqlwrgc8udk3"
  },
  {
    id: 108,
    title: "Troll 2",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    rating: "PG-13",
    year: 2024,
    duration: "1h 35m",
    description: "The sequel to the cult classic. A young family fights to survive against a new hoard of goblins in a town named Nilbog.",
    genre: ["Comedy", "Horror"],
    embedUrl: "https://dintezuvio.com/embed/la96qke5mit5"
  }
];
