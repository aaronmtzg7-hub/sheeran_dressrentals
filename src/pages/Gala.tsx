
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Gala = () => {
  const vestidos = [
    { name: 'Vestido Gala 1', img: 'https://picsum.photos/seed/gala1/400/600' },
    { name: 'Vestido Gala 2', img: 'https://picsum.photos/seed/gala2/400/600' },
  ];

  return (
    <div>
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-serif text-gold mb-12">Colección Gala</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vestidos.map((v, i) => (
            <div key={i} className="overflow-hidden rounded-xl cursor-pointer">
              <img 
                src={v.img} 
                alt={v.name} 
                className="w-full h-64 object-cover"
              />
              <p className="mt-2 text-center font-semibold">{v.name}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Gala;