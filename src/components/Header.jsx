import React from 'react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#fefcf9]/95 backdrop-blur-md shadow-sm border-b border-[#f0ede8]' 
          : 'bg-[#fefcf9]/90 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 
              className="text-2xl lg:text-3xl font-light tracking-wide text-[#2d2826] cursor-pointer hover:text-[#d4a574] transition-all duration-300"
              onClick={() => scrollToSection('home')}
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Mia Camilla
            </h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-[#2d2826] hover:text-[#d4a574] transition-all duration-300 font-light tracking-wider text-sm uppercase"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-[#2d2826] hover:text-[#d4a574] transition-all duration-300 font-light tracking-wider text-sm uppercase"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-[#2d2826] hover:text-[#d4a574] transition-all duration-300 font-light tracking-wider text-sm uppercase"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#d4a574] text-white px-6 py-2.5 rounded-full hover:bg-[#c29660] transition-all duration-300 font-light text-sm uppercase tracking-wider"
            >
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#2d2826] hover:text-[#d4a574] transition-all duration-300 p-2"
            >
              {isMobileMenuOpen ? (
                <div className="w-6 h-6 flex items-center justify-center">
                  <div className="relative w-5 h-5">
                    <span className="absolute w-5 h-0.5 bg-current transform rotate-45 top-1/2 -translate-y-1/2"></span>
                    <span className="absolute w-5 h-0.5 bg-current transform -rotate-45 top-1/2 -translate-y-1/2"></span>
                  </div>
                </div>
              ) : (
                <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                  <span className="w-6 h-0.5 bg-current transition-all duration-300"></span>
                  <span className="w-6 h-0.5 bg-current transition-all duration-300"></span>
                  <span className="w-6 h-0.5 bg-current transition-all duration-300"></span>
                </div>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#f0ede8] bg-[#fefcf9]/98 backdrop-blur-md">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left py-3 text-[#2d2826] hover:text-[#d4a574] transition-all duration-300 font-light tracking-wider text-sm uppercase border-b border-[#f0ede8] last:border-b-0"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left py-3 text-[#2d2826] hover:text-[#d4a574] transition-all duration-300 font-light tracking-wider text-sm uppercase border-b border-[#f0ede8] last:border-b-0"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-3 text-[#2d2826] hover:text-[#d4a574] transition-all duration-300 font-light tracking-wider text-sm uppercase border-b border-[#f0ede8] last:border-b-0"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-center mt-6 bg-[#d4a574] text-white py-3 px-6 rounded-full hover:bg-[#c29660] transition-all duration-300 font-light text-sm uppercase tracking-wider"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}