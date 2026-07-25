import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaHeadset } from 'react-icons/fa';

const ContactHero = () => {
  return (
    <div className="relative h-[40vh] min-h-[300px] flex flex-col items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1920&q=80')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80 dark:from-gray-900/95 dark:to-gray-900/80 mix-blend-multiply"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 mt-8 w-full max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center space-x-2 mb-6 text-sm font-medium text-blue-200 uppercase tracking-widest"
        >
          <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
          <FaChevronRight className="text-xs" />
          <span className="text-secondary">Contact Us</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-poppins font-extrabold mb-6 flex items-center justify-center flex-wrap gap-4"
        >
          <FaHeadset className="text-secondary hidden md:block" />
          Get in Touch
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl font-light text-blue-100 max-w-2xl leading-relaxed"
        >
          We're here to help. Reach out to our various departments, administrative offices, or visit our beautiful campus.
        </motion.p>
      </div>
    </div>
  );
};
export default ContactHero;
