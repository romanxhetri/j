import React, { useState } from 'react';
import { X, Upload, Link as LinkIcon, Image as ImageIcon, FileText } from 'lucide-react';
import { Movie } from '../types';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (movie: Omit<Movie, 'id'>) => void;
}

const UploadModal: React.FC<UploadModalProps> = ({ isOpen, onClose, onUpload }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    embedUrl: '',
    genre: 'Action',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.title || !formData.embedUrl) {
      alert("Title and Embed URL are required!");
      return;
    }

    const newMovie: Omit<Movie, 'id'> = {
      title: formData.title,
      description: formData.description || "No description provided.",
      image: formData.image || "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop", // Fallback image
      embedUrl: formData.embedUrl,
      genre: [formData.genre],
      rating: "NR",
      year: new Date().getFullYear(),
      duration: "Unknown"
    };

    onUpload(newMovie);
    // Reset form
    setFormData({
      title: '',
      description: '',
      image: '',
      embedUrl: '',
      genre: 'Action',
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-lg max-h-[90vh] shadow-2xl overflow-hidden relative flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-950 flex-shrink-0">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Upload className="w-5 h-5 text-red-600" />
            Upload Movie
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form - Scrollable Area */}
        <div className="overflow-y-auto custom-scrollbar p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Title */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Movie Title</label>
              <div className="relative">
                <input 
                  type="text"
                  placeholder="e.g. Inception"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg px-4 py-3 pl-10 focus:ring-1 focus:ring-red-600 focus:border-red-600 outline-none transition-all placeholder:text-zinc-600"
                  required
                />
                <FileText className="w-4 h-4 text-zinc-500 absolute left-3 top-3.5" />
              </div>
            </div>

            {/* Embed Link */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Embed URL</label>
              <div className="relative">
                <input 
                  type="url"
                  placeholder="https://example.com/embed/..."
                  value={formData.embedUrl}
                  onChange={(e) => setFormData({...formData, embedUrl: e.target.value})}
                  className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg px-4 py-3 pl-10 focus:ring-1 focus:ring-red-600 focus:border-red-600 outline-none transition-all placeholder:text-zinc-600"
                  required
                />
                <LinkIcon className="w-4 h-4 text-zinc-500 absolute left-3 top-3.5" />
              </div>
              <p className="text-xs text-zinc-500">Must be a valid embeddable video URL.</p>
            </div>

            {/* Image URL */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Cover Image URL</label>
              <div className="relative">
                <input 
                  type="url"
                  placeholder="https://..."
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                  className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg px-4 py-3 pl-10 focus:ring-1 focus:ring-red-600 focus:border-red-600 outline-none transition-all placeholder:text-zinc-600"
                />
                <ImageIcon className="w-4 h-4 text-zinc-500 absolute left-3 top-3.5" />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Description</label>
              <textarea 
                rows={3}
                placeholder="What is this movie about?"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg px-4 py-3 focus:ring-1 focus:ring-red-600 focus:border-red-600 outline-none transition-all placeholder:text-zinc-600 resize-none"
              />
            </div>

            <div className="pt-2 flex gap-3 pb-2">
              <button 
                  type="button" 
                  onClick={onClose}
                  className="flex-1 py-3 px-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-medium transition-colors"
              >
                  Cancel
              </button>
              <button 
                  type="submit"
                  className="flex-1 py-3 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors shadow-lg shadow-red-900/20"
              >
                  Add Movie
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;