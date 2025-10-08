import { cn } from "../lib/utils";
import React from "react";
import testimonialsimg from "../assets/quotationmarks.png";

export const InfiniteMovingCards = ({
  items,
  className,
}) => {
  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <div
        className={cn(
          "relative z-20 max-w-7xl 2xl:max-w-[105rem] overflow-hidden mx-auto px-4",
          className
        )}
      >
        <ul
          className={cn(
            "grid gap-6 py-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 place-items-center"
          )}
        >
          {items.map((item) => (
            <li
              key={item.name}
              className="relative w-full  rounded-2xl border-0 shadow-lg shadow-[#badbce] px-8 py-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white"
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

              <blockquote className="relative">
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>

                <span
                  className="relative z-20 text-sm md:text-base leading-relaxed block mb-8 font-normal"
                  style={{
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    color: "#000000",
                  }}
                >
                  {item.quote}
                </span>

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
          ))}
        </ul>
      </div>
    </>
  );
};
