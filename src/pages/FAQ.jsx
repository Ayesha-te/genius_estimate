import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Search, HelpCircle, Clock, DollarSign, FileText, Users, Phone, Mail } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      category: "General Questions",
      icon: HelpCircle,
      faqs: [
        {
          question: "What is construction estimating?",
          answer: "Construction estimating is the process of calculating the total cost of a construction project, including materials, labor, equipment, overhead, and profit margins. It involves analyzing architectural drawings, specifications, and site conditions to provide accurate cost predictions."
        },
        {
          question: "How accurate are your estimates?",
          answer: "Our estimates maintain a 99% accuracy rate. We use advanced software, current market data, and have over 15 years of experience. Our detailed analysis includes material costs, labor rates, equipment needs, and potential contingencies to ensure precision."
        },
        {
          question: "What types of projects do you estimate?",
          answer: "We handle all types of construction projects including residential homes, commercial buildings, industrial facilities, renovations, and infrastructure projects. Our expertise covers all major trades from concrete to MEP systems."
        },
        {
          question: "Do you provide estimates nationwide?",
          answer: "Yes, we provide construction estimating services across the United States and Canada. Our team is familiar with regional pricing variations, local codes, and market conditions in different areas."
        }
      ]
    },
    {
      category: "Pricing & Turnaround",
      icon: DollarSign,
      faqs: [
        {
          question: "How much do your estimating services cost?",
          answer: "Our pricing varies based on project size and complexity. Residential projects start at $99, commercial projects at $199, and comprehensive packages at $299. We offer competitive rates with no hidden fees and provide detailed cost breakdowns."
        },
        {
          question: "How long does it take to get an estimate?",
          answer: "Most estimates are completed within 24-48 hours. Simple residential projects may be ready in 12-24 hours, while complex commercial projects might take 2-3 days. We always provide realistic timelines upfront and keep you updated on progress."
        },
        {
          question: "Do you offer rush services?",
          answer: "Yes, we offer expedited services for urgent projects. Rush estimates can typically be completed within 12-24 hours for an additional fee. Contact us to discuss your timeline and we'll accommodate your needs whenever possible."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, PayPal, bank transfers, and cheques. Payment is 100% advance. We also offer payment plans for large projects."
        }
      ]
    },
    {
      category: "Process & Requirements",
      icon: FileText,
      faqs: [
        {
          question: "What information do you need to provide an estimate?",
          answer: "We need  drawings, specifications, project location, timeline, and any special requirements. For basic estimates, even rough sketches or plans work. The more detailed information you provide, the more accurate our estimate will be."
        },
        {
          question: "Can you work with incomplete plans?",
          answer: "Yes, we can work with preliminary drawings, sketches, or conceptual designs. We'll note any assumptions made and can update the estimate as more detailed information becomes available. This helps with early project planning and budgeting."
        },
        {
          question: "How do you handle change orders or revisions?",
          answer: "We offer one free minor revision per estimate. Additional revisions or significant changes are charged at our standard hourly rate. We track all changes and provide clear documentation of cost impacts for your records."
        },
        {
          question: "Do you provide material takeoffs separately?",
          answer: "Yes, we can provide detailed material takeoffs as a standalone service or as part of a comprehensive estimate. Our takeoffs include quantities, specifications, and waste factors for all materials needed for your project."
        }
      ]
    },
    {
      category: "Technology & Tools",
      icon: Clock,
      faqs: [
        {
          question: "What software do you use for estimates?",
          answer: "We use industry-leading software including PlanSwift, Bluebeam Revu, RSMeans data, and custom databases. Our technology stack ensures accuracy, efficiency, and detailed reporting for all project types."
        },
        {
          question: "Can you integrate with our project management software?",
          answer: "Yes, we can export estimates in various formats compatible with popular project management and accounting software including Procore, Buildertrend, QuickBooks, and others. We work with your existing workflows."
        },
        {
          question: "Do you provide digital deliverables?",
          answer: "All estimates are delivered digitally in PDF format with detailed Excel spreadsheets. We also provide Swiftjob takeoff files, quantity schedules, and any supporting documentation you need for your project."
        },
        {
          question: "How do you stay current with material prices?",
          answer: "We subscribe to multiple pricing databases including RSMeans, regional suppliers, and maintain relationships with material vendors. Our prices are updated regularly to reflect current market conditions and regional variations."
        }
      ]
    },
    {
      category: "Support & Communication",
      icon: Users,
      faqs: [
        {
          question: "How do I communicate with your team during the project?",
          answer: "Each project is assigned a dedicated estimator who will be your primary point of contact. You can reach them via email, phone, or our client portal. We provide regular updates and are always available for questions."
        },
        {
          question: "What if I have questions after receiving my estimate?",
          answer: "We provide free consultation for 30 days after delivering your estimate. Our team will explain any line items, discuss alternatives, or help you understand the scope. We're committed to your project success."
        },
        {
          question: "Do you provide ongoing support during construction?",
          answer: "Yes, we offer construction support services including progress monitoring, change order analysis, and cost control assistance. This helps ensure your project stays on budget from start to finish."
        },
        {
          question: "Can you help with value engineering?",
          answer: "Absolutely! We can suggest cost-effective alternatives, identify potential savings, and help optimize your project budget without compromising quality. Our value engineering services can reduce costs by 10-20%."
        }
      ]
    },
    {
      category: "Quality & Guarantees",
      icon: HelpCircle,
      faqs: [
        {
          question: "Do you guarantee your estimates?",
          answer: "Yes, we stand behind our work with a 100% accuracy guarantee. If there's an error in our calculations, we'll correct it at no charge and compensate for any reasonable costs incurred due to our mistake."
        },
        {
          question: "How do you ensure quality control?",
          answer: "Every estimate goes through a multi-level review process. Our senior estimators check all calculations, a second estimator reviews complex projects, and our quality assurance team performs final verification before delivery."
        },
        {
          question: "What credentials do your estimators have?",
          answer: "Our estimators hold industry certifications including AACE International, ASPE, and state-specific certifications. Many have degrees in construction management, engineering, or related fields with an average of 12+ years experience."
        },
        {
          question: "Are you insured and bonded?",
          answer: "Yes, we carry comprehensive professional liability insurance and are fully bonded. This protects both our clients and our business. We can provide certificates of insurance upon request for your project files."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, faqIndex) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenFAQ(openFAQ === key ? null : key);
  };

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  // Create JSON-LD structured data for FAQPage
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(category => 
      category.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    )
  };

  return (
    <>
      <Helmet>
        <title>Construction Estimating FAQs | Genius Estimate</title>
        <meta name="description" content="Find answers to common questions about our construction estimating services. Learn about our process, pricing, accuracy guarantees, and how we can help with your next project." />
        <meta name="keywords" content="construction estimating FAQ, construction cost estimating, construction estimating services, material takeoff services, construction estimating process" />
        <link rel="canonical" href="https://geniusestimate.com/faq" />
        
        {/* Schema.org markup for FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify(faqJsonLd)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
              Find answers to common questions about our construction estimating services
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Search FAQs"
              />
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">24hr</div>
                <div className="text-gray-600">Average Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">99%</div>
                <div className="text-gray-600">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">5000+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredFAQs.length === 0 && searchTerm ? (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600">Try searching with different terms or browse our categories below.</p>
              </div>
            ) : (
              <div className="space-y-8">
                {filteredFAQs.map((category, categoryIndex) => {
                  const Icon = category.icon;
                  return (
                    <div key={categoryIndex} className="bg-white rounded-xl shadow-sm border border-gray-200">
                      <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center space-x-3">
                          <Icon className="w-6 h-6 text-red-600" />
                          <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                        </div>
                      </div>
                      
                      <div className="divide-y divide-gray-200">
                        {category.faqs.map((faq, faqIndex) => {
                          const isOpen = openFAQ === `${categoryIndex}-${faqIndex}`;
                          return (
                            <div key={faqIndex} className="p-6">
                              <button
                                onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                                className="w-full text-left flex items-center justify-between focus:outline-none group"
                                aria-expanded={isOpen}
                                aria-controls={`faq-${categoryIndex}-${faqIndex}`}
                              >
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                                  {faq.question}
                                </h3>
                                <div className="ml-4 flex-shrink-0">
                                  {isOpen ? (
                                    <ChevronUp className="w-5 h-5 text-gray-500 group-hover:text-red-600 transition-colors" />
                                  ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-red-600 transition-colors" />
                                  )}
                                </div>
                              </button>
                              
                              {isOpen && (
                                <div id={`faq-${categoryIndex}-${faqIndex}`} className="mt-4 prose prose-gray max-w-none">
                                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Still Need Help Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-lg p-6">
                <Phone className="w-8 h-8 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak directly with our estimating experts</p>
                <a href="tel:+1 (919) 727-6105" className="text-red-600 font-semibold hover:text-red-700">
                  +1 (919) 727-6105
                </a>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-6">
                <Mail className="w-8 h-8 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Get detailed answers to your questions</p>
                <a href="mailto:sales@geniusestimate.com" className="text-yellow-600 font-semibold hover:text-yellow-700">
                  sales@geniusestimate.com
                </a>
              </div>
            </div>
          </div>
        </section>

        

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-yellow-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-red-100 mb-8">
              Get your accurate construction estimate today and see why contractors trust Genius Estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/contact">
              <button className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Quote
              </button>
              </Link>
              <Link to="/contactus">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                  Schedule Consultation
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;