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
              className="group relative w-[380px] max-w-full shrink-0 rounded-3xl bg-gradient-to-br from-white via-pink-50/40 to-rose-50/60 backdrop-blur-sm border border-pink-200/50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 px-8 py-8 md:w-[420px]"
              style={{
                boxShadow: '0 10px 25px -3px rgba(219, 39, 119, 0.1), 0 4px 6px -2px rgba(219, 39, 119, 0.05)'
              }}
              key={item.name}
            >
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-pink-100/60 to-rose-100/60 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-purple-100/40 to-pink-100/40 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              
              {/* Enhanced profile image */}
              <div className="relative mb-6 flex justify-center items-center ">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200/40 to-rose-200/40 rounded-full blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <img 
                  className="relative h-16 w-16 rounded-full object-cover ring-3 ring-white/70 shadow-md group-hover:scale-105 transition-transform duration-300 self-center" 
                  src={item.image} 
                  alt={item.name} 
                />
              </div>
              
              <blockquote className="relative">
                {/* Decorative quote mark */}
                <div className="absolute -top-1 -left-1 text-4xl text-pink-200/50 leading-none select-none pointer-events-none" style={{ fontFamily: "'Playfair Display', serif" }}>"</div>
                
                <div
                  aria-hidden="true"
                  className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                
                <span 
                  className="relative z-20 text-base leading-relaxed text-slate-700 block mb-6 font-light italic pl-6"
                  style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
                >
                  {item.quote}
                </span>
                
                <div className="relative z-20 mt-6 flex flex-row items-center border-t border-pink-100/50 pt-5">
                  <span className="flex flex-col gap-1">
                    <span 
                      className="text-lg font-medium text-slate-800 tracking-wide"
                      style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                    >
                      {item.name}
                    </span>
                    <span 
                      className="text-sm text-orange-600 font-normal uppercase tracking-wider"
                      style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", letterSpacing: '0.05em' }}
                    >
                      {item.role}
                    </span>
                  </span>
                </div>
                
                {/* Decorative accent line */}
                <div className="absolute bottom-0 right-0 w-16 h-0.5 bg-gradient-to-r from-pink-300/60 via-rose-300/60 to-purple-300/60 rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};