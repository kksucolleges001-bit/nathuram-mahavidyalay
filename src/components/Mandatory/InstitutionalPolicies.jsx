import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fa';
import mandatoryData from '../../data/mandatory.json';

const InstitutionalPolicies = () => {
  const { policies } = mandatoryData;
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Institutional Policies</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {policies.map((policy, index) => {
            const Icon = Icons[policy.icon] || Icons.FaFileAlt;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-primary text-center group cursor-pointer transition-colors"
              >
                <Icon className="text-3xl text-gray-400 group-hover:text-primary dark:group-hover:text-secondary mx-auto mb-3 transition-colors" />
                <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200 leading-tight">{policy.title}</h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default InstitutionalPolicies;
