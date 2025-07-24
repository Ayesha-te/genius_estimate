import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Wind, Award, Building } from 'lucide-react';

const MEPHVAC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Wind className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            MEP ESTIMATING SERVICES
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Contractors are always looking for MEP estimating services. World Estimating provides affordable, accurate and cost-effective cost estimates in the least turnaround time 24-48 Hrs. Our takeoffs always assist general contractors in winning bids. We are offering construction cost estimating services and material takeoff services for more than 10 years. Our team of dedicated cost estimators are excelled in mechanical estimates which is basically a superset of HVAC services.
          </p>
          <p className="text-md text-red-100 max-w-3xl mx-auto mt-4">
            We excel in the most reliable estimating services and deliver accurate construction takeoff services to contractors which includes a complete range of mechanical, electrical and plumbing estimating services. We do detailed line estimates in every trade. In MEP estimates we cover everything including fire stopping, fireproofing, moisture protection, sprinklers, spray insulation, pipe insulation, heating, HVAC, Sheet Metal, Ductwork, etc.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center">
            <Link
              to="/contact"
              className="bg-yellow-500 text-red-900 px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition"
            >
              Contact Us Today And Get 30% Off On Your First MEP Estimate!
            </Link>
            <Link
              to="/get-estimate"
              className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition"
            >
              Upload Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Range of Services */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            RANGE OF MEP ESTIMATING SERVICES
          </h2>
          <ul className="list-disc ml-6 text-gray-700 mb-4 grid grid-cols-1 md:grid-cols-2 gap-y-1">
            <li>Material takeoffs</li>
            <li>Bid estimates & bidding assistance</li>
            <li>Preliminary estimates & feasibility studies</li>
            <li>Budget & design estimates</li>
            <li>Change order estimates</li>
            <li>Litigation assistance</li>
            <li>Project Cost Management</li>
            <li>Project lead generation</li>
            <li>CPM scheduling</li>
            <li>MEP drafting</li>
          </ul>
          <div className="flex gap-3 mt-2">
            <Link
              to="/get-estimate"
              className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition"
            >
              Upload Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Our Deliverables */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Our Deliverables
          </h2>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>Digital takeoff sheets</li>
            <li>Material quantities & pricing</li>
            <li>Labor costs & labor hours</li>
            <li>Marked up drawing plans</li>
            <li>Takeoff summary containing, labor hours, total material and labor costs, rentals, equipment, taxes, overheads, profit percentage, etc.</li>
            <li>Complete bid review with inclusion & exclusion sheet</li>
          </ul>
        </div>
      </section>

      {/* What Components Do We Estimate */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Components Do We Estimate In MEP Estimating Services?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700 mb-4">
            <div>Sheet Metal</div>
            <div>Dehumidifier</div>
            <div>Air-handling units</div>
            <div>Chillers</div>
            <div>Boilers</div>
            <div>Furnaces</div>
            <div>Heat Pumps</div>
            <div>Duct</div>
            <div>Signage</div>
            <div>Lighting</div>
            <div>Low Voltage</div>
            <div>Electrical</div>
            <div>Plumbing</div>
            <div>Sprinklers</div>
            <div>Fire Proofing</div>
            <div>Fire Protection</div>
            <div>Fire Suppression</div>
            <div>Moisture Protection</div>
            <div>Pipe Insulation</div>
            <div>Spray insulation</div>
            <div>Fire stopping</div>
            <div>Air Filters</div>
          </div>
        </div>
      </section>

      {/* Mechanical Estimating Services */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            MECHANICAL ESTIMATING SERVICES
          </h2>
          <p className="mb-4">
            With a specialized team of MEP estimators, we provide a complete range of mechanical estimating services for a wide portfolio of projects including fabrication, design and installation of HVAC systems, refrigeration systems, insulations, plumbing and piping systems. For the mechanical takeoffs, we quantify all the mechanical components including Air handling units, Air conditioning units, Air devices, Rooftop units, Exhaust fans, Pumps, Louvers, Ducts, Pipes, Pipe fittings, Duct fittings, Duct insulation, Duct supports, Thermostat, Boilers, Heat pumps, Humidifiers, Air filters, Water heaters, Chillers, Dampers, Hangers, Dust smoke detector.
          </p>
          <Link
            to="/services/mechanical-estimating"
            className="text-blue-900 underline"
          >
            Click here to learn more about our mechanical estimating services.
          </Link>
        </div>
      </section>

      {/* Electrical Estimating Services */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ELECTRICAL ESTIMATING SERVICES
          </h2>
          <p className="mb-4">
            We are experts in providing estimating solutions for all types of electric systems for residential, commercial and industrial projects. Our services include electrical material takeoffs, bid estimates, bid preparation & submission, electrical cost per square foot, and electrical CAD drafting. We not only provide the most precise estimates but also assist in preparing complete bid and setting right mark up plans. We quantify all the electrical components including lighting fixtures, lighting controls, gear, receptacles, panels, electric fittings, hangers, supports, Liquidtite, Grounding, Conductors, Fuses, Panels & Circuit Breakers, Feeders, Plates, Switches, Wiring, Switches, Switchboards, Branch devices, Cable Tray, Motor Control, Low Voltage and other devices.
          </p>
          <Link
            to="/services/electrical-estimating"
            className="text-blue-900 underline"
          >
            Click here to know more about our electrical estimating services.
          </Link>
        </div>
      </section>

      {/* Plumbing Estimating Services */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            PLUMBING ESTIMATING SERVICES
          </h2>
          <p className="mb-4">
            Whether it is an estimate for new installations, additions or repair of plumbing systems, we do it all. From residential to commercial and industrial projects. Our estimators ensure to accurately include all the details and descriptions in our estimates that let you effectively bid on projects, set good profit margins and procure material from vendors. We quantify all the plumbing components including water pipes, vent pipes, gas pipes, sanitary pipes, underground pipes, pipe fittings, pipe concealments, insulations, valves, hangers supports, plumbing fixtures; toilets, sinks, basins, showers, bathtubs, strainers, faucets, bidets, water coolers, drinking fountains and plumbing equipment; drains, pumps, water heaters, boilers, valves, oil separators, fixture carriers, flashings, etc.
          </p>
          <Link
            to="/services/plumbing-estimating"
            className="text-blue-900 underline"
          >
            Click here to learn more about our plumbing estimating services.
          </Link>
        </div>
      </section>

      {/* Insulation Estimating Services */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            INSULATION ESTIMATING SERVICES
          </h2>
          <p className="mb-4">
            We provide insulation estimating services for all mechanical works including HVAC piping, HVAC duct, industrial piping, industrial duct, plumbing, equipment and fire-stopping. Our services comprise all types and sizes of projects including commercial as well as industrial projects. We quantify all types of insulation including pipe insulation, ductwork insulation, cold storage insulation, removable insulation systems, equipment insulation systems, tank insulation systems, plumbing pipe, cooling towers, exhaust systems, process pipe, refrigeration pipe, petrochemical pipe insulation, fire stopping, fireproofing, weatherproofing, waterproofing.
          </p>
          <Link
            to="/services/insulation-estimating"
            className="text-blue-900 underline"
          >
            Click here to learn more about our insulation estimating services.
          </Link>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-yellow-500 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Offer</h2>
          <p className="mb-4">
            If you are from Texas then Get 30% off on your first estimate!
            <br />
            Just upload plans, We will review and send a quote in the next 5 minutes.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/get-estimate"
              className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Upload Plans
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              CALL US
            </Link>
          </div>
        </div>
      </section>

      {/* MEP Drafting Services */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            MEP DRAFTING SERVICES
          </h2>
          <p className="mb-4">
            Other than MEP takeoff services, we also render our services for MEP drafting services that include HVAC pipe fabrication drawings, HVAC duct fabrication shop drawings, Piping & process piping drawings, Plumbing shop drawings, Firestopping shop drawings, Sprinkler shop drawings. The CAD detailers and designers in our team are well versed with 3D drafting software like Revit MEP, AutoCAD and BIM systems.
          </p>
        </div>
      </section>

      {/* Why Choose World Estimating */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Are You Wasting Your Money On MEP Estimating Services In Market?
          </h2>
          <p className="mb-4">
            World estimating is one of the leading construction cost estimation companies that believe in accurate, affordable, and reliable service. As our slogan for contractors is “Win More, bid More“, we offer monthly takeoff packages to our clients that help you save money. Our takeoff estimating service will help you in quantifying accurate material for your construction plans. We use online resources for pricing and provide the most accurate estimates using the latest software like Bluebeam, Planswift, Trimble, FastPIPE, FastDUCT, FastWRAP, etc which ultimately provides accurate and precise construction cost estimates. Please visit our profile on The Blue Book.
          </p>
        </div>
      </section>

      {/* Outsource MEP Estimating Services To Us */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Outsource MEP Estimating Services To Us!
          </h2>
          <p className="mb-4">
            Outsourcing the MEP estimating and takeoff services is the best strategy for contractors who are always busy in their routine. Even if they take responsibility for estimates, they can not efficiently prepare estimates and effectively handle the bidding process. Sometimes, the contractors are facing issues with time lapse in filing bids and other times they run short of time by which they ultimately earn less work and get most of their bids unattended. Doing this, they miss on work opportunities and ultimately suffer a lot in terms of less revenue.
          </p>
          <p className="mb-4">
            Among all the MEP estimating companies, World estimating is the best choice for contractors to outsource their construction cost estimates and material takeoff services. Our monthly estimating package for contractors for a fixed amount per month get them with accurate estimates in the least turnaround times and reduced overhead costs.
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>Affordable Estimates - Save up to 60% expense in MEP takeoff services</li>
            <li>Quick Turnarounds - Residential plans in 24-48 hours, commercial varies by scope</li>
            <li>Accurate Construction Cost Database - RSMeans and our developed database for up to date and zip code based costing</li>
          </ul>
        </div>
      </section>

      {/* Estimation Process */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            OUR ESTIMATION PROCESS
          </h2>
          <p className="mb-4">
            At World Estimating, our estimation process starts with the analysis of drawing plans by the MEP specialist who has past massive experience in dealing with Mechanical (HVAC), ductwork, air-conditioning units, refrigeration units, Electrical, low voltage equipment and Plumbing takeoffs. The details, schedules and specifications along with minor general notes are taken into consideration.
          </p>
          <p className="mb-4">
            Then each drawing plan is uploaded in our certified software like Bluebeam, Plan swift, FastWRAP, FastDUCT, FastPIPE, Trimble, etc. Our qualified and certified estimator takeoff the quantities from the plans and every consideration and proper standards and codes are met then it is forwarded for review by a senior estimator who ensures a cold eyes review from marked-up plans and takeoffs sheet in EXCEL.
          </p>
          <p className="mb-4">
            Each Line item is quantified mentioned and its proper description according to the purpose is maintained and provided. Job winning strategy in bid estimates and for procurement and supply needed estimates, details, and description is established. Residential, commercial, and industrial estimates are delivered to clients after peer-reviewing of the estimation department.
          </p>
        </div>
      </section>

      {/* Bid More Win More CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="font-bold text-red-600 mb-2">Bid more, Win more!</div>
          <p className="mb-3 text-gray-700">
            Get our MEP Estimating Services to step up your winning game!
          </p>
          <div className="border-t pt-4 mt-4">
            <p className="font-semibold">Submit your plans/ drawings:</p>
            <p>
              <Link to="/get-estimate" className="text-blue-900 underline">Click here to send us plans and specifications.</Link> We will analyze and send you a quote in the next 5 minutes.
            </p>
            <p className="font-semibold mt-2">Get a Quote:</p>
            <p>
              you will receive a quote including invoice, turnaround time, and delivery date. Then, you can pay via credit card or debit card or PayPal.
            </p>
            <p className="font-semibold mt-2">Receive estimate:</p>
            <p>
              you will receive a quote including invoice, turnaround time, and delivery date. Then, you can pay via credit card or debit card or PayPal.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">FREQUENTLY ASKED QUESTIONS</h2>
        </div>
      </section>

      {/* Service Regions */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Our Service Regions
          </h2>
          <p className="mb-4 text-gray-700">
            World Estimating has been providing construction takeoff services for more than 15 years in North America, Africa, Australia and the Caribbean. In the US, we take pride in serving all the states and follow their rules and regulations:
          </p>
          <p className="text-gray-700 text-sm">
            Florida, New Jersey, New York, Oklahoma, Georgia, Massachusetts, South Carolina, Illinois, Texas, Arizona, Indiana, North Carolina, Wyoming, Kentucky, Louisiana, Pennsylvania, Maryland, Alabama, Missouri, Washington, Connecticut, Minnesota, Colorado, Virginia, Hawaii, Michigan, Ohio, Alaska, Oregon, Tennessee, Wisconsin, Vermont, Montana, Arkansas, California, Delaware, Idaho, Iowa, Minnesota, Nebraska, New Hampshire, Nevada, Utah, Mississippi.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MEPHVAC;