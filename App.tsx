import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieRow from './components/MovieRow';
import MoviePlayer from './components/MoviePlayer';
import UploadModal from './components/UploadModal';
import { FEATURED_MOVIE, POPULAR_MOVIES } from './constants';
import { ViewState, Movie } from './types';

const App: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>(ViewState.HOME);
  const [currentMovie, setCurrentMovie] = useState(FEATURED_MOVIE);
  
  // State to manage user-uploaded movies from Database or Local Storage
  const [customMovies, setCustomMovies] = useState<Movie[]>([]);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  // Load movies from Database (Netlify Function) with Local Storage Fallback
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('/.netlify/functions/movies');
        if (response.ok) {
          const data = await response.json();
          setCustomMovies(data);
        } else {
          throw new Error("Backend not available");
        }
      } catch (error) {
        console.log("Backend unavailable, falling back to Local Storage");
        const localData = localStorage.getItem('anymovie_uploads');
        if (localData) {
          try {
            setCustomMovies(JSON.parse(localData));
          } catch (e) {
            console.error("Error parsing local storage", e);
          }
        }
      }
    };

    fetchMovies();
  }, []);

  // Combine custom movies with default popular movies
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
        console.log("No embed link for this movie");
    }
  };

  const handleBackToHome = () => {
    setViewState(ViewState.HOME);
  };

  const handleUploadClick = () => {
    setIsUploadModalOpen(true);
  };

  const handleUploadMovie = async (movieData: Omit<Movie, 'id'>) => {
    // Create a temporary ID for immediate display/local storage
    const tempId = Date.now();
    const newMovieForLocal = { ...movieData, id: tempId, genre: [movieData.genre[0]] };

    try {
      // Try to save to Database
      const response = await fetch('/.netlify/functions/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...movieData,
          genre: movieData.genre[0] // Simplify array to string for DB
        }),
      });

      if (response.ok) {
        const savedMovie = await response.json();
        setCustomMovies(prev => [savedMovie, ...prev]);
        setIsUploadModalOpen(false);
      } else {
        throw new Error("Backend save failed");
      }
    } catch (error) {
      console.warn("Backend failed, saving to Local Storage instead.");
      
      // Fallback: Save to Local Storage
      const currentLocalMovies = JSON.parse(localStorage.getItem('anymovie_uploads') || '[]');
      const updatedLocalMovies = [newMovieForLocal, ...currentLocalMovies];
      localStorage.setItem('anymovie_uploads', JSON.stringify(updatedLocalMovies));
      
      setCustomMovies(prev => [newMovieForLocal as Movie, ...prev]);
      setIsUploadModalOpen(false);
    }
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