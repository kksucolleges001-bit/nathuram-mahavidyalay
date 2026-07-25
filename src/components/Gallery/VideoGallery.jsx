import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const VideoGallery = () => {
  const videos = [
    { id: "1", title: "Campus Life 2024 - A Cinematic Journey", thumb: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80" },
    { id: "2", title: "Vice Chancellor's Address on NEP 2020", thumb: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80" },
    { id: "3", title: "Mega Placement Drive Highlights", thumb: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80" }
  ];

  return (
    <section className="section-padding bg-primary text-white border-y border-blue-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold mb-4">Video Gallery</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg bg-gray-900 border border-white/10">
              <div className="relative aspect-video">
                <img src={video.thumb} alt={video.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaPlayCircle className="text-6xl text-white opacity-80 group-hover:scale-110 group-hover:text-secondary group-hover:opacity-100 transition-all duration-300 shadow-xl rounded-full" />
                </div>
              </div>
              <div className="p-4 bg-white/5 backdrop-blur-sm">
                <h3 className="font-bold text-lg leading-tight line-clamp-2">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default VideoGallery;
