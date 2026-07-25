import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarCheck, FaClock } from 'react-icons/fa';
import admissionsData from '../../data/admissions.json';

const ImportantDates = () => {
  const { dates } = admissionsData;
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Important Dates (2026-27)</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>
        
        <div className="space-y-6">
          {dates.map((dateObj, index) => {
            const isCompleted = dateObj.status === 'completed';
            const isActive = dateObj.status === 'active';
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl border ${isActive ? 'bg-blue-50 dark:bg-gray-800 border-primary shadow-md' : 'bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-700 shadow-sm'} transition-colors`}
              >
                <div className="flex items-center mb-4 sm:mb-0">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${isCompleted ? 'bg-success text-white' : isActive ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-400'}`}>
                    {isCompleted ? <FaCalendarCheck /> : <FaClock />}
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${isActive ? 'text-primary dark:text-secondary' : 'text-gray-900 dark:text-white'}`}>{dateObj.event}</h3>
                    {isActive && <span className="text-xs bg-danger text-white px-2 py-1 rounded-full uppercase tracking-widest mt-1 inline-block animate-pulse">Action Required</span>}
                  </div>
                </div>
                <div className={`font-semibold sm:text-right ${isActive ? 'text-primary dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                  {dateObj.date}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ImportantDates;
