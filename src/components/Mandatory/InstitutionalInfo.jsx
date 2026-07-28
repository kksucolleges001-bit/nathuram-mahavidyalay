import React from 'react';
import { FaBuilding, FaMapMarkerAlt, FaEnvelope, FaGlobe, FaPhoneAlt } from 'react-icons/fa';
import mandatoryData from '../../data/mandatory.json';

const InstitutionalInfo = () => {
  const { institutionalInfo } = mandatoryData;
  return (
    <section className="section-padding bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-2">Institutional Information</h2>
          <div className="w-16 h-1 bg-secondary rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-primary dark:text-secondary mb-6 flex items-center"><FaBuilding className="mr-3" /> Basic Details</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-b border-gray-200 dark:border-gray-700 pb-4">
                <span className="text-gray-500 font-medium">Institution Name</span>
                <span className="sm:col-span-2 font-bold text-gray-900 dark:text-white">{institutionalInfo.name}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-b border-gray-200 dark:border-gray-700 pb-4">
                <span className="text-gray-500 font-medium">Est. Year / Type</span>
                <span className="sm:col-span-2 font-bold text-gray-900 dark:text-white">{institutionalInfo.establishment} • {institutionalInfo.type}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-b border-gray-200 dark:border-gray-700 pb-4">
                <span className="text-gray-500 font-medium">AISHE Code</span>
                <span className="sm:col-span-2 font-bold text-danger">C-68450</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-b border-gray-200 dark:border-gray-700 pb-4">
                <span className="text-gray-500 font-medium">UGC Rec. No.</span>
                <span className="sm:col-span-2 font-bold text-success">{institutionalInfo.ugcNumber}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-b border-gray-200 dark:border-gray-700 pb-4">
                <span className="text-gray-500 font-medium">Principal</span>
                <span className="sm:col-span-2 font-bold text-gray-900 dark:text-white">Dr. Yogesh Vinayakrao Ghuge</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="text-gray-500 font-medium">Management</span>
                <span className="sm:col-span-2 font-bold text-gray-900 dark:text-white">Gramin Yuvak Pratishthan</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-primary text-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center text-secondary"><FaMapMarkerAlt className="mr-3" /> Contact & Location</h3>
              <div className="space-y-4">
                <p className="flex items-start"><FaMapMarkerAlt className="mt-1 mr-3 text-secondary" /> <span>{institutionalInfo.address}<br/>Campus Area: {institutionalInfo.campusArea}</span></p>
                <p className="flex items-center"><FaPhoneAlt className="mr-3 text-secondary" />7744882353 / 7378835218</p>
                <p className="flex items-center"><FaEnvelope className="mr-3 text-secondary" />shrinathurammcollegekehal@gmail.com</p>
                <p className="flex items-center"><FaGlobe className="mr-3 text-secondary" /> <a href="https://kksucollege.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">https://kksucollege.netlify.app/</a></p>
              </div>
            </div>
            
            <div className="flex-grow rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-200 min-h-[200px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.56!2d77.2273!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMTMnMzguMyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Institution Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default InstitutionalInfo;
