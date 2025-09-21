import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Send, Clock, CheckCircle } from 'lucide-react';
import { trackFormSubmission, trackPhoneCall, trackEmailClick } from '../utils/analytics';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    trackFormSubmission('contact_form');
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ¿Listo para transformar tu empresa? Programa tu consulta gratuita hoy mismo 
            y descubre cómo podemos ayudarte a alcanzar tus objetivos de calidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                {/* Phone Numbers */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#00cbff] p-3 rounded-lg flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Teléfonos</h4>
                    <a 
                      href="tel:8094876361" 
                      onClick={() => trackPhoneCall('809-487-6361')}
                      className="block text-gray-600 hover:text-[#00cbff] transition-colors duration-200"
                    >
                      (809) 487-6381
                    </a>
                    <a 
                      href="tel:8496552502" 
                      onClick={() => trackPhoneCall('849-655-2502')}
                      className="block text-gray-600 hover:text-[#00cbff] transition-colors duration-200"
                    >
                      (849) 655-2502
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-3 rounded-lg flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                    <a 
                      href="mailto:asenpqc01@gmail.com" 
                      onClick={() => trackEmailClick('asenpqc01@gmail.com')}
                      className="text-gray-600 hover:text-[#00cbff] transition-colors duration-200"
                    >
                      asenpqc01@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-600 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Dirección</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Av. San Vicente de Paul<br />
                      Plaza Bonaire, Local 202<br />
                      Sector Almarosa 1<br />
                      Sto. Dgo. Este, RD
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-3 rounded-lg flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Horarios</h4>
                    <p className="text-gray-600">
                      Lun - Vie: 8:00 AM - 6:00 PM<br />
                      Sábado: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="animate-fade-in-up animation-delay-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Síguenos en Redes Sociales
              </h3>
              
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/asenp_qc" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg text-white hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://facebook.com/asenp_qc" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 p-3 rounded-lg text-white hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Solicita tu Consulta Gratuita
              </h3>

              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-800">¡Gracias! Te contactaremos pronto.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00cbff] focus:border-transparent transition-all duration-200"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00cbff] focus:border-transparent transition-all duration-200"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00cbff] focus:border-transparent transition-all duration-200"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00cbff] focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Cuéntanos sobre tus necesidades legales, impositivas o contables..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#00cbff] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#00b8e6] transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 group"
                >
                  <span>Enviar Mensaje</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;