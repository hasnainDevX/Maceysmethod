import React from 'react';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m7 7 5 5 5-5" />
        </svg>
      ),
      title: "Email Inbox Management",
      description: "Keep your inbox organized and ensure important emails never go unnoticed."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Calendar Management", 
      description: "Seamlessly coordinate your schedule and optimize your time for maximum productivity."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
      title: "Onboarding Clients",
      description: "Create smooth client onboarding experiences that set the foundation for success."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      ),
      title: "Invoice Management",
      description: "Handle your billing processes with precision and ensure timely payments."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-1.036.84-1.875 1.875-1.875H8.25a2.25 2.25 0 012.25 2.25v.625m0 0V8.25a2.25 2.25 0 012.25-2.25h2.25A2.25 2.25 0 0117.25 8.25v8.25m-1.5 0h.375c.621 0 1.125-.504 1.125-1.125V13.5a1.125 1.125 0 00-1.125-1.125h-2.25C12.504 12.375 12 12.879 12 13.5v4.875c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      ),
      title: "TikTok Creation",
      description: "Create engaging TikTok content that captures attention and grows your audience."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
        </svg>
      ),
      title: "Instagram Management",
      description: "Full Instagram management including graphic creation, captions, hashtags, reels, and post scheduling."
    }
  ];
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const elements = document.querySelectorAll(".service-item");

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.5,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 20%",
            // scrub: true,
            toggleActions: "play none none ",
          },
        }
      );
    });
  }, []);

  return (
    <section id="services" className="py-24 lg:py-32 bg-sage relative overflow-hidden">
      {/* Subtle floral decorations */}
      <div className="absolute top-12 left-8 opacity-10">
        <svg className="w-16 h-16 text-white" viewBox="0 0 64 64">
          <path d="M32,8 Q16,20 20,40 Q32,28 44,40 Q48,20 32,8 M8,32 Q20,16 40,20 Q28,32 40,44 Q20,48 8,32" fill="currentColor"/>
        </svg>
      </div>
      <div className="absolute bottom-16 right-12 opacity-10 rotate-45">
        <svg className="w-20 h-20 text-white" viewBox="0 0 80 80">
          <path d="M40,10 Q20,25 25,50 Q40,35 55,50 Q60,25 40,10" fill="currentColor"/>
          <circle cx="40" cy="35" r="3" fill="currentColor"/>
        </svg>
      </div>
      
      <div className="max-w-7xl 2xl:max-w-[95rem] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 relative">
          <h2 
            className="text-4xl lg:text-6xl font-light text-white mb-8 tracking-tight leading-tight"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            MY <span className="italic font-normal">Services</span>
          </h2>
          
          {/* Floral divider */}
          <div className="flex justify-center mb-8">
            <svg className="w-24 h-6 text-white opacity-60" viewBox="0 0 96 24">
              <path d="M12,12 Q24,6 48,12 Q72,18 84,12" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <circle cx="24" cy="10" r="1.5" fill="currentColor"/>
              <circle cx="48" cy="12" r="2" fill="currentColor"/>
              <circle cx="72" cy="14" r="1.5" fill="currentColor"/>
            </svg>
          </div>
          
          {/* Subtitle with green background */}
          <div className="bg-soft/30 backdrop-blur-sm text-white py-6 px-8 rounded-lg max-w-2xl mx-auto mb-12 border border-white/20">
            <p 
              className="text-lg lg:text-xl font-light leading-relaxed"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              I can help you with a range of tasks, but some of my most common services are:
            </p>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Decorative corner elements */}
          <div className="absolute -top-6 -left-6 opacity-15 pointer-events-none">
            <svg className="w-12 h-12 text-white" viewBox="0 0 48 48">
              <path d="M24,4 Q12,12 16,28 Q24,20 32,28 Q36,12 24,4" fill="currentColor"/>
            </svg>
          </div>
          <div className="absolute -bottom-6 -right-6 opacity-15 rotate-180 pointer-events-none">
            <svg className="w-12 h-12 text-white" viewBox="0 0 48 48">
              <path d="M24,4 Q12,12 16,28 Q24,20 32,28 Q36,12 24,4" fill="currentColor"/>
            </svg>
          </div>
          
          {services.map((service, index) => (
            <div 
              key={index}
              className="group text-center relative service-item"
            >
              {/* Subtle floral accent on every other service */}
              {index % 3 === 1 && (
                <div className="absolute -top-3 -right-3 opacity-20 rotate-12">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 32 32">
                    <circle cx="16" cy="8" r="2" fill="currentColor"/>
                    <path d="M16,12 Q8,16 12,24 Q16,20 20,24 Q24,16 16,12" fill="currentColor"/>
                  </svg>
                </div>
              )}
              
              {/* Icon Container */}
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-500 border border-white/20">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(service.icon, {
                    className: "w-8 h-8 text-white group-hover:text-off-white transition-colors duration-300"
                  })}
                </div>
              </div>
              
              {/* Title */}
              <h3 
                className="text-xl lg:text-2xl font-light text-white mb-4 tracking-wide group-hover:text-off-white transition-colors duration-300"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                {service.title}
              </h3>
              
              {/* Description */}
              <p 
                className="text-sm lg:text-base text-off-white/90 leading-relaxed font-light max-w-sm mx-auto"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}