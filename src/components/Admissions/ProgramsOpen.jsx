import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaClock, FaClipboardList, FaUserGraduate } from 'react-icons/fa';
import admissionsData from '../../data/admissions.json';

const ProgramsOpen = () => {
  const { programsOpen } = admissionsData;
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Programs Open for Admission</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {programsOpen.map((program, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all group flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest">{program.department}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 group-hover:text-primary dark:group-hover:text-secondary transition-colors">{program.name}</h3>
                </div>
                <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-primary dark:text-secondary shadow-sm">
                  <FaGraduationCap className="text-2xl" />
                </div>
              </div>
              
              <div className="space-y-2 mb-6 text-sm text-gray-600 dark:text-gray-300 flex-grow">
                <p className="flex items-center"><FaClock className="mr-3 text-gray-400" /> Duration: {program.duration}</p>
                <p className="flex items-center"><FaClipboardList className="mr-3 text-gray-400" /> Eligibility: {program.eligibility}</p>
                <p className="flex items-center"><FaUserGraduate className="mr-3 text-gray-400" /> Intake: {program.intake} Seats</p>
              </div>
              
              <button className="w-full bg-primary hover:bg-secondary text-white hover:text-gray-900 font-bold py-2 px-4 rounded-lg transition-colors">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProgramsOpen;
