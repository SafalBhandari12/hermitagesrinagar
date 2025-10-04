"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, Cloud, Bell } from "lucide-react";
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

  const navItems: { name: string; href: string }[] = [
    { name: "Home", href: "/" },
    { name: "Rooms & Suites", href: "#rooms" },
    { name: "Dining", href: "#dining" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-black/30 backdrop-blur-sm"
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
                  className={`bg-transparent border border-white/30 rounded px-2 py-1 text-sm cursor-pointer focus:outline-none focus:border-yellow-400 ${
                    isScrolled
                      ? "text-gray-600 border-gray-300"
                      : "text-white border-white/30"
                  }`}
                >
                  <option value='en' className='text-gray-900'>
                    EN
                  </option>
                  <option value='tr' className='text-gray-900'>
                    TR
                  </option>
                  <option value='fr' className='text-gray-900'>
                    FR
                  </option>
                  <option value='br' className='text-gray-900'>
                    BR
                  </option>
                </select>
              </div>

              {/* Check Rooms Button */}
              <a
                href='#rooms'
                className='bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 hover:scale-105'
              >
                <Bell className='w-4 h-4' />
                <span className='text-sm font-medium'>Check Rooms</span>
              </a>

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
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium hover:text-yellow-400 transition-colors ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
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
              className='md:hidden bg-white border-t border-gray-200 max-h-screen overflow-y-auto'
            >
              <nav className='container mx-auto px-4 py-4 max-h-96 overflow-y-auto'>
                {navItems.map((item) => (
                  <div key={item.name} className='py-2'>
                    <Link
                      href={item.href}
                      className='block text-gray-700 hover:text-yellow-600 font-medium py-2'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
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
