import React from 'react';
import Footer from './Footer';
import NavigationBar from './NavigationBar';
import Appointment from './components/About/Appointment';
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/ContactUs';
import PracticeAreaMain from './components/PracticeArea/PracticeAreaMain';
import Privacy from './Privacy';
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

function App() {
  return (

    <Router>
      <NavigationBar />
      
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
        {/* <Route path="/Resoures" element={<Resoures />} />
        <Route path="/OurClients" element={<OurClients />} />
        <Route path="/Careers" element={<Careers />} /> */}
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
