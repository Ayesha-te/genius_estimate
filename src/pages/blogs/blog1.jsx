import React from 'react';

const estimationServices = [
  { name: 'MEP Estimating', link: '/trades/mep-hvac' },
  { name: 'Concrete Takeoffs', link: '/trades/concrete-estimating' },
  { name: 'Openings Estimating', link: '/trades/openings-estimating' },
  { name: 'Electrical Estimates', link: '/trades/electrical' },
  { name: 'Sitework Take-offs', link: '/trades/sitework-estimating' },
];

export default function blog1() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Why Contractors Lose Bids — and How to Avoid It
      </h1>
      <p className="mb-6 text-lg text-gray-700">
        In the construction industry, bidding can make or break your business. No matter how skilled your crew is or how impressive your portfolio looks, if you’re not winning bids, your bottom line suffers. Many contractors struggle not because of poor work—but because of poor bidding.
      </p>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-[#2c3e50]">🔍 Top 6 Reasons Contractors Lose Bids</h2>

        <div>
          <h3 className="text-xl font-semibold">1. Inaccurate Estimates</h3>
          <p className="text-gray-700">
            Many rely on outdated spreadsheets or rough guesses. This results in either overbidding (losing jobs) or underbidding (losing profits).
          </p>
          <p className="mt-2"><strong>Fix:</strong> Use real-time, location-specific cost data like Genius Estimate does.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">2. Scope Gaps and Missing Details</h3>
          <p className="text-gray-700">
            Vague proposals kill credibility. Missing line items = missing trust.
          </p>
          <p className="mt-2"><strong>Fix:</strong> Break down bids into detailed, trade-specific sections.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">3. Slow Turnaround Time</h3>
          <p className="text-gray-700">
            Even a perfect bid submitted late can get ignored.
          </p>
          <p className="mt-2"><strong>Fix:</strong> Partner with fast-turnaround teams like Genius Estimate (24–48 hrs).</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">4. Lack of Presentation & Professionalism</h3>
          <p className="text-gray-700">
            Sloppy formatting ruins confidence. Presentation matters.
          </p>
          <p className="mt-2"><strong>Fix:</strong> Submit clean, branded proposals that reflect your professionalism.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">5. Underbidding to Win Jobs</h3>
          <p className="text-gray-700">
            Lowballing backfires. It hurts your margins and your reputation.
          </p>
          <p className="mt-2"><strong>Fix:</strong> Use data-driven pricing to stay realistic and competitive.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">6. No Time or Team to Bid Effectively</h3>
          <p className="text-gray-700">
            Small contractors often skip bids or rush them due to lack of time.
          </p>
          <p className="mt-2"><strong>Fix:</strong> Outsource to professionals for consistent and scalable results.</p>
        </div>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-bold text-[#27ae60]">🎯 How to Win More Bids (The Smart Way)</h2>

        <ul className="list-disc ml-6 text-gray-700">
          <li><strong>Invest in Professional Estimating Services:</strong> Improve win rate by 30% using data-backed services like Genius Estimate.</li>
          <li><strong>Bid More, Worry Less:</strong> Scale your bidding efforts without compromising quality.</li>
          <li><strong>Track & Learn:</strong> Refine your process with every bid—win or lose.</li>
        </ul>
      </section>

      <section className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-[#d35400] mb-4">💰 Ready to Save Time and Win More Work?</h2>
        <p className="text-lg text-gray-700 mb-4">
          Thousands of contractors trust Genius Estimate to submit more bids, win more jobs, and boost profitability.
        </p>

        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-full font-bold text-lg shadow-md hover:scale-105 hover:shadow-lg transition"
        >
          👉 Get an Estimate Now
        </a>
      </section>

      <section className="mt-12">
        <h3 className="text-xl font-bold mb-4">🔎 Related Estimation Services:</h3>
        <div className="flex flex-wrap gap-4">
          {estimationServices.map(({ name, link }) => (
            <a
              key={name}
              href={link}
              className="px-5 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-red-600 to-yellow-500 hover:from-yellow-500 hover:to-red-600 transition"
            >
              {name}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
