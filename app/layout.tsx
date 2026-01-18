import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import clsx from "clsx";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE_CONFIG.project.name,
  description: SITE_CONFIG.project.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={clsx(
          inter.variable,
          poppins.variable,
          "antialiased min-h-screen flex flex-col"
        )}
      >
        {children}
      </body>
    </html>
  );
}
