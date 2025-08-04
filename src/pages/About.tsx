import React from 'react';
import { Helmet } from 'react-helmet';
import { Users, Target, Award, Globe, ArrowRight, CheckCircle, Calculator, Building, FileText } from 'lucide-react';
import mission from '../assets/about.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Accuracy",
      description: "We strive for 99% accuracy in every estimate, using proven methodologies and quality control processes to ensure reliability."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work as true partners with our clients, providing ongoing support and collaboration throughout the estimating process."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We continuously improve our processes and stay current with industry best practices to deliver exceptional results."
    },
    {
      icon: Globe,
      title: "Integrity",
      description: "We conduct business with the highest ethical standards, transparency, and commitment to our clients' success."
    }
  ];

  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Started with a vision to provide accurate, reliable construction estimates that help contractors succeed and grow their businesses."
    },
    {
      year: "2018",
      title: "Technology Integration",
      description: "Invested in cutting-edge estimating software and digital tools to improve accuracy and efficiency in our estimating process."
    },
    {
      year: "2021",
      title: "Nationwide Expansion",
      description: "Expanded our services nationwide, building a network of regional experts with local market knowledge and pricing expertise."
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description: "Received multiple industry awards for accuracy, customer service, and innovation in construction estimating services."
    },
    {
      year: "2023",
      title: "Digital Transformation",
      description: "Launched advanced digital platforms for project collaboration, real-time updates, and enhanced client communication."
    },
    {
      year: "2024",
      title: "Market Leadership",
      description: "Established as a leading provider of construction estimating services with over 1500 satisfied clients nationwide."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Genius Estimate | Professional Construction Estimating Company</title>
        <meta name="description" content="Learn about Genius Estimate, a leading construction estimation company with 99% accuracy rate. Our team of 25+ expert estimators helps contractors win more bids through accurate construction cost estimating." />
        <meta name="keywords" content="construction estimation company, professional construction estimators, construction cost estimating, construction estimating services, accurate construction bids" />
        <link rel="canonical" href="https://geniusestimate.com/about" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://geniusestimate.com/about" />
        <meta property="og:title" content="About Genius Estimate | Professional Construction Estimating Company" />
        <meta property="og:description" content="Learn about Genius Estimate, a leading construction estimation company with 99% accuracy rate and 10+ years of experience helping contractors win more bids." />
        <meta property="og:image" content="https://geniusestimate.com/about.jpg" />
        
        {/* Schema.org markup for Organization */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Genius Estimate",
              "url": "https://geniusestimate.com",
              "logo": "https://geniusestimate.com/logo.png",
              "description": "Professional construction estimating services for contractors, builders, and developers. We provide accurate construction bids with 99% accuracy rate.",
              "foundingDate": "2015",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Genius Estimate Founder"
                }
              ],
              "numberOfEmployees": "25+",
              "areaServed": "United States",
              "awards": "Multiple industry awards for accuracy, customer service, and innovation in construction estimating",
              "sameAs": [
                "https://www.facebook.com/geniusestimate",
                "https://www.linkedin.com/company/genius-estimate"
              ]
            }
          `}
        </script>
      </Helmet>
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-yellow-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                About Genious Estimate
                <span className="block text-red-600">
                  Your Trusted Estimating Partner
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Genious Estimate is a leading provider of professional construction estimating services, 
                dedicated to helping contractors, builders, and developers achieve greater accuracy in their 
                project bidding and improved profitability in their operations. Our story is one of continuous 
                innovation, unwavering commitment to accuracy, and a passion for supporting the success of 
                construction professionals across the nation.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  Our Story & Mission
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Founded in 2015, Genius Estimate set out to provide construction professionals with fast, accurate, and reliable estimating services. From a small team of seasoned estimators, we've grown into a nationally recognized firm serving thousands of contractors, builders, and developers across the U.S.

                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Driven by technology, industry expertise, and a focus on client success, we help professionals win more bids and complete projects profitably. Our licensed estimators deliver precise takeoffs and estimates across residential, commercial, and industrial sectors—within 24–48 hours.

                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Choose Genius Estimate for accurate results, cost savings, and unmatched speed.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">Trusted by 1500+ construction professionals</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">5000+ successful projects completed</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">99% accuracy rate maintained</span>
                  </div>
                </div>
              </div>
              
              {/* Mission Image */}
              <div className="rounded-2xl overflow-hidden flex items-center justify-center h-full">
                <img
                  src={mission}
                  alt="Genius Estimate construction estimating team at work"
                  className="object-cover w-full h-full max-h-[400px] rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Mission &{" "}
                <span className="text-red-600">
                  Core Values
                </span>
              </h2>

              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                At Genius Estimate, our mission is to empower construction professionals with precise, data-driven estimates that support project success and long-term business growth. We are guided by a set of core values—accuracy, integrity, reliability, and client commitment—that inform every estimate we deliver and every decision we make.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl p-8 lg:p-12 text-white mb-16">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-6">Our Mission Statement</h3>
                <p className="text-xl text-red-100 leading-relaxed max-w-4xl mx-auto">
                  "To empower construction professionals with accurate, reliable estimates that drive smarter bidding, better decisions, and profitable projects—through innovation, precision, and a commitment to client success."
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gray-50 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-red-50 hover:to-yellow-50 transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-100 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-red-200 group-hover:to-yellow-200 transition-colors">
                      <value.icon className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Journey Through
                <span className="block text-red-600">
                  The Years
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                From our founding to becoming a nationally recognized leader in construction estimating, 
                our timeline showcases the key milestones that have shaped our company and defined our 
                commitment to excellence in serving the construction industry.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-red-600 to-yellow-500"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                    
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="text-2xl font-bold text-red-600 mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team & Expertise */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">
                  Our Expert Team &
                  <span className="block text-red-600">
                    Industry Expertise
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our success is built on the foundation of our exceptional team of construction professionals. 
                  We bring together licensed contractors, certified estimators, and industry specialists with 
                  decades of combined experience across all construction sectors. Our team members don't just 
                  crunch numbers – they bring real-world construction knowledge to every estimate.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Each team member is carefully selected for their expertise in specific trades and construction 
                  types. This specialized knowledge allows us to provide accurate, detailed estimates that 
                  reflect the true costs and complexities of your projects. We invest heavily in ongoing 
                  training and professional development to ensure our team stays current with industry trends, 
                  new materials, and evolving construction methods.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our collaborative approach means that every estimate benefits from multiple perspectives 
                  and areas of expertise. We believe that the best results come from combining individual 
                  expertise with team collaboration, ensuring that nothing is overlooked and every detail 
                  is carefully considered.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-lg p-6">
                    <div className="text-3xl font-bold text-red-600 mb-2">25+</div>
                    <div className="text-gray-700 font-medium">Expert Estimators</div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-lg p-6">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">50+</div>
                    <div className="text-gray-700 font-medium">Trade Specializations</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-red-100 to-yellow-100 rounded-2xl p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 text-center">
                    What Makes Our Team Different
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Real Construction Experience</h4>
                        <p className="text-gray-600 text-sm">
                          Our estimators have hands-on construction experience, not just theoretical knowledge.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Continuous Education</h4>
                        <p className="text-gray-600 text-sm">
                          Regular training on new materials, methods, and industry best practices.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Quality Focus</h4>
                        <p className="text-gray-600 text-sm">
                          Every estimate goes through multiple quality checks and peer reviews.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-yellow-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience the Genious Estimate Difference?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Join the thousands of construction professionals who have improved their bidding accuracy 
              and project profitability with our expert estimating services. Let's discuss how we can 
              help you achieve your construction business goals with precise, reliable estimates that 
              give you the competitive advantage you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Add CTA buttons here if needed */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;