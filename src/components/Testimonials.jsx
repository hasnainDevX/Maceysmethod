import React from "react";
import { useEffect, useRef } from "react";
import { InfiniteMovingCards } from "./TestimonialsStack";
import elem1 from "../assets/telement1.png";
import elem2 from "../assets/telem2.png";
import { testimonials } from "../../data.json";
import { Link } from "react-scroll";

export default function Testimonials() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-16 bg-gradient-to- relative overflow-hidden"
    >
      {/* Subtle decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#d4a574]/5 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-16 w-40 h-40 bg-[#f0ede8]/40 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl 2xl:max-w-[120rem] mx-auto px-6 lg:px-12 relative z-10 ">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl lg:text-6xl font-light text-sage mb-6 tracking-tight leading-tight"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Testimonials
          </h2>
           <p
            className="text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Hear from some of the clients I've had the pleasure of working with.
          </p>
        </div>

        <img
          className="hidden md:block absolute top-[15%] left-6 -rotate-12 transform -translate-y-1/2 w-[10rem] lg:w-[10rem] opacity-80"
          src={elem1}
          alt="element"
        />
        <img
          className="hidden md:block absolute top-[15%] right-6 rotate-12 transform -translate-y-1/2 w-[8rem] lg:w-[8rem] opacity-80"
          src={elem2}
          alt="element"
        />

        {/* Testimonials Grid */}
        <div className="h-[24rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="very-slow"
          />
        </div>

        {/* Subtle call-to-action */}
        <div className="text-center mt-16">
          <p
            className="text-lg text-[#666] font-light italic my-2"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Ready to join these amazing women?
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
