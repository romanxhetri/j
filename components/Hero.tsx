import React from 'react';
import { Play, Info } from 'lucide-react';
import { Movie } from '../types';

interface HeroProps {
  movie: Movie;
  onPlay: () => void;
}

const Hero: React.FC<HeroProps> = ({ movie, onPlay }) => {
  return (
    <div className="relative h-[80vh] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={movie.image} 
          alt={movie.title} 
          className="w-full h-full object-cover brightness-75" 
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-3xl px-4 sm:px-6 lg:px-12 w-full pt-16">
            {/* Tagline/Brand */}
            <div className="flex items-center gap-2 mb-4">
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded tracking-wider uppercase">
                    Premiere
                </span>
                <span className="text-gray-300 text-sm font-medium tracking-wide">
                    Only on Anymovie
                </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-xl leading-tight">
                {movie.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-4 text-gray-300 mb-6 text-sm md:text-base font-medium">
                <span className="text-green-400">{movie.rating}</span>
                <span>{movie.year}</span>
                <span>{movie.duration}</span>
                <span className="border border-gray-500 px-1 rounded text-xs uppercase">HD</span>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg md:text-xl mb-8 line-clamp-3 max-w-xl drop-shadow-md">
                {movie.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
                <button 
                    onClick={onPlay}
                    className="flex items-center justify-center gap-3 bg-white text-black px-8 py-3 rounded hover:bg-red-600 hover:text-white transition-all font-bold text-lg"
                >
                    <Play className="w-6 h-6 fill-current" />
                    Watch Now
                </button>
                <button className="flex items-center justify-center gap-3 bg-gray-500/30 backdrop-blur-sm text-white px-8 py-3 rounded hover:bg-gray-500/50 transition-all font-bold text-lg border border-white/20">
                    <Info className="w-6 h-6" />
                    More Info
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;