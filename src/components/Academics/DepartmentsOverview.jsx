import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fa';
import academicsData from '../../data/academics.json';

const DepartmentsOverview = () => {
  const { departments } = academicsData;
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Academic Departments</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {departments.map((dept, index) => {
            const Icon = Icons[dept.icon];
            return (
              <motion.div 
                key={dept.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col sm:flex-row bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 dark:border-gray-700 transition-all group"
              >
                <div className="w-full sm:w-2/5 h-48 sm:h-auto overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={dept.image} alt={dept.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="w-full sm:w-3/5 p-6 flex flex-col">
                  <div className="flex items-center mb-3">
                    {Icon && <Icon className="text-2xl text-secondary mr-3" />}
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white leading-tight">{dept.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">{dept.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-xs font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
                    <div className="text-center border-r border-gray-200 dark:border-gray-700">
                      <span className="block text-primary dark:text-secondary text-lg">{dept.facultyCount}</span>
                      Faculty
                    </div>
                    <div className="text-center">
                      <span className="block text-primary dark:text-secondary text-lg">{dept.labsCount}</span>
                      Laboratories
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {dept.programs.map((prog, idx) => (
                      <span key={idx} className="text-xs bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-blue-300 px-2 py-1 rounded">
                        {prog}
                      </span>
                    ))}
                  </div>
                  
                  <button className="text-sm font-bold text-primary dark:text-secondary hover:underline self-start mt-auto">
                    View Department &rarr;
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default DepartmentsOverview;
