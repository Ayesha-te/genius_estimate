import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Award, Building } from 'lucide-react';

const ThermalProtection = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Thermal & Moisture Protection Estimating Services
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Our residential and commercial building cost estimator are very much hands-on with thermal and moisture protection trade of work. Waterproofing, roofing, firestopping, caulking, siding, sealants, roof consultants, sheet metal flashing and trim contractors have been served by World Estimating for number of years with estimates ranging from sealants and vapor barriers to insulation.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <p className="mb-4">
            These estimates prepared by our estimators can further be used as demanded either for procurement, ordering materials from the market, estimating the labor and for bid proposal purposes. Our freelance construction estimators prepare cost estimates as per the trade you specialize in.
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            <Link to="/samples/thermal-moisture" className="bg-yellow-500 text-gray-900 px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition">View Our Thermal & Moisture Protection Estimate Sample</Link>
          </div>
          <p className="mb-4">
            Commercial Flooring estimator hired at world estimating covers each aspect of floor division whether it would be interior finishes, exterior finishes, tiles or any marble stone work, we are adept in each and every aspect of the flooring. Similarly, commercial roofing estimators have expertise from EIFS to applied fireproofing.
          </p>
          <p className="mb-4">
            Our Trades Insulation: Thermal Insulation Estimating. Each division is described and takeoff in detail by our project estimators. Each roofing trade of work from the online roof repair estimate, tin roof, steel roof, garage roof, metal roof, slate roof, shingle roof, and flat roof estimates are accurately and precisely digitized by takeoff software and quantified in an EXCEL sheet.
          </p>
          <p className="mb-4">
            A large majority of homeowners reach out to us for their house roof, for which drawings or specifications make up the work for us and with our experience and past recent portfolio of projects, handle each project with a handful of expertise and deliver the projected cost to build a house roof in an hours’ time
          </p>
          <p className="mb-4">
            Roofing contractors regard us as the best roofing estimates company. The details are forwarded to our relevant department, necessary details are kept into consideration and comprehensive, easy to comprehend and meaningful roof estimate is delivered to the client in 24/7 Support on call. Please visit our profile on The Blue Book.
          </p>
          <div className="mb-4">
            <span className="font-semibold">Just upload plans in the below link, we will review and send a quote in next 5 minutes:</span>
          </div>
          <Link
            to="/Contact"
            className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition"
          >
            Upload Plans
          </Link>
        </div>
      </section>

      {/* Trades & Takeoffs */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Thermal & Moisture Protection Takeoffs</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700 mb-4">
            <div>fire retardant cable sprays takeoffs</div>
            <div>damproofing takeoffs</div>
            <div>waterproofing takeoffs</div>
            <div>chemical grouting takeoffs</div>
            <div>traffic coatings takeoffs</div>
            <div>fiber insulation takeoffs</div>
            <div>plastic insulation takeoffs</div>
            <div>cellulose insulation takeoffs</div>
            <div>reflective insulation takeoffs</div>
            <div>cladding takeoffs</div>
            <div>roof and deck installation takeoffs</div>
            <div>EIFS( Exterior Insulation and Finish Systems) takeoffs</div>
            <div>Weather Barriers takeoffs</div>
            <div>Vapor Resistive Barriers takeoffs</div>
            <div>Vapor Permeable Barriers takeoffs</div>
            <div>Steep Slope Roofing takeoffs</div>
            <div>Shingles (Asphalt, Metal, Slate) takeoffs</div>
            <div>Siding Panels takeoffs</div>
            <div>Metal Siding takeoffs</div>
            <div>Vinyl Siding takeoffs</div>
            <div>membrane roofing takeoffs</div>
            <div>bituminuous roofing takeoffs</div>
            <div>flashings takeoffs</div>
            <div>coping takeoffs</div>
            <div>fascias takeoffs</div>
            <div>gutters and downspouts takeoffs</div>
            <div>roof expansion joints takeoffs</div>
            <div>roof curbs takeoffs</div>
            <div>ridge vents takeoffs</div>
            <div>pipe flashing system takeoffs</div>
            <div>Wood Siding and Shingles takeoffs</div>
            <div>roof walkway takeoffs</div>
            <div>spray fireproofing takeoffs</div>
            <div>intumescent fireproofing takeoffs</div>
            <div>fire stopping takeoffs</div>
            <div>smoke barriers takeoffs</div>
            <div>joint sealants takeoffs</div>
            <div>joint seals takeoffs</div>
            <div>snow guards takeoffs</div>
            <div>roof pavers takeoffs</div>
            <div>Penetration firestopping takeoffs</div>
            <div>Fiber-reinforced cement siding takeoffs</div>
          </div>
        </div>
      </section>

      {/* Service Regions */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Providing Thermal & Moisture Protection Estimating Services throughout United States, United Kingdom, Australia, Canada and other countries
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-gray-700 mb-4">
            {/* Only a selection for brevity; full list can be expanded */}
            <div>Colorado</div>
            <div>Denver</div>
            <div>Colorado Springs</div>
            <div>Aurora</div>
            <div>Fort Collins</div>
            <div>Lakewood</div>
            <div>Pueblo</div>
            <div>Centennial</div>
            <div>Boulder</div>
            <div>Greeley</div>
            <div>Longmont</div>
            <div>Castle Rock</div>
            <div>Grand Junction</div>
            <div>Parker</div>
            <div>Littleton</div>
            <div>Brighton</div>
            <div>Westminster</div>
            <div>Thornton</div>
            <div>Arvada</div>
            <div>Highlands Ranch</div>
            {/* ...more locations can be added dynamically if required */}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default ThermalProtection;