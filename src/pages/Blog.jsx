import React from 'react';
import { Calendar, User, ArrowRight, Clock, Eye } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Tips for Accurate Construction Estimating",
      excerpt: "Learn the fundamental principles that can make or break your construction estimates. From material costs to labor calculations, we cover it all.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      views: "2.4k",
      image: "https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Estimating Tips"
    },
    {
      id: 2,
      title: "Digital Tools Revolutionizing Construction Estimating",
      excerpt: "Explore how modern software and AI are transforming the way we approach construction cost estimation and project planning.",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "6 min read",
      views: "1.8k",
      image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Technology"
    },
    {
      id: 3,
      title: "Common Mistakes in Residential Construction Estimates",
      excerpt: "Avoid costly errors in your residential projects. We break down the most frequent mistakes and how to prevent them.",
      author: "David Rodriguez",
      date: "March 10, 2024",
      readTime: "10 min read",
      views: "3.1k",
      image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Residential"
    },
    {
      id: 4,
      title: "Commercial vs Residential Estimating: Key Differences",
      excerpt: "Understanding the unique challenges and requirements when estimating commercial projects versus residential builds.",
      author: "Lisa Thompson",
      date: "March 8, 2024",
      readTime: "7 min read",
      views: "2.7k",
      image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Commercial"
    },
    {
      id: 5,
      title: "Material Cost Fluctuations: How to Stay Ahead",
      excerpt: "Navigate the volatile construction materials market with strategic planning and smart estimation techniques.",
      author: "Robert Kim",
      date: "March 5, 2024",
      readTime: "9 min read",
      views: "1.9k",
      image: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Market Trends"
    },
    {
      id: 6,
      title: "The Future of Construction Estimating: AI and Machine Learning",
      excerpt: "Discover how artificial intelligence is shaping the future of construction cost estimation and project management.",
      author: "Emma Wilson",
      date: "March 3, 2024",
      readTime: "12 min read",
      views: "4.2k",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Future Tech"
    }
  ];

  const categories = ["All", "Estimating Tips", "Technology", "Residential", "Commercial", "Market Trends", "Future Tech"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Construction Estimating Blog</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and insights in construction estimating
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-2xl p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-4">
                  The Complete Guide to Construction Cost Estimation in 2024
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Master the art and science of construction estimating with our comprehensive guide. 
                  From basic principles to advanced techniques, this resource covers everything you need to know.
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Expert Team</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>March 18, 2024</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>15 min read</span>
                  </div>
                </div>
                <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2">
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Featured article" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-3 hover:text-red-600 cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                    <button className="text-red-600 hover:text-red-700 font-medium flex items-center space-x-1">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-red-100 mb-8">
            Get the latest construction estimating insights delivered to your inbox weekly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Topics</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {['Construction Costs', 'Material Pricing', 'Labor Estimates', 'Project Management', 'Cost Control', 'Bid Preparation', 'Risk Assessment', 'Technology Trends'].map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-red-100 hover:text-red-600 cursor-pointer transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;