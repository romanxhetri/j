import React, { useState, useEffect } from 'react';
import { Film, Search, Bell, Menu, X, UploadCloud } from 'lucide-react';

interface NavbarProps {
  onHomeClick: () => void;
  onUploadClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHomeClick, onUploadClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-40 transition-colors duration-300 ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Desktop Links */}
          <div className="flex items-center">
            <div className="flex-shrink-0 cursor-pointer" onClick={onHomeClick}>
              <span className="flex items-center gap-2 text-red-600 font-bold text-2xl tracking-tighter">
                <Film className="w-8 h-8" />
                Anymovie
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={onHomeClick} className="text-white hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition">Home</button>
                <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Series</button>
                <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Movies</button>
                <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">New & Popular</button>
              </div>
            </div>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={onUploadClick}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition group"
              title="Upload Movie"
            >
              <UploadCloud className="w-5 h-5 group-hover:text-red-500 transition-colors" />
              <span className="text-sm font-medium">Upload</span>
            </button>
            <Search className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
            <Bell className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center text-white font-bold">
                J
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-zinc-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => {onHomeClick(); setMobileMenuOpen(false)}} className="text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">Home</button>
            <button 
              onClick={() => {onUploadClick(); setMobileMenuOpen(false)}}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center gap-2"
            >
              <UploadCloud className="w-4 h-4" /> Upload Movie
            </button>
            <button className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">Series</button>
            <button className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">Movies</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;