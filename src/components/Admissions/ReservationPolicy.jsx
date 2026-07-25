import React from 'react';
import admissionsData from '../../data/admissions.json';

const ReservationPolicy = () => {
  const { reservation } = admissionsData;
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Reservation Policy</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Seat allocation is strictly according to the norms established by the State/Central Government and UGC.</p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {reservation.map((item, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center border border-gray-100 dark:border-gray-700 hover:border-primary transition-colors group">
              <h3 className="text-4xl font-bold text-primary dark:text-secondary mb-2 group-hover:scale-110 transition-transform">{item.percentage}</h3>
              <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{item.category}</h4>
              <p className="text-xs text-gray-500">{item.notes}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ReservationPolicy;
