import React from 'react';
import highlights from '../../data/highlights.json';
import * as Icons from 'react-icons/fa';

const CampusHighlights = () => {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Campus Highlights</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item) => {
            const Icon = Icons[item.icon];
            return (
              <div key={item.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 group">
                <div className="w-16 h-16 bg-blue-50 dark:bg-gray-700 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  {Icon && <Icon className="text-2xl text-primary dark:text-secondary group-hover:text-white" />}
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default CampusHighlights;
