
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Expertise from './components/Expertise';
import Portfolio from './components/Portfolio';
import Methodology from './components/Methodology';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Expertise />
        <Portfolio />
        <Methodology />
        <About />
      </main>
      <Contact />
    </div>
  );
}

export default App;
