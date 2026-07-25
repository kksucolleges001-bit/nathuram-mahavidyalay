import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaImages } from 'react-icons/fa';

const GalleryHero = () => {
  return (
    <div className="relative h-[45vh] min-h-[350px] flex flex-col items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80 dark:from-gray-900/95 dark:to-gray-900/80 mix-blend-multiply"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 mt-12 w-full max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center space-x-2 mb-6 text-sm font-medium text-blue-200 uppercase tracking-widest"
        >
          <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
          <FaChevronRight className="text-xs" />
          <span className="text-secondary">Gallery</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-poppins font-extrabold mb-6 flex items-center justify-center flex-wrap gap-4"
        >
          <FaImages className="text-secondary hidden md:block" />
          Campus Gallery
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl font-light text-blue-100 max-w-2xl leading-relaxed"
        >
          Explore the vibrant campus life, academic excellence, state-of-the-art infrastructure, and memorable events through our lens.
        </motion.p>
      </div>
    </div>
  );
};
export default GalleryHero;
