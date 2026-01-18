import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { Instagram, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <img 
                src="/img/logo.png" 
                alt={SITE_CONFIG.project.name}
                className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-slate-300 max-w-sm">
              {SITE_CONFIG.layout.footer.info}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              {SITE_CONFIG.layout.footer.links.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <div className="flex gap-4">
              <a
                href={SITE_CONFIG.sections.contato.channels[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone size={24} />
              </a>
              <a
                href={SITE_CONFIG.sections.contato.channels[2].link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
            <p className="mt-4 text-slate-300">
              {SITE_CONFIG.sections.contato.address}
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.project.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
