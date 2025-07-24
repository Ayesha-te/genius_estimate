import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
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
    <nav className="bg-white shadow sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span className="font-medium">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span className="font-medium">info@geniousestimate.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="w-14 h-14 object-contain" />
            <span className="text-3xl font-bold text-gray-800">
              <span className="text-red-600">Genius</span>{' '}
              <span className="text-yellow-500">Estimate</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center text-base font-medium">
            <Link to="/" className={`px-4 py-2 rounded-md ${isActive("/") ? "text-red-600 bg-red-50" : "text-gray-700 hover:text-red-600 hover:bg-red-50"}`}>Home</Link>

            {/* Trades */}
            <div className="relative group">
              <div className="flex items-center cursor-pointer px-4 py-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-red-50">
                Trades <ChevronDown className="ml-1 w-4 h-4" />
              </div>
              <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md w-64 max-h-64 overflow-y-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-20">
                {trades.map((trade) => (
                  <Link key={trade.path} to={trade.path} className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">
                    {trade.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/pricing" className={`px-4 py-2 rounded-md ${isActive("/pricing") ? "text-red-600 bg-red-50" : "text-gray-700 hover:text-red-600 hover:bg-red-50"}`}>Pricing</Link>

            {/* About Us */}
            <div className="relative group">
              <div className="flex items-center cursor-pointer px-4 py-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-red-50">
                About Us <ChevronDown className="ml-1 w-4 h-4" />
              </div>
              <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-20">
                {aboutLinks.map(({ name, path }) => (
                  <Link key={path} to={path} className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">
                    {name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/contact" className={`px-4 py-2 rounded-md ${isActive("/contact") ? "text-red-600 bg-red-50" : "text-gray-700 hover:text-red-600 hover:bg-red-50"}`}>Contact</Link>

            <Link to="/contact" className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-6 py-2 rounded-lg hover:from-red-700 hover:to-yellow-600 transition-all transform hover:scale-105">
              Get Estimate
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 text-base">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-red-600">Home</Link>

          <p className="font-semibold text-gray-800 pt-2">Trades</p>
          {trades.map((trade) => (
            <Link key={trade.path} to={trade.path} onClick={() => setIsOpen(false)} className="block py-1 ml-4 text-gray-600 hover:text-red-600">{trade.name}</Link>
          ))}

          <Link to="/pricing" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-red-600">Pricing</Link>

          <p className="font-semibold text-gray-800 pt-2">About Us</p>
          {aboutLinks.map(({ name, path }) => (
            <Link key={path} to={path} onClick={() => setIsOpen(false)} className="block ml-4 py-1 text-gray-600 hover:text-red-600">{name}</Link>
          ))}

          <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-red-600">Contact</Link>

          <Link to="/contact" onClick={() => setIsOpen(false)} className="block mt-3 bg-gradient-to-r from-red-600 to-yellow-500 text-white px-4 py-2 rounded-md text-center">
            Get Estimate
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
