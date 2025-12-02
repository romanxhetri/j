import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieRow from './components/MovieRow';
import MoviePlayer from './components/MoviePlayer';
import ChatAssistant from './components/ChatAssistant';
import UploadModal from './components/UploadModal';
import { FEATURED_MOVIE, POPULAR_MOVIES } from './constants';
import { ViewState, Movie } from './types';

const STORAGE_KEY = 'anymovie_custom_movies';

const App: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>(ViewState.HOME);
  const [currentMovie, setCurrentMovie] = useState(FEATURED_MOVIE);
  
  // State to manage user-uploaded movies separately
  const [customMovies, setCustomMovies] = useState<Movie[]>([]);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  // Load movies from local storage on mount
  useEffect(() => {
    const savedMovies = localStorage.getItem(STORAGE_KEY);
    if (savedMovies) {
      try {
        setCustomMovies(JSON.parse(savedMovies));
      } catch (e) {
        console.error("Failed to parse saved movies:", e);
      }
    }
  }, []);

  // Combine custom movies with default popular movies
  // Custom movies appear first
  const allMovies = [...customMovies, ...POPULAR_MOVIES];

  // When "Watch Now" is clicked on Hero
  const handleWatchFeatured = () => {
    if (FEATURED_MOVIE.embedUrl) {
      setCurrentMovie(FEATURED_MOVIE);
      setViewState(ViewState.WATCH);
    }
  };

  const handleMovieClick = (movie: Movie) => {
    if (movie.embedUrl) {
        setCurrentMovie(movie);
        setViewState(ViewState.WATCH);
    } else {
        // Fallback for demo content without links
        console.log("No embed link for this movie");
    }
  };

  const handleBackToHome = () => {
    setViewState(ViewState.HOME);
  };

  const handleUploadClick = () => {
    setIsUploadModalOpen(true);
  };

  const handleUploadMovie = (movieData: Omit<Movie, 'id'>) => {
    const newMovie: Movie = {
      ...movieData,
      id: Date.now(), // Generate a unique ID based on timestamp
    };
    
    // Update state
    const updatedCustomMovies = [newMovie, ...customMovies];
    setCustomMovies(updatedCustomMovies);
    
    // Save to Local Storage for persistence
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCustomMovies));
    
    setIsUploadModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-900 selection:text-white">
      {viewState === ViewState.WATCH ? (
        <MoviePlayer 
          embedUrl={currentMovie.embedUrl || ''} 
          title={currentMovie.title} 
          onBack={handleBackToHome} 
        />
      ) : (
        <>
          <Navbar 
            onHomeClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            onUploadClick={handleUploadClick}
          />
          
          <main>
            <Hero movie={FEATURED_MOVIE} onPlay={handleWatchFeatured} />
            
            <div className="relative z-10 -mt-24 md:-mt-32 pb-10 bg-gradient-to-b from-transparent to-black">
              {/* Gradient overlay to blend Hero into rows */}
            </div>
            
            <div className="relative z-20 space-y-4 md:space-y-8 bg-black">
              {customMovies.length > 0 && (
                <MovieRow title="Your Uploads" movies={customMovies} onMovieClick={handleMovieClick} />
              )}
              <MovieRow title="New Releases" movies={allMovies} onMovieClick={handleMovieClick} />
              <MovieRow title="Trending Now" movies={[...allMovies].reverse()} onMovieClick={handleMovieClick} />
            </div>

            <footer className="py-12 px-4 md:px-12 border-t border-zinc-900 bg-black mt-12 text-zinc-500 text-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                <div className="flex flex-col gap-4">
                  <a href="#" className="hover:underline">Audio Description</a>
                  <a href="#" className="hover:underline">Investor Relations</a>
                  <a href="#" className="hover:underline">Legal Notices</a>
                </div>
                <div className="flex flex-col gap-4">
                  <a href="#" className="hover:underline">Help Center</a>
                  <a href="#" className="hover:underline">Jobs</a>
                  <a href="#" className="hover:underline">Cookie Preferences</a>
                </div>
                <div className="flex flex-col gap-4">
                   <a href="#" className="hover:underline">Gift Cards</a>
                   <a href="#" className="hover:underline">Terms of Use</a>
                   <a href="#" className="hover:underline">Corporate Information</a>
                </div>
                <div className="flex flex-col gap-4">
                  <a href="#" className="hover:underline">Media Center</a>
                  <a href="#" className="hover:underline">Privacy</a>
                  <a href="#" className="hover:underline">Contact Us</a>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <button className="border border-zinc-500 px-4 py-1 hover:text-white transition">English</button>
              </div>
              <p>© 2024 Anymovie Inc.</p>
            </footer>
          </main>

          <ChatAssistant />
          
          <UploadModal 
            isOpen={isUploadModalOpen} 
            onClose={() => setIsUploadModalOpen(false)} 
            onUpload={handleUploadMovie}
          />
        </>
      )}
    </div>
  );
};

export default App;