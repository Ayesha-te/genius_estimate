import React from 'react';
import { Link } from 'react-router-dom';
import { Wind } from 'lucide-react';

const MEPHVAC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Wind className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            MEP ESTIMATING SERVICES
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Contractors are always looking for MEP estimating services. World Estimating provides affordable, accurate and cost-effective cost estimates in the least turnaround time 24-48 Hrs. Our takeoffs always assist general contractors in winning bids.
          </p>
          <p className="text-md text-red-100 max-w-3xl mx-auto mt-4">
            We excel in the most reliable estimating services and deliver accurate construction takeoff services to contractors which includes a complete range of mechanical, electrical and plumbing estimating services.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center">
            <Link
              to="/contact"
              className="bg-yellow-500 text-red-900 px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition"
            >
              Contact Us Today And Get 30% Off On Your First MEP Estimate!
            </Link>
            <Link
              to="/contact"
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
            RANGE OF MEP ESTIMATING SERVICES
          </h2>
          <ul className="list-disc ml-6 text-gray-700 mb-4 grid grid-cols-1 md:grid-cols-2 gap-y-1">
            <li>Material takeoffs</li>
            <li>Bid estimates & bidding assistance</li>
            <li>Preliminary estimates & feasibility studies</li>
            <li>Budget & design estimates</li>
            <li>Change order estimates</li>
            <li>Litigation assistance</li>
            <li>Project Cost Management</li>
            <li>Project lead generation</li>
            <li>CPM scheduling</li>
            <li>MEP drafting</li>
          </ul>
          <Link
            to="/contact"
            className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition"
          >
            Upload Plans
          </Link>
        </div>
      </section>

      {/* Our Deliverables */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Our Deliverables
          </h2>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>Digital takeoff sheets</li>
            <li>Material quantities & pricing</li>
            <li>Labor costs & labor hours</li>
            <li>Marked up drawing plans</li>
            <li>Complete takeoff summary including all costs</li>
            <li>Bid review with inclusion/exclusion sheet</li>
          </ul>
        </div>
      </section>

      {/* Components Estimated */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Components Do We Estimate In MEP Estimating Services?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700 mb-4">
            <div>Sheet Metal</div><div>Dehumidifier</div><div>Chillers</div>
            <div>Boilers</div><div>Furnaces</div><div>Heat Pumps</div>
            <div>Ducts</div><div>Lighting</div><div>Low Voltage</div>
            <div>Electrical</div><div>Plumbing</div><div>Sprinklers</div>
            <div>Fire Proofing</div><div>Fire Suppression</div><div>Pipe Insulation</div>
            <div>Spray insulation</div><div>Fire stopping</div><div>Air Filters</div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-yellow-500 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Special Offer</h2>
          <p className="mb-4">
            If you are from Texas, Get 30% off your first estimate! Upload plans now.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Upload Plans
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Call Us
            </Link>
          </div>
        </div>
      </section>

      {/* Bid More CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="font-bold text-red-600 mb-2">Bid more, Win more!</div>
          <p className="mb-3 text-gray-700">
            Get our MEP Estimating Services to step up your winning game!
          </p>
          <div className="border-t pt-4 mt-4">
            <p className="font-semibold">Submit your plans/drawings:</p>
            <p>
              <Link to="/Contact" className="text-blue-900 underline">Click here to send us plans and specifications.</Link> We will analyze and send you a quote in 5 minutes.
            </p>
            
            <p className="font-semibold mt-2">Receive Estimate:</p>
            <p>
              We’ll deliver a complete, peer-reviewed estimate ready for your bid.
            </p>
          </div>
        </div>
      </section>

      

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Our Service Regions
          </h2>
          <p className="mb-4 text-gray-700">
            We serve across the US including Texas, Florida, New Jersey, Georgia, California, New York, Arizona, Illinois, and more.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MEPHVAC;
