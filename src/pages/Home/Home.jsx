import React from "react";
import HeroSection from "../../components/Home/HeroSection";
import PrincipalMessage from "../../components/Home/PrincipalMessage";
import CampusHighlights from "../../components/Home/CampusHighlights";
import TestimonialsSection from "../../components/Home/TestimonialsSection";

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors">
      <HeroSection />
      <PrincipalMessage />
      {/* <CampusHighlights /> */}
      <TestimonialsSection />
    </div>
  );
};

export default Home;