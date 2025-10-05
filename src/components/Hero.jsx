import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import clientImage from "../assets/clientimg2.jpg";
import clockimg from "../assets/final2.png";
import { heroContent } from "../../data.json";

// Register at component top (outside useEffect)
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const decorLeftRef = useRef(null);
  const decorRightRef = useRef(null);
  const circleTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Existing hero text animation
      gsap.fromTo(
        textRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.3,
          ease: "power2.out",
          delay: 0.5,
        }
      );

      // Existing button animation
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 1.5,
        }
      );

      // Clock image animation (slide from left)
      gsap.fromTo(
        decorLeftRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 0.8,
          duration: 1,
          ease: "power3.out",
          delay: 0.8,
        }
      );

      // Right image reveal (scale + fade)
      gsap.fromTo(
        imageRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          delay: 0.3,
        }
      );

      gsap.fromTo(
        ".hero-decor",
        { scale: 0, opacity: 0, rotation: -180 },
        {
          scale: 1,
          opacity: 0.15,
          rotation: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "back.out(1.7)",
          delay: 1,
        }
      );
      if (circleTextRef.current) {
        gsap.fromTo(
          circleTextRef.current,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "back.out(1.7)",
            delay: 1.8,
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen max-w-screen flex flex-col lg:flex-row items-stretch relative overflow-hidden"
    >
      {/* Left Content Section */}
      <div className="flex-1 lg:flex-[3] bg-sage flex items-center justify-center relative px-6 py-16 pt-52 sm:px-8 md:px-12 lg:px-16 lg:py-0">
        {/* Decorative poster image - hidden on mobile for cleaner look */}
        <img
          ref={decorLeftRef}
          className="block absolute top-[18%] left-0 transform -translate-y-1/2 w-[6rem] lg:w-[8rem] opacity-80 2xl:w-[12rem]"
          src={clockimg}
          alt="clock Image"
        />

        {/* Subtle decorative elements - adjusted for mobile */}
        <div className="absolute top-8 sm:top-16 lg:top-20 left-4 sm:left-8 lg:left-12 opacity-10">
          <svg
            className="w-8 h-8 sm:w-10 h-10 lg:w-12 h-12 text-white"
            viewBox="0 0 48 48"
          >
            <path
              d="M24,6 Q12,14 16,30 Q24,22 32,30 Q36,14 24,6"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="hidden sm:block absolute bottom-16 lg:bottom-24 right-8 lg:right-16 opacity-15">
          <svg className="w-6 h-6 lg:w-8 h-8 text-white" viewBox="0 0 32 32">
            <circle cx="16" cy="8" r="2" fill="currentColor" />
            <path
              d="M16,12 Q8,16 12,24 Q16,20 20,24 Q24,16 16,12"
              fill="currentColor"
            />
          </svg>
        </div>

        <div
          className="max-w-xl lg:max-w-2xl 2xl:max-w-4xl w-full text-center lg:text-left"
          ref={textRef}
        >
          {/* Decorative accent - simplified on mobile */}
          <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6 lg:mb-8">
            <div className="w-8 lg:w-12 2xl:w-16 h-px bg-white/40"></div>
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <div className="w-8 lg:w-12 2xl:w-16 h-px bg-white/40"></div>
          </div>

          <h1
            className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-6 lg:mb-8 leading-[0.95] text-white font-bold tracking-tight"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            {heroContent.heading.line1}{" "}
            <span className="italic font-semibold">{heroContent.heading.line2} </span>
            <span className="text-soft font-semibold my-1 lg:my-2">
              {heroContent.heading.line3}
            </span>
            <span className="font-semibold"> {heroContent.heading.line4}</span>
          </h1>

          <div className="relative mb-8 lg:mb-12">
            <p
              className="text-lg sm:text-xl lg:text-2xl font-light text-white/90 leading-relaxed tracking-wide 2xl:text-3xl"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              {heroContent.subheading}
            </p>
            {/* Elegant underline - centered on mobile */}
            <div className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-20 lg:w-24 h-px bg-white/30"></div>
          </div>

          <button
            ref={buttonRef}
            onClick={scrollToAbout}
            className="group bg-white text-sage px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-xs sm:text-sm uppercase tracking-[0.15em] hover:bg-off-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-white/20 2xl:px-16 2xl:py-8 2xl:text-2xl cursor-pointer"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            {heroContent.buttonText}
            <svg
              className="w-4 h-4 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Bottom accent - simplified on smaller screens */}
          <div className="flex items-center justify-center lg:justify-start space-x-4 mt-12 lg:mt-16">
            <div className="w-4 lg:w-6 h-px bg-white/30"></div>
            <div className="flex space-x-2">
              <div className="w-1.5 h-1.5 2xl:w-2 2xl:h-2 bg-white/40 rounded-full"></div>
              <div className="w-1.5 h-1.5 2xl:w-2 2xl:h-2 bg-white/60 rounded-full"></div>
              <div className="w-1.5 h-1.5 2xl:w-2 2xl:h-2 bg-white/40 rounded-full"></div>
            </div>
            <div className="w-4 lg:w-6 h-px bg-white/30"></div>
          </div>
        </div>
      </div>

      {/* Right Image Section - Shows on mobile as background overlay */}
      <div className="flex-1 lg:flex-[2] relative">
        {/* Mobile: Image as background overlay */}
        <div className="block lg:hidden absolute inset-0 z-0">
          <img
            ref={imageRef}
            src={clientImage}
            alt="Professional Virtual Assistant"
            className="object-cover w-full h-full opacity-30"
          />
          <div className="absolute inset-0 bg-sage/70"></div>
        </div>

        {/* Desktop: Full image section */}
        <div className="hidden lg:block relative h-full">
          <img
            src={clientImage}
            alt="Professional Virtual Assistant"
            className="object-cover w-full h-full"
          />

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-sage/10"></div>

          {/* Elegant border accents */}
          <div className="absolute top-8 right-8 bottom-8 w-px bg-white/20"></div>
          <div className="absolute top-8 left-0 right-8 h-px bg-white/20"></div>
          <div className="absolute bottom-8 left-0 right-8 h-px bg-white/20"></div>

          {/* Rotating circular text element - only on large screens */}
          <div
            ref={circleTextRef}
            className="block absolute top-[50vh] right-[55vh] w-52 h-52 z-10 2xl:scale-125"
          >
            <div
              className="absolute inset-0 animate-spin"
              style={{ animationDuration: "15s" }}
            >
              <svg
                width="224"
                height="224"
                viewBox="0 0 224 224"
                className="absolute inset-0"
              >
                <defs>
                  <path
                    id="circle"
                    d="M 112,112 m -90,0 a 90,90 0 1,1 180,0 a 90,90 0 1,1 -180,0"
                  />
                </defs>
                <text
                  fill="white"
                  fontSize="16"
                  fontWeight="300"
                  letterSpacing="3px"
                  fontFamily="'Inter', 'Helvetica Neue', sans-serif"
                >
                  <textPath href="#circle">
                    {heroContent.circleText}
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - adjusted for mobile */}
      <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 lg:h-3 bg-white/50 rounded-full mt-1.5 lg:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}