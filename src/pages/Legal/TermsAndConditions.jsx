import React from 'react';
import { motion } from 'framer-motion';

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16">
      <div className="container-custom max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm p-8 md:p-12 border border-gray-100 dark:border-gray-700"
        >
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Terms and Conditions</h1>
            <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <p className="font-semibold text-gray-900 dark:text-white">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. Agreement to Terms</h3>
            <p>These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Shri Nathuram Maharaj Mahavidyalaya ("Company", "we", "us", or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").</p>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. Educational Services</h3>
            <p>The content provided on the Site is for informational purposes only. It relates to the educational programs, admissions, and general administration of the college. We reserve the right to modify or discontinue any program, feature, or service without prior notice.</p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. User Representations</h3>
            <p>By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms and Conditions.</p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">4. Intellectual Property Rights</h3>
            <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.</p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">5. Governing Law</h3>
            <p>These Terms shall be governed by and defined following the laws of India. Shri Nathuram Maharaj Mahavidyalaya and yourself irrevocably consent that the courts of Maharashtra shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">6. Contact Information</h3>
            <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:</p>
            <p className="mt-4">
              <strong>Shri Nathuram Maharaj Mahavidyalaya</strong><br />
              At Kehal Tanda, Kehal, Tal. Jiintur, Dist. Parbhani 431510<br />
              Email: shrinathurammcollegekehal@gmail.com<br />
              Phone: 9421425663
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
