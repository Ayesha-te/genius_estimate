import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Palette } from 'lucide-react';

const InteriorExteriorFinishes = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Palette className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            INTERIOR & EXTERIOR FINISHES ESTIMATING SERVICES
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Interior and exterior finishes estimations are very important for the construction of buildings...
          </p>
          {/* ...other paragraphs */}
          <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center">
            <Link
              to="/contact"
              className="bg-yellow-500 text-red-900 px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition"
            >
              Contact Us Today And Get 30% Off On Your First Cost Estimate!
            </Link>
            <Link
              to="/get-estimate"
              className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition"
            >
              Upload Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Range of Services */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            THE RANGE OF FINISHES ESTIMATING SERVICES
          </h2>
          {/* ...list */}
          <p className="mb-4">
            Outsource your finishes estimating services to us and submit more bids...
          </p>
          <div className="flex gap-3 mt-2">
            <Link
              to="/get-estimate"
              className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition"
            >
              Upload Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Flooring Estimating Services */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            FLOORING ESTIMATING SERVICES
          </h2>
          {/* ...content */}
          <Link
            to="/samples"
            className="bg-yellow-500 text-gray-900 px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition"
          >
            View Our Interior & Exterior Finishes Estimate Sample
          </Link>
        </div>
      </section>

      {/* Painting & Coating Estimating Services */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            PAINTING & COATING ESTIMATING SERVICES
          </h2>
          {/* ...content */}
        </div>
      </section>

      {/* Drywall Estimating Services */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            DRYWALL ESTIMATING SERVICES
          </h2>
          <p className="mb-4">
            Drywall and ceiling contractors are the regular clients...
          </p>
          <Link
            to="/contact"
            className="text-blue-900 underline"
          >
            Click here to learn more about our drywall estimating services.
          </Link>
        </div>
      </section>

      {/* Ceiling Estimating Services */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            CEILING ESTIMATING SERVICES
          </h2>
          {/* ...list */}
        </div>
      </section>

      {/* Plaster & Gypsum Board Estimating Services */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            PLASTER & GYPSUM BOARD ESTIMATING SERVICES
          </h2>
          {/* ...list */}
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-yellow-500 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Offer</h2>
          <p className="mb-4">
            If you are from USA then Get 30% off on your first estimate!
            <br />
            Just upload plans, We will review and send a quote in the next 5 minutes.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/get-estimate"
              className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Upload Plans
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              CALL US
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Follow the Simple Process!</h2>
          <p className="mb-4">
            Let Us Help You With Your Estimates And Increase Your ROI
          </p>
          <div className="text-left max-w-3xl mx-auto">
            <h3 className="font-semibold mb-2">Submit your Plans</h3>
            <p>
              <Link to="/get-estimate" className="text-blue-900 underline">
                Click here to upload your plans and specifications.
              </Link> We will send you a quote in the next 5 minutes after reviewing your plans.
            </p>
            <h3 className="font-semibold mb-2 mt-4">Get a Quote</h3>
            <p>
              We will send you a quote including invoice, turnaround time, and delivery date...
            </p>
            <h3 className="font-semibold mb-2 mt-4">Receive Estimate</h3>
            <p>
              We will provide you estimates in EXCEL sheets...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteriorExteriorFinishes;
