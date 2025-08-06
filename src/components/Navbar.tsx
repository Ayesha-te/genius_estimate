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
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Refund Policy", path: "/refundpolicy" },
  ];

  return (
    <nav className="w-full z-50 shadow">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-red-600 to-yellow-500 text-white text-sm font-medium">
        <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 (919) 727-6105‬  </span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>sales@geniusestimate.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar Section */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
            <h1 className="text-2xl font-bold text-gray-800">
              <span className="text-red-600">Genius</span>
              <span className="text-yellow-500"> Estimate</span>
            </h1>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-800">
            <Link to="/" className={`${isActive("/") ? "text-red-600 font-semibold" : "hover:text-red-600"}`}>Home</Link>

            {/* Trades Dropdown */}
            <div className="relative group">
              <div className="flex items-center cursor-pointer hover:text-red-600">
                Trades <ChevronDown className="ml-1 w-4 h-4" />
              </div>
              <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-md shadow-lg w-64 max-h-64 overflow-y-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-30">
                {trades.map(({ name, path }) => (
                  <Link key={path} to={path} className="block px-4 py-2 text-sm hover:bg-red-50 hover:text-red-600">
                    {name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/samples" className={`${isActive("/samples") ? "text-red-600 font-semibold" : "hover:text-red-600"}`}>Samples</Link>
            <Link to="/pricing" className={`${isActive("/pricing") ? "text-red-600 font-semibold" : "hover:text-red-600"}`}>Pricing</Link>

            {/* About Dropdown */}
            <div className="relative group">
              <div className="flex items-center cursor-pointer hover:text-red-600">
                About Us <ChevronDown className="ml-1 w-4 h-4" />
              </div>
              <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-md shadow-lg w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-30">
                {aboutLinks.map(({ name, path }) => (
                  <Link key={path} to={path} className="block px-4 py-2 text-sm hover:bg-red-50 hover:text-red-600">
                    {name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/contactus" className={`${isActive("/contactus") ? "text-red-600 font-semibold" : "hover:text-red-600"}`}>
              Contact
            </Link>

            {/* Get Estimate Button (Desktop Only) */}
            <Link
              to="/contact"
              className="ml-4 bg-gradient-to-r from-red-600 to-yellow-500 text-white px-4 py-2 rounded-full font-semibold hover:opacity-90 transition"
            >
              Get Estimate
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white px-4 py-4 space-y-2 text-sm text-gray-800">
            <Link to="/" onClick={() => setIsOpen(false)} className="block font-semibold">Home</Link>

            <details>
              <summary className="cursor-pointer font-semibold">Trades</summary>
              {trades.map(({ name, path }) => (
                <Link key={path} to={path} onClick={() => setIsOpen(false)} className="block pl-4 py-1">{name}</Link>
              ))}
            </details>

            <Link to="/samples" onClick={() => setIsOpen(false)} className="block font-semibold">Samples</Link>
            <Link to="/pricing" onClick={() => setIsOpen(false)} className="block font-semibold">Pricing</Link>

            <details>
              <summary className="cursor-pointer font-semibold">About Us</summary>
              {aboutLinks.map(({ name, path }) => (
                <Link key={path} to={path} onClick={() => setIsOpen(false)} className="block pl-4 py-1">{name}</Link>
              ))}
            </details>

            <Link to="/contactus" onClick={() => setIsOpen(false)} className="block font-semibold">Contact</Link>

            {/* Mobile Styled Get Estimate Button (Centered) */}
            <div className="flex justify-center">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block bg-gradient-to-r from-red-600 to-yellow-500 text-white px-4 py-2 rounded-full font-semibold hover:opacity-90 transition"
              >
                Get Estimate
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;