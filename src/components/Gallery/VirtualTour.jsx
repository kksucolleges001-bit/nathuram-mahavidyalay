import React from 'react';
import { FaMapMarkedAlt, FaStreetView, FaCompass } from 'react-icons/fa';

const VirtualTour = () => {
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Virtual Campus Tour</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>

        <div className="relative w-full rounded-3xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 aspect-[21/9] bg-gray-200 dark:bg-gray-800 flex items-center justify-center group">
          <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=80" 
            alt="Campus Aerial View" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 filter grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gray-900/40"></div>
          
          <div className="relative z-10 text-center text-white px-4">
            <FaStreetView className="text-7xl text-secondary mx-auto mb-6 drop-shadow-lg" />
            <h3 className="text-3xl md:text-5xl font-poppins font-bold mb-4">Explore Our Campus</h3>
            <p className="text-lg text-gray-200 max-w-xl mx-auto mb-8">Take a 360-degree interactive tour of our academic blocks, laboratories, library, and sports facilities.</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="flex items-center bg-primary hover:bg-secondary hover:text-gray-900 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors">
                <FaCompass className="mr-2" /> Start 360° Tour
              </button>
              <button className="flex items-center bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white hover:text-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors">
                <FaMapMarkedAlt className="mr-2" /> View Campus Map
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default VirtualTour;
