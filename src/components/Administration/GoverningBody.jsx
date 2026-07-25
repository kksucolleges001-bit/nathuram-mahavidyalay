import React from 'react';
import adminData from '../../data/administration.json';

const GoverningBody = () => {
  const { governingBody } = adminData;
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Governing Body</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">The supreme administrative and academic body responsible for guiding the institution's strategic direction.</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-4 rounded-tl-xl font-semibold">S.No</th>
                <th className="p-4 font-semibold">Member Details</th>
                <th className="p-4 font-semibold">Designation</th>
                <th className="p-4 rounded-tr-xl font-semibold">Role in Committee</th>
              </tr>
            </thead>
            <tbody className="bg-gray-50 dark:bg-gray-800">
              {governingBody.map((member, index) => (
                <tr key={member.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <td className="p-4 font-bold text-gray-500">{index + 1}</td>
                  <td className="p-4 flex items-center space-x-4">
                    <img src={member.image} alt={member.name} className="w-12 h-12 rounded-full object-cover border border-gray-300 dark:border-gray-600" />
                    <span className="font-bold text-gray-900 dark:text-white">{member.name}</span>
                  </td>
                  <td className="p-4 text-gray-700 dark:text-gray-300">{member.designation}</td>
                  <td className="p-4 text-primary dark:text-secondary font-medium">{member.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
export default GoverningBody;
