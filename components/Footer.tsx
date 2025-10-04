import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Virtual Tour", href: "/virtual-tour" },
    { name: "Video Tour", href: "/video-tour" },
    { name: "Gallery", href: "/gallery" },
    { name: "Pay Direct", href: "/pay-direct" },
    { name: "Direct Booking", href: "/rooms" },
  ];

  const aboutLinks = [
    { name: "About Us", href: "/about" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    {
      name: "Trip Advisor",
      href: "https://www.tripadvisor.in/Hotel_Review-g665884-d17729599-Reviews-Hermitage-Pahalgam_Anantnag_District_Kashmir_Jammu_and_Kashmir.html",
    },
    {
      name: "Location",
      href: "https://www.google.com/maps/place/The+Hermitage+By+Grand+Resorts",
    },
    { name: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram },
    {
      name: "Email",
      href: "mailto:reservations@hermitagehotels.in",
      icon: Mail,
    },
  ];

  return (
    <footer className='bg-gray-900 text-white'>
      {/* Main Footer */}
      <div className='container mx-auto px-4 py-16'>
        {/* Footer Top - Logo and Social */}
        <div className='text-center mb-12'>
          <Link href='/' className='inline-block mb-6'>
            <div className='text-3xl font-serif'>
              <span className='text-white'>Hermitage</span>
              <span className='text-yellow-500'> Hotels</span>
            </div>
          </Link>

          {/* Social Links */}
          <div className='flex justify-center space-x-4'>
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className='p-3 bg-gray-800 hover:bg-yellow-500 rounded-lg transition-all duration-300 hover:scale-110 group'
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <social.icon className='w-5 h-5 text-gray-300 group-hover:text-gray-900' />
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Content Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Contact Info */}
          <div>
            <h3 className='text-xl font-semibold mb-6 text-yellow-500'>
              Contact
            </h3>
            <div className='space-y-4'>
              <div className='flex items-start space-x-3'>
                <Phone className='w-5 h-5 text-yellow-500 mt-1 flex-shrink-0' />
                <div>
                  <p className='font-medium'>+91 01936243044</p>
                  <p className='text-sm text-gray-400'>24/7 Support</p>
                </div>
              </div>

              <div className='flex items-start space-x-3'>
                <MapPin className='w-5 h-5 text-yellow-500 mt-1 flex-shrink-0' />
                <div>
                  <p className='text-sm'>Main Market, Laripora Pahalgam</p>
                  <p className='text-sm text-gray-400'>J & K, India</p>
                </div>
              </div>

              <div className='flex items-start space-x-3'>
                <Mail className='w-5 h-5 text-yellow-500 mt-1 flex-shrink-0' />
                <div>
                  <Link
                    href='mailto:reservations@hermitagehotels.in'
                    className='text-sm hover:text-yellow-500 transition-colors'
                  >
                    reservations@hermitagehotels.in
                  </Link>
                </div>
              </div>
            </div>

            {/* Brand Logos */}
            <div className='mt-8 flex items-center space-x-4'>
              <div className='w-16 h-12 bg-gray-800 rounded flex items-center justify-center'>
                <span className='text-xs text-gray-400'>Brand 1</span>
              </div>
              <div className='w-16 h-12 bg-gray-800 rounded flex items-center justify-center'>
                <span className='text-xs text-gray-400'>Brand 2</span>
              </div>
            </div>
          </div>

          {/* Overview Links */}
          <div>
            <h3 className='text-xl font-semibold mb-6 text-yellow-500'>
              Overview
            </h3>
            <ul className='space-y-3'>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-gray-300 hover:text-yellow-500 transition-colors text-sm'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className='text-xl font-semibold mb-6 text-yellow-500'>
              About
            </h3>
            <ul className='space-y-3'>
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-gray-300 hover:text-yellow-500 transition-colors text-sm'
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className='text-xl font-semibold mb-6 text-yellow-500'>
              Newsletter
            </h3>
            <p className='text-sm text-gray-300 mb-4'>
              Subscribe to Hermitage newsletter to get the latest tariff, for
              B2B tour operators across India.
            </p>

            <form className='space-y-3'>
              <input
                type='email'
                placeholder='Your email address'
                className='w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-300'
              />
              <button
                type='submit'
                className='w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-2 px-4 rounded-lg transition-all duration-300'
              >
                Subscribe
              </button>
            </form>

            <div className='mt-6'>
              <h4 className='text-sm font-semibold mb-3 text-yellow-500'>
                We accept Online Payments
              </h4>
              <div className='w-32 h-8 bg-gray-800 rounded flex items-center justify-center'>
                <span className='text-xs text-gray-400'>Payment Methods</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='border-t border-gray-800'>
        <div className='container mx-auto px-4 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center text-sm text-gray-400'>
            <p>
              © {currentYear} Hermitage Hotels and Resorts. All Rights Reserved.
            </p>
            <p>
              Powered By <span className='text-yellow-500'>Highend 360</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
