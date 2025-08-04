import React, { useState } from 'react';
import { Send, CheckCircle, Heart, Star, Sparkles } from 'lucide-react';

const API_URL = "https://geniusestimate-button-backend.vercel.app/api/contact"; // <--- SET this to your backend deployment URL

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    projectSize: '',
    timeline: '',
    type: '',
    message: '',
    services: [],
    file: null
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((service) => service !== value),
      }));
    } else if (type === 'file') {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'services') {
        value.forEach((v) => data.append('services', v));
      } else if (value) {
        data.append(key, value);
      }
    });

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        body: data,
      });

      if (res.ok) {
        setShowAnimation(true);
        setTimeout(() => {
          setSubmitted(true);
          // Auto refresh after 2 seconds
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }, 1000);
      } else {
        alert('Sending failed!');
      }
    } catch (err) {
      alert('Error: ' + err.message);
    }
    setLoading(false);
  };

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

  // Clean Success Animation Modal
  const SuccessAnimation = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm mx-auto transform animate-bounce">
        <div className="text-center">
          {/* Success icon with subtle pulse */}
          <div className="relative mb-6">
            <div className="bg-green-500 rounded-full p-4 mx-auto w-fit">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>
          
          {/* Success message */}
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            🎉 Success!
          </h3>
          <p className="text-gray-600 mb-4">
            Your request has been sent successfully!
          </p>
          
          {/* Simple loading dots */}
          <div className="flex items-center justify-center space-x-1 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
          
          <p className="text-sm text-gray-500">
            We'll contact you within 2 hours!
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Animation Modal */}
      {showAnimation && <SuccessAnimation />}
      {/* Hero */}
      <section className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Genius Estimate</h1>
          <p className="text-lg text-red-100">
            Ready to get started? We’re here to provide expert construction estimating services.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Your Free Estimate</h2>

          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">Thank you!</h3>
              <p className="text-gray-600 mt-2">We’ll contact you within 2 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Type *</label>
                  <select
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  >
                    <option value="">Select project type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="renovation">Renovation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Size</label>
                  <select
                    name="projectSize"
                    value={formData.projectSize}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  >
                    <option value="">Select size</option>
                    <option value="under-50k">Under $50K</option>
                    <option value="50k-200k">$50K - $200K</option>
                    <option value="200k-500k">$200K - $500K</option>
                    <option value="500k-1m">$500K - $1M</option>
                    <option value="over-1m">Over $1M</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="24-48h">24-48 Hours</option>
                    <option value="1-week">Within 1 Week</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type *</label>
                  <select
                    name="type"
                    required
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  >
                    <option value="">Select type</option>
                    <option value="full-scope">Full Scope</option>
                    <option value="specific-trade">Specific Trade</option>
                  </select>
                </div>
              </div>

              {/* Upload File Section */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Upload PDF / Project Files</label>
                <input
                  type="file"
                  name="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  className="block w-auto text-sm font-bold text-gray-700 file:mr-4 file:py-1.5 file:px-4 file:rounded-lg file:border-0 file:bg-yellow-400 file:text-red-800 hover:file:bg-yellow-500"
                />
                {formData.file && (
  <p className="text-sm text-green-600 mt-1">Selected: {formData.file.name}</p>
)}
<p className="text-sm text-gray-500 mt-2">
  <strong>Note:</strong> If your file exceeds <span className="text-red-600 font-medium">2MB</span>, please upload it to your drive and share the link in the message field below.
</p>

              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Services Needed</label>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service) => (
                    <label key={service} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value={service}
                        checked={formData.services.includes(service)}
                        onChange={handleChange}
                        className="rounded border-gray-300 text-red-600"
                      />
                      <span className="text-sm text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Description</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-yellow-500 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center space-x-2"
                disabled={loading}
              >
                <Send className="w-4 h-4" />
                <span>{loading ? "Sending..." : "Submit Request"}</span>
              </button>

              <p className="text-xs text-center text-gray-500">
                By submitting, you agree to our privacy policy and terms.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;