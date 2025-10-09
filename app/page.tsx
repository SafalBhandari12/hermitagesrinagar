import { Metadata } from "next";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import FeaturesSection from "@/components/FeaturesSection";
import RoomsSection from "@/components/RoomsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import DiningSection from "@/components/DiningSection";
import GallerySection from "@/components/GallerySection";

export const metadata: Metadata = {
  title:
    "Hermitage Hotels and Resorts - Luxury 4-Star Resort in Srinagar, Kashmir",
  description:
    "Discover luxury at Hermitage Hotels and Resorts, premier 4-star accommodation in Srinagar, Kashmir. Experience breathtaking valley views, world-class amenities, and exceptional hospitality in the heart of Kashmir.",
  keywords:
    "Hermitage Hotels Srinagar, Kashmir luxury resort, Srinagar 4-star hotel, Kashmir accommodation, valley view hotel, luxury stay Kashmir, Batamaloo hotel, Srinagar hospitality",
  openGraph: {
    title:
      "Hermitage Hotels and Resorts - Luxury 4-Star Resort in Srinagar, Kashmir",
    description:
      "Discover luxury at Hermitage Hotels and Resorts, premier 4-star accommodation in Srinagar, Kashmir. Experience breathtaking valley views, world-class amenities, and exceptional hospitality.",
    type: "website",
    url: "https://hermitagehotelssrinagar.com",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Hermitage Hotels and Resorts - Luxury 4-Star Resort in Srinagar, Kashmir",
    description:
      "Discover luxury at Hermitage Hotels and Resorts, premier 4-star accommodation in Srinagar, Kashmir.",
  },
  alternates: {
    canonical: "https://hermitagehotelssrinagar.com",
  },
};

export default function Home() {
  return (
    <main className='min-h-screen overflow-x-hidden'>
      <h1 className='sr-only'>
        Hermitage Hotels and Resorts - Premier Luxury Resort in Srinagar,
        Kashmir
      </h1>
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
