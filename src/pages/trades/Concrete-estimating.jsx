import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ct from '../../assets/ct.jpg';
import damsImg from '../../assets/concrete.jpg'; 
import bridgesImg from '../../assets/drywall.jpg';
import { CheckCircle } from 'lucide-react';

const fadeSlideIn = 'opacity-0 translate-x-6';
const fadeSlideInReverse = 'opacity-0 -translate-x-6';

const ConcreteEstimating = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const portfolioItems = [
    "Dams",
    "Bridges",
    "Residential buildings",
    "Commercial buildings",
    "Highways",
    "Driveways",
    "Culverts and sewers",
    "Marine Structures",
    "Fences",
    "Foundations For High Rise Buildings",
  ];

  return (
    <>
      <Helmet>
        <title>Concrete Estimating & Takeoff Services | Genius Estimate</title>
        <meta name="description" content="Professional concrete estimating and takeoff services for contractors. Get accurate estimates for foundations, slabs, driveways, and all concrete work with 30% off your first estimate." />
        <meta name="keywords" content="concrete estimating services, concrete takeoff services, construction cost estimating, foundation estimating, concrete cost estimating" />
        <link rel="canonical" href="https://geniusestimate.com/trades/concrete-estimating" />
        
        {/* Schema.org markup for Service */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Concrete Estimating Services",
              "provider": {
                "@type": "ProfessionalService",
                "name": "Genius Estimate",
                "url": "https://geniusestimate.com"
              },
              "description": "Professional concrete estimating and takeoff services for contractors, home builders, and real estate developers. Our certified estimators provide accurate concrete takeoffs for foundations, slabs, driveways, and more.",
              "serviceType": "Construction Estimating",
              "areaServed": "United States",
              "offers": {
                "@type": "Offer",
                "description": "30% Off Your First Cost Estimate"
              }
            }
          `}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Curtain Reveal Overlay */}
        <div
          className={`fixed inset-0 bg-yellow-400 z-50 pointer-events-none transition-transform duration-1000 ease-in-out ${
            animate ? '-translate-x-full' : 'translate-x-0'
          }`}
        ></div>

        {/* Hero Section */}
        <section
          className="relative text-white py-20 bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${ct})` }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div
            className={`relative max-w-5xl mx-auto px-4 text-left z-10 transition-all duration-1000 ease-out ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight transition-all duration-1000 delay-1000">
              CONCRETE ESTIMATING AND TAKEOFF SERVICES
            </h1>
            <p className="text-md md:text-lg mb-4 transition-opacity delay-1100">
              Concrete Estimating Services at Genius Estimate is a one-stop solution for all your concrete estimating needs. We thrive in providing division 3, concrete estimating services for many years to general contracting corporations, concrete contractors, home builders, and real estate developers. Usually, contractors involved in the work of sidewalks, driveways, paving have to work onsite for carrying out the fieldwork and struggle to estimate accurately for bidding proposals. We take the responsibility to alleviate their pressure by providing them with a thorough and precise concrete estimating and takeoff services to aid them in bidding.
            </p>
            <p className="mb-6 transition-opacity delay-1200">
              We have a specialized concrete cost estimator for division 3 trades, certified with the American estimators organizations like American Association of Cost Engineers (AACE) and the Australian Institute of Quantity Surveyors (AIQS) for concrete takeoff services.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Link
                to="/contactus"
                className="bg-yellow-400 text-red-800 px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition"
              >
                Contact Us Today And Get 30% Off On Your First Cost Estimate!
              </Link>
              <Link
                to="/contact"
                className="bg-red-600 text-white px-6 py-3 rounded font-semibold hover:bg-red-700 transition"
              >
                Upload Plans
              </Link>
            </div>
          </div>
        </section>

        {/* What We Quantify Section */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <img
              src={damsImg}
              alt="Concrete estimating for dams and large structures"
              className={`w-full rounded shadow-lg transition-transform duration-700 ease-in-out ${
                animate ? 'opacity-100 translate-x-0' : fadeSlideInReverse
              }`}
            />
            <div
              className={`transition-opacity duration-700 ease-in-out ${
                animate ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <h2 className="text-2xl font-bold text-orange-700 mb-4">
                WHAT WE QUANTIFY IN OUR CONCRETE ESTIMATING SERVICES?
              </h2>
              <p className="mb-4">
                Contact Us Today And Get 30% Off On Your First Cost Estimate!
                <br />
                Or Just Upload Plans In The Below Link, We Will Review And Send A Quote In Next 5 Minutes:
              </p>
              <Link
                to="/contact"
                className="bg-red-600 text-white px-6 py-3 rounded font-semibold hover:bg-red-700 transition mb-4 inline-block"
              >
                Upload Plans
              </Link>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-red-700 mb-6">
                  OUR PORTFOLIO IN CONCRETE TAKEOFF SERVICES
                </h3>
                <ul className="grid grid-cols-1 gap-4">
                  {portfolioItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="text-yellow-500 w-6 h-6 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-6 text-gray-700">
                From big construction companies to small businesses, we have served many general contractors, concrete contractors, asphalt contractors, foundation contractors, vendors, and pavers with the most accurate and highly detailed concrete estimating services and material takeoffs services.
              </p>
              <p className="mt-2 text-gray-700">
                We have successfully provided concrete takeoff services for sidewalk, driveway, retaining walls, concrete pavement, waterproofing, parking lots, flatwork, basement, concrete foundation, concrete curbs, concrete slabs, etc.
              </p>
              <Link
                to="/samples"
                className="bg-yellow-400 text-red-800 px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition mt-4 inline-block"
              >
                View Our Concrete Estimate Sample
              </Link>
            </div>
          </div>
        </section>

        {/* Range of Services Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <img
              src={bridgesImg}
              alt="Professional concrete estimating services for bridges and infrastructure"
              className={`w-full rounded shadow-lg transition-transform duration-700 ease-in-out ${
                animate ? 'opacity-100 translate-x-0' : fadeSlideInReverse
              }`}
            />
            <div
              className={`transition-opacity duration-700 ease-in-out ${
                animate ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <h2 className="text-2xl font-bold text-orange-700 mb-4">
                THE RANGE OF CONCRETE ESTIMATING SERVICES
              </h2>
              <ul className="list-disc ml-6 text-gray-800 grid grid-cols-1 md:grid-cols-2 gap-y-1">
                <li>Concrete Quantity Takeoffs</li>
                <li>Budget & Bid Estimates</li>
                <li>Bid Preparation</li>
                <li>Design Estimates</li>
                <li>Change Order Estimates</li>
                <li>Value Engineering</li>
                <li>Project Lead Generation</li>
                <li>Concrete Contractor Marketing</li>
                <li>Expert Witness</li>
                <li>Litigation Assistance</li>
              </ul>
              <div className="mt-4">
                <p className="font-semibold text-orange-700">
                  Our deliverables for division 3 trade include:
                </p>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Concrete takeoff spreadsheets</li>
                  <li>Material, labor & equipment costs</li>
                  <li>Man Hours</li>
                  <li>Marked up drawing plans</li>
                  <li>Takeoff summary including total costs</li>
                  <li>Review of exclusions and inclusions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Outsource Section */}
        <section
          className="py-12 bg-white max-w-5xl mx-auto px-4 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: animate ? 1 : 0 }}
        >
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            WHY YOU SHOULD OUTSOURCE YOUR CONCRETE ESTIMATES?
          </h2>
          <p className="mb-3 text-gray-700">
            Contractors involved in paving, driveways, and sidewalks are so occupied in on-site activities...
          </p>
          <p className="mb-3 text-gray-700">
            Outsourcing your construction takeoff services to a professional estimating company like ours gives you confidence and comes with the following perks:
          </p>
          <ul className="ml-6 text-gray-700 space-y-3">
            {[
              "You don't have to buy expensive software or hire dedicated staff.",
              "You save on the extra expenses of hiring a full-time estimator.",
              "It improves your bid volume and win ratio.",
              "Boosts efficiency and profit potential.",
              "You no longer miss out on opportunities.",
            ].map((text, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="text-yellow-500 w-5 h-5 flex-shrink-0 mr-2 mt-0.5" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </section>  
      </div>
    </>
  );
};

export default ConcreteEstimating;