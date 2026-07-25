import React, { useState } from 'react';
import { FaFilePdf, FaDownload, FaSearch, FaFilter } from 'react-icons/fa';
import mandatoryData from '../../data/mandatory.json';

const DownloadsCenter = () => {
  const { downloads } = mandatoryData;
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', ...new Set(downloads.map(doc => doc.category))];

  const filteredDocs = downloads.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || doc.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="section-padding bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container-custom max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Downloads Center</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>

        {/* Search & Filter Component integrated here for state simplicity */}
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl mb-8 flex flex-col md:flex-row gap-4 border border-gray-100 dark:border-gray-700 shadow-sm">
          <div className="relative flex-grow">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search documents by title..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
            />
          </div>
          <div className="relative min-w-[200px]">
            <FaFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select 
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary appearance-none dark:text-white"
            >
              {categories.map(cat => <option key={cat} value={cat}>{cat} Documents</option>)}
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {filteredDocs.map((doc) => (
            <div key={doc.id} className="flex flex-col sm:flex-row items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors group">
              <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
                <FaFilePdf className="text-danger text-3xl mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-primary dark:group-hover:text-secondary transition-colors leading-tight">{doc.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    <span className="font-semibold text-primary dark:text-secondary bg-blue-50 dark:bg-gray-900 px-2 py-0.5 rounded mr-2">{doc.category}</span>
                    Size: {doc.size} | Updated: {doc.date}
                  </p>
                </div>
              </div>
              <button className="w-full sm:w-auto flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-gray-900 text-gray-700 dark:text-gray-200 px-6 py-2 rounded-lg font-semibold transition-colors">
                <FaDownload className="mr-2" /> Download
              </button>
            </div>
          ))}
          
          {filteredDocs.length === 0 && (
            <div className="text-center py-12 text-gray-500 bg-gray-50 dark:bg-gray-800 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
              No documents found matching your search criteria.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default DownloadsCenter;
