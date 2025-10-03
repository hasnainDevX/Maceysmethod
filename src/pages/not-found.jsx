import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function NotFound() {
  const numberRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const decorRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      numberRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo(
      textRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo(
      buttonRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' },
      '-=0.2'
    )
    .fromTo(
      decorRef.current?.children || [],
      { scale: 0, opacity: 0, rotation: -180 },
      { 
        scale: 1, 
        opacity: 0.15, 
        rotation: 0, 
        duration: 1, 
        stagger: 0.1,
        ease: 'power2.out' 
      },
      0
    );
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-off-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div ref={decorRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full border-2 border-sage"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 rounded-full border-2 border-mint"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 rounded-full bg-sage"></div>
        <div className="absolute bottom-20 left-32 w-20 h-20 rounded-full bg-mint"></div>
      </div>

      {/* Main Content */}
      <div className="text-center relative z-10 px-6">
        <div ref={numberRef} className="mb-6">
          <h1 
            className="text-[150px] md:text-[200px] font-light tracking-tight text-app-black leading-none"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            404
          </h1>
          <div className="w-32 h-0.5 bg-sage mx-auto mt-4"></div>
        </div>

        <div ref={textRef} className="mb-10">
          <p className="text-2xl md:text-3xl font-light text-app-black mb-3 tracking-wide">
            Page Not Found
          </p>
          <p className="text-base md:text-lg text-app-black/60 font-light max-w-md mx-auto leading-relaxed">
            The page you're looking for seems to have wandered off. Let's get you back on track.
          </p>
        </div>

        <div ref={buttonRef}>
          <a
            href="/"
            className="inline-block bg-mint text-off-white px-8 py-3.5 rounded-full hover:bg-sage transition-all duration-300 font-light text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105"
          >
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
}