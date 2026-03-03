'use client';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "Oficinas Global Tech",
      category: "Cableado Estructurado",
      description: "Instalación de 200 puntos de red Cat6A y fibra óptica backbone.",
      color: "bg-blue-500" 
    },
    {
      title: "Call Center Conecta",
      category: "Telefonía IP",
      description: "Implementación de central VoIP para 50 agentes con análisis en tiempo real.",
      color: "bg-emerald-500"
    },
    {
      title: "Edificio 100",
      category: "CCTV & Seguridad",
      description: "Sistema de vigilancia perimetral con 32 cámaras IP y control de acceso.",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <span className="text-brand-primary font-semibold tracking-wider text-sm uppercase mb-2 block">
              Portafolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary">
              Nuestros Proyectos Recientes
            </h2>
          </div>
          <button className="hidden md:block text-brand-primary font-medium hover:text-emerald-600 transition-colors">
            Ver todos los proyectos &rarr; 
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-white shadow-md cursor-pointer border border-gray-100"
            >
              <div className={`absolute inset-0 ${project.color} opacity-10 group-hover:scale-110 transition-transform duration-700`}></div>
              <div className="absolute inset-0 bg-brand-secondary/5 group-hover:bg-brand-secondary/20 transition-colors duration-300"></div>

              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-bold text-brand-primary uppercase tracking-wider bg-white/80 px-2 py-1 rounded mb-2 inline-block backdrop-blur-sm shadow-sm">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-brand-secondary mb-2 group-hover:text-brand-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button className="text-brand-primary font-medium hover:text-emerald-600 transition-colors">
            Ver todos los proyectos &rarr; 
          </button>
        </div>
      </div>
    </section>
  );
}