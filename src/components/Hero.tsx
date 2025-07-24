import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, CheckCircle, Calculator, Building, FileText } from 'lucide-react';
import banner from '../assets/banner.jpg';

const Hero = () => {
  return (
    <section className="bg-white text-[#0A1D37] overflow-hidden">
      {/* Banner with gradient overlay and motto */}
      <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-yellow-500/10 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
            Construction <span className="text-yellow-200">Estimating Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-white opacity-90 mt-4 font-medium">
            Your Trusted Partner in Construction Takeoffs and Cost Estimation
          </p>
          <p className="italic font-light text-white mt-2 text-sm sm:text-base">
            “Precision in Every Square Foot — Speed in Every Estimate”
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6 flex-wrap justify-center">
            <Link to="/contact">
              <button className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-6 py-3 rounded-md font-semibold transition-all hover:scale-105">
                Get Free Estimate
              </button>
            </Link>
            <Link to="/samples">
              <button className="border border-white text-white px-6 py-3 rounded-md font-semibold transition-all hover:scale-105 hover:bg-white hover:text-red-600">
                View Portfolio
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Description & Highlights */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Looking to boost your win rate and take the guesswork out of bidding? Genius Estimate is your trusted partner for construction estimating services and material takeoffs that are fast, accurate, and tailored to your project needs.
              With 15+ years of proven industry experience, we’ve helped contractors, builders, and developers across the U.S. land profitable jobs with confidence.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                '92% Bid-Hit Ratio',
                '24-48 Hour Turnaround',
                'Certified Estimators',
                '15 Years Experience',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle className="text-yellow-500 w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-700">
              Our team uses Planswift, RSMeans, Bluebeam, and Xactimate, following AACE & American Estimators guidelines.
            </p>
            <p className="text-gray-700">
              We serve residential, commercial, and industrial projects globally.
            </p>
          </div>

          {/* Right Highlight Box */}
          <div className="bg-gradient-to-r from-red-600 to-yellow-500 text-white p-8 rounded-xl shadow-xl space-y-6 transition-transform duration-300 hover:scale-105">
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
            <div className="flex justify-center gap-4 text-white">
              <Building className="w-8 h-8" />
              <FileText className="w-8 h-8" />
              <Calculator className="w-8 h-8" />
            </div>
          </div>
        </div>

        <div className="text-center pt-10">
          <p className="text-lg font-semibold">
            Have questions? Call us at <span className="text-red-600">+1 (555) 123-4567</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
