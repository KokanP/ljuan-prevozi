import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Import the Footer component
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Pricing />
        <Contact />
      </main>
      <Footer /> {/* Include the Footer component here */}
    </div>
  );
}

export default App;
