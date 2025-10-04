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

  const mapHref =
    "https://www.google.com/maps/place/The+Hermitage+By+Grand+Resorts";

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
                aria-label={social.name}
              >
                <social.icon className='w-5 h-5 text-gray-300 group-hover:text-gray-900' />
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Content Grid */}
        <div className='max-w-6xl mx-auto px-4 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 justify-items-center'>
            {/* Contact Info */}
            <div className='w-full max-w-md space-y-6 text-left'>
              <h3 className='text-lg font-semibold text-yellow-500 mb-6'>
                Contact Information
              </h3>
              <div className='space-y-5'>
                <div>
                  <p className='text-lg font-medium'>+91 01936243044</p>
                  <p className='text-sm text-gray-400 mt-1'>
                    24/7 Support Available
                  </p>
                </div>
                <div>
                  <p className='font-medium'>Main Market, Laripora Pahalgam</p>
                  <p className='text-sm text-gray-400 mt-1'>
                    Jammu & Kashmir, India
                  </p>
                </div>
                <div>
                  <p className='font-medium'>reservations@hermitagehotels.in</p>
                  <p className='text-sm text-gray-400 mt-1'>
                    For reservations & inquiries
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className='w-full max-w-md space-y-6 text-left pl-12'>
              <h3 className='text-lg font-semibold text-yellow-500 mb-6'>
                Quick Links
              </h3>
              <ul className='space-y-4'>
                {aboutLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className='text-gray-300 hover:text-yellow-500 transition-colors inline-block'
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
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
