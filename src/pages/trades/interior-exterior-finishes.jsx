import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { CheckCircle, Palette } from 'lucide-react';
import ie from '../../assets/ie.jpg';
import interiorImg from '../../assets/m4.jpg';
import exteriorImg from '../../assets/m5.jpg';
import deliverablesImg from '../../assets/m6.jpg';

/* ---------- CSS Animations & Reveal ---------- */
const styles = `
@keyframes curtainOpen {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.curtain {
  position: relative;
  overflow: hidden;
}
.curtain::before {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(90deg, #dc2626, #f59e0b);
  z-index: 10;
  transform: translateX(0);
  animation: curtainOpen 1s ease forwards;
}
.reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity .8s ease, transform .8s ease;
}
.reveal.inview {
  opacity: 1;
  transform: translateY(0);
}
`;

const SectionWithImage = ({ image, title, children, bg = 'bg-white', reverse = false }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className={`py-12 ${bg} curtain`}>
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className={`order-${reverse ? '2' : '1'} reveal ${inView ? 'inview' : ''}`}>
          <img
            src={image}
            alt={title}
            className="w-full h-72 md:h-80 object-cover rounded-xl shadow-xl"
            loading="lazy"
          />
        </div>
        <div className={`order-${reverse ? '1' : '2'} reveal ${inView ? 'inview' : ''}`}>
          {title && <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>}
          {children}
        </div>
      </div>
    </section>
  );
};

const InteriorExteriorFinishes = () => {
  return (
    <>
      <Helmet>
        <title>Interior & Exterior Finishes Estimating Services | Genius Estimate</title>
        <meta name="description" content="Professional interior and exterior finishes estimating services. Get accurate takeoffs for drywall, painting, flooring, siding, EIFS, and more with our specialized estimators." />
        <meta name="keywords" content="interior finishes estimating, exterior finishes estimating, drywall takeoff services, painting estimating, flooring estimating, siding estimating, construction cost estimating" />
        <link rel="canonical" href="https://geniusestimate.com/trades/interior-exterior-finishes" />
        
        {/* Open Graph data */}
        <meta property="og:title" content="Interior & Exterior Finishes Estimating Services | Genius Estimate" />
        <meta property="og:description" content="Professional interior and exterior finishes estimating services. Get accurate takeoffs for drywall, painting, flooring, siding, EIFS, and more." />
        <meta property="og:image" content="https://geniusestimate.com/interior-exterior.jpg" />
        <meta property="og:url" content="https://geniusestimate.com/trades/interior-exterior-finishes" />
        <meta property="og:type" content="website" />
        
        {/* Schema.org markup for Service */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Interior & Exterior Finishes Estimating Services",
              "provider": {
                "@type": "ProfessionalService",
                "name": "Genius Estimate",
                "url": "https://geniusestimate.com"
              },
              "serviceType": "Construction Estimating",
              "areaServed": "United States",
              "description": "Professional interior and exterior finishes estimating services including drywall, painting, flooring, siding, EIFS, and waterproofing takeoffs and cost estimates.",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "USD"
              }
            }
          `}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <style>{styles}</style>

        {/* Hero Section */}
        <section
          className="relative py-20 text-white curtain"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${ie})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <div className="reveal inview" style={{ animation: 'fadeInUp 1s ease both .35s' }}>
              <Palette className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                INTERIOR & EXTERIOR FINISHES ESTIMATING SERVICES
              </h1>
              <p className="text-xl max-w-3xl mx-auto text-yellow-100">
                Fast & Accurate Interior and Exterior Finish Estimating Services<br />
                Win More Bids with Precision Take-offs for Every Finish Scope
              </p>
              <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center">
                <Link
                  to="/contact"
                  className="bg-yellow-400 text-red-900 px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition"
                >
                  Get Your Estimate Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Tailored Estimating Solutions */}
        <SectionWithImage image={interiorImg} title="Tailored Estimating Solutions for Finishing Trades">
          <p className="mb-6 text-gray-700">
            At Genius Estimate, we specialize in providing precise cost estimates for interior and exterior finish trades.
            Whether you're handling painting, drywall, EIFS, flooring, or siding—we deliver detailed material take-offs and
            accurate construction estimating services to help you win more bids, reduce overhead, and streamline procurement.
          </p>

          <h3 className="text-xl font-semibold mb-3">We Serve:</h3>
          <ul className="pl-6 mb-6 text-gray-700 space-y-1">
            <li>
              <CheckCircle className="text-yellow-500 w-5 h-5 inline mr-2" />
              General Contractors
            </li>
            <li>
              <CheckCircle className="text-yellow-500 w-5 h-5 inline mr-2" />
              Finishing Subcontractors
            </li>
            <li>
              <CheckCircle className="text-yellow-500 w-5 h-5 inline mr-2" />
              Home Builders &amp; Developers
            </li>
            <li>
              <CheckCircle className="text-yellow-500 w-5 h-5 inline mr-2" />
              Renovation Experts
            </li>
            <li>
              <CheckCircle className="text-yellow-500 w-5 h-5 inline mr-2" />
              Construction Managers
            </li>
          </ul>
        </SectionWithImage>

        {/* Section 2: What's Included */}
        <SectionWithImage image={exteriorImg} title="What's Included in Our Finish Take-offs & Estimates?" bg="bg-gray-100" reverse>
          <div className="grid md:grid-cols-2 gap-8 mb-6 text-gray-700">
            <div>
              <h4 className="text-xl font-semibold mb-2">Interior Finishes</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Drywall & Gypsum Board</li>
                <li>Taping, Painting & Finishing</li>
                <li>Flooring & Ceiling Systems</li>
                <li>Millwork & Acoustic Treatments</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Exterior Finishes</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Siding, EIFS & Stucco</li>
                <li>Exterior Painting & Caulking</li>
                <li>Waterproofing & Sealants</li>
                <li>Roofing & Tiling</li>
              </ul>
            </div>
          </div>
          <p className="italic text-gray-600">
            📌 Estimates include full labor & material breakdowns, local pricing, and markup-ready Excel files.
          </p>
        </SectionWithImage>

        {/* Section 3: Why Genius Estimate */}
        <SectionWithImage image={deliverablesImg} title="Why Genius Estimate?" bg="bg-white">
          <ul className="list-none space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" /> 24–48 Hour Turnaround
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" /> Trade-Specific Estimators
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" /> Flat-Rate & Transparent Pricing
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" /> Zip Code–Based Material Costs
            </li>
          </ul>
        </SectionWithImage>
      </div>
    </>
  );
};

export default InteriorExteriorFinishes;