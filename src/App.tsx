/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Instagram, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronRight,
  Star,
  Sparkles,
  Heart,
  User
} from 'lucide-react';


// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Esencia', href: '#esencia' },
    { name: 'Colección', href: '#coleccion' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Testimonios', href: '#testimonios' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden text-black-deep">
            <Menu size={24} />
          </button>
          <div className="hidden lg:flex gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <a key={link.name} href={link.href} className="text-xs uppercase tracking-[0.2em] font-medium hover:text-gold transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className={`text-2xl md:text-3xl font-serif tracking-widest transition-all duration-500 ${isScrolled ? 'text-black-deep' : 'text-black-deep lg:text-white'}`}>
            SHEERAN
          </h1>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden lg:flex gap-8">
            {navLinks.slice(3).map((link) => (
              <a key={link.name} href={link.href} className="text-xs uppercase tracking-[0.2em] font-medium hover:text-gold transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="text-gold hover:scale-110 transition-transform">
            <MessageCircle size={24} />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black-deep z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-white text-2xl font-serif tracking-widest">SHEERAN</h2>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-3xl font-serif italic hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-auto flex gap-6 text-gold">
              <Instagram size={24} />
              <MessageCircle size={24} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black-deep">
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img 
          src="https://picsum.photos/seed/luxury-dress/1920/1080?grayscale" 
          alt="Luxury Dress" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </motion.div>

      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <span className="text-gold uppercase tracking-[0.4em] text-xs md:text-sm font-semibold mb-6 block">
            Exclusividad & Elegancia
          </span>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight">
            Donde cada vestido <br />
            <span className="italic">cuenta tu historia.</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light tracking-wide">
            Renta vestidos de lujo para momentos inolvidables. Diseños que celebran tu poder y sofisticación.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="gold-gradient px-12 py-5 rounded-full text-black-deep font-semibold uppercase tracking-widest text-sm shadow-2xl shadow-gold/20 hover:shadow-gold/40 transition-all"
          >
            Reservar cita
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
};

const Essence = () => {
  return (
    <section id="esencia" className="py-24 md:py-32 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://picsum.photos/seed/essence/800/1000" 
                alt="Empowerment" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 border-2 border-gold/30 rounded-2xl -z-10" />
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-gold uppercase tracking-[0.3em] text-sm font-bold mb-6">Nuestra Esencia</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
              Más que un vestido, <br />
              <span className="italic">una declaración de poder.</span>
            </h3>
            <div className="space-y-6 text-lg text-black-deep/70 font-light leading-relaxed">
              <p>
                En Sheeran, entendemos que la elegancia no es solo lo que vistes, sino cómo te sientes al caminar. Nuestra misión es empoderar a cada mujer, brindándole acceso a piezas de alta costura que reflejen su éxito y sofisticación.
              </p>
              <p>
                No solo rentamos vestidos; curamos experiencias. Cada costura, cada tela y cada detalle está pensado para que ese momento especial se convierta en un recuerdo eterno de confianza y belleza.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <div className="w-12 h-[1px] bg-gold" />
              <span className="font-serif italic text-xl">Sheeran Team</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


const Catalog = () => {
  const categories = [
    { name: "Gala", img: "https://picsum.photos/seed/gala/600/800", desc: "Elegancia atemporal", href: "/Gala" },
    { name: "XV Años", img: "https://picsum.photos/seed/dog/600/800", desc: "Sueños hechos realidad", href: "/XVAños" },
    { name: "Graduación", img: "https://picsum.photos/seed/grad/600/800", desc: "Tu primer gran éxito", href: "/Graduacion" },
    { name: "Eventos Especiales", img: "https://picsum.photos/seed/special/600/800", desc: "Momentos únicos", href: "/EventosEspeciales" },
  ];

  return (
    <section id="coleccion" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-gold uppercase tracking-[0.3em] text-sm font-bold mb-4">
            Catálogo Destacado
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif">Colecciones Exclusivas</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.a
              key={"Gala"}
              href={"/Gala.html"} // enlace directo a la página
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer block"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <h4 className="text-white text-2xl font-serif mb-2">{cat.name}</h4>
                <p className="text-white/80 text-sm font-light uppercase tracking-widest mb-6">
                  {cat.desc}
                </p>
                <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white group-hover:bg-white group-hover:text-black-deep transition-all">
                  <ChevronRight size={20} />
                </div>
              </div>
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full">
                <span className="text-[10px] uppercase tracking-widest font-bold text-black-deep">{cat.name}</span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="/vestidos" // colección completa
            className="border border-gold text-gold px-12 py-4 rounded-full uppercase tracking-widest text-xs font-bold hover:bg-gold hover:text-white transition-all"
          >
            Ver colección completa
          </a>
        </div>
      </div>
    </section>
  );
};



const Experience = () => {
  const steps = [
    { icon: <Calendar size={32} />, title: 'Agenda tu cita', desc: 'Reserva un espacio exclusivo para ti en nuestro showroom.' },
    { icon: <Sparkles size={32} />, title: 'Prueba personalizada', desc: 'Nuestros expertos te ayudarán a encontrar el diseño ideal.' },
    { icon: <CheckCircle2 size={32} />, title: 'Ajuste perfecto', desc: 'Adaptamos el vestido a tu silueta para que luzcas impecable.' },
    { icon: <Heart size={32} />, title: 'Vive tu momento', desc: 'Brilla en tu evento con la seguridad de Sheeran.' },
  ];

  return (
    <section id="experiencia" className="py-24 md:py-32 bg-black-deep text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-gold uppercase tracking-[0.3em] text-sm font-bold mb-4">Experiencia Sheeran</h2>
          <h3 className="text-4xl md:text-5xl font-serif">Tu camino hacia la elegancia</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-8 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black-deep transition-all duration-500">
                {step.icon}
              </div>
              <h4 className="text-xl font-serif mb-4">{step.title}</h4>
              <p className="text-white/60 font-light leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: 'Sofía Valenzuela', role: 'Graduada', text: 'El vestido fue increíble, me sentí como una reina en mi graduación. El servicio de ajuste es impecable.', img: 'https://i.pravatar.cc/150?u=sofia' },
    { name: 'Mariana López', role: 'Invitada de Gala', text: 'Sheeran es mi lugar de confianza. Siempre encuentro el vestido perfecto que me hace destacar.', img: 'https://i.pravatar.cc/150?u=mariana' },
    { name: 'Elena Rodríguez', role: 'Quinceañera', text: 'Hicieron que mi sueño se hiciera realidad. El vestido de mis XV fue más de lo que imaginé.', img: 'https://i.pravatar.cc/150?u=elena' },
  ];

  return (
    <section id="testimonios" className="py-24 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-gold uppercase tracking-[0.3em] text-sm font-bold mb-4">Testimonios</h2>
          <h3 className="text-4xl md:text-5xl font-serif">Historias de éxito</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {reviews.map((review, idx) => (
            <motion.div 
              key={review.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-xl shadow-black/5 relative"
            >
              <div className="flex gap-1 text-gold mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-black-deep/70 italic mb-8 font-serif text-lg leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h5 className="font-bold text-sm uppercase tracking-widest">{review.name}</h5>
                  <p className="text-gold text-xs font-medium">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InstagramGrid = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-gold uppercase tracking-[0.3em] text-sm font-bold mb-4">Social Proof</h2>
            <h3 className="text-4xl font-serif">Síguenos en Instagram</h3>
          </div>
          <button className="flex items-center gap-3 bg-black-deep text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gold transition-colors">
            <Instagram size={18} />
            @SheeranBoutique
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-lg group relative cursor-pointer">
              <img 
                src={`https://picsum.photos/seed/insta-${i}/400/400`} 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Instagram size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Essence />
      <Catalog />
      <Experience />
      <Testimonials />
      <InstagramGrid />
      <Footer />
    </div>
  );
}
