import React from 'react';
import { FaUserTie, FaPhoneAlt } from 'react-icons/fa';
import contactData from '../../data/contact.json';

const ImportantContacts = () => {
  const { importantContacts } = contactData;

  return (
    <section className="section-padding bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Statutory & Important Contacts</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {importantContacts.map((contact, index) => (
            <div key={index} className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-blue-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-primary dark:text-secondary mr-4 flex-shrink-0">
                <FaUserTie />
              </div>
              <div>
                <p className="text-xs font-bold text-primary dark:text-secondary uppercase tracking-widest mb-1">{contact.role}</p>
                <h4 className="font-bold text-gray-900 dark:text-white">{contact.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center mt-1">
                  <FaPhoneAlt className="mr-2 text-xs" /> {contact.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ImportantContacts;
