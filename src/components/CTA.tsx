import React, { useRef, useEffect, useState } from "react";
import { ArrowRight, Phone, Mail, MapPin, CheckCircle, Heart, Star, Sparkles } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet"; // You'll need to install this package

const CTA = () => {
  const formRef = useRef(null);
  const location = useLocation();
  const [showAnimation, setShowAnimation] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  /* ─────────────────────────  Scroll to form if #estimate‑form in URL  ───────────────────────── */
  useEffect(() => {
    if (location.hash === "#estimate-form" && formRef.current) {
      setTimeout(() => {
        formRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  /* ───────────────────────────  Submit handler  ─────────────────────────── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;

    const data = {
      name: `${form.firstName.value} ${form.lastName.value}`,
      email: form.email.value,
      company: form.company.value,
      message: form.message.value,
      projectType: form.projectType.value,
    };

    try {
      const res = await fetch(
        "https://geniusestimate-backend-main.vercel.app/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await res.json();
      if (result.success) {
        setShowAnimation(true);
        setTimeout(() => {
          setSubmitted(true);
          // Auto refresh after 2 seconds
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }, 1000);
      } else {
        alert("Error: " + (result.error || "Unknown error"));
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
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
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-4 mx-auto w-fit">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>
          
          {/* Success message */}
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            🎉 Request Sent!
          </h3>
          <p className="text-gray-600 mb-4">
            Your estimate request has been sent successfully!
          </p>
          
          {/* Simple loading dots */}
          <div className="flex items-center justify-center space-x-1 mb-4">
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
          
          <p className="text-sm text-gray-500">
            We'll contact you within 2 hours!
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Success Animation Modal */}
      {showAnimation && <SuccessAnimation />}
      
      <Helmet>
        <title>Get Your Free Construction Estimate | Genius Estimate</title>
        <meta name="description" content="Request your accurate construction estimate today. Our professional construction estimators provide accurate bids for residential, commercial, and industrial projects." />
        <meta name="keywords" content="construction estimating services, get construction estimate online, accurate construction bids, professional construction estimators, construction estimating services near me" />
        <link rel="canonical" href="https://geniusestimate.com/estimate" />
      </Helmet>
      
      <section className="py-20 bg-white text-[#0A1D37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-10">
          {/* ───────── Left column – contact details ───────── */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-4xl font-bold mb-3">
              Ready to Get Your{" "}
              <span className="bg-gradient-to-r from-yellow-500 via-yellow-500 to-red-600 bg-clip-text text-transparent">
                Genius Estimate
              </span>
              ?
            </h3>
            <p className="text-xl text-[#5C6B82] mb-8">
              Let's begin your free consultation
            </p>

            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <span className="w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#FF7F50] via-[#FFB347] to-[#FF4500]">
                  <Phone className="w-7 h-7 text-white" />
                </span>
                <div>
                  <p className="font-bold text-lg">Call Us</p>
                  <p className="text-[#5C6B82]">+1 (555) 123‑4567</p>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <span className="w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#FF7F50] via-[#FFB347] to-[#FF4500]">
                  <Mail className="w-7 h-7 text-white" />
                </span>
                <div>
                  <p className="font-bold text-lg">Email Us</p>
                  <p className="text-[#5C6B82]">sales@geniusestimate.com</p>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <span className="w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#FF7F50] via-[#FFB347] to-[#FF4500]">
                  <MapPin className="w-7 h-7 text-white" />
                </span>
                <div>
                  <p className="font-bold text-lg">Visit Us</p>
                  <p className="text-[#5C6B82]">
                    123 Construction Plaza, Builder City
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* ───────── Right column – estimate form ───────── */}
          <div className="w-full lg:w-1/2 bg-[#F9FAFB] p-8 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold mb-6">Request an Estimate</h4>
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Thank you!</h3>
                <p className="text-gray-600 mt-2">We'll contact you within 2 hours.</p>
              </div>
            ) : (
              <form
                ref={formRef}
                id="estimate-form"
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
              <input
                name="firstName"
                placeholder="First Name"
                required
                className="col-span-1 border border-gray-300 p-3 rounded"
              />
              <input
                name="lastName"
                placeholder="Last Name"
                required
                className="col-span-1 border border-gray-300 p-3 rounded"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="col-span-1 md:col-span-2 border border-gray-300 p-3 rounded"
              />
              <input
                name="company"
                placeholder="Company"
                className="col-span-1 md:col-span-2 border border-gray-300 p-3 rounded"
              />
              <select
                name="projectType"
                className="col-span-1 md:col-span-2 border border-gray-300 p-3 rounded"
              >
                <option value="">Project Type (optional)</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Industrial">Industrial</option>
              </select>
              <textarea
                name="message"
                rows="4"
                placeholder="Project details / message"
                required
                className="col-span-1 md:col-span-2 border border-gray-300 p-3 rounded"
              />
              <button
                type="submit"
                className="col-span-1 md:col-span-2 mt-2 flex items-center justify-center bg-gradient-to-r from-yellow-500 to-red-600 text-white font-semibold py-3 rounded hover:opacity-90 transition"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Request"}
                {!loading && <ArrowRight className="ml-2 w-5 h-5" />}
              </button>
            </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;