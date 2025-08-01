import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Wrench,CheckCircle } from "lucide-react";

// Replace these with your actual image paths or URLs
import mt from "../../assets/mt.jpg"; // Hero background image
import steelImg from "../../assets/m12.jpg"; // 1st image section
import quantifyImg from "../../assets/m13.jpg"; // 2nd image section

// Curtain and fade-in animations as inline styles
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
    background: linear-gradient(90deg, #b91c1c, #f59e0b);
    animation: curtainOpen 1s ease forwards;
    z-index: 10;
  }
`;

const fadeInAnimation = `
  @keyframes fadeInUp {
    0% { opacity: 0; transform: translateY(18px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .fade-in-up { animation: fadeInUp .9s ease forwards; }
`;

// Reusable section component with image and text
const SectionWithImage = ({ image, title, children, reverse = false, bg = "bg-white" }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`py-12 ${bg} curtain ${visible ? "fade-in-up" : "opacity-0"}`}>
      <div className={`max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center`}>
        <div className={`${reverse ? "md:order-2" : ""}`}>
          <img
            src={image}
            alt={title}
            className="w-full rounded-xl shadow-lg object-cover h-80"
            loading="lazy"
          />
        </div>
        <div className={`${reverse ? "md:order-1" : ""}`}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
          <div className="text-gray-700">{children}</div>
        </div>
      </div>
    </section>
  );
};

// Reusable text-only section
const SectionText = ({ title, children, center = false, bg = "bg-white" }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`py-12 ${bg} curtain ${visible ? "fade-in-up" : "opacity-0"}`}>
      <div className={`max-w-6xl mx-auto px-4 ${center ? "text-center" : ""}`}>
        {title && <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>}
        <div className="text-gray-700">{children}</div>
      </div>
    </section>
  );
};

const MetalsEstimating = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Inject animations */}
      <style>{curtainAnimation + fadeInAnimation}</style>

      {/* HERO Section */}
      <section
        className="relative py-16 text-center text-white curtain"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${mt})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 fade-in-up" style={{ animationDelay: ".4s" }}>
          <Wrench className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Metals Estimating Services</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Accurate and affordable structural steel, rebar, and miscellaneous metals estimating and detailing services.
            Reduce overhead, avoid waste, and boost profit margins.
          </p>
        </div>
      </section>

      {/* IMAGE SECTION 1: About */}
      <SectionWithImage image={steelImg} title="Why Choose Our Metals Estimating?">
        <p className="mb-4">
          We started as a steel consulting group for contractors and fabricators, and now we’re a full-service pre‑construction estimating consultancy.
        </p>
        <ul className="ml-6 space-y-2">
  <li>
    <CheckCircle className="text-yellow-500 w-5 h-5 inline mr-2" />
    Fast turnaround: 24–48 hours
  </li>
  <li>
    <CheckCircle className="text-yellow-500 w-5 h-5 inline mr-2" />
    Detailed cost estimates including labor, equipment &amp; man-hours
  </li>
  <li>
    <CheckCircle className="text-yellow-500 w-5 h-5 inline mr-2" />
    Color‑coded marked‑up plans for easy reviews
  </li>
  <li>
    <CheckCircle className="text-yellow-500 w-5 h-5 inline mr-2" />
    Shop drawings and structural steel detailing services
  </li>
</ul>
        <div className="mt-6 flex gap-4">
          <Link
            to="/samples"
            className="bg-yellow-500 px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition"
          >
            View Sample
          </Link>
          <Link
            to="/contact"
            className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition"
          >
            Upload Plans
          </Link>
        </div>
      </SectionWithImage>

      {/* TEXT SECTION: Clients */}
<SectionText title="Who We Work With" center bg="bg-gray-50">
  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 max-w-2xl mx-auto text-gray-800">
    {[
      'Steel Manufacturers & Fabricators',
      'Framing Contractors',
      'Rebar & Structural Steel Erectors',
      'Piping & Duct Fabricators',
      'Installers & Distributors',
      'Sheet Metal Fabricators',
    ].map((item, idx) => (
      <li key={idx} className="flex items-start">
        <span className="mr-2 text-black">•</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
</SectionText>
      {/* IMAGE SECTION 2: What We Quantify */}
      <SectionWithImage image={quantifyImg} title="What We Quantify in Steel Takeoff" reverse bg="bg-white">
 
  <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
    {[
      'Steel framing',
      'Rebar',
      'Metal decking',
      'Plates & connectors',
      
      'Stud & stick framing',
      'Trusses & joists',
      'Fireproofing & finishes',
      'Railings, stairs & ladders',
      
      
      'Miscellaneous ironwork'
    ].map((item, idx) => (
      <li key={idx} className="flex items-start">
        <span className="mr-2 text-black">•</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
</SectionWithImage>

      {/* TEXT SECTION: Projects */}
    <SectionText title="Projects We Handle" bg="bg-gray-50" center>
  <div className="max-w-2xl mx-auto">
    <table className="w-full border-collapse border border-gray-300">
      <tbody>
        <tr>
          <td className="border border-gray-300 p-3 text-left">Public & Government</td>
          <td className="border border-gray-300 p-3 text-left">Residential & High‑Rise</td>
          <td className="border border-gray-300 p-3 text-left">Commercial & Industrial</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3 text-left">Healthcare & Institutional</td>
          <td className="border border-gray-300 p-3 text-left">Sports Clubs & Recreation Centers</td>
          <td className="border border-gray-300 p-3 text-left">Bridges, Dams & Flyovers</td>
        </tr>
      </tbody>
    </table>
  </div>
</SectionText>
      {/* CTA Section */}
      <SectionText center bg="bg-gradient-to-r from-red-600 to-yellow-500">
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-6">
            Upload your plans now and get a quote in <strong>5 minutes</strong>.
            Take advantage of our <span className="font-bold">30% OFF</span> first estimate offer!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Upload Plans
            </Link>
            <Link
              to="/contactus"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </SectionText>
    </div>
  );
};

export default MetalsEstimating;
