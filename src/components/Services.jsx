import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from "../../data.json";
import { client } from "../SanityClient";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const fetchedData = await client.fetch('*[_type == "service"]');
        
        if (fetchedData && fetchedData.length > 0) {
          setServices(fetchedData);
          setError(null);
        } else {
          console.warn("No services found in Sanity, using fallback data");
          setServices(data.servicesContent.services);
        }
      } catch (err) {
        console.error("Error fetching services from Sanity:", err);
        setError("Using cached data");
        setServices(data.servicesContent.services);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  const renderIcon = (service) => {
    if (service.icon?.paths && service.icon.paths.length > 0) {
      return (
        <svg
          className="w-8 h-8 text-white group-hover:text-off-white transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox={service.icon.viewBox || "0 0 24 24"}
          strokeWidth="1.5"
        >
          {service.icon.paths.map((path, i) => (
            <path key={i} {...path} />
          ))}
        </svg>
      );
    }

    return (
      <svg
        className="w-8 h-8 text-white group-hover:text-off-white transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    );
  };

  if (isLoading) {
    return (
      <section
        id="services"
        className="py-24 lg:py-32 bg-sage relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-center min-h-[500px]">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent mb-4"></div>
            <p className="text-white text-lg font-light">Loading services...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error && services.length === 0) {
    return (
      <section
        id="services"
        className="py-24 lg:py-32 bg-sage relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-center min-h-[500px]">
          <div className="text-center">
            <svg className="w-16 h-16 text-white/60 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-white text-lg font-light">Unable to load services</p>
            <p className="text-white/70 text-sm mt-2">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
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

      {error && (
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-6">
          <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-3 text-center">
            <p className="text-white text-sm">{error}</p>
          </div>
        </div>
      )}

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

          {services.map((service, index) => (
            <div
              key={service._id || service.title || index}
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
                  {renderIcon(service)}
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