"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, MapPin, Cloud, Bell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Rooms & Suites",
      href: "/rooms",
      children: [
        { name: "Deluxe Room", href: "/rooms/deluxe" },
        { name: "Premium Suite", href: "/rooms/premium" },
        { name: "Cottage Rooms", href: "/rooms/cottage" },
      ],
    },
    { name: "Dining", href: "/dining" },
    { name: "Gallery", href: "/gallery" },
    { name: "Virtual Tour", href: "/virtual-tour" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className='container mx-auto px-4'>
          {/* Top Bar */}
          <div
            className={`flex items-center justify-between py-3 border-b border-white/20 ${
              isScrolled ? "border-gray-200" : ""
            }`}
          >
            {/* Left Section */}
            <div className='flex items-center space-x-6'>
              <div
                className={`flex items-center space-x-2 text-sm ${
                  isScrolled ? "text-gray-600" : "text-white"
                }`}
              >
                <Cloud className='w-4 h-4' />
                <span>Light Rain</span>
                <span className='text-yellow-400'>1°C / 33°F</span>
              </div>
              <Link
                href='tel:01936243044'
                className={`flex items-center space-x-2 text-sm hover:text-yellow-400 transition-colors ${
                  isScrolled ? "text-gray-600" : "text-white"
                }`}
              >
                <Phone className='w-4 h-4' />
                <span>01936243044</span>
              </Link>
            </div>

            {/* Right Section */}
            <div className='flex items-center space-x-4'>
              {/* Language Switcher */}
              <div className='hidden md:flex items-center space-x-2'>
                <select
                  className={`bg-transparent border-none text-sm cursor-pointer ${
                    isScrolled ? "text-gray-600" : "text-white"
                  }`}
                >
                  <option value='en'>EN</option>
                  <option value='tr'>TR</option>
                  <option value='fr'>FR</option>
                  <option value='br'>BR</option>
                </select>
              </div>

              {/* Check Rooms Button */}
              <Link
                href='/rooms'
                className='bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 hover:scale-105'
              >
                <Bell className='w-4 h-4' />
                <span className='text-sm font-medium'>Check Rooms</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 ${
                  isScrolled ? "text-gray-600" : "text-white"
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className='w-6 h-6' />
                ) : (
                  <Menu className='w-6 h-6' />
                )}
              </button>
            </div>
          </div>

          {/* Main Navigation */}
          <div className='flex items-center justify-between py-4'>
            {/* Logo */}
            <Link href='/' className='flex-shrink-0'>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className='text-2xl font-bold'
              >
                <span
                  className={`font-serif ${
                    isScrolled ? "text-gray-900" : "text-white"
                  }`}
                >
                  Hermitage
                </span>
                <span className='text-yellow-500'> Hotels</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex items-center space-x-8'>
              {navItems.map((item) => (
                <div key={item.name} className='relative group'>
                  <Link
                    href={item.href}
                    className={`text-sm font-medium hover:text-yellow-400 transition-colors ${
                      isScrolled ? "text-gray-700" : "text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className='absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-48'>
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600'
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className='md:hidden bg-white border-t border-gray-200'
            >
              <nav className='container mx-auto px-4 py-4'>
                {navItems.map((item) => (
                  <div key={item.name} className='py-2'>
                    <Link
                      href={item.href}
                      className='block text-gray-700 hover:text-yellow-600 font-medium'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className='pl-4 mt-2 space-y-2'>
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className='block text-sm text-gray-600 hover:text-yellow-600'
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className='h-32' />
    </>
  );
}
