import React from 'react';
import adminData from '../../data/administration.json';

const OfficeStaff = () => {
  const { staff } = adminData;
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Key Administrative Staff</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {staff.map((member) => (
            <div key={member.id} className="bg-white dark:bg-gray-900 p-6 rounded-2xl text-center border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-gray-900 dark:text-white">{member.name}</h4>
              <p className="text-sm font-medium text-primary dark:text-secondary mb-2">{member.position}</p>
              <p className="text-xs text-gray-500 mb-1">{member.department}</p>
              <p className="text-xs text-gray-500 font-semibold">{member.contact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default OfficeStaff;
