import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToyBrick as Brick, CheckCircle } from 'lucide-react';
import masan from '../../assets/masan.jpg';
import masonryImg1 from '../../assets/m7.jpg';
import masonryImg2 from '../../assets/m8.jpg';

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
    background: linear-gradient(90deg, #991b1b, #f59e0b); /* dark red -> amber curtain */
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

/* ---------- Custom CSS to fix check circles alignment ---------- */
const checkCircleListStyles = `
  .check-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 0.5rem 1.5rem;
    margin-left: 1rem;
  }
  .check-list-item {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    font-weight: 500;
    color: #374151; /* gray-700 */
    line-height: 1.25rem;
  }
  .check-list-icon {
    flex-shrink: 0;
    min-width: 20px;
    min-height: 20px;
    margin-top: 2px;
    color: #f59e0b; /* yellow-500 */
  }
`;

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
          {title && <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{title}</h2>}
          {children}
        </div>
      </div>
    </section>
  );
};

const SectionText = ({ title, children, bg = 'bg-white', center = false }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 250);
    return () => clearTimeout(t);
  }, []);
  return (
    <section className={`py-12 ${bg} ${visible ? 'fade-in-up' : 'opacity-0'} curtain`} style={{ animationDelay: '0.4s' }}>
      <div className={`max-w-6xl mx-auto px-4 ${center ? 'text-center' : ''}`}>
        {title && <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{title}</h2>}
        <div className="text-gray-700">{children}</div>
      </div>
    </section>
  );
};

const CardList = ({ items = [] }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {items.map((text, idx) => (
      <div key={idx} className="rounded-xl border border-gray-200 bg-white shadow-sm p-4">
        <p className="text-gray-800">{text}</p>
      </div>
    ))}
  </div>
);

const MasonryEstimating = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <style>
        {curtainAnimation}
        {fadeInAnimation}
        {checkCircleListStyles}
      </style>

      {/* ---------- Hero Section with Image Background + Curtain ---------- */}
      <section
        className="relative text-white py-16 curtain"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(${masan})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 fade-in-up"
          style={{ animationDelay: '0.35s' }}
        >
          <Brick className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">MASONRY ESTIMATING SERVICES</h1>
          <p className="text-xl max-w-3xl mx-auto text-red-100">
            If you are searching for the best masonry estimating services, Genius Estimate is at your service. With years of
            diversified experience in the estimation industry, we have excelled in delivering timely and most accurate estimates
            in the North American, Australian, and Caribbean regions.
          </p>
          <p className="text-md max-w-3xl mx-auto mt-4 text-red-100">
            Our expert masonry cost estimator quantifies every detail in Division 4, including bricks, CMU walls, clay and glass
            masonry, mortar & grout, veneers, lintels, insulation, flashing, reinforcement, restoration, labor costs, and man‑hours.
          </p>
          <p className="text-md max-w-3xl mx-auto mt-4 text-red-100">
            We work with AccuBid, PlanSwift, and Bluebeam, following AACE and AIQS guidelines. We also offer masonry brick wall
            3D designing services.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center">
            <Link
              to="/contactus"
              className="bg-yellow-500 text-red-900 px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition"
            >
              Contact Us Today & Get 30% Off!
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

      {/* ---------- WITH IMAGE #1: Range of Services ---------- */}
      <SectionWithImage image={masonryImg1} title="THE RANGE OF MASONRY ESTIMATING SERVICES" bg="bg-white">
        <p className="mb-4">
          With practical knowledge and years of experience in the AEC industry, we prepare timely and accurate estimates for
          general contractors, masonry contractors, vendors, masons, developers, architects, designers, and home builders.
        </p>
        <p className="mb-4">Our services are tailored to your needs. Deliverables generally include:</p>

        <ul className="check-list mb-4">
          {[
            'EXCEL spreadsheet',
            '3D wall renderings with many views',
            'Labor and material rates',
            'Man Hours',
            'Color-coded plans',
            'Detailed cost summary ',
            'Review of addendums',
            'Masonry Quantity Takeoffs',
            'Design, Budget & Bid Estimates',
            'Bid Submittal & Proposal Preparation',
            'Expert Witness / Restoration Estimates',
            'Change Order Estimates',
            'Masonry Consulting & Contractor Marketing',
            'Project Lead Generation',
            'Value Engineering',
            'Masonry Brick Wall 3D Designing',
          ].map((text, idx) => (
            <li key={idx} className="check-list-item">
              <CheckCircle className="check-list-icon" />
              {text}
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="inline-block bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition"
        >
          Upload Plans
        </Link>
      </SectionWithImage>

      {/* ---------- NO IMAGE: Masonry Takeoff Services ---------- */}
      <SectionText title="WHAT DO WE TAKEOFF IN THE DIVISION 4 MASONRY TRADE?" bg="bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ul className="list-disc ml-6 text-gray-700">
            <li>CMU Masonry</li>
            <li>Glass unit masonry</li>
            <li>Clay unit masonry</li>
            <li>Architectural & glazed masonry</li>
            <li>Stonemasonry walls</li>
            <li>Granite, Limestone, Marble</li>
            <li>Sandstone, Soapstone, Slate</li>
            <li>Cast stone</li>
            <li>Mortar and grout</li>
            <li>Masonry flashing, anchorage, insulation</li>
          </ul>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Chimney brick & tuckpointing</li>
            <li>Brick wall tiles & veneer</li>
            <li>Stucco work, Terra Cotta</li>
            <li>Masonry reinforcement & scaffolding</li>
            <li>Bolts, sleeves, brackets, brick ties</li>
            <li>Insulation, flashing, weep holes</li>
            <li>Restoration & cleaning</li>
            <li>Contingencies & site safety</li>
            <li>Reinforced concrete masonry walls</li>
            <li>Labor & man-hours</li>
          </ul>
        </div>
      </SectionText>

      {/* ---------- WITH IMAGE #2: Why Choose Us? ---------- */}
      <SectionWithImage image={masonryImg2} title="WHY CHOOSE GENIUS ESTIMATE FOR MASONRY?" bg="bg-white">
        <p className="mb-4">
          We stand out because of our expert knowledge, precise estimates, and client-focused approach. Our masonry estimating
          service helps you plan budgets effectively, reduce risks, and win bids.
        </p>
        <p className="mb-4">
          With access to updated material prices and labor rates, we ensure your estimates are accurate and comprehensive. Our
          3D rendering services help visualize masonry walls in detail.
        </p>
        <p className="mb-4">We assist general contractors, masons, architects, and developers with various estimating needs.</p>
        <Link
          to="/contact"
          className="inline-block bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition"
        >
          Get a Free Quote
        </Link>
      </SectionWithImage>

      {/* ---------- WITH NO IMAGE: Contact Section ---------- */}
      <SectionText title="CONTACT US" bg="bg-gray-50" center>
        <p className="mb-4">
          Ready to get started with your masonry estimate? Contact Genius Estimate today for reliable, accurate, and fast masonry
          estimating services.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-yellow-500 text-red-900 px-8 py-3 rounded font-semibold hover:bg-yellow-600 transition"
        >
          Upload Your Plans Now
        </Link>
      </SectionText>

      {/* ---------- Footer ---------- */}
      <footer className="py-6 text-center text-gray-600 text-sm bg-gray-100 mt-12">
        &copy; {new Date().getFullYear()} Genius Estimate. All rights reserved.
      </footer>
    </div>
  );
};

export default MasonryEstimating;

