
import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = "text-sm font-medium text-[#86868B] hover:text-black transition-colors";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass border-b border-gray-200/50 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-[#1D1D1F] rounded-xl flex items-center justify-center text-white">
            <ShieldCheck size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#1D1D1F]">ILTT TECH</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className={linkClass}>Home</a>
          <a href="#about" className={linkClass}>About</a>
          <a href="#products" className={linkClass}>Products</a>
          <a href="#contact" className={linkClass}>Contact</a>
          <a href="#contact" className="pill-button bg-[#1D1D1F] text-white px-6 py-2.5 text-sm font-semibold hover:bg-black active:scale-95">
            Get Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#1D1D1F]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass border-b border-gray-200/50 absolute top-full left-0 right-0 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-6 space-y-4">
            <a href="#home" className="text-lg font-medium text-[#1D1D1F]" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#about" className="text-lg font-medium text-[#1D1D1F]" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#products" className="text-lg font-medium text-[#1D1D1F]" onClick={() => setIsMobileMenuOpen(false)}>Products</a>
            <a href="#contact" className="text-lg font-medium text-[#1D1D1F]" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <a href="#contact" className="pill-button bg-[#1D1D1F] text-white px-6 py-3 text-center font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
