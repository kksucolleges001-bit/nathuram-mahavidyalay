import React from 'react';
import * as Icons from 'react-icons/fa';
import contactData from '../../data/contact.json';

const SocialMedia = () => {
  const { socialMedia } = contactData;

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-poppins font-bold text-gray-900 dark:text-white mb-2">Connect With Us</h3>
          <p className="text-gray-600 dark:text-gray-400">Stay updated with our latest news and events</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {socialMedia.map((social, index) => {
            const Icon = Icons[social.icon] || Icons.FaLink;
            return (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className={`w-14 h-14 rounded-full flex items-center justify-center text-white ${social.color} shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300`}
                aria-label={`Follow us on ${social.platform}`}
              >
                <Icon className="text-2xl" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default SocialMedia;
