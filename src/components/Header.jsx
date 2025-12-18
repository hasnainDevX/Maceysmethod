import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { gsap } from 'gsap';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      // Animate menu in
      gsap.fromTo(
        mobileMenuRef.current,
        { x: '100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.4, ease: 'power3.out' }
      );
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else if (mobileMenuRef.current) {
      // Animate menu out
      gsap.to(mobileMenuRef.current, {
        x: '100%',
        opacity: 0,
        duration: 0.3,
        ease: 'power3.in'
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in'
      });
      // Restore body scroll
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`md:relative fixed top-0 left-0 right-0 z-50 transition-all duration-500 max-w-screen ${
          isScrolled 
            ? 'bg-off-white/95 backdrop-blur-md shadow-sm border-b border-soft' 
            : 'bg-white backdrop-blur-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center py-5">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" smooth={true} duration={500}>
                <h1 
                  className="text-2xl lg:text-3xl font-light tracking-wide text-app-black cursor-pointer hover:text-sage transition-all duration-300"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  Macey's Method
                </h1>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-12">
              <Link to="about" smooth={true} duration={500}>
                <button 
                  className="text-app-black hover:text-sage transition-all duration-300 font-light tracking-wider text-sm uppercase cursor-pointer"
                >
                  About
                </button>
              </Link>
              <Link to="services" smooth={true} duration={500}>
                <button 
                  className="text-app-black hover:text-sage transition-all duration-300 font-light tracking-wider text-sm uppercase cursor-pointer"
                >
                  Services
                </button>
              </Link>
              <Link to="pricing" smooth={true} duration={500}>
                <button 
                  className="text-app-black hover:text-sage transition-all duration-300 font-light tracking-wider text-sm uppercase cursor-pointer"
                >
                  Pricing
                </button>
              </Link>
              <Link to="testimonials" smooth={true} duration={500}>
                <button 
                  className="text-app-black hover:text-sage transition-all duration-300 font-light tracking-wider text-sm uppercase cursor-pointer"
                >
                  Testimonials
                </button>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <button 
                  className="text-app-black hover:text-sage transition-all duration-300 font-light tracking-wider text-sm uppercase cursor-pointer"
                >
                  Contact
                </button>
              </Link>
              <Link to="schedule-a-call" smooth={true} duration={500}>
                <button 
                  className="bg-mint text-off-white px-6 py-2.5 rounded-full hover:bg-sage transition-all duration-300 font-light text-sm uppercase tracking-wider cursor-pointer"
                >
                  Book a Call
                </button>
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-app-black hover:text-sage transition-all duration-300 p-2 relative z-[60]"
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
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          ref={overlayRef}
          className="fixed inset-0 bg-app-black/40 backdrop-blur-sm z-[45] md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div 
        ref={mobileMenuRef}
        className="fixed top-0 right-0 h-full w-[280px] bg-off-white shadow-2xl z-[55] md:hidden"
        style={{ transform: 'translateX(100%)' }}
      >
        {/* Close Button */}
        <div className="absolute top-6 right-6">
          <button 
            onClick={closeMobileMenu}
            className="text-app-black hover:text-sage transition-all duration-300 p-2 cursor-pointer"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="relative w-5 h-5">
                <span className="absolute w-5 h-0.5 bg-current transform rotate-45 top-1/2 -translate-y-1/2 transition-all duration-300"></span>
                <span className="absolute w-5 h-0.5 bg-current transform -rotate-45 top-1/2 -translate-y-1/2 transition-all duration-300"></span>
              </div>
            </div>
          </button>
        </div>

        <div className="flex flex-col h-full pt-24 pb-8 px-6">
          <div className="flex flex-col space-y-2">
            <Link to="about" smooth={true} duration={500}>
              <button 
                onClick={closeMobileMenu}
                className="block w-full text-left py-4 text-app-black hover:text-sage hover:translate-x-2 transition-all duration-300 font-light tracking-wider text-sm uppercase border-b border-soft cursor-pointer"
              >
                About
              </button>
            </Link>
            <Link to="services" smooth={true} duration={500}>
              <button 
                onClick={closeMobileMenu}
                className="block w-full text-left py-4 text-app-black hover:text-sage hover:translate-x-2 transition-all duration-300 font-light tracking-wider text-sm uppercase border-b border-soft cursor-pointer"
              >
                Services
              </button>
            </Link>
            <Link to="pricing" smooth={true} duration={500}>
              <button 
                onClick={closeMobileMenu}
                className="block w-full text-left py-4 text-app-black hover:text-sage hover:translate-x-2 transition-all duration-300 font-light tracking-wider text-sm uppercase border-b border-soft cursor-pointer"
              >
                Pricing
              </button>
            </Link>
            <Link to="testimonials" smooth={true} duration={500}>
              <button 
                onClick={closeMobileMenu}
                className="block w-full text-left py-4 text-app-black hover:text-sage hover:translate-x-2 transition-all duration-300 font-light tracking-wider text-sm uppercase border-b border-soft cursor-pointer"
              >
                Testimonials
              </button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <button 
                onClick={closeMobileMenu}
                className="block w-full text-left py-4 text-app-black hover:text-sage hover:translate-x-2 transition-all duration-300 font-light tracking-wider text-sm uppercase border-b border-soft cursor-pointer"
              >
                Contact
              </button>
            </Link>
          </div>
          
          <div className="mt-8">
            <Link to="schedule-a-call" smooth={true} duration={500}>
              <button 
                onClick={closeMobileMenu}
                className="block w-full text-center bg-mint text-off-white py-3 px-6 rounded-full hover:bg-sage transition-all duration-300 font-light text-sm uppercase tracking-wider"
              >
                Book a Call
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}