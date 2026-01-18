"use client";

import { motion } from "framer-motion";
import { MapPin, Heart, User } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden" id="sobre">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden md:flex transform transition-all hover:shadow-2xl duration-300">
            {/* Image Section */}
            <motion.div 
              className="md:w-1/2 relative min-h-[400px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <img
                src="/img/mequinho.jpg"
                alt="Mequinho - Administrador da JM Variedades"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                <div className="inline-flex items-center gap-2 bg-blue-600/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-2">
                  <MapPin size={14} />
                  <span>Natural de Itabaiana - SE</span>
                </div>
                <h3 className="text-2xl font-bold font-heading">Mequinho</h3>
                <p className="text-blue-100">Administrador</p>
              </div>
            </motion.div>

            {/* Content Section */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white relative">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-blue-600">
                <User size={120} />
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold font-heading text-slate-800 mb-6">
                  Quem faz a <span className="text-blue-600">JM Variedades</span>
                </h2>
                
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  A JM Variedades é administrada por <strong className="text-blue-600">Mequinho</strong>, 
                  que traz consigo a energia e a hospitalidade de suas raízes.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="bg-blue-100 p-2 rounded-full text-blue-600 mt-1">
                      <Heart size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Dedicação Total</h4>
                      <p className="text-slate-600">
                        Tratando com todo carinho turistas de todo o mundo em Porto Seguro e Arraial d'Ajuda.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-xl border border-amber-100">
                    <div className="bg-amber-100 p-2 rounded-full text-amber-600 mt-1">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Raízes Fortes</h4>
                      <p className="text-slate-600">
                        Natural de Itabaiana, Sergipe, trazendo a alegria do nordeste para cada atendimento.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
