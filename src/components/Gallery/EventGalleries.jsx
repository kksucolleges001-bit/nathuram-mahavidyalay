import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const EventGalleries = () => {
  const events = [
    { title: "Annual Convocation", count: "140 Photos", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80" },
    { title: "Tech Fest 2024", count: "85 Photos", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80" },
    { title: "Sports Meet", count: "210 Photos", image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=600&q=80" },
    { title: "Cultural Night", count: "320 Photos", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80" }
  ];

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-2">Major Event Galleries</h2>
            <div className="w-24 h-1 bg-secondary rounded"></div>
          </div>
          <Link to="#" className="hidden md:flex items-center text-primary dark:text-secondary font-semibold hover:underline mt-4 md:mt-0">
            View All Events <FaArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-64 shadow-sm hover:shadow-xl transition-shadow"
            >
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                <p className="text-secondary text-sm font-semibold uppercase tracking-widest">{event.count}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default EventGalleries;
