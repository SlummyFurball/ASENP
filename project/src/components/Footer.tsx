import React from 'react';
import { Award, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import LazyImage from './LazyImage';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <LazyImage 
                src="/logo-asenp--transparente1-14.png" 
                alt="ASENP Quality Consulting Logo" 
                className="h-16 w-auto"
              />
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Más de 10 años brindando servicios profesionales legales, impositivos y contables 
              a empresas y personas físicas en República Dominicana. Tu socio estratégico 
              de confianza en cumplimiento normativo.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/asenp_qc" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/asenp_qc" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-[#00cbff] transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#servicios" className="hover:text-[#00cbff] transition-colors duration-200">Constitución de Compañías</a></li>
              <li><a href="#servicios" className="hover:text-[#00cbff] transition-colors duration-200">Registros y Trámites</a></li>
              <li><a href="#servicios" className="hover:text-[#00cbff] transition-colors duration-200">Servicios Impositivos</a></li>
              <li><a href="#servicios" className="hover:text-[#00cbff] transition-colors duration-200">Servicios Contables</a></li>
              <li><a href="#servicios" className="hover:text-[#00cbff] transition-colors duration-200">Registro de Marcas</a></li>
              <li><a href="#servicios" className="hover:text-[#00cbff] transition-colors duration-200">Asesorías Generales</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#00cbff]" />
                <div>
                  <a href="tel:8094876361" className="block hover:text-[#00cbff] transition-colors duration-200">
                    (809) 487-6361
                  </a>
                  <a href="tel:8496552502" className="block hover:text-[#00cbff] transition-colors duration-200">
                    (849) 655-2502
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#00cbff]" />
                <a href="mailto:asenpqc01@gmail.com" className="hover:text-[#00cbff] transition-colors duration-200">
                  (809) 487-6381
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#00cbff] mt-1 flex-shrink-0" />
                <p className="text-sm leading-relaxed">
                  Av. San Vicente de Paul<br />
                  Plaza Bonaire, Local 202<br />
                  Sector Almarosa 1<br />
                  Sto. Dgo. Este, RD
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} ASENP Quality Consulting. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Más de 40 empresas confían en nosotros</span>
              <span>•</span>
              <span>10+ años de experiencia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;