
import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/Features';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';
import NavBar from '../components/nav';
import Demo from '../components/Demo';
import Testimonials from '../components/Testimonials'



function Home() {

  const headerColor = '#262638';
    const color = '#fffaf5';
    
  return (
    <div>
      
      <NavBar headerColor={headerColor} color = {color} />
      <HeroSection />
      <FeaturesSection />
      <Demo />
      <PricingSection />
      <Testimonials />
      <Footer  headerColor={headerColor} color = {color}/>
    </div>
  );
}

export default Home;
