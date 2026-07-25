import React from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt } from 'react-icons/fa';
import admissionsData from '../../data/admissions.json';

const RequiredDocuments = () => {
  const { documents } = admissionsData;
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/3">
            <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Required Documents</h2>
            <div className="w-24 h-1 bg-secondary rounded mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Please ensure you have both original and two sets of self-attested photocopies of the following documents at the time of admission and counseling.
            </p>
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-2xl border-l-4 border-primary">
              <h4 className="font-bold text-primary dark:text-secondary mb-2">Important Note</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Any discrepancy in documents may lead to cancellation of admission at any stage.</p>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {documents.map((doc, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-primary transition-colors group"
                >
                  <FaFileAlt className="text-gray-400 group-hover:text-secondary mr-4 text-xl flex-shrink-0" />
                  <span className="font-medium text-sm text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-white">{doc}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RequiredDocuments;
