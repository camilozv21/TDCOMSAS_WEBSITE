'use client';

import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/5 -skew-x-12 translate-x-1/4 z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-4">
            Hablemos de tu Proyecto
          </h2>
          <p className="text-gray-600 text-lg">
            ¿Listo para mejorar tu infraestructura? Contáctanos para una asesoría gratuita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-brand-primary/5 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-brand-secondary mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-brand-primary/10 p-3 rounded-lg text-brand-primary mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Llámanos</p>
                    <p className="font-semibold text-brand-secondary text-lg">+57 (1) 234 5678</p>
                    <p className="text-gray-600 text-sm">+57 300 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-primary/10 p-3 rounded-lg text-brand-primary mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Escríbenos</p>
                    <p className="font-semibold text-brand-secondary text-lg">ventas@tdcom.com</p>
                    <p className="text-gray-600 text-sm">soporte@tdcom.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-primary/10 p-3 rounded-lg text-brand-primary mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Visítanos</p>
                    <p className="font-semibold text-brand-secondary text-lg">Oficina Principal</p>
                    <p className="text-gray-600">Calle 123 #45-67, Oficina 809<br />Bogotá, Colombia</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="h-64 bg-gray-100 rounded-2xl overflow-hidden relative group border border-gray-200">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1447.3530948414734!2d-75.63573982202452!3d6.162428940068538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1772566845242!5m2!1ses!2sco"
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 className="absolute inset-0"
               ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-gray-50"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Correo</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-gray-50"
                    placeholder="empresa@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-gray-50"
                  placeholder="+57 300 000 0000"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Servicio de Interés</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-gray-50"
                >
                  <option>Selecciona una opción</option>
                  <option>Telefonía IP / VoIP</option>
                  <option>Cableado Estructurado</option>
                  <option>CCTV y Seguridad</option>
                  <option>Redes Wi-Fi</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-gray-50"
                  placeholder="Cuéntanos más sobre tu proyecto..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-brand-primary text-white font-bold py-4 rounded-lg hover:bg-emerald-500 transition-colors shadow-lg shadow-brand-primary/20 flex justify-center items-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}