import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import testimonials from '../../data/testimonials.json';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 dark:text-white mb-4">What People Say</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>
        
        <div className="max-w-4xl mx-auto pb-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="text-center px-4 md:px-12">
                  <FaQuoteLeft className="text-5xl text-gray-200 dark:text-gray-700 mx-auto mb-6" />
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 italic mb-8">"{item.text}"</p>
                  <h4 className="font-bold text-lg text-primary dark:text-secondary">{item.name}</h4>
                  <p className="text-gray-500">{item.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default TestimonialsSection;
