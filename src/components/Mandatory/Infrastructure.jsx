import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkedAlt, FaLaptop, FaBookReader, FaBed } from 'react-icons/fa';
import mandatoryData from '../../data/mandatory.json';

const Infrastructure = () => {
  const { infrastructure } = mandatoryData;
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Infrastructure & Facilities</h2>
            <div className="w-24 h-1 bg-secondary rounded mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              We provide state-of-the-art infrastructure to ensure an optimal learning environment for our students.
            </p>
          </div>
          
          <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm text-center border border-gray-100 dark:border-gray-700">
              <FaMapMarkedAlt className="text-3xl text-primary dark:text-secondary mx-auto mb-3" />
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{infrastructure.area}</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Campus Area</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm text-center border border-gray-100 dark:border-gray-700">
              <FaLaptop className="text-3xl text-primary dark:text-secondary mx-auto mb-3" />
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{infrastructure.labs}</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Laboratories</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm text-center border border-gray-100 dark:border-gray-700">
              <FaBookReader className="text-3xl text-primary dark:text-secondary mx-auto mb-3" />
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 text-sm">{infrastructure.libraryBooks}</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Library Books</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm text-center border border-gray-100 dark:border-gray-700">
              <FaBed className="text-3xl text-primary dark:text-secondary mx-auto mb-3" />
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{infrastructure.hostels}</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Hostel Blocks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Infrastructure;
