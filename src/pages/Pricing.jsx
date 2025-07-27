import React from 'react';
import { UploadCloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const featureCards = [
  {
    icon: "⚡",
    title: "Quick Turnaround",
    content: (
      <>
        <ul className="list-disc pl-4 space-y-1 text-gray-700">
          <li><strong>Standard delivery:</strong> 24 to 48 hours</li>
          <li><strong>Smaller projects:</strong> Often delivered same day</li>
          <li><strong>Large/complex projects:</strong> Always delivered on a tight schedule</li>
        </ul>
      </>
    )
  },
  {
    icon: "💸",
    title: "Transparent Pricing",
    content: (
      <>
        <ul className="list-disc pl-4 space-y-1 text-gray-700">
          <li>Based on project size & complexity</li>
          <li>No extra fees for revisions</li>
          <li>95% of quotes accepted—our value is clear</li>
        </ul>
      </>
    )
  },
  {
    icon: "📦",
    title: "General Pricing Overview",
    content: (
      <>
        <ul className="list-disc pl-4 space-y-1 text-gray-700">
          <li>Single Trade: From $100 / £80</li>
          <li>Small Jobs: From $150 / £120</li>
          <li>Multi-Trade: Custom pricing</li>
          <li>Monthly Plans: Save up to 60%</li>
          <li>No Fees for revisions</li>
          <li>5-Minute Quotes only</li>
        </ul>
      </>
    )
  }
];

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
            At <strong>Genius Estimate</strong>, we provide professional construction estimating and material takeoff services tailored to help contractors <strong>across the U.S.A, U.K. and Australia</strong> win more bids and increase profitability.
          </p>
          <p className="mt-2">
            Whether you’re quoting a <em>residential extension in London</em> or a <em>commercial build in New York</em>, we deliver accurate, fast, and affordable estimates that give you a competitive edge.
          </p>
        </div>

        {/* Horizontal Features Section - 3 cards in a row, equal size */}
        <div className="w-full flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {featureCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-orange-200 rounded-2xl p-6 flex flex-col justify-between items-start shadow hover:shadow-lg transition min-h-[340px] h-full"
              >
                <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2 text-[#d35400]">
                  <span className="text-3xl">{card.icon}</span> {card.title}
                </h3>
                <div className="text-gray-800 text-base flex-1 w-full">{card.content}</div>
              </div>
            ))}
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