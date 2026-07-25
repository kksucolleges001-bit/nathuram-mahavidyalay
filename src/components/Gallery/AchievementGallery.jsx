import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa';

const AchievementGallery = () => {
  const achievements = [
    { title: "Best University Award 2023", category: "Awards", image: "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&w=600&q=80", icon: FaTrophy },
    { title: "Gold in National Athletics", category: "Sports", image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=600&q=80", icon: FaMedal },
    { title: "AICTE Research Grant", category: "Research", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80", icon: FaStar }
  ];

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Achievements & Awards</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:border-secondary transition-colors"
              >
                <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[4/3]">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary shadow-lg">
                    <Icon className="text-2xl" />
                  </div>
                </div>
                <span className="text-xs font-bold text-primary dark:text-secondary uppercase tracking-widest">{item.category}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2 leading-tight">{item.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default AchievementGallery;
