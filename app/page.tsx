import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import FeaturesSection from "@/components/FeaturesSection";
import RoomsSection from "@/components/RoomsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Header />
      <HeroSlider />
      <FeaturesSection />
      <RoomsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
