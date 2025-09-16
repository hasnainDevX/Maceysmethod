import React from "react";
import { useEffect, useRef } from "react";

export default function About() {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
      const { gsap, ScrollTrigger } = window;

      // Image animation
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          x: -50,
          scale: 0.95,
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
            toggleActions: "play none none reverse",
          },
        }
      );

      // Text animation
      gsap.fromTo(
        textRef.current.children,
        {
          opacity: 0,
          y: 30,
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
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById("services");
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
    <section id="about" className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          <div className="imgcontainer flex justify-start h-full">
            {/* Left Profile Image */}
            <div className="lg:col-span-1" ref={imageRef}>
              <div className="bg-[#f8f6f3] rounded-3xl p-6 lg:p-8">
                <img
                  src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Professional female virtual assistant"
                  className="rounded-2xl w-full transform hover:scale-[1.02] transition-all duration-500"
                />
              </div>
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
                I support ambitious female coaches by running the back-end, so
                they can focus on being THE coach everyone talks about.
              </p>

              <p
                className="text-base lg:text-lg text-[#666] leading-relaxed font-light max-w-sm mx-auto"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                From inboxes to systems, I handle the behind-the-scenes so you
                can lead, create, and scale your coaching business.
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

          <div className="imgcontainer flex justify-end h-full">
            {/* Right Decorative Image */}
            <div className="lg:col-span-1 hidden lg:block self-end">
              <div className="bg-[#f0ede8] rounded-3xl p-6 lg:p-8">
                <img
                  src="https://images.unsplash.com/photo-1631795559143-f3358a656cec?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Elegant workspace setup"
                  className="rounded-2xl w-full transform hover:scale-[1.02] transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
