import React from 'react';
import { Link } from 'react-router-dom';

const MandatoryCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-blue-900 text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="container-custom relative z-10">
        <h2 className="text-4xl font-poppins font-bold mb-6">Explore More About Our Institution</h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto text-blue-100">For detailed academic guidelines, fee payment portals, and admission procedures, please navigate to our dedicated sections.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/admissions" className="btn-secondary text-lg py-3 px-8 shadow-xl hover:scale-105 transform">Admissions Page</Link>
          <Link to="/academics" className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-md font-medium text-lg hover:bg-white hover:text-primary transition-colors hover:scale-105 transform">Academics</Link>
          <Link to="/contact" className="bg-blue-800 text-white py-3 px-8 rounded-md font-medium text-lg hover:bg-blue-700 transition-colors hover:scale-105 transform">Contact Us</Link>
        </div>
      </div>
    </section>
  );
};
export default MandatoryCTA;
