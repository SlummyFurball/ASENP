import React from 'react';
import { Building2, FileText, Calculator, Scale, Users, BookOpen } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Constitución de Compañías",
      description: "Servicios completos para la constitución y registro de empresas SRL y EIRL con todos los trámites legales.",
      features: ["Constitución SRL/EIRL", "Actas de Asamblea", "Transformación de Compañía", "Cierre Temporal/Definitivo"]
    },
    {
      icon: Scale,
      title: "Registros y Trámites",
      description: "Gestión integral de registros ante instituciones gubernamentales y organismos reguladores.",
      features: ["DGII-RPE-TSS", "MIPYMES-MTD", "SISALRIL", "Registro Sanitario"]
    },
    {
      icon: Calculator,
      title: "Servicios Impositivos",
      description: "Manejo completo de obligaciones tributarias y declaraciones ante la DGII.",
      features: ["IT-1, IR-1, IR-2, IR-3", "IR-13, R-17, R-20", "RST, ISFL", "Régimen Simplificado"]
    },
    {
      icon: FileText,
      title: "Servicios Contables",
      description: "Servicios contables profesionales incluyendo estados financieros y auditorías externas.",
      features: ["Estados Financieros", "Auditoría Externa", "Iguala Contable", "Renovaciones"]
    },
    {
      icon: Users,
      title: "Registro de Marcas",
      description: "Protección de su identidad comercial mediante registro de nombres, marcas y logos.",
      features: ["Nombre Comercial", "Registro de Marca", "Registro de Logo", "Fundaciones sin Fines de Lucro"]
    },
    {
      icon: BookOpen,
      title: "Asesorías Generales",
      description: "Consultoría integral en temas legales, impositivos y contables para empresas y personas físicas.",
      features: ["Asesoría Legal", "Consultoría Fiscal", "Persona Física DGII", "Asesorías Especializadas"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos servicios integrales legales, impositivos y contables, adaptados a las necesidades 
            específicas de cada empresa y persona física para garantizar el cumplimiento normativo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-[#00cbff] p-4 rounded-xl w-fit mb-6 group-hover:bg-[#00b8e6] transition-colors duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#00cbff] transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-[#00cbff] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up">
          <div className="bg-[#00cbff] rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              ¿Necesitas asesoría legal, impositiva o contable?
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contáctanos hoy mismo para una consulta gratuita y descubre cómo podemos 
              ayudarte con todos tus trámites legales, impositivos y contables.
            </p>
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#00cbff] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#00b8e6] transition-all duration-300 transform hover:scale-105"
            >
              Solicitar Consulta Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;