import React from 'react';
import { FaFileInvoiceDollar, FaRegChartBar, FaHandHoldingUsd, FaPiggyBank } from 'react-icons/fa';
import mandatoryData from '../../data/mandatory.json';

const FinancialInfo = () => {
  const { financials } = mandatoryData;
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Financial Transparency</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border-t-4 border-success shadow-sm flex flex-col items-center text-center">
            <FaHandHoldingUsd className="text-4xl text-success mb-4" />
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">Govt. Grants</h4>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{financials.grants}</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border-t-4 border-primary shadow-sm flex flex-col items-center text-center">
            <FaRegChartBar className="text-4xl text-primary mb-4" />
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">Research Funding</h4>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{financials.research}</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border-t-4 border-secondary shadow-sm flex flex-col items-center text-center">
            <FaFileInvoiceDollar className="text-4xl text-secondary mb-4" />
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">Scholarships</h4>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{financials.scholarships}</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border-t-4 border-danger shadow-sm flex flex-col items-center text-center">
            <FaPiggyBank className="text-4xl text-danger mb-4" />
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">Annual Budget</h4>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{financials.budget}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FinancialInfo;
