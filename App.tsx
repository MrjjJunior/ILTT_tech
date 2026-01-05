
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
