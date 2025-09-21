import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import LazyImage from './LazyImage';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 pt-4 px-4">
      <div className={`max-w-7xl mx-auto transition-all duration-500 ${
        isScrolled 
          ? 'bg-lightgrey/95 backdrop-blur-md shadow-2xl rounded-full px-8 py-3' 
          : 'bg-lightgrey/90 backdrop-blur-sm shadow-lg rounded-full px-12 py-4'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <a href="/">
              <LazyImage 
                src="/logo-asenp--transparente1-14.png" 
                alt="ASENP Quality Consulting" 
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? 'h-12' : 'h-14'
                }`}
              />
            </a>
          </div>

          {location.pathname === '/' ? (
            <nav className="hidden md:flex items-center space-x-10">
              <a href="#inicio" className="text-gray-700 hover:text-[#00cbff] transition-colors font-medium">Inicio</a>
              <a href="#servicios" className="text-gray-700 hover:text-[#00cbff] transition-colors font-medium">Servicios</a>
              <a href="#nosotros" className="text-gray-700 hover:text-[#00cbff] transition-colors font-medium">Nosotros</a>
              <a href="#contacto" className="text-gray-700 hover:text-[#00cbff] transition-colors font-medium">Contacto</a>
              <a href="/citas" className="bg-[#00cbff] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#00b8e6] transition-all duration-300 transform hover:scale-105">
                Agenda una Cita
              </a>
            </nav>
          ) : (
            <nav className="hidden md:flex items-center space-x-10">
              <a href="/" className="text-gray-700 hover:text-[#00cbff] transition-colors font-medium">Inicio</a>
              <a href="/#servicios" className="text-gray-700 hover:text-[#00cbff] transition-colors font-medium">Servicios</a>
              <a href="/#nosotros" className="text-gray-700 hover:text-[#00cbff] transition-colors font-medium">Nosotros</a>
              <a href="/#contacto" className="text-gray-700 hover:text-[#00cbff] transition-colors font-medium">Contacto</a>
            </nav>
          )}

          <div className={`hidden lg:flex items-center space-x-6 transition-all duration-300 ${
            isScrolled || location.pathname !== '/' ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
          }`}>
            <div className="flex items-center space-x-2 text-sm text-gray-600 hover:text-[#00cbff] transition-colors">
              <Phone className="w-4 h-4" />
              <span>809-487-6361</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 hover:text-[#00cbff] transition-colors">
              <Mail className="w-4 h-4" />
              <span>asenpqc01@gmail.com</span>
            </div>
          </div>

          <button
            className="md:hidden text-gray-700 hover:text-[#00cbff] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 mx-4">
          <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden">
            <nav className="py-4 space-y-1">
              {location.pathname === '/' ? (
                <>
                  <a href="#inicio" className="block px-6 py-3 text-gray-700 hover:bg-[#00cbff]/10 hover:text-[#00cbff] transition-colors font-medium">Inicio</a>
                  <a href="#servicios" className="block px-6 py-3 text-gray-700 hover:bg-[#00cbff]/10 hover:text-[#00cbff] transition-colors font-medium">Servicios</a>
                  <a href="#nosotros" className="block px-6 py-3 text-gray-700 hover:bg-[#00cbff]/10 hover:text-[#00cbff] transition-colors font-medium">Nosotros</a>
                  <a href="#contacto" className="block px-6 py-3 text-gray-700 hover:bg-[#00cbff]/10 hover:text-[#00cbff] transition-colors font-medium">Contacto</a>
                  <a href="/citas" className="block px-6 py-3 bg-[#00cbff] text-white hover:bg-[#00b8e6] transition-colors font-medium rounded-lg mx-6 text-center">Agenda una Cita</a>
                </>
              ) : (
                <>
                  <a href="/" className="block px-6 py-3 text-gray-700 hover:bg-[#00cbff]/10 hover:text-[#00cbff] transition-colors font-medium">Inicio</a>
                  <a href="/#servicios" className="block px-6 py-3 text-gray-700 hover:bg-[#00cbff]/10 hover:text-[#00cbff] transition-colors font-medium">Servicios</a>
                  <a href="/#nosotros" className="block px-6 py-3 text-gray-700 hover:bg-[#00cbff]/10 hover:text-[#00cbff] transition-colors font-medium">Nosotros</a>
                  <a href="/#contacto" className="block px-6 py-3 text-gray-700 hover:bg-[#00cbff]/10 hover:text-[#00cbff] transition-colors font-medium">Contacto</a>
                </>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
