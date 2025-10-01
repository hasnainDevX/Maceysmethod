import React from "react";
import { useEffect, useRef } from "react";
import { InfiniteMovingCards } from "./TestimonialsStack";
import elem1 from "../assets/telement1.png";
import elem2 from "../assets/telem2.png";

export default function Testimonials() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const testimonials = [
    {
      name: "Beth Hocking",
      role: "Personal Brand Strategist",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150",
      quote:
        "Mia has been an absolutely godsend! She's so easy to work with, a brilliant communicator and uses her initiative to learn anything new in double quick time.",
    },
    {
      name: "Emma Cowan",
      role: "Founder of Team Wellness",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150",
      quote:
        "Mia's knowledge, guidance and expertise is proving invaluable to me as I set up my business. Very professional, flexible, and always willing to go the extra mile.",
    },
    {
      name: "Ruth Gilbey",
      role: "Business Development Coach",
      image:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150",
      quote:
        "I'm thrilled to recommend Mia, who has been an exceptional addition to my team. She quickly grasped my business goals and nailed the brief from day one.",
    },
    {
      name: "Beth Kirk",
      role: "LinkedIn Marketer & Trainer",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150",
      quote:
        "I have been working with Mia for a few months now and really seeing the benefit of her support in my business. She's been invaluable with content and analytics.",
    },
    {
      name: "Lisa Kyriacou Faulks",
      role: "Founder of Social Elements",
      image:
        "https://images.pexels.com/photos/5257495/pexels-photo-5257495.jpeg",
      quote:
        "Mia has been my VA for a few months now and I can definitely see the difference she has made. She is organised, a great communicator and reliable.",
    },
  ];

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
          <button
            className="bg-sage text-white px-8 py-4 rounded-full hover:bg-mint transition-all duration-500 shadow-xl hover:shadow-xl font-light text-base uppercase group "
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            <span className="transition-all duration-300">
              Start Your Journey
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
