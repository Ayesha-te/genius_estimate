import React from 'react';
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Calculator,
  FileText,
  Building,
  Users,
} from 'lucide-react';

const CTA = () => {
  const estimateTypes = [
    {
      icon: Building,
      title: 'Commercial Estimating',
      description:
        'We understand that commercial estimates and takeoffs are very complex. Our estimators hold in-depth knowledge about commercial projects. Further, our pricing is cost-effective and accurate.',
    },
    {
      icon: Users,
      title: 'Residential Estimating',
      description:
        "We've been providing accurate residential estimates for years. Whether it's a single-family home or a multi-apartment building, we understand the full scope.",
    },
    {
      icon: Calculator,
      title: 'Industrial Estimating Services',
      description:
        'Our experts are skilled in structured estimating for industrial projects. We cater to the needs of the Process & Power industry, from units to complex plants.',
    },
    {
      icon: FileText,
      title: 'Civil Estimating Services',
      description:
        'Our experienced team delivers precise civil quantity takeoffs and estimates. We’ve helped plan and estimate large-scale infrastructure projects.',
    },
  ];

  const publicSectorProjects = [
    'Lower Manhattan Development Corporation (LMDC)',
    'US Embassy',
    'US Air Force',
    'Long Island Power Authority (LIPA)',
    'US Navy',
    'Metropolitan Transportation Authority (MTA)',
    'Texas Parks and Wildlife Department (TPWD)',
    'US Army',
    'Environmental Protection Agency (CALEA)',
    'Industrial Welfare Commission (IWC)',
    'Florida Department of Transportation (DOT)',
    'Florida Department of Highway Safety and Motor Vehicles (DHSMV)',
  ];

  return (
    <section className="py-20 bg-white text-[#0A1D37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Estimating Services */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Construction Cost Estimating Services</h2>
            <p className="text-xl text-[#0A1D37]/70 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive estimating services cover all major construction sectors with tailored, accurate solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {estimateTypes.map((type, i) => (
              <div
                key={i}
                className="bg-[#FFBD9B]/20 border border-[#FFBD9B]/50 rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#FFBD9B] rounded-lg flex items-center justify-center mr-4">
                    <type.icon className="w-6 h-6 text-[#0A1D37]" />
                  </div>
                  <h3 className="text-xl font-semibold">{type.title}</h3>
                </div>
                <p className="text-[#0A1D37]/80 leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Public Sector Services */}
        <div className="bg-[#0A1D37] text-white rounded-2xl p-10 lg:p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Public Sector Estimating Services</h3>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              We offer expert estimating for public sector projects with compliance to federal guidelines and documentation.
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-2xl font-semibold mb-6 text-center">Our Pride Portfolio Includes:</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {publicSectorProjects.map((p, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition"
                >
                  <p className="text-sm font-medium">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Estimates & Takeoffs */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-[#FFBD9B]/20 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Our Construction Estimates</h3>
            <p className="text-[#0A1D37]/80 leading-relaxed mb-6">
              We provide estimates in Excel/PDF formats using our template or yours. From residential to mechanical, we've got every trade covered.
            </p>
            <ul className="space-y-3 text-[#0A1D37]">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#0A1D37] rounded-full"></div>
                <span>Excel & PDF formats available</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#FFBD9B] rounded-full"></div>
                <span>Custom or client templates</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <span>All trades covered</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#FFBD9B]/20 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Our Material Takeoffs</h3>
            <p className="text-[#0A1D37]/80 leading-relaxed mb-6">
              Our takeoffs include material, labor, manhours, and zip-code-based pricing for the most accurate budgeting possible.
            </p>
            <ul className="space-y-3 text-[#0A1D37]">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#0A1D37] rounded-full"></div>
                <span>Material, labor & manhours included</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#FFBD9B] rounded-full"></div>
                <span>Zip-code based pricing</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <span>CSI format delivery</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact & Estimate Form */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">
              Ready to Get Accurate Estimates?
              <span className="block text-[#FFBD9B]">Let’s Begin Your Free Consultation</span>
            </h2>
            <p className="text-xl text-[#0A1D37]/70 leading-relaxed">
              Our team is ready to help you win more bids and reduce cost overruns with fast, accurate estimates.
            </p>

            <div className="space-y-4">
              {[
                { icon: Phone, title: 'Call Us', detail: '+1 (555) 123-4567' },
                { icon: Mail, title: 'Email Us', detail: 'info@geniousestimate.com' },
                { icon: MapPin, title: 'Visit Us', detail: '123 Construction Plaza, Builder City' },
              ].map((info, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#FFBD9B] rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-[#0A1D37]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    <p className="text-[#0A1D37]/80">{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Estimate Form */}
          <div className="bg-[#FFBD9B]/20 p-8 rounded-2xl">
            <div className="flex items-center justify-center mb-6">
              <Calculator className="w-8 h-8 text-[#0A1D37] mr-3" />
              <h3 className="text-2xl font-bold">Get Your Free Estimate</h3>
            </div>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <input placeholder="First Name *" className="input" />
                <input placeholder="Last Name *" className="input" />
              </div>
              <input placeholder="Email Address *" className="input" />
              <input placeholder="Company Name" className="input" />
              <select className="input">
                <option value="">Select Project Type</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Industrial</option>
                <option>Civil</option>
              </select>
              <textarea rows={4} placeholder="Project details..." className="input resize-none"></textarea>
              <button className="w-full bg-[#0A1D37] text-white py-3 rounded-md hover:bg-[#061424] transition-all flex justify-center items-center gap-2">
                <span>Get My Free Estimate</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            <p className="text-xs text-center text-[#0A1D37]/70 mt-4">
              * Required fields. We respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
