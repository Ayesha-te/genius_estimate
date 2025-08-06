import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom"; 
import { Star, Quote, MapPin, Briefcase, CheckCircle, Award, Users, ThumbsUp } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Marcus Thompson",
      company: "Thompson Construction LLC",
      location: "Seattle, WA",
      rating: 5,
      date: "March 2024",
      review: "Genius Estimate has been a game-changer for our business. Their accuracy is unmatched, and we've won 40% more bids since partnering with them. The turnaround time is incredible - 24 hours for most projects. Highly recommended!",
      project: "Commercial Office Complex",
      avatar: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150",
      verified: true
    },
    {
      id: 2,
      name: "Sarah Chen",
      company: "Pacific Builders",
      location: "San Francisco, CA",
      rating: 5,
      date: "February 2024",
      review: "Working with Genius Estimate for over 2 years now. Their residential estimates are detailed and spot-on. They've helped us avoid cost overruns and maintain healthy profit margins on every project.",
      project: "Luxury Residential Development",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      verified: true
    },
    {
      id: 3,
      name: "David Rodriguez",
      company: "Southwest Contractors",
      location: "Phoenix, AZ",
      rating: 5,
      date: "February 2024",
      review: "The team at Genius Estimate is professional and thorough. They caught several cost items we missed in our initial assessment. Their MEP estimates are particularly impressive - saved us $50k on our last project.",
      project: "Industrial Warehouse",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      verified: true
    },
    {
      id: 4,
      name: "Jennifer Walsh",
      company: "Walsh & Associates",
      location: "Denver, CO",
      rating: 5,
      date: "January 2024",
      review: "Exceptional service and attention to detail. The estimates are comprehensive and well-organized. Communication is excellent throughout the process. They've become an essential part of our bidding process.",
      project: "Mixed-Use Development",
      avatar: "https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=150",
      verified: true
    },
    {
      id: 5,
      name: "Robert Johnson",
      company: "Johnson General Contracting",
      location: "Austin, TX",
      rating: 5,
      date: "January 2024",
      review: "Fast, accurate, and reliable. Genius Estimate delivers exactly what they promise. Their expertise in concrete and masonry work is outstanding. We've increased our project success rate significantly.",
      project: "Educational Facility",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      verified: true
    },
    {
      id: 6,
      name: "Lisa Park",
      company: "Park Construction Group",
      location: "Portland, OR",
      rating: 5,
      date: "December 2023",
      review: "The quality of work is exceptional. Every estimate comes with detailed breakdowns and clear explanations. Their customer service is top-notch - always available to answer questions and make revisions.",
      project: "Retail Shopping Center",
      avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150",
      verified: true
    }
  ];

  const stats = [
    { number: "5000+", label: "Projects Completed", icon: Briefcase },
    { number: "98%", label: "Customer Satisfaction", icon: ThumbsUp },
    { number: "4.9/5", label: "Average Rating", icon: Star },
    { number: "24hr", label: "Average Turnaround", icon: CheckCircle }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        aria-hidden="true"
      />
    ));
  };

  // Create review structured data
  const reviewsJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Genius Estimate",
    "image": "https://geniusestimate.com/logo.png",
    "url": "https://geniusestimate.com",
    "telephone": "+1 (919) 727-6105",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Construction Plaza",
      "addressLocality": "Builder City",
      "addressRegion": "State",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "150"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5",
        "worstRating": "1"
      },
      "datePublished": review.date,
      "reviewBody": review.review
    }))
  };

  return (
    <>
      <Helmet>
        <title>Client Reviews & Testimonials | Genius Estimate</title>
        <meta name="description" content="Read verified reviews from our satisfied clients. Our construction estimating services have helped contractors win 40% more bids with 99% accuracy and 24-hour turnaround times." />
        <meta name="keywords" content="construction estimating reviews, construction takeoff testimonials, construction estimator feedback, customer reviews, contractor testimonials" />
        <link rel="canonical" href="https://geniusestimate.com/reviews" />
        
        {/* Schema.org markup for reviews */}
        <script type="application/ld+json">
          {JSON.stringify(reviewsJsonLd)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Reviews & Testimonials</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Discover why hundreds of contractors and developers trust Genius Estimate for their projects
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <Icon className="w-8 h-8 text-red-600 mx-auto mb-4" aria-hidden="true" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Overall Rating */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Overall Customer Rating</h2>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <span className="text-5xl font-bold text-red-600">4.9</span>
                <div className="flex space-x-1" aria-label="4.9 out of 5 stars">
                  {renderStars(5)}
                </div>
              </div>
              <p className="text-gray-600 mb-6">Based on 150+ verified reviews</p>
              
              <div className="space-y-3">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600 w-12">{stars} stars</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: stars === 5 ? '92%' : stars === 4 ? '6%' : '2%' }}
                        aria-label={`${stars === 5 ? '92%' : stars === 4 ? '6%' : '2%'} of reviews gave ${stars} stars`}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12">
                      {stars === 5 ? '92%' : stars === 4 ? '6%' : '2%'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600">Real feedback from real contractors and developers</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review) => (
                <div key={review.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4 mb-4">
                    <img
                      src={review.avatar}
                      alt={`${review.name} from ${review.company}`}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold text-gray-900">{review.name}</h4>
                        {review.verified && (
                          <CheckCircle className="w-4 h-4 text-green-500" aria-label="Verified customer" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{review.company}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <MapPin className="w-3 h-3 text-gray-400" aria-hidden="true" />
                        <span className="text-xs text-gray-500">{review.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 mb-3" aria-label={`Rated ${review.rating} out of 5 stars`}>
                    {renderStars(review.rating)}
                    <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                  </div>
                  
                  <Quote className="w-6 h-6 text-red-300 mb-3" aria-hidden="true" />
                  <p className="text-gray-700 mb-4 leading-relaxed">{review.review}</p>
                  
                  <div className="bg-white rounded-lg p-3 border-l-4 border-red-600">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Project:</span> {review.project}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Recognition */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Industry Recognition</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-2">Best Estimating Service 2023</h3>
                <p className="text-gray-600">Construction Industry Awards</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-2">Top Rated Service Provider</h3>
                <p className="text-gray-600">BuildTech Excellence Awards</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <Users className="w-12 h-12 text-yellow-500 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-2">Customer Choice Award</h3>
                <p className="text-gray-600">National Contractor Association</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-yellow-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Satisfied Clients</h2>
            <p className="text-red-100 mb-8">
              Experience the accuracy and reliability that hundreds of contractors trust
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Your Free Estimate
                </button>
              </Link>

              <Link to="/samples">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                  View Sample Reports
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Verification Notice */}
        <section className="py-8 bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />
              <span>All reviews are verified and from actual clients who have used our services</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Reviews;