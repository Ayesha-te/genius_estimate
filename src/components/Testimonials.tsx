import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Raymond Eyi",
      position: "Developer",
      company: "EDEN LAND DEVELOPERS",
      content: "Genius Estimate has been a valued part of our development team over the last few years...",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Mike Rodriguez",
      position: "General Contractor",
      company: "Rodriguez Construction LLC",
      content: "Working with Genius Estimate has transformed our bidding process completely...",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Sarah Johnson",
      position: "Project Manager",
      company: "Premier Commercial Builders",
      content: "The accuracy of Genius Estimate's work is phenomenal...",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const damageClaimServices = [
    {
      title: "Fires",
      description: "We are expert enough to deal with damage claims due to fires..."
    },
    {
      title: "Hurricanes",
      description: "We inspect countless damaged properties due to hurricanes..."
    },
    {
      title: "Tornadoes",
      description: "We assist with damage appraisals concerned with tornadoes..."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what contractors, builders, and developers across the 
            country have to say about their experience working with Genius Estimate...
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
              Our construction estimators deal with the following property damage claims:
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
          <h3 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            These testimonials represent just a fraction of the success stories we've helped create...
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold">
                Get Your Free Estimate Today
              </button>
            </Link>
            <Link to="/reviews">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-red-600 transition-all font-semibold">
                View More Success Stories
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
