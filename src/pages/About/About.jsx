import React from 'react';
import AboutHero from '../../components/About/AboutHero';
import Overview from '../../components/About/Overview';
import VisionMission from '../../components/About/VisionMission';
import Approvals from '../../components/About/Approvals';

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors">
      <AboutHero />
      <Overview />
      <VisionMission />
      <Approvals />
    </div>
  );
};

export default About;