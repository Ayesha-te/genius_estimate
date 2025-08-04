import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaRedoAlt,
  FaCreditCard,
  FaEnvelope,
  FaBalanceScale,
} from "react-icons/fa";

const RefundPolicy = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Refund Policy | Genius Estimate</title>
        <meta name="description" content="Learn about our fair and transparent refund policy for construction estimating services. We outline when refunds are available and our commitment to customer satisfaction." />
        <meta name="keywords" content="refund policy, construction estimating refund, money-back guarantee, construction takeoff services, estimation service refunds" />
        <link rel="canonical" href="https://geniusestimate.com/refund-policy" />
        
        {/* Breadcrumb structured data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://geniusestimate.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Refund Policy",
                  "item": "https://geniusestimate.com/refund-policy"
                }
              ]
            }
          `}
        </script>
      </Helmet>
      
      <section className="min-h-screen bg-[#fff7f2] text-[#0A1D37] py-16 px-[0.5rem] sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-[1500px] mx-auto">
          {/* 🟥 Heading on Top */}
          <div className="text-center mb-16">
            <h1
              style={{ fontFamily: "'Merriweather', serif" }}
              className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent leading-tight"
            >
              Refund Policy
            </h1>
            <p className="text-lg text-[#d35400] max-w-2xl mx-auto">
              At Genius Estimate, we are committed to delivering highly accurate,
              professional construction estimating and take-off services. Our work involves expert review, manual effort, and software-driven analysis—hence our refund policy is designed to be fair, transparent, and compliant with U.S, U.K and Australian regulations.
            </p>
          </div>

          {/* ✅ Policy Content */}
          <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 space-y-12">
            {/* ✅ Eligibility for Refunds */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-green-700">
                <FaCheckCircle className="mr-2" /> Eligibility for Refunds
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-800">
                <li>The delivered estimate is materially inaccurate or fails to meet the clearly defined scope you submitted.</li>
                <li>We are unable to deliver your estimate within the agreed timeframe without notifying you in advance.</li>
                <li>You cancel the order within 30 minutes of payment and before our team begins working on your project.</li>
              </ul>
            </section>

            {/* ❌ Non-Refundable Scenarios */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-red-700">
                <FaTimesCircle className="mr-2" /> Non-Refundable Scenarios
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-800">
                <li>The estimate was delivered as per the submitted plans and scope, and no fault lies with Genius Estimate.</li>
                <li>The client submits incomplete, vague, or unclear drawings, specifications, or scope of work.</li>
                <li>You change your mind after project delivery or are dissatisfied without valid, evidence-based reasoning.</li>
                <li>The client fails to respond to revision requests or clarifications during the process.</li>
              </ul>
            </section>

            {/* 🔄 Free Revisions */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-yellow-600">
                <FaRedoAlt className="mr-2" /> Free Revisions First
              </h2>
              <p className="text-gray-800 text-lg">
                Before issuing a refund, we will offer to revise the estimate at no extra cost, provided the issue is legitimate and stems from our end. We aim to ensure every client receives an estimate that meets their project's true requirements.
              </p>
            </section>

            {/* 💳 Processing Approved Refunds */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-orange-400">
                <FaCreditCard className="mr-2" /> Processing Approved Refunds
              </h2> 

              <ul className="list-disc list-inside space-y-2 text-gray-800">
                <li>Refunds are processed to the original payment method within 7–10 business days.</li>
                <li>Processing times may vary slightly depending on your payment method or provider.</li>
              </ul>
            </section>

            {/* 📩 How to Request a Refund */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-amber-600">
                <FaEnvelope className="mr-2" /> How to Request a Refund
              </h2>
              <p className="text-gray-800 text-lg mb-2">
                To request a refund or revision, email us at:
              </p>
              <p className="text-[#e67e22] font-semibold text-lg mb-4">
                📧 support@geniusestimate.com
              </p>
              <p className="text-gray-800 text-lg">Include:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-800">
                <li>Your full name and registered email</li>
                <li>Order or invoice number</li>
                <li>Reason for the request with any supporting documentation</li>
              </ul>
            </section>

            {/* ⚖️ Legal Compliance */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-yellow-500">
                <FaBalanceScale className="mr-2" /> Legal Compliance
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-800">
                <li>U.S. Federal Trade Commission (FTC) guidelines</li>
                <li>Australian Consumer Law (ACL)</li>
                <li>Terms required by major payment processors</li>
              </ul>
              <p className="mt-4 text-gray-800 text-lg">
                For any questions or disputes regarding your refund request, please contact us. We value your trust and aim to resolve every issue professionally and promptly.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default RefundPolicy;