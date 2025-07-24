import React from 'react';
import { Users, Building, Trophy, Star, Calculator, FileText, Clock, Target, Globe, Award } from 'lucide-react';

const Stats = () => {
  const mainStats = [
    {
      icon: Users,
      number: "2500+",
      label: "Satisfied Clients",
      description: "Construction professionals who trust our expertise and continue to rely on our estimating services"
    },
    {
      icon: Building,
      number: "5000+",
      label: "Projects Completed",
      description: "Successful estimates delivered across residential, commercial, and industrial construction projects"
    },
    {
      icon: Trophy,
      number: "92%",
      label: "Bid Success Rate",
      description: "Proven success rate in helping contractors win their bids and secure profitable projects"
    },
    {
      icon: Star,
      number: "15+",
      label: "Years Experience",
      description: "Decades of combined experience in construction estimating and project management"
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

  const serviceAreas = [
    "North America",
    "Caribbean Region", 
    "Australian Regions"
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-yellow-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Numbers That Demonstrate Our Excellence
          </h2>
          <p className="text-xl text-red-100 max-w-4xl mx-auto leading-relaxed">
            Our track record of success is reflected in the measurable results we've achieved for our clients 
            and the recognition we've received from the construction industry. These numbers represent real 
            projects, real savings, and real success stories from contractors and builders who have trusted 
            us with their most important estimates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {mainStats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <h3 className="text-xl font-semibold mb-4">{stat.label}</h3>
                <p className="text-red-100 leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Projects Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Recent Projects</h3>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              We have successfully delivered estimates across diverse project types, demonstrating our versatility and expertise in all construction sectors.
            </p>
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

        {/* Service Areas Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Service Areas</h3>
            <p className="text-xl text-red-100 mb-6">
              Are you searching "estimating company near me"? We are at your service.
            </p>
            <p className="text-lg text-red-100 max-w-3xl mx-auto">
              Our construction estimators offer construction estimating services to North America, the Caribbean region & Australian regions. Genious Estimate is having skilled construction estimators, material takeoff specialists, draftsmen, and project managers for your construction projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold">{area}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              CONTACT US & GET 30% OFF
            </h3>
            <p className="text-red-100 mb-6 leading-relaxed">
              So what are you waiting for? We are here for your help. We provide online estimating services as per your needs in our service areas. Join our growing community of successful contractors and experience the difference that accurate, professional estimates can make for your business.
            </p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold">
              Get Your 30% Discount Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;