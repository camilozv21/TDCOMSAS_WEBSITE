'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white text-brand-secondary">
      {/* Background Gradient Mesh - Minimalist abstract background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px]" />
      </div>

      {/* Pattern Overlay - Subtle dot grid */}
      <div className="absolute inset-0 z-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-sm font-semibold mb-6 tracking-wide uppercase">
            Soluciones Tecnológicas Integrales
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-brand-secondary">
            Conectividad que impulsa <br className="hidden md:block"/>
            <span className="text-brand-primary relative">
              tu negocio al futuro
              {/* Underline decoration */}
              <svg className="absolute w-full h-3 bottom-0 left-0 text-brand-primary/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-medium">
            Especialistas en Telefonía IP, Cableado Estructurado y Redes Corporativas. 
            Diseñamos la infraestructura digital sólida que tu empresa necesita.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="#contact" 
              className="group flex items-center bg-brand-primary text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-emerald-600 hover:shadow-lg hover:shadow-brand-primary/30"
            >
              Comenzar Proyecto
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#services" 
              className="px-8 py-4 rounded-full font-medium text-lg border border-gray-200 text-brand-secondary hover:bg-gray-50 hover:border-gray-300 transition-colors"
            >
              Ver Servicios
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-gray-400 text-sm font-medium">
          <span className="mb-2 text-brand-secondary/60">Descubre más</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-brand-primary"
          >
            <ChevronDown size={24} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}