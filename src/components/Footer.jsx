import React from 'react';

export default function Footer() {
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
  };

  return (
    <footer className="bg-[#2d2826] text-white" data-testid="footer">
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-5">
              <h3 className="text-3xl font-light text-white mb-6" 
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                Va <em className="italic">4</em>
              </h3>
              <p className="text-[#c4b5a0] mb-8 leading-relaxed text-lg max-w-md" 
                 style={{ fontFamily: 'Inter, sans-serif' }}>
                Supporting ambitious female coaches by running the back-end, so they can focus on being THE coach everyone talks about.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/miacamilla.va/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#3d3530] rounded-xl flex items-center justify-center
                           hover:bg-[#d4a574] transition-colors duration-300"
                  data-testid="footer-instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                <a 
                  href="mailto:va@miacamilla.com" 
                  className="w-12 h-12 bg-[#3d3530] rounded-xl flex items-center justify-center
                           hover:bg-[#d4a574] transition-colors duration-300"
                  data-testid="footer-email-icon"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                
                {/* Add LinkedIn if you have one */}
                <a 
                  href="#" 
                  className="w-12 h-12 bg-[#3d3530] rounded-xl flex items-center justify-center
                           hover:bg-[#d4a574] transition-colors duration-300"
                  data-testid="footer-linkedin"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="lg:col-span-3 lg:col-start-7">
              <h4 className="text-lg font-medium mb-6 text-[#d4a574]" 
                  style={{ fontFamily: 'Inter, sans-serif' }}>
                Navigation
              </h4>
              <ul className="space-y-4">
                <li>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-[#c4b5a0] hover:text-[#d4a574] transition-colors duration-300 text-left"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    data-testid="footer-link-home"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-[#c4b5a0] hover:text-[#d4a574] transition-colors duration-300 text-left"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    data-testid="footer-link-about"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-[#c4b5a0] hover:text-[#d4a574] transition-colors duration-300 text-left"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    data-testid="footer-link-services"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-[#c4b5a0] hover:text-[#d4a574] transition-colors duration-300 text-left"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    data-testid="footer-link-contact"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            {/* Contact Information */}
            <div className="lg:col-span-4">
              <h4 className="text-lg font-medium mb-6 text-[#d4a574]" 
                  style={{ fontFamily: 'Inter, sans-serif' }}>
                Get in Touch
              </h4>
              <div className="space-y-4">
                <a 
                  href="mailto:va@miacamilla.com" 
                  className="flex items-center text-[#c4b5a0] hover:text-[#d4a574] transition-colors duration-300"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  data-testid="footer-email"
                >
                  <svg className="w-5 h-5 mr-3 text-[#d4a574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  va@miacamilla.com
                </a>
                
                <p className="text-[#c4b5a0]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="text-[#d4a574]">Response time:</span> Within 24 hours
                </p>
                
                <p className="text-[#c4b5a0]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="text-[#d4a574]">Time zone:</span> GMT (London)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-[#3d3530]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#c4b5a0] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              &copy; 2024 Va4. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-[#c4b5a0] hover:text-[#d4a574] transition-colors duration-300" 
                 style={{ fontFamily: 'Inter, sans-serif' }}>
                Privacy Policy
              </a>
              <a href="#" className="text-[#c4b5a0] hover:text-[#d4a574] transition-colors duration-300" 
                 style={{ fontFamily: 'Inter, sans-serif' }}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}