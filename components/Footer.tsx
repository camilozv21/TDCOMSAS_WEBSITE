import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="mb-6 block">
              <Image 
                src="https://df50lbm4qcrt6.cloudfront.net/TDCOMSAS_WEBSITE/Logos-07.png"
                alt="TDCOM SAS"
                width={140}
                height={45}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Empresa líder en soluciones de telecomunicaciones y redes estructuradas. Conectando negocios con tecnología confiable y expertos certificados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="font-bold text-brand-secondary mb-4">Empresa</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="#about" className="hover:text-brand-primary transition-colors">Nosotros</Link></li>
              <li><Link href="#services" className="hover:text-brand-primary transition-colors">Servicios</Link></li>
              <li><Link href="#projects" className="hover:text-brand-primary transition-colors">Proyectos</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Política de Privacidad</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-bold text-brand-secondary mb-4">Servicios</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="#services" className="hover:text-brand-primary transition-colors">Telefonía IP / VoIP</Link></li>
              <li><Link href="#services" className="hover:text-brand-primary transition-colors">Cableado Estructurado</Link></li>
              <li><Link href="#services" className="hover:text-brand-primary transition-colors">CCTV y Seguridad</Link></li>
              <li><Link href="#services" className="hover:text-brand-primary transition-colors">Redes Wi-Fi</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-bold text-brand-secondary mb-4">Contacto</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-brand-primary mr-3 mt-0.5 flex-shrink-0" />
                <span>Calle 123 #45-67, Oficina 809<br />Bogotá, Colombia</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0" />
                <span>+57 (1) 234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0" />
                <span>contacto@tdcom.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} TDCOM SAS. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0">Diseñado con tecnología Next.js</p>
        </div>
      </div>
    </footer>
  );
}