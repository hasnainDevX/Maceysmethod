import { cn } from "../lib/utils";
import React, { useEffect, useState } from "react";
import testimonialsimg from "../assets/quotationmarks.png";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "100s");
      }
    }
  };
  return (
    <>
      {/* Add Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 max-w-7xl 2xl:max-w-[115rem] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-6",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, idx) => (
          <li
              className="group relative w-[380px] max-w-full shrink-0 rounded-2xl border-0 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 px-8 py-8 md:w-[420px] shadow-lg shadow-[#badbce]"
              style={{
                background: '#ffffff',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
              key={item.name}
            >
              <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-soft pointer-events-none"></div>
              <img src={testimonialsimg} className="absolute h-[60%] w-[50%] opacity-10" alt="" />
              <blockquote className="relative">
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                
                <span 
                  className="relative z-20 text-sm md:text-base leading-relaxed block mb-8 font-normal"
                  style={{ 
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    color: '#000000'
                  }}
                >
                  {item.quote}
                </span>
                
                <div 
                  className="relative z-20 mt-6 flex flex-row items-center gap-3"
                >
                  <img 
                    className="h-12 w-12 rounded-full object-cover"
                    src={item.image} 
                    alt={item.name} 
                  />
                  <span className="flex flex-col gap-0.5">
                    <span 
                      className="text-base font-semibold"
                      style={{ 
                        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                        color: '#000000'
                      }}
                    >
                      {item.name}
                    </span>
                    <span 
                      className="text-sm font-normal"
                      style={{ 
                        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                        color: '#6b7280'
                      }}
                    >
                      {item.role}
                    </span>
                  </span>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};