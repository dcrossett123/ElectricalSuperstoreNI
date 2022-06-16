import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import Popular from '../components/Popular';
import GoogleMap from '../components/GoogleMap';
import Carousel from '../components/Carousel';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Carousel />
      <ContactUs />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
