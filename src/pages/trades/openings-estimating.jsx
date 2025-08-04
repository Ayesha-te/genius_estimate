import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DoorOpen,CheckCircle } from 'lucide-react';
import tp from '../../assets/tp.jpg';
import img1 from '../../assets/m14.jpg';
import img2 from '../../assets/m15.jpg';

const OpeningsEstimating = () => {
  const [animate, setAnimate] = useState(false);
  const [showCurtain, setShowCurtain] = useState(true);

  useEffect(() => {
    const start = setTimeout(() => setAnimate(true), 500);
    const end = setTimeout(() => setShowCurtain(false), 1500);
    return () => {
      clearTimeout(start);
      clearTimeout(end);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Curtain Reveal Overlay */}
      {showCurtain && (
        <div
          className={`fixed inset-0 bg-yellow-400 z-50 pointer-events-none transition-transform duration-1000 ease-in-out ${animate ? '-translate-x-full' : 'translate-x-0'}`}
        ></div>
      )}

      {/* Hero Section */}
      <section
        className="relative text-white py-20 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${tp})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <DoorOpen className="w-16 h-16 mx-auto mb-6 opacity-30" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Openings Estimating Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Openings estimating services are required for all opening frames, door and windows. Expert cost estimators provide installation and material cost after calculation and briefly described to the door and frame contractors, intended for marking their labor markups in a bid. Aluminum, Bronze, Vinyl, Fiberglass and metal door contractors.
          </p>
        </div>
      </section>

      {/* Image + Intro Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <img src={img1} alt="Estimating Process" className="w-full md:w-1/2 rounded-lg shadow-lg" />
          <div className="md:w-1/2 text-gray-800 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Precise Take-offs for Doors, Frames, Hardware, and Windows
            </h2>
            <p className="text-lg font-semibold text-red-600">🎯 Bid Smarter. Win Faster. Estimate with Confidence.</p>
            <p>
              At <strong>Genius Estimate</strong>, we deliver fast, accurate Openings Estimating Services for contractors, subcontractors, and builders across the U.S. and Australia. Whether you're bidding on commercial, residential, or institutional projects, our team of expert estimators ensures every opening is properly quantified—so your bids are detailed, competitive, and profitable.
            </p>
          </div>
        </div>
      </section>

      {/* Specializations Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">We Specialize In:</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-gray-700">
            <div>
              <h4 className="font-bold mb-2">🚪 Door & Frame Take-offs</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Wood doors</li>
                <li>Hollow metal doors</li>
                <li>Aluminium and glass doors</li>
                <li>Fire-rated doors</li>
                <li>Sliding & bi-fold doors</li>
                <li>Automatic door systems</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">🪟 Window Take-offs</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Vinyl windows</li>
                <li>Aluminium and metal windows</li>
                <li>Glass curtain walls</li>
                <li>Skylights and louvers</li>
                <li>Impact-resistant systems</li>
                <li>Side Curtain Openings</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">🔩 Door Hardware Take-offs</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Hinges, closers, locks, levers</li>
                <li>Access control & keying</li>
                <li>Magnetic and panic hardware</li>
                <li>Smoke & fire seals</li>
                <li>ADA-compliant systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Curtain Openings Highlight */}
      <section className="py-12" style={{ backgroundColor: '#FFEB3B', color: '#B71C1C' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Curtain Openings</h3>
          <p className="text-lg max-w-3xl mx-auto">
            Our specialized curtain openings estimating services include detailed take-offs and cost analysis for curtain walls, side curtain openings, and other glazed facade systems. We provide precise material and labor estimates tailored to your project needs.
          </p>
        </div>
      </section>

      {/* Benefits and Process */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Contractors Choose Genius Estimate</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 text-gray-700 font-bold">•</span>
                <span className="flex-1">Accuracy That Wins Bids — tailored to your specs with no detail missed.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-gray-700 font-bold">•</span>
                <span className="flex-1">Fast Turnaround — estimates delivered within 24–48 hours; same-day for smaller scopes.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-gray-700 font-bold">•</span>
                <span className="flex-1">Save Up to 60% on Estimating Overhead — outsource your take-offs and save time and cost.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-gray-700 font-bold">•</span>
                <span className="flex-1">Location-Specific Pricing — labor and materials based on your ZIP/postcode.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-gray-700 font-bold">•</span>
                <span className="flex-1">Multi-Trade Coordination — openings coordinated with wall types, finishes, hardware, and code requirements.</span>
              </li>
            </ul>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">How Our Process Works</h3>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-yellow-500 to-red-600 rounded-lg transform -skew-y-1 opacity-10"></div>
              <ol className="relative space-y-4 text-gray-700">
                <li className="flex items-start group transition-all duration-300 transform hover:translate-x-1">
                  <span className="mr-3 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 via-yellow-500 to-red-600 text-white font-bold flex-shrink-0 shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">1</span>
                  <span className="flex-1 pt-1">Upload Your Drawings & Scope — PDFs, DWGs, specs, or drawings via our secure portal.</span>
                </li>
                <li className="flex items-start group transition-all duration-300 transform hover:translate-x-1">
                  <span className="mr-3 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 via-yellow-500 to-red-600 text-white font-bold flex-shrink-0 shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">2</span>
                  <span className="flex-1 pt-1">Receive a Custom Quote in 5–15 Minutes — based on project size, scope, and delivery timeline.</span>
                </li>
                <li className="flex items-start group transition-all duration-300 transform hover:translate-x-1">
                  <span className="mr-3 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 via-yellow-500 to-red-600 text-white font-bold flex-shrink-0 shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">3</span>
                  <span className="flex-1 pt-1">Confirm & Pay — quick online payment via card or invoice.</span>
                </li>
                <li className="flex items-start group transition-all duration-300 transform hover:translate-x-1">
                  <span className="mr-3 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 via-yellow-500 to-red-600 text-white font-bold flex-shrink-0 shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">4</span>
                  <span className="flex-1 pt-1">Get Your Estimate On Time — delivered within 24–48 hours via email, Google Drive, or Dropbox.</span>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <img src={img2} alt="Estimating Team" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </section>

      {/* Additional Info Sections */}
      <section className="py-12 bg-gray-50 max-w-5xl mx-auto px-4 space-y-12">
        <div>
 
  <div>
  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Who We Serve</h3>
  <ul className="space-y-2 text-gray-700">
    <li className="flex items-start">
      <span className="mr-3 mt-1">
  <CheckCircle className="text-yellow-500 w-5 h-5" />
</span>
      <span>General Contractors</span>
    </li>
    <li className="flex items-start">
      <span className="mr-3 mt-1">
  <CheckCircle className="text-yellow-500 w-5 h-5" />
</span>
      <span>Division 8 & 16 Subcontractors</span>
    </li>
    <li className="flex items-start">
      <span className="mr-3 mt-1">
  <CheckCircle className="text-yellow-500 w-5 h-5" />
</span>
      <span>Millwork & Glazing Contractors</span>
    </li>
    <li className="flex items-start">
      <span className="mr-3 mt-1">
  <CheckCircle className="text-yellow-500 w-5 h-5" />
</span>
      <span>Door Hardware Installers</span>
    </li>
    <li className="flex items-start">
      <span className="mr-3 mt-1">
  <CheckCircle className="text-yellow-500 w-5 h-5" />
</span>
      <span>Project Managers</span>
    </li>
    <li className="flex items-start">
      <span className="mr-3 mt-1">
  <CheckCircle className="text-yellow-500 w-5 h-5" />
</span>
      <span>Estimating Firms</span>
    </li>
    <li className="flex items-start">
      <span className="mr-3 mt-1">
  <CheckCircle className="text-yellow-500 w-5 h-5" />
</span>
      <span>Architects</span>
    </li>
    <li className="flex items-start">
      <span className="mr-3 mt-1">
  <CheckCircle className="text-yellow-500 w-5 h-5" />
</span>
      <span>Developers</span>
    </li>
  </ul>
</div>
</div>
<div>
  <h3 className="text-2xl font-semibold text-gray-900 mb-4">What's Included in Our Openings Estimate Package</h3>
  <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
    <li className="flex items-start">
      <div className="mr-3 mt-1 w-4 h-4 bg-black flex-shrink-0"></div>
      <span>Excel spreadsheet with detailed take-offs</span>
    </li>
    <li className="flex items-start">
      <div className="mr-3 mt-1 w-4 h-4 bg-black flex-shrink-0"></div>
      <span>Marked-up plans showing locations & tags</span>
    </li>
    <li className="flex items-start">
      <div className="mr-3 mt-1 w-4 h-4 bg-black flex-shrink-0"></div>
      <span>Hardware set summaries</span>
    </li>
    <li className="flex items-start">
      <div className="mr-3 mt-1 w-4 h-4 bg-black flex-shrink-0"></div>
      <span>Planswift source file</span>
    </li>
    <li className="flex items-start">
      <div className="mr-3 mt-1 w-4 h-4 bg-black flex-shrink-0"></div>
      <span>Fire-rated & code compliance notations</span>
    </li>
    <li className="flex items-start">
      <div className="mr-3 mt-1 w-4 h-4 bg-black flex-shrink-0"></div>
      <span>Material and labor cost breakdowns</span>
    </li>
    <li className="flex items-start">
      <div className="mr-3 mt-1 w-4 h-4 bg-black flex-shrink-0"></div>
      <span>CSI Division format (Div 08, 08 11 13, 08 71 00, etc.)</span>
    </li>
  </ul>
</div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Types of Projects We Handle</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Commercial Office Buildings</li>
            <li>Schools & Universities</li>
            <li>Healthcare & Hospitals</li>
            <li>Retail Fit-Outs</li>
            <li>Multi-Family Residences</li>
            <li>Hotels & Hospitality</li>
            <li>Government & Institutional Facilities</li>
            <li>Warehouses & Industrial Units</li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white max-w-5xl mx-auto px-4">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h3>
        <div className="flex items-start mb-2">
  <span className="mr-2 mt-1">
    <CheckCircle className="text-yellow-500 w-5 h-5" />
  </span>
  <div>
    <strong>Q: Can you include hardware schedules?</strong>
    <p>Yes. We include all sets and door-hardware assignments based on plan specs.</p>
  </div>
</div>
<div className="flex items-start mb-2">
  <span className="mr-2 mt-1">
    <CheckCircle className="text-yellow-500 w-5 h-5" />
  </span>
  <div>
    <strong>Q: Can I get estimates for just windows or doors?</strong>
    <p>Absolutely. We offer single-trade and multi-trade take-offs as per your needs.</p>
  </div>
</div>
<div className="flex items-start mb-2">
  <span className="mr-2 mt-1">
    <CheckCircle className="text-yellow-500 w-5 h-5" />
  </span>
  <div>
    <strong>Q: Are your estimates accepted by GCs and owners?</strong>
    <p>Yes. Our deliverables follow standard CSI formats and are accepted across all bidding platforms.</p>
  </div>
</div>
      </section>

      {/* Pricing and CTA */}
      <section className="py-12 bg-gray-50 max-w-5xl mx-auto px-4">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pricing Overview</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li>Single Trade (Doors or Windows Only): Starting at $100</li>
          <li>Combined Door/Frame/Hardware Estimates: Starting at $150</li>
          <li>Multi-Trade / Large Commercial Projects: Custom quote available in 5–10 minutes</li>
        </ul>
        <p className="text-red-600 font-semibold">🎯 No extra fees for revisions. Transparent pricing. High ROI.</p>
        <div className="text-center mt-8">
          <Link
            to="/contact"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Upload Your Plans for a Free Quote »
          </Link>
        </div>
      </section>

      {/* Bottom Info */}
      
    </div>
  );
};

export default OpeningsEstimating;