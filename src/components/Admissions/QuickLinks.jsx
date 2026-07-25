import React from 'react';
import { Link } from 'react-router-dom';
import { FaLink } from 'react-icons/fa';

const QuickLinks = () => {
  const links = [
    { title: "Academics", path: "/academics" },
    { title: "Departments", path: "/academics" },
    { title: "Faculty", path: "/academics" },
    { title: "Downloads", path: "/academics" },
    { title: "Mandatory Disclosure", path: "#" },
    { title: "IQAC", path: "#" }
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white whitespace-nowrap"><FaLink className="mr-3 text-primary dark:text-secondary" /> Useful Links</h3>
          <div className="flex flex-wrap gap-3 justify-center md:justify-end">
            {links.map((link, index) => (
              <Link 
                key={index} 
                to={link.path}
                className="bg-white dark:bg-gray-900 hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-gray-900 transition-colors px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default QuickLinks;
