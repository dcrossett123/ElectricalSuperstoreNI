import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import Map from '../components/Map';
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
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
