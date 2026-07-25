import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fa';
import admissionsData from '../../data/admissions.json';

const AdmissionProcess = () => {
  const { process } = admissionsData;
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Step-by-Step Admission Process</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700 transform md:-translate-x-1/2 rounded-full hidden sm:block"></div>
          
          <div className="space-y-8 relative">
            {process.map((step, index) => {
              const Icon = Icons[step.icon];
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center flex-col sm:flex-row ${isEven ? 'sm:flex-row-reverse' : ''} gap-4 sm:gap-0`}
                >
                  <div className={`w-full sm:w-1/2 p-4 flex ${isEven ? 'sm:justify-start sm:pl-12' : 'sm:justify-end sm:pr-12'}`}>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 w-full hover:border-primary dark:hover:border-secondary transition-colors text-center sm:text-left">
                      <span className="text-xs font-bold text-primary dark:text-secondary uppercase tracking-widest mb-1 block">Step {step.step}</span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center border-4 border-white dark:border-gray-800 z-10 shadow-lg flex-shrink-0 mx-auto sm:mx-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 text-2xl relative">
                    {Icon && <Icon />}
                  </div>
                  
                  <div className="w-full sm:w-1/2 hidden sm:block"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AdmissionProcess;
