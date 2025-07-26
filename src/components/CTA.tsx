import React, { useRef, useEffect } from 'react';
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import { useLocation } from 'react-router-dom';

const CTA = () => {
  const formRef = useRef(null);
  const location = useLocation();

  // Scroll to form if hash is #estimate-form
  useEffect(() => {
    if (location.hash === "#estimate-form" && formRef.current) {
      setTimeout(() => {
        formRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <section className="py-20 bg-white text-[#0A1D37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start gap-8 justify-center">
        {/* Left Side Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start pt-8 pl-4">
          <h3 className="text-4xl font-bold mb-3 text-center lg:text-left">
            Ready to Get You{' '}
            <span className="bg-gradient-to-r from-yellow-500 via-yellow-500 to-red-600 bg-clip-text text-transparent font-bold">Genius</span>{' '}
            <span className="bg-gradient-to-r from-yellow-500 via-yellow-500 to-red-600 bg-clip-text text-transparent font-bold">Estimate</span>?
          </h3>
          <p className="text-xl text-[#5C6B82] mb-6 text-center lg:text-left">Let’s Begin Your Free Consultation</p>
          <div className="space-y-5 w-full">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <span className="w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#FF7F50] via-[#FFB347] to-[#FF4500]">
                <Phone className="w-7 h-7 text-white" />
              </span>
              <div>
                <div className="font-bold text-lg text-[#1D314F]">Call Us</div>
                <div className="text-[#5C6B82] text-base">+1 (555) 123-4567</div>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-center gap-4">
              <span className="w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#FF7F50] via-[#FFB347] to-[#FF4500]">
                <Mail className="w-7 h-7 text-white" />
              </span>
              <div>
                <div className="font-bold text-lg text-[#1D314F]">Email Us</div>
                <div className="text-[#5C6B82] text-base">info@geniousestimate.com</div>
              </div>
            </div>
            {/* Location */}
            <div className="flex items-center gap-4">
              <span className="w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#FF7F50] via-[#FFB347] to-[#FF4500]">
                <MapPin className="w-7 h-7 text-white" />
              </span>
              <div>
                <div className="font-bold text-lg text-[#1D314F]">Visit Us</div>
                <div className="text-[#5C6B82] text-base">123 Construction Plaza, Builder City</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side Form */}
        <div ref={formRef} id="estimate-form" className="w-full lg:w-1/2 flex flex-col justify-center items-center">
          <div className="w-full max-w-xl bg-[#FFFDEB] rounded-3xl px-10 py-10 shadow-lg">
            <h3 className="text-3xl font-bold mb-8 text-center text-[#1D314F]">
              Get Your Free Estimate Now
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  placeholder="First Name *"
                  className="bg-transparent border-b border-[#E6E6E6] text-[#5C6B82] placeholder-[#5C6B82] px-2 py-3 outline-none focus:border-[#FF7F50] transition-all"
                  required
                />
                <input
                  placeholder="Last Name *"
                  className="bg-transparent border-b border-[#E6E6E6] text-[#5C6B82] placeholder-[#5C6B82] px-2 py-3 outline-none focus:border-[#FF7F50] transition-all"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  placeholder="Email Address *"
                  type="email"
                  className="bg-transparent border-b border-[#E6E6E6] text-[#5C6B82] placeholder-[#5C6B82] px-2 py-3 outline-none focus:border-[#FF7F50] transition-all"
                  required
                />
                <input
                  placeholder="Company Name"
                  className="bg-transparent border-b border-[#E6E6E6] text-[#5C6B82] placeholder-[#5C6B82] px-2 py-3 outline-none focus:border-[#FF7F50] transition-all"
                />
              </div>
              <textarea
                rows={2}
                placeholder="Project details..."
                className="bg-transparent border-b border-[#E6E6E6] text-[#5C6B82] placeholder-[#5C6B82] px-2 py-3 outline-none focus:border-[#FF7F50] transition-all w-full"
              />
              <div>
                <select className="bg-transparent border-b border-[#E6E6E6] text-[#5C6B82] px-2 py-3 w-full outline-none appearance-none focus:border-[#FF7F50] transition-all">
                  <option value="">Select Project Type</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                  <option>Civil</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full mt-2 py-4 rounded-lg text-white text-lg font-semibold bg-gradient-to-r from-[#FF3C2F] via-[#FFB347] to-[#FF7F50] hover:opacity-90 transition flex justify-center items-center gap-2"
              >
                Get My Free Estimate <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            <p className="text-xs text-center text-[#5C6B82] mt-4">
              * Required fields. We respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
