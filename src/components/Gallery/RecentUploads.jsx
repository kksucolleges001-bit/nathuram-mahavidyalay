import React from 'react';
import { motion } from 'framer-motion';
import galleryData from '../../data/gallery.json';

const RecentUploads = () => {
  // Sort by date (newest first) and take top 4
  const recentImages = [...galleryData].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 4);

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8 border-b border-gray-100 dark:border-gray-800 pb-4">
          <h2 className="text-2xl font-poppins font-bold text-gray-900 dark:text-white">Recent Uploads</h2>
          <span className="text-sm font-semibold text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">Newest First</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {recentImages.map((image, index) => (
            <motion.div 
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden aspect-square shadow-sm"
            >
              <img 
                src={image.image} 
                alt={image.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                <span className="text-xs text-secondary font-bold uppercase tracking-wider">{image.date}</span>
                <h4 className="text-white font-semibold text-sm leading-tight mt-1 line-clamp-1">{image.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default RecentUploads;
