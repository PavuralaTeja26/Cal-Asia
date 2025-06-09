import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Accreditation from './pages/Accreditation';
import Oursuccess from './pages/Oursuccess';
import Contact from './pages/Contact';
import './App.css';

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => setIsNavOpen(true);
  const closeNav = () => setIsNavOpen(false);

  return (
    <div className="App">
      <Navbar isOpen={isNavOpen} openNav={openNav} closeNav={closeNav} />
      <Routes>
        <Route path="/" element={<Home openNav={openNav} />} />
        <Route path="/about" element={<About openNav={openNav} />} />
        <Route path="/services" element={<Services openNav={openNav} />} />
        <Route path="/accreditation" element={<Accreditation openNav={openNav} />} />
        <Route path="/oursuccess" element={<Oursuccess openNav={openNav} />} />
        <Route path="/contact" element={<Contact openNav={openNav} />} />
      </Routes>
    </div>
  );
};

export default App;
