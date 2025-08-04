import React from 'react';
import { Link } from 'react-router-dom';
import { Shield,CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import tp from '../../assets/tp.jpg';
import img1 from '../../assets/m18.jpg';
import img2 from '../../assets/m19.jpg';

const curtainVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.4, ease: 'easeIn' } },
};

const curtainSlideLeft = {
  initial: { x: 0 },
  animate: { x: '-100%' },
  exit: { x: 0 },
  transition: { duration: 1.2, ease: 'easeInOut' },
};

const curtainSlideRight = {
  initial: { x: 0 },
  animate: { x: '100%' },
  exit: { x: 0 },
  transition: { duration: 1.2, ease: 'easeInOut' },
};

const ThermalProtection = () => {
  return (
    <>
      {/* Curtain Animation */}
      <motion.div
        className="fixed top-0 left-0 w-1/2 h-full z-50"
        style={{ backgroundColor: '#FFD700' }}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={curtainSlideLeft}
      />
      <motion.div
        className="fixed top-0 right-0 w-1/2 h-full z-50"
        style={{ backgroundColor: '#DC143C' }}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={curtainSlideRight}
      />

      {/* Main Content */}
      <motion.div
        className="min-h-screen bg-gray-50"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={curtainVariants}
      >
        {/* Hero Section */}
        <section
          className="relative py-20 text-white"
          style={{
            backgroundImage: `url(${tp})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 opacity-30" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Thermal & Moisture Protection Estimating Services
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Our residential and commercial building cost estimators are very much hands-on with thermal and moisture protection trades of work. From waterproofing to insulation—our services cover it all.
            </p>
          </div>
        </section>

        {/* Project Highlights */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Project Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <figure className="flex flex-col items-center">
                <img
                  src={img1}
                  alt="Thermal Protection Sample 1"
                  className="rounded shadow-lg max-h-72 object-cover w-full"
                />
                <figcaption className="mt-3 text-gray-700 text-center">
                  Thermal Insulation Installation Example
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center">
                <img
                  src={img2}
                  alt="Thermal Protection Sample 2"
                  className="rounded shadow-lg max-h-72 object-cover w-full"
                />
                <figcaption className="mt-3 text-gray-700 text-center">
                  Waterproofing Application Sample
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Service Explanation */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <ul className="space-y-4 mb-4">
              {[
                "These estimates can be used for procurement, ordering materials, estimating labor, and bid proposals.",
                "Our flooring estimators handle tiles, marble, and EIFS with accuracy and attention to detail.",
                "Thermal insulation takeoffs are prepared using software and delivered in Excel format.",
                "We serve homeowners with fast and expert roof estimating using provided drawings or specs.",
                "Roofing contractors trust us for clear, quick, and professional estimates with 24/7 support.",
              ].map((text, i) => (
                <li className="flex items-start" key={i}>
<span className="mr-3 mt-1">
  <CheckCircle className="text-yellow-500 w-5 h-5" />
</span>
<span>{text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 mb-4">
              <Link
                to="/samples"
                className="bg-yellow-500 text-gray-900 px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition"
              >
                View Our Thermal & Moisture Protection Estimate Sample
              </Link>
            </div>

            <div className="mb-4">
              <span className="font-semibold">
                Just upload plans using the link below — we’ll review and send a quote in the next 5 minutes:
              </span>
            </div>

            <div className="flex justify-center">
              <Link
                to="/Contact"
                className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition"
              >
                Upload Plans
              </Link>
            </div>
          </div>
        </section>

        {/* Takeoffs List */}
      <section className="py-12 bg-gray-100">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Thermal & Moisture Protection Takeoffs</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700 mb-4"></div>
        <li>Fire retardant cable sprays takeoffs</li>
        <li>Damproofing takeoffs</li>
        <li>Waterproofing takeoffs</li>
        <li>Chemical grouting takeoffs</li>
        <li>Traffic coatings takeoffs</li>
        <li>Fiber insulation takeoffs</li>
        <li>Plastic insulation takeoffs</li>
        <li>Cellulose insulation takeoffs</li>
        <li>Reflective insulation takeoffs</li>
        <li>Cladding takeoffs</li>
        <li>Roof and deck installation takeoffs</li>
        <li>EIFS (Exterior Insulation and Finish Systems) takeoffs</li>
        <li>Weather Barriers takeoffs</li>
        <li>Vapor Resistive Barriers takeoffs</li>
        <li>Vapor Permeable Barriers takeoffs</li>
        <li>Steep Slope Roofing takeoffs</li>
        <li>Shingles (Asphalt, Metal, Slate) takeoffs</li>
        <li>Siding Panels takeoffs</li>
        <li>Metal Siding takeoffs</li>
        <li>Vinyl Siding takeoffs</li>
        <li>Membrane roofing takeoffs</li>
        <li>Bituminous roofing takeoffs</li>
        <li>Flashings takeoffs</li>
        <li>Coping takeoffs</li>
        <li>Fascias takeoffs</li>
        <li>Gutters and downspouts takeoffs</li>
        <li>Roof expansion joints takeoffs</li>
        <li>Roof curbs takeoffs</li>
        <li>Ridge vents takeoffs</li>
        <li>Pipe flashing system takeoffs</li>
        <li>Wood siding and shingles takeoffs</li>
        <li>Roof walkway takeoffs</li>
        <li>Spray fireproofing takeoffs</li>
        <li>Intumescent fireproofing takeoffs</li>
        <li>Fire stopping takeoffs</li>
        <li>Smoke barriers takeoffs</li>
        <li>Joint sealants takeoffs</li>
        <li>Joint seals takeoffs</li>
        <li>Snow guards takeoffs</li>
        <li>Roof pavers takeoffs</li>
        <li>Penetration firestopping takeoffs</li>
        <li>Fiber-reinforced cement siding takeoffs</li>
      </div>
           </section>









        {/* Service Regions */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Providing Thermal & Moisture Protection Estimating Services throughout United States, United Kingdom, Australia, Canada and more
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-gray-700">
              {[
                'Colorado', 'Denver', 'Colorado Springs', 'Aurora', 'Fort Collins',
                'Lakewood', 'Pueblo', 'Centennial', 'Boulder', 'Greeley',
                'Longmont', 'Castle Rock', 'Grand Junction', 'Parker', 'Littleton',
                'Brighton', 'Westminster', 'Thornton', 'Arvada', 'Highlands Ranch'
              ].map((city, i) => (
                <div key={i}>{city}</div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default ThermalProtection;
