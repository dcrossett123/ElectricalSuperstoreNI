import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import Map from '../components/Map';
import Carousel from '../components/Carousel';
import CallToAction from '../components/CallToAction';
import { MessengerChat } from 'react-messenger-chat-plugin';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <div data-aos="fade-up">
        <Carousel />
      </div>
      <div data-aos="fade-up">
        <ContactUs />
      </div>
      <div data-aos="fade-up">
        <CallToAction />
      </div>
      <div data-aos="fade-up">
        <Map />
      </div>
      <Footer />
      <MessengerChat pageId="113420060494458" />
    </div>
  );
};

export default Home;
