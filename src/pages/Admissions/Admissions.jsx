import React from 'react';
import AdmissionHero from '../../components/Admissions/AdmissionHero';
import AdmissionOverview from '../../components/Admissions/AdmissionOverview';
import AdmissionProcess from '../../components/Admissions/AdmissionProcess';
import ProgramsOpen from '../../components/Admissions/ProgramsOpen';
import EligibilityCriteria from '../../components/Admissions/EligibilityCriteria';
import RequiredDocuments from '../../components/Admissions/RequiredDocuments';
import FeeStructure from '../../components/Admissions/FeeStructure';
import ReservationPolicy from '../../components/Admissions/ReservationPolicy';
import Scholarships from '../../components/Admissions/Scholarships';
import ImportantDates from '../../components/Admissions/ImportantDates';
import Prospectus from '../../components/Admissions/Prospectus';
import AdmissionFAQs from '../../components/Admissions/AdmissionFAQs';
import AdmissionContact from '../../components/Admissions/AdmissionContact';
import QuickLinks from '../../components/Admissions/QuickLinks';
import AdmissionCTA from '../../components/Admissions/AdmissionCTA';

const Admissions = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors">
      <AdmissionHero />
      <AdmissionOverview />
      {/* <ImportantDates /> */}
      <AdmissionProcess />
      <ProgramsOpen />
      <EligibilityCriteria />
      {/* <FeeStructure /> */}
      {/* <Scholarships /> */}
      {/* <ReservationPolicy /> */}
      <RequiredDocuments />
      {/* <Prospectus /> */}
      {/* <AdmissionFAQs /> */}
      {/* <AdmissionContact /> */}
      <QuickLinks />
      {/* <AdmissionCTA /> */}
    </div>
  );
};

export default Admissions;