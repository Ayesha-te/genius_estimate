import React, { useRef, useEffect } from "react";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { useLocation } from "react-router-dom";

const CTA = () => {
  const formRef = useRef(null);
  const location = useLocation();

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
        alert("Your estimate request was sent successfully!");
        form.reset();
      } else {
        alert("Error: " + (result.error || "Unknown error"));
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
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
            Let’s begin your free consultation
          </p>

          <ul className="space-y-6">
            <li className="flex items-center gap-4">
              <span className="w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#FF7F50] via-[#FFB347] to-[#FF4500]">
                <Phone className="w-7 h-7 text-white" />
              </span>
              <div>
                <p className="font-bold text-lg">Call Us</p>
                <p className="text-[#5C6B82]">+1 (555) 123‑4567</p>
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
                  123 Construction Plaza, Builder City
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* ───────── Right column – estimate form ───────── */}
        <div className="w-full lg:w-1/2 bg-[#F9FAFB] p-8 rounded-lg shadow-md">
          <h4 className="text-2xl font-semibold mb-6">Request an Estimate</h4>
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
            >
              Send Request
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
