import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
} from 'lucide-react';
import logo from '../assets/logo.png'; // ✅ Import logo

const trades = [
  { name: "Concrete Estimating", path: "/trades/Concrete-estimating" },
  { name: "Masonry Estimating", path: "/trades/masonry-estimating" },
  { name: "Metals Estimating", path: "/trades/metals-estimating" },
  { name: "Wood & Plastic Composites", path: "/trades/wood-plastic-composites" },
  { name: "Thermal Protection", path: "/trades/thermal-protection" },
  { name: "Sitework Estimating", path: "/trades/sitework-estimating" },
  { name: "Openings Estimating", path: "/trades/openings-estimating" },
  { name: "Interior & Exterior Finishes", path: "/trades/interior-exterior-finishes" },
  { name: "Electrical", path: "/trades/electrical" },
  { name: "MEP (HVAC)", path: "/trades/mep-hvac" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            {/* ✅ Bigger Logo and Company Name */}
            <div className="flex items-center space-x-5">
              <img
                src={logo}
                alt="Genius Estimate Logo"
                className="w-20 h-20 object-contain"
              />
              <span className="text-3xl font-extrabold leading-tight">
                <span className="text-red-400">Genius</span>
                <span className="text-yellow-400"> Estimate</span>
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Professional construction estimating services that help contractors win more bids 
              and complete projects profitably. Your success is our mission, and accuracy is our standard.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/15vbX4BqZz/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/genius-estimate"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/samples" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/reviews" className="text-gray-300 hover:text-white transition-colors">Reviews</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services & Trades */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {trades.map(({ name, path }) => (
                <li key={path}>
                  <Link to={path} className="text-gray-300 hover:text-white transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Construction Plaza</p>
                  <p className="text-gray-300">Builder City, State 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-400 flex-shrink-0" />
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-400 flex-shrink-0" />
                <p className="text-gray-300">info@geniousestimate.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Genious Estimate. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;