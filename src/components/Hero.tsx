import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  Calculator,
  Building,
  FileText
} from 'lucide-react';
import banner from '../assets/banner.jpg';

const Hero = () => {
  return (
    <section className="bg-white text-[#0A1D37] overflow-hidden">
      {/* Banner with gradient overlay and animated text */}
      <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
        {/* Background Image */}
        <img
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover brightness-90"
        />

        {/* Gradient Overlay with Opacity */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(220,38,38,0.75)] to-[rgba(253,224,71,0.75)] z-10" />

        {/* Animated Text Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
            Construction <span className="text-yellow-300">Estimating Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-white mt-4 font-medium drop-shadow-sm">
            Your Trusted Partner in Construction Takeoffs and Cost Estimation
          </p>
          <p className="italic font-light text-white mt-2 text-sm sm:text-base drop-shadow">
            “Precision in Every Square Foot — Speed in Every Estimate”
          </p>

          {/* CTA Button */}
          <Link to="/contact">
            <button className="mt-6 bg-white text-red-600 px-6 py-3 rounded-md font-semibold transition-all hover:scale-105 hover:bg-yellow-500 hover:text-white shadow">
              Get Free Estimate
            </button>
          </Link>
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Left Text Section */}
          <div className="flex flex-col justify-between max-w-prose space-y-6">
            <p className="text-lg leading-relaxed text-justify">
              Looking to boost your win rate and take the guesswork out of bidding? Genius Estimate is your trusted partner for construction estimating services and material takeoffs that are fast, accurate, and tailored to your project needs.
              With 10+ years of proven industry experience, we’ve helped contractors, builders, and developers across the U.S. land profitable jobs with confidence.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                '92% Bid-Hit Ratio',
                '24-48 Hour Turnaround',
                'Certified Estimators',
                '10 Years Experience',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle className="text-yellow-500 w-5 h-5" />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 text-justify">
              Our team uses Planswift, RSMeans, Bluebeam, and Xactimate, following AACE & American Estimators guidelines.
            </p>
            
          </div>

          {/* Right Box Section */}
          <div className="bg-gradient-to-r from-red-600 to-yellow-500 text-white p-8 rounded-xl shadow-xl h-full self-stretch flex flex-col justify-between">
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-white text-red-600 flex items-center justify-center rounded-full shadow-lg">
                <Calculator className="w-8 h-8" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold">Expert Estimation Team</h3>
              <p className="mt-2 text-base opacity-90">
                From concrete to MEP, our estimators deliver accurate material takeoffs and cost breakdowns.
              </p>
            </div>
            <div className="flex justify-center gap-4 text-white pt-4">
              <Building className="w-8 h-8" />
              <FileText className="w-8 h-8" />
              <Calculator className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
