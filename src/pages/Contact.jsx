import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, Calendar, Globe, Award } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    projectSize: '',
    timeline: '',
    message: '',
    services: []
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        services: checked 
          ? [...prev.services, value]
          : prev.services.filter(service => service !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle form submission logic here
  };

  const offices = [
    {
      city: "Seattle",
      state: "WA",
      address: "123 Construction Ave, Suite 200",
      phone: "+1 (555) 123-4567",
      email: "seattle@geniousestimate.com",
      hours: "Mon-Fri: 8AM-6PM PST"
    },
    {
      city: "Denver",
      state: "CO",
      address: "456 Builder's Blvd, Floor 3",
      phone: "+1 (555) 234-5678",
      email: "denver@geniousestimate.com",
      hours: "Mon-Fri: 8AM-6PM MST"
    },
    {
      city: "Austin",
      state: "TX",
      address: "789 Estimator Way, Suite 100",
      phone: "+1 (555) 345-6789",
      email: "austin@geniousestimate.com",
      hours: "Mon-Fri: 8AM-6PM CST"
    }
  ];

  const services = [
    "Residential Estimating",
    "Commercial Estimating",
    "Industrial Estimating",
    "Concrete & Masonry",
    "MEP Systems",
    "Electrical",
    "Value Engineering",
    "Construction Consulting"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Genius Estimate</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Ready to get started? We're here to provide expert construction estimating services for your next project
          </p>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Phone className="w-8 h-8 text-red-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-500">Available 24/7</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-red-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">info@geniousestimate.com</p>
              <p className="text-sm text-gray-500">Response in 2 hours</p>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-red-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
              <p className="text-gray-600">Mon-Fri: 8AM-6PM</p>
              <p className="text-sm text-gray-500">All time zones</p>
            </div>
            <div className="text-center">
              <Globe className="w-8 h-8 text-red-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Coverage Area</h3>
              <p className="text-gray-600">USA & Canada</p>
              <p className="text-sm text-gray-500">Nationwide service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Free Estimate</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 2 hours with a detailed quote for your project.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    Your request has been submitted successfully. We'll contact you within 2 hours to discuss your project.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      >
                        <option value="">Select project type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                        <option value="renovation">Renovation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="projectSize" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Size
                      </label>
                      <select
                        id="projectSize"
                        name="projectSize"
                        value={formData.projectSize}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      >
                        <option value="">Select project size</option>
                        <option value="under-50k">Under $50K</option>
                        <option value="50k-200k">$50K - $200K</option>
                        <option value="200k-500k">$200K - $500K</option>
                        <option value="500k-1m">$500K - $1M</option>
                        <option value="over-1m">Over $1M</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline for Estimate
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP (Rush Service)</option>
                      <option value="24-48h">24-48 Hours</option>
                      <option value="1-week">Within 1 Week</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Services Needed (check all that apply)
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {services.map((service) => (
                        <label key={service} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            value={service}
                            checked={formData.services.includes(service)}
                            onChange={handleChange}
                            className="rounded border-gray-300 text-red-600 focus:ring-red-600"
                          />
                          <span className="text-sm text-gray-700">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Please describe your project, include any special requirements, and let us know if you have plans or drawings ready..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-yellow-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-700 hover:to-yellow-600 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Request</span>
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Genius Estimate?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">99% Accuracy Rate</h4>
                      <p className="text-gray-600 text-sm">Industry-leading precision in all our estimates</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">24-48 Hour Turnaround</h4>
                      <p className="text-gray-600 text-sm">Fast delivery without compromising quality</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">15+ Years Experience</h4>
                      <p className="text-gray-600 text-sm">Proven expertise across all construction types</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Certified Estimators</h4>
                      <p className="text-gray-600 text-sm">AACE certified professionals on every project</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Contact */}
              <div className="bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
                <p className="text-red-100 mb-6">
                  Speak directly with one of our estimating experts for urgent projects or complex requirements.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <div>
                      <p className="font-semibold">Call Now: +1 (555) 123-4567</p>
                      <p className="text-sm text-red-100">Available 24/7 for urgent projects</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="w-5 h-5" />
                    <div>
                      <p className="font-semibold">Live Chat Support</p>
                      <p className="text-sm text-red-100">Instant answers to your questions</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5" />
                    <div>
                      <p className="font-semibold">Schedule Consultation</p>
                      <p className="text-sm text-red-100">Free 30-minute project discussion</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recognition */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="w-6 h-6 text-yellow-500" />
                  <h3 className="text-xl font-bold text-gray-900">Industry Recognition</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">✓ Best Estimating Service 2023 - Construction Industry Awards</p>
                  <p className="text-sm text-gray-600">✓ Top Rated Service Provider - BuildTech Excellence</p>
                  <p className="text-sm text-gray-600">✓ Customer Choice Award - National Contractor Association</p>
                  <p className="text-sm text-gray-600">✓ BBB A+ Rating with 500+ satisfied clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Office Locations</h2>
            <p className="text-xl text-gray-600">Strategic locations to serve you better across North America</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {office.city}, {office.state}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-red-600 mt-0.5" />
                    <p className="text-gray-600">{office.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-red-600" />
                    <a href={`tel:${office.phone}`} className="text-gray-600 hover:text-red-600">{office.phone}</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-red-600" />
                    <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-red-600">{office.email}</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-red-600" />
                    <p className="text-gray-600">{office.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;