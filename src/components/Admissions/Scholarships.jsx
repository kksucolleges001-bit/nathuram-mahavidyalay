import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import admissionsData from '../../data/admissions.json';

const Scholarships = () => {
  const { scholarships } = admissionsData;
  return (
    <section className="section-padding bg-gradient-to-br from-primary to-blue-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold mb-4">Scholarships & Financial Aid</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scholarships.map((schol, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all flex flex-col"
            >
              <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center mb-4 text-xl">
                <FaGraduationCap />
              </div>
              <h3 className="font-bold text-lg mb-1 leading-tight">{schol.name}</h3>
              <p className="text-xs text-blue-200 uppercase tracking-widest mb-4">By: {schol.provider}</p>
              
              <div className="space-y-3 flex-grow text-sm">
                <div>
                  <p className="text-blue-300 text-xs">Eligibility</p>
                  <p className="font-medium">{schol.eligibility}</p>
                </div>
                <div>
                  <p className="text-blue-300 text-xs">Benefit</p>
                  <p className="font-bold text-secondary">{schol.benefit}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Scholarships;
