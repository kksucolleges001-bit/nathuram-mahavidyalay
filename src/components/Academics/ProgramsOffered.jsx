import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaUserGraduate, FaUsers, FaBookOpen } from 'react-icons/fa';
import academicsData from '../../data/academics.json';

const ProgramsOffered = () => {
  const { programs } = academicsData;
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Programs Offered</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, index) => (
            <motion.div 
              key={prog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all flex flex-col h-full group"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-gray-800 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <FaBookOpen className="text-2xl text-primary dark:text-secondary group-hover:text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4 leading-tight">{prog.name}</h3>
              
              <div className="space-y-3 mb-6 flex-grow text-sm text-gray-600 dark:text-gray-400">
                <p className="flex items-center"><FaClock className="mr-3 text-secondary" /> Duration: {prog.duration}</p>
                <p className="flex items-center"><FaUserGraduate className="mr-3 text-secondary" /> {prog.eligibility}</p>
                <p className="flex items-center"><FaUsers className="mr-3 text-secondary" /> Intake: {prog.intake}</p>
              </div>
              
              <button className="w-full mt-auto py-2 px-4 rounded-lg border border-primary text-primary dark:text-white font-semibold hover:bg-primary hover:text-white transition-colors">
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProgramsOffered;
