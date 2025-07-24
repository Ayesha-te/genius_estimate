import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Palette } from 'lucide-react';

const InteriorExteriorFinishes = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Palette className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            INTERIOR & EXTERIOR FINISHES ESTIMATING SERVICES
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Interior and exterior finishes estimations are very important for the construction of buildings. Painting, stucco, plaster, specialized coatings estimates are necessary for winning bids and quoting a price to the client for contractors. They normally demand for bid and material takeoffs for ordering and procuring material.
          </p>
          <p className="text-md text-red-100 max-w-3xl mx-auto mt-4">
            Accuracy matters a lot when contractors are held responsible for any shortcoming in the estimate, therefore experience, professionalism and ability along with ensured practices are maintained by the estimation company. Hence, relying on outsourcing the estimates and cutting down your in-house costs always save expenditure if and only if accuracy is established and promised.
          </p>
          <p className="text-md text-red-100 max-w-3xl mx-auto mt-4">
            Metallics, Patinas & chrome, interior & exterior finishes work always costs a lot and waste is always dumped when excess is ordered and expenses are credited to the contractor so to avoid wastage, accurate takeoff is required which is only possible when the contractor is provided with exact accurate estimate and pricing.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center">
            <Link
              to="/contact"
              className="bg-yellow-500 text-red-900 px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition"
            >
              Contact Us Today And Get 30% Off On Your First Cost Estimate!
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
            THE RANGE OF FINISHES ESTIMATING SERVICES
          </h2>
          <ul className="list-disc ml-6 text-gray-700 mb-4 grid grid-cols-1 md:grid-cols-2 gap-y-1">
            <li>Material Takeoffs</li>
            <li>Flooring Estimates</li>
            <li>Painting Estimates</li>
            <li>Ceiling Estimates</li>
            <li>Drywall Estimates</li>
            <li>Stucco Estimates</li>
            <li>Bid Estimate</li>
            <li>Bid Reviews</li>
            <li>Budget Estimate</li>
            <li>Change Order Estimate</li>
            <li>Project Lead Generation</li>
            <li>Subcontractor Marketing</li>
          </ul>
          <p className="mb-4">
            Outsource your finishes estimating services to us and submit more bids, improve accuracy, and increase your profit margins. Get 30% off on your first estimate!
          </p>
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

      {/* Flooring Estimating Services */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            FLOORING ESTIMATING SERVICES
          </h2>
          <p className="mb-4">
            At World Estimating, we strive to provide expert material takeoffs and cost estimates for flooring contractors, flooring installation companies, carpet mills, architects, designers, and manufacturers. Our highly accurate flooring estimating services are tailored to minimize waste keeping in mind all the patterns, inlays, and design elements.
          </p>
          <p className="mb-4">
            With the ability to handle the complex patterns and inlays, we have successfully delivered flooring estimates including access flooring, stair details, stair nosing, etc for multi use residential buildings, commercial buildings, apartments, hotels, restaurants, schools, hospitals, arenas, banks, libraries, stores, etc.
          </p>
          <p className="mb-4">
            Our expert flooring estimators are well versed with Planswift, Oncenter, Bluebeam, etc to perform the right material takeoff and reach the right figures. We also contribute to provide easy to follow seaming diagrams for flooring installers.
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>Digital flooring takeoff file</li>
            <li>Material spreadsheet</li>
            <li>Color-coded plans</li>
            <li>Seaming diagrams</li>
            <li>Takeoff summary including total square feet, seaming & welding linear feet, wall base, stair information, etc</li>
            <li>Review of bid documents and addendums</li>
          </ul>
          <p className="mb-4">
            We provide the flooring takeoffs along with wainscoting, wall base, wall tiles quantities, and quantify the following trades:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-4 grid grid-cols-1 md:grid-cols-2 gap-y-1">
            <li>Broadloom Carpet</li>
            <li>Resinous Flooring</li>
            <li>Linoleum</li>
            <li>Stair tread & nosing</li>
            <li>Sealed concrete</li>
            <li>Rubber base</li>
            <li>Terrazzo</li>
            <li>Laminate Flooring</li>
            <li>Leather Flooring</li>
            <li>Dance Flooring</li>
            <li>Fluid Applied Flooring</li>
            <li>Vinyl Composite flooring</li>
            <li>Rubber flooring</li>
            <li>Wood flooring</li>
            <li>Epoxy flooring</li>
            <li>Plank Flooring</li>
            <li>Athletic flooring system</li>
            <li>Ceramic Tile</li>
            <li>Mosaic Tile</li>
            <li>Carpet Tiles</li>
            <li>Resilient Tile</li>
            <li>Cork Flooring</li>
          </ul>
          <Link
            to="/samples/interior-exterior-finishes"
            className="bg-yellow-500 text-gray-900 px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition"
          >
            View Our Interior & Exterior Finishes Estimate Sample
          </Link>
        </div>
      </section>

      {/* Painting & Coating Estimating Services */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            PAINTING & COATING ESTIMATING SERVICES
          </h2>
          <p className="mb-4">
            Let us help you with the quick and accurate painting estimating services to improve your efficiency, increase bid hit ratio, and profit potential and save your time to handle your business growth. We have aced in providing painting estimates for residential, commercial, and industrial projects.
          </p>
          <p className="mb-4">
            With the use of the latest software technology and practical knowledge, we have empowered interior & exterior painting contractors with the exact figures to produce the quality bid estimates to land on more jobs, and also minimize rework and wastage.
          </p>
          <p className="mb-4">
            In our painting takeoffs, we properly specify the amount of interior painting finishes for walls & ceiling, door/window, spindles, baseboards & chair rails, patching, crown molding, etc, and the amount used for exterior painting for siding, overhang, soffit, doors/windows, dormer, gables, shutters, guttering, flashing, concrete blocks, etc.
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>Takeoff EXCEL spreadsheets</li>
            <li>Material & Labor costs per SF</li>
            <li>Color-coded plans</li>
            <li>Labor hours</li>
            <li>Bid summary including total cost, overheads, profit percentage, etc and review of inclusions and exclusions</li>
          </ul>
          <p className="mb-4">
            We offer a complete range of painting takeoffs including wall coverings & floor coatings and quantify the following painting and coating finishes:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-4 grid grid-cols-1 md:grid-cols-2 gap-y-1">
            <li>Graffiti-Resistant Coatings</li>
            <li>Fire-Retardant Coatings</li>
            <li>Elastomeric Coatings</li>
            <li>Special Coatings</li>
            <li>Concrete Coatings</li>
            <li>Stucco Coatings</li>
            <li>Masonry Coatings</li>
            <li>Elastomeric Coatings for Wall</li>
            <li>Mold Retardant Coatings</li>
          </ul>
        </div>
      </section>

      {/* Drywall Estimating Services */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            DRYWALL ESTIMATING SERVICES
          </h2>
          <p className="mb-4">
            Drywall and ceiling contractors are the regular clients that reach to us for their interior & exterior finishes of framing, taping, and gypsum boards. Our takeoffs are accurate and help our clients not only in quoting marked-up prices to general contractors but also to their suppliers. Mosaic, tile, acoustical consultants, and athletics floor courts have to work so much apart from winning jobs and implementing the work at the site.
          </p>
          <Link
            to="/services/drywall-estimating"
            className="text-blue-900 underline"
          >
            Click here to learn more about our drywall estimating services.
          </Link>
        </div>
      </section>

      {/* Ceiling Estimating Services */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            CEILING ESTIMATING SERVICES
          </h2>
          <ul className="list-disc ml-6 text-gray-700 mb-4 grid grid-cols-1 md:grid-cols-2 gap-y-1">
            <li>Acoustical Ceilings</li>
            <li>Ceiling Suspension Assemblies</li>
            <li>Specialty Ceilings</li>
            <li>Luminous Ceilings</li>
            <li>Suspended Decorative Grids</li>
            <li>Stretched-Fabric Ceiling Systems</li>
            <li>Textured Ceilings</li>
            <li>Tin Ceilings</li>
            <li>Maintenance of Ceilings & Restoration</li>
          </ul>
        </div>
      </section>

      {/* Plaster & Gypsum Board Estimating Services */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            PLASTER & GYPSUM BOARD ESTIMATING SERVICES
          </h2>
          <ul className="list-disc ml-6 text-gray-700 mb-4 grid grid-cols-1 md:grid-cols-2 gap-y-1">
            <li>Furring & Lathing</li>
            <li>Non-Load-Bearing Wall Framing</li>
            <li>Head-of-wall Framing Systems</li>
            <li>Portland Cement Plaster (Stucco)</li>
            <li>Drywall</li>
            <li>Plaster Fabrications</li>
            <li>Venetian & Other Lime Plasters</li>
            <li>Gypsum Board</li>
            <li>Gypsum Wallboard</li>
            <li>Glass Tiles & Mosaics</li>
            <li>Acoustical Plaster</li>
            <li>Mosaic Tiles</li>
            <li>Specialty Tiles</li>
            <li>Terracotta Tiles</li>
          </ul>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-yellow-500 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Offer</h2>
          <p className="mb-4">
            If you are from USA then Get 30% off on your first estimate!
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

      {/* Process Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Follow the Simple Process!</h2>
          <p className="mb-4">
            Let Us Help You With Your Estimates And Increase Your ROI
          </p>
          <div className="text-left max-w-3xl mx-auto">
            <h3 className="font-semibold mb-2">Submit your Plans</h3>
            <p>
              <Link to="/get-estimate" className="text-blue-900 underline">
                Click here to upload your plans and specifications.
              </Link> We will send you a quote in the next 5 minutes after reviewing your plans.
            </p>
            <h3 className="font-semibold mb-2 mt-4">Get a Quote</h3>
            <p>
              We will send you a quote including invoice, turnaround time, and delivery date. If you accept the quote, you can pay via Credit Card or Debit Card or PayPal, and our team will start working on your project.
            </p>
            <h3 className="font-semibold mb-2 mt-4">Receive Estimate</h3>
            <p>
              We will provide you estimates in EXCEL sheets comprising all the material and labor pricing along with man-hours either in MasterFormat or your customized format.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteriorExteriorFinishes;