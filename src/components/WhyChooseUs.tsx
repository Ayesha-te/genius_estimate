import React from 'react';
import { Award, Clock, Globe, HeartHandshake, Shield, Users, Target, TrendingUp, CheckCircle, DollarSign } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: "Fastest Turnaround Time",
      description: "We provide construction estimating services and quantity takeoffs within the fast turnaround time of 24 to 48 hours.",
      stats: "24-48h"
    },
    {
      icon: DollarSign,
      title: "Affordable Prices",
      description: "We maintain our construction estimates and quantity takeoffs at competitive market rates. Resultantly, offering our estimates and takeoffs at $200 on average. (However, it can be less or more depending on the scope of the project)",
      stats: "$200 Avg"
    },
    {
      icon: Target,
      title: "Accurate and Detailed Estimates",
      description: "With the use of the latest Software and our developed construction cost database based on zip code, we can ensure accuracy in our estimates. We also offer on-demand vendor pricing.",
      stats: "99% Accurate"
    },
    {
      icon: Award,
      title: "Certified Estimators",
      description: "Our team holds a vast range of construction estimators. All of them have credible accreditations and experience. Also, they are proficient in using various construction estimating software. These include software like Plan swift, Bluebeam, Trimble, Accubid, RS Means, Cost Works, and Quest Estimating.",
      stats: "Certified"
    }
  ];

  const additionalReasons = [
    {
      icon: TrendingUp,
      title: "92% Bid-hit Ratio",
      description: "The bid winning ratio of our estimates is more than 92% as per our past contractor's bids data. This exceptional success rate demonstrates the accuracy and reliability of our estimates, helping contractors win more projects and grow their businesses."
    },
    {
      icon: Users,
      title: "Highly Skilled Professional Team",
      description: "As per our team. It comprises of experts such as construction estimators, engineers, field experts, and construction managers. Each team member brings years of real-world construction experience to ensure the highest quality estimates."
    },
    {
      icon: HeartHandshake,
      title: "24/7 Customer Support",
      description: "We make sure that our customer support is available 24/7 to help you. Our dedicated support team is always ready to assist with questions, clarifications, and any additional requirements you may have throughout the estimating process."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every estimate goes through our rigorous quality control process, including multiple reviews by senior estimators and cross-verification of all calculations and assumptions to ensure maximum accuracy and reliability."
    }
  ];

  const whyChooseContent = [
    "Many contractors lose their money on an average of more than $250,000 per month because they don't bid due to a lack of construction estimation resources and time.",
    "We are a renowned construction estimating firm that provides estimates to contractors so that they can bid more. While at the same time, this saves their estimating expenses through our expert estimating services.",
    "We assist busy contractors with a diverse range of estimating and takeoff services. And Thus, pave their way toward winning jobs successfully."
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Genious Estimate Company?
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {whyChooseContent.map((content, index) => (
              <p key={index} className="text-xl text-gray-600 leading-relaxed">
                {content}
              </p>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-red-100 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-red-200 group-hover:to-yellow-200 transition-colors">
                  <reason.icon className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-red-600 mb-2">
                  {reason.stats}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {additionalReasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-100 to-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Monthly Packages Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              How Do We Help Contractors To Win More Bids
            </h3>
            <h4 className="text-xl font-semibold text-red-600 mb-6">
              We are assisting contractors with their monthly takeoff packages
            </h4>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600 leading-relaxed">
                      Several contractors rely on our expert and professional estimating and takeoff services. Most of the time, contractors prefer our monthly takeoff packages as they save their expenses.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600 leading-relaxed">
                      In addition to that, they have accurate and efficient construction takeoff services. Further, we make sure that our prices are Budget-friendly. As a result, our packages save the cost of in-house estimators by up to 60%.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600 leading-relaxed">
                      Similarly, contractors demand other services like roof takeoff services, Plumbing takeoff services, mechanical takeoffs, etc. We deal with them efficiently by evaluating their labor and material, including equipment and profit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-100 to-yellow-100 rounded-xl p-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-red-600 mb-4">
                  60%
                </div>
                <p className="text-xl font-semibold text-gray-900 mb-2">Cost Savings</p>
                <p className="text-gray-600 mb-6">
                  Save up to 60% on in-house estimator expenses with our monthly packages
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-red-600">92%</div>
                    <div className="text-sm text-gray-600">Bid Success Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-600">24/7</div>
                    <div className="text-sm text-gray-600">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Clients Section */}
        <div className="bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-6">Our Clients</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "General Contractors",
              "Homebuilders", 
              "Subcontractors",
              "Developer",
              "Remodeling Contractors",
              "Architects",
              "Vendors",
              "Designers"
            ].map((client, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all">
                <p className="font-semibold">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;