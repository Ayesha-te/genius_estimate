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
        <title>Genius Estimate | Professional Construction Estimating Services</title>
        <meta name="description" content="Genius Estimate provides accurate construction estimating and material takeoff services for residential and commercial projects. 99% accuracy rate with 24-48 hour turnaround." />
        <meta name="keywords" content="construction estimating services, construction takeoff services, material takeoff services, construction cost estimating, construction estimation company, accurate construction bids" />
        <link rel="canonical" href="https://geniusestimate.com/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://geniusestimate.com/" />
        <meta property="og:title" content="Genius Estimate | Professional Construction Estimating Services" />
        <meta property="og:description" content="Accurate construction estimating and material takeoff services for residential and commercial projects. 99% accuracy rate with 24-48 hour turnaround." />
        <meta property="og:image" content="https://geniusestimate.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://geniusestimate.com/" />
        <meta property="twitter:title" content="Genius Estimate | Professional Construction Estimating Services" />
        <meta property="twitter:description" content="Accurate construction estimating and material takeoff services for residential and commercial projects. 99% accuracy rate with 24-48 hour turnaround." />
        <meta property="twitter:image" content="https://geniusestimate.com/twitter-image.jpg" />
        
        {/* Schema.org markup for Organization and Service */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Genius Estimate",
              "url": "https://geniusestimate.com",
              "logo": "https://geniusestimate.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/geniusestimate",
                "https://www.linkedin.com/company/genius-estimate"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-347-480-1903",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "service": {
                "@type": "Service",
                "name": "Construction Estimating Services",
                "serviceType": "Construction Estimating",
                "description": "Professional construction estimating and material takeoff services with 99% accuracy rate and 24-48 hour turnaround time.",
                "provider": {
                  "@type": "Organization",
                  "name": "Genius Estimate",
                  "url": "https://geniusestimate.com"
                }
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