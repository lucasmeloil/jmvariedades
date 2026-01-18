import Navbar from "@/components/Navbar";
import Hero from "@/components/Sections/Hero";
import HighlightProducts from "@/components/Sections/HighlightProducts";
import Feedback from "@/components/Sections/Feedback";
import About from "@/components/Sections/About";
import Contact from "@/components/Sections/Contact";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <HighlightProducts />
      <Feedback />
      <About />
      <Contact />
      <Footer />
      <MobileMenu />
    </main>
  );
}
