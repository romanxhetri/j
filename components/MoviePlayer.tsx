import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, RefreshCw } from 'lucide-react';

interface MoviePlayerProps {
  embedUrl: string;
  title: string;
  onBack: () => void;
}

const MoviePlayer: React.FC<MoviePlayerProps> = ({ embedUrl, title, onBack }) => {
  const [key, setKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleReload = () => {
    setIsLoading(true);
    setKey(prev => prev + 1);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col group">
      {/* Player Header - Visible on screen hover */}
      <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/90 to-transparent z-20 flex items-center justify-between transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none">
        <div className="flex items-center gap-4 pointer-events-auto">
          <button 
            onClick={onBack}
            className="p-2 rounded-full bg-white/10 hover:bg-red-600 backdrop-blur-md text-white transition"
            title="Go Back"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-white tracking-wide drop-shadow-md hidden sm:block truncate max-w-md">{title}</h1>
        </div>
        
        <div className="flex items-center gap-3 pointer-events-auto">
           <button 
            onClick={handleReload}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition"
            title="Reload Video"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
          
          <a 
            href={embedUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-zinc-800/80 hover:bg-zinc-700 text-white text-sm rounded-full backdrop-blur-md border border-white/10 transition"
          >
            <span className="hidden sm:inline">Open in new tab</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Iframe Container */}
      <div className="flex-1 w-full h-full flex items-center justify-center bg-black relative">
         {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-0">
                <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
         )}
        <div className="w-full h-full relative z-10">
            <iframe
                key={key}
                src={embedUrl}
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen
                // Important: Some hosts require standard referrers, so we removed referrerPolicy="no-referrer"
                sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-popups"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                onLoad={() => setIsLoading(false)}
                title={title}
            />
        </div>
      </div>
    </div>
  );
};

export default MoviePlayer;