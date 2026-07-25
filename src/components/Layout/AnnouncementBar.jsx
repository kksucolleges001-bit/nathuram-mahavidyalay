import React from 'react';
import { motion } from 'framer-motion';

const AnnouncementBar = () => {
  const notices = [
    "Admissions for B.A. (Civil Services) and B.A. (Kirtan Shastra) are now open!",
    "Government scholarships available for ST, SC, VJNT, OBC & OPEN categories.",
    "Contact Yogesh Sir (7744882353) or Mangesh Sir (7378835218) for admission inquiries."
  ];

  return (
    <div className="bg-secondary text-primary py-2 overflow-hidden flex items-center relative z-10 font-medium border-b border-primary/10">
      <div className="bg-secondary px-4 font-bold uppercase text-sm tracking-wider z-20 shadow-[5px_0_10px_rgba(181,140,79,0.8)] whitespace-nowrap hidden md:block">
        Latest Updates
      </div>
      <div className="flex-1 overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {notices.map((notice, index) => (
            <span key={index} className="mx-8 text-sm">{notice}</span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default AnnouncementBar;