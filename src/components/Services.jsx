import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from "../../data.json";

export default function Services() {
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
            toggleActions: "play none none ",
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-sage relative overflow-hidden"
    >
      <div className="absolute top-12 left-8 opacity-10">
        <svg className="w-16 h-16 text-white" viewBox="0 0 64 64">
          <path
            d="M32,8 Q16,20 20,40 Q32,28 44,40 Q48,20 32,8 M8,32 Q20,16 40,20 Q28,32 40,44 Q20,48 8,32"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="absolute bottom-16 right-12 opacity-10 rotate-45">
        <svg className="w-20 h-20 text-white" viewBox="0 0 80 80">
          <path
            d="M40,10 Q20,25 25,50 Q40,35 55,50 Q60,25 40,10"
            fill="currentColor"
          />
          <circle cx="40" cy="35" r="3" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl 2xl:max-w-[95rem] mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20 relative">
          <h2
            className="text-4xl lg:text-6xl font-light text-white mb-8 tracking-tight leading-tight"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            {data.servicesContent.badge}{" "}
            <span className="italic font-normal">
              {data.servicesContent.heading}
            </span>
          </h2>

          <div className="flex justify-center mb-8">
            <svg className="w-24 h-6 text-white opacity-60" viewBox="0 0 96 24">
              <path
                d="M12,12 Q24,6 48,12 Q72,18 84,12"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <circle cx="24" cy="10" r="1.5" fill="currentColor" />
              <circle cx="48" cy="12" r="2" fill="currentColor" />
              <circle cx="72" cy="14" r="1.5" fill="currentColor" />
            </svg>
          </div>

          <div className="bg-soft/30 backdrop-blur-sm text-white py-6 px-8 rounded-lg max-w-2xl mx-auto mb-12 border border-white/20">
            <p
              className="text-lg lg:text-xl font-light leading-relaxed"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              {data.servicesContent.subtitle}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative">
          <div className="absolute -top-6 -left-6 opacity-15 pointer-events-none">
            <svg className="w-12 h-12 text-white" viewBox="0 0 48 48">
              <path
                d="M24,4 Q12,12 16,28 Q24,20 32,28 Q36,12 24,4"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="absolute -bottom-6 -right-6 opacity-15 rotate-180 pointer-events-none">
            <svg className="w-12 h-12 text-white" viewBox="0 0 48 48">
              <path
                d="M24,4 Q12,12 16,28 Q24,20 32,28 Q36,12 24,4"
                fill="currentColor"
              />
            </svg>
          </div>

          {data.servicesContent.services.map((service, index) => (
            <div
              key={index}
              className="group text-center relative service-item"
            >
              {index % 3 === 1 && (
                <div className="absolute -top-3 -right-3 opacity-20 rotate-12">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 32 32">
                    <circle cx="16" cy="8" r="2" fill="currentColor"/>
                    <path d="M16,12 Q8,16 12,24 Q16,20 20,24 Q24,16 16,12" fill="currentColor"/>
                  </svg>
                </div>
              )}
              
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-500 border border-white/20">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white group-hover:text-off-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox={service.icon.viewBox}
                    strokeWidth="1.5"
                  >
                    {service.icon.paths.map((path, i) => (
                      <path key={i} {...path} />
                    ))}
                  </svg>
                </div>
              </div>
              
              <h3 
                className="text-xl lg:text-2xl font-light text-white mb-4 tracking-wide group-hover:text-off-white transition-colors duration-300"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                {service.title}
              </h3>
              
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