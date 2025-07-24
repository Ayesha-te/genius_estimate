import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, MapPin, Award, Building, Shovel, TrendingUp } from 'lucide-react';

const SiteworkEstimating = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sitework Estimating Services
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Site work contractors, landscaping contractors, land developers, general contractors, and site contractors rely on our site work estimating services for accurate and detailed site work estimate, cut and fill takeoff, and 3D maps delivered to them within 24 to 48 hours. With accurate figures, they win more bids and cut their overhead costs.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <p className="mb-4">
            At World Estimating, a large number of clients are excavation contractors whose busy and hectic schedules at the site compel them to outsource their excavation estimating services to a reliable and cost-effective estimation company. The estimators employed by such corporations are themselves most of the time busy filing bidding proposals and have less time to takeoff plans and calculate markup of their jobs. We have specialized site work estimators for civil works dedicated to division 2 estimating services who have the past experience of working with sitework contractors and are well versed with the public, commercial, and residential scope of projects. Please visit our profile on The Blue Book for site work estimating services.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Our deliverables for site work estimating services include:</h2>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>Cut & Fill Takeoff list with takeoff summary</li>
            <li>Earth Volumes, quantities, and section</li>
            <li>Surface Grading</li>
            <li>Cut & fill visual 3D reports</li>
            <li>3D mapping reports and reviewed bid documents</li>
            <li>Landscaping estimate with soil volumes (Hardscape, Softscape & Irrigation)</li>
          </ul>
          <div className="flex flex-wrap gap-3 mb-4">
            <Link to="/samples/sitework-1" className="bg-yellow-500 text-gray-900 px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition">VIEW OUR SITEWORK 1 SAMPLE</Link>
            <Link to="/samples/sitework-2" className="bg-yellow-500 text-gray-900 px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition">VIEW OUR SITEWORK 2 SAMPLE</Link>
            <Link to="/samples/landscaping" className="bg-yellow-500 text-gray-900 px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition">VIEW OUR LANDSCAPING SAMPLE</Link>
          </div>
        </div>
      </section>

      {/* What We Can Produce */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-3">We can produce this for you:</h2>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>Estimate/Takeoff Cut/Fill quantities for your Site development and construction jobs.</li>
            <li>3D graphical representation of Cut & fill Areas and Elevations with cross-sections</li>
            <li>Mass Haul Diagrams to lessen and mitigate the earth and soil movement.</li>
            <li>Convert your topological data into Civil 3D</li>
            <li>Provide 3D Surface From Surveying And GPS Data Points in our site work estimating services</li>
            <li>Excavation Estimating Services</li>
            <li>Existing Surface</li>
            <li>Terrain Model with Contours/Depth Contours</li>
            <li>Cross-sections with longitudinal profiles</li>
            <li>Volume and Area for Land Development, Cut Fill and Earthworks</li>
            <li>Primordial Method and end area method.</li>
          </ul>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Our site work estimating services Portfolio</h2>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>Residential Site work</li>
            <li>Commercial Site work</li>
            <li>Industrial Site work</li>
          </ul>
        </div>
      </section>

      {/* Our Range of Services */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-3">OUR RANGE OF SITEWORK ESTIMATING SERVICES</h2>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>Quantity takeoffs & Cost Estimates: Quick, efficient and accurate Preliminary Estimates, Comparison Estimates, Conceptual Estimates, Budget Estimates, and Bid Estimates</li>
            <li>Sitework Feasibility Analysis: Earthwork analysis, cut/fill volumes and feasibility cost estimates</li>
            <li>Land Development Consultation: Assistance on budgeting and controlling costs in excavation estimating services</li>
            <li>Bidding Assistance: Bid comparisons, reviews, and consultation on smartly filing bids</li>
            <li>Design phase Estimating Assistance</li>
            <li>Legal Claims Assistance</li>
            <li>Change Order Management</li>
            <li>Value Engineering</li>
          </ul>
          <p className="mb-4">
            If you are interested in our sitework estimating services, contact us today so we can get started on your project!
          </p>
          <div className="flex gap-3 mt-2">
            <Link
              to="/get-estimate"
              className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition"
            >
              Upload Plans
            </Link>
            <span className="text-gray-900 font-semibold">Call us at 347 480-1903</span>
          </div>
        </div>
      </section>

      {/* Scope of Work */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-3">SCOPE OF WORK IN OUR SITE WORK ESTIMATING SERVICES</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700 mb-4">
            <div>Erosion Control</div>
            <div>Clearing & Demolition</div>
            <div>Earthwork</div>
            <div>Grading</div>
            <div>Drainage</div>
            <div>Utility Spoils</div>
            <div>Storm Sewer</div>
            <div>Water distribution</div>
            <div>Roadways</div>
            <div>Sidewalk</div>
            <div>Driveways</div>
            <div>Pavements</div>
            <div>Site Furnishing</div>
            <div>Concrete Flatwork</div>
            <div>Retaining Walls</div>
            <div>Climbing Walls</div>
            <div>Fences & Gates</div>
            <div>Landscaping</div>
            <div>Irrigation</div>
            <div>Fountains</div>
            <div>Patio</div>
            <div>Gabions</div>
            <div>Docks</div>
          </div>
        </div>
      </section>

      {/* Portfolio of Projects */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-3">OUR SITE WORK ESTIMATING SERVICES PORTFOLIO OF PROJECTS</h2>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>Public Projects</li>
            <li>Single-family & Multi-family Residential Sitework</li>
            <li>Commercial buildings Sitework</li>
            <li>industrial Sitework</li>
            <li>Water Treatment sites</li>
            <li>Planned Communities</li>
            <li>Parks and Tracks</li>
            <li>Schools</li>
            <li>Golf Courses</li>
            <li>Sports complexes</li>
            <li>Swimming Pools</li>
            <li>Highways</li>
            <li>Skateboards & Playgrounds</li>
            <li>Bicycle Racks</li>
            <li>Underground Structures</li>
          </ul>
        </div>
      </section>

      {/* Earthwork Estimating Services */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-3">EARTHWORK ESTIMATING SERVICES</h2>
          <p className="mb-4">
            Excavators and site engineers along with specialized contractors need earthwork estimating services to get an idea about the total cost to make up the land before starting construction. We provide quick and reliable earthwork volumes and materials takeoffs for bid preparation to help them meet their critical deadlines. Our team of site work estimating services ensures that the quantity takeoffs account for every high and low elevation point, ridge, swale, breakline, hook, top/bottom of the wall, and pad elevation. Our earthwork estimate comprises of:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>Site excavation report</li>
            <li>Cut/Fill Quantities</li>
            <li>Export or Import Quantities</li>
            <li>Volume Reports</li>
            <li>Top Soil Spreads</li>
          </ul>
        </div>
      </section>

      {/* Earthwork Volumes */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-3">EARTHWORK VOLUMES</h2>
          <p className="mb-4">
            An accurate estimate for earthwork volumes helps the contractor in bidding for the project, setting profit margins, budgeting, and managing costs. By the careful comparison of current and expected conditions, our team accurately estimates earthwork volumes using the latest software to determine the exact cut and fill quantities to attain the required topography. We also provide visual reports showing cut and fill areas.
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>Clearing</li>
            <li>Demolition</li>
            <li>Soil Strata & Groundwater Elevations</li>
            <li>Excavation and Backfill</li>
            <li>Pre-Load</li>
            <li>Structural Fill</li>
            <li>Phasing & Staging</li>
            <li>Sub-Grades</li>
            <li>Embankment</li>
            <li>Distribution Analysis</li>
          </ul>
        </div>
      </section>

      {/* Bid Preparation */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-3">BID PREPARATION</h2>
          <p className="mb-4">
            Our estimators help site contractors with the timely preparation of bids by providing a detailed cost estimate for your sitework scope of work.
          </p>
          <p className="mb-4">
            Bid preparation starts with a thorough analysis of bid documents followed by the identification of the scope of work and digital takeoff.
          </p>
          <p className="mb-4">
            Pricing of each line item for material, labor, and equipment is done using RSMeans and our developed database based on location.
          </p>
          <p className="mb-4">
            We provide sitework bid estimates with marked-up plans that are comprehensive and easy to review and edit in the EXCEL spreadsheet format.
          </p>
          <p className="mb-4">
            Our detailed bidding proposals contain bid reviews, notes, clarifications, omissions, additions, and other related information to help you with your scope of work.
          </p>
        </div>
      </section>

      {/* Material Takeoff List */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-3">MATERIAL TAKEOFF LIST</h2>
          <p className="mb-4">
            We use the latest software i.e Civil 3D, cut & fill, Terramodel, AGTEK 4D, InSite, Planswift, AutoCad to digitally takeoff the material quantities which are delivered in EXCEL spreadsheets categorized with respect to MasterFormat or the client’s customized format.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700 mb-4">
            <div>Clearing & Site Preparation</div>
            <div>Soil Erosion & Sediment Control</div>
            <div>Asphalt Paving</div>
            <div>Earthwork</div>
            <div>Sanitary Sewer</div>
            <div>Storm Sewer</div>
            <div>Water Distribution</div>
            <div>Curbs and Pavement</div>
            <div>Fence and Gates</div>
            <div>Site Furnishings</div>
            <div>Retaining Walls</div>
            <div>Landscaping</div>
            <div>Trenching for Electric, Gas and Site Lighting</div>
            <div>Excavation and Backfill</div>
            <div>Parking Appurtenances</div>
            <div>Striping & Signs</div>
          </div>
        </div>
      </section>

      {/* Landscaping & Irrigation Estimating Services */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-3">LANDSCAPING & IRRIGATION ESTIMATING SERVICES</h2>
          <p className="mb-4">
            Our landscaping estimating services are designed to cater to the needs of landscaping professionals by providing them with a real-time cost analysis to set the profit margins and boost their business.
          </p>
          <p className="mb-4">
            We employ Planswift to perform on-screen landscape and irrigation takeoffs for material, labor, and equipment. The detailed material takeoff lists are easy to read and send to your local vendors for pricing.
          </p>
          <p className="mb-4">
            Golf Course construction is among the portfolio of our estimating Services along with landscaping grading work. Many Sports complex projects have been provided consultancy, cost control, and future projections regarding the scheduling of the project.
          </p>
          <p className="mb-4">
            The projected time limits and deadlines are always met when there is already scheduling work done to carry out the critical activities at first priority.
          </p>
          <p className="mb-4">
            Architects and construction developers reach out to us with their conceptual and preliminary designs and drawings for sitework initial estimate for lending, bid winning, and equipment rental purposes.
          </p>
          <p className="mb-4">
            Depending on the scope of work and the requirements set by the clients, we generally quantify the following items in our landscaping and irrigation takeoffs:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700 mb-4">
            <div>Soil</div>
            <div>Grass Seeds</div>
            <div>Pavers</div>
            <div>Sod</div>
            <div>Mulch</div>
            <div>Gravel</div>
            <div>Plants & Trees</div>
            <div>Irrigation Pipings</div>
            <div>Sprinkler System</div>
            <div>Fence</div>
            <div>Fertilization</div>
            <div>Trimming</div>
            <div>Aeration</div>
            <div>Thatching</div>
            <div>Spraying</div>
          </div>
        </div>
      </section>

      {/* Site Improvement Estimating Services */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-3">SITE IMPROVEMENT ESTIMATING SERVICES</h2>
          <p className="mb-4">
            The sitework improvements and exterior improvements contractors have to present accurate bid estimates to land on the jobs. Our construction cost consultants provide excavation estimating services and thorough consultancy in a specific trade that is fences, gates, retaining walls, fabricated bridges, sports surfacing, tennis courts, traffic signs and signals, and playground surfaces.
          </p>
          <p className="mb-4">
            As a matter of fact, irrigation, planters, vegetated roofing, edging, tree staking, and other site improvements are estimated and contractors use the figures in bidding proposals and ordering of materials, project budgeting, and checking the feasibility of the project.
          </p>
          <p className="mb-4">
            The mark up of the contractor is calculated against each line item and profit is accurately established.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700 mb-4">
            <div>Fences and Gates Hardware</div>
            <div>Fabricated Bridges</div>
            <div>Vegetated Roofing</div>
            <div>Edging</div>
            <div>Grates and Guards</div>
            <div>Roof Barriers</div>
            <div>Tree Staking</div>
            <div>Docks and Marine</div>
            <div>Turf and Grasses</div>
            <div>Gabions</div>
            <div>Retaining Walls</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-yellow-500 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Are you ready to get started with us!</h2>
          <div className="text-left max-w-3xl mx-auto">
            <h3 className="font-semibold mb-2">1- Upload your Plans</h3>
            <p>
              <Link to="/get-estimate" className="text-blue-900 underline">
                Click here to upload your plans.
              </Link> We accept PDF format and your plans can be Bid set, Schematic, Design Development, Construction document, or conceptual drawings.
            </p>
            <h3 className="font-semibold mb-2 mt-4">2- Get a Quote</h3>
            <p>
              Quotes will be based on invoice, delivery date, and turnaround time. You can pay via Credit Card or Debit Card or PayPal.
            </p>
            <h3 className="font-semibold mb-2 mt-4">3- Receive Estimate</h3>
            <p>
              Estimates will be delivered to you in EXCEL sheets comprising all the material and labor pricing with cut & fill 3D visual reports either in MasterFormat or your customized format.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 bg-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">World Estimating is a one-stop solution for all your estimation requirements through site work estimating services</h2>
          <p className="mb-4">
            Working with clients throughout North American, Caribbean, and Australian regions. In the US, we serve the following markets:
            <br />
            Newyork, Florida, North Carolina, Massachusetts, Oklahoma, Tennessee, Minnesota, Illinois, Texas, Georgia, Arizona, Michigan, Missouri, Colorado, Kentucky, Indiana, Louisiana, Alabama, Maryland, Connecticut, Pennsylvania, Washington, California, South Carolina, New Jersey, Oregon, Virginia.
          </p>
          <h2 className="text-2xl font-bold mb-4">What are you waiting for?</h2>
          <p className="mb-4">
            If you are planning to hire a construction project estimator, then World Estimating is the right option for you to choose!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/get-estimate"
              className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Contact Us GET 30% OFF
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SiteworkEstimating;