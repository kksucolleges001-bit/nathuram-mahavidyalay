import React from 'react';
import AdminHero from '../../components/Administration/AdminHero';
import AdminOverview from '../../components/Administration/AdminOverview';
import PrincipalProfile from '../../components/Administration/PrincipalProfile';
import GoverningBody from '../../components/Administration/GoverningBody';
import OfficeInfo from '../../components/Administration/OfficeInfo';
import OfficeStaff from '../../components/Administration/OfficeStaff';
import AdminContact from '../../components/Administration/AdminContact';

const Administration = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors">
      <AdminHero />
      <AdminOverview />
      <PrincipalProfile />
      <GoverningBody />
      <OfficeInfo />
      <OfficeStaff />
      <AdminContact />
    </div>
  );
};

export default Administration;
