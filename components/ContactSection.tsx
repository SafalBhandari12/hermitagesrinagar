"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className='py-20 bg-gray-900'>
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-12 items-start'>
          {/* Map and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Google Map */}
            <div className='mb-8 rounded-xl overflow-hidden shadow-2xl'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13225.864964758259!2d75.3225794!3d34.0319094!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e23f137d974869%3A0xf216fecd19e32f5a!2sThe%20Hermitage%20By%20Grand%20Resorts!5e0!3m2!1sen!2sin!4v1723542419473!5m2!1sen!2sin'
                width='100%'
                height='300'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                className='w-full h-80'
              />
            </div>

            {/* Contact Information */}
            <div className='space-y-6'>
              <motion.div
                className='flex items-start space-x-4 p-4 bg-gray-800 rounded-lg'
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className='p-2 bg-yellow-500 rounded-lg'>
                  <MapPin className='w-6 h-6 text-gray-900' />
                </div>
                <div>
                  <h4 className='text-white font-semibold mb-1'>Address:</h4>
                  <p className='text-gray-300'>
                    Laripora Pahalgam, Pahalgam, Jammu and Kashmir 192126
                  </p>
                </div>
              </motion.div>

              <motion.div
                className='flex items-start space-x-4 p-4 bg-gray-800 rounded-lg'
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className='p-2 bg-yellow-500 rounded-lg'>
                  <Phone className='w-6 h-6 text-gray-900' />
                </div>
                <div>
                  <h4 className='text-white font-semibold mb-1'>Phone:</h4>
                  <p className='text-gray-300'>+91 6006750238, 6006750237</p>
                </div>
              </motion.div>

              <motion.div
                className='flex items-start space-x-4 p-4 bg-gray-800 rounded-lg'
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className='p-2 bg-yellow-500 rounded-lg'>
                  <Clock className='w-6 h-6 text-gray-900' />
                </div>
                <div>
                  <h4 className='text-white font-semibold mb-1'>Timing:</h4>
                  <p className='text-gray-300'>
                    Monday – Friday 09.00 – 6PM
                    <br />
                    For Sales & reservations
                  </p>
                </div>
              </motion.div>

              <motion.div
                className='flex items-start space-x-4 p-4 bg-gray-800 rounded-lg'
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className='p-2 bg-yellow-500 rounded-lg'>
                  <Mail className='w-6 h-6 text-gray-900' />
                </div>
                <div>
                  <h4 className='text-white font-semibold mb-1'>Email:</h4>
                  <p className='text-gray-300'>
                    reservations@hermitagehotels.in
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='bg-gray-800 p-8 rounded-xl'
          >
            <h2 className='text-3xl font-serif text-white mb-8'>
              GET IN TOUCH
            </h2>

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <input
                  type='text'
                  name='name'
                  placeholder='Your Name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-300'
                />
              </div>

              <div>
                <input
                  type='email'
                  name='email'
                  placeholder='Your Email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-300'
                />
              </div>

              <div>
                <input
                  type='tel'
                  name='phone'
                  placeholder='Your Phone'
                  value={formData.phone}
                  onChange={handleChange}
                  className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-300'
                />
              </div>

              <div>
                <textarea
                  name='message'
                  placeholder='Your Message'
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-300 resize-none'
                />
              </div>

              <motion.button
                type='submit'
                className='w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className='w-5 h-5' />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
