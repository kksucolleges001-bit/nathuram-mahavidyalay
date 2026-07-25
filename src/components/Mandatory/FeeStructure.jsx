import React from 'react';
import mandatoryData from '../../data/mandatory.json';

const FeeStructure = () => {
  const { fees } = mandatoryData;
  return (
    <section className="section-padding bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Mandatory Fee Disclosure</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>
        
        <div className="overflow-x-auto bg-gray-50 dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-5 font-semibold">Course Name</th>
                <th className="p-5 font-semibold">Tuition Fee (Yr)</th>
                <th className="p-5 font-semibold">Hostel Fee (Yr)</th>
                <th className="p-5 font-semibold">Other Charges</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {fees.map((fee, index) => (
                <tr key={index} className="hover:bg-white dark:hover:bg-gray-900 transition-colors">
                  <td className="p-5 font-bold text-gray-900 dark:text-white">{fee.course}</td>
                  <td className="p-5 text-gray-700 dark:text-gray-300">{fee.tuition}</td>
                  <td className="p-5 text-gray-700 dark:text-gray-300">{fee.hostel}</td>
                  <td className="p-5 text-gray-700 dark:text-gray-300">{fee.other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
export default FeeStructure;
