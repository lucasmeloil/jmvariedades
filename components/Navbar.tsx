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

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
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
                "font-medium transition-colors hover:text-accent",
                pathname === link.path ? "text-primary" : "text-foreground/80"
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SITE_CONFIG.sections.hero.cta.path}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-5 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200"
          >
            Fale Conosco
          </a>
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {SITE_CONFIG.layout.navbar.links.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground py-2 border-b border-gray-50 last:border-0"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
