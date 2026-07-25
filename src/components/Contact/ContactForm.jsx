import React from 'react';
import { FaPaperPlane, FaInfoCircle } from 'react-icons/fa';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Static UI only
  };

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Send Us a Message</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700">
          
          <div className="flex items-start p-4 mb-8 bg-blue-50 dark:bg-gray-800 rounded-lg border border-blue-100 dark:border-gray-700 text-primary dark:text-blue-300">
            <FaInfoCircle className="text-xl mr-3 mt-0.5 flex-shrink-0" />
            <p className="text-sm">This website is a static demonstration. The contact form is for UI purposes only and does not submit data to a backend server.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Full Name <span className="text-danger">*</span></label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address <span className="text-danger">*</span></label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+91 98765 43210" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Subject <span className="text-danger">*</span></label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white appearance-none" required>
                  <option value="">Select a Subject</option>
                  <option value="admission">Admissions Inquiry</option>
                  <option value="academic">Academic Programs</option>
                  <option value="hostel">Hostel Accommodation</option>
                  <option value="placement">Placements</option>
                  <option value="other">Other Queries</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Your Message <span className="text-danger">*</span></label>
              <textarea 
                rows="5" 
                placeholder="How can we help you?" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white resize-none"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-secondary hover:text-gray-900 text-white font-bold rounded-xl shadow-lg transition-colors flex items-center justify-center"
            >
              <FaPaperPlane className="mr-2" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
