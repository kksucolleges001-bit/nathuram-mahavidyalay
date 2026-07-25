import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import mandatoryData from '../../data/mandatory.json';

const CountUpComponent = CountUp.default || CountUp;

const FacultyInfo = () => {
  const { faculty } = mandatoryData;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Faculty Information</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="p-8 text-center border-b border-gray-100 dark:border-gray-800 bg-gradient-to-r from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
            <h3 className="text-sm font-bold text-primary dark:text-secondary uppercase tracking-widest mb-2">Total Faculty Strength</h3>
            <div className="text-6xl font-poppins font-extrabold text-gray-900 dark:text-white">
              {inView ? <CountUpComponent end={faculty.total} duration={2} /> : '0'}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100 dark:divide-gray-800">
            <div className="p-6 text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {inView ? <CountUpComponent end={faculty.professors} duration={2} /> : '0'}
              </div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Professors</div>
            </div>
            <div className="p-6 text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {inView ? <CountUpComponent end={faculty.associate} duration={2} /> : '0'}
              </div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Associate Prof.</div>
            </div>
            <div className="p-6 text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {inView ? <CountUpComponent end={faculty.assistant} duration={2} /> : '0'}
              </div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Assistant Prof.</div>
            </div>
            <div className="p-6 text-center bg-blue-50 dark:bg-gray-800/50">
              <div className="text-3xl font-bold text-primary dark:text-secondary mb-1">
                {inView ? <CountUpComponent end={faculty.phdHolders} duration={2} /> : '0'}
              </div>
              <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-widest">Ph.D. Holders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FacultyInfo;
