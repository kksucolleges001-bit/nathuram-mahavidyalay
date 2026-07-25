import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import galleryData from '../../data/gallery.json';

const CountUpComponent = CountUp.default || CountUp;

const GalleryStatistics = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  
  // Dynamic calculation based on JSON
  const totalImages = galleryData.length;
  
  const stats = [
    { label: "Total Images", value: totalImages + 500, suffix: "+" },
    { label: "Events Covered", value: 120, suffix: "+" },
    { label: "Departments", value: 15, suffix: "" },
    { label: "Sports Activities", value: 45, suffix: "+" }
  ];

  return (
    <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-gray-200 dark:divide-gray-700 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="px-4">
              <h3 className="text-4xl font-poppins font-extrabold text-primary dark:text-secondary mb-2">
                {inView ? <CountUpComponent end={stat.value} duration={2} /> : '0'}{stat.suffix}
              </h3>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default GalleryStatistics;
