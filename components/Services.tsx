'use client';

import { motion } from 'framer-motion';
import { PhoneCall, Network, ShieldCheck, Wifi, Server, Headset } from 'lucide-react';

const services = [
  {
    icon: PhoneCall,
    title: 'Telefonía IP / VoIP',
    description: 'Moderniza tus comunicaciones empresariales con sistemas de voz sobre IP escalables, económicos y de alta calidad.',
  },
  {
    icon: Network,
    title: 'Cableado Estructurado',
    description: 'Instalación certificada de cableado Categoría 6, 6A y Fibra Óptica para garantizar la velocidad de tu red.',
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad CCTV',
    description: 'Sistemas de videovigilancia avanzados con acceso remoto y análisis inteligente para proteger tus activos.',
  },
  {
    icon: Wifi,
    title: 'Redes Wi-Fi Corporativas',
    description: 'Diseño e implementación de redes inalámbricas de alta densidad con cobertura total y gestión centralizada.',
  },
  {
    icon: Server,
    title: 'Infraestructura TI',
    description: 'Organización de cuartos de telecomunicaciones, racks y data centers con estándares internacionales.',
  },
  {
    icon: Headset,
    title: 'Soporte y Mantenimiento',
    description: 'Planes de mantenimiento preventivo y correctivo para asegurar la continuidad operativa de tu negocio.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-brand-secondary mb-4"
          >
            Nuestros Servicios
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Soluciones integrales diseñadas para optimizar la infraestructura tecnológica de tu empresa.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-primary/20 group"
            >
              <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors text-brand-primary">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-brand-secondary mb-3 group-hover:text-brand-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}