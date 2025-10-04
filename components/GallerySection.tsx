"use client";

import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import Image from "next/image";

const outdoorImages = [
  "/outdoor/RCS00118.JPG",
  "/outdoor/RCS00119.JPG",
  "/outdoor/RCS00121.JPG",
  "/outdoor/RCS00122.JPG",
  "/outdoor/RCS00123.JPG",
  "/outdoor/RCS00124.JPG",
];

export default function GallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const scrollSpeed = 0.5; // pixels per frame for smooth continuous movement

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        // Reset to beginning when we've scrolled through the first set
        scrollContainer.scrollLeft = 0;
      } else {
        // Continuous scroll to the right
        scrollContainer.scrollLeft += scrollSpeed;
      }
      animationId = requestAnimationFrame(scroll);
    };

    // Start the animation
    animationId = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Duplicate images for infinite scrolling effect
  const duplicatedImages = [...outdoorImages, ...outdoorImages];

  return (
    <section id='gallery' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <motion.div
          className='text-center mb-12 lg:mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-4'>
            Gallery
          </h2>
          <p className='text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4'>
            A glimpse of our serene surroundings and elegant spaces.
          </p>
        </motion.div>

        <div className='relative overflow-hidden'>
          <div
            ref={scrollRef}
            className='flex gap-4 overflow-x-hidden pb-2'
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {duplicatedImages.map((src, idx) => (
              <motion.div
                key={`${src}-${idx}`}
                className='relative rounded-lg overflow-hidden shadow-md group min-w-[200px] sm:min-w-[240px] md:min-w-[320px] flex-shrink-0'
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: (idx % outdoorImages.length) * 0.05,
                }}
                viewport={{ once: true }}
              >
                <div className='relative h-32 sm:h-40 md:h-48 lg:h-56 w-[200px] sm:w-[240px] md:w-[320px] bg-gray-100 overflow-hidden'>
                  <Image
                    src={src}
                    alt={`Gallery Image ${(idx % outdoorImages.length) + 1}`}
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                    sizes='(max-width: 640px) 200px, (max-width: 768px) 240px, 320px'
                    loading={idx < 6 ? "eager" : "lazy"}
                    quality={75}
                  />
                </div>
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors' />
                <div className='absolute bottom-2 left-2 flex items-center space-x-2 text-white opacity-0 group-hover:opacity-100 transition-opacity'>
                  <ImageIcon className='w-3 h-3 sm:w-4 sm:h-4' />
                  <span className='text-xs'>Outdoor</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
