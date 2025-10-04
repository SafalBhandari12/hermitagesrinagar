import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import FeaturesSection from "@/components/FeaturesSection";
import RoomsSection from "@/components/RoomsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import DiningSection from "@/components/DiningSection";
import GallerySection from "@/components/GallerySection";

export default function Home() {
  return (
    <main className='min-h-screen overflow-x-hidden'>
      <Header />
      <HeroSlider />
      <FeaturesSection />
      <RoomsSection />
      <DiningSection />
      <GallerySection />
      <TestimonialsSection />
      {/* Anchor wrapper for contact */}
      <section id='contact' className='pt-0'>
        <ContactSection />
      </section>
      <Footer />
    </main>
  );
}
