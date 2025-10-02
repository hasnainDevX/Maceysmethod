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
      className={`sticky top-0 z-50 transition-all duration-500  max-w-screen ${
        isScrolled 
          ? 'bg-off-white/95 backdrop-blur-md shadow-sm border-b border-soft' 
          : 'bg-white backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 
              className="text-2xl lg:text-3xl font-light tracking-wide text-app-black cursor-pointer hover:text-sage transition-all duration-300"
              onClick={() => scrollToSection('home')}
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Macey's Methods
            </h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-app-black hover:text-sage transition-all duration-300 font-light tracking-wider text-sm uppercase"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-app-black hover:text-sage transition-all duration-300 font-light tracking-wider text-sm uppercase"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-app-black hover:text-sage transition-all duration-300 font-light tracking-wider text-sm uppercase"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-app-black hover:text-sage transition-all duration-300 font-light tracking-wider text-sm uppercase"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('book-a-call')}
              className="bg-mint text-off-white px-6 py-2.5 rounded-full hover:bg-sage transition-all duration-300 font-light text-sm uppercase tracking-wider"
            >
              Book a Call
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-app-black hover:text-sage transition-all duration-300 p-2"
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
          <div className="md:hidden border-t border-soft bg-off-white/98 backdrop-blur-md">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-3 text-app-black hover:text-sage transition-all duration-300 font-light tracking-wider text-sm uppercase border-b border-soft last:border-b-0"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left py-3 text-app-black hover:text-sage transition-all duration-300 font-light tracking-wider text-sm uppercase border-b border-soft last:border-b-0"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left py-3 text-app-black hover:text-sage transition-all duration-300 font-light tracking-wider text-sm uppercase border-b border-soft last:border-b-0"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-3 text-app-black hover:text-sage transition-all duration-300 font-light tracking-wider text-sm uppercase border-b border-soft last:border-b-0"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('book-a-call')}
                className="block w-full text-center mt-6 bg-mint text-off-white py-3 px-6 rounded-full hover:bg-sage transition-all duration-300 font-light text-sm uppercase tracking-wider"
              >
                Book a Call
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}