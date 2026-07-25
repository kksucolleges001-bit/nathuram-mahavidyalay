import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import mandatoryData from '../../data/mandatory.json';

const CountUpComponent = CountUp.default || CountUp;

const StudentInfo = () => {
  const { students } = mandatoryData;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="section-padding bg-primary text-white" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold mb-4">Student Demographics & Performance</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center max-w-5xl mx-auto">
          <div className="p-4 border-b md:border-b-0 md:border-r border-white/20">
            <h3 className="text-3xl font-bold text-secondary mb-1">
              {inView ? <CountUpComponent end={students.total} duration={2} separator="," /> : '0'}
            </h3>
            <p className="text-xs font-medium uppercase tracking-widest text-blue-200">Total Students</p>
          </div>
          <div className="p-4 border-b md:border-b-0 md:border-r border-white/20">
            <h3 className="text-3xl font-bold text-white mb-1">
              {inView ? <CountUpComponent end={students.ug} duration={2} separator="," /> : '0'}
            </h3>
            <p className="text-xs font-medium uppercase tracking-widest text-blue-200">UG Enrolled</p>
          </div>
          <div className="p-4 border-b md:border-b-0 lg:border-r border-white/20">
            <h3 className="text-3xl font-bold text-white mb-1">
              {inView ? <CountUpComponent end={students.pg} duration={2} separator="," /> : '0'}
            </h3>
            <p className="text-xs font-medium uppercase tracking-widest text-blue-200">PG Enrolled</p>
          </div>
          <div className="p-4 border-r border-white/20">
            <h3 className="text-3xl font-bold text-white mb-1">
              {inView ? <CountUpComponent end={students.phd} duration={2} /> : '0'}
            </h3>
            <p className="text-xs font-medium uppercase tracking-widest text-blue-200">Ph.D. Scholars</p>
          </div>
          <div className="p-4 border-r border-white/20">
            <h3 className="text-3xl font-bold text-success mb-1">{students.placementRate}</h3>
            <p className="text-xs font-medium uppercase tracking-widest text-blue-200">Placement Rate</p>
          </div>
          <div className="p-4">
            <h3 className="text-3xl font-bold text-success mb-1">{students.passPercentage}</h3>
            <p className="text-xs font-medium uppercase tracking-widest text-blue-200">Pass %</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default StudentInfo;
