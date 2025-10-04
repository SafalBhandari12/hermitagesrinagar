"use client";

import { motion } from "framer-motion";
import {
  Wifi,
  Car,
  Coffee,
  Utensils,
  Mountain,
  Shield,
  Camera,
  MapPin,
} from "lucide-react";

const features = [
  {
    icon: Mountain,
    title: "Breathtaking Views",
    description: "Stunning mountain vistas and valley views from every room",
  },
  {
    icon: Wifi,
    title: "Free WiFi",
    description: "Complimentary high-speed internet throughout the property",
  },
  {
    icon: Car,
    title: "Free Parking",
    description: "Ample parking space for all our guests",
  },
  {
    icon: Coffee,
    title: "Tea/Coffee Maker",
    description: "In-room amenities for your comfort and convenience",
  },
  {
    icon: Utensils,
    title: "Fine Dining",
    description:
      "Exceptional culinary experiences with local and international cuisine",
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Round-the-clock security for your peace of mind",
  },
  {
    icon: Camera,
    title: "Photo Spots",
    description: "Instagram-worthy locations throughout the property",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description:
      "Located in the heart of Pahalgam with easy access to attractions",
  },
];

const stats = [
  { number: "50+", label: "Luxury Rooms" },
  { number: "4.8", label: "Guest Rating" },
  { number: "24/7", label: "Room Service" },
  { number: "100%", label: "Satisfaction" },
];

export default function FeaturesSection() {
  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl md:text-5xl font-serif text-gray-900 mb-4'>
            Why Choose Hermitage
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Experience unparalleled luxury and comfort in the heart of Kashmir's
            pristine beauty. Our world-class amenities and personalized service
            ensure an unforgettable stay.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-20'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <div key={index} className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-yellow-500 mb-2'>
                {stat.number}
              </div>
              <div className='text-gray-600 font-medium'>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className='text-center group'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className='w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 transition-all duration-300'
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className='w-8 h-8 text-yellow-600 group-hover:text-white transition-colors duration-300' />
              </motion.div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300'>
                {feature.title}
              </h3>
              <p className='text-gray-600 text-sm leading-relaxed'>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className='text-center mt-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className='bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Stay Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
