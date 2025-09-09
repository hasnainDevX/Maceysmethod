import React from 'react';

export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-6 h-6 text-[#d4a574]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m7 7 5 5 5-5" />
        </svg>
      ),
      title: "Administrative Support",
      description: "Streamline your admin tasks and keep your business organized with meticulous attention to detail."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#d4a574]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Customer Support", 
      description: "Provide exceptional customer service that builds lasting relationships and brand loyalty."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#d4a574]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
        </svg>
      ),
      title: "Social Media",
      description: "Craft your online presence with strategic content that resonates with your audience."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#d4a574]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Scheduling",
      description: "Seamlessly coordinate your calendar and optimize your time for maximum productivity."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#d4a574]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Project Coordination",
      description: "Transform complex projects into streamlined processes with strategic oversight."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#d4a574]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Management",
      description: "Maintain pristine communication flow with professional email organization."
    }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 
            className="text-4xl lg:text-6xl font-light text-[#2d2826] mb-4 tracking-tight leading-tight"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            I'm here for whatever you need
          </h2>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group text-center"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-[#f0ede8] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#d4a574] transition-all duration-500">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(service.icon, {
                    className: "w-6 h-6 text-[#d4a574] group-hover:text-white transition-colors duration-300"
                  })}
                </div>
              </div>
              
              {/* Title */}
              <h3 
                className="text-xl lg:text-2xl font-light text-[#2d2826] mb-4 tracking-wide group-hover:text-[#d4a574] transition-colors duration-300"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                {service.title}
              </h3>
              
              {/* Description */}
              <p 
                className="text-base lg:text-lg text-[#666] leading-relaxed font-light max-w-sm mx-auto"
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