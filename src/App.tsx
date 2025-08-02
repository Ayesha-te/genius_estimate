import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Main Pages
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Reviews from './pages/Reviews';
import FAQ from './pages/FAQ';
import SamplesPage from './pages/SamplesPage';
import Contact from './pages/Contact';
import ContactUs from './pages/contactus'; 

// Blog Pages
import Blog1 from './pages/blogs/blog1';
import Blog2 from './pages/blogs/blog2';
import Blog3 from './pages/blogs/blog3';
import Blog4 from './pages/blogs/blog4';
import Blog5 from './pages/blogs/blog5';
import Blog6 from './pages/blogs/blog6';
import Blog7 from './pages/blogs/blog7';

// Trade Pages
import ConcreteEstimating from './pages/trades/Concrete-estimating';
import Electrical from './pages/trades/electrical';
import InteriorExteriorFinishes from './pages/trades/interior-exterior-finishes';
import MasonryEstimating from './pages/trades/masonry-estimating';
import MepHvac from './pages/trades/mep-hvac';
import MetalsEstimating from './pages/trades/metals-estimating';
import OpeningsEstimating from './pages/trades/openings-estimating';
import SiteworkEstimating from './pages/trades/sitework-estimating';
import ThermalProtection from './pages/trades/thermal-protection';
import WoodPlasticComposites from './pages/trades/wood-plastic-composites';

import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import RefundPolicy from './pages/RefundPolicy';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />

        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/samples" element={<SamplesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contactus" element={<ContactUs />} />

          {/* Blog Pages */}
          <Route path="/blogs/blog1" element={<Blog1 />} />
          <Route path="/blogs/blog2" element={<Blog2 />} />
          <Route path="/blogs/blog3" element={<Blog3 />} />
          <Route path="/blogs/blog4" element={<Blog4 />} />
          <Route path="/blogs/blog5" element={<Blog5 />} />
          <Route path="/blogs/blog6" element={<Blog6 />} />
          <Route path="/blogs/blog7" element={<Blog7 />} />

          {/* Trade Estimating Pages */}
          <Route path="/trades/Concrete-estimating" element={<ConcreteEstimating />} />
          <Route path="/trades/electrical" element={<Electrical />} />
          <Route path="/trades/interior-exterior-finishes" element={<InteriorExteriorFinishes />} />
          <Route path="/trades/masonry-estimating" element={<MasonryEstimating />} />
          <Route path="/trades/mep-hvac" element={<MepHvac />} />
          <Route path="/trades/metals-estimating" element={<MetalsEstimating />} />
          <Route path="/trades/openings-estimating" element={<OpeningsEstimating />} />
          <Route path="/trades/sitework-estimating" element={<SiteworkEstimating />} />
          <Route path="/trades/thermal-protection" element={<ThermalProtection />} />
          <Route path="/trades/wood-plastic-composites" element={<WoodPlasticComposites />} />

          {/* Policy Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/refundpolicy" element={<RefundPolicy />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
