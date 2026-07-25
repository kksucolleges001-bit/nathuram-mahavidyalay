import React from 'react';
import { motion } from 'framer-motion';
import homeData from '../../data/homeData.json';

const PrincipalMessage = () => {
  const { principal } = homeData;
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 px-4 sm:px-0">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded-xl"></div>
              <img src={principal.image} alt={principal.name} className="relative z-10 rounded-xl w-full object-cover shadow-lg border-4 border-white dark:border-gray-800" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3"
          >
            <h4 className="text-secondary font-bold uppercase tracking-wider mb-2">Message from the Desk</h4>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 dark:text-white mb-6">Principal's Message</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 italic border-l-4 border-primary pl-4">"{principal.message}"</p>
            <p className="text-gray-700 dark:text-gray-400 mb-8 leading-relaxed">
              We focus on delivering education that combines academic rigor with industry relevance. Our dedicated faculty members are committed to providing a transformative learning experience.
            </p>
            <h5 className="font-bold text-xl text-gray-900 dark:text-white">{principal.name}</h5>
            <p className="text-primary dark:text-secondary font-medium mb-6">Principal, Shri Nathuram Maharaj Mahavidyalaya</p>
            {/* <button className="btn-outline dark:border-secondary dark:text-secondary dark:hover:bg-secondary dark:hover:text-gray-900">Read Full Message</button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default PrincipalMessage;
