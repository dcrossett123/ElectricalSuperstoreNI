import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Popular from './components/Popular';
import GoogleMap from './components/GoogleMap';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Popular />
      <ContactUs />
      <GoogleMap />
      <Footer />
    </div>
  );
}

export default App;
