// SEO Configuration for Genius Estimate
export const seoConfig = {
  // Base URL
  baseUrl: 'https://geniusestimate.com',
  
  // Default meta tags
  defaultTitle: 'Genius Estimate | #1 Construction Estimating Services | 99% Accuracy | 24hr Turnaround',
  defaultDescription: '🏗️ Professional construction estimating & takeoff services with 99% accuracy. Trusted by 5000+ contractors. Get detailed estimates in 24-48 hours. Free quote!',
  defaultKeywords: 'construction estimating services, construction takeoff services, material takeoff services, construction cost estimating, construction estimation company, accurate construction bids, professional construction estimator, construction cost calculator, building cost estimator, residential construction estimating, commercial construction estimating, MEP estimating services',
  
  // Business Information
  businessInfo: {
    name: 'Genius Estimate',
    alternateName: 'Genius Estimate Construction Estimating Services',
    description: 'Professional construction estimating and material takeoff services for residential and commercial projects with 99% accuracy rate and 24-48 hour turnaround time.',
    phone: '+1 (919) 727-6105',
    email: 'info@geniusestimate.com',
    address: {
      streetAddress: '30 N Gould St Ste R',
      addressLocality: 'Sheridan',
      addressRegion: 'WY',
      postalCode: '82801',
      addressCountry: 'USA'
    },
    geo: {
      latitude: '44.7966',
      longitude: '-106.9561'
    },
    foundingDate: '2020',
    numberOfEmployees: '10-50',
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Check, Bank Transfer'
  },
  
  // Social Media Links
  socialMedia: {
    facebook: 'https://www.facebook.com/geniusestimate',
    linkedin: 'https://www.linkedin.com/company/genius-estimate',
    twitter: 'https://twitter.com/geniusestimate'
  },
  
  // Images
  images: {
    logo: 'https://geniusestimate.com/logo.png',
    ogImage: 'https://geniusestimate.com/og-image.jpg',
    twitterImage: 'https://geniusestimate.com/twitter-image.jpg'
  },
  
  // Rating Information
  rating: {
    ratingValue: '4.9',
    reviewCount: '150',
    bestRating: '5',
    worstRating: '1'
  },
  
  // Services
  services: [
    {
      name: 'Construction Takeoff Services',
      description: 'Detailed material takeoff and quantity surveying for construction projects',
      serviceType: 'Construction Takeoff'
    },
    {
      name: 'Construction Cost Estimating',
      description: 'Accurate cost estimation for residential and commercial construction projects',
      serviceType: 'Cost Estimating'
    },
    {
      name: 'MEP Estimating',
      description: 'Mechanical, Electrical, and Plumbing estimation services',
      serviceType: 'MEP Estimating'
    },
    {
      name: 'Residential Estimating',
      description: 'Specialized estimating services for residential construction projects',
      serviceType: 'Residential Estimating'
    },
    {
      name: 'Commercial Estimating',
      description: 'Professional estimating services for commercial construction projects',
      serviceType: 'Commercial Estimating'
    }
  ],
  
  // Areas Served
  areasServed: [
    { name: 'United States', code: 'US' },
    { name: 'Canada', code: 'CA' },
    { name: 'Australia', code: 'AU' },
    { name: 'United Kingdom', code: 'GB' }
  ],
  
  // Operating Hours
  operatingHours: {
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
    validFrom: '2024-01-01',
    validThrough: '2024-12-31'
  },
  
  // Page-specific SEO data
  pages: {
    home: {
      title: 'Genius Estimate | #1 Construction Estimating Services | 99% Accuracy | 24hr Turnaround',
      description: '🏗️ Professional construction estimating & takeoff services with 99% accuracy. Trusted by 5000+ contractors. Get detailed estimates in 24-48 hours. Free quote!',
      keywords: 'construction estimating services, construction takeoff services, material takeoff services, construction cost estimating, construction estimation company, accurate construction bids, professional construction estimator, construction cost calculator, building cost estimator',
      canonical: 'https://geniusestimate.com/'
    },
    about: {
      title: 'About Genius Estimate | Professional Construction Estimating Company',
      description: 'Learn about Genius Estimate, the leading construction estimating company with 99% accuracy rate. Our team of expert estimators has completed 5000+ projects.',
      keywords: 'about genius estimate, construction estimating company, professional estimators, construction cost experts, estimating team',
      canonical: 'https://geniusestimate.com/about'
    },
    pricing: {
      title: 'Construction Estimating Pricing | Affordable Rates | Genius Estimate',
      description: 'Get competitive pricing for professional construction estimating services. Transparent rates, no hidden fees. Free quotes available. Starting from $150.',
      keywords: 'construction estimating pricing, estimating service rates, construction takeoff cost, affordable estimating services',
      canonical: 'https://geniusestimate.com/pricing'
    },
    reviews: {
      title: 'Client Reviews & Testimonials | 4.9/5 Rating | Genius Estimate',
      description: 'Read verified reviews from our satisfied clients. Our construction estimating services have helped contractors win 40% more bids with 99% accuracy.',
      keywords: 'construction estimating reviews, construction takeoff testimonials, construction estimator feedback, customer reviews, contractor testimonials',
      canonical: 'https://geniusestimate.com/reviews'
    },
    contact: {
      title: 'Contact Genius Estimate | Get Free Quote | Construction Estimating',
      description: 'Contact Genius Estimate for professional construction estimating services. Get a free quote today. Call +1 (919) 727-6105 or email us.',
      keywords: 'contact genius estimate, construction estimating quote, free estimate quote, construction estimator contact',
      canonical: 'https://geniusestimate.com/contact'
    },
    faq: {
      title: 'FAQ | Construction Estimating Questions | Genius Estimate',
      description: 'Find answers to frequently asked questions about our construction estimating services, pricing, turnaround times, and more.',
      keywords: 'construction estimating FAQ, estimating questions, construction takeoff FAQ, estimating service questions',
      canonical: 'https://geniusestimate.com/faq'
    }
  }
};

// Helper function to generate structured data
export const generateStructuredData = (type = 'organization') => {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: seoConfig.businessInfo.name,
    alternateName: seoConfig.businessInfo.alternateName,
    url: seoConfig.baseUrl,
    logo: seoConfig.images.logo,
    image: [seoConfig.images.logo, seoConfig.images.ogImage],
    description: seoConfig.businessInfo.description,
    foundingDate: seoConfig.businessInfo.foundingDate,
    numberOfEmployees: seoConfig.businessInfo.numberOfEmployees,
    address: {
      '@type': 'PostalAddress',
      ...seoConfig.businessInfo.address
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...seoConfig.businessInfo.geo
    },
    sameAs: Object.values(seoConfig.socialMedia),
    contactPoint: [{
      '@type': 'ContactPoint',
      telephone: seoConfig.businessInfo.phone,
      contactType: 'customer service',
      availableLanguage: ['English'],
      areaServed: seoConfig.areasServed.map(area => area.code)
    }],
    aggregateRating: {
      '@type': 'AggregateRating',
      ...seoConfig.rating
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Construction Estimating Services',
      itemListElement: seoConfig.services.map(service => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          ...service
        }
      }))
    }
  };

  if (type === 'localBusiness') {
    baseData['@type'] = 'LocalBusiness';
    baseData.priceRange = seoConfig.businessInfo.priceRange;
    baseData.currenciesAccepted = seoConfig.businessInfo.currenciesAccepted;
    baseData.paymentAccepted = seoConfig.businessInfo.paymentAccepted;
    baseData.openingHoursSpecification = {
      '@type': 'OpeningHoursSpecification',
      ...seoConfig.operatingHours
    };
  }

  return baseData;
};

export default seoConfig;