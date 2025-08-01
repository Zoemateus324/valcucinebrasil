import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Collections from './components/Collections';
import Projects from './components/Projects';
import Sustainability from './components/Sustainability';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Collections />
        <Projects />
        <Sustainability />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;