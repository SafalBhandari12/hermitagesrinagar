"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Send, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["Balgarden", "Batamaloo Srinagar 190010", "India"],
    color: "text-blue-600",
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+918899400283"],
    color: "text-green-600",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["thehermitagesrinagar@gmail.com"],
    color: "text-purple-600",
  },
  {
    icon: Clock,
    title: "Timing",
    details: [
      "Monday – Friday: 09:00 – 18:00",
      "For Sales & Reservations",
      "24/7 Guest Services",
    ],
    color: "text-orange-600",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      checkIn: "",
      checkOut: "",
      guests: "2",
    });

    alert("Thank you for your message! We will get back to you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='min-h-screen bg-gray-50 overflow-x-hidden'>
      <Header />

      {/* Hero Section */}
      <section className='relative h-96 bg-gradient-to-r from-gray-900 to-gray-700'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        >
          <div className='absolute inset-0 bg-black/50' />
        </div>
        <div className='relative z-10 container mx-auto px-4 h-full flex items-center justify-center'>
          <motion.div
            className='text-center text-white'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-5xl md:text-6xl font-serif mb-4'>Contact Us</h1>
            <p className='text-xl text-gray-200'>
              We're here to help make your stay unforgettable
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl md:text-5xl font-serif text-gray-900 mb-4'>
              Get In Touch
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Have questions about your stay? Need help with reservations? Our
              team is here to assist you.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20'>
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div
                  className={`w-12 h-12 ${info.color} bg-gray-100 rounded-lg flex items-center justify-center mb-4`}
                >
                  <info.icon className='w-6 h-6' />
                </div>
                <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                  {info.title}
                </h3>
                <div className='space-y-1'>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className='text-gray-600 text-sm'>
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className='grid lg:grid-cols-2 gap-16'>
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-8'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13225.864964758259!2d75.3225794!3d34.0319094!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e23f137d974869%3A0xf216fecd19e32f5a!2sThe%20Hermitage%20By%20Grand%20Resorts!5e0!3m2!1sen!2sin!4v1723542419473!5m2!1sen!2sin'
                  width='100%'
                  height='400'
                  style={{ border: 0 }}
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                />
              </div>

              <div className='bg-white p-6 rounded-xl shadow-lg'>
                <h3 className='text-xl font-semibold text-gray-900 mb-4 flex items-center'>
                  <MessageCircle className='w-5 h-5 mr-2 text-yellow-500' />
                  Quick Links
                </h3>
                <div className='space-y-3'>
                  <a
                    href='https://www.google.com/maps/place/The+Hermitage+By+Grand+Resorts'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block text-blue-600 hover:text-blue-800 transition-colors'
                  >
                    → View on Google Maps
                  </a>
                  <a
                    href='https://www.tripadvisor.in/Hotel_Review-g665884-d17729599-Reviews-Hermitage-Pahalgam_Anantnag_District_Kashmir_Jammu_and_Kashmir.html'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block text-green-600 hover:text-green-800 transition-colors'
                  >
                    → Review us on TripAdvisor
                  </a>
                  <a
                    href='tel:+916006750238'
                    className='block text-purple-600 hover:text-purple-800 transition-colors'
                  >
                    → Call us directly
                  </a>
                  <a
                    href='mailto:reservations@hermitagehotels.in'
                    className='block text-orange-600 hover:text-orange-800 transition-colors'
                  >
                    → Send us an email
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='bg-white p-8 rounded-xl shadow-lg'
            >
              <h3 className='text-2xl font-serif text-gray-900 mb-6'>
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid md:grid-cols-2 gap-4'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Full Name *
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-300'
                      placeholder='Your full name'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Email Address *
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-300'
                      placeholder='your.email@example.com'
                    />
                  </div>
                </div>

                <div className='grid md:grid-cols-2 gap-4'>
                  <div>
                    <label
                      htmlFor='phone'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Phone Number
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-300'
                      placeholder='+91 XXXXX XXXXX'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='subject'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Subject
                    </label>
                    <select
                      id='subject'
                      name='subject'
                      value={formData.subject}
                      onChange={handleChange}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-300'
                    >
                      <option value=''>Select a subject</option>
                      <option value='reservation'>Room Reservation</option>
                      <option value='general'>General Inquiry</option>
                      <option value='event'>Event Planning</option>
                      <option value='feedback'>Feedback</option>
                      <option value='other'>Other</option>
                    </select>
                  </div>
                </div>

                <div className='grid md:grid-cols-3 gap-4'>
                  <div>
                    <label
                      htmlFor='checkIn'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Check-in Date
                    </label>
                    <input
                      type='date'
                      id='checkIn'
                      name='checkIn'
                      value={formData.checkIn}
                      onChange={handleChange}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-300'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='checkOut'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Check-out Date
                    </label>
                    <input
                      type='date'
                      id='checkOut'
                      name='checkOut'
                      value={formData.checkOut}
                      onChange={handleChange}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-300'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='guests'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Guests
                    </label>
                    <select
                      id='guests'
                      name='guests'
                      value={formData.guests}
                      onChange={handleChange}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-300'
                    >
                      <option value='1'>1 Guest</option>
                      <option value='2'>2 Guests</option>
                      <option value='3'>3 Guests</option>
                      <option value='4'>4 Guests</option>
                      <option value='5+'>5+ Guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Message *
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-300 resize-none'
                    placeholder='Tell us about your inquiry, special requests, or any questions you may have...'
                  />
                </div>

                <motion.button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-400 text-gray-900 font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2'
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900' />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className='w-5 h-5' />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
