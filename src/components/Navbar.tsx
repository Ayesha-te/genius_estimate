import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const trades = [
    { name: "Concrete Estimating", path: "/trades/concrete-estimating" },
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

  const aboutLinks = [
    { name: "Company", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Reviews", path: "/reviews" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <nav className="w-full shadow z-50">
      {/* Top Header Section */}
      <div className="bg-white py-3">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 gap-2">
          {/* Logo + Name */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-14 h-14 object-contain" />
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
              <span className="text-red-500">Genius</span>
              <span className="text-yellow-500"> Estimate</span>
            </h1>
          </Link>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-700 font-medium">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4 text-red-500" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4 text-yellow-500" />
              <span>info@geniousestimate.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Badge-Style Navbar Section */}
      <div className="bg-gradient-to-r from-red-600 to-yellow-500 text-white">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-14 relative">
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-4 text-sm font-medium">
            <Link to="/" className={`px-3 py-1 rounded-full ${isActive("/") ? "bg-white text-red-600" : "hover:bg-white hover:text-red-600 transition"}`}>
              Home
            </Link>

            <div className="relative group">
              <div className="flex items-center cursor-pointer px-3 py-1 rounded-full hover:bg-white hover:text-red-600 transition">
                Trades <ChevronDown className="ml-1 w-4 h-4" />
              </div>
              <div className="absolute top-full left-0 mt-2 bg-white text-gray-700 rounded-md shadow-md w-64 max-h-64 overflow-y-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-30">
                {trades.map(({ name, path }) => (
                  <Link key={path} to={path} className="block px-4 py-2 text-sm hover:bg-red-50 hover:text-red-600">
                    {name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/samples" className={`px-3 py-1 rounded-full ${isActive("/samples") ? "bg-white text-red-600" : "hover:bg-white hover:text-red-600 transition"}`}>
              Samples
            </Link>

            <Link to="/pricing" className={`px-3 py-1 rounded-full ${isActive("/pricing") ? "bg-white text-red-600" : "hover:bg-white hover:text-red-600 transition"}`}>
              Pricing
            </Link>

            <div className="relative group">
              <div className="flex items-center cursor-pointer px-3 py-1 rounded-full hover:bg-white hover:text-red-600 transition">
                About Us <ChevronDown className="ml-1 w-4 h-4" />
              </div>
              <div className="absolute top-full left-0 mt-2 bg-white text-gray-700 rounded-md shadow-md w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-30">
                {aboutLinks.map(({ name, path }) => (
                  <Link key={path} to={path} className="block px-4 py-2 text-sm hover:bg-red-50 hover:text-red-600">
                    {name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/contact" className={`px-3 py-1 rounded-full ${isActive("/contact") ? "bg-white text-red-600" : "hover:bg-white hover:text-red-600 transition"}`}>
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden md:inline-block bg-white text-red-600 font-semibold px-5 py-1.5 rounded-full transition hover:bg-yellow-500 hover:text-white hover:scale-105"
          >
            Get Estimate
          </Link>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white text-gray-800 px-4 py-3 space-y-2 font-medium text-sm">
            <Link to="/" onClick={() => setIsOpen(false)} className="block py-1">Home</Link>

            <details>
              <summary className="cursor-pointer py-1">Trades</summary>
              {trades.map(({ name, path }) => (
                <Link key={path} to={path} onClick={() => setIsOpen(false)} className="block pl-4 py-1">{name}</Link>
              ))}
            </details>

            <Link to="/samples" onClick={() => setIsOpen(false)} className="block py-1">Samples</Link>
            <Link to="/pricing" onClick={() => setIsOpen(false)} className="block py-1">Pricing</Link>

            <details>
              <summary className="cursor-pointer py-1">About Us</summary>
              {aboutLinks.map(({ name, path }) => (
                <Link key={path} to={path} onClick={() => setIsOpen(false)} className="block pl-4 py-1">{name}</Link>
              ))}
            </details>

            <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-1">Contact</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block mt-2 text-center bg-gradient-to-r from-red-600 to-yellow-500 text-white px-4 py-2 rounded-full">
              Get Estimate
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
