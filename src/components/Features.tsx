import React from 'react';
import { Calculator, FileText, Clock, Target, Shield, TrendingUp, Building, Users, Wrench, Hammer, Zap, Droplets } from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: Calculator,
      title: "Construction Bid Estimates",
      subtitle: "For General & Subcontractors",
      description: "We provide highly accurate construction bid estimates to contractors and subcontractors. Our estimators prepare these by incorporating location-specific material and labor pricing. Moreover, we accomplish this using our developed location-based cost databases. This way, we have already served in different sorts of construction projects. These projects range from airport highways to simple HVAC projects."
    },
    {
      icon: FileText,
      title: "Design Estimate",
      subtitle: "For Architects & Designers",
      description: "We provide design estimates for architects & designers. Our estimates include all stages of design from schematic, and conceptual to construction documents. Similarly, our preliminary estimating services are one of a kind. They are defensible and accurate. Further, they are based on our past experience. This experience comes from our residential, commercial, and other projects from the past."
    },
    {
      icon: Clock,
      title: "Monthly Takeoff Packages",
      subtitle: "For Busy Contractors",
      description: "We offer monthly packages for you. By subscribing to our monthly packages, you can minimize your expenses. You can save up to 60% of your in-house estimator's expenses. While you have accurate and efficient construction takeoff services. This way, you will be able to bid more and win more. Get all the services under one roof."
    },
    {
      icon: Target,
      title: "Consultation & Bid Filing",
      subtitle: "Expert Guidance",
      description: "We offer consultation to our clients to develop an understanding of construction cost estimating, various takeoffs, and managing budgets. This way, offering you our expertise to win bids and earn projects. We don't just narrow down our concern to just proposals but also point out factors that can flourish your business profile in your respective trade as a contractor."
    }
  ];

  const takeoffServices = [
    {
      icon: Zap,
      title: "MEP (Mechanical, Electrical, Plumbing) Estimating Services",
      description: "We offer MEP estimating services and construction takeoff services to the concerned contractors. Our MEP services include mechanical, electrical, and plumbing services. With our separate department of expert MEP estimators, we cover everything in our MEP estimates. These estimates include HVAC, sheet metal, ductwork, process piping, pipe insulation, instrumentation & controls, etc."
    },
    {
      icon: Building,
      title: "Concrete Estimating Services",
      description: "We offer thorough and reliable concrete estimating services to contractors. Our concrete takeoffs and estimates include foundation, footing, slabs, blocks, pavers, driveways, garage, basement takeoffs, parking lots takeoffs, etc. Similarly, our services for thermal moisture protection include fire stop, fireproof, sprinklers, spray insulation, waterproof, dampproof, and fire stop takeoffs."
    },
    {
      icon: Wrench,
      title: "Steel Estimating/Detailing",
      description: "We render our accurate and affordable steel estimating and takeoffs to detailing and steel contractors, framers, distributors, and fabricators. Our structural & miscellaneous steel takeoffs cover quantities of beams, columns, trusses, castings, railings, gratings, fasteners, joints, anchors & bolts, etc."
    },
    {
      icon: Hammer,
      title: "Lumber Takeoffs",
      description: "We help Framing contractors, Millwork contractors, Commercial Contractors, and Builders by providing them with precise millwork estimates or lumber takeoffs. Our takeoffs include Rough & Finish Carpentry, wood trusses, drywall framing, cabinetry, millwork, lumber and timber, countertops, paneling, laminates, etc."
    },
    {
      icon: Shield,
      title: "Drywall Takeoffs",
      description: "Drywall contractors are our regular clients. They need accurate estimates and takeoffs to quote prices to general contractors as well as to suppliers. We quantify drywall sheets, gypsum wall Boards, tape, joint compound, drywall screws, corner beads, labor costs, transportation costs, acoustic insulations, beads, studs, and others."
    },
    {
      icon: Droplets,
      title: "Sitework and Earthwork Takeoffs",
      description: "Our experienced estimators deliver sitework takeoffs. Our takeoff includes cut and fill dirt takeoff, earthwork takeoffs, and site utility estimates for excavators and contractors. While delivering Earthwork takeoff services, we provide cut & fill the 3D image, earthwork volumes, and surface grading."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Construction Estimator, Material Takeoffs
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are home to an expert team of construction estimators & material takeoff specialists. Our experts hold a huge portfolio of construction projects. To cater to our client's projects, we provide construction takeoff services and construction estimates. Our experts provide these services with accuracy. While they are used for bidding, design estimate, budget planning, quality control of bids, and procurement.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-4">
            Further, our clients include General Contractors, Subcontractors, Architects, Owners, Home Builders, Lenders, Engineering Firms, Fabricators, Framers, and vendors.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-100 to-yellow-100 rounded-lg flex items-center justify-center group-hover:from-red-200 group-hover:to-yellow-200 transition-colors">
                  <feature.icon className="w-6 h-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-red-600 font-medium">{feature.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Construction Takeoff Services Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">CONSTRUCTION TAKEOFF SERVICES</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our construction estimators have expertise in construction takeoffs in all CSI divisions. Some of them are listed below:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {takeoffServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to Begin Section */}
        <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Construction Estimate & Quantity Takeoff
            </h2>
            <h3 className="text-2xl font-semibold text-red-600 mb-6">How to begin with us!</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Submit Your Drawing Plans</h4>
              <p className="text-gray-600 leading-relaxed">
                After you submit the drawing and specifications, we prepare a quote including the invoice, turnaround time, and delivery date. We accept PDF format and your plans can be Bid set, Schematic, Design Development, Construction document, or conceptual drawings.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Get a Quote</h4>
              <p className="text-gray-600 leading-relaxed">
                After reviewing your plans, we will send you the quote within a few minutes. If you accept it, you can pay the invoice via credit card, debit card, or PayPal. And our team will start working on your project.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Receive Estimate</h4>
              <p className="text-gray-600 leading-relaxed">
                You will receive an estimate that will contain all the material & labor quantities with pricing. We deliver our estimate and takeoff sheet in EXCEL, our template or the client's template, as per demand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;