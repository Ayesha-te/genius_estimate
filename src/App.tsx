import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Reviews from './pages/Reviews';
import FAQ from './pages/FAQ';

// Samples Page
import SamplesPage from './pages/SamplesPage';

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

function App() {
  return (
    <Router>
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
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
