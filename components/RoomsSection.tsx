"use client";

import { motion } from "framer-motion";
import { Users, Square, Tv, Car, Coffee, Wifi, Plane } from "lucide-react";
import Link from "next/link";

const rooms = [
  {
    id: 1,
    title: "Cottage Rooms",
    price: "₹8,500",
    image: "/rooms/RCS00085.JPG",
    guests: "2 GUESTS",
    size: "180 Ft²",
    description:
      "Our well appointed Premium Rooms are decorated to maximise space and comfort with beautiful valley views.",
    amenities: [],
  },
  {
    id: 2,
    title: "Premium Suite",
    price: "₹12,000",
    image: "/rooms/RCS00092.JPG",
    guests: "2 GUESTS",
    size: "240 Ft²",
    description:
      "Our well appointed Premium Rooms are decorated to maximise space and comfort with stunning mountain views.",
    amenities: [
      { icon: Tv, name: "Flat-screen TV" },
      { icon: Car, name: "Parking" },
      { icon: Coffee, name: "Coffee/Tea Maker" },
      { icon: Wifi, name: "Free Wifi" },
    ],
  },
  {
    id: 3,
    title: "Deluxe Room",
    price: "₹6,500",
    image: "/rooms/RCS00100.JPG",
    guests: "2 GUESTS",
    size: "180 Ft²",
    description:
      "Hermitage Hotels offers Breathtaking Views and World Class Hospitality to its guests in these comfortable rooms.",
    amenities: [
      { icon: Coffee, name: "Coffee/Tea Maker" },
      { icon: Tv, name: "Flat-screen TV" },
      { icon: Plane, name: "Airport Shuttle" },
      { icon: Car, name: "Parking" },
    ],
  },
];

export default function RoomsSection() {
  return (
    <section
      id='rooms'
      className='py-20 bg-gradient-to-b from-gray-50 to-white'
    >
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
            Our Rooms
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            The 4 star rooms & luxury suites at The Hermitage Pahalgam.
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              className='bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Room Image */}
              <div className='relative h-64 overflow-hidden'>
                <div
                  className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110'
                  style={{ backgroundImage: `url(${room.image})` }}
                />
                <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300' />
                <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full'>
                  <span className='text-lg font-bold text-gray-900'>
                    {room.price}
                  </span>
                  <span className='text-sm text-gray-600'>/night</span>
                </div>
              </div>

              {/* Room Info */}
              <div className='p-6'>
                <h3 className='text-2xl font-serif text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors'>
                  {room.title}
                </h3>

                {/* Room Details */}
                <div className='flex items-center justify-between mb-4 text-sm text-gray-600'>
                  <div className='flex items-center space-x-2'>
                    <Users className='w-4 h-4' />
                    <span>{room.guests}</span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Square className='w-4 h-4' />
                    <span>{room.size}</span>
                  </div>
                </div>

                <p className='text-gray-600 mb-4 line-clamp-3'>
                  {room.description}
                </p>

                {/* Amenities */}
                {room.amenities.length > 0 && (
                  <div className='flex items-center space-x-3 mb-6'>
                    {room.amenities.map((amenity, amenityIndex) => (
                      <div
                        key={amenityIndex}
                        className='group/amenity relative'
                      >
                        <amenity.icon className='w-5 h-5 text-gray-400 hover:text-yellow-500 transition-colors cursor-help' />
                        <div className='absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover/amenity:opacity-100 transition-opacity whitespace-nowrap'>
                          {amenity.name}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <Link
                  href={`/rooms/${room.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className='inline-flex items-center justify-center w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105'
                >
                  Book Now
                  <svg
                    className='w-4 h-4 ml-2'
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
