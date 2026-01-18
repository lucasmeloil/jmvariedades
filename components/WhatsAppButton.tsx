"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "73998703962"; // Mequinho's number from constants
  const message = encodeURIComponent(
    "Ola Mequinho estou aqui na praia , gostaria de saber mais sobre seus produtos"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group hover:bg-[#128C7E] transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
    >
      {/* Pulsing Effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping group-hover:animate-none"></span>
      
      <div className="relative flex items-center gap-2">
        <MessageCircle size={32} fill="white" className="text-[#25D366]" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-sm">
          Fale Conosco
        </span>
      </div>
    </motion.a>
  );
}
