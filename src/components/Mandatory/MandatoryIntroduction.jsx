import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fa';
import mandatoryData from '../../data/mandatory.json';

const MandatoryIntroduction = () => {
  const { introduction = { highlights: [] } } = mandatoryData;
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">UGC & Statutory Compliance</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded mb-8"></div>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4 font-medium">{introduction.purpose}</p>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">{introduction.commitment}</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {introduction.highlights.map((item, index) => {
            const Icon = Icons[item.icon];
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl text-center shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <div className="w-16 h-16 mx-auto bg-blue-50 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 text-primary dark:text-secondary text-2xl">
                  {Icon && <Icon />}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">{item.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default MandatoryIntroduction;
