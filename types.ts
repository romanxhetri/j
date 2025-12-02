export interface Movie {
  id: number;
  title: string;
  image: string;
  rating: string;
  year: number;
  duration: string;
  description: string;
  genre: string[];
  embedUrl?: string; // Optional embed URL for specific movies
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum ViewState {
  HOME = 'HOME',
  WATCH = 'WATCH',
}