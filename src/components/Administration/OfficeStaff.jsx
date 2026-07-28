import React from 'react';
import adminData from '../../data/administration.json';

const OfficeStaff = () => {
  const { staff } = adminData;
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">College Staff</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {staff.map((member) => (
            <div key={member.id} className="bg-white dark:bg-gray-900 p-6 rounded-2xl text-center border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full border-4 border-gray-50 dark:border-gray-800 shadow-inner bg-gray-100 flex items-center justify-center">
                <img 
                  src={member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random&size=256`} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                  onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random&size=256` }}
                />
              </div>
              <h4 className="font-bold text-lg text-gray-900 dark:text-white">{member.name}</h4>
              <p className="text-sm font-semibold text-primary dark:text-secondary mb-1">{member.position}</p>
              <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-3">{member.department}</p>
              
              <div className="flex flex-col items-center gap-1 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                {member.contact && (
                  <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary dark:text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    {member.contact}
                  </p>
                )}
                {member.email && (
                  <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary dark:text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    {member.email}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default OfficeStaff;
