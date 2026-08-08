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
    <footer className="bg-primary text-white pt-20 pb-10 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="inline-block mb-8">
              <img src={snoxLogo} alt="SNOX Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-gray-300 max-w-md text-lg leading-relaxed mb-8">
              Leading manufacturer of premium industrial and sanitary fluid control solutions. Precision engineering for the most demanding applications worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-accent transition-colors duration-300">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-accent transition-colors duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-accent transition-colors duration-300">
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-display font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-accent transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-display font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-300">
                <Mail className="mt-1 text-accent flex-shrink-0" size={18} />
                <span>info@snox.in</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <Phone className="mt-1 text-accent flex-shrink-0" size={18} />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <MapPin className="mt-1 text-accent flex-shrink-0" size={18} />
                <span>Industrial Area, Mumbai, India</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-display font-semibold mb-6 tracking-wide">Certifications</h4>
            <div className="flex flex-col space-y-4">
              <p className="text-sm text-gray-400">Manufactured under strict quality standards:</p>
              <div className="flex items-center gap-4">
                <img src={iso9001} alt="ISO 9001" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                <img src={iso14001} alt="ISO 14001" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                <img src={iso45001} alt="ISO 45001" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 md:mb-0">
            &copy; {currentYear} Snox Industrial. All rights reserved.
          </div>
          <div className="flex space-x-2">
            <span>Designed & Developed by</span>
            <a href="https://web-s-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Aman Chaurasiya</a>
            <span>and</span>
            <a href="https://chandan-tiwadi.pages.dev/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Chandan Tiwadi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
