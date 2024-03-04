/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import About from './components/about/About';
import Partner from './components/partners/Partner';
import Download from './components/download/Download';
import Footer from './components/footer/Footer';

export default function landing() {
  return (
    <section>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Partner />
      <Download />
      <Footer />

      {/* <div>
                   
                <h5>Home Page</h5>
                <p>Hello pretty boy I love this</p>
                
            </div>
             */}
    </section>
  );
}
