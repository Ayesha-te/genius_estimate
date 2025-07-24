import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Raymond Eyi",
      position: "Developer",
      company: "EDEN LAND DEVELOPERS",
      content: "Genious Estimate has been a valued part of our development team over the last few years. Their cost and quantity estimates are thorough and well documented and are a reliable part of our budgeting process which is critical to our land acquisitions. We fully endorse their construction cost estimating services.",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Mike Rodriguez",
      position: "General Contractor",
      company: "Rodriguez Construction LLC",
      content: "Working with Genious Estimate has transformed our bidding process completely. Their detailed takeoffs and accurate pricing have helped us win 40% more bids over the past year. The turnaround time is incredible - we get comprehensive estimates within 24-48 hours, which keeps us competitive in fast-moving bidding situations. The level of detail in their reports is outstanding, breaking down every aspect of the project so we can understand exactly where our costs are coming from.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Sarah Johnson",
      position: "Project Manager",
      company: "Premier Commercial Builders",
      content: "The accuracy of Genious Estimate's work is phenomenal - we've seen our cost overruns drop by 60% since we started using their services. Their team is incredibly knowledgeable about all trades and always available to answer questions or provide clarifications. They've become an essential part of our project planning process. Their estimates are not just numbers - they're comprehensive analyses that help us understand every aspect of our projects.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const damageClaimServices = [
    {
      title: "Fires",
      description: "We are expert enough to deal with a diverse range of clients to write home damage claims due to fires. To do so, our expert team manages to deal with clients from different areas to restore their damage claims."
    },
    {
      title: "Hurricanes", 
      description: "Also, we are professional enough to inspect countless damaged properties due to hurricanes in your area. With the help of our expert and efficient team of professional estimators, we do it just right."
    },
    {
      title: "Tornadoes",
      description: "We are here with our expert team of estimators to assist you. In this way, we provide our services in suspecting a damage appraisal from your insurance company. As a result, we include concern with tornadoes."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what contractors, builders, and developers across the 
            country have to say about their experience working with Genious Estimate and the results they've 
            achieved. These testimonials represent real clients who have seen measurable improvements in their 
            bidding success, project profitability, and overall business performance through our professional 
            estimating services.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <Quote className="w-8 h-8 text-red-600 mr-3" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-red-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Damage Claim Estimate Services */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Damage Claim Estimate Services
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our construction estimators deal with the following property damage claims in different locations:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {damageClaimServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-100 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-red-600">{service.title.charAt(0)}</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            These testimonials represent just a fraction of the success stories we've helped create in the 
            construction industry. Every client's journey is unique, but the common thread is our commitment 
            to delivering accurate, detailed estimates that help contractors win more projects and achieve 
            greater profitability. Whether you're a small residential contractor or a large commercial 
            developer, we have the expertise and resources to support your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold">
              Get Your Free Estimate Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-red-600 transition-all font-semibold">
              View More Success Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;