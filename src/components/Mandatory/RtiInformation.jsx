import React from 'react';
import { FaInfoCircle, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import mandatoryData from '../../data/mandatory.json';

const RtiInformation = () => {
  const { rti } = mandatoryData;
  return (
    <section className="section-padding bg-primary text-white border-y border-blue-900">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/20">
          <div className="w-full lg:w-1/3">
            <h2 className="text-3xl font-poppins font-bold mb-4 flex items-center"><FaInfoCircle className="mr-3 text-secondary" /> Right To Information (RTI)</h2>
            <div className="w-16 h-1 bg-secondary rounded mb-6"></div>
            <p className="text-blue-100 leading-relaxed text-sm">
              The institution is committed to transparency and accountability as per the Right to Information Act, 2005. 
              Citizens can request information by applying to the Public Information Officer (PIO).
            </p>
          </div>
          
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <span className="text-xs text-secondary uppercase tracking-widest block mb-1">Public Information Officer</span>
              <h3 className="text-xl font-bold mb-2">{rti.pio}</h3>
              <p className="text-sm text-blue-200 flex items-center mt-2"><FaEnvelope className="mr-2" /> {rti.email}</p>
              <p className="text-sm text-blue-200 flex items-center mt-1"><FaPhoneAlt className="mr-2" /> {rti.phone}</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <span className="text-xs text-secondary uppercase tracking-widest block mb-1">Appellate Authority</span>
              <h3 className="text-xl font-bold mb-2">{rti.appellateAuthority}</h3>
              <button className="mt-4 bg-secondary text-primary hover:bg-white font-bold py-2 px-4 rounded-lg transition-colors text-sm w-full">
                Download RTI Form
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RtiInformation;
