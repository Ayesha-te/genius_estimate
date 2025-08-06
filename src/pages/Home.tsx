import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';
import Features from '../components/Features';
import WhyChooseUs from '../components/WhyChooseUs';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Genius Estimate | #1 Construction Estimating Services | 99% Accuracy | 24hr Turnaround</title>
        <meta name="description" content="🏗️ Professional construction estimating & takeoff services with 99% accuracy. Trusted by 5000+ contractors. Get detailed estimates in 24-48 hours. Free quote!" />
        <meta name="keywords" content="construction estimating services, construction takeoff services, material takeoff services, construction cost estimating, construction estimation company, accurate construction bids, professional construction estimator, construction cost calculator, building cost estimator, residential construction estimating, commercial construction estimating, MEP estimating services, electrical estimating, plumbing estimating, HVAC estimating, concrete estimating, roofing estimating, drywall estimating, construction bidding services, quantity surveying, construction project management, construction software, takeoff software, estimating software, construction consulting" />
        <link rel="canonical" href="https://geniusestimate.com/" />
        
        <!-- Additional SEO Meta Tags -->
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Genius Estimate" />
        <meta name="publisher" content="Genius Estimate" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        
        <!-- Business Schema -->
        <meta name="business:contact_data:phone_number" content="+1 (919) 727-6105" />
        <meta name="business:contact_data:website" content="https://geniusestimate.com" />
        
        {/* Enhanced Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://geniusestimate.com/" />
        <meta property="og:title" content="Genius Estimate | #1 Construction Estimating Services | 99% Accuracy" />
        <meta property="og:description" content="🏗️ Professional construction estimating & takeoff services with 99% accuracy. Trusted by 5000+ contractors. Get detailed estimates in 24-48 hours. Free quote!" />
        <meta property="og:image" content="https://geniusestimate.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Genius Estimate - Professional Construction Estimating Services" />
        <meta property="og:site_name" content="Genius Estimate" />
        <meta property="og:locale" content="en_US" />
        
        {/* Enhanced Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@geniusestimate" />
        <meta name="twitter:creator" content="@geniusestimate" />
        <meta name="twitter:url" content="https://geniusestimate.com/" />
        <meta name="twitter:title" content="Genius Estimate | #1 Construction Estimating Services | 99% Accuracy" />
        <meta name="twitter:description" content="🏗️ Professional construction estimating & takeoff services with 99% accuracy. Trusted by 5000+ contractors. Get detailed estimates in 24-48 hours. Free quote!" />
        <meta name="twitter:image" content="https://geniusestimate.com/twitter-image.jpg" />
        <meta name="twitter:image:alt" content="Genius Estimate - Professional Construction Estimating Services" />
        
        {/* Enhanced Schema.org markup for Organization and Service */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Genius Estimate",
              "alternateName": "Genius Estimate Construction Estimating Services",
              "url": "https://geniusestimate.com",
              "logo": "https://geniusestimate.com/logo.png",
              "image": [
                "https://geniusestimate.com/logo.png",
                "https://geniusestimate.com/og-image.jpg"
              ],
              "description": "Professional construction estimating and material takeoff services for residential and commercial projects with 99% accuracy rate and 24-48 hour turnaround time.",
              "foundingDate": "2020",
              "numberOfEmployees": "10-50",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "30 N Gould St Ste R",
                "addressLocality": "Sheridan",
                "addressRegion": "WY",
                "postalCode": "82801",
                "addressCountry": "USA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "44.7966",
                "longitude": "-106.9561"
              },
              "sameAs": [
                "https://www.facebook.com/geniusestimate",
                "https://www.linkedin.com/company/genius-estimate",
                "https://twitter.com/geniusestimate"
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+1 (919) 727-6105",
                  "contactType": "customer service",
                  "availableLanguage": ["English"],
                  "areaServed": ["US", "CA", "AU", "GB"]
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150",
                "bestRating": "5",
                "worstRating": "1"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Construction Estimating Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Construction Takeoff Services",
                      "description": "Detailed material takeoff and quantity surveying for construction projects",
                      "serviceType": "Construction Takeoff"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Construction Cost Estimating",
                      "description": "Accurate cost estimation for residential and commercial construction projects",
                      "serviceType": "Cost Estimating"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "MEP Estimating",
                      "description": "Mechanical, Electrical, and Plumbing estimation services",
                      "serviceType": "MEP Estimating"
                    }
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>
      
      <div>
        <Hero />
        <Features />
        <WhyChooseUs />
        <Stats />
        <Testimonials />
        <CTA />
      </div>
    </>
  );
};

export default Home;