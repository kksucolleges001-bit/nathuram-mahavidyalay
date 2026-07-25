import React from 'react';
import adminData from '../../data/administration.json';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaAmbulance } from 'react-icons/fa';

const AdminContact = () => {
  const { contact } = adminData;
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Contact Administration</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl flex items-start space-x-4 border border-gray-100 dark:border-gray-700">
            <FaMapMarkerAlt className="text-2xl text-primary dark:text-secondary mt-1 shrink-0" />
            <div className="min-w-0 flex-1">
              <h4 className="font-bold text-gray-900 dark:text-white mb-1">Office Address</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm break-words">{contact.address}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl flex items-start space-x-4 border border-gray-100 dark:border-gray-700">
              <FaPhoneAlt className="text-2xl text-primary dark:text-secondary mt-1 shrink-0" />
              <div className="min-w-0 flex-1">
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Phone</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm break-words">{contact.phone}</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl flex items-start space-x-4 border border-gray-100 dark:border-gray-700">
              <FaEnvelope className="text-2xl text-primary dark:text-secondary mt-1 shrink-0" />
              <div className="min-w-0 flex-1">
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Email</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm break-all">{contact.email}</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl flex items-start space-x-4 border border-gray-100 dark:border-gray-700">
              <FaClock className="text-2xl text-primary dark:text-secondary mt-1 shrink-0" />
              <div className="min-w-0 flex-1">
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Working Hours</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm break-words">{contact.workingHours}</p>
              </div>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl flex items-start space-x-4 border border-red-100 dark:border-red-900">
              <FaAmbulance className="text-2xl text-danger mt-1 shrink-0" />
              <div className="min-w-0 flex-1">
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Emergency</h4>
                <p className="text-danger font-bold text-sm break-words">{contact.emergencyContact}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AdminContact;
