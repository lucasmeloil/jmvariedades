"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG, HERO_SLIDES } from "@/lib/constants";
import { ArrowRight, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-slate-900">
      <AnimatePresence mode="wait">
        <motion.div
           key={currentSlide}
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 1 }}
           className="absolute inset-0 z-0"
        >
          {/* Overlay gradient */}
           <div className="absolute inset-0 bg-black/40 z-10" />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent z-10" />
           
           <img 
             src={HERO_SLIDES[currentSlide].image} 
             alt={HERO_SLIDES[currentSlide].title}
             className="w-full h-full object-cover"
           />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-4 relative z-20 grid md:grid-cols-2 gap-12 items-center pt-20">
        <div className="space-y-6 text-center md:text-left text-white">
          <motion.div
            key={`text-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span>{HERO_SLIDES[currentSlide].subtitle}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-[1.1] mb-6 drop-shadow-xl">
              {HERO_SLIDES[currentSlide].title}
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
               Aproveite o melhor do verão com nossos produtos exclusivos. Entregamos onde você estiver.
            </p>
          
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                href={SITE_CONFIG.sections.hero.cta.path}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-white text-lg font-bold rounded-xl shadow-lg shadow-blue-900/50 hover:shadow-xl hover:shadow-blue-900/60 transition-all flex items-center justify-center gap-2 group border border-white/10"
              >
                 Fale no WhatsApp
                 <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#produtos"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 text-lg font-bold rounded-xl hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
              >
                 Ver Destaques
                 <ShoppingBag size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-4">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-12 bg-white" : "w-3 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/20 text-white backdrop-blur-sm border border-white/10 hover:bg-black/40 transition-colors hidden md:flex"
      >
        <ChevronLeft size={32} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/20 text-white backdrop-blur-sm border border-white/10 hover:bg-black/40 transition-colors hidden md:flex"
      >
        <ChevronRight size={32} />
      </button>
    </section>
  );
}
