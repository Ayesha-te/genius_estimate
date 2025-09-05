import React, { useState } from 'react';
import { Heart, Star, Sparkles, CheckCircle } from 'lucide-react';

const contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    company: '',
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://geniusestimate-backend-main.vercel.app/api/contact", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setShowAnimation(true);
        setTimeout(() => {
          setSuccess(true);
          // Auto refresh after 2 seconds
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }, 1000);
      } else {
        const data = await res.json();
        setError(data.message || 'Something went wrong.');
      }
    } catch (err) {
      setError('Server error. Please try again later.');
    }
    setLoading(false);
  };

  // Clean Success Animation Modal
  const SuccessAnimation = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm mx-auto transform animate-bounce">
        <div className="text-center">
          {/* Success icon */}
          <div className="relative mb-6">
            <div className="bg-orange-500 rounded-full p-4 mx-auto w-fit">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>
          
          {/* Success message */}
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            🎉 Message Sent!
          </h3>
          <p className="text-gray-600 mb-4">
            Your message has been sent successfully!
          </p>
          
          {/* Simple loading dots */}
          <div className="flex items-center justify-center space-x-1 mb-4">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
          
          <p className="text-sm text-gray-500">
            We'll get back to you soon!
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      {/* Success Animation Modal */}
      {showAnimation && <SuccessAnimation />}
      {/* Hero */}
      <div className="bg-[#e67e22] py-12 text-white text-center">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-lg">Get in touch for quick estimates or inquiries.</p>
      </div>

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Send Us a Message</h2>
          {success ? (
            <div className="text-center py-12">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">Thank you!</h3>
              <p className="text-gray-600 mt-2">We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded"
            />
            <input
              type="text"
              name="company"
              placeholder="Your Company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-[#e67e22] hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {error && <p className="text-red-600">{error}</p>}
          </form>
          )}
        </div>

        {/* Office Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Office</h2>
          <p className="mb-3 text-gray-600">
            <strong>Address:</strong><br />
            113-C, Satellite Town<br />
            Rahim Yar Khan, Punjab, Pakistan, 64200
          </p>
           <p className="mb-3 text-gray-600">
            <strong>Address:</strong><br />
           30 N Gould st ste R<br />
            Sheridan, WY, 82801
          </p>
          <p className="mb-3 text-gray-600">
            <strong>Phone:</strong><br />
            +1 (919) 727-6105
          </p>
          <p className="mb-3 text-gray-600">
            <strong>Phone:</strong><br />
            +92-301-4841705
          </p>
          <p className="mb-3 text-gray-600">
            <strong>Email:</strong><br />
            sales@geniusestimate.com
          </p>

          <div className="mt-6">
            <iframe
              src="https://maps.google.com/maps?q=113-C%20Satellite%20Town%2C%20Rahim%20Yar%20Khan%2C%20Punjab%2C%20Pakistan%2C%2064200&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="250"
              className="rounded border"
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactus;
