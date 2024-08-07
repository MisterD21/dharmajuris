import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About/About';
import Contact from './components/Contact/ContactUs';
import PracticeAreaMain from './components/PracticeArea/PracticeAreaMain';
import Privacy from './components/Privacy';
import Arbitration from './components/PracticeAreaComponents/Arbitration';
import CivilLitigation from './components/PracticeAreaComponents/CivilLitigation';
import LegalMetrology from './components/PracticeAreaComponents/LegalMetrology';
import CommercialLitigation from './components/PracticeAreaComponents/CommercialLitigation';
import ConsumerLitigation from './components/PracticeAreaComponents/ConsumerLitigation';
import RegulatoryPractice from './components/PracticeAreaComponents/RegulatoryPractice';
import CriminalLitigation from './components/PracticeAreaComponents/CriminalLitigation';
import CorporateLitigation from './components/PracticeAreaComponents/CorporateLitigation';
import FamilyLitigation from './components/PracticeAreaComponents/FamilyLitigation';
import IntellectualPropertyRights from './components/PracticeAreaComponents/IntellectualPropertyRights';
import LabourEmploymentLaw from './components/PracticeAreaComponents/LabourEmploymentLaw';
import MotorAccidentClaims from './components/PracticeAreaComponents/MotorAccidentClaims';
import SARFAESILitigation from './components/PracticeAreaComponents/SARFAESILitigation';
import PropertyLitigation from './components/PracticeAreaComponents/PropertyLitigation';
import PublicInterestLitigation from './components/PracticeAreaComponents/PublicInterestLitigation';
import ProBonoLitigation from './components/PracticeAreaComponents/ProBonoLitigation';
import RealEstateDisputes from './components/PracticeAreaComponents/RealEstateDisputes';
import TechnologyLaw from './components/PracticeAreaComponents/TechnologyLaw';
import ContactUs from './components/Contact/ContactUs';
import Terms from './components/Terms';
import OurPeople from './components/OurPeople';
import OurClients from './components/OurClients';
import Careers from './components/Careers';
import ScrollToTop from './components/ScrollToTop';
import Services from './components/Services';
import Attorney from './Attorney';
import SUBSCRIBING from './components/SUBSCRIBING';
import DisclaimerModal from './components/DisclaimerModal';
// import Blogs from './components/Blogs';
import JobListing from './components/JobListing';
import Disclaimer from './components/Disclaimer';

function App() {
  const [isDisclaimerAccepted, setIsDisclaimerAccepted] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('disclaimerAccepted');
    console.log('Disclaimer accepted from localStorage:', accepted); // Log the value retrieved from localStorage
    setIsDisclaimerAccepted(accepted === 'true');
  }, []);

  const handleAccept = () => {
    localStorage.setItem('disclaimerAccepted', 'true');
    console.log('Disclaimer accepted'); // Log when disclaimer is accepted
    setIsDisclaimerAccepted(true);
  };

  const handleDecline = () => {
    console.log('Disclaimer declined'); // Log when disclaimer is declined
    window.location.href = 'https://www.google.in';
  };

  return (
    <Router>
      <NavigationBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/PracticeArea" element={<PracticeAreaMain />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/Arbitration" element={<Arbitration />} />
        <Route path="/CivilLitigation" element={<CivilLitigation />} />
        <Route path="/LegalMetrology" element={<LegalMetrology />} />
        <Route path="/CommercialLitigation" element={<CommercialLitigation />} />
        <Route path="/ConsumerLitigation" element={<ConsumerLitigation />} />
        <Route path="/RegulatoryPractice" element={<RegulatoryPractice />} />
        <Route path="/CriminalLitigation" element={<CriminalLitigation />} />
        <Route path="/CorporateLitigation" element={<CorporateLitigation />} />
        <Route path="/FamilyLitigation" element={<FamilyLitigation />} />
        <Route path="/IntellectualPropertyRights" element={<IntellectualPropertyRights />} />
        <Route path="/LabourEmploymentLaw" element={<LabourEmploymentLaw />} />
        <Route path="/MotorAccidentClaims" element={<MotorAccidentClaims />} />
        <Route path="/SARFAESILitigation" element={<SARFAESILitigation />} />
        <Route path="/PropertyLitigation" element={<PropertyLitigation />} />
        <Route path="/PublicInterestLitigation" element={<PublicInterestLitigation />} />
        <Route path="/ProBonoLitigation" element={<ProBonoLitigation />} />
        <Route path="/RealEstateDisputes" element={<RealEstateDisputes />} />
        <Route path="/TechnologyLaw" element={<TechnologyLaw />} />
        <Route path="/OurClients" element={<OurClients />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/OurPeople" element={<OurPeople />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Attorney" element={<Attorney />} />
        <Route path="/Subscribing" element={<SUBSCRIBING />} />
        {/* <Route path="/News" element={<Blogs />} /> */}
        <Route path="/job-listing" element={<JobListing />} />
        <Route path="/Disclaimer" element={<Disclaimer />} />
      </Routes>
      <Footer />

      {!isDisclaimerAccepted && <DisclaimerModal onAccept={handleAccept} onDecline={handleDecline} />}
    </Router>
  );
}

export default App;
