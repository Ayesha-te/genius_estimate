import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const sections = [
  {
    title: "1. Overview",
    content: (
      <>
        <p>
          At Genius Estimate, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, store, and disclose your information when you use our website and services. By using our website, you agree to the practices described in this policy.
        </p>
        <p>
          We comply with applicable data protection and privacy laws in the United States, including the California Consumer Privacy Act (CCPA) and CAN-SPAM Act, and in Australia, including the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
        </p>
      </>
    ),
  },
  {
    title: "2. Information We Collect",
    content: (
      <>
        <h4 className="font-semibold mb-2">a) Personal Information</h4>
        <ul className="list-disc pl-6 mb-4 text-base">
          <li>Name, email address, phone number</li>
          <li>Company name and project details</li>
          <li>Billing and shipping address</li>
          <li>Payment information (processed securely via third-party payment processors)</li>
        </ul>
        <h4 className="font-semibold mb-2">b) Non-Personal Information</h4>
        <ul className="list-disc pl-6 text-base">
          <li>IP address, browser type, device information</li>
          <li>Pages visited, time spent on site, and usage patterns (via cookies and analytics tools)</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. How We Use Your Information",
    content: (
      <ul className="list-disc pl-6 text-base">
        <li>Deliver our estimating and take-off services</li>
        <li>Respond to inquiries and provide support</li>
        <li>Process payments securely</li>
        <li>Send updates, service notifications, and marketing (you may opt-out at any time)</li>
        <li>Improve our website, services, and user experience</li>
        <li>Comply with legal obligations</li>
      </ul>
    )
  },
  {
    title: "4. Disclosure of Information",
    content: (
      <>
        <p>We do not sell or rent your personal data. We may share your information with:</p>
        <ul className="list-disc pl-6 text-base mb-2">
          <li>Trusted third-party service providers (e.g., payment processors, cloud services)</li>
          <li>Legal or regulatory authorities when required by law</li>
          <li>Business partners only with your consent</li>
        </ul>
        <p>All third-party providers are obligated to keep your data secure and confidential.</p>
      </>
    )
  },
  {
    title: "5. Cookies and Tracking Technologies",
    content: (
      <p>
        We use cookies and tracking tools to analyse site traffic, personalize content, and improve functionality. You may disable cookies via your browser settings, but some features of the site may not function properly.
      </p>
    ),
  },
  {
    title: "6. Data Storage and Security",
    content: (
      <>
        <p>
          Your data is stored on secure servers using industry-standard encryption protocols (SSL/TLS). We implement administrative, technical, and physical safeguards to protect your information against unauthorized access, misuse, or disclosure.
        </p>
        <p>
          All payment transactions are processed via PCI-compliant gateways and we do not store full credit card information on our servers.
        </p>
      </>
    ),
  },
  {
    title: "7. International Users",
    content: (
      <p>
        If you are accessing our website from outside the United States, you agree that your information may be transferred to and processed in the United States and other countries where our third-party providers operate, in accordance with this policy.
      </p>
    ),
  },
  {
    title: "8. Your Rights",
    content: (
      <>
        <p>Depending on your location, you may have the right to:</p>
        <ul className="list-disc pl-6 text-base mb-2">
          <li>Access, update, or delete your personal information</li>
          <li>Request a copy of your data</li>
          <li>Opt out of marketing communications</li>
          <li>File a complaint with your local data protection authority</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at: <a href="mailto:support@geniusestimate.com" className="text-red-600 font-semibold">support@geniusestimate.com</a>
        </p>
      </>
    )
  },
  {
    title: "9. Children's Privacy",
    content: (
      <p>
        Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If we discover such data, it will be deleted promptly.
      </p>
    ),
  },
  {
    title: "10. Policy Updates",
    content: (
      <p>
        We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with a revised effective date. We encourage you to review this policy periodically.
      </p>
    ),
  },
  {
    title: "11. Contact Us",
    content: (
      <div>
        <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:</p>
        <ul className="list-none pl-0 mt-2">
          <li><span className="font-bold">Genius Estimate</span></li>
          <li>Email: <a href="mailto:support@geniusestimate.com" className="text-red-600 font-semibold">support@geniusestimate.com</a></li>
          <li>Website: <a href="https://www.geniusestimate.com" className="text-yellow-500 font-semibold">www.geniusestimate.com</a></li>
        </ul>
      </div>
    ),
  },
];

const PrivacyPolicy = () => {
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
        <title>Privacy Policy | Genius Estimate</title>
        <meta name="description" content="Read our privacy policy to understand how Genius Estimate collects, uses, and protects your personal information. We are committed to safeguarding your data and privacy rights." />
        <meta name="keywords" content="privacy policy, data protection, construction estimating privacy, CCPA compliance, Australian Privacy Principles" />
        <link rel="canonical" href="https://geniusestimate.com/privacy-policy" />
        
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
                  "name": "Privacy Policy",
                  "item": "https://geniusestimate.com/privacy-policy"
                }
              ]
            }
          `}
        </script>
      </Helmet>
      
      <section className="min-h-screen bg-[#fff7f2] text-[#0A1D37] py-16 px-[0.5rem] sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center mb-16">
            <h1
              style={{ fontFamily: "'Merriweather', serif" }}
              className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent leading-tight"
            >
              Privacy Policy
            </h1>
            <p className="text-lg text-[#d35400] max-w-2xl mx-auto">
              Your privacy matters. Please read our policy below.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 space-y-12">
            {sections.map((section, idx) => (
              <section key={idx} className="space-y-3 scroll-mt-20" id={`section-${idx}`}>
                <h2
                  style={{ fontFamily: "'Merriweather', serif" }}
                  className="text-2xl font-extrabold text-[#d35400] mb-2"
                >
                  {section.title}
                </h2>
                <div className="text-base leading-relaxed text-[#0A1D37]/90">{section.content}</div>
                <div className="border-b border-orange-100 mt-3" />
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;