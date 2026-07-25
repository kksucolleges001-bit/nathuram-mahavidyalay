import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaBullseye } from 'react-icons/fa';
import aboutData from '../../data/aboutCollege.json';

const VisionMission = () => {
  const { visionMission } = aboutData;
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group"
          >
            <div className="absolute -right-6 -top-6 w-32 h-32 bg-blue-50 dark:bg-gray-800 rounded-full group-hover:bg-primary transition-colors duration-500"></div>
            <FaEye className="text-5xl text-primary dark:text-secondary mb-6 relative z-10 group-hover:text-white transition-colors duration-500" />
            <h3 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4 relative z-10">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed relative z-10">
              {visionMission.vision}
            </p>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group"
          >
            <div className="absolute -right-6 -top-6 w-32 h-32 bg-yellow-50 dark:bg-gray-800 rounded-full group-hover:bg-secondary transition-colors duration-500"></div>
            <FaBullseye className="text-5xl text-secondary mb-6 relative z-10 group-hover:text-white transition-colors duration-500" />
            <h3 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4 relative z-10">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed relative z-10">
              {visionMission.mission}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default VisionMission;
