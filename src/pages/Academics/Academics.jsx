import React from 'react';
import AcademicHero from '../../components/Academics/AcademicHero';
import ProgramsOffered from '../../components/Academics/ProgramsOffered';
import DepartmentsOverview from '../../components/Academics/DepartmentsOverview';

const Academics = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors">
      <AcademicHero />
      <ProgramsOffered />
      <DepartmentsOverview />
    </div>
  );
};

export default Academics;