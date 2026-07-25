import React from 'react';
import { FaFilePdf, FaUniversity } from 'react-icons/fa';
import mandatoryData from '../../data/mandatory.json';

const AffiliationDetails = () => {
  const { affiliation } = mandatoryData;
  return (
    <section className="py-12 bg-primary text-white border-y border-blue-900">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-secondary text-primary rounded-full flex items-center justify-center text-3xl flex-shrink-0">
              <FaUniversity />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Affiliating University</h3>
              <p className="text-2xl font-poppins font-extrabold text-secondary">{affiliation.university}</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 items-center lg:items-end">
            <div className="text-center sm:text-left">
              <span className="text-xs text-blue-200 uppercase tracking-widest block mb-1">Affiliation Letter No.</span>
              <span className="font-bold text-lg">{affiliation.letterNo}</span>
            </div>
            <div className="text-center sm:text-left">
              <span className="text-xs text-blue-200 uppercase tracking-widest block mb-1">Academic Year</span>
              <span className="font-bold text-lg">{affiliation.academicYear}</span>
            </div>
            <button className="flex items-center bg-white text-primary hover:bg-secondary hover:text-gray-900 px-6 py-3 rounded-xl font-bold transition-colors shadow-lg">
              <FaFilePdf className="mr-2 text-danger" /> View Letter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AffiliationDetails;
