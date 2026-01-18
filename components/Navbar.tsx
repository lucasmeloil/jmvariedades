"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isMobileMenuOpen
          ? "bg-transparent py-4" // Force transparent when open
          : isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div 
        className={clsx(
          "container mx-auto px-4 flex items-center justify-between transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
      >
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/img/logo.png"
            alt={SITE_CONFIG.project.name}
            className="h-12 w-auto object-contain"
            // Fallback text if image missing
            onError={(e) => {
               e.currentTarget.style.display = 'none';
               e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <span className="text-xl font-heading font-bold text-primary hidden">
            {SITE_CONFIG.project.name}
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {SITE_CONFIG.layout.navbar.links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={clsx(
                "relative font-medium transition-colors hover:text-blue-500 group py-1",
                pathname === link.path ? "text-blue-600" : "text-slate-700"
              )}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
          <motion.a
            href={SITE_CONFIG.sections.hero.cta.path}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2.5 rounded-full font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all shadow-md flex items-center gap-2"
          >
            Fale Conosco
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown (different from fixed bottom menu) */}
      {/* Mobile Menu Overlay */}
      {/* Mobile Menu Overlay - Full Screen Premium Style */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-md md:hidden flex items-center justify-center"
          >
            {/* Close Button absolute positioned */}
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="w-full max-w-md px-6 flex flex-col items-center gap-8">
               {/* Logo in Menu */}
               <motion.img 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  src="/img/logo.png" 
                  alt="Logo" 
                  className="h-16 w-auto mb-4 invert brightness-0 opacity-90"
               />

              <div className="flex flex-col items-center gap-6 w-full">
                {SITE_CONFIG.layout.navbar.links.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 100 }}
                    className="w-full"
                  >
                    <Link
                      href={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={clsx(
                        "text-3xl font-bold block text-center py-2 transition-colors",
                        pathname === link.path ? "text-blue-400" : "text-white/80 hover:text-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 w-full"
                >
                   <a
                    href={SITE_CONFIG.sections.hero.cta.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-white text-slate-900 rounded-full py-4 text-lg font-bold shadow-xl hover:scale-105 transition-transform"
                  >
                    Fale Conosco
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
