import { cn } from "../lib/utils";
import React, { useState } from "react";
import testimonialsimg from "../assets/quotationmarks.png";

export const InfiniteMovingCards = ({
  items,
  className,
}) => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (name) => {
    setExpandedCards(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const truncateText = (text, wordLimit = 25) => {
    const words = text.trim().split(/\s+/);
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  // Dynamic grid classes based on number of testimonials
  const getGridClasses = () => {
    const count = items.length;
    
    if (count === 1) {
      return "grid-cols-1 justify-items-center";
    } else if (count === 2) {
      return "grid-cols-1 md:grid-cols-2 justify-items-center";
    } else if (count === 3) {
      return "grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center";
    } else {
      return "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center";
    }
  };

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <div
        className={cn(
          "relative z-20 w-full overflow-hidden mx-auto px-4",
          className
        )}
      >
        <ul
          className={cn(
            "grid gap-6 py-6 place-items-center",
            getGridClasses()
          )}
        >
          {items.map((item) => {
            const isExpanded = expandedCards[item.name];
            const displayText = isExpanded 
              ? item.quote 
              : truncateText(item.quote, 25);
            const isTruncated = item.quote.trim().split(/\s+/).length > 25;

            return (
              <li
                key={item.name}
                className="relative w-full max-w-md h-full rounded-2xl border-0 shadow-lg shadow-[#badbce] px-8 py-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 !flex !flex-col !justify-center !items-center"
                style={{
                  background: "#ffffff",
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                }}
              >
                <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-soft pointer-events-none"></div>
                <img
                  src={testimonialsimg}
                  className="absolute h-[60%] w-[50%] opacity-10"
                  alt=""
                />

                <blockquote className="relative w-full">
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Quote text with click to expand */}
                  <span
                    className={cn(
                      "relative z-20 text-sm md:text-base leading-relaxed block mb-8 font-normal transition-all duration-300",
                      isTruncated && "cursor-pointer hover:text-gray-700"
                    )}
                    onClick={() => isTruncated && toggleExpand(item.name)}
                    style={{
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                      color: "#000000",
                    }}
                  >
                    {displayText}
                  </span>

                  {/* Show/Hide indicator */}
                  {isTruncated && (
                    <button
                      onClick={() => toggleExpand(item.name)}
                      className="relative z-20 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors mb-4 block"
                    >
                      {isExpanded ? "Show Less ↑" : "Read More ↓"}
                    </button>
                  )}

                  {/* Author info */}
                  <div className="relative z-20 mt-6 flex items-center gap-3">
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
                          color: "#000000",
                        }}
                      >
                        {item.name}
                      </span>
                      <span
                        className="text-sm font-normal"
                        style={{
                          fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                          color: "#6b7280",
                        }}
                      >
                        {item.role}
                      </span>
                    </span>
                  </div>
                </blockquote>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};