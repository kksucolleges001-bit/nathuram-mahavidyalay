import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import academicsData from '../../data/academics.json';

const AcademicHero = () => {
  const { hero } = academicsData;
  return (
    <div className="relative h-[60vh] flex flex-col items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${hero.bgImage})` }}
      >
        <div className="absolute inset-0 bg-primary/80 dark:bg-gray-900/90 mix-blend-multiply"></div>
      </div>
      
      {/* Animated geometric background overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-secondary rounded-full animate-[spin_10s_linear_infinite]"></div>
        <div className="absolute bottom-10 right-20 w-48 h-48 border-4 border-white border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 mt-16 w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center space-x-2 mb-6 text-sm font-medium text-gray-200 uppercase tracking-widest"
        >
          <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
          <FaChevronRight className="text-xs" />
          <span className="text-secondary">Academics</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-poppins font-extrabold mb-6 leading-tight"
        >
          {hero.title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl font-light text-blue-100"
        >
          {hero.description}
        </motion.p>
      </div>
    </div>
  );
};
export default AcademicHero;
