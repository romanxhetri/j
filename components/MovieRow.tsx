import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Movie } from '../types';

interface MovieRowProps {
  title: string;
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
}

const MovieRow: React.FC<MovieRowProps> = ({ title, movies, onMovieClick }) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { current } = rowRef;
      const scrollAmount = direction === 'left' ? -window.innerWidth / 2 : window.innerWidth / 2;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-10 pl-4 md:pl-12 relative group">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 transition-colors hover:text-red-500 cursor-pointer inline-block">
        {title}
      </h2>
      
      <div className="relative">
        {/* Left Control */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-0 bottom-0 z-40 bg-black/50 hover:bg-black/70 w-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-r-lg"
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </button>

        {/* Scroll Container */}
        <div 
          ref={rowRef}
          className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth pb-4 px-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map((movie) => (
            <div 
              key={movie.id} 
              onClick={() => onMovieClick(movie)}
              className="relative flex-none w-[160px] md:w-[240px] aspect-[2/3] rounded-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:z-20 cursor-pointer group/card"
            >
              <img 
                src={movie.image} 
                alt={movie.title} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                 <div className="flex items-center gap-2 mb-2">
                    <button className="bg-white text-black rounded-full p-2 hover:bg-red-600 hover:text-white transition">
                        <Play className="w-4 h-4 fill-current" />
                    </button>
                    <span className="text-green-400 font-bold text-xs">{movie.rating}</span>
                    <span className="text-gray-300 text-xs">{movie.duration}</span>
                 </div>
                 <h3 className="text-white font-bold text-sm md:text-base leading-tight">{movie.title}</h3>
                 <p className="text-gray-400 text-xs mt-1">
                   {movie.genre?.[0] || 'Unknown'}
                 </p>
                 {movie.description && (
                   <p className="text-gray-300 text-[10px] line-clamp-2 mt-2 hidden md:block opacity-80">
                     {movie.description}
                   </p>
                 )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Control */}
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-0 bottom-0 z-40 bg-black/50 hover:bg-black/70 w-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-l-lg"
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </button>
      </div>
    </div>
  );
};

export default MovieRow;