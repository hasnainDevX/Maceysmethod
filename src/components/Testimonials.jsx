import React from 'react';
import { useEffect, useRef } from 'react';

export default function Testimonials() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const testimonials = [
    {
      name: "Beth Hocking",
      role: "Personal Brand Strategist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150",
      quote: "Mia has been an absolutely godsend! She's so easy to work with, a brilliant communicator and uses her initiative to learn anything new in double quick time."
    },
    {
      name: "Emma Cowan",
      role: "Founder of Team Wellness",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150",
      quote: "Mia's knowledge, guidance and expertise is proving invaluable to me as I set up my business. Very professional, flexible, and always willing to go the extra mile."
    },
    {
      name: "Ruth Gilbey",
      role: "Business Development Coach",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150",
      quote: "I'm thrilled to recommend Mia, who has been an exceptional addition to my team. She quickly grasped my business goals and nailed the brief from day one."
    },
    {
      name: "Beth Kirk",
      role: "LinkedIn Marketer & Trainer",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150",
      quote: "I have been working with Mia for a few months now and really seeing the benefit of her support in my business. She's been invaluable with content and analytics."
    },
    {
      name: "Lisa Kyriacou Faulks",
      role: "Founder of Social Elements",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150",
      quote: "Mia has been my VA for a few months now and I can definitely see the difference she has made. She is organised, a great communicator and reliable."
    },
    {
      name: "Victoria Thomas",
      role: "Yoga Educator and Mentor",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150",
      quote: "I have been working with Mia now for quite a while and I don't know where my business would be without her. She is calm, listens extremely well and gets everything done so quickly."
    }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
      const { gsap, ScrollTrigger } = window;
      
      // Animate cards on scroll
      gsap.fromTo(cardsRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gradient-to-b from-[#faf9f7] to-[#f5f2ee] relative overflow-hidden"
    >
      {/* Subtle decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#d4a574]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-40 h-40 bg-[#f0ede8]/40 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 
            className="text-4xl lg:text-6xl font-light text-[#2d2826] mb-4 tracking-tight leading-tight"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Who I've helped
          </h2>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group bg-white/80 backdrop-blur-sm p-8 lg:p-10 rounded-3xl border border-[#f0ede8] hover:shadow-xl hover:shadow-[#d4a574]/10 transition-all duration-700 hover:-translate-y-2 hover:bg-white/95"
            >
              {/* Profile Image with subtle glow effect */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[#d4a574]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src={testimonial.image}
                  alt={`${testimonial.name} professional headshot`}
                  className="relative w-20 h-20 rounded-full mx-auto object-cover border-2 border-[#f0ede8] group-hover:border-[#d4a574]/30 transition-all duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Name and Role */}
              <div className="text-center mb-6">
                <h4 
                  className="text-xl font-light text-[#2d2826] mb-2 group-hover:text-[#d4a574] transition-colors duration-300"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {testimonial.name}
                </h4>
                <p 
                  className="text-sm text-[#999] uppercase tracking-widest font-light"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  {testimonial.role}
                </p>
              </div>
              
              {/* Quote with elegant quotation marks */}
              <div className="relative">
                <div 
                  className="absolute -top-4 -left-2 text-4xl text-[#d4a574]/20 font-serif leading-none"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  "
                </div>
                <p 
                  className="text-base lg:text-lg text-[#666] leading-relaxed font-light italic pl-4"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {testimonial.quote}
                </p>
                <div 
                  className="absolute -bottom-4 -right-2 text-4xl text-[#d4a574]/20 font-serif leading-none rotate-180"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  "
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle call-to-action */}
        <div className="text-center mt-16">
          <p 
            className="text-lg text-[#666] font-light italic mb-8"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Ready to join these amazing women?
          </p>
          <button 
            className="bg-[#d4a574] text-white px-10 py-4 rounded-full hover:bg-[#c29660] transition-all duration-500 shadow-xl hover:shadow-xl font-light text-base uppercase group"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            <span className="transition-all duration-300">Start Your Journey</span>
          </button>
        </div>
      </div>
    </section>
  );
}