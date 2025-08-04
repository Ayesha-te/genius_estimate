import React from 'react';
import { Helmet } from 'react-helmet';
import { UploadCloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const featureCards = [
  {
    icon: "⚡",
    title: "Quick Turnaround",
    content: (
      <ul className="list-disc pl-4 space-y-1 text-gray-700">
        <li><strong>Standard delivery:</strong> 24 to 48 hours</li>
        <li><strong>Smaller projects:</strong> Often delivered same day</li>
        <li><strong>Large/complex projects:</strong> Always delivered on a tight schedule</li>
      </ul>
    )
  },
  {
    icon: "💸",
    title: "Transparent Pricing",
    content: (
      <ul className="list-disc pl-4 space-y-1 text-gray-700">
        <li>Based on project size & complexity</li>
        <li>No extra fees for revisions</li>
        <li>95% of quotes accepted—our value is clear</li>
      </ul>
    )
  },
  {
    icon: "📦",
    title: "General Pricing Overview",
    content: (
      <ul className="list-disc pl-4 space-y-1 text-gray-700">
        <li>Single Trade: From $100 / £80</li>
        <li>Small Jobs: From $150 / £120</li>
        <li>Multi-Trade: Custom pricing</li>
        <li>Monthly Plans: Save up to 60%</li>
        <li>No Fees for revisions</li>
        <li>5-Minute Quotes only</li>
      </ul>
    )
  }
];

const packages = [
  {
    title: "🟩 Starter – $300/month",
    subtitle: "For: Small contractors",
    points: [
      "Up to 2 takeoffs/month (Residential/light commercial)",
      "Turnaround: 3–4 business days",
      "1 revision per estimate",
      "Email support"
    ],
    description: ""
  },
  {
    title: "🟦 Pro – $750/month",
    subtitle: "For: Growing builders",
    points: [
      "Up to 5 takeoffs/month (mix of trades)",
      "Includes labor + material cost estimate",
      "48–72 hr turnaround",
      "2 revisions per estimate",
      "Zoom/phone support (1 call/month)"
    ],
    description: ""
  },
  {
    title: "🟥 Premium – $1,500/month",
    subtitle: "For: Active contractors/bigger firms",
    points: [
      "Up to 10 takeoffs/month (any size)",
      "Full cost estimation + RSMeans pricing",
      "24–48 hr turnaround",
      "Unlimited revisions",
      "Priority delivery",
      "Dedicated project manager",
      "2 Zoom/phone consultations"
    ],
    description: ""
  },
  {
    title: "🟨 Custom Plan – Talk to sales",
    subtitle: "For: High-volume or specialized firms",
    points: [
      "Unlimited projects or enterprise pricing",
      "Dedicated estimator",
      "Weekly reports",
      "NDA and white-label options"
    ],
    description: ""
  }
];

// Generate structured data for pricing
const pricingOffers = packages.map((pkg, index) => {
  const prices = ["300", "750", "1500", "Custom"];
  const names = ["Starter", "Pro", "Premium", "Custom"];
  
  return {
    "@type": "Offer",
    "name": names[index],
    "description": pkg.subtitle,
    "price": prices[index],
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": prices[index],
      "priceCurrency": "USD",
      "billingIncrement": "month",
      "unitText": "month"
    }
  };
});

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Construction Estimating Pricing & Packages | Genius Estimate</title>
        <meta name="description" content="View our transparent pricing for construction estimating services. Monthly packages starting at $300/month with quick turnaround times and dedicated support." />
        <meta name="keywords" content="construction estimating pricing, construction takeoff services, material takeoff pricing, construction estimation cost, monthly estimating packages" />
        <link rel="canonical" href="https://geniusestimate.com/pricing" />
        
        {/* Schema.org markup for pricing */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Construction Estimating Services",
              "description": "Professional construction estimating and material takeoff services with transparent pricing and quick turnaround times.",
              "provider": {
                "@type": "Organization",
                "name": "Genius Estimate",
                "url": "https://geniusestimate.com"
              },
              "offers": ${JSON.stringify(pricingOffers)}
            }
          `}
        </script>
      </Helmet>
      
      <div className="bg-[#fff7f2] text-gray-800 min-h-screen py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Horizontal Features Section */}
          <div className="w-full flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {featureCards.map((card, idx) => (
                <div key={idx} className="bg-white border border-orange-200 rounded-2xl p-6 flex flex-col justify-between items-start shadow hover:shadow-lg transition min-h-[340px] h-full">
                  <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2 text-[#d35400]">
                    <span className="text-3xl">{card.icon}</span> {card.title}
                  </h3>
                  <div className="text-gray-800 text-base flex-1 w-full">{card.content}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Packages Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#d35400] mb-6">📦 Monthly Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {packages.map((pkg, idx) => {
                const borderColors = ['border-green-400', 'border-blue-400', 'border-red-400', 'border-yellow-400'];
                const bgColors = ['bg-green-50', 'bg-blue-50', 'bg-red-50', 'bg-yellow-50'];

                return (
                  <div
                    key={idx}
                    className={`rounded-xl shadow-md hover:shadow-lg transition p-6 text-left flex flex-col items-start border-2 ${borderColors[idx]} ${bgColors[idx]}`}
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{pkg.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{pkg.subtitle}</p>
                    <ul className="list-disc pl-5 text-gray-700 mb-3 space-y-1">
                      {pkg.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    <p className="text-gray-600 text-sm italic">{pkg.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
           {/* Add-ons */}
          <div className="text-left mt-8">
            <h3 className="text-xl font-semibold text-[#e67e22] mb-2">📌  Paid Separately</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Rush delivery (24hr) – $50/project</li>
              <li>Extra revisions – $20 each</li>
              <li>Value engineering suggestions – $50/project</li>
            </ul>
          </div>


          {/* CTA Section */}
          <div className="bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-2xl p-8 text-center shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">📥 Get a Custom Quote in Just Minutes</h3>
            <p className="mb-4">Here's how to get started:</p>
            <ol className="list-decimal pl-6 text-left max-w-lg mx-auto space-y-2 text-white">
              <li><strong>Upload your project drawings</strong></li>
              <li><strong>Complete the short contact form</strong></li>
              <li><strong>Receive a tailored quote in 5 minutes</strong>—no obligation</li>
            </ol>
            <p className="mt-4 text-yellow-100 font-medium">🎯 No long-term contracts. Just fast, reliable, and affordable estimating services.</p>

            <Link to="/contact" className="mt-6 inline-flex items-center bg-white text-red-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              <UploadCloud className="mr-2" />
              Upload Plans Now
            </Link>
          </div>

         

          {/* Contact Info */}
          <div className="text-center pt-12">
            <h4 className="text-xl font-semibold mb-2">Questions? Let's Talk.</h4>
            <p>We're available for clients across <strong>North America and the United Kingdom</strong>.</p>
            <p className="mt-2 font-medium text-[#e67e22]">📞 Call us at +1 347-480-1903</p>
            <p className="mt-2 font-medium text-[#e67e22]">📧 Mail us at sales@geniusestimate.com</p>
            <p className="text-sm text-gray-600">or message us through the contact page for international inquiries.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;