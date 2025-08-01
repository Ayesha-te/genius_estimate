import React from 'react';
import { Award, Clock, Globe, HeartHandshake, Shield, Users, Target, TrendingUp, CheckCircle, DollarSign } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: "Fastest Turnaround Time",
      description: "Fast, accurate takeoffs to help you bid more and win more—right when you need them.",
      stats: "24-48h"
    },
    {
      icon: DollarSign,
      title: "Affordable Prices",
      description: "Get professional construction estimates and takeoffs at competitive market rates—priced to fit your project scope and budget.",
      stats: "$200 Avg"
    },
    {
      icon: Target,
      title: "Pinpoint Accuracy",
      description: "Using the latest software and our custom cost database, we deliver highly accurate estimates—plus on-demand vendor pricing when you need it.",
      stats: "99% Accurate"
    },
    {
      icon: Award,
      title: "Certified Estimators",
      description: "Our team is packed with certified professionals—experienced, accredited, and ready to deliver accurate results.",
      stats: "Certified"
    }
  ];

  const additionalReasons = [
    {
      icon: TrendingUp,
      title: "92% Bid-hit Ratio",
      description: "Our estimates boast a bid-winning ratio of over 92%, based on past contractor bid data—demonstrating the accuracy and reliability of our services."
    },
    {
      icon: Users,
      title: "Highly Skilled Professional Team",
      description: "Our team includes estimators, engineers, field experts, and construction managers—each with years of real-world construction experience."
    },
    {
      icon: HeartHandshake,
      title: "24/7 Customer Support",
      description: "Our dedicated customer support team is available around the clock to assist with any questions, clarifications, or additional requirements."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every estimate undergoes rigorous quality control, including senior estimator reviews and cross-verification to ensure high accuracy and reliability."
    }
  ];

  const whyChooseContent = [
    "Are you leaving money on the table by skipping bids? Contractors lose over $250,000/month on average simply because they don’t have the time or resources to estimate.",
    "Genius Estimate helps you turn that around. We deliver fast, accurate, and affordable construction estimates and takeoffs—so you can bid more, win more, and grow your business without the overhead of an in-house team.",
    "Let us take estimating off your plate—so you can focus on building and winning."
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Stop Losing Bids — Start Winning More Work
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
              <div className="bg-white h-full rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between">
                <div>
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
            </div>
          ))}
        </div>

        {/* Added Why Choose Us heading here */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
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
    <div className="space-y-6">
      {[
        {
          title: "Local Pricing, Nationwide Accuracy",
          description: "ZIP code–based cost data ensures spot-on estimates tailored to your project's location."
        },
        {
          title: "Save Up to 60%",
          description: "Cut the cost of in-house estimators with our expert monthly packages—smart, scalable, and budget-friendly."
        },
        {
          title: "Faster Bids = More Wins",
          description: "Get reliable takeoffs in 24–48 hours and bid more projects with confidence."
        }
      ].map((item, index) => (
        <div key={index} className="flex items-start space-x-4">
          <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
          <div>
            <p className="text-lg font-semibold text-gray-900">{item.title}</p>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="bg-gradient-to-br from-red-100 to-yellow-100 rounded-xl p-8 text-center">
      <div className="text-5xl font-bold text-red-600 mb-4">60%</div>
      <p className="text-xl font-semibold text-gray-900 mb-2">Cost Savings</p>
      <p className="text-gray-600 mb-6">
        Save up to 60% on in-house estimator expenses with our monthly packages
      </p>
      <div className="grid grid-cols-2 gap-4">
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
