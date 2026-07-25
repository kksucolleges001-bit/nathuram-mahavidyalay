import React from 'react';
import { motion } from 'framer-motion';
import adminData from '../../data/administration.json';

const AdminOverview = () => {
  const { overview } = adminData;
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h4 className="text-secondary font-bold uppercase tracking-wider mb-2">Overview</h4>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 dark:text-white mb-6">Administrative Philosophy</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed border-l-4 border-primary pl-4">
              {overview.introduction}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-xl text-primary dark:text-secondary mb-2">Vision of Leadership</h3>
              <p className="text-gray-600 dark:text-gray-400">{overview.vision}</p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-xl text-primary dark:text-secondary mb-2">Governance Model</h3>
              <p className="text-gray-600 dark:text-gray-400">{overview.governanceModel}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default AdminOverview;
