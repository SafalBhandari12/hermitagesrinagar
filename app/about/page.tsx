"use client";

import { motion } from "framer-motion";
import { Award, Users, Star, Heart, Mountain, Leaf } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Heart,
    title: "Hospitality",
    description:
      "We believe in creating warm, memorable experiences for every guest with genuine care and attention.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our service, from accommodation to dining and beyond.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We are committed to preserving the natural beauty of Kashmir for future generations.",
  },
  {
    icon: Mountain,
    title: "Heritage",
    description:
      "We celebrate and preserve the rich cultural heritage of Kashmir while embracing modern comforts.",
  },
];

const achievements = [
  {
    icon: Award,
    title: "4-Star Rating",
    description: "Certified 4-star luxury resort",
  },
  {
    icon: Users,
    title: "50+ Rooms",
    description: "Luxury accommodations",
  },
  {
    icon: Star,
    title: "4.8/5 Rating",
    description: "Guest satisfaction score",
  },
  {
    icon: Award,
    title: "10+ Years",
    description: "Of exceptional service",
  },
];

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Hero Section */}
      <section className='relative h-screen'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        >
          <div className='absolute inset-0 bg-black/40' />
        </div>
        <div className='relative z-10 container mx-auto px-4 h-full flex items-center'>
          <motion.div
            className='max-w-3xl text-white'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-5xl md:text-6xl font-serif mb-6'>
              Welcome to <span className='text-yellow-500'>Hermitage</span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-200 leading-relaxed'>
              A luxury retreat nestled in the heart of Kashmir, where tradition
              meets modern comfort and every moment becomes a cherished memory.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className='text-4xl md:text-5xl font-serif text-gray-900 mb-6'>
                Our Story
              </h2>
              <div className='space-y-6 text-gray-700 leading-relaxed'>
                <p>
                  Founded with a vision to showcase the unparalleled beauty of
                  Kashmir, Hermitage Hotels stands as a testament to luxury
                  hospitality in one of the world's most breathtaking
                  destinations. Located in the pristine valley of Pahalgam, our
                  resort offers guests an escape into nature's paradise.
                </p>
                <p>
                  Over the years, we have welcomed thousands of guests from
                  around the world, each leaving with memories that last a
                  lifetime. Our commitment to excellence, combined with the
                  natural splendor of our surroundings, creates an experience
                  that is truly unforgettable.
                </p>
                <p>
                  At Hermitage, we believe that hospitality is an art form.
                  Every detail, from our elegantly appointed rooms to our
                  world-class dining experiences, is crafted with care and
                  precision to ensure that your stay with us exceeds every
                  expectation.
                </p>
              </div>
            </motion.div>

            <motion.div
              className='relative'
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className='grid grid-cols-2 gap-4'>
                <div className='space-y-4'>
                  <div
                    className='h-48 bg-cover bg-center rounded-lg'
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80')",
                    }}
                  />
                  <div
                    className='h-32 bg-cover bg-center rounded-lg'
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
                    }}
                  />
                </div>
                <div className='space-y-4 pt-8'>
                  <div
                    className='h-32 bg-cover bg-center rounded-lg'
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
                    }}
                  />
                  <div
                    className='h-48 bg-cover bg-center rounded-lg'
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl md:text-5xl font-serif text-gray-900 mb-4'>
              Our Values
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              These core values guide everything we do and help us create
              exceptional experiences for our guests.
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {values.map((value, index) => (
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
                  <value.icon className='w-8 h-8 text-yellow-600 group-hover:text-white transition-colors duration-300' />
                </motion.div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                  {value.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className='py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white'>
        <div className='container mx-auto px-4'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl md:text-5xl font-serif mb-4'>
              Our Achievements
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Recognition of our commitment to excellence and guest
              satisfaction.
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className='text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <achievement.icon className='w-12 h-12 text-yellow-400 mx-auto mb-4' />
                <h3 className='text-2xl font-bold text-yellow-400 mb-2'>
                  {achievement.title}
                </h3>
                <p className='text-gray-300'>{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className='text-4xl md:text-5xl font-serif text-gray-900 mb-6'>
                Perfect Location
              </h2>
              <div className='space-y-6 text-gray-700 leading-relaxed'>
                <p>
                  Situated in the heart of Pahalgam, Kashmir, Hermitage Hotels
                  offers the perfect base for exploring one of India's most
                  beautiful regions. Our location provides easy access to some
                  of Kashmir's most iconic attractions while maintaining the
                  tranquility that makes our resort a true sanctuary.
                </p>
                <p>
                  From our doorstep, guests can explore the Lidder River, embark
                  on treks to the spectacular Kolahoi Glacier, or simply enjoy
                  the panoramic views of the surrounding mountains. The location
                  offers the perfect blend of adventure and relaxation.
                </p>
                <div className='flex items-center space-x-4 pt-4'>
                  <div className='text-sm text-gray-600'>
                    <strong>Main Market, Laripora</strong>
                    <br />
                    Pahalgam, Jammu and Kashmir 192126
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='rounded-xl overflow-hidden shadow-2xl'
            >
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13225.864964758259!2d75.3225794!3d34.0319094!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e23f137d974869%3A0xf216fecd19e32f5a!2sThe%20Hermitage%20By%20Grand%20Resorts!5e0!3m2!1sen!2sin!4v1723542419473!5m2!1sen!2sin'
                width='100%'
                height='400'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
