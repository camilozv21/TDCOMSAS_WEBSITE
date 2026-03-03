'use client';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const benefits = [
    "Más de 10 años de experiencia en telecomunicaciones.",
    "Personal técnico certificado y capacitado.",
    "Garantía extendida en instalaciones y equipos.",
    "Soporte técnico prioritario 24/7.",
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden bg-brand-light aspect-[4/3] shadow-2xl border border-gray-100">
              <div className="absolute inset-0 bg-brand-secondary/5 flex items-center justify-center">
                 <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 skew-x-12 transform translate-x-1/4"></div>
                 <div className="text-gray-400 font-medium">[Imagen: Técnicos trabajando en Rack de Servidores]</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-brand-primary font-semibold tracking-wider text-sm uppercase mb-2 block">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-6">
              Comprometidos con la excelencia en conectividad
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              En TDCOM SAS, entendemos que la comunicación es el corazón de su negocio. Nos dedicamos a diseñar e implementar soluciones de infraestructura tecnológica que garantizan estabilidad, velocidad y seguridad.
            </p>
            <p className="text-gray-600 mb-8">
              Desde pequeñas oficinas hasta grandes corporaciones, nuestro enfoque personalizado asegura que cada cable, cada cámara y cada teléfono IP esté optimizado para sus necesidades específicas.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-brand-secondary">
                  <CheckCircle2 className="w-6 h-6 text-brand-primary mr-3 flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}