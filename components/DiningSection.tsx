"use client";

import { motion } from "framer-motion";
import { Utensils, Coffee } from "lucide-react";
import Image from "next/image";

const diningImages = [
  { src: "/food/RCS00126.JPG", name: "Chicken Lollipops" },
  { src: "/food/RCS00127.JPG", name: "Chicken Lollipops" },
  { src: "/food/RCS00128.JPG", name: "Mixed Vegetable Stir-fry" },
  { src: "/food/RCS00129.JPG", name: "Chilli Chicken (Dry)" },
  { src: "/food/RCS00130.JPG", name: "Chicken Lollipops" },
  { src: "/food/RCS00131.JPG", name: "Vegetable Fried Rice" },
];

export default function DiningSection() {
  return (
    <section id='dining' className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <motion.div
          className='text-center mb-12 lg:mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-4'>
            Dining at Hermitage
          </h2>
          <p className='text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4'>
            Savor curated Kashmiri flavors and global cuisines in elegant, cozy
            settings.
          </p>
        </motion.div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6'>
          {diningImages.map((item, idx) => (
            <motion.div
              key={item.src}
              className='group rounded-xl overflow-hidden shadow-lg bg-gray-50 will-change-transform'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: Math.min(idx * 0.1, 0.3),
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className='relative h-48 lg:h-56 overflow-hidden bg-gray-100'>
                <Image
                  src={item.src}
                  alt={`${item.name} - Dining at Hermitage`}
                  fill
                  className='object-cover transform transition-transform duration-500 group-hover:scale-105'
                  sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  loading={idx < 3 ? "eager" : "lazy"}
                  quality={80}
                />
              </div>
              <div className='p-3 lg:p-4 flex items-center justify-between'>
                <div className='flex items-center space-x-2 text-gray-700'>
                  <Utensils className='w-4 h-4 lg:w-5 lg:h-5 text-yellow-500' />
                  <span className='font-medium text-sm lg:text-base'>
                    {item.name}
                  </span>
                </div>
                <Coffee className='w-4 h-4 lg:w-5 lg:h-5 text-gray-400' />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
