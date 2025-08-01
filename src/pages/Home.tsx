import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import WhyChooseUs from '../components/WhyChooseUs';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;