import React from 'react';
import { ChevronRight, MessageCircle, Instagram } from 'lucide-react';
import { 
  MapPin,
  Clock,
} from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-black-deep text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-serif tracking-widest text-gold mb-8">SHEERAN</h2>
            <p className="text-white/50 font-light leading-relaxed mb-8">
              Boutique exclusiva de renta de vestidos de lujo. Empoderando mujeres a través de la elegancia y la sofisticación.
            </p>
            <div className="flex gap-6 text-gold">
              <Instagram className="hover:scale-110 transition-transform cursor-pointer" />
              <MessageCircle className="hover:scale-110 transition-transform cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-8">Contacto</h4>
            <ul className="space-y-4 text-white/70 font-light">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold shrink-0" />
                <span>Av. de la Elegancia 123, Col. Lujo, Ciudad de México</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-gold shrink-0" />
                <span>+52 1 55 1234 5678</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-8">Horarios</h4>
            <ul className="space-y-4 text-white/70 font-light">
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-gold shrink-0" />
                <span>Lun - Vie: 10:00 - 20:00</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-gold shrink-0" />
                <span>Sáb: 10:00 - 18:00</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-gold shrink-0" />
                <span>Dom: Cerrado (Citas especiales)</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-8">Newsletter</h4>
            <p className="text-white/50 text-sm mb-6">Recibe noticias de nuestras nuevas colecciones y eventos exclusivos.</p>
            <div className="flex border-b border-white/20 pb-2">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="bg-transparent border-none outline-none text-sm w-full placeholder:text-white/30"
              />
              <button className="text-gold hover:translate-x-1 transition-transform">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">
          <p>© 2024 Sheeran Boutique. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold transition-colors">Aviso de Privacidad</a>
            <a href="#" className="hover:text-gold transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-40"
      >
        <MessageCircle size={32} />
      </a>
    </footer>
  );
};

export default Footer;