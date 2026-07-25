import React from 'react';
import ContactHero from '../../components/Contact/ContactHero';
import MainContactInfo from '../../components/Contact/MainContactInfo';
import CollegeAddressMap from '../../components/Contact/CollegeAddressMap';
import ImportantContacts from '../../components/Contact/ImportantContacts';
import ContactForm from '../../components/Contact/ContactForm';
import SocialMedia from '../../components/Contact/SocialMedia';

const Contact = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors">
      <ContactHero />
      <MainContactInfo />
      <CollegeAddressMap />
      <ImportantContacts />
      <ContactForm />
      <SocialMedia />
    </div>
  );
};

export default Contact;
