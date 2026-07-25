import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import galleryData from '../../data/gallery.json';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const FeaturedGallery = () => {
  const featuredImages = galleryData.filter(img => img.featured);

  if (featuredImages.length === 0) return null;

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-4">Featured Highlights</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            effect="fade"
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="h-[50vh] min-h-[400px] w-full group"
          >
            {featuredImages.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="relative w-full h-full">
                  <img 
                    src={image.image} 
                    alt={image.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white">
                    <span className="bg-secondary text-primary text-xs font-bold px-3 py-1 rounded uppercase tracking-widest mb-4 inline-block">{image.category}</span>
                    <h3 className="text-3xl md:text-5xl font-poppins font-bold mb-4">{image.title}</h3>
                    <p className="text-lg text-gray-200 max-w-2xl mb-6 hidden md:block">{image.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-300">
                      <span className="flex items-center"><FaMapMarkerAlt className="mr-2 text-secondary" /> {image.location}</span>
                      <span className="flex items-center"><FaCalendarAlt className="mr-2 text-secondary" /> {image.date}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default FeaturedGallery;
