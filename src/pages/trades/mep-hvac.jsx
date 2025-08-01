
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Wind, CheckCircle } from 'lucide-react';
/* Hero background */
import mep from '../../assets/mep.jpg';
/* ✅ Use a small, clear set of content images (replace paths as needed) */
import mechImg from '../../assets/m9.jpg';
import elecImg from '../../assets/m10.jpg';
import plumbImg from '../../assets/m11.jpg';
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
    background: linear-gradient(90deg, #991b1b, #f59e0b); /* deep red -> amber */
    animation: curtainOpen 1s ease forwards;
    z-index: 10;
  }
`;
const fadeInAnimation = `
  @keyframes fadeInUp {
    0% { opacity: 0; transform: translateY(18px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .fade-in-up {
    animation: fadeInUp .9s ease forwards;
  }
`;
/* ---------- Reusable: Section with Image (Left on md+) ---------- */
const SectionWithImage = ({ image, title, children, bg = 'bg-white' }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 250);
    return () => clearTimeout(t);
  }, []);
  return (
    <section className={`py-12 ${bg} ${visible ? 'fade-in-up' : 'opacity-0'} curtain`} style={{ animationDelay: '0.4s' }}>
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-1">
          <img
            src={image}
            alt={title}
            className="w-full h-72 md:h-80 object-cover rounded-xl shadow-lg"
            loading="lazy"
          />
        </div>
        <div className="order-2 text-gray-800">
          {title && <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>}
          {children}
        </div>
      </div>
    </section>
  );
};
/* ---------- Reusable: Text-only Section (No Image) ---------- */
const SectionText = ({ title, children, bg = 'bg-white', center = false }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 250);
    return () => clearTimeout(t);
  }, []);
  return (
    <section className={`py-12 ${bg} ${visible ? 'fade-in-up' : 'opacity-0'} curtain`} style={{ animationDelay: '0.4s' }}>
      <div className={`max-w-6xl mx-auto px-4 ${center ? 'text-center' : ''}`}>
        {title && <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>}
        <div className="text-gray-700">{children}</div>
      </div>
    </section>
  );
};
/* ---------- Optional: simple card list style ---------- */
const CardList = ({ items = [] }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {items.map((text, idx) => (
      <div key={idx} className="rounded-xl border border-gray-200 bg-white shadow-sm p-4">
        <p className="text-gray-800">{text}</p>
      </div>
    ))}
  </div>
);
const MEPHVAC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <style>
        {curtainAnimation}
        {fadeInAnimation}
      </style>
      {/* ---------- Hero Section with image background & curtain ---------- */}
      <section
        className="text-white py-16 relative curtain"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(${mep})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-up" style={{ animationDelay: '0.35s' }}>
          <Wind className="w-16 h-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Fast, Accurate & Affordable MEP Estimating Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Expert Mechanical, Electrical &amp; Plumbing Takeoffs Delivered in 24 to 48 Hours
          </p>
          <p className="text-md max-w-3xl mx-auto mt-4">
            Contractors are always looking for reliable MEP estimating services. We provide affordable, accurate and
            cost‑effective estimates in 24–48 hours that help general contractors win more bids.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center">
            <Link
              to="/contactus"
              className="bg-yellow-500 text-red-900 px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition"
            >
              Contact Us — 30% Off First MEP Estimate
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
      {/* ---------- WITH IMAGE #1: Our MEP Estimating Services ---------- */}
      <SectionWithImage image={mechImg} title="Our MEP Estimating Services" bg="bg-white">
        <div className="grid md:grid-cols-3 gap-8 text-gray-700">
          <div>
            <h3 className="font-semibold text-xl mb-3">Mechanical</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="text-yellow-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>HVAC (ductwork, ventilation, chillers, boilers)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-yellow-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>Sheet metal, piping, insulation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-yellow-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>Equipment costs and labor hours</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-3">Electrical</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="text-yellow-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>Wiring, lighting, switchgear, conduits</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-yellow-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>Panels, generators, transformers</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-yellow-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>Load calcs &amp; labor breakdowns</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-3">Plumbing</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="text-yellow-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>Water supply, drainage, sanitary piping</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-yellow-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>Fixtures, valves, pumps</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-yellow-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>Roof drains, backflow, insulation</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-6">
          All estimates include detailed material take‑offs, labor hours, and vendor‑verified pricing based on your project zip code.
        </p>
      </SectionWithImage>
      {/* ---------- NO IMAGE: Who We Help ---------- */}
      <SectionText title="Who We Help" bg="bg-white">
        <p className="mb-4">
          At Genius Estimate, we support a wide range of professionals across the construction industry:
        </p>
        <ul className="list-disc ml-6 mb-4 grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-xl">
          <li>MEP Contractors</li>
          <li>General Contractors</li>
          <li>Engineers &amp; Architects</li>
          <li>Builders &amp; Developers</li>
          <li>Project Managers</li>
        </ul>
        <p className="max-w-3xl">
          Whether you're bidding on a commercial HVAC job, an industrial plumbing scope, or a full‑scope hospital MEP system, we have you covered.
        </p>
      </SectionText>
      {/* ---------- NO IMAGE: Why Choose ---------- */}
      <SectionText title="Why Choose Genius Estimate?" bg="bg-gray-50">
        <ul className="space-y-3 max-w-xl text-gray-700">
          <li className="flex items-start">
            <CheckCircle className="text-yellow-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
            <span>Accurate, reliable MEP takeoffs from licensed estimators</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-yellow-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
            <span>Fast turnaround — get your estimate in 24 to 48 hours</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-yellow-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
            <span>Transparent pricing with no hidden fees or markups</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-yellow-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
            <span>Detailed reports include material lists and labor costs</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-yellow-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
            <span>Support from industry experts with over 20 years experience</span>
          </li>
        </ul>
      </SectionText>
      {/* ---------- WITH IMAGE #2: Our Process ---------- */}
      <SectionWithImage image={elecImg} title="How Our MEP Estimating Process Works" bg="bg-white">
        <ol className="list-decimal ml-6 space-y-3 text-gray-700">
          <li>
            You send us your construction plans, blueprints, or PDFs.
          </li>
          <li>
            Our licensed estimators analyze the drawings and extract mechanical, electrical, and plumbing data.
          </li>
          <li>
            We prepare detailed takeoffs and pricing using up-to-date vendor and labor data.
          </li>
          <li>
            You receive a clear, itemized estimate within 24-48 hours.
          </li>
        </ol>
      </SectionWithImage>
      {/* ---------- WITH IMAGE #3: Our Commitment ---------- */}
      <SectionWithImage image={plumbImg} title="Our Commitment to You" bg="bg-gray-50">
        <p className="mb-4 text-gray-700">
          We understand that accurate MEP estimating can make or break your project bid. That's why we deliver:
        </p>
        <ul className="space-y-3 text-gray-700 max-w-xl">
          <li className="flex items-start">
            <CheckCircle className="text-yellow-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
            <span>Exceptional accuracy through skilled, licensed estimators.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-yellow-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
            <span>Fast turnaround without sacrificing detail or clarity.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-yellow-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
            <span>Transparent pricing that fits your budget.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-yellow-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
            <span>Personalized support from our estimating team whenever you need it.</span>
          </li>
        </ul>
      </SectionWithImage>
      {/* ---------- Footer Call to Action ---------- */}
      <SectionText center bg="bg-white">
        <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
        <p className="mb-6 max-w-3xl mx-auto text-gray-800">
          Contact Genius Estimate today for your fast, accurate MEP estimate.
        </p>
        <Link
          to="/contactus"
          className="inline-block bg-yellow-500 text-red-900 px-8 py-3 rounded font-semibold hover:bg-yellow-600 transition"
        >
          Request Your Estimate
        </Link>
      </SectionText>
    </div>
  );
};
export default MEPHVAC;