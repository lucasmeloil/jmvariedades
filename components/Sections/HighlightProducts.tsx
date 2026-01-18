"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SITE_CONFIG, MOCK_PRODUCTS } from "@/lib/constants";
import { MessageCircle, Search } from "lucide-react";
import Image from "next/image";

export default function HighlightProducts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="produtos" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
            Nossos Destaques
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
            Produtos Selecionados
          </h2>
          <p className="text-slate-600 text-lg">
            Confira as novidades que preparamos para você. Qualidade e bom gosto em um só lugar.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {MOCK_PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
            >
              <div className="relative aspect-square overflow-hidden bg-white p-6">
                 <div className="relative w-full h-full">
                   <Image 
                      src={product.imagem} 
                      alt={product.nome}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-500"
                   />
                 </div>
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a
                      href={`${SITE_CONFIG.sections.highlightProducts.ctaRedirect}?text=Olá! Gostaria de saber mais sobre o ${product.nome}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform flex items-center gap-2"
                    >
                      <MessageCircle size={18} />
                      Comprar
                    </a>
                 </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                   <h3 className="font-bold text-lg text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                     {product.nome}
                   </h3>
                   <span className="bg-blue-50 text-blue-700 text-xs font-bold px-2 py-1 rounded whitespace-nowrap ml-2">
                     Ofertão
                   </span>
                </div>
                <p className="text-slate-500 text-sm mb-4 line-clamp-3 flex-grow">
                  {product.descricao}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <span className="text-xl font-bold text-slate-900">
                    {product.preco}
                  </span>
                  <a 
                    href={`${SITE_CONFIG.sections.highlightProducts.ctaRedirect}?text=Olá! Tenho interesse no ${product.nome} de ${product.preco}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:underline hover:text-blue-700"
                  >
                    Detalhes
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <a
            href={SITE_CONFIG.sections.hero.cta.path}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
          >
            Ver Catálogo Completo
          </a>
        </div>
      </div>
    </section>
  );
}
