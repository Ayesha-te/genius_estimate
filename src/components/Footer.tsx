import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin,  Calculator } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-yellow-500 rounded-lg flex items-center justify-center">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">
                <span className="text-red-400">Genius</span>
                <span className="text-yellow-400"> Estimate</span>
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Professional construction estimating services that help contractors win more bids 
              and complete projects profitably. Your success is our mission, and accuracy is our standard.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/15vbX4BqZz/" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
             
              <a href="https://www.linkedin.com/company/genius-estimate" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/About" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/Samples" className="text-gray-300 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="/Testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="/Footer" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Material Takeoffs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cost Analysis</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Project Scheduling</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Value Engineering</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Risk Assessment</a></li>
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

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Genious Estimate. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;