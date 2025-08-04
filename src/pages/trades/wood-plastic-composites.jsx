import React from 'react';
import { Link } from 'react-router-dom';
import { TreePine } from 'lucide-react';
import { motion } from 'framer-motion';
import wp from '../../assets/wp.jpg';
import img1 from '../../assets/m20.jpg';
import img2 from '../../assets/m21.jpg';
import {
  CheckCircle,
  Calculator,
  Building,
  FileText
} from 'lucide-react';
const curtainVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.4, ease: 'easeIn' } },
};

// New curtain panel variants
const curtainPanelVariants = {
  initialLeft: { x: 0 },
  initialRight: { x: 0 },
  animateLeft: { x: '-100%', transition: { duration: 1, ease: 'easeInOut' } },
  animateRight: { x: '100%', transition: { duration: 1, ease: 'easeInOut' } },
};

const WoodPlasticComposites = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Curtain Panels */}
      <motion.div
        className="fixed top-0 left-0 w-1/2 h-full bg-red-600 z-50"
        variants={curtainPanelVariants}
        initial="initialLeft"
        animate="animateLeft"
      />
      <motion.div
        className="fixed top-0 right-0 w-1/2 h-full bg-yellow-500 z-50"
        variants={curtainPanelVariants}
        initial="initialRight"
        animate="animateRight"
      />

      {/* Main Content with fade-in */}
      <motion.div
        className="min-h-screen bg-gray-50 relative z-10"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={curtainVariants}
      >
        {/* Hero Section */}
        <section
          className="relative py-20 text-white"
          style={{
            backgroundImage: `url(${wp})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="bg-black bg-opacity-30 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <TreePine className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Wood & Plastic Composites Estimating
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Wood & plastic composites estimating and takeoff comprises work
                includes rough carpentry, decking, sheathing, paneling, plastic
                fabrications and wood veneers. The millwork contractors come to
                Genius Estimate for quantity material and labor takeoff of all
                the items involved in the scope of work.
              </p>
            </div>
          </div>
        </section>

        {/* Images Section */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Project Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <figure className="flex flex-col items-center">
                <img
                  src={img1}
                  alt="Wood Plastic Composite Sample 1"
                  className="rounded shadow-lg max-h-72 object-cover w-full"
                />
                <figcaption className="mt-3 text-gray-700 text-center">
                  Decking Installation Sample
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center">
                <img
                  src={img2}
                  alt="Wood Plastic Composite Sample 2"
                  className="rounded shadow-lg max-h-72 object-cover w-full"
                />
                <figcaption className="mt-3 text-gray-700 text-center">
                  Wood Veneers Application Sample
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <p className="mb-4">
              The lumber takeoff we provide to busy millwork contractors and home
              builders. The takeoffs we provide are in maximum detail and depict
              the true essence of the purpose of estimate. The basic purpose of
              the takeoff and cost estimate is established with the client’s
              requirements.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              <Link
                to="/samples"
                className="bg-yellow-500 text-gray-900 px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition"
              >
                View Our Wood & Plastic Composites Estimate Sample
              </Link>
              
            </div>
            <p className="mb-4">
              The things that we usually estimate are the millwork, woodwork, and
              plastic composites work that specialty contractors have been
              dealing in.
            </p>
            <p className="mb-4">
              Providing lumber takeoffs and estimates to all states of the United
              States, Canada, Australia, and the United Kingdom. We also service
              in other countries as per the demand of the client. So do not
              hesitate to contact us either you are out of States.
            </p>
            <Link to="/Contact" className="text-blue-900 underline mb-4 block">
              For detailed takeoffs and estimates relevant to lumber, wood plastic
              composites click here.
            </Link>
            <span className="font-semibold block mb-2">
              Just upload plans in the below link, we will review and send a quote
              in next 5 minutes:
            </span>
            <Link
              to="/contact"
              className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition mb-6"
            >
              Upload Plans
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        
<section className="py-12 bg-gray-100">
  <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">FAQ</h2>
    <ul className="space-y-4">
      <li className="flex items-start">
        <div>
          <li className="flex items-start">
  <span className="mr-3 mt-1">
    <CheckCircle className="text-yellow-500 w-5 h-5" />
  </span>
  <div>
    <h3 className="font-semibold text-gray-800">
      What is the turnaround time for most of our takeoffs?
    </h3>
    <p className="mt-1 text-gray-600">
      Most of the time, the turnaround time is 24-48 hrs. But if the
      scope is huge it could be as minimum as compared to the time quoted
      by other estimating firms.
    </p>
  </div>
</li>
<li className="flex items-start">
  <span className="mr-3 mt-1">
    <CheckCircle className="text-yellow-500 w-5 h-5" />
  </span>
  <div>
    <h3 className="font-semibold text-gray-800">
      What do we charge for woodwork takeoffs?
    </h3>
    <p className="mt-1 text-gray-600">
      We usually charge $200 on average for wood takeoffs and our
      dedicated estimator plan will cost you $2000 in which one can have
      a full time dedicated experienced estimator in our office. We also
      can design a package as per your number of jobs that would
      definitely save your expense up to 60%.
    </p>
  </div>
</li>
<li className="flex items-start">
  <span className="mr-3 mt-1">
    <CheckCircle className="text-yellow-500 w-5 h-5" />
  </span>
  <div>
    <h3 className="font-semibold text-gray-800">
      Can estimates be made in detail or if contractors want estimates in
      their pattern?
    </h3>
    <p className="mt-1 text-gray-600">
      Our seasoned team of estimators is adept in the estimates and
      takeoffs, that the detail be made as per the client requirements.
      We can also provide estimate in the client format. Please visit
      our profiles on The Blue Book.
    </p>
  </div>
</li>
        </div>
      </li>
    </ul>
  </div>
</section>

        {/* Final CTA Section */}
        <section className="py-12 bg-gradient-to-r from-red-600 to-yellow-500 text-white text-center">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">What are you waiting for?</h2>
            <p className="mb-4">
              If you are planning to hire a construction project estimator, then
              Genius Estimate is the right option for you to choose!
            </p>
            <Link
              to="/contactus"
              className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default WoodPlasticComposites;
