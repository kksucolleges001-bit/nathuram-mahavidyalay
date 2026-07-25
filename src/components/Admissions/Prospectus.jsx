import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaBookOpen } from 'react-icons/fa';
import admissionsData from '../../data/admissions.json';

const Prospectus = () => {
  const { prospectus } = admissionsData;
  if (!prospectus) return null;
  return (
    <section className="section-padding bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
      <div className="container-custom">
        <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-12 flex flex-col justify-center text-white">
            <h4 className="text-secondary font-bold uppercase tracking-wider mb-2 flex items-center"><FaBookOpen className="mr-2" /> Official Publication</h4>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">{prospectus.title}</h2>
            <p className="text-blue-100 mb-8 leading-relaxed">{prospectus.description}</p>
            <button className="self-start flex items-center bg-white text-primary font-bold py-3 px-8 rounded-xl hover:bg-secondary hover:text-gray-900 transition-colors shadow-lg">
              <FaDownload className="mr-2" /> Download E-Prospectus
            </button>
          </div>
          <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-200">
            <img src={prospectus.coverImage} alt="Prospectus Cover" className="w-full h-full object-cover mix-blend-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Prospectus;
