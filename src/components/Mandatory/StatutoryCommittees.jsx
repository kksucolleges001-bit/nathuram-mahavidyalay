import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaUserTie } from 'react-icons/fa';
import mandatoryData from '../../data/mandatory.json';

const StatutoryCommittees = () => {
  const { committees } = mandatoryData;
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Statutory Committees</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {committees.map((committee, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row gap-6 items-center sm:items-start"
            >
              <div className="w-16 h-16 bg-blue-50 dark:bg-gray-800 rounded-full flex items-center justify-center text-primary dark:text-secondary text-2xl flex-shrink-0">
                <FaUsers />
              </div>
              <div className="flex-grow text-center sm:text-left">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">{committee.name}</h3>
                <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <p className="flex items-center justify-center sm:justify-start"><FaUserTie className="mr-2" /> Coordinator: {committee.coordinator}</p>
                  <p>Members: {committee.members}</p>
                  <p>Meeting Frequency: {committee.frequency}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StatutoryCommittees;
