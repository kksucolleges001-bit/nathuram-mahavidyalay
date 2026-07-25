import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import admissionsData from '../../data/admissions.json';

const AdmissionHero = () => {
  const { hero } = admissionsData;
  return (
    <div className="relative h-[60vh] flex flex-col items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${hero.bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/60 dark:from-gray-900/95 dark:to-gray-900/70 mix-blend-multiply"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 mt-16 w-full max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-secondary text-primary font-bold px-4 py-1 rounded-full uppercase tracking-widest text-sm mb-6 inline-block shadow-lg"
        >
          {hero.badgeText}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center space-x-2 mb-6 text-sm font-medium text-gray-200 uppercase tracking-widest"
        >
          <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
          <FaChevronRight className="text-xs" />
          <span className="text-secondary">Admissions</span>
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
          className="text-lg md:text-xl font-light text-blue-100 max-w-2xl"
        >
          {hero.description}
        </motion.p>
      </div>
    </div>
  );
};
export default AdmissionHero;
