import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Mail, Phone, Building, MessageSquare, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { trackFormSubmission } from '../utils/analytics';

interface TimeSlot {
  time: string;
  available: boolean;
}

interface AppointmentData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

const AppointmentPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<AppointmentData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const services = [
    'Constitución de Compañías (SRL, EIRL)',
    'Registros DGII-RPE-TSS',
    'Servicios Impositivos',
    'Servicios Contables',
    'Registro de Marcas',
    'Asesoría General',
    'Auditoría Externa',
    'Estados Financieros'
  ];

  const businessHours = [
    '08:00', '09:00', '10:00', '11:00', '12:00',
    '14:00', '15:00', '16:00', '17:00'
  ];

  // Simulate Google Calendar integration
  const checkAvailability = async (date: string) => {
    setIsLoading(true);
    
    // Simulate API call to Google Calendar
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock occupied slots (in real implementation, this would come from Google Calendar API)
    const occupiedSlots = ['09:00', '14:00', '16:00'];
    
    const slots = businessHours.map(time => ({
      time,
      available: !occupiedSlots.includes(time)
    }));
    
    setAvailableSlots(slots);
    setIsLoading(false);
  };

  useEffect(() => {
    if (selectedDate) {
      checkAvailability(selectedDate);
    }
  }, [selectedDate]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    setSelectedDate(date);
    setSelectedTime('');
    setFormData({ ...formData, date, time: '' });
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setFormData({ ...formData, time });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate Google Calendar API integration
    try {
      // In real implementation, this would:
      // 1. Create event in Google Calendar
      // 2. Send confirmation email
      // 3. Store appointment in database
      
      trackFormSubmission('appointment_booking');
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Appointment booked:', formData);
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        date: '',
        time: '',
        message: ''
      });
      setSelectedDate('');
      setSelectedTime('');
      
    } catch (error) {
      console.error('Error booking appointment:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];
  
  // Get maximum date (3 months from now)
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxDateString = maxDate.toISOString().split('T')[0];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-[#00cbff] flex items-center justify-center pt-24 pb-12 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¡Cita Agendada Exitosamente!
          </h2>
          
          <p className="text-gray-600 mb-6">
            Hemos recibido tu solicitud de cita. Te contactaremos pronto para confirmar 
            los detalles y enviarte la información de la reunión.
          </p>
          
          <div className="space-y-3 text-sm text-gray-500 mb-8">
            <p><strong>Fecha:</strong> {new Date(formData.date).toLocaleDateString('es-ES')}</p>
            <p><strong>Hora:</strong> {formData.time}</p>
            <p><strong>Servicio:</strong> {formData.service}</p>
          </div>
          
          <Link 
            to="/"
            className="inline-flex items-center space-x-2 bg-[#00cbff] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00b8e6] transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al Inicio</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-[#00cbff] pt-24 pb-12">
      <SEO 
        title="Agenda tu Cita - ASENP Quality Consulting"
        description="Programa una consulta personalizada con nuestros expertos en servicios legales, impositivos y contables. Más de 10 años de experiencia."
        url="https://asenp-quality-consulting.vercel.app/citas"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link 
            to="/"
            className="inline-flex items-center space-x-2 text-gray-700 hover:text-[#00cbff] transition-colors mb-6 mt-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al Inicio</span>
          </Link>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Agenda tu Consulta
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Programa una consulta personalizada con nuestros expertos en servicios 
            legales, impositivos y contables.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Form Section */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Información de la Cita
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00cbff] focus:border-transparent"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00cbff] focus:border-transparent"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00cbff] focus:border-transparent"
                        placeholder="(809) 000-0000"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Building className="w-4 h-4 inline mr-2" />
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00cbff] focus:border-transparent"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Servicio de Interés *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00cbff] focus:border-transparent"
                    >
                      <option value="">Selecciona un servicio</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  {/* Date Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Fecha Preferida *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={selectedDate}
                      onChange={handleDateChange}
                      min={today}
                      max={maxDateString}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00cbff] focus:border-transparent"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Mensaje Adicional
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00cbff] focus:border-transparent resize-none"
                      placeholder="Cuéntanos más detalles sobre tu consulta..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!selectedTime || isLoading}
                    className="w-full bg-[#00cbff] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#00b8e6] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Procesando...</span>
                      </>
                    ) : (
                      <>
                        <Calendar className="w-5 h-5" />
                        <span>Agendar Cita</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Time Selection Section */}
              <div className="bg-gray-50 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  <Clock className="w-6 h-6 inline mr-2" />
                  Horarios Disponibles
                </h2>

                {!selectedDate ? (
                  <div className="text-center py-12">
                    <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">
                      Selecciona una fecha para ver los horarios disponibles
                    </p>
                  </div>
                ) : isLoading ? (
                  <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00cbff] mx-auto mb-4"></div>
                    <p className="text-gray-500">Verificando disponibilidad...</p>
                  </div>
                ) : (
                  <div>
                    <p className="text-sm text-gray-600 mb-4">
                      Fecha seleccionada: <strong>{new Date(selectedDate).toLocaleDateString('es-ES')}</strong>
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {availableSlots.map((slot) => (
                        <button
                          key={slot.time}
                          type="button"
                          onClick={() => slot.available && handleTimeSelect(slot.time)}
                          disabled={!slot.available}
                          className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                            selectedTime === slot.time
                              ? 'bg-[#00cbff] text-white'
                              : slot.available
                              ? 'bg-white text-gray-700 hover:bg-[#00cbff] hover:text-white border border-gray-200'
                              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          {slot.time}
                          {!slot.available && (
                            <span className="block text-xs">Ocupado</span>
                          )}
                        </button>
                      ))}
                    </div>

                    {selectedTime && (
                      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-green-800 text-sm">
                          <CheckCircle className="w-4 h-4 inline mr-2" />
                          Horario seleccionado: <strong>{selectedTime}</strong>
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Business Hours Info */}
                <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Horarios de Atención</h4>
                  <p className="text-blue-800 text-sm">
                    Lunes - Viernes: 8:00 AM - 6:00 PM<br />
                    Sábado: 9:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;