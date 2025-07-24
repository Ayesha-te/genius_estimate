import React from 'react';
import { Link } from 'react-router-dom';
import { DoorOpen } from 'lucide-react';

const OpeningsEstimating = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <DoorOpen className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Openings Estimating Services
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Openings estimating services are required for all opening frames, door and windows. Expert cost estimators provide installation and material cost after calculation and briefly described to the door and frame contractors, intended for marking their labor markups in a bid. Aluminum, Bronze, Vinyl, Fiberglass and metal door contractors.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <p className="mb-4">
            Labor costs for special material and function door and windows are calculated by taking off the material and respective labor to install the openings in commercial and residential facilities.
          </p>
          <p className="mb-4">
            Definitely, being an umbrella Estimation giant of certified professionals and estimator, we takeoff we also deal with industrial facilities labor and materials. Please visit our profile on The Blue Book.
          </p>
          <p className="mb-4">
            Thermal and glazed openings are for function-specific purposes and their estimation is done through our certified and professional estimators.
          </p>
        </div>
      </section>

      {/* How We Quantify */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How does World Estimating quantify a certain trade and make it meaningful to the contractor?</h2>
          <p className="mb-4">
            Our professional commercial construction cost estimator quantifies the quantities from the plans and mark up the drawings with color code schemes just to show from where we have taken the quantities for Openings Estimating.
          </p>
        </div>
      </section>

      {/* Save Money */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to save money with World Estimating?</h2>
          <p className="mb-4">
            You can take our monthly takeoff and openings estimating packages or hire a dedicated construction estimator within $1000-1500$ for as many plans as you could bid.
          </p>
        </div>
      </section>

      {/* Grow Your Business */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How can we grow our business and win more work?</h2>
          <p className="mb-4">
            Just concentrate on your installation and fabrication work and hand over the rest to World Estimating, where you will be helped with estimates, consultancy and will save your time. Thus, filing more bids and earning more is only possible when you have more time to file rather than to estimate. Many contractors have increased their income bracket after rendering World Estimating services.
          </p>
        </div>
      </section>

      {/* CTA Section - Upload Plans */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-yellow-500 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <p className="mb-4">
            Just upload plans in the below link, we will review and send a quote in the next 5 minutes:
          </p>
          <Link
            to="/contact"
            className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Upload Plans
          </Link>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-yellow-500 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-4">
            What are you waiting for? If you are planning to hire a construction project estimator, then World Estimating is the right option for you to choose!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Your Estimate
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OpeningsEstimating;
