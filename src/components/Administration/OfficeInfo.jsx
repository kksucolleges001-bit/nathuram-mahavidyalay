import React from 'react';
import adminData from '../../data/administration.json';
import { FaClock, FaCalendarAlt, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';

const OfficeInfo = () => {
  const { officeInfo } = adminData;
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Administrative Office</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-blue-50 dark:bg-gray-800 rounded-xl border border-blue-100 dark:border-gray-700 flex items-start space-x-4">
            <FaClock className="text-3xl text-primary dark:text-secondary mt-1" />
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">Office Timings</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{officeInfo.timings}</p>
            </div>
          </div>
          <div className="p-6 bg-blue-50 dark:bg-gray-800 rounded-xl border border-blue-100 dark:border-gray-700 flex items-start space-x-4">
            <FaCalendarAlt className="text-3xl text-primary dark:text-secondary mt-1" />
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">Working Days</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{officeInfo.workingDays}</p>
            </div>
          </div>
          <div className="p-6 bg-blue-50 dark:bg-gray-800 rounded-xl border border-blue-100 dark:border-gray-700 flex items-start space-x-4">
            <FaPhoneAlt className="text-3xl text-primary dark:text-secondary mt-1" />
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">Contact</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{officeInfo.contact}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{officeInfo.email}</p>
            </div>
          </div>
          <div className="p-6 bg-blue-50 dark:bg-gray-800 rounded-xl border border-blue-100 dark:border-gray-700 flex items-start space-x-4 lg:col-span-2">
            <FaMapMarkerAlt className="text-3xl text-primary dark:text-secondary mt-1" />
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">Location</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{officeInfo.location}</p>
            </div>
          </div>
          <div className="p-6 bg-blue-50 dark:bg-gray-800 rounded-xl border border-blue-100 dark:border-gray-700 flex items-start space-x-4">
            <FaInfoCircle className="text-3xl text-primary dark:text-secondary mt-1" />
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">Reception</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{officeInfo.reception}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OfficeInfo;
