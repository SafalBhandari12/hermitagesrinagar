"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Mumbai, India",
    rating: 5,
    comment:
      "Absolutely stunning location with breathtaking views! The service was exceptional and the rooms were luxurious. The staff went above and beyond to make our stay memorable.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b043?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi, India",
    rating: 5,
    comment:
      "A perfect getaway in Kashmir! The hotel provides world-class amenities and the mountain views are spectacular. Highly recommend for anyone visiting Pahalgam.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    name: "Emily Chen",
    location: "Singapore",
    rating: 5,
    comment:
      "The Hermitage exceeded all our expectations. Beautiful property, excellent food, and the most welcoming staff. The location is perfect for exploring the natural beauty of Kashmir.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
];

export default function TestimonialsSection() {
  return (
    <section className='py-20 bg-gradient-to-b from-gray-50 to-gray-100'>
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
            What Our Guests Say
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Read reviews from our valued guests who have experienced the magic
            of Hermitage Hotels.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className='bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <div className='mb-4'>
                <Quote className='w-8 h-8 text-yellow-500' />
              </div>

              {/* Rating */}
              <div className='flex items-center mb-4'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className='w-5 h-5 text-yellow-400 fill-current'
                  />
                ))}
              </div>

              {/* Comment */}
              <p className='text-gray-700 mb-6 leading-relaxed'>
                "{testimonial.comment}"
              </p>

              {/* Author Info */}
              <div className='flex items-center'>
                <div
                  className='w-12 h-12 rounded-full bg-cover bg-center mr-4'
                  style={{ backgroundImage: `url(${testimonial.avatar})` }}
                />
                <div>
                  <h4 className='font-semibold text-gray-900'>
                    {testimonial.name}
                  </h4>
                  <p className='text-sm text-gray-600'>
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TripAdvisor Link */}
        <motion.div
          className='text-center mt-12'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href='https://www.tripadvisor.in/Hotel_Review-g665884-d17729599-Reviews-Hermitage-Pahalgam_Anantnag_District_Kashmir_Jammu_and_Kashmir.html'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105'
          >
            <span>View More Reviews on TripAdvisor</span>
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
