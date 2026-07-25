import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LightGallery from 'lightgallery/react';
import { FaSearch, FaFilter, FaExpandArrowsAlt } from 'react-icons/fa';
import galleryData from '../../data/gallery.json';

// Import LightGallery styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// Import plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const GalleryGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Extract unique categories
  const categories = ['All', ...new Set(galleryData.map(img => img.category))];

  // Filter images
  const filteredImages = galleryData.filter(img => {
    const matchesSearch = img.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          img.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || img.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="section-padding bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Complete Gallery</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center mb-12 bg-gray-50 dark:bg-gray-800 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
          
          {/* Scrollable Category Filter */}
          <div className="w-full lg:w-2/3 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex space-x-2">
              <div className="flex items-center text-gray-400 mr-2 flex-shrink-0">
                <FaFilter />
              </div>
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors flex-shrink-0 ${
                    activeCategory === cat 
                      ? 'bg-primary text-white shadow-md' 
                      : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="w-full lg:w-1/3 relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search images..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white shadow-sm"
            />
          </div>
        </div>

        {/* Masonry Grid with LightGallery */}
        {filteredImages.length > 0 ? (
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
          >
            {filteredImages.map((image) => (
              <a 
                key={image.id}
                href={image.image}
                data-sub-html={`<h4>${image.title}</h4><p>${image.description}</p>`}
                className="block break-inside-avoid group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-zoom-in"
              >
                <img 
                  src={image.image} 
                  alt={image.title} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <FaExpandArrowsAlt />
                  </div>
                  <span className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">{image.category}</span>
                  <h3 className="font-bold text-lg mb-1 leading-tight">{image.title}</h3>
                  <p className="text-sm text-gray-300 line-clamp-2">{image.description}</p>
                </div>
              </a>
            ))}
          </LightGallery>
        ) : (
          <div className="text-center py-20 bg-gray-50 dark:bg-gray-800 rounded-3xl border border-dashed border-gray-300 dark:border-gray-700">
            <FaSearch className="text-5xl text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300">No images found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;
