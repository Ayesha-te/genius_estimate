import React, { useState } from 'react';

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://geniusestimate-backend-main.vercel.app/api/contact", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        const data = await res.json();
        setError(data.message || 'Something went wrong.');
      }
    } catch (err) {
      setError('Server error. Please try again later.');
    }
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-[#e67e22] py-12 text-white text-center">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-lg">Get in touch for quick estimates or inquiries.</p>
      </div>

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Send Us a Message</h2>
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
            >
              Send Message
            </button>
            {success && <p className="text-green-600">Message sent successfully!</p>}
            {error && <p className="text-red-600">{error}</p>}
          </form>
        </div>

        {/* Office Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Office</h2>
          <p className="mb-3 text-gray-600">
            <strong>Address:</strong><br />
            123 Main Street, Suite 101<br />
            Los Angeles, CA, 90001
          </p>
          <p className="mb-3 text-gray-600">
            <strong>Phone:</strong><br />
            +1 (123) 456-7890
          </p>
          <p className="mb-3 text-gray-600">
            <strong>Email:</strong><br />
            sales@geniusestimate.com
          </p>

          <div className="mt-6">
            <iframe
              src="https://maps.google.com/maps?q=Los%20Angeles&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
