import React, { useEffect, useState, useRef } from "react";
import { InfiniteMovingCards } from "./TestimonialsStack";
import elem1 from "../assets/telement1.png";
import elem2 from "../assets/telem2.png";
import { Link } from "react-scroll";
import { client } from "../../src/SanityClient";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(null); // Start with null like Hero
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef(null);
  const ctaRef = useRef(null);
  const elem1Ref = useRef(null);
  const elem2Ref = useRef(null);

  // Fetch testimonials data
  useEffect(() => {
    client
      .fetch('*[_type == "testimonial"]')
      .then((data) => {
        console.log("Fetched testimonials from Sanity:", data);
        if (data) {
          setTestimonials(data);
        } else {
          setTestimonials([]);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching testimonials:", err);
        setTestimonials([]);
        setIsLoading(false);
      });
  }, []);

  // Set up animations - only runs once after content is loaded
  useEffect(() => {
    // Don't run animations until content is loaded
    if (!testimonials || isLoading) return;

    const ctx = gsap.context(() => {
      // Timeline for synchronized animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Title animation - fade in from top
      tl.from(titleRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.6,
        ease: "power3.out",
      });

      // Subtitle animation - fade in
      tl.from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      );

      // Left element - rotate and fade in
      tl.from(
        elem1Ref.current,
        {
          opacity: 0,
          x: -100,
          rotation: -45,
          duration: 1.2,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      );

      // Right element - rotate and fade in
      tl.from(
        elem2Ref.current,
        {
          opacity: 0,
          x: 100,
          rotation: 45,
          duration: 1.2,
          ease: "back.out(1.7)",
        },
        "-=1"
      );

      // Cards container - scale and fade
      tl.from(
        cardsRef.current,
        {
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.8"
      );

      // CTA section - fade in from bottom
      tl.from(
        ctaRef.current,
        {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      );

      // Continuous floating animation for decorative elements
      gsap.to(elem1Ref.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      gsap.to(elem2Ref.current, {
        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 0.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [testimonials, isLoading]);

  // Loading state - same as Hero
  if (isLoading || !testimonials) {
    return (
      <section
        id="testimonials"
        className="py-16 2xl:py-24 bg-gradient-to-b relative overflow-hidden min-h-screen flex items-center justify-center"
      >
        <div className="text-sage text-xl">...</div>
      </section>
    );
  }

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-16 2xl:py-24 bg-gradient-to-b relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#d4a574]/5 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-16 w-40 h-40 bg-[#f0ede8]/40 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl 2xl:max-w-[120rem] mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12">
          <h2
            ref={titleRef}
            className="text-4xl lg:text-6xl font-light text-sage mb-6 tracking-tight leading-tight"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Testimonials
          </h2>
          <p
            ref={subtitleRef}
            className="text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Hear from some of the clients I've had the pleasure of working with.
          </p>
        </div>

        <img
          ref={elem1Ref}
          className="hidden md:block absolute top-[15%] left-6 -rotate-12 transform -translate-y-1/2 w-[10rem] lg:w-[10rem] opacity-80"
          src={elem1}
          alt="element"
        />
        <img
          ref={elem2Ref}
          className="hidden md:block absolute top-[15%] right-6 rotate-12 transform -translate-y-1/2 w-[8rem] lg:w-[8rem] opacity-80"
          src={elem2}
          alt="element"
        />
        
        <div
          ref={cardsRef}
          className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden mx-auto"
          style={{
            minHeight: testimonials.length <= 2 
              ? 'clamp(600px, 80vh, 900px)' 
              : testimonials.length === 3 
              ? 'clamp(800px, 100vh, 1200px)' 
              : `${Math.min(testimonials.length * 350, 2000)}px`
          }}
        >
          <InfiniteMovingCards
            items={testimonials}
            className="flex justify-center items-center"
          />
        </div>

        <div ref={ctaRef} className="text-center mt-16">
          <p
            className="text-lg text-[#666] font-light italic my-2"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Ready to elevate your business?
          </p>
          <Link to="contact" smooth={true} duration={500}>
            <button
              className="bg-sage text-white px-8 py-4 rounded-full hover:bg-mint transition-all duration-500 shadow-xl hover:shadow-xl font-light text-base uppercase group cursor-pointer"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              <span className="transition-all duration-300">
                Start Your Journey
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}