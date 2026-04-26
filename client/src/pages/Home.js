import React from 'react';
import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import Testimonials from '../components/Testimonials';
import WhyChoose from '../components/WhyChoose';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyChoose />
      <Testimonials />
    </>
  );
};

export default Home;
