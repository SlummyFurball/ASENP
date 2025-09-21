import React from 'react';
import { ArrowRight, CheckCircle, Award, Users, TrendingUp } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-[#00cbff] flex items-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#00cbff] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#00cbff] rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-black animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-6">
              <Award className="w-6 h-6 text-yellow-600" />
              <span className="text-[#00cbff] font-medium text-sm sm:text-base">Servicios Legales, Impositivos y Contables</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Servicios Legales,
              <span className="text-[#00cbff] block">Impositivos y Contables</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed">
              Más de 10 años brindando servicios profesionales legales, impositivos y contables 
              a empresas y personas físicas en República Dominicana.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-8">
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 p-2 rounded-full">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold">40+</p>
                  <p className="text-gray-600 text-sm">Empresas Atendidas</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-[#00cbff] p-2 rounded-full">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold">10+</p>
                  <p className="text-gray-600 text-sm">Años de Experiencia</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-[#00cbff] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#00b8e6] transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 group"
              >
                <span>Consulta Gratuita</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button 
                onClick={() => scrollToSection('servicios')}
                className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Ver Servicios
              </button>
            </div>
          </div>

          {/* Features Card */}
          <div className="animate-fade-in-up animation-delay-300">
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">¿Por qué elegirnos?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Experiencia Comprobada</h4>
                    <p className="text-gray-200 text-sm">Más de 10 años en servicios legales, impositivos y contables</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Resultados Garantizados</h4>
                    <p className="text-gray-200 text-sm">40+ empresas confían en nuestros servicios profesionales</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Atención Personalizada</h4>
                    <p className="text-gray-200 text-sm">Cada cliente recibe atención personalizada y especializada</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Cumplimiento Normativo</h4>
                    <p className="text-gray-200 text-sm">Garantizamos el cumplimiento de todas las normativas vigentes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;