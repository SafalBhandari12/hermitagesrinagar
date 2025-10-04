"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Hermitage a luxury experience",
    subtitle: "Exterior View",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Luxury Suite Experience",
    subtitle: "Suite Room",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Comfort & Elegance",
    subtitle: "Room View",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    title: "Breathtaking Views",
    subtitle: "Balcony",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className='relative h-screen overflow-hidden'>
      {/* Slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          className={`absolute inset-0 ${
            index === currentSlide ? "z-10" : "z-0"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div
            className='absolute inset-0 bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className='absolute inset-0 bg-black/40' />
          </div>

          {/* Content */}
          {index === currentSlide && (
            <div className='relative z-20 flex items-center justify-center h-full'>
              <div className='text-center text-white max-w-4xl mx-auto px-4'>
                <motion.h1
                  className='text-4xl md:text-6xl lg:text-7xl font-serif mb-6'
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  className='text-xl md:text-2xl text-gray-200'
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  {slide.subtitle}
                </motion.p>
              </div>
            </div>
          )}
        </motion.div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className='absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300'
      >
        <ChevronLeft className='w-6 h-6 text-white' />
      </button>
      <button
        onClick={nextSlide}
        className='absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300'
      >
        <ChevronRight className='w-6 h-6 text-white' />
      </button>

      {/* Slide Indicators */}
      <div className='absolute bottom-8 left-8 z-30 flex flex-col space-y-4'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-transparent"
            }`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className='absolute bottom-8 left-1/2 -translate-x-1/2 z-30'
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          className='p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300'
        >
          <svg
            className='w-6 h-6 text-white'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 14l-7 7m0 0l-7-7m7 7V3'
            />
          </svg>
        </button>
      </motion.div>
    </div>
  );
}
