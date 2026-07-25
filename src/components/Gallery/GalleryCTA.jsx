import React from 'react';
import { Link } from 'react-router-dom';

const GalleryCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-blue-900 text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="container-custom relative z-10">
        <h2 className="text-4xl font-poppins font-bold mb-6">Experience It In Person</h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto text-blue-100">Pictures only tell half the story. Visit our beautiful campus or apply now to become a part of our vibrant community.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/admissions" className="btn-secondary text-lg py-3 px-8 shadow-xl hover:scale-105 transform">Apply Now</Link>
          <Link to="/contact" className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-md font-medium text-lg hover:bg-white hover:text-primary transition-colors hover:scale-105 transform">Schedule a Visit</Link>
        </div>
      </div>
    </section>
  );
};
export default GalleryCTA;
