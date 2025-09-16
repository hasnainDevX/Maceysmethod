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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-fixed bg-center bg-cover bg-black"
      style={{ fontFamily: '"Playfair Display", serif' }}
    >
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1674513559454-35ca6435079f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px)',
          backgroundRepeat: 'no-repeat',
          zIndex: 0
        }}
      ></div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 lg:px-12">
        <div ref={textRef}>
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-[1.1] text-white"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Create the headspace <br/>
            <span className="text-[#d4a574] font-normal italic">to coach, lead and</span> <br/>
            scale
          </h1>
          
          <p 
            className="text-lg md:text-xl lg:text-2xl mb-12 font-light text-white leading-relaxed tracking-wide"
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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#d4a574] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#d4a574] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}