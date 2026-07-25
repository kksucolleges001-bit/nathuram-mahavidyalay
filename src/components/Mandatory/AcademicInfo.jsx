import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBuilding, FaUsers, FaBook, FaProjectDiagram } from 'react-icons/fa';
import mandatoryData from '../../data/mandatory.json';

const AcademicInfo = () => {
  const { academicInfo } = mandatoryData;
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Academic Information</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 text-center"
          >
            <FaBuilding className="text-4xl text-primary dark:text-secondary mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{academicInfo.departments}</h3>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Departments</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 text-center"
          >
            <FaGraduationCap className="text-4xl text-primary dark:text-secondary mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{academicInfo.programs}</h3>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Programs Offered</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 text-center"
          >
            <FaUsers className="text-4xl text-primary dark:text-secondary mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{academicInfo.intake}</h3>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Approved Intake</p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-3xl border-l-4 border-primary">
            <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-4 flex items-center"><FaProjectDiagram className="mr-3 text-primary dark:text-secondary" /> CBCS Implementation</h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{academicInfo.cbcs}</p>
          </div>
          <div className="bg-yellow-50 dark:bg-gray-800 p-8 rounded-3xl border-l-4 border-secondary">
            <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-4 flex items-center"><FaBook className="mr-3 text-secondary" /> NEP 2020 Integration</h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{academicInfo.nep}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AcademicInfo;
