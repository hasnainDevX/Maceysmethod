import React from 'react';
import { useEffect, useRef } from 'react';

export default function About() {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
      const { gsap, ScrollTrigger } = window;
      
      // Image animation
      gsap.fromTo(imageRef.current,
        {
          opacity: 0,
          x: -50,
          scale: 0.95
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Text animation
      gsap.fromTo(textRef.current.children,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
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
    <section id="about" className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Profile Image */}
          <div className="lg:col-span-1" ref={imageRef}>
            <div className="bg-[#f8f6f3] rounded-3xl p-6 lg:p-8">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/67a9c7232f6bc0581ade3c6c/f7353bf7-84d4-4e82-ba07-0f9337a278f6/DSC09145.jpg?format=1500w" 
                alt="Professional female virtual assistant" 
                className="rounded-2xl w-full transform hover:scale-[1.02] transition-all duration-500"
              />
            </div>
          </div>
          
          {/* Center Text Content */}
          <div className="lg:col-span-1 text-center" ref={textRef}>
            {/* Welcome message */}
            <p 
              className="text-[#a8b5a0] text-lg font-light italic mb-6 tracking-wide"
              style={{ fontFamily: '"Dancing Script", cursive' }}
            >
              Hey, welcome in!
            </p>
            
            {/* Main heading */}
            <h2 
              className="text-5xl lg:text-7xl font-light text-[#2d2826] mb-8 tracking-tight leading-none"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              I'm Mia.
            </h2>
            
            {/* Description paragraphs */}
            <div className="space-y-6 mb-10">
              <p 
                className="text-base lg:text-lg text-[#666] leading-relaxed font-light max-w-sm mx-auto"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                I support ambitious female coaches by running the back-end, so they can focus on being THE coach everyone talks about.
              </p>
              
              <p 
                className="text-base lg:text-lg text-[#666] leading-relaxed font-light max-w-sm mx-auto"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                From inboxes to systems, I handle the behind-the-scenes so you can lead, create, and scale your coaching business.
              </p>
            </div>
            
            {/* Learn more button */}
            <button 
              onClick={scrollToServices}
              className="bg-[#a8b5a0] text-white px-8 py-3 rounded-full hover:bg-[#96a68e] transition-all duration-300 font-light text-sm uppercase tracking-widest"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Learn more
            </button>
          </div>

          {/* Right Decorative Image */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="bg-[#f0ede8] rounded-3xl p-6 lg:p-8">
              <img 
                src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=800" 
                alt="Elegant workspace setup" 
                className="rounded-2xl w-full transform hover:scale-[1.02] transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}