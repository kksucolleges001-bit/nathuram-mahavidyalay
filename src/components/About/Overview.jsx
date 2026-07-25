import React from 'react';
import { motion } from 'framer-motion';
import aboutData from '../../data/aboutCollege.json';
import { FaBuilding, FaUsers, FaChalkboardTeacher, FaUniversity } from 'react-icons/fa';

const Overview = () => {
  const { overview } = aboutData;
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h4 className="text-secondary font-bold uppercase tracking-wider mb-2">College Profile</h4>
            <h2 className="text-4xl font-poppins font-bold text-gray-900 dark:text-white mb-6">A Legacy of Excellence Since {overview.established}</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {overview.introduction}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {overview.history}
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                <FaUniversity className="text-3xl text-primary dark:text-secondary" />
                <div>
                  <h4 className="font-bold dark:text-white">Affiliation</h4>
                  <p className="text-sm text-gray-500">{overview.affiliated}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                <FaBuilding className="text-3xl text-primary dark:text-secondary" />
                <div>
                  <h4 className="font-bold dark:text-white">Campus</h4>
                  <p className="text-sm text-gray-500">{overview.campusArea}</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Campus Overview" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center space-x-6 animate-bounce" style={{animationDuration: '3s'}}>
              <div className="text-center">
                <FaUsers className="text-3xl text-secondary mx-auto mb-2" />
                <h4 className="font-bold text-xl dark:text-white">{overview.studentStrength}</h4>
                <p className="text-xs text-gray-500 uppercase">Students</p>
              </div>
              <div className="w-px h-16 bg-gray-200 dark:bg-gray-700"></div>
              <div className="text-center">
                <FaChalkboardTeacher className="text-3xl text-primary mx-auto mb-2" />
                <h4 className="font-bold text-xl dark:text-white">{overview.facultyCount}</h4>
                <p className="text-xs text-gray-500 uppercase">Faculty</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Overview;
