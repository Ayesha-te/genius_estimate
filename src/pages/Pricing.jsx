import React from 'react';
import { UploadCloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="bg-[#fff7f2] text-gray-800 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-center bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-4xl font-bold">
            🚀 Pricing That Helps You <em className="italic text-yellow-100">Bid More & Win More</em>
          </h2>
          <p className="mt-4 text-lg">
            At <strong>Genius Estimate</strong>, we provide professional construction estimating and material takeoff services tailored to help contractors <strong>across the U.S. and U.K.</strong> win more bids and increase profitability.
          </p>
          <p className="mt-2">
            Whether you’re quoting a <em>residential extension in London</em> or a <em>commercial build in New York</em>, we deliver accurate, fast, and affordable estimates that give you a competitive edge.
          </p>
        </div>

        {/* Accuracy Section */}
        <div className="bg-white border border-orange-200 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-4 text-[#d35400]">🎯 Accuracy You Can Rely On—Anywhere You Build</h3>
          <p className="mb-4">We understand that <em>accurate pricing is the backbone of successful project planning</em>, no matter where you are. That’s why we use:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><em>Location-specific labour and material costs</em></li>
            <li>Up-to-date pricing databases, including <em>RSMeans, Craftsman</em>, and our own custom-developed systems</li>
            <li>Pricing based on your <em>ZIP/postcode</em> for maximum accuracy in both the U.S. and U.K.</li>
            <li>Certified standards from <em>AACE</em> and the <em>American Estimators Organization</em></li>
          </ul>
        </div>

        {/* Turnaround Section */}
        <div className="bg-white border border-orange-200 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-4 text-[#d35400]">⚡ Quick Turnaround, No Matter the Scope</h3>
          <p className="mb-4">We pride ourselves on speed and efficiency:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Standard delivery:</strong> 24 to 48 hours</li>
            <li><strong>Smaller projects:</strong> Often delivered same day</li>
            <li><strong>Large/complex projects:</strong> Always delivered on a tight schedule</li>
          </ul>
          <p className="mt-2">No matter your location or time zone, we keep your bidding process moving.</p>
        </div>

        {/* Pricing Transparency */}
        <div className="bg-white border border-orange-200 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-4 text-[#d35400]">💸 Affordable & Transparent Pricing—No Surprises</h3>
          <p className="mb-4">
            We offer <em>some of the most competitive rates in the market</em>, thanks to our large team of skilled estimators. Whether you're a builder in <strong>Manchester</strong> or a contractor in <strong>Texas</strong>, we keep things simple:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Pricing is based on <em>project size and complexity</em></li>
            <li><strong>No extra charges</strong> for revisions or changes</li>
            <li><strong>95% of our quotes are accepted as-is</strong>—our pricing speaks for itself</li>
          </ul>
        </div>

        {/* Pricing Overview */}
        <div className="bg-white border border-orange-200 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-4 text-[#d35400]">📦 General Pricing Overview</h3>

          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">🔹 Single Trade Takeoff</h4>
            <p>Perfect for individual scopes like drywall, concrete, painting, etc.</p>
            <p className="font-semibold mt-1">💲/£ Starts at approx. <span className="text-[#e67e22]">$200 / £160</span></p>
            <p className="text-sm text-gray-600">Smaller jobs may cost as low as $100 / £80</p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-2">🏠 Residential & Commercial Projects</h4>
            <p>Each project is different. Upload your plans and we’ll quote you within <strong>5 minutes</strong>, based on:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
              <li>Scope of work</li>
              <li>Square footage/metres</li>
              <li>Project location</li>
            </ul>
          </div>
        </div>

        {/* CTA Section with Gradient */}
        <div className="bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-2xl p-8 text-center shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">📥 Get a Custom Quote in Just Minutes</h3>
          <p className="mb-4">Here’s how to get started:</p>
          <ol className="list-decimal pl-6 text-left max-w-lg mx-auto space-y-2 text-white">
            <li><strong>Upload your project drawings</strong></li>
            <li><strong>Complete the short contact form</strong></li>
            <li><strong>Receive a tailored quote in 5 minutes</strong>—no obligation</li>
          </ol>
          <p className="mt-4 text-yellow-100 font-medium">🎯 No long-term contracts. Just fast, reliable, and affordable estimating services.</p>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center bg-white text-red-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            <UploadCloud className="mr-2" />
            Upload Plans Now
          </Link>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <h4 className="text-xl font-semibold mb-2">Questions? Let’s Talk.</h4>
          <p>We’re available for clients across <strong>North America and the United Kingdom</strong>.</p>
          <p className="mt-2 font-medium text-[#e67e22]">📞 Call us at +1 347-480-1903</p>
          <p className="text-sm text-gray-600">or message us through the contact page for international inquiries.</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
