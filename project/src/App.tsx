import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SEO from './components/SEO';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AppointmentPage from './pages/AppointmentPage';

function App() {
  return (
    <div className="min-h-screen">
      <SEO />
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Services />
            <About />
            <Contact />
          </>
        } />
        <Route path="/citas" element={<AppointmentPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;