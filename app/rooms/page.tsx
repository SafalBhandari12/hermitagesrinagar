"use client";

import { motion } from "framer-motion";
import {
  Users,
  Square,
  Tv,
  Car,
  Coffee,
  Wifi,
  Plane,
  Bath,
  AirVent,
  Mountain,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const roomsData = [
  {
    id: "cottage",
    title: "Rooms",
    price: "₹8,500",
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    ],
    guests: "2 GUESTS",
    size: "180 Ft²",
    description:
      "Our well appointeds Rooms are decorated to maximise space and comfort with beautiful valley views. Perfect for couples seeking a romantic getaway in the mountains.",
    amenities: [
      { icon: Tv, name: "Flat-screen TV" },
      { icon: Wifi, name: "Free WiFi" },
      { icon: Coffee, name: "Coffee/Tea Maker" },
      { icon: Bath, name: "Private Bathroom" },
      { icon: Mountain, name: "Valley View" },
      { icon: AirVent, name: "Room Heater" },
    ],
    features: [
      "King-size bed with premium linens",
      "Sitting area with mountain views",
      "Modern bathroom with hot water",
      "Mini refrigerator",
      "24/7 room service",
      "Daily housekeeping",
    ],
  },
  {
    id: "premium",
    title: "Premium Room",
    price: "₹12,000",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ],
    guests: "2 GUESTS",
    size: "240 Ft²",
    description:
      "Our Premium Suites offer luxury and comfort with stunning mountain views. These spacious suites feature separate living areas and premium amenities for the discerning traveler.",
    amenities: [
      { icon: Tv, name: "Flat-screen TV" },
      { icon: Car, name: "Parking" },
      { icon: Coffee, name: "Coffee/Tea Maker" },
      { icon: Wifi, name: "Free WiFi" },
      { icon: Bath, name: "Luxury Bathroom" },
      { icon: Mountain, name: "Mountain View" },
    ],
    features: [
      "Separate living and sleeping areas",
      "Premium king-size bed",
      "Luxury bathroom with bathtub",
      "Private balcony with mountain views",
      "Mini bar and refrigerator",
      "24/7 concierge service",
    ],
  },
  {
    id: "deluxe",
    title: "Deluxe Room",
    price: "₹6,500",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    ],
    guests: "2 GUESTS",
    size: "180 Ft²",
    description:
      "Hermitage Hotels offers Breathtaking Views and World Class Hospitality in these comfortable Deluxe Rooms. Perfect for travelers seeking comfort and value.",
    amenities: [
      { icon: Coffee, name: "Coffee/Tea Maker" },
      { icon: Tv, name: "Flat-screen TV" },
      { icon: Plane, name: "Airport Shuttle" },
      { icon: Car, name: "Parking" },
      { icon: Wifi, name: "Free WiFi" },
      { icon: Bath, name: "Modern Bathroom" },
    ],
    features: [
      "Comfortable queen-size bed",
      "Modern furnishings and decor",
      "En-suite bathroom with shower",
      "Work desk and seating area",
      "Complimentary toiletries",
      "Daily newspaper",
    ],
  },
];

export default function RoomsPage() {
  return (
    <div className='min-h-screen bg-gray-50 overflow-x-hidden'>
      <Header />

      {/* Hero Section */}
      <section className='relative h-96 bg-gradient-to-r from-gray-900 to-gray-700'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
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
            <h1 className='text-5xl md:text-6xl font-serif mb-4'>
              Our Rooms & Suites
            </h1>
            <p className='text-xl text-gray-200'>
              Luxury accommodations in the heart of Kashmir
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <div className='space-y-20'>
            {roomsData.map((room, index) => (
              <motion.div
                key={room.id}
                className='bg-white rounded-2xl shadow-xl overflow-hidden'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-0 ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Images */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className='h-96 lg:h-full relative'>
                      <div
                        className='absolute inset-0 bg-cover bg-center'
                        style={{ backgroundImage: `url(${room.images[0]})` }}
                      />
                      <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full'>
                        <span className='text-2xl font-bold text-gray-900'>
                          {room.price}
                        </span>
                        <span className='text-sm text-gray-600'>/night</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`p-8 lg:p-12 flex flex-col justify-center ${
                      index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                  >
                    <h2 className='text-3xl md:text-4xl font-serif text-gray-900 mb-4'>
                      {room.title}
                    </h2>

                    {/* Room Details */}
                    <div className='flex items-center space-x-6 mb-6 text-gray-600'>
                      <div className='flex items-center space-x-2'>
                        <Users className='w-5 h-5' />
                        <span>{room.guests}</span>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <Square className='w-5 h-5' />
                        <span>{room.size}</span>
                      </div>
                    </div>

                    <p className='text-gray-700 mb-6 leading-relaxed'>
                      {room.description}
                    </p>

                    {/* Amenities */}
                    <div className='mb-6'>
                      <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                        Amenities
                      </h3>
                      <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                        {room.amenities.map((amenity, amenityIndex) => (
                          <div
                            key={amenityIndex}
                            className='flex items-center space-x-2 text-sm text-gray-600'
                          >
                            <amenity.icon className='w-4 h-4 text-yellow-500' />
                            <span>{amenity.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className='mb-8'>
                      <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                        Features
                      </h3>
                      <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600'>
                        {room.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className='flex items-center space-x-2'
                          >
                            <div className='w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0' />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Book Now Button */}
                    <Link
                      href={`/rooms/${room.id}/book`}
                      className='inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 w-fit'
                    >
                      Book This Room
                      <svg
                        className='w-5 h-5 ml-2'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
