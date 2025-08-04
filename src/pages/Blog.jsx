import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import c1 from '../assets/c1.jpg';
import c2 from '../assets/c2.jpg';
import c3 from '../assets/c3.jpg';
import c4 from '../assets/c4.jpg';
import c5 from '../assets/c5.jpg';
import c6 from '../assets/c6.jpg';
import c7 from '../assets/c7.jpg';
const blogs = [
  {
    id: 1,
    title: "Why Contractors Lose Bids — and How to Avoid It",
    image: c1,
    link: "/blogs/blog1",
    description: "Read how they're losing bids not because of their work, but because of how they bid.",
  },
  {
    id: 2,
    title: "How Accurate Estimating Helps Contractors Win Projects",
    image: c2,
    link: "/blogs/blog2",
    description: "Learn how bidding accurately, confidently, and quickly gives you an edge.",
  },
  {
    id: 3,
    title: "The True Cost of Underbidding (And How to Prevent It)",
    image: c3,
    link: "/blogs/blog3",
    description: "Underbidding can damage your business far more than it helps. Discover why.",
  },
  {
    id: 4,
    title: "How Outsourced Estimating Saves 60% in Overhead",
    image: c4,
    link: "/blogs/blog4",
    description: "Outsourced estimating services can cut your overhead costs by up to 60%.",
  },
  {
    id: 5,
    title: "Estimating in a Post-Pandemic World: New Challenges & Strategies",
    image: c5,
    link: "/blogs/blog5",
    description: "Explore the evolving landscape of construction estimating in the wake of COVID-19.",
  },
  {
    id: 6,
    title: "HVAC Estimating: Key Considerations for Accurate Bids",
    image: c6,
    link: "/blogs/blog6",
    description: "Learn the essential factors for precise HVAC estimating to win more projects.",
  },
  {
    id: 7,
    title: "The Future of Construction Estimating: Trends to Watch",
    image: c7,
    link: "/blogs/blog7",
    description: "Discover emerging technologies and strategies shaping the future of construction estimating.",
  }
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Construction Estimating Blog | Tips & Insights | Genius Estimate</title>
        <meta name="description" content="Expert construction estimating tips, strategies, and industry insights. Learn how to win more bids, avoid underbidding, and increase your project profitability." />
        <meta name="keywords" content="construction estimating blog, construction estimating tips, construction bidding tips, construction cost estimating, HVAC estimating, outsource construction estimating" />
        <link rel="canonical" href="https://geniusestimate.com/blogs" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://geniusestimate.com/blogs" />
        <meta property="og:title" content="Construction Estimating Blog | Tips & Insights | Genius Estimate" />
        <meta property="og:description" content="Expert construction estimating tips, strategies, and industry insights. Learn how to win more bids, avoid underbidding, and increase your project profitability." />
        <meta property="og:image" content="https://geniusestimate.com/blog-cover.jpg" />
        
        {/* Schema.org markup for Blog */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Genius Estimate Construction Estimating Blog",
              "url": "https://geniusestimate.com/blogs",
              "description": "Expert construction estimating tips, strategies, and industry insights to help contractors win more bids and increase profitability.",
              "publisher": {
                "@type": "Organization",
                "name": "Genius Estimate",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://geniusestimate.com/logo.png"
                }
              },
              "blogPost": [
                ${blogs.map(blog => `{
                  "@type": "BlogPosting",
                  "headline": "${blog.title}",
                  "image": "https://geniusestimate.com${blog.image}",
                  "url": "https://geniusestimate.com${blog.link}",
                  "description": "${blog.description}",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Genius Estimate",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://geniusestimate.com/logo.png"
                    }
                  }
                }`).join(',')}
              ]
            }
          `}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Construction Estimating Blog</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and insights in construction estimating
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <article
                  key={blog.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {blog.description}
                    </p>
                    <div className="mt-auto">
                      <Link
                        to={blog.link}
                        className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-yellow-500 text-white font-semibold px-4 py-2 rounded hover:from-red-700 hover:to-yellow-600 transition w-full text-center"
                      >
                        View Blog
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;