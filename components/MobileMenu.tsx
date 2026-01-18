"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingCart, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import clsx from "clsx";

const icons = {
  Home,
  ShoppingCart,
  Phone,
};

export default function MobileMenu() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-safe">
      <div className="bg-blue-900 text-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] px-6 py-3 pb-6 rounded-t-2xl flex justify-between items-center">
        {SITE_CONFIG.layout.mobileMenu.items.map((item) => {
          const Icon = icons[item.icon as keyof typeof icons] || Home;
          const isActive = pathname === item.path;
          
          return (
            <Link
              key={item.path}
              href={item.path}
              className="flex flex-col items-center gap-1 group"
            >
              <div
                className={clsx(
                  "p-2 rounded-xl transition-all duration-300",
                  isActive
                    ? "bg-white/20 scale-110"
                    : "group-hover:scale-110 group-hover:bg-white/10"
                )}
              >
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={clsx("text-xs font-medium", isActive ? "opacity-100" : "opacity-70 group-hover:opacity-100")}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
