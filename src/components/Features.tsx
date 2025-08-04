import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Calculator,
  FileText,
  Clock,
  Target,
  Shield,
  TrendingUp,
  Building,
  Users,
  Wrench,
  Hammer,
  Zap,
  Droplets
} from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: Calculator,
      title: "Construction Bid Estimates",
      subtitle: "For General & Subcontractors",
      description:
        "We provide highly accurate construction bid estimates for contractors and subcontractors. Our estimators prepare these estimates using location-specific material and labor pricing, powered by our proprietary location-based cost databases. Thanks to this approach, we've successfully delivered estimates for a wide range of construction projects—from large-scale airport highways to straightforward HVAC installations."
    },
    {
      icon: FileText,
      title: "Design Estimate",
      subtitle: "For Architects & Designers",
      description:
        "We provide detailed design estimates for architects and designers, covering all stages of design—from schematic and conceptual phases to construction documents. Our preliminary estimating services are accurate, defensible, and informed by years of experience across residential, commercial, and other construction projects. This deep industry insight allows us to deliver reliable cost projections early in the design process."
    },
    {
      icon: Clock,
      title: "Monthly Takeoff Packages",
      subtitle: "For Busy Contractors",
      description:
        "We offer monthly packages designed to help you reduce costs and increase efficiency. By subscribing, you can save up to 60% compared to the expenses of maintaining an in-house estimator—without compromising on accuracy or speed. Our construction takeoff services are reliable, efficient, and delivered under one roof, allowing you to bid on more projects and win more work."
    },
    {
      icon: Target,
      title: "Consultation & Bid Filing",
      subtitle: "Expert Guidance",
      description:
        "We offer personalized consultations to help our clients better understand construction cost estimating, various types of takeoffs, and effective budget management. Our goal is not only to support you in winning bids and securing projects but also to share insights that can enhance your business profile within your specific trade. We go beyond just preparing proposals—we help identify opportunities that can drive long-term growth and success."
    }
  ];

  const takeoffServices = [
    {
      icon: Zap,
      title: "MEP (Mechanical, Electrical, Plumbing) Estimating Services",
      description:
        "We provide specialized MEP estimating and construction takeoff services for mechanical, electrical, and plumbing contractors. Our dedicated team of expert MEP estimators delivers comprehensive and accurate estimates covering all aspects of MEP systems—including HVAC, sheet metal, ductwork, process piping, pipe insulation, instrumentation, and controls."
    },
    {
      icon: Building,
      title: "Concrete Estimating Services",
      description:
        "We offer thorough and reliable concrete estimating services for contractors. Our concrete takeoffs and estimates cover all major components, including foundations, footings, slabs, blocks, pavers, driveways, garages, basements, and parking lots. Additionally, we provide detailed takeoff services for thermal and moisture protection systems. These include firestopping, fireproofing, sprinklers, spray insulation, waterproofing, and dampproofing."
    },
    {
      icon: Wrench,
      title: "Steel Estimating/Detailing",
      description:
        "We provide accurate and affordable steel estimating and takeoff services for detailing contractors, steel contractors, framers, distributors, and fabricators. Our structural and miscellaneous steel takeoffs include precise quantity estimates for beams, columns, trusses, castings, railings, gratings, fasteners, joints, anchors, bolts, and more."
    },
    {
      icon: Hammer,
      title: "Lumber Takeoffs",
      description:
        "We support framing contractors, millwork contractors, commercial contractors, and builders by providing precise millwork estimates and lumber takeoffs. Our detailed takeoffs cover rough and finish carpentry, wood trusses, drywall framing, cabinetry, millwork, lumber and timber, countertops, paneling, laminates, and more."
    },
    {
      icon: Shield,
      title: "Drywall Takeoffs",
      description:
        "Drywall contractors are among our regular clients, relying on us for accurate estimates and takeoffs to prepare competitive quotes for general contractors and suppliers. Our drywall takeoff services include detailed quantification of drywall sheets, gypsum wallboards, tape, joint compound, drywall screws, corner beads, labor and transportation costs, acoustic insulation, studs, and more."
    },
    {
      icon: Droplets,
      title: "Sitework and Earthwork Takeoffs",
      description:
        "Our experienced estimators deliver sitework takeoffs. Our takeoff includes cut and fill dirt takeoff, earthwork takeoffs, and site utility estimates for excavators and contractors. While delivering Earthwork takeoff services, we provide cut & fill 3D images, earthwork volumes, and surface grading."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Construction Estimating & Material Takeoff Services | Genius Estimate</title>
        <meta name="description" content="Professional construction estimating and material takeoff services for contractors. Our expert estimators provide accurate bids for all trades including MEP, concrete, steel, lumber, and drywall." />
        <meta name="keywords" content="construction estimating services, material takeoff services, construction cost estimating, MEP estimating services, concrete estimating services, drywall takeoff services" />
        <link rel="canonical" href="https://geniusestimate.com/services" />
        
        {/* Schema.org markup for Services */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Construction Estimating & Material Takeoff Services",
              "provider": {
                "@type": "ProfessionalService",
                "name": "Genius Estimate",
                "url": "https://geniusestimate.com"
              },
              "serviceType": "Construction Estimating",
              "areaServed": "United States",
              "description": "Professional construction estimating and material takeoff services including MEP, concrete, steel, lumber, and drywall estimating.",
              "offers": {
                "@type": "Offer",
                "price": "100.00",
                "priceCurrency": "USD"
              }
            }
          `}
        </script>
      </Helmet>
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Text */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Construction Estimator & Material Takeoff Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are home to a skilled team of construction estimators and material takeoff specialists, backed by a diverse portfolio of completed construction projects. To support our clients' needs, we offer accurate construction takeoff services and cost estimates. Our services are used for a wide range of purposes, including bidding, design estimating, budget planning, bid quality control, and procurement.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-4">
              We proudly serve a variety of clients, including general contractors, subcontractors, architects, project owners, home builders, lenders, engineering firms, fabricators, framers, and vendors.
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

          {/* Construction Takeoff Services */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-white mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">CONSTRUCTION TAKEOFF SERVICES</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our construction estimators have expertise in construction takeoffs in all CSI divisions. Some of them are listed below:
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {takeoffServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                >
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
          <section className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
            
              <h3 className="text-2xl font-semibold text-red-600 mb-6">How to Get Started with Us!</h3>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {[
                {
                  title: "Submit Your Project Plans",
                  description:
                    "Send us your construction drawings, specifications, or any relevant documents via email or our upload portal."
                },
                {
                  title: "Receive a Customized Quote",
                  description:
                    "We'll review your project scope and provide a detailed, no-obligation quote outlining the cost and turnaround time."
                },
                {
                  title: "Confirm & Make Payment",
                  description:
                    "Once you approve the quote, proceed with secure payment to initiate the estimating process."
                },
                {
                  title: "Estimate in Progress",
                  description:
                    "Our expert estimators begin working on your project using the latest tools and databases for accuracy and speed."
                },
                {
                  title: "Receive Your Estimate On Time",
                  description:
                    "Get your detailed estimate delivered within the agreed timeframe—ready for bidding, budgeting, or planning."
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Features;