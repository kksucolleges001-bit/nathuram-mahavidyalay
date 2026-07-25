import React from 'react';

const AdmissionCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-blue-900 text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="container-custom relative z-10">
        <h2 className="text-4xl font-poppins font-bold mb-6">Take the First Step Towards Success</h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto text-blue-100">Admissions are currently open for all UG and PG programs. Don't miss the opportunity to join a premier institution.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="btn-secondary text-lg py-3 px-8 shadow-xl hover:scale-105 transform">Start Application</button>
          <button className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-md font-medium text-lg hover:bg-white hover:text-primary transition-colors hover:scale-105 transform">Visit Campus</button>
        </div>
      </div>
    </section>
  );
};
export default AdmissionCTA;
