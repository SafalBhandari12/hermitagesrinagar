"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trigger entrance animation on mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Rooms & Suites", href: "#rooms" },
    { name: "Dining", href: "#dining" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-[transform,opacity,background-color,padding] duration-500 ease-out ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
        } ${
          isScrolled ? "bg-white shadow-lg py-4" : "bg-gray-200 shadow-md py-6"
        } border-b border-gray-200/70`}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center'>
            {/* Logo */}
            <Link href='/' className='flex-shrink-0'>
              <div className='text-2xl font-bold'>
                <span
                  className={`font-serif ${
                    isScrolled ? "text-gray-900" : "text-gray-800"
                  }`}
                >
                  Hermitage
                </span>
                <span className='text-yellow-500'> Hotels</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className='hidden md:flex space-x-8'>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium hover:text-yellow-600 transition-colors ${
                    isScrolled ? "text-gray-700" : "text-gray-800"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-md ${
                isScrolled ? "text-gray-700" : "text-gray-800"
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className='md:hidden bg-white border-t shadow-lg'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='block px-3 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md font-medium'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
