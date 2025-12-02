import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';

interface MoviePlayerProps {
  embedUrl: string;
  title: string;
  onBack: () => void;
}

const MoviePlayer: React.FC<MoviePlayerProps> = ({ embedUrl, title, onBack }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col group">
      {/* Player Header - Visible on screen hover */}
      <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/90 to-transparent z-20 flex items-center justify-between transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none">
        <div className="flex items-center gap-4 pointer-events-auto">
          <button 
            onClick={onBack}
            className="p-2 rounded-full bg-white/10 hover:bg-red-600 backdrop-blur-md text-white transition"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-white tracking-wide drop-shadow-md hidden sm:block">{title}</h1>
        </div>
        
        {/* Fallback button in header if iframe fails */}
        <a 
          href={embedUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center gap-2 px-4 py-2 bg-zinc-800/80 hover:bg-zinc-700 text-white text-sm rounded-full backdrop-blur-md border border-white/10 transition"
        >
          <span>If video fails, click here</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Iframe Container */}
      <div className="flex-1 w-full h-full flex items-center justify-center bg-black relative">
        <div className="w-full h-full relative">
            <iframe
                src={embedUrl}
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                sandbox="allow-forms allow-header-enrichment allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation"
                title={title}
            />
        </div>
      </div>
    </div>
  );
};

export default MoviePlayer;