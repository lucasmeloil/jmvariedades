"use client";

import { SITE_CONFIG } from "@/lib/constants";
import { Phone, Instagram, MapPin, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 translate-x-1/3 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
              Fale Conosco
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
              Pronto para atender você em todo o litoral
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Estamos presentes em Arraial d'Ajuda, Porto Seguro, Trancoso e Caraíva. 
              Entre em contato para saber mais sobre nossos produtos ou fazer um pedido.
            </p>

            <div className="space-y-6">
              <a
                href={SITE_CONFIG.sections.contato.channels[0].link}
                className="flex items-center gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors border border-green-100 group"
              >
                <div className="bg-green-500 text-white p-3 rounded-full group-hover:scale-110 transition-transform shadow-md shadow-green-200">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">WhatsApp</h4>
                  <p className="text-slate-600 group-hover:text-green-700 transition-colors">
                    Fale agora com um atendente
                  </p>
                </div>
                <ArrowRight className="ml-auto text-green-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={SITE_CONFIG.sections.contato.channels[2].link}
                className="flex items-center gap-4 p-4 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors border border-pink-100 group"
              >
                <div className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white p-3 rounded-full group-hover:scale-110 transition-transform shadow-md shadow-pink-200">
                  <Instagram size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Instagram</h4>
                  <p className="text-slate-600 group-hover:text-pink-700 transition-colors">
                    Siga nosso perfil @jmvariedades
                  </p>
                </div>
                <ArrowRight className="ml-auto text-pink-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <div className="bg-blue-600 text-white p-3 rounded-full shadow-md shadow-blue-200">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Região de Atendimento</h4>
                  <p className="text-slate-600">
                    {SITE_CONFIG.sections.contato.address}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-primary text-white p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

             <h3 className="text-2xl font-bold mb-6 relative z-10">
               Solicite um orçamento
             </h3>
             <p className="text-blue-100 mb-8 relative z-10">
               Preencha seus dados e entraremos em contato o mais breve possível com os melhores preços da região.
             </p>

             <form className="space-y-4 relative z-10">
                <div className="space-y-1">
                   <label htmlFor="name" className="text-sm font-medium text-blue-100">Nome</label>
                   <input 
                     type="text" 
                     id="name"
                     className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all"
                     placeholder="Seu nome"
                   />
                </div>
                <div className="space-y-1">
                   <label htmlFor="phone" className="text-sm font-medium text-blue-100">WhatsApp</label>
                   <input 
                     type="tel" 
                     id="phone"
                     className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all"
                     placeholder="(73) 99999-9999"
                   />
                </div>
                <div className="space-y-1">
                   <label htmlFor="message" className="text-sm font-medium text-blue-100">Mensagem</label>
                   <textarea 
                     id="message"
                     rows={4}
                     className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all resize-none"
                     placeholder="Olá, gostaria de saber mais sobre..."
                   ></textarea>
                </div>
                <button 
                  type="button" 
                  className="w-full py-4 bg-white text-primary font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all transform hover:-translate-y-0.5"
                >
                  Enviar Mensagem
                </button>
             </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
