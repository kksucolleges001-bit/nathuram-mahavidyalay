import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaInstagram, FaPhone, FaYoutube, FaEnvelope, FaClock, FaTwitter } from 'react-icons/fa';

const TopContactBar = () => {
  return (
    <div className="bg-primary text-white text-xs py-2 hidden md:block">
      <div className="container-custom flex justify-between items-center">
        <div className="flex space-x-6">
          <span className="flex items-center"><FaPhone className="mr-2" /> 9421425663 / 7744882353</span>
          <span className="flex items-center"><FaEnvelope className="mr-2" /> shrinathurammcollegekehal@gmail.com</span>
          <span className="flex items-center"><FaClock className="mr-2" /> Mon-Sat: 9:00 AM - 5:00 PM</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors"><FaLinkedin /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors"><FaYoutube /></a>
          </div>
          <Link to="/admissions">
            <button className="bg-secondary text-primary px-4 py-1 rounded font-bold hover:bg-white transition-colors cursor-pointer">
              Admissions
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default TopContactBar;