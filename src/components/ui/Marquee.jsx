import React from 'react';

export default function ModernMarquee() {
  const marqueeTexts = [
    "MACEY METHODS •",
    "VIRTUAL ASSISTANT •", 
  ];

  return (
    <section className="py-20 pb-12 overflow-hidden relative">
      {/* Main Marquee */}
      <div className="flex animate-marquee-mobile md:animate-marquee-desktop whitespace-nowrap">
        {marqueeTexts.map((text, index) => (
          <span
            key={index}
            className="text-3xl md:text-8xl lg:text-9xl font-bold text-sage mx-8 select-none"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            {text}
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {marqueeTexts.map((text, index) => (
          <span
            key={`duplicate-${index}`}
            className="text-3xl md:text-8xl lg:text-9xl font-bold text-white mx-8 select-none"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            {text}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        /* Fast animation for mobile screens */
        .animate-marquee-mobile {
          animation: marquee 10s linear infinite;
        }

        /* Normal animation for medium screens and up */
        .animate-marquee-desktop {
          animation: marquee 20s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 15s linear infinite;
        }

        /* Media query to ensure proper animation switching */
        @media (max-width: 767px) {
          .animate-marquee-desktop {
            animation: marquee 10s linear infinite;
          }
        }

        @media (min-width: 768px) {
          .animate-marquee-mobile {
            animation: marquee 15s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}