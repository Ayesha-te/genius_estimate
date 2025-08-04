import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin,CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import site from '../../assets/site.jpg';
import sitework1 from '../../assets/m16.jpg';
import sitework2 from '../../assets/m17.jpg';

const curtainOverlayVariants = {
  initial: { x: '-100%' },
  animate: { x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { x: '100%', transition: { duration: 0.6, ease: 'easeIn' } },
};

const curtainVariants = {
  hidden: { x: '-100%', opacity: 0 }, // Start off-screen left
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { x: '100%', opacity: 0, transition: { duration: 0.4, ease: 'easeIn' } }, // Exit off-screen right
};

const SiteworkEstimating = () => {
  const [curtainVisible, setCurtainVisible] = useState(true);

  useEffect(() => {
    // Hide curtain after animation finishes (about 1.2 seconds)
    const timer = setTimeout(() => setCurtainVisible(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {curtainVisible && (
          <motion.div
            key="curtain"
            className="fixed top-0 left-0 w-full h-full z-50 flex"
            variants={curtainOverlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ pointerEvents: 'none' }}
          >
            {/* Left half yellow */}
            <div className="w-1/2 bg-yellow-400" />
            {/* Right half red */}
            <div className="w-1/2 bg-red-600" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="min-h-screen bg-gray-50"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 1, duration: 0.5 } },
          exit: { opacity: 0, transition: { duration: 0.4 } },
        }}
      >
        {/* Hero Section */}
        <section
          className="relative py-20 text-white"
          style={{
            backgroundImage: `url(${site})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <MapPin className="w-16 h-16 mx-auto mb-6 opacity-30" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sitework Estimating Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Site work contractors, landscaping contractors, land developers, general contractors, and site contractors rely on our site work estimating services for accurate and detailed site work estimate, cut and fill takeoff, and 3D maps delivered to them within 24 to 48 hours. With accurate figures, they win more bids and cut their overhead costs.
            </p>
          </div>
        </section>

        {/* Images Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={sitework1} alt="Sitework Estimating Visual 1" className="rounded shadow-lg object-cover w-full h-64 md:h-80" />
            <img src={sitework2} alt="Sitework Estimating Visual 2" className="rounded shadow-lg object-cover w-full h-64 md:h-80" />
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4 space-y-6">
            <p>
              At Genius Estimate, a large number of clients are excavation contractors whose busy and hectic schedules at the site compel them to outsource their excavation estimating services to a reliable and cost-effective estimation company...
            </p>
            <h2 className="text-xl font-bold text-gray-900">Our Deliverables for Sitework Estimating Services Include:</h2>
            <ul className="ml-6 text-gray-700 space-y-2">
  <li>
    <CheckCircle className="text-yellow-500 w-5 h-5 inline mr-2" />
    Cut &amp; Fill Takeoff list with takeoff summary
  </li>
  <li>
    <CheckCircle className="text-yellow-500 w-5 h-5 inline mr-2" />
    Earth Volumes, quantities, and section
  </li>
  <li>
    <CheckCircle className="text-yellow-500 w-5 h-5 inline mr-2" />
    Surface Grading
  </li>
  <li>
    <CheckCircle className="text-yellow-500 w-5 h-5 inline mr-2" />
    Cut &amp; Fill visual 3D reports
  </li>
  <li>
    <CheckCircle className="text-yellow-500 w-5 h-5 inline mr-2" />
    3D mapping reports and reviewed bid documents
  </li>
  <li>
    <CheckCircle className="text-yellow-500 w-5 h-5 inline mr-2" />
    Landscaping estimate with soil volumes (Hardscape, Softscape &amp; Irrigation)
  </li>
</ul>
            <div className="flex flex-wrap gap-3">
              <Link to="/samples" className="bg-yellow-500 text-gray-900 px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition">
                View our landscaping and sitework sample
              </Link>
              
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Our Range of Sitework Estimating Services</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Quantity takeoffs & Cost Estimates</li>
              <li>Sitework Feasibility Analysis</li>
              <li>Land Development Consultation</li>
              <li>Bidding Assistance</li>
              <li>Design Phase Estimating Assistance</li>
              <li>Legal Claims Assistance</li>
              <li>Change Order Management</li>
              <li>Value Engineering</li>
            </ul>
            <p>If you are interested in our sitework estimating services, contact us today so we can get started on your project!</p>
            <div className="flex flex-wrap gap-3 mt-4 items-center">
              <Link to="/contact" className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition">
                Upload Plans
              </Link>
              <span className="text-gray-900 font-semibold">Call us at 347 480-1903</span>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How It Works</h2>
            <div className="max-w-3xl mx-auto space-y-8 text-gray-700">
              <div>
                <h3 className="font-semibold mb-2">1. Upload Your Plans</h3>
                <p>
                  <Link to="/contact" className="text-blue-900 underline">
                    Click here to upload your plans.
                  </Link> We accept PDF formats, including Bid set, Schematic, Design Development, Construction documents, or conceptual drawings.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">2. Get a Quote</h3>
                <p>Quotes will be based on invoice, delivery date, and turnaround time. You can pay via Credit Card, Debit Card, or PayPal.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">3. Receive Your Estimate</h3>
                <p>Estimates will be delivered to you in Excel sheets detailing material and labor pricing with cut & fill 3D visual reports either in MasterFormat or your customized format.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 bg-gradient-to-r from-red-600 to-yellow-500 text-white text-center">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">
              Genius Estimate is your one-stop solution for all site work estimating needs
            </h2>
            <p className="mb-4">
              Serving clients throughout North America, the Caribbean, and Australia. Our US coverage includes New York, Florida, Texas, California, and more.
            </p>
            <h2 className="text-2xl font-bold mb-4">What are you waiting for?</h2>
            <p className="mb-8">
              If you are planning to hire a construction project estimator, then Genius Estimate is the right option for you to choose!
            </p>
            <Link
              to="/contactus"
              className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us & GET 30% OFF
            </Link>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default SiteworkEstimating;
