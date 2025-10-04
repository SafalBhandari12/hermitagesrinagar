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
    title: "Spectacular Valley Views",
    description:
      "Wake up to panoramic vistas of snow-capped peaks and pristine valleys from every room",
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description:
      "Stay connected with complimentary high-speed internet throughout the entire property",
  },
  {
    icon: Car,
    title: "Complimentary Parking",
    description:
      "Secure, valet parking service available 24/7 for all our valued guests",
  },
  {
    icon: Coffee,
    title: "Premium Amenities",
    description:
      "Luxury in-room facilities including premium tea/coffee maker and gourmet minibar",
  },
  {
    icon: Utensils,
    title: "Gourmet Dining",
    description:
      "Award-winning restaurants serving authentic Kashmiri cuisine alongside international delicacies",
  },
  {
    icon: Shield,
    title: "Premium Security",
    description:
      "Round-the-clock security with CCTV monitoring ensuring complete peace of mind",
  },
  {
    icon: Camera,
    title: "Instagram Paradise",
    description:
      "Picture-perfect locations and curated photo experiences throughout our scenic property",
  },
  {
    icon: MapPin,
    title: "Prime Srinagar Location",
    description:
      "Strategically located in Srinagar's heart with easy access to major tourist attractions and adventure activities",
  },
];

const stats = [
  { number: "50+", label: "Luxury Rooms & Suites" },
  { number: "4.9", label: "Guest Rating" },
  { number: "24/7", label: "Concierge Service" },
  { number: "100%", label: "Guest Satisfaction" },
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
            Why Choose Hermitage Hotels
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Discover the perfect blend of luxury and nature at Hermitage Hotels,
            where every moment becomes a treasured memory. Nestled in Kashmir's
            breathtaking landscape, we offer world-class hospitality,
            exceptional amenities, and personalized service that exceeds
            expectations. Your extraordinary Kashmir experience begins here.
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
          <div className='bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 mb-8'>
            <h3 className='text-2xl md:text-3xl font-serif text-gray-900 mb-4'>
              Ready for Your Kashmir Adventure?
            </h3>
            <p className='text-gray-600 text-lg mb-6 max-w-2xl mx-auto'>
              Join thousands of satisfied guests who have made Hermitage Hotels
              their home away from home in paradise. Book now and experience the
              magic of Kashmir like never before.
            </p>
            <motion.button
              className='bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reserve Your Stay Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
