import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Wrench, Award, Building } from 'lucide-react';

const MetalsEstimating = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Wrench className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Metals Estimating Services
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Offering you accurate, affordable, and timely structural steel, rebar, and miscellaneous metals estimating services and detailing services for the wide scope of construction projects and help you reduce overhead costs, avoid wastage and save the environment.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Metals Estimating Services
          </h2>
          <p className="mb-4">
            World Estimating started as a steel consulting group for metal framing contractors, steel erectors, steel manufacturers, distributors, and fabricators which later on developed as a total pre-construction estimating consultancy. Our team of skilled structural steel estimators and engineers have developed the best estimating practices to analyze and audit takeoffs and control construction costs for our clients.
          </p>
          <p className="mb-4">
            For metals estimating services, all decks, trusses, railings, stud framing, joists, gratings, and castings are properly described and quantified which is again proof checked by senior estimators to ensure that the quality of the minute things in takeoffs should be kept intact. Our emphasis on accuracy and detail not only lessens the waste but also contributes to the green environment by ordering the less amount at the construction site and keeping away the dumped waste. Please visit our profile on The Blue Book.
          </p>
          <p className="mb-4">
            Many of the steel fabricators and manufacturers, even steel framing contractors have trouble reading the technical details from the plans and making accurate takeoffs with structural details due to less technical know-how. We specialize in providing a complete range of steel estimating and detailing services with the ability to handle complex structures.
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>Our estimators and detailers are well conversant with the manufacturing process, specifications, techniques like laser welding, advanced cutting, etc.</li>
            <li>Fast turnaround within 24 to 48 hours to quickly quote prices to your clients.</li>
            <li>Detailed cost estimate comprising material, labor, welders, cranes, fuel, equipment, etc along with labor hours required for rebar erection.</li>
            <li>Easy to review and edit estimates with color-coded marked up plans.</li>
            <li>Complete structural steel detailing and shop drawing services for all types of infrastructures, residential, commercial, industrial projects from planning through completion.</li>
            <li>We render optimum bar bending schedules for structural steel, rebar, piping, sheet metal, and HVAC duct fabrications/erections.</li>
            <li>If required by the client, we also advise various alternatives that help save money.</li>
            <li>24/7 support on live chat and email.</li>
          </ul>
          <div className="flex flex-wrap gap-3 mb-4">
            <Link to="/samples/steel" className="bg-yellow-500 text-gray-900 px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition">View our steel sample</Link>
            <Link to="/samples/steel-takeoff" className="bg-yellow-500 text-gray-900 px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition">Steel detailed takeoff sample</Link>
            <Link to="/samples/steel-detailing-1" className="bg-yellow-500 text-gray-900 px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition">Steel detailing 1 sample</Link>
            <Link to="/samples/steel-detailing-2" className="bg-yellow-500 text-gray-900 px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition">Steel detailing 2 sample</Link>
          </div>
        </div>
      </section>

      {/* Steel Estimating Services */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Our Steel Estimating Services Include
          </h2>
          <ul className="list-disc ml-6 text-gray-700 mb-4 grid grid-cols-1 md:grid-cols-2 gap-y-1">
            <li>Detailed and accurate steel takeoffs and estimates ranging from budget, the order of magnitude, design, and bid estimate.</li>
            <li>Precast estimation</li>
            <li>Cold-form steel estimation</li>
            <li>Steel frames takeoffs</li>
            <li>Rebar estimation</li>
            <li>Structural steel takeoffs</li>
            <li>Bar bending schedules</li>
            <li>Change order management</li>
            <li>Rebar project management</li>
            <li>CPM scheduling</li>
            <li>Conflict Resolution</li>
            <li>Consultancy on smartly filing bids</li>
          </ul>
          <p className="mb-4">
            Our estimates comply with the standards:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>AASHTO – American Association of State Highway and Transportation Officials</li>
            <li>ASTM – American Society for Testing and Materials</li>
            <li>CRSI – Concrete Reinforcing Steel Institute</li>
            <li>RSIO – Reinforcing Steel Institute of Ontario</li>
            <li>ACI – American Concrete Institute</li>
            <li>BS – British Standard</li>
          </ul>
          <div className="flex gap-3 mt-2">
            <Link
              to="/Contact"
              className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition"
            >
              Upload Plans
            </Link>
            <span className="text-gray-900 font-semibold">Call us at 347 480-1903</span>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Our Clients
          </h2>
          <ul className="list-disc ml-6 text-gray-700 mb-4 grid grid-cols-1 md:grid-cols-2 gap-y-1">
            <li>Steel Manufacturers</li>
            <li>Framing Contractors</li>
            <li>Piping & Duct Fabricators</li>
            <li>Sheet Metal Fabricators</li>
            <li>Rebar & Structural Steel Fabricators</li>
            <li>Rebar & structural Steel Erectors</li>
            <li>Installers</li>
            <li>Distributors</li>
          </ul>
        </div>
      </section>

      {/* Fabricators & Erectors */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            For Fabricators & Erectors
          </h2>
          <p className="mb-4">
            For fabrication, our estimates comprise all the material costs, labor costs, and equipment costs used for drilling, cutting, and welding of the fabricated steel items along with manhours. And for erections and installations, we provide the estimate that includes the mill base price for the fabrication of different steel components, charges for shipping to the site along with steel detailing, and man-hours.
          </p>
        </div>
      </section>

      {/* What We Quantify */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What We Quantify in Steel Takeoff Services
          </h2>
          <p className="mb-4">
            Our estimates comprise the detailed breakdown of metals and steel including materials, plates, connectors, accessories, and erection costs that help in planning, procurement, cost control, reduced storage space at the site, to ensure maximum productivity and cost savings for your projects.
          </p>
          <p className="mb-4">
            All line items are quantified and takeoff in an EXCEL sheet accompanied by marked-up plans and pdf format files. As per your requirements, your estimate can be categorized by unit price, lump sum, and cost-plus formats. We quantify the following types of materials:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700 mb-4">
            <div>Fasteners</div>
            <div>Fastenings</div>
            <div>Rebar</div>
            <div>Steel framing</div>
            <div>Metal joists</div>
            <div>Metal decking</div>
            <div>Stud framing</div>
            <div>Stick framing</div>
            <div>Dome structures</div>
            <div>Access ramps</div>
            <div>Stairs</div>
            <div>Load-bearing wall framing</div>
            <div>Lintels</div>
            <div>Ladders</div>
            <div>Railings</div>
            <div>Gratings</div>
            <div>Decking</div>
            <div>Canopy</div>
            <div>Bollards</div>
            <div>Treads and nosing</div>
            <div>Trench drains</div>
            <div>Castings</div>
            <div>Trusses</div>
            <div>Ironwork</div>
            <div>Floor steel</div>
            <div>Roof steel</div>
            <div>Column steel</div>
            <div>Copper flashing</div>
            <div>Fireproofing</div>
            <div>Gusset plates</div>
            <div>Base plates</div>
            <div>Steel Girders</div>
            <div>Steel Anchors</div>
            <div>Nosing strips</div>
            <div>Corner beads</div>
            <div>Ornamental ironwork</div>
          </div>
        </div>
      </section>

      {/* Scope of Projects */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Scope of Projects
          </h2>
          <p className="mb-4">
            With the capability to handle all types and sizes of projects, we provide structural steel estimating services and detailing services for the structures for the following scope of projects:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700 mb-4">
            <div>Public</div>
            <div>Residential</div>
            <div>Commercial</div>
            <div>Industrial</div>
            <div>Institutional</div>
            <div>Multiplexes</div>
            <div>High Rise Buildings</div>
            <div>Recreation Centers</div>
            <div>Power Plants</div>
            <div>Manufacturing Units</div>
            <div>Monuments</div>
            <div>Parking</div>
            <div>Water Treatment Plants</div>
            <div>Condominiums</div>
            <div>Sports Clubs</div>
            <div>Health Centers</div>
            <div>Bridges & Flyovers</div>
            <div>Dams</div>
            <div>Culverts</div>
            <div>Hotels</div>
            <div>Renovation</div>
            <div>Additions</div>
          </div>
        </div>
      </section>

      {/* Software We Use */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Software We Use
          </h2>
          <p className="mb-4">
            World estimating serves its clients with precise estimating services with the culmination of expert estimators and detailers proficient in the following Software:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700 mb-4">
            <div>Planswift</div>
            <div>ASA Rebar Estimating Software</div>
            <div>Soule Software</div>
            <div>RGS Rebar</div>
            <div>Tekla Structures</div>
            <div>AutoCAD</div>
            <div>Rebar CAD</div>
            <div>ASA Microstation</div>
          </div>
        </div>
      </section>

      {/* Rebar & Structural Steel Estimating Services */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Rebar & Structural Steel Estimating Services
          </h2>
          <p className="mb-4">
            With the ever-changing construction industry trends, the competition becomes intense and intense, only the precise estimates can mitigate the chances of overbidding and underbidding on your projects.
          </p>
          <p className="mb-4">
            You can count on us for your rebar or reinforcing steel takeoffs as we have successfully delivered highly accurate and comprehensive estimates to rebar contractors for materials, accessories, and erection costs. Our rebar estimators have the capability and software expertise to handle the project of any type and complexity including bridges, residential buildings, commercial buildings, industrial buildings, infrastructures, culverts, retaining walls, wing walls, etc.
          </p>
          <p className="mb-4">
            We make use of 3d model technology for steel estimating that depicts a clear understanding of the scope of work thus helping inaccurate cost analysis and feasibility. Our rebar estimating deliverables includes:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>Contract plans & numbers</li>
            <li>Take-off Quantities</li>
            <li>Rebar Weight</li>
            <li>Structural Activity Codes (SAC)</li>
            <li>Part Codes (Rebar, wire mesh and other accessories)</li>
            <li>Steel grade (e.g. ASTM A108)</li>
            <li>Structure wise or scope wise bid item number</li>
            <li>Appendix</li>
            <li>Locations</li>
            <li>Reference Sections</li>
          </ul>
        </div>
      </section>

      {/* Detailing Services */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Rebar & Structural Steel Detailing Services
          </h2>
          <p className="mb-4">
            Our rebar detailers specialize in the latest CAD technology like AutoCAD, Rebar CAD, ASA Microstation, and Tekla to prepare shop drawings that simplify the rebar arrangement for the erection of complex structures.
          </p>
          <p className="mb-4">
            Many structural engineers, rebar fabricators, erectors, and installers approach us for detailing services that help their workers during the placement of reinforcing steel and lead to faster completion of the building structure.
          </p>
          <p className="mb-4">
            Our team has practical knowledge of bar configurations to produce optimum bar bending or cutting schedule that helps reduce the wastage. With years of experience and attention to detail, we have reached a point where we can assure that you can refer to our thorough and easy to understand drawings for the visualization of actual structures.
          </p>
          <p className="mb-4">
            Outsource your detailing services to us for efficient, accurate, and easy to follow drawings within the fastest turnaround times. We offer CAD drafting and detailing based on ACI, CRSI, ASTM, AS and BS coding formats including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700 mb-4">
            <div>Structural BIM modeling</div>
            <div>Rebar Shop Drawings</div>
            <div>Rebar Placement Drawings</div>
            <div>Rebar Detailing</div>
            <div>Structural and Light Steel Detailing</div>
            <div>Steel Joist & Deck Detailing</div>
            <div>Bar Bending Schedules</div>
            <div>Precast Concrete Detailing</div>
            <div>Retaining Walls Detailing</div>
            <div>Foundation Detailing</div>
            <div>Shear Wall Detailing</div>
            <div>Concrete Stair Detailing</div>
            <div>Footings Detailing</div>
            <div>Grade Beam Detailing</div>
            <div>Precast Masonry Stone Detailing</div>
            <div>Connection Sketches</div>
            <div>Drawing Index</div>
            <div>Single part Fitting Drawings</div>
            <div>2D Drafting & 3D Structural Modeling</div>
            <div>Shop/Fabrication Drawings (column, beam, brace, stair, handrail, ladders, etc.)</div>
            <div>General Arrangement/ Erection Drawings for Connections</div>
            <div>Reinforcement drawings</div>
            <div>Precast detailing</div>
            <div>Reinforcement walls detailing</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-yellow-500 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Outsource Your Metals Estimating & Detailing Services</h2>
          <p className="mb-4">
            Outsource your metals estimating services and detailing services to our experienced and professional team for cost-effective, accurate and prompt solutions!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/Contact"
              className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Upload Plans
            </Link>
            <Link
              to="/Contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Our Simple Process</h2>
          <div className="text-left max-w-3xl mx-auto">
            <h3 className="font-semibold mb-2">1. Submit your Plans</h3>
            <p>
              <Link to="/Contact" className="text-blue-900 underline">
                Click here to upload your plans.
              </Link> We accept .PDF, .TIF, .TIFF, .DXF,. DWF, .DWG, .PLN, .JPG, JPEG, .CPC, .OSX, .DJVU, .CAL format and your plans can be Bid set, Schematic, Design Development, Construction document, or conceptual drawings.
            </p>
            <h3 className="font-semibold mb-2 mt-4">2. Get a Quote</h3>
            <p>
              Quotes will be based on invoice, delivery date and turnaround time. You can pay via Credit Card or Debit Card or PayPal.
            </p>
            <h3 className="font-semibold mb-2 mt-4">3. Receive Estimate</h3>
            <p>
              Estimates will be delivered to you in EXCEL sheets comprising all the material and labor pricing either in MasterFormat or your customized format
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">FAQs</h2>
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800">How do we ensure the accuracy of the steel estimating services?</h3>
            <p>
              Our field expert estimators specialized in Division 5 are adept in miscellaneous steel estimating and metal stud drywall estimating and are deployed to carry out the steel fabrication and structural steel erection takeoffs. The attention to detail and use of RSMeans helps in accurate and up to date pricing based on zip code.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800">How much time do we take to deliver your steel estimate?</h3>
            <p>
              Our estimators are hands-on with digital takeoff software so we deliver estimates within 24 to 48 hours.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800">How much World estimating charge for metals takeoffs?</h3>
            <p>
              We normally charge around $200 for steel and metals estimates and it can be less or more depending on the scope of the project. We strive to provide quality services and justify the charges we quote with our services.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800">What is the format of metals estimate deliverables?</h3>
            <p>
              We provide you estimates in EXCEL sheets along with marked-up plans to make it easy for you to understand and edit. All line items are organized by CSI MasterFormat or Uniformat or as per your demand.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800">Where do we serve?</h3>
            <p>
              World estimating has successfully provided integrated construction estimating and cost management services in North American, Caribbean, and Australian regions. In the US, we have a portfolio of working in the following markets:
              <br />
              Newyork, New Jersey, California, North Carolina, Washington, Massachusetts, South Carolina, Tennessee, Illinois, Georgia, Arizona, Michigan, Missouri, Kentucky, Indiana, Louisiana, Alabama, Maryland, Colorado, Minnesota, Connecticut, Pennsylvania, Oklahoma, Oregon, Texas, Virginia, Florida, Montana, Ohio.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-yellow-500 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-4">
            What are you waiting for? If you are planning to hire a construction project estimator, then World Estimating is the right option for you to choose!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/Contact"
              className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Your Estimate
            </Link>
            <Link
              to="/Contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MetalsEstimating;