import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';
import snoxLogo from '../assets/logo/snoxlogo.png';
import iso9001 from '../assets/iso-images/iso_9001.png';
import iso14001 from '../assets/iso-images/iso_14001.png';
import iso45001 from '../assets/iso-images/iso_45001.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-50 text-primary pt-8 sm:pt-10 lg:pt-12 pb-5 sm:pb-6 relative overflow-hidden">

      {/* Background shape */}
      <div className="absolute top-0 right-0 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-accent opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-14 lg:mb-16">

          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2">
            <Link to="/" className="inline-block mb-4 sm:mb-5 md:mb-6 lg:mb-8">
              <img
                src={snoxLogo}
                alt="SNOX Logo"
                className="h-9 sm:h-10 md:h-12 lg:h-14 w-auto"
              />
            </Link>

            <p className="text-gray-700 max-w-md text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-6 md:mb-8">
              Leading manufacturer of premium industrial and sanitary fluid control solutions. Precision engineering for the most demanding applications worldwide.
            </p>

            {/* Social Media */}
            <div className="flex space-x-3 sm:space-x-4">

              {/* LinkedIn */}
              <a
                href="#"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-[#0A66C2] hover:text-white active:bg-[#0A66C2] active:text-white transition-colors duration-300"
              >
                <FaLinkedinIn
                  size={16}
                  className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5"
                />
              </a>

              {/* Twitter */}
              <a
                href="#"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-[#1DA1F2] hover:text-white active:bg-[#1DA1F2] active:text-white transition-colors duration-300"
              >
                <FaTwitter
                  size={16}
                  className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5"
                />
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-[#1877F2] hover:text-white active:bg-[#1877F2] active:text-white transition-colors duration-300"
              >
                <FaFacebookF
                  size={16}
                  className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5"
                />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg lg:text-xl font-display font-semibold mb-3 sm:mb-4 md:mb-6">
              Quick Links
            </h4>

            <ul className="space-y-2.5 sm:space-y-3 md:space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-sm sm:text-base text-gray-700 hover:text-accent transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="text-sm sm:text-base text-gray-700 hover:text-accent transition-colors"
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-base sm:text-lg lg:text-xl font-display font-semibold mb-3 sm:mb-4 md:mb-6 tracking-wide">
              Certifications
            </h4>

            <div className="flex flex-col space-y-2.5 sm:space-y-3 md:space-y-4">
              <p className="text-xs sm:text-sm text-gray-600">
                Manufactured under strict quality standards:
              </p>

              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
                <img
                  src={iso9001}
                  alt="ISO 9001"
                  className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />

                <img
                  src={iso14001}
                  alt="ISO 14001"
                  className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />

                <img
                  src={iso45001}
                  alt="ISO 45001"
                  className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary/10 pt-5 sm:pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-600 gap-3 sm:gap-4 md:gap-6 text-center md:text-left">

          <div className="mb-0">
            &copy; {currentYear} Snox Industrial. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-2 gap-y-1">
            <span>Designed & Developed by</span>

            <a
              href="https://web-s-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Aman Chaurasiya
            </a>

            <span>and</span>

            <a
              href="https://chandan-tiwadi.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Chandan Tiwadi
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
