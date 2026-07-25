import React from 'react';
import { motion } from 'framer-motion';
import homeData from '../../data/homeData.json';

const HeroSection = () => {
  const { hero } = homeData;
  return (
    <div className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero.bgImages[0]})` }}
      >
        <div className="absolute inset-0 bg-black/60 dark:bg-black/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center space-x-4 mb-4 text-sm font-bold text-secondary uppercase tracking-widest flex-wrap gap-y-2"
        >
          <span>{hero.naacGrade}</span>
          <span className="hidden md:inline">|</span>
          <span>{hero.aisheCode}</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-poppins font-extrabold mb-4 text-white drop-shadow-lg px-2"
        >
          {hero.collegeName}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-base md:text-xl lg:text-2xl mb-2 font-medium px-4"
        >
          {hero.affiliated}
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-sm md:text-base text-gray-300 mb-8"
        >
          {hero.ugcRecognition}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          {/* <button className="btn-primary py-3 px-8 text-lg hover:scale-105 transform">Apply Now</button>
          <button className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-md font-medium text-lg hover:bg-white hover:text-primary transition-colors hover:scale-105 transform">Explore Campus</button> */}
        </motion.div>
      </div>
    </div>
  );
};
export default HeroSection;
