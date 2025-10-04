"use client";

import { motion } from "framer-motion";
import { Utensils, Coffee } from "lucide-react";

const diningImages = [
  "/food/RCS00126.JPG",
  "/food/RCS00127.JPG",
  "/food/RCS00128.JPG",
  "/food/RCS00129.JPG",
  "/food/RCS00130.JPG",
  "/food/RCS00131.JPG",
];

export default function DiningSection() {
  return (
    <section id='dining' className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl md:text-5xl font-serif text-gray-900 mb-4'>
            Dining at Hermitage
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Savor curated Kashmiri flavors and global cuisines in elegant, cozy
            settings.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {diningImages.map((src, idx) => (
            <motion.div
              key={src}
              className='group rounded-xl overflow-hidden shadow-lg bg-gray-50'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <div
                className='h-56 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700'
                style={{ backgroundImage: `url(${src})` }}
              />
              <div className='p-4 flex items-center justify-between'>
                <div className='flex items-center space-x-2 text-gray-700'>
                  <Utensils className='w-5 h-5 text-yellow-500' />
                  <span className='font-medium'>Signature Dish</span>
                </div>
                <Coffee className='w-5 h-5 text-gray-400' />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
