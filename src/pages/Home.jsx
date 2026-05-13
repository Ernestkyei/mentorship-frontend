import React from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import FeaturedPrograms from '../components/home/FeaturedPrograms';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <FeaturedPrograms />
      <CTASection />
    </div>
  );
};

export default Home;