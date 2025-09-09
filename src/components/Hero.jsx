import React from 'react';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap) {
      const { gsap } = window;
      
      // Hero text animation
      gsap.fromTo(textRef.current.children,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.3,
          ease: "power2.out",
          delay: 0.5
        }
      );

      // Button animation
      gsap.fromTo(buttonRef.current,
        {
          opacity: 0,
          scale: 0.8
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 1.5
        }
      );
    }
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
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
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#f9f6f2] via-[#f2ede7] to-[#ede6dd]"
      style={{ fontFamily: '"Playfair Display", serif' }}
    >
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4a574' fill-opacity='0.3'%3E%3Cpath d='m0 40 40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 lg:px-12">
        <div ref={textRef}>
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-[1.1] text-[#2d2826]"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Create the headspace <br/>
            <span className="text-[#d4a574] font-normal italic">to coach, lead and</span> <br/>
            scale
          </h1>
          
          <p 
            className="text-lg md:text-xl lg:text-2xl mb-12 font-light text-[#5a5654] leading-relaxed tracking-wide"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            with a virtual assistant.
          </p>
        </div>
        
        <button 
          ref={buttonRef}
          onClick={scrollToAbout}
          className="bg-[#d4a574] text-white px-10 py-4 rounded-full font-light text-base uppercase tracking-widest hover:bg-[#c29660] transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          Learn More
        </button>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-8 lg:left-16">
        <div className="w-24 h-24 bg-[#d4a574]/10 rounded-full blur-xl animate-pulse"></div>
      </div>
      
      <div className="absolute top-1/3 right-12 lg:right-24">
        <div className="w-16 h-16 bg-[#e8c4a6]/20 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="absolute bottom-1/4 left-1/4">
        <div className="w-20 h-20 bg-[#f0ede8]/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="absolute bottom-1/3 right-8">
        <div className="w-32 h-32 bg-[#d4a574]/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#d4a574] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#d4a574] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}