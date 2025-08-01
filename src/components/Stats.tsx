import React from 'react';
import {
  Users, Building, Trophy, Star,
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Import flag SVGs or PNGs from your assets folder
import FlagUSA from '../assets/amer.png';
import FlagUK from '../assets/uk.png';
import FlagAustralia from '../assets/aus.png';

const Stats = () => {
  const mainStats = [
    {
      icon: Users,
      number: "1500+",
      label: "Satisfied Clients",
    },
    {
      icon: Building,
      number: "5000+",
      label: "Projects Completed",
    },
    {
      icon: Trophy,
      number: "92%",
      label: "Bid Success Rate",
    },
    {
      icon: Star,
      number: "10+",
      label: "Years Experience",
    }
  ];

  const projectTypes = [
    {
      title: "Airport & Highways",
      description: "Complex infrastructure projects requiring detailed civil and structural estimates"
    },
    {
      title: "Civic & Public Works",
      description: "Government and municipal projects with specialized requirements and compliance standards"
    },
    {
      title: "Commercial",
      description: "Office buildings, retail spaces, warehouses, and other commercial developments"
    },
    {
      title: "Education",
      description: "Schools, universities, and educational facilities with unique design requirements"
    },
    {
      title: "Industrial",
      description: "Manufacturing plants, processing facilities, and heavy industrial construction"
    },
    {
      title: "Multi-Use Family",
      description: "Residential complexes, apartments, and mixed-use developments"
    },
    {
      title: "Recreation",
      description: "Sports facilities, entertainment venues, and recreational complexes"
    },
    {
      title: "Retail",
      description: "Shopping centers, stores, and retail establishments of all sizes"
    }
  ];

  // Flag images and country names
  const serviceAreas = [
    {
      name: "North America",
      flag: FlagUSA,
      alt: "USA Flag",
    },
    {
      name: "United Kingdom",
      flag: FlagUK,
      alt: "UK Flag",
    },
    {
      name: "Australia",
      flag: FlagAustralia,
      alt: "Australia Flag",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-yellow-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Proven Results. Trusted by the Industry</h2>
          <p className="text-xl text-red-100 max-w-4xl mx-auto leading-relaxed">
            Our success speaks through real numbers, real savings, and real wins for contractors nationwide. Backed by industry recognition, we’ve helped clients secure more projects with confidence—delivering accurate estimates that drive results.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {mainStats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <h3 className="text-xl font-semibold mb-4">{stat.label}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Projects */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Recent Projects</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTypes.map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <h4 className="text-lg font-semibold mb-3">{project.title}</h4>
                <p className="text-red-100 text-sm leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Areas with Flags */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Service Areas</h3>
            <p className="text-xl text-red-100 mb-6">
              Are you searching "estimating company near me"?
              <br />
              <span className="font-semibold">We are at your service.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                  <img src={area.flag} alt={area.alt} className="w-10 h-10 object-contain" />
                </div>
                <h4 className="text-xl font-semibold">{area.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">CONTACT US</h3>
            <p className="text-red-100 mb-6 leading-relaxed">
              So what are you waiting for?
            </p>
            <Link to="/contactus">
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold">
                Get Your Estimate now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;