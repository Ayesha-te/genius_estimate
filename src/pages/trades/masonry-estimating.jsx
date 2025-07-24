import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ToyBrick as Brick, Award, Building } from 'lucide-react';

const MasonryEstimating = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Brick className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            MASONRY ESTIMATING SERVICES
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            If you are searching for the best masonry estimating services, World Estimating is at your service. With years of diversified experience in the estimation industry, we have excelled in delivering timely and most accurate estimates in the North American, Australian, and Caribbean regions.
          </p>
          <p className="text-md text-red-100 max-w-3xl mx-auto mt-4">
            Our expert masonry cost estimator, having practical knowledge of masonry works, quantify each and every detail in division 4, masonry trade including all types and configurations of bricks, CMU walls, clay and glass masonry, mortar and grout, brick veneer, bond beams, lintels, facing bricks, insulation, flashing, masonry reinforcement, masonry restoration, transportation, labor costs, and man-hours involved.
          </p>
          <p className="text-md text-red-100 max-w-3xl mx-auto mt-4">
            Our team of construction estimators ensures quality and accuracy with the use of the right software i.e. AccuBid, Planswift, and Bluebeam, and follows the policies and guidelines of the certified American estimators organization like American Association of Cost Engineers (AACE) and the Australian Institute of Quantity Surveyors (AIQS).
          </p>
          <p className="text-md text-red-100 max-w-3xl mx-auto mt-4">
            Apart from masonry takeoff services, we also offer masonry brick wall 3D designing services.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center">
            <Link
              to="/contact"
              className="bg-yellow-500 text-red-900 px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition"
            >
              Contact Us Today And Get 30% Off On Your First Masonry Estimate!
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
            THE RANGE OF MASONRY ESTIMATING SERVICES
          </h2>
          <p className="mb-4">
            With practical knowledge and years of experience in the AEC industry, we have aced in preparing timely and accurate estimates for masonry works to the respective clients i.e. general contractors, masonry contractors, masonry repair contractors, vendors, masons, developers, architects, designers, home builders.
          </p>
          <p className="mb-4">
            Our services are designed relative to the specific needs of our clients. Our deliverables generally include:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-4 grid grid-cols-1 md:grid-cols-2 gap-y-1">
            <li>EXCEL spreadsheet</li>
            <li>3D wall renderings with many views</li>
            <li>Labor and material rates</li>
            <li>Man Hours</li>
            <li>Color-coded plans</li>
            <li>Detailed summary comprising material lay rate and unit costs, labor rates, crew size, equipment, overhead, profit percentage, etc.</li>
            <li>Review of addendums</li>
            <li>Masonry Quantity Takeoffs</li>
            <li>Design Estimates</li>
            <li>Budget Estimates</li>
            <li>Bid Estimates</li>
            <li>Bid Submittal Preparation</li>
            <li>Proposal Preparation & Pricing</li>
            <li>Expert Witness</li>
            <li>Masonry Restoration Estimates</li>
            <li>Change Order Estimates</li>
            <li>Masonry Consulting</li>
            <li>Masonry Contractor Marketing</li>
            <li>Project Lead Generation</li>
            <li>Value Engineering</li>
            <li>Masonry Brick Wall 3D Designing Services</li>
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

      {/* Masonry Takeoff Services */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            WHAT DO WE TAKEOFF IN THE DIVISION 4 MASONRY TRADE?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 mb-4">
            <div>
              <ul className="list-disc ml-6">
                <li>CMU Masonry</li>
                <li>Glass unit masonry</li>
                <li>Clay unit masonry</li>
                <li>Architectural & glazed masonry</li>
                <li>Stonemasonry walls</li>
                <li>Granite</li>
                <li>Limestone</li>
                <li>Marble</li>
                <li>Sandstone</li>
                <li>Soapstone</li>
                <li>Slate</li>
                <li>Cast stone</li>
                <li>Mortar and grout</li>
                <li>Masonry Flashing</li>
                <li>Masonry Anchorage</li>
                <li>Masonry Insulation</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc ml-6">
                <li>Chimney brick</li>
                <li>Brick tuckpointing</li>
                <li>Brick wall tiles</li>
                <li>Brick Veneer</li>
                <li>Stucco work</li>
                <li>Terra Cotta Masonry</li>
                <li>Masonry reinforcement</li>
                <li>Scaffolding</li>
                <li>Anchor bolts, sleeves, brackets, brick ties</li>
                <li>Masonry insulation, flashing, weep holes</li>
                <li>Restoration & cleaning</li>
                <li>Contingency funds (unforeseen costs, inflation)</li>
              </ul>
            </div>
          </div>
          <Link
            to="/samples/flooring"
            className="bg-yellow-500 text-gray-900 px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition"
          >
            View Our Flooring Estimate Sample
          </Link>
        </div>
      </section>

      {/* Estimation Process */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            OUR ESTIMATION PROCESS
          </h2>
          <p className="mb-4">
            For the preparation of masonry estimate, drawing plans and specifications provided by the client are thoroughly reviewed with respect to the plan, elevation, and section views to define the scope of work.
          </p>
          <p className="mb-4">
            Masonry takeoff software that we use for measuring the quantities by point and click method includes Planswift, Bluebeam, etc, and the quantities are imported to EXCEL spreadsheets organized by MasterFormat. We follow CSI codes for items mentioned in the drawings.
          </p>
          <p className="mb-4">
            Our masonry estimating spreadsheet comprises of the breakdown of the following quantities:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>All masonry units used for the construction of the foundation wall</li>
            <li>Deductions for openings (doors, windows, ventilation)</li>
            <li>Facing bricks, masonry veneer, stone veneer, brick veneer as required</li>
            <li>Masonry units in facings, backings, walls, partitions, furring, fire protection</li>
            <li>Mortar required: pre-bagged or site batching, proportions, site conditions, type (masonry cement mortar, pre-blended, portland cement lime)</li>
            <li>Grout required: depends on concrete block density, wastages covered</li>
            <li>Masonry reinforcement</li>
            <li>Scaffolding</li>
            <li>Miscellaneous items: anchor bolts, sleeves, brackets, brick ties</li>
            <li>Insulation, flashing, weep holes as required</li>
            <li>Material, equipment, and labor costs (RSMeans, zip code based pricing)</li>
            <li>Man-hours and labor costs for tasks, transportation, taxes, permits, restoration & cleaning as required</li>
            <li>Contingency funds (unforeseen costs, inflation)</li>
            <li>Final audit by senior estimator to ensure deliverable quality</li>
          </ul>
        </div>
      </section>

      {/* Portfolio & Projects */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            OUR PORTFOLIO IN MASONRY TAKEOFFS
          </h2>
          <p className="mb-4">
            We have served many contractors across the globe by providing highly precise and comprehensive estimates for home facades, flooring, chimneys, fireplaces, combustion chamber, patios, driveways, sidewalks, walls, and columns, etc. for the following projects:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-4 grid grid-cols-1 md:grid-cols-2 gap-y-1">
            <li>Public</li>
            <li>Commercial</li>
            <li>Residential</li>
            <li>Industrial</li>
            <li>Institutional</li>
            <li>Educational</li>
            <li>Landscaping</li>
            <li>Restoration/Repair</li>
          </ul>
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

      {/* Why Outsourcing Masonry Estimate */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            WHY OUTSOURCING YOUR MASONRY ESTIMATE?
          </h2>
          <p className="mb-4">
            Today, the construction industry is highly competing and you are bidding on small profit margins, only precise and detailed estimates can give you an edge over your competition.
          </p>
          <p className="mb-4">
            Accuracy is the main challenge in preparing a masonry estimate on your own, making it complicated and time-consuming. For the accurate masonry works estimate, detailed knowledge of masonry units, mortar, grout, reinforcements, man-hours, labor costs, transportation costs, and various other quantities and proficiency in software and tools is necessary. Buying expensive software and hiring a full-time estimator takes a lot out of your budget in terms of monthly salary, bonuses, benefits, etc.
          </p>
          <p className="mb-4">
            Therefore outsourcing your estimates to a professional estimating company like World Estimating benefits you in the following way:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>You save time that was earlier consumed in preparing estimates and utilize it in developing strategies for your business growth.</li>
            <li>It gives you the confidence of highly accurate and detailed estimates prepared by expert estimators.</li>
            <li>It increases your bid volume. You tend to bid more and win more.</li>
            <li>Your estimating efficiency improves which increases your profit margins.</li>
            <li>You save on the expenses of buying software and hiring estimating staff.</li>
          </ul>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            CHOOSING US IS THE RIGHT DECISION
          </h2>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>Highly accurate and detailed estimates along with marked-up plans.</li>
            <li>Quick turnaround times of 24 to 48 hours.</li>
            <li>Cost-effective estimates</li>
            <li>The bid-hit ratio of our estimates is more than 92%.</li>
            <li>The monthly takeoff package saves 60% expense of an inhouse estimator.</li>
            <li>Consultation on bid filing and handling bidding network profile of contractors.</li>
            <li>Estimators certified with credible accreditations AACE, AIQS.</li>
            <li>24/7 customer support.</li>
          </ul>
        </div>
      </section>

      {/* Simple Process */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Just follow the simple process:</h2>
          <p className="mb-4">
            We are eager to serve you in your next masonry takeoff!
          </p>
          <div className="text-left max-w-3xl mx-auto">
            <h3 className="font-semibold mb-2">Submit your drawings:</h3>
            <p>
              <Link to="/get-estimate" className="text-blue-900 underline">
                Click here to send us plans and drawings.
              </Link> After reviewing and defining the scope of work, we will send you a quote in the next five minutes.
            </p>
            <h3 className="font-semibold mb-2 mt-4">Get a Quote:</h3>
            <p>
              You will get a quote based on invoice, turnaround time, and delivery date. You can pay via Credit card or Debit card or PayPal. And we will start preparing your estimate.
            </p>
            <h3 className="font-semibold mb-2 mt-4">Get an estimate:</h3>
            <p>
              You will receive your estimate in EXCEL sheets either in MasterFormat or in your customized format.
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

      {/* Recent Projects */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            OUR RECENT PROJECTS IN MASONRY TRADE
          </h2>
          <p className="mb-4 font-bold">Our Portfolio In Masonry Trade</p>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>New Construction Of Atlantic Avenue Shell Building In Raleigh, North Carolina – Preparation of conceptual estimate.</li>
            <li>Demolition And Renovations Of Morgan Park High School In Chicago, Illinois – Preparation of bid estimate for a masonry contractor</li>
            <li>Additions And Renovations For Georgia State University Library North Atlanta, Georgia – Preparation of masonry takeoff sheets including man-hours and markup plans for the subcontractor.</li>
            <li>Renovations For JFK Recreation Center In Newark, New Jersey – Preparation of bid estimate.</li>
            <li>Demolition And New Construction Of Sgt Joseph Delancy Park In Miami, Florida – Preparation of bid estimate.</li>
            <li>Renovations Of Philadelphia Convention Center, Pennsylvania – Preparation of bid estimate.</li>
            <li>Remodeling Of Los Angeles Pharmacy, California – Preparation of budget estimate.</li>
          </ul>
          <p className="mt-4 text-gray-700">
            At World Estimating, we provide construction takeoff services in North American, African, Australian, and Caribbean regions. In the US, we serve in the following markets:
          </p>
          <p className="text-gray-700 text-sm">
            New York, Illinois, Massachusetts, South Carolina, North Carolina, Michigan, Arizona, Missouri, Indiana, Louisiana, MinnesotaIdaho, Pennsylvania, Alabama, California, Arkansas, Connecticut, Oklahoma, Virginia, Ohio, Oregon, Wisconsin, Wyoming, Delaware, Mississippi, Nevada, Utah, New Hampshire, Texas, New Jersey, Florida, Tennessee, Hawaii, Minnesota, Colorado, Washington, Kentucky, Maryland, Alaska, Nebraska, Georgia, Vermont, Montana, Iowa.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MasonryEstimating;