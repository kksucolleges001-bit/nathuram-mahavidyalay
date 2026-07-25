import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import * as Icons from 'react-icons/fa';
import mandatoryData from '../../data/mandatory.json';

const ApprovalsRecognitions = () => {
  const { approvals } = mandatoryData;
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-2">Approvals & Recognitions</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approvals.map((approval, index) => {
            const Icon = Icons[approval.logo] || Icons.FaAward;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-shadow group flex flex-col"
              >
                <div className="flex items-center justify-between mb-4 border-b border-gray-100 dark:border-gray-800 pb-4">
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white">{approval.body}</h3>
                  <Icon className="text-3xl text-primary dark:text-secondary opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="space-y-3 mb-6 flex-grow">
                  <div>
                    <span className="text-xs text-gray-500 block uppercase tracking-wider">Status</span>
                    <span className="font-semibold text-success">{approval.status}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block uppercase tracking-wider">Approval Number</span>
                    <span className="font-medium text-gray-800 dark:text-gray-200 break-words">{approval.number}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block uppercase tracking-wider">Validity</span>
                    <span className="font-medium text-gray-800 dark:text-gray-200">{approval.validity}</span>
                  </div>
                </div>
                <button className="w-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-gray-900 text-gray-700 dark:text-gray-300 font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
                  <FaDownload className="mr-2" /> Certificate
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ApprovalsRecognitions;
