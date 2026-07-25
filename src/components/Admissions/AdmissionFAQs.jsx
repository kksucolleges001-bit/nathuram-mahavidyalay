import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import admissionsData from '../../data/admissions.json';

const AdmissionFAQs = () => {
  const { faqs } = admissionsData;
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Admissions FAQs</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className={`rounded-xl border ${openIndex === index ? 'border-primary dark:border-secondary shadow-md' : 'border-gray-200 dark:border-gray-700 shadow-sm'} overflow-hidden transition-all bg-white dark:bg-gray-900`}>
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 font-bold text-gray-900 dark:text-white flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none"
              >
                {faq.question}
                {openIndex === index ? <FaChevronUp className="text-primary dark:text-secondary flex-shrink-0 ml-4" /> : <FaChevronDown className="text-gray-400 flex-shrink-0 ml-4" />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 text-gray-600 dark:text-gray-400 text-sm border-t border-gray-100 dark:border-gray-800 pt-4 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AdmissionFAQs;
