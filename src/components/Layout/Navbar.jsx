import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch, FaMoon, FaSun, FaChevronDown } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import kksulogo from '../../assets/kksulogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg py-3' : 'bg-white dark:bg-gray-900 py-4 shadow-sm'}`}>
      <div className="container-custom flex justify-between items-center">
        {/* Brand Area */}
        <div className="flex items-center justify-between lg:justify-start flex-1 min-w-0 pr-1 sm:pr-4 gap-1 sm:gap-3">
          <Link to="/" className="flex items-center gap-1 sm:gap-3 flex-1 min-w-0 group">
            <img src={logo} alt="SNMM Logo" className="w-8 h-8 sm:w-11 sm:h-11 md:w-14 md:h-14 object-contain drop-shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-300" />
            <div className="flex flex-col justify-center flex-1 min-w-0 text-center lg:text-left px-0.5">  
              <h1 className="text-[11.5px] sm:text-sm md:text-base lg:text-xl font-bold font-poppins text-primary dark:text-white leading-[1.2] sm:leading-snug group-hover:text-secondary transition-colors line-clamp-2 lg:line-clamp-none">
                Shri Nathuram Maharaj Mahavidyalaya
              </h1>
              <p className="text-[9px] md:text-xs text-gray-500 dark:text-gray-400 font-medium hidden sm:block tracking-wide mt-0.5 truncate">
                Excellence in Education
              </p>
            </div>
          </Link>
          
          {/* University Badge */}
          <div className="flex items-center pl-1 sm:pl-3 lg:pl-4 lg:border-l lg:border-gray-200 lg:dark:border-gray-700 shrink-0">
            <img src={kksulogo} alt="KKSU Logo" title="Affiliated to KKSU" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain drop-shadow-sm opacity-90 hover:opacity-100 transition-opacity shrink-0" />
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-2">
          <ul className="flex items-center space-x-1 font-medium text-sm text-gray-700 dark:text-gray-200">
            <li><Link to="/" className="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-primary transition-all duration-200">Home</Link></li>
            <li><Link to="/about" className="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-primary transition-all duration-200">About Us</Link></li>
            <li><Link to="/academics" className="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-primary transition-all duration-200">Academics</Link></li>
            <li><Link to="/admissions" className="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-primary transition-all duration-200">Admissions</Link></li>
            
            {/* Explore Dropdown */}
            <li className="group relative">
              <button className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-primary transition-all duration-200">
                Explore <FaChevronDown className="ml-1.5 text-[10px] opacity-70 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left group-hover:translate-y-0 translate-y-2 py-2 z-50">
                <Link to="/administration" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-primary transition-colors">Administration</Link>
                <Link to="/mandatory-disclosure" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-primary transition-colors">Mandatory Disclosure</Link>
                <Link to="/gallery" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-primary transition-colors">Gallery</Link>
              </div>
            </li>

            <li><Link to="/contact" className="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-primary transition-all duration-200">Contact</Link></li>
          </ul>

          <div className="flex items-center space-x-2 border-l border-gray-200 dark:border-gray-700 pl-4 ml-2 text-gray-500 dark:text-gray-400">
            <button onClick={() => setIsSearchOpen(true)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-white transition-colors"><FaSearch /></button>
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-white transition-colors">
              {isDarkMode ? <FaSun className="text-secondary text-lg" /> : <FaMoon className="text-lg" />}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center space-x-1.5 sm:space-x-3 text-gray-800 dark:text-white shrink-0 ml-1">
          <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
            {isDarkMode ? <FaSun className="text-secondary" /> : <FaMoon />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl p-1 focus:outline-none hover:text-primary transition">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-2xl border-t border-gray-100 dark:border-gray-800 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[500px] py-4' : 'max-h-0 py-0 border-transparent'}`}>
        <div className="container-custom">
          <ul className="flex flex-col space-y-1 text-gray-800 dark:text-gray-200 font-medium">
            <li><Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary transition">Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary transition">About Us</Link></li>
            <li><Link to="/academics" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary transition">Academics</Link></li>
            <li><Link to="/admissions" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary transition">Admissions</Link></li>
            
            {/* Mobile Dropdown items flat */}
            <li><Link to="/administration" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary transition text-gray-500 dark:text-gray-400 pl-8">↳ Administration</Link></li>
            <li><Link to="/mandatory-disclosure" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary transition text-gray-500 dark:text-gray-400 pl-8">↳ Mandatory Disclosure</Link></li>
            <li><Link to="/gallery" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary transition text-gray-500 dark:text-gray-400 pl-8">↳ Gallery</Link></li>
            
            <li><Link to="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary transition">Contact</Link></li>
            
            <li className="pt-3 mt-2 border-t border-gray-100 dark:border-gray-800">
              <button onClick={() => { setIsOpen(false); setIsSearchOpen(true); }} className="flex justify-between items-center w-full px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary transition text-left">
                <span>Search</span>
                <FaSearch className="opacity-70" />
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Search Overlay Modal */}
      <div className={`fixed inset-0 bg-gray-900/95 backdrop-blur-md z-[100] transition-all duration-300 flex items-center justify-center ${isSearchOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="absolute top-6 right-6 md:top-8 md:right-8">
          <button onClick={() => setIsSearchOpen(false)} className="p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all">
            <FaTimes className="text-xl md:text-2xl" />
          </button>
        </div>
        <div className={`w-full max-w-3xl px-6 transform transition-all duration-500 delay-100 ${isSearchOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h2 className="text-2xl md:text-3xl font-poppins font-bold text-white mb-8 text-center">What are you looking for?</h2>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search courses, faculty, events..." 
              className="w-full bg-transparent border-b-2 border-white/30 text-white text-xl md:text-2xl py-4 pl-10 md:pl-12 pr-4 focus:outline-none focus:border-secondary transition-colors placeholder-white/30"
              autoFocus={isSearchOpen}
            />
            <FaSearch className="absolute left-0 top-1/2 -translate-y-1/2 text-2xl md:text-3xl text-white/50" />
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <span className="text-white/50 text-sm mr-2 mt-2 hidden sm:block">Popular Searches:</span>
            <Link to="/admissions" onClick={() => setIsSearchOpen(false)} className="px-4 py-2 bg-white/5 hover:bg-secondary text-white rounded-full text-sm transition-colors border border-white/10">Admissions 2026</Link>
            <Link to="/academics" onClick={() => setIsSearchOpen(false)} className="px-4 py-2 bg-white/5 hover:bg-secondary text-white rounded-full text-sm transition-colors border border-white/10">Departments</Link>
            <Link to="/contact" onClick={() => setIsSearchOpen(false)} className="px-4 py-2 bg-white/5 hover:bg-secondary text-white rounded-full text-sm transition-colors border border-white/10">Contact Us</Link>
            <Link to="/gallery" onClick={() => setIsSearchOpen(false)} className="px-4 py-2 bg-white/5 hover:bg-secondary text-white rounded-full text-sm transition-colors border border-white/10">Gallery</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;