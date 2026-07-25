import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fa';
import admissionsData from '../../data/admissions.json';

const AdmissionOverview = () => {
  const { overview } = admissionsData;
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-secondary font-bold uppercase tracking-wider mb-2">Welcome</h4>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 dark:text-white mb-6">Why Join Our University?</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{overview.welcome}</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {overview.highlights.map((item, index) => {
            const Icon = Icons[item.icon];
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl text-center shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all group cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto bg-white dark:bg-gray-700 rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:bg-primary transition-colors">
                  {Icon && <Icon className="text-3xl text-primary dark:text-secondary group-hover:text-white transition-colors" />}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors">{item.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default AdmissionOverview;
