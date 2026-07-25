import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import admissionsData from '../../data/admissions.json';

const EligibilityCriteria = () => {
  const { eligibility } = admissionsData;
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">General Eligibility Criteria</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {eligibility.map((crit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col"
            >
              <div className="mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="font-bold text-2xl text-primary dark:text-secondary">{crit.level}</h3>
              </div>
              <ul className="space-y-4 flex-grow text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <FaCheckCircle className="text-success mt-1 mr-3 flex-shrink-0" />
                  <span><strong>Qualification:</strong> {crit.qualification}</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-success mt-1 mr-3 flex-shrink-0" />
                  <span><strong>Percentage:</strong> {crit.percentage}</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-success mt-1 mr-3 flex-shrink-0" />
                  <span><strong>Required Subjects:</strong> {crit.subjects}</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-success mt-1 mr-3 flex-shrink-0" />
                  <span><strong>Age Limit:</strong> {crit.age}</span>
                </li>
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default EligibilityCriteria;
