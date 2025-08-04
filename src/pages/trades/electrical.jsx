import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  CheckCircle,
  Calculator,
  Building,
  FileText
} from 'lucide-react';

/* Hero background */
import electrical2 from '../../assets/et.jpg';

/* ✅ EXACTLY THREE content images */
import conduitImg from '../../assets/m1.jpg';
import residentialImg from '../../assets/m2.jpg';
import commercialImg from '../../assets/m3.jpg';

/* ---------- Animations (curtain + fade-in) ---------- */
const curtainAnimation = `
  @keyframes curtainOpen {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }
  .curtain {
    position: relative;
    overflow: hidden;
  }
  .curtain::before {
    content: '';
    position: absolute; inset: 0;
    background: #e53e3e; /* red curtain color */
    animation: curtainOpen 1s ease forwards;
    z-index: 10;
  }
`;

const fadeInAnimation = `
  @keyframes fadeInUp {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .fade-in-up {
    animation: fadeInUp 1s ease forwards;
  }
`;

/* ---------- Section with Image (Left) ---------- */
const SectionWithImage = ({ image, title, children, bg = 'bg-white' }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`py-12 ${bg} ${visible ? 'fade-in-up' : 'opacity-0'} curtain`}
      style={{ animationDelay: '0.5s' }}
    >
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={image}
            alt={title}
            className="rounded shadow-lg max-h-64 object-cover w-full"
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2 text-gray-900">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
};

/* ---------- Text-only Section (No Image) ---------- */
const SectionText = ({ title, children, bg = 'bg-gray-50' }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`py-12 ${bg} ${visible ? 'fade-in-up' : 'opacity-0'} curtain`}
      style={{ animationDelay: '0.5s' }}
    >
      <div className="max-w-5xl mx-auto px-4">
        {title && <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{title}</h2>}
        <div className="text-gray-700">{children}</div>
      </div>
    </section>
  );
};

const Electrical = () => {
  return (
    <>
      <Helmet>
        <title>Electrical Estimating Services | MEP Takeoff Experts | Genius Estimate</title>
        <meta name="description" content="Professional electrical estimating services for residential, commercial, and industrial projects. Our expert electrical estimators deliver accurate material takeoffs with 24-48 hour turnaround." />
        <meta name="keywords" content="electrical estimating services, MEP estimating services, electrical takeoff services, electrical cost estimating, residential electrical estimating, commercial electrical estimating" />
        <link rel="canonical" href="https://geniusestimate.com/trades/electrical" />
        
        {/* Open Graph data */}
        <meta property="og:title" content="Electrical Estimating Services | MEP Takeoff Experts | Genius Estimate" />
        <meta property="og:description" content="Professional electrical estimating services for residential, commercial, and industrial projects. Our expert electrical estimators deliver accurate material takeoffs." />
        <meta property="og:image" content="https://geniusestimate.com/electrical.jpg" />
        <meta property="og:url" content="https://geniusestimate.com/trades/electrical" />
        <meta property="og:type" content="website" />
        
        {/* Schema.org markup for Service */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Electrical Estimating Services",
              "provider": {
                "@type": "ProfessionalService",
                "name": "Genius Estimate",
                "url": "https://geniusestimate.com"
              },
              "serviceType": "Construction Estimating",
              "areaServed": "United States",
              "description": "Professional electrical estimating services for residential, commercial, and industrial projects including conduit, conductors, lighting fixtures, panels, and wiring.",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "USD"
              }
            }
          `}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <style>
          {curtainAnimation}
          {fadeInAnimation}
        </style>

        {/* ---------- Hero Section (with background image & curtain) ---------- */}
        <section
          className="min-h-screen text-white py-16 curtain"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${electrical2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="max-w-5xl mx-auto px-4 fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Electrical Estimators</h1>
            <p className="mb-4 text-lg md:text-xl text-yellow-100">
              Electrical trades are the backbone of modern construction, ensuring safe and efficient power distribution across residential, commercial, and industrial projects.
            </p>
            <p className="mb-4 text-lg md:text-xl text-white-100">
              Electrical Estimators at Genius Estimate are competent and professional enough to deliver quick and
              accurate estimates. Our estimators are well‑equipped, reliable, and experienced with up‑to‑date electrical
              estimating software to help you bid on more projects and increase win rates.
            </p>
            <p className="mb-8 text-white-100">
              Our expert team—estimators, engineers, and industrial electronics professionals—brings hands‑on experience
              with PlanSwift, ConEst, Accubid, and Bluebeam to provide accurate, useful estimates that elevate your
              project outcomes.
            </p>
            <p className="text-center text-yellow-100 text-3xl md:text-4xl font-semibold font-sans mb-8">
              Power your project with precision—our electrical trade experts light the way!
            </p>

            <div className="flex justify-center mt-6">
              <Link
                to="/Contact"
                className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
              >
                Upload Plans
              </Link>
            </div>

          </div>
        </section>

        {/* ---------- 1) WITH IMAGE: Our Services ---------- */}
        <SectionWithImage image={conduitImg} title="Our Services" bg="bg-white">
          <ul className="ml-6 text-gray-700 space-y-1">
            <li>
              <CheckCircle className="text-yellow-500 w-5 h-5 inline mr-2" />
              Electrical material takeoffs
            </li>
            <li>
              <CheckCircle className="text-yellow-500 w-5 h-5 inline mr-2" />
              Electrical cost per square foot
            </li>
            <li>
              <CheckCircle className="text-yellow-500 w-5 h-5 inline mr-2" />
              Electrical CAD drafting services
            </li>
            <li>
              <CheckCircle className="text-yellow-500 w-5 h-5 inline mr-2" />
              Estimates for residential, commercial &amp; industrial projects
            </li>
            <li>
              <CheckCircle className="text-yellow-500 w-5 h-5 inline mr-2" />
              Value engineering
            </li>
            <li>
              <CheckCircle className="text-yellow-500 w-5 h-5 inline mr-2" />
              Bid preparation &amp; submission
            </li>
            <li>
              <CheckCircle className="text-yellow-500 w-5 h-5 inline mr-2" />
              Electrical project cost management
            </li>
          </ul>
        </SectionWithImage>

        {/* ---------- 2) NO IMAGE: Our Clients ---------- */}
        <SectionText title="Our Clients" bg="bg-gray-50">
          <ul className="list-disc ml-6 space-y-1">
            <li>General Contractors</li>
            <li>Electrical Contractors</li>
            <li>EPC Contractors</li>
            <li>Low Voltage Contractors</li>
            <li>Instrumentation Contractors</li>
            <li>Instrumentation & Control Systems Technicians</li>
            <li>Electrical Vendors</li>
            <li>Electricians</li>
            <li>Architects</li>
            <li>Designers</li>
          </ul>
        </SectionText>

        {/* ---------- 3) NO IMAGE: Electrical Takeoff Sheets ---------- */}
        <SectionText title="Our Electrical Takeoff Sheets" bg="bg-white">
          <p className="mb-4">
            We understand contractors and electricians need detailed, accurate takeoffs for ordering and installing every
            component efficiently. Our takeoffs include comprehensive line‑item descriptions by type and size, with
            color‑coded plan markups for clarity.
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 list-inside list-[square] text-black">
            <li>Conduit</li>
            <li>Conductors</li>
            <li>Lighting fixtures</li>
            <li>Lighting controls</li>
            <li>EMT fittings</li>
            <li>Grounding</li>
            <li>Fuses</li>
            <li>Receptacles</li>
            <li>Plates</li>
            <li>Switches</li>
            <li>Panels & Circuit breakers</li>
            <li>Wiring</li>
            <li>Switchboards</li>
            <li>Branch devices</li>
            <li>Low voltage & other devices</li>
            <li>Cable tray</li>
            <li>Feeders</li>
          </ul>
        </SectionText>


        {/* ---------- 4) WITH IMAGE: Residential Electrical Estimating ---------- */}
        <SectionWithImage image={residentialImg} title="Residential Electrical Estimating" bg="bg-gray-50">
          <p className="mb-4">
            Our estimators deliver residential estimates for upgrades, new homes, apartments, eco‑homes, and smart homes.
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Building automation systems</li>
            <li>Home security systems</li>
            <li>Electrical heating systems</li>
            <li>Network & communication systems</li>
            <li>Entertainment systems</li>
            <li>Solar electric panels</li>
            <li>Lighting</li>
            <li>Switches & controls, doorbells & intercoms</li>
          </ul>
        </SectionWithImage>

        {/* ---------- 5) NO IMAGE: Industrial Electrical Estimating ---------- */}
        <SectionText title="Industrial Electrical Estimating Services" bg="bg-white">
          <p className="mb-4">
            We handle industrial estimates across a wide range of facility types and sizes with accuracy and speed.
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <li className="flex items-start">
              <span className="mr-2 text-black font-bold">•</span>
              <span>Sewerage treatment plants</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-black font-bold">•</span>
              <span>Wastewater treatment plants</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-black font-bold">•</span>
              <span>Power generation & distribution</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-black font-bold">•</span>
              <span>Metals, food & beverages</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-black font-bold">•</span>
              <span>Chemical</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-black font-bold">•</span>
              <span>Petrochemical</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-black font-bold">•</span>
              <span>Manufacturing & mining industries</span>
            </li>
          </ul>
        </SectionText>

        {/* ---------- 6) WITH IMAGE: Commercial Electrical Estimating ---------- */}
        <SectionWithImage image={commercialImg} title="Commercial Electrical Estimating" bg="bg-gray-50">
          <p className="mb-4">
            We deliver accurate estimates for commercial contractors working under tight budgets and timelines.
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Commercial communications cabling systems</li>
            <li>Wiring for HVAC systems</li>
            <li>Walk‑in freezers & chiller systems</li>
            <li>Standby power generating systems</li>
            <li>Emergency & alarm systems</li>
            <li>Low voltage distribution systems</li>
            <li>Electronic door readers</li>
            <li>Temperature controls</li>
            <li>Solar power systems</li>
            <li>Geothermal systems</li>
          </ul>
        </SectionWithImage>

        {/* ---------- CTA (Centered) ---------- */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-yellow-500 text-white text-center curtain" style={{ marginBottom:"-63px" }}>
          <div className="max-w-4xl mx-auto px-4 fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started With Genius Estimate</h2>
            <p className="mb-6 text-lg">
              Upload your plans and get a quote within minutes. Receive your estimate in 24–48 hours.
            </p>
            <Link
              to="/Contact"
              className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition"
            >
              Upload Plans
            </Link>
          </div>
        </section>

        {/* ---------- Contact (Centered) ---------- */}
        <section className="py-12 bg-gradient-to-r from-red-600 to-yellow-500 text-white text-center curtain">
          <div className="max-w-4xl mx-auto px-4 fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
            <p className="mb-2">
              Email:{' '}
              <a href="mailto:sales@geniusestimate.com" className="underline text-yellow-200">
                sales@geniusestimate.com
              </a>
            </p>
            <p>
              Phone:{' '}
              <a href="tel:3474801903" className="underline text-yellow-200">
                (347) 480‑1903
              </a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Electrical;