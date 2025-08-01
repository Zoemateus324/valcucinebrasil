import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Cozinha Italiana de Luxo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <div className="space-y-8 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-light leading-tight">
            Design italiano,
            <span className="block font-normal text-amber-200">inovação</span>
            <span className="block font-light">e sustentabilidade</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto opacity-90">
            Para a sua cozinha dos sonhos
          </p>

          <div className="pt-8">
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-amber-100 to-amber-200 text-amber-900 px-12 py-4 rounded-lg text-lg font-semibold hover:from-amber-200 hover:to-amber-300 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Conheça nosso Showroom
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors duration-200 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;