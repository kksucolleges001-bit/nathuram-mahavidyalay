import React from 'react';
import MandatoryHero from '../../components/Mandatory/MandatoryHero';
import MandatoryIntroduction from '../../components/Mandatory/MandatoryIntroduction';
import InstitutionalInfo from '../../components/Mandatory/InstitutionalInfo';
import ApprovalsRecognitions from '../../components/Mandatory/ApprovalsRecognitions';
import AffiliationDetails from '../../components/Mandatory/AffiliationDetails';
import AcademicInfo from '../../components/Mandatory/AcademicInfo';
import FacultyInfo from '../../components/Mandatory/FacultyInfo';
import StudentInfo from '../../components/Mandatory/StudentInfo';
import FeeStructure from '../../components/Mandatory/FeeStructure';
import FinancialInfo from '../../components/Mandatory/FinancialInfo';
import AnnualReports from '../../components/Mandatory/AnnualReports';
import StatutoryCommittees from '../../components/Mandatory/StatutoryCommittees';
import RtiInformation from '../../components/Mandatory/RtiInformation';
import InstitutionalPolicies from '../../components/Mandatory/InstitutionalPolicies';
import Infrastructure from '../../components/Mandatory/Infrastructure';
import DownloadsCenter from '../../components/Mandatory/DownloadsCenter';
import MandatoryFAQs from '../../components/Mandatory/MandatoryFAQs';
import ComplianceContact from '../../components/Mandatory/ComplianceContact';
import MandatoryCTA from '../../components/Mandatory/MandatoryCTA';

const MandatoryDisclosure = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors">
      <MandatoryHero />
      <MandatoryIntroduction />
      <InstitutionalInfo />
      <ApprovalsRecognitions />
      <AffiliationDetails />
      <AcademicInfo />
      <FacultyInfo />
      <StudentInfo />
      <FeeStructure />
      <FinancialInfo />
      <AnnualReports />
      <StatutoryCommittees />
      <RtiInformation />
      <InstitutionalPolicies />
      <Infrastructure />
      <DownloadsCenter />
      <MandatoryFAQs />
      <ComplianceContact />
      <MandatoryCTA />
    </div>
  );
};

export default MandatoryDisclosure;
