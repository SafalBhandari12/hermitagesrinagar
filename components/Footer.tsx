import Link from "next/link";
import { Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/hermitage_srinagar/",
      icon: Instagram,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/918899400283",
      icon: MessageCircle,
    },
    {
      name: "Email",
      href: "mailto:thehermitagesrinagar@gmail.com",
      icon: Mail,
    },
    {
      name: "Phone",
      href: "tel:+918899400283",
      icon: Phone,
    },
  ];

  const mapHref =
    "https://www.google.com/maps/place/Police+Station+-+Batamaloo/@34.0771574,74.799026,56m/data=!3m1!1e3!4m6!3m5!1s0x38e18ff1066153af:0xb23025063b4e42e3!8m2!3d34.077256!4d74.7957152!16s%2Fg%2F124ss91r_?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D";

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
