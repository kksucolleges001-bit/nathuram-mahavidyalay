import React from 'react';
import { FaMapMarkerAlt, FaClock, FaDirections } from 'react-icons/fa';
import contactData from '../../data/contact.json';

const CollegeAddressMap = () => {
  const { address, workingHours } = contactData;
  const directionsUrl = address.googleMapsUrl || address.mapUrl || 'https://maps.google.com';

  return (
    <section className="section-padding bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 p-8 md:p-12">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Locate Us</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-primary dark:text-secondary text-2xl mr-4 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Campus Address</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {address.street}<br />  
                  {address.city}, {address.state}<br />
                  {address.country} - {address.pinCode}
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FaClock className="text-primary dark:text-secondary text-2xl mr-4 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Office Timings</h4>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                  <li><span className="font-semibold w-24 inline-block">Mon - Fri:</span> {workingHours.weekdays}</li>
                  <li><span className="font-semibold w-24 inline-block">Saturday:</span> {workingHours.saturday}</li>
                  <li><span className="font-semibold w-24 inline-block">Sunday:</span> <span className="text-danger font-medium">{workingHours.sunday}</span></li>
                </ul>
                <p className="text-xs text-gray-500 mt-2 italic">{workingHours.note}</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a 
              href={directionsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary hover:bg-secondary hover:text-gray-900 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-md"
            >
              <FaDirections className="mr-2" /> Get Directions
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CollegeAddressMap;