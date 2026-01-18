"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CLIENT_FEEDBACK } from "@/lib/constants";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

export default function Feedback() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="feedback" className="py-24 bg-blue-900 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-300 font-semibold tracking-wider uppercase text-sm mb-2 block">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
            O que nossos clientes dizem
          </h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {CLIENT_FEEDBACK.map((feedback) => (
            <motion.div
              key={feedback.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-xl flex flex-col"
            >
              <div className="mb-6 text-blue-400">
                <Quote size={40} className="fill-current opacity-50" />
              </div>
              
              <p className="text-slate-100 text-lg mb-6 leading-relaxed flex-grow italic">
                "{feedback.message}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-400">
                  <Image
                    src={feedback.avatar}
                    alt={feedback.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">{feedback.name}</h4>
                  <p className="text-sm text-blue-200">{feedback.location}</p>
                </div>
              </div>

               <div className="flex gap-1 mt-4">
                  {[...Array(feedback.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
               </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
