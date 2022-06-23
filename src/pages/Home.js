import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import Map from '../components/Map';
import Carousel from '../components/Carousel';
import CallToAction from '../components/CallToAction';
import { MessengerChat } from 'react-messenger-chat-plugin';

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
      <MessengerChat pageId="113420060494458" />
    </div>
  );
};

export default Home;
