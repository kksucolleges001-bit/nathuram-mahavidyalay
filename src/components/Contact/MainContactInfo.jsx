import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fa';
import contactData from '../../data/contact.json';

const MainContactInfo = () => {
  const { mainOffices } = contactData;

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Core Administrative Offices</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainOffices.map((office, index) => {
            const IconComponent = Icons[office.icon] || Icons.FaBuilding;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow group flex items-start"
              >
                <div className="w-14 h-14 bg-blue-50 dark:bg-gray-800 rounded-full flex items-center justify-center text-primary dark:text-secondary text-2xl mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <IconComponent />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 leading-tight">{office.name}</h3>
                  <div className="space-y-1 text-sm">
                    <p className="flex items-center text-gray-600 dark:text-gray-400">
                      <Icons.FaPhoneAlt className="mr-2 text-gray-400" /> {office.phone}
                    </p>
                    <p className="flex items-center text-gray-600 dark:text-gray-400">
                      <Icons.FaEnvelope className="mr-2 text-gray-400" /> 
                      <a href={`mailto:${office.email}`} className="hover:text-primary dark:hover:text-secondary transition-colors">{office.email}</a>
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default MainContactInfo;
