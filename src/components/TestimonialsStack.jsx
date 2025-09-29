import { cn } from "../lib/utils";
import React, { useEffect, useState } from "react";

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
          "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
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
              className="group relative w-[380px] max-w-full shrink-0 rounded-3xl border shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 px-8 py-8 md:w-[420px]"
              style={{
                background: 'linear-gradient(to bottom right, #f2fdf8, rgba(186, 219, 206, 0.4), rgba(236, 201, 198, 0.6))',
                borderColor: 'rgba(236, 201, 198, 0.5)',
                backdropFilter: 'blur(4px)',
                boxShadow: '0 10px 25px -3px rgba(107, 141, 113, 0.1), 0 4px 6px -2px rgba(107, 141, 113, 0.05)'
              }}
              key={item.name}
            >
              {/* Decorative elements */}
              <div 
                className="absolute top-4 right-4 w-12 h-12 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(to bottom right, rgba(115, 166, 147, 0.6), rgba(186, 219, 206, 0.6))'
                }}
              ></div>
              <div 
                className="absolute bottom-4 left-4 w-6 h-6 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(to bottom right, rgba(107, 141, 113, 0.4), rgba(115, 166, 147, 0.4))'
                }}
              ></div>
              
              {/* Enhanced profile image */}
              <div className="relative mb-6 flex justify-center items-center ">
                <div 
                  className="absolute inset-0 rounded-full blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(to bottom right, rgba(115, 166, 147, 0.4), rgba(223, 116, 157, 0.4))'
                  }}
                ></div>
                <img 
                  className="relative h-16 w-16 rounded-full object-cover ring-3 shadow-md group-hover:scale-105 transition-transform duration-300 self-center"
                  style={{ ringColor: 'rgba(242, 253, 248, 0.7)' }}
                  src={item.image} 
                  alt={item.name} 
                />
              </div>
              
              <blockquote className="relative">
                {/* Decorative quote mark */}
                <div 
                  className="absolute -top-1 -left-1 text-4xl leading-none select-none pointer-events-none" 
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    color: 'rgba(186, 219, 206, 0.5)'
                  }}
                >"</div>
                
                <div
                  aria-hidden="true"
                  className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                
                <span 
                  className="relative z-20 text-base leading-relaxed block mb-6 font-light italic pl-6"
                  style={{ 
                    fontFamily: "'Playfair Display', 'Georgia', serif",
                    color: '#000000'
                  }}
                >
                  {item.quote}
                </span>
                
                <div 
                  className="relative z-20 mt-6 flex flex-row items-center border-t pt-5"
                  style={{ borderColor: 'rgba(236, 201, 198, 0.5)' }}
                >
                  <span className="flex flex-col gap-1">
                    <span 
                      className="text-lg font-medium tracking-wide"
                      style={{ 
                        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                        color: '#000000'
                      }}
                    >
                      {item.name}
                    </span>
                    <span 
                      className="text-sm font-normal uppercase tracking-wider"
                      style={{ 
                        fontFamily: "'Inter', 'Helvetica Neue', sans-serif", 
                        letterSpacing: '0.05em',
                        color: '#6b8d71'
                      }}
                    >
                      {item.role}
                    </span>
                  </span>
                </div>
                
                {/* Decorative accent line */}
                <div 
                  className="absolute bottom-0 right-0 w-16 h-0.5 rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(to right, rgba(115, 166, 147, 0.6), rgba(223, 116, 157, 0.6), rgba(186, 219, 206, 0.6))'
                  }}
                ></div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};