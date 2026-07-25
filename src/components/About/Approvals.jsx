import React from 'react';
import * as Icons from 'react-icons/fa';
import aboutData from '../../data/aboutCollege.json';

const Approvals = () => {
  const { approvals } = aboutData;
  return (
    <section className="py-16 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-700">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-2">Approvals & Recognition</h2>
          <p className="text-gray-500">Certified by top educational governing bodies</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {approvals.map((item) => {
            const Icon = Icons[item.logo];
            return (
              <div key={item.id} className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors group">
                <div className="text-4xl text-secondary mb-4 group-hover:scale-110 transition-transform">
                  {Icon && <Icon />}
                </div>
                <h4 className="font-bold mb-1 dark:text-white group-hover:text-white">{item.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-100">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Approvals;
