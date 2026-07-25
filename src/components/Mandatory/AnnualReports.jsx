import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaDownload } from 'react-icons/fa';
import mandatoryData from '../../data/mandatory.json';

const AnnualReports = () => {
  const { reports } = mandatoryData;
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Annual & Accreditation Reports</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reports.map((report, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors flex flex-col items-center text-center group"
            >
              <FaFilePdf className="text-5xl text-danger mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-1 leading-tight">{report.title}</h3>
              <p className="text-xs text-gray-500 mb-4">{report.type} • {report.size}</p>
              <button className="flex items-center text-sm font-semibold text-primary dark:text-secondary group-hover:underline">
                <FaDownload className="mr-2" /> Download PDF
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AnnualReports;
