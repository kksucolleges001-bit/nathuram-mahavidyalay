import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaShieldAlt } from 'react-icons/fa';
import mandatoryData from '../../data/mandatory.json';

const MandatoryHero = () => {
  const { hero } = mandatoryData;
  return (
    <div className="relative h-[50vh] min-h-[400px] flex flex-col items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${hero.bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/80 mix-blend-multiply"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 mt-16 w-full max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center space-x-2 mb-6 text-sm font-medium text-gray-300 uppercase tracking-widest"
        >
          <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
          <FaChevronRight className="text-xs" />
          <span className="text-secondary">Mandatory Disclosure</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-poppins font-extrabold mb-6 flex items-center justify-center flex-wrap gap-4"
        >
          <FaShieldAlt className="text-secondary hidden md:block" />
          {hero.title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl font-light text-gray-200 max-w-3xl mb-8 leading-relaxed"
        >
          {hero.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {(hero.badges || []).map((badge, index) => (
            <span key={index} className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default MandatoryHero;
