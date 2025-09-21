import React from 'react';
import { Star, Award, Users, Target, Heart, TrendingUp } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Users, number: "40+", label: "Empresas Atendidas", color: "text-[#00cbff]" },
    { icon: TrendingUp, number: "10+", label: "Años de Experiencia", color: "text-green-600" },
    { icon: Award, number: "100%", label: "Satisfacción Cliente", color: "text-[#00cbff]" },
    { icon: Target, number: "6", label: "Servicios Especializados", color: "text-[#00cbff]" }
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Sobre ASENP Quality Consulting
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos especialistas en consultoría de calidad con más de una década de experiencia 
            transformando empresas dominicanas hacia la excelencia operacional.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Company Story */}
          <div className="animate-fade-in-up">
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-[#00cbff] p-3 rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Nuestra Historia</h3>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                ASENP Quality Consulting, SRL nació con la misión de brindar servicios profesionales 
                legales, impositivos y contables a empresas y personas físicas en República Dominicana. 
                Durante más de 10 años, hemos sido el socio estratégico de confianza para organizaciones 
                que buscan cumplir con sus obligaciones normativas de manera eficiente.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Nuestro enfoque personalizado y experiencia comprobada nos ha permitido ayudar a más 
                de 40 empresas a cumplir con sus obligaciones legales, impositivas y contables, 
                brindando tranquilidad y seguridad jurídica en cada proceso.
              </p>
            </div>
          </div>

          {/* CEO Profile */}
          <div className="animate-fade-in-up animation-delay-300">
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00cbff] to-[#00b8e6] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">NP</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Nuris Pérez</h3>
                  <p className="text-[#00cbff] font-medium">CEO & Fundadora</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Con más de una década de experiencia en servicios legales, impositivos y contables, 
                Nuris Pérez lidera ASENP Quality Consulting, SRL con pasión y 
                dedicación inquebrantable.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Su visión estratégica y conocimiento profundo del marco legal y tributario han sido 
                fundamentales para el éxito de cada proyecto, garantizando resultados 
                excepcionales para nuestros clientes.
              </p>
              
              <div className="flex items-center space-x-2 text-yellow-700">
                <Heart className="w-5 h-5" />
                <span className="font-medium text-[#00cbff]">Comprometida con la excelencia empresarial</span>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gray-50 p-6 rounded-2xl group-hover:bg-gray-100 transition-colors duration-300">
                <achievement.icon className={`w-8 h-8 ${achievement.color} mx-auto mb-4`} />
                <p className={`text-3xl font-bold ${achievement.color} mb-2`}>
                  {achievement.number}
                </p>
                <p className="text-gray-600 font-medium text-sm">
                  {achievement.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="animate-fade-in-up">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nuestros Valores
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-cyan-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Star className="w-8 h-8 text-[#00cbff]" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Excelencia</h4>
              <p className="text-gray-600">
                Nos comprometemos a entregar servicios de la más alta calidad, 
                superando las expectativas en cada trámite legal, impositivo y contable.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Compromiso</h4>
              <p className="text-gray-600">
                Cada proyecto es único y merece nuestra dedicación completa 
                para garantizar el cumplimiento normativo y resultados exitosos.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-cyan-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Target className="w-8 h-8 text-[#00cbff]" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Resultados</h4>
              <p className="text-gray-600">
                Nos enfocamos en generar impacto real y medible en la 
                gestión legal, impositiva y contable de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;