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

  const samples = [
    { name: "Landscape", slug: "landscape" },
    { name: "Roofing", slug: "roofing" },
    { name: "Concrete", slug: "concrete" },
    { name: "Masonry", slug: "masonry" },
    { name: "Remodel", slug: "remodel" },
    { name: "Thermal and moisture", slug: "thermal-and-moisture" },
    { name: "Plumbing", slug: "plumbing" },
    { name: "Mechanical", slug: "mechanical" },
    { name: "Flooring", slug: "flooring" },
    { name: "Residential", slug: "residential" },
    { name: "Public", slug: "public" },
  ];

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      {/* ✅ Top Bar (Contact Info Only) */}
      <div className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-base">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span className="font-medium">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span className="font-medium">info@geniousestimate.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Main Navigation (with Logo + Name) */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo + Company Name */}
          <Link to="/" className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="w-14 h-14 object-contain" />
            <span className="text-3xl font-bold text-gray-800">
              <span className="text-red-600">Genius</span>{' '}
              <span className="text-yellow-500">Estimate</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center text-lg font-medium">
            <Link to="/" className={`px-4 py-2 rounded-md ${isActive("/") ? "text-red-600 bg-red-50" : "text-gray-700 hover:text-red-600 hover:bg-red-50"}`}>Home</Link>

            {/* Trades Dropdown */}
            <div className="relative group">
              <div className="flex items-center cursor-pointer px-4 py-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-red-50">
                Trades <ChevronDown className="ml-1 w-5 h-5" />
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

            {/* Samples Dropdown */}
            <div className="relative group">
              <div className="flex items-center cursor-pointer px-4 py-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-red-50">
                Samples <ChevronDown className="ml-1 w-5 h-5" />
              </div>
              <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md w-64 max-h-64 overflow-y-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-20">
                {samples.map(({ name, slug }) => (
                  <Link key={slug} to={`/samples#${slug}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">
                    {name}
                  </Link>
                ))}
              </div>
            </div>

            {/* About Us Dropdown */}
            <div className="relative group">
              <div className="flex items-center cursor-pointer px-4 py-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-red-50">
                About Us <ChevronDown className="ml-1 w-5 h-5" />
              </div>
              <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-20">
                <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">Company</Link>
                <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">Blog</Link>
                <Link to="/reviews" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">Reviews</Link>
                <Link to="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">FAQ</Link>
              </div>
            </div>

            <Link to="/contact" className={`px-4 py-2 rounded-md ${isActive("/contact") ? "text-red-600 bg-red-50" : "text-gray-700 hover:text-red-600 hover:bg-red-50"}`}>Contact</Link>

            <Link to="/get-estimate" className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-6 py-2 rounded-lg hover:from-red-700 hover:to-yellow-600 transition-all transform hover:scale-105">
              Get Estimate
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 text-base">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-red-600">Home</Link>
          {trades.map((trade) => (
            <Link key={trade.path} to={trade.path} onClick={() => setIsOpen(false)} className="block py-1 ml-4 text-gray-600 hover:text-red-600">{trade.name}</Link>
          ))}
          <Link to="/pricing" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-red-600">Pricing</Link>
          <div>
            <p className="py-2 font-semibold text-gray-800">Samples</p>
            {samples.map(({ name, slug }) => (
              <Link key={slug} to={`/samples#${slug}`} onClick={() => setIsOpen(false)} className="block py-1 ml-4 text-gray-600 hover:text-red-600">{name}</Link>
            ))}
          </div>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-red-600">About Us</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className="block ml-4 py-1 text-gray-600 hover:text-red-600">Blog</Link>
          <Link to="/reviews" onClick={() => setIsOpen(false)} className="block ml-4 py-1 text-gray-600 hover:text-red-600">Reviews</Link>
          <Link to="/faq" onClick={() => setIsOpen(false)} className="block ml-4 py-1 text-gray-600 hover:text-red-600">FAQ</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-red-600">Contact</Link>
          <Link to="/get-estimate" onClick={() => setIsOpen(false)} className="block mt-2 bg-gradient-to-r from-red-600 to-yellow-500 text-white px-4 py-2 rounded-md text-center">Get Estimate</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
