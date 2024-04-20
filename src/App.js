import React from 'react';
import Footer from './Footer';
import NavigationBar from './NavigationBar';
import Appointment from './components/About/Appointment';
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import PracticeAreaMain from './components/PracticeArea/PracticeAreaMain';


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
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
