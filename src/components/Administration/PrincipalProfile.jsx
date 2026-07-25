import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaAward, FaDownload } from 'react-icons/fa';
import adminData from '../../data/administration.json';

const PrincipalProfile = () => {
  const { principal } = adminData;
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
          <div className="flex flex-col lg:flex-row">
            {/* Image side */}
            <div className="w-full lg:w-1/3 bg-gradient-to-br from-primary to-blue-900 p-8 flex flex-col items-center justify-center text-center">
              <div className="w-48 h-48 rounded-full border-4 border-white/30 overflow-hidden mb-6 shadow-2xl">
                <img src={principal.image} alt={principal.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{principal.name}</h3>
              <p className="text-secondary font-medium uppercase tracking-wide mb-4">{principal.designation}</p>
              <div className="space-y-2 text-sm text-blue-100 mb-6">
                <p className="flex items-center justify-center"><FaEnvelope className="mr-2" /> {principal.email}</p>
                <p className="flex items-center justify-center"><FaPhone className="mr-2" /> {principal.phone}</p>
              </div>
              <button className="flex items-center text-sm font-medium bg-white/20 hover:bg-white/30 text-white py-2 px-6 rounded-full transition-colors">
                <FaDownload className="mr-2" /> Download Profile
              </button>
            </div>
            
            {/* Content side */}
            <div className="w-full lg:w-2/3 p-8 lg:p-12">
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">Academic Background</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Qualification</p>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">{principal.qualification}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">{principal.experience}</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">Principal's Message</h4>
                <p className="text-gray-600 dark:text-gray-400 italic">"{principal.message}"</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">Research Interests</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                    {principal.researchInterests.map((interest, idx) => (
                      <li key={idx}>{interest}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">Awards & Honors</h4>
                  <ul className="space-y-2">
                    {principal.awards.map((award, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 dark:text-gray-400">
                        <FaAward className="text-secondary mt-1 mr-2 flex-shrink-0" />
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PrincipalProfile;
