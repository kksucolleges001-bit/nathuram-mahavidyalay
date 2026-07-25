import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import admissionsData from '../../data/admissions.json';

const FeeStructure = () => {
  const { feeStructure, otherFees } = admissionsData;
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Fee Structure</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Program Fees */}
          <div className="w-full lg:w-2/3">
            <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 font-semibold rounded-tl-2xl">Program</th>
                    <th className="p-4 font-semibold">Tuition Fee</th>
                    <th className="p-4 font-semibold">Dev. Fee</th>
                    <th className="p-4 font-semibold">Exam Fee</th>
                    <th className="p-4 font-semibold rounded-tr-2xl bg-blue-800">Total (Per Year)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {feeStructure.map((fee, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <td className="p-4 font-bold text-gray-900 dark:text-white">{fee.program}</td>
                      <td className="p-4 text-gray-600 dark:text-gray-400">{fee.tuition}</td>
                      <td className="p-4 text-gray-600 dark:text-gray-400">{fee.development}</td>
                      <td className="p-4 text-gray-600 dark:text-gray-400">{fee.exam}</td>
                      <td className="p-4 font-bold text-primary dark:text-secondary">{fee.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button className="flex items-center text-sm font-semibold text-primary dark:text-secondary hover:underline">
                <FaDownload className="mr-2" /> Download Detailed Fee Structure PDF
              </button>
            </div>
          </div>
          
          {/* Other Fees */}
          <div className="w-full lg:w-1/3 space-y-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Hostel & Mess</h4>
              <p className="text-secondary font-bold text-xl">{otherFees.hostel}</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Transportation</h4>
              <p className="text-secondary font-bold text-xl">{otherFees.transport}</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Library Deposit</h4>
              <p className="text-secondary font-bold text-xl">{otherFees.library}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeeStructure;
