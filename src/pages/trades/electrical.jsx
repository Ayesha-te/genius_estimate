import React from 'react';
import { Link } from 'react-router-dom';

const Electrical = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Electrical Estimators
          </h1>
          <p className="mb-4">
            Electrical Estimators at World Estimating are competent and professional enough to deliver you quick and accurate estimates. Our Electrical Estimators are distinctive from other estimating companies because they are well-equipped, seasoned, reliable, and experienced to use all the up-to-date electrical estimating software. They will help you bid on more projects and increase the chance to win more.
          </p>
          <p className="mb-4">
            Our expert team of electrical estimators, engineers, industrial electronics professionals with diverse past experiences working with contractors, estimators, and electricians possess their expertise in delivering electrical takeoff software like PlanSwift, ConEst, Accubid, and Bluebeam. Their expertise in this industry benefits you in providing accurate and useful electrical estimates to win bids and elevate your project.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Services</h2>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>Electrical material Takeoffs</li>
            <li>Electrical Cost per Square Foot</li>
            <li>Electrical CAD drafting services</li>
            <li>Electrical cost estimates for residential, commercial, and industrial construction projects.</li>
            <li>Value engineering</li>
            <li>Bid preparation and submission</li>
            <li>Electric Project Cost Management</li>
          </ul>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Our Clients</h2>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>General Contractors</li>
            <li>Electrical Contractors</li>
            <li>EPC Contractors</li>
            <li>Low Voltage Contractors</li>
            <li>Instrumentation Contractors</li>
            <li>Instrumentation and Control systems technicians</li>
            <li>Electrical Vendors</li>
            <li>Electricians</li>
            <li>Architects</li>
            <li>Designers</li>
          </ul>
        </div>
      </section>

      {/* Takeoff Sheets */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Electrical Takeoff Sheets</h2>
          <p className="mb-4">
            Our Electrical Estimators genuinely understand the effectiveness of contractors and electricians that require detailed estimates to order and install the individual components including electrical systems, effectively.
          </p>
          <p className="mb-4">
            Our Electrical Estimator organizes several takeoffs into different sections with a comprehensive line-item description concerning different types and sizes, marked with color-coded plans that are easily understandable for you.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
            <div>Conduit</div>
            <div>Conductors</div>
            <div>Lighting fixtures</div>
            <div>Lighting controls</div>
            <div>EMT fittings</div>
            <div>Grounding</div>
            <div>Fuses</div>
            <div>Receptacles</div>
            <div>Plates</div>
            <div>Switches</div>
            <div>Panels and Circuit breakers</div>
            <div>Wiring</div>
            <div>Switchboards</div>
            <div>Branch devices</div>
            <div>Low voltage and other devices</div>
            <div>Cable Tray</div>
            <div>Feeders</div>
          </div>
        </div>
      </section>

      {/* Residential Electrical Estimating */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Residential Electrical Estimating</h2>
          <p className="mb-4">
            Our expert Electrical Estimators are hand on to provide residential electrical estimating services ranging from different improvements, upgrading new homes, apartments, eco-homes, smart homes, etc.
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>Building automation systems</li>
            <li>Home security systems</li>
            <li>Electrical heating systems</li>
            <li>Network and communication systems</li>
            <li>Entertainment systems</li>
            <li>Solar electric panels</li>
            <li>Lighting</li>
            <li>Switches and controls, doorbells, and intercoms</li>
          </ul>
        </div>
      </section>

      {/* Commercial Electrical Estimating */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Commercial Electrical Estimating</h2>
          <p className="mb-4">
            We hire electrical estimators who deliver accurate and reliable estimates to different commercial electrical contractors under high work pressure and tight budgets.
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>Commercial communications cabling systems</li>
            <li>Wiring for HVAC systems</li>
            <li>Commercial walk-in freezers and chiller systems</li>
            <li>Standby Power generating systems</li>
            <li>Emergency and alarm systems</li>
            <li>Low voltage distribution systems</li>
            <li>Electronic door readers</li>
            <li>Temperature controls</li>
            <li>Solar power systems</li>
            <li>Geothermal systems</li>
          </ul>
        </div>
      </section>

      {/* Industrial Electrical Estimating */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Industrial Electrical Estimating Services</h2>
          <p className="mb-4">
            Our electrical estimators are professional enough to deal with industrial estimates and all types and sizes of industrial projects.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700 mb-4">
            <div>Sewerage treatment plants</div>
            <div>Wastewater treatment plants</div>
            <div>Power generations, distribution</div>
            <div>Metals, food, and beverages</div>
            <div>Chemical</div>
            <div>Petrochemical</div>
            <div>Manufacturing and mining industries</div>
          </div>
        </div>
      </section>

      {/* Low Voltage Estimating */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Low Voltage Estimating Services</h2>
          <p className="mb-4">We provide estimating services for the following low voltage systems:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700 mb-4">
            <div>Telephone</div>
            <div>Audio and Visual</div>
            <div>Thermostats</div>
            <div>Network Data</div>
            <div>Wireless Clocks</div>
            <div>Nurse Call</div>
            <div>Fire Alarm</div>
            <div>Landscape Lighting</div>
            <div>Garage Door Openers</div>
            <div>Access Control</div>
            <div>Structured Cabling</div>
            <div>Fire Suppression</div>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link to="/Samples" className="bg-yellow-500 text-gray-900 px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition">
              View Our Samples
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-yellow-500 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Get Started With World Estimating</h2>
          <p className="mb-4">
            Just upload plans in the below link, we will review and send a quote in next 5 minutes:
          </p>
          <Link
            to="/Contact"
            className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition"
          >
            Upload Plans
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-yellow-500 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">
            For more information, email us at <a href="mailto:info@worldestimating.com" className="text-yellow-300 underline">info@worldestimating.com</a> or call <a href="tel:3474801903" className="text-yellow-300 underline">347 480-1903</a>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Electrical;
