import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const SiteworkEstimating = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sitework Estimating Services
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Site work contractors, landscaping contractors, land developers, general contractors, and site contractors rely on our site work estimating services for accurate and detailed site work estimate, cut and fill takeoff, and 3D maps delivered to them within 24 to 48 hours. With accurate figures, they win more bids and cut their overhead costs.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <p className="mb-4">
            At World Estimating, a large number of clients are excavation contractors whose busy and hectic schedules at the site compel them to outsource their excavation estimating services to a reliable and cost-effective estimation company...
          </p>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Our deliverables for site work estimating services include:</h2>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>Cut & Fill Takeoff list with takeoff summary</li>
            <li>Earth Volumes, quantities, and section</li>
            <li>Surface Grading</li>
            <li>Cut & fill visual 3D reports</li>
            <li>3D mapping reports and reviewed bid documents</li>
            <li>Landscaping estimate with soil volumes (Hardscape, Softscape & Irrigation)</li>
          </ul>
          <div className="flex flex-wrap gap-3 mb-4">
            <Link to="/samples" className="bg-yellow-500 text-gray-900 px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition">VIEW OUR SITEWORK 1 SAMPLE</Link>
            <Link to="/samples" className="bg-yellow-500 text-gray-900 px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition">VIEW OUR SITEWORK 2 SAMPLE</Link>
            <Link to="/samples" className="bg-yellow-500 text-gray-900 px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition">VIEW OUR LANDSCAPING SAMPLE</Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-3">OUR RANGE OF SITEWORK ESTIMATING SERVICES</h2>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>Quantity takeoffs & Cost Estimates</li>
            <li>Sitework Feasibility Analysis</li>
            <li>Land Development Consultation</li>
            <li>Bidding Assistance</li>
            <li>Design phase Estimating Assistance</li>
            <li>Legal Claims Assistance</li>
            <li>Change Order Management</li>
            <li>Value Engineering</li>
          </ul>
          <p className="mb-4">If you are interested in our sitework estimating services, contact us today so we can get started on your project!</p>
          <div className="flex gap-3 mt-2">
            <Link to="/contact" className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition">
              Upload Plans
            </Link>
            <span className="text-gray-900 font-semibold">Call us at 347 480-1903</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-yellow-500 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Are you ready to get started with us!</h2>
          <div className="text-left max-w-3xl mx-auto">
            <h3 className="font-semibold mb-2">1- Upload your Plans</h3>
            <p>
              <Link to="/contact" className="text-blue-900 underline">
                Click here to upload your plans.
              </Link>{" "}
              We accept PDF format and your plans can be Bid set, Schematic, Design Development, Construction document, or conceptual drawings.
            </p>
            <h3 className="font-semibold mb-2 mt-4">2- Get a Quote</h3>
            <p>Quotes will be based on invoice, delivery date, and turnaround time. You can pay via Credit Card or Debit Card or PayPal.</p>
            <h3 className="font-semibold mb-2 mt-4">3- Receive Estimate</h3>
            <p>Estimates will be delivered to you in EXCEL sheets comprising all the material and labor pricing with cut & fill 3D visual reports either in MasterFormat or your customized format.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">
            World Estimating is a one-stop solution for all your estimation requirements through site work estimating services
          </h2>
          <p className="mb-4">
            Working with clients throughout North American, Caribbean, and Australian regions. In the US, we serve the following markets: New York, Florida, Texas, California, and more.
          </p>
          <h2 className="text-2xl font-bold mb-4">What are you waiting for?</h2>
          <p className="mb-4">
            If you are planning to hire a construction project estimator, then World Estimating is the right option for you to choose!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Contact Us GET 30% OFF
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SiteworkEstimating;
