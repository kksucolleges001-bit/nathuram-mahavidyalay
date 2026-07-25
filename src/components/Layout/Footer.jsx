import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaChevronRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 font-inter relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-primary/10 blur-[120px] pointer-events-none"></div>

      <div className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 border-b border-gray-800 pb-12 relative z-10">
        {/* Brand & Contact */}
        <div className="lg:col-span-5">
          <div className="flex items-center mb-6 bg-gray-800/30 p-3 rounded-xl border border-gray-700/50 w-fit">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="SNMM Logo" className="w-12 h-12 object-contain bg-white/90 backdrop-blur-sm rounded-lg p-1.5 shadow-md shrink-0" />
            <h2 className="text-lg md:text-xl font-bold font-poppins text-white leading-tight ml-3 mr-4 pr-4 border-r border-gray-700/50">
              Shri Nathuram Maharaj<br className="hidden sm:block" /> Mahavidyalaya
            </h2>
            <img src={`${import.meta.env.BASE_URL}kksulogo.png`} alt="KKSU Logo" title="Affiliated to KKSU" className="w-10 h-10 object-contain bg-white/90 backdrop-blur-sm rounded-lg p-1 shadow-md shrink-0 opacity-90" />
          </div>
          <p className="text-sm mb-6 text-gray-400 leading-relaxed pr-4">
            Affiliated to Kavikulaguru Kalidas Sanskrit University, Ramtek, Nagpur. Maharashtra Government Recognized.
          </p>
          <ul className="space-y-4 text-sm mb-8">
            <li className="flex items-start group">
              <div className="mt-1 mr-4 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors duration-300">
                <FaMapMarkerAlt className="text-secondary group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="group-hover:text-white transition-colors duration-300 pt-1">At Kehal Tanda, Kehal, Tal. Jiintur, Dist. Parbhani 431510</span>
            </li>
            <li className="flex items-center group">
              <div className="mr-4 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors duration-300">
                <FaPhone className="text-secondary group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="group-hover:text-white transition-colors duration-300">9421425663</span>
            </li>
            <li className="flex items-center group">
              <div className="mr-4 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors duration-300">
                <FaEnvelope className="text-secondary group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="group-hover:text-white transition-colors duration-300 break-all">shrinathurammcollegekehal@gmail.com</span>
            </li>
          </ul>
          
          <h4 className="text-sm font-bold text-white mb-4 tracking-wider uppercase">Connect With Us</h4>
          <div className="flex space-x-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg"><FaFacebook className="text-lg" /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg"><FaTwitter className="text-lg" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg"><FaLinkedin className="text-lg" /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg"><FaInstagram className="text-lg" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-3 lg:col-start-7">
          <h3 className="text-lg font-bold text-white mb-6 font-poppins relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-secondary after:rounded-full inline-block">Quick Links</h3>
          <ul className="space-y-3 text-sm mt-4">
            <li><Link to="/about" className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"><FaChevronRight className="text-[10px] text-secondary opacity-0 -ml-3 mr-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> About Us</Link></li>
            <li><Link to="/academics" className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"><FaChevronRight className="text-[10px] text-secondary opacity-0 -ml-3 mr-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> Departments</Link></li>
            <li><Link to="/admissions" className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"><FaChevronRight className="text-[10px] text-secondary opacity-0 -ml-3 mr-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> Admissions 2026</Link></li>
            <li><Link to="/" className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"><FaChevronRight className="text-[10px] text-secondary opacity-0 -ml-3 mr-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> Student Portal</Link></li>
            <li><Link to="/" className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"><FaChevronRight className="text-[10px] text-secondary opacity-0 -ml-3 mr-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> Alumni Network</Link></li>
          </ul>
        </div>

        {/* Important Links */}
        <div className="lg:col-span-3">
          <h3 className="text-lg font-bold text-white mb-6 font-poppins relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-secondary after:rounded-full inline-block">Important Links</h3>
          <ul className="space-y-3 text-sm mt-4">
            <li><Link to="/mandatory-disclosure" className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"><FaChevronRight className="text-[10px] text-secondary opacity-0 -ml-3 mr-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> Mandatory Disclosure</Link></li>
            <li><Link to="/" className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"><FaChevronRight className="text-[10px] text-secondary opacity-0 -ml-3 mr-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> RTI Act</Link></li>
            <li><Link to="/" className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"><FaChevronRight className="text-[10px] text-secondary opacity-0 -ml-3 mr-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> Anti-Ragging Cell</Link></li>
            <li><Link to="/" className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"><FaChevronRight className="text-[10px] text-secondary opacity-0 -ml-3 mr-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> Grievance Redressal</Link></li>
            <li><Link to="/" className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"><FaChevronRight className="text-[10px] text-secondary opacity-0 -ml-3 mr-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> NIRF Ranking</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="container-custom mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 relative z-10">
        <p>&copy; {new Date().getFullYear()} Shri Nathuram Maharaj Mahavidyalaya. All Rights Reserved.</p>
        <ul className="flex flex-wrap space-x-6 mt-4 md:mt-0">
          <li><Link to="/privacy-policy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link></li>
          <li><Link to="/terms-and-conditions" className="hover:text-white transition-colors duration-300">Terms & Conditions</Link></li>
          <li><Link to="/" className="hover:text-white transition-colors duration-300">Accessibility</Link></li>
          <li><Link to="/" className="hover:text-white transition-colors duration-300">Sitemap</Link></li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;