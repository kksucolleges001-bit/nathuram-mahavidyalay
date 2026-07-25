import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import adminData from '../../data/administration.json';

const AdminHero = () => {
  const { hero } = adminData;
  return (
    <div className="relative h-[50vh] flex flex-col items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${hero.bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-primary/80"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 mt-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center space-x-2 mb-6 text-sm font-medium text-gray-300 uppercase tracking-widest"
        >
          <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
          <FaChevronRight className="text-xs" />
          <span className="text-secondary">Administration</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-poppins font-extrabold mb-4"
        >
          {hero.title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl font-light text-blue-100 max-w-2xl mx-auto"
        >
          {hero.description}
        </motion.p>
      </div>
    </div>
  );
};
export default AdminHero;
