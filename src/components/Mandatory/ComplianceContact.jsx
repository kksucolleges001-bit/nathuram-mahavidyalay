import React from 'react';
import { FaUserTie, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';
import mandatoryData from '../../data/mandatory.json';

const ComplianceContact = () => {
  const { contact } = mandatoryData;
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Compliance Office</h2>
            <div className="w-24 h-1 bg-secondary rounded mb-8"></div>
            
            <div className="space-y-6">
              <div className="flex items-start p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                <FaUserTie className="text-primary dark:text-secondary text-2xl mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Nodal Officer</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{contact.officer}</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                <FaMapMarkerAlt className="text-primary dark:text-secondary text-2xl mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Office Location</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{contact.address}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                  <FaPhoneAlt className="text-primary dark:text-secondary mr-3 mt-1" />
                  <p className="text-sm text-gray-700 dark:text-gray-300 font-semibold">{contact.phone}</p>
                </div>
                <div className="flex items-start p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                  <FaEnvelope className="text-primary dark:text-secondary mr-3 mt-1" />
                  <p className="text-sm text-gray-700 dark:text-gray-300 truncate">{contact.email}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 min-h-[300px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 bg-gray-200">
             <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.56!2d77.2273!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMTMnMzguMyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Compliance Office Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ComplianceContact;
