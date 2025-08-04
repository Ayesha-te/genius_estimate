import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: (
      <>
        <p>
          By accessing or using this website and our services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please do not use our website or services.
        </p>
        <p>
          These Terms govern your use of Genius Estimate, including all services, features, tools, content, and communications provided by or through our platform.
        </p>
      </>
    ),
  },
  {
    title: "2. Services Provided",
    content: (
      <>
        <p>
          Genius Estimate provides construction estimating and material take-off services for contractors, builders, and developers across various sectors. All estimates are delivered digitally based on the project scope and client requirements.
        </p>
        <p>
          We do not provide engineering, architectural, or design services.
        </p>
      </>
    ),
  },
  {
    title: "3. User Eligibility",
    content: (
      <p>
        By using our website, you confirm that you are at least 18 years old and legally capable of entering into binding contracts in your jurisdiction.
      </p>
    ),
  },
  {
    title: "4. Quotes, Pricing & Payment",
    content: (
      <ul className="list-disc pl-6 text-base">
        <li>All quotes provided are based on project scope, complexity, and timeline.</li>
        <li>Prices may vary depending on project requirements.</li>
        <li>Estimates generally start from $100, and average around $200–$300, depending on services requested.</li>
        <li>Full payment is required before the estimate is delivered.</li>
        <li>Payments are securely processed via third-party platforms.</li>
        <li>We reserve the right to adjust our pricing and service offerings without prior notice.</li>
      </ul>
    ),
  },
  {
    title: "5. Turnaround Time",
    content: (
      <ul className="list-disc pl-6 text-base mb-2">
        <li>Standard turnaround: 24 to 48 hours</li>
        <li>Same-day delivery available for small projects</li>
        <li>Complex/multi-trade projects may require more time (clearly communicated in advance)</li>
      </ul>
    ),
  },
  {
    title: "",
    content: (
      <p>
        While we strive to meet agreed deadlines, Genius Estimate is not liable for any damages caused by delays due to unforeseen circumstances.
      </p>
    ),
  },
  {
    title: "6. Revisions & Modifications",
    content: (
      <>
        <p>
          We offer free minor revisions to estimates within 7 days of delivery if errors or discrepancies are found based on the original scope of work.
        </p>
        <p>
          Revisions due to scope changes or new drawings will be treated as a new request and may incur additional charges.
        </p>
      </>
    ),
  },
  {
    title: "7. Refund Policy",
    content: (
      <>
        <p>
          Due to the customized nature of our services, all sales are final. We do not offer refunds once work has begun or the estimate has been delivered.
        </p>
        <p>
          If you believe there is an issue with the quality or accuracy of your estimate, please contact us at{" "}
          <a href="mailto:support@geniusestimate.com" className="text-red-600 font-semibold">
            support@geniusestimate.com
          </a>, and we'll work to resolve it promptly.
        </p>
      </>
    ),
  },
  {
    title: "8. Intellectual Property",
    content: (
      <>
        <p>
          All content on this website, including designs, estimates, data, logos, and graphics, are the intellectual property of Genius Estimate and are protected by applicable copyright and trademark laws.
        </p>
        <p>
          You may not reproduce, modify, distribute, or commercially exploit any content without our written permission.
        </p>
      </>
    ),
  },
  {
    title: "9. Client Responsibilities",
    content: (
      <ul className="list-disc pl-6 text-base">
        <li>Provide clear, accurate project plans and information</li>
        <li>Communicate promptly during the estimation process</li>
        <li>Review the delivered estimate and notify us of any issues within 7 days</li>
        <li>Use our estimates only for legal, non-infringing purposes</li>
      </ul>
    ),
  },
  {
    title: "10. Limitation of Liability",
    content: (
      <ul className="list-disc pl-6 text-base mb-2">
        <li>Any indirect, incidental, or consequential damages</li>
        <li>Delays due to incomplete information or third-party delays</li>
        <li>Business losses resulting from reliance on the estimate for securing projects</li>
        <li>Our total liability shall not exceed the amount paid for the estimate.</li>
      </ul>
    ),
  },
  {
    title: "11. Third-Party Tools & Links",
    content: (
      <p>
        Our website may include links to third-party tools or platforms (e.g., payment gateways). We do not control or endorse their content, and we are not responsible for their terms or privacy practices.
      </p>
    ),
  },
  {
    title: "12. Data Privacy",
    content: (
      <p>
        All user information is handled in accordance with our Privacy Policy. By using our services, you consent to the collection and use of your data as described therein.
      </p>
    ),
  },
  {
    title: "14. Amendments to These Terms",
    content: (
      <p>
        Genius Estimate reserves the right to update or modify these Terms at any time. Changes will be posted on this page with the updated effective date. Continued use of our services constitutes acceptance of the new terms.
      </p>
    ),
  },
  {
    title: "15. Contact Information",
    content: (
      <div>
        <p>For questions about these Terms & Conditions, please contact us at:</p>
        <ul className="list-none pl-0 mt-2">
          <li><span className="font-bold">Genius Estimate</span></li>
          <li>Email: <a href="mailto:support@geniusestimate.com" className="text-red-600 font-semibold">support@geniusestimate.com</a></li>
          <li>Website: <a href="https://www.geniusestimate.com" className="text-yellow-500 font-semibold">www.geniusestimate.com</a></li>
        </ul>
      </div>
    ),
  },
];

const TermsAndConditions = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Genius Estimate</title>
        <meta name="description" content="Read our terms and conditions for using Genius Estimate's construction estimating services. Learn about our pricing, turnaround times, revision policies, and more." />
        <meta name="keywords" content="terms and conditions, construction estimating terms, estimate service agreement, payment terms, turnaround time, revision policy" />
        <link rel="canonical" href="https://geniusestimate.com/terms" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://geniusestimate.com/terms" />
        <meta property="og:title" content="Terms and Conditions | Genius Estimate" />
        <meta property="og:description" content="Read our terms and conditions for using Genius Estimate's construction estimating services. Learn about our pricing, turnaround times, revision policies, and more." />
        
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
                  "name": "Terms and Conditions",
                  "item": "https://geniusestimate.com/terms"
                }
              ]
            }
          `}
        </script>
      </Helmet>
      
      <section className="min-h-screen bg-[#fff7f2] text-[#0A1D37] py-20 px-[0.5rem] sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center mb-16">
            <h1
              style={{ fontFamily: "'Merriweather', serif" }}
              className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent leading-tight"
            >
              Terms & Conditions
            </h1>
            <p className="text-lg text-[#d35400] max-w-xl mx-auto">
              Please read our terms carefully before using our services.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 space-y-12">
            {sections.map((section, idx) => (
              <div key={idx} className="space-y-3 scroll-mt-20" id={`section-${idx}`}>
                {section.title && (
                  <h2
                    style={{ fontFamily: "'Merriweather', serif" }}
                    className="text-2xl font-extrabold text-[#d35400] mb-2"
                  >
                    {section.title}
                  </h2>
                )}
                <div className="text-base leading-relaxed text-[#0A1D37]/90">{section.content}</div>
                <div className="border-b border-orange-100 mt-3" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;