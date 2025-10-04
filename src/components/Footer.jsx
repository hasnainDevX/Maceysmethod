import React, { useState } from "react";

export default function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/maceys.method",
      icon: (
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      ),
    },
    {
      name: "Email",
      href: "mailto:hello@maceysmethod.com",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
      stroke: true,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/macey-cherrill-a5b9092aa",

      icon: (
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      ),
    },
  ];

  const navigationLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-[#55705a] text-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-mint rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Main Footer Content - Horizontal Layout */}
      <div className="relative py-12 lg:py-16">
        <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="transform transition-transform duration-500 hover:scale-105">
                <h3
                  className="text-3xl lg:text-4xl font-light text-white mb-3"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  Macey's Method
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-mint to-rose rounded-full"></div>
              </div>

              <p
                className="text-white/80 leading-relaxed text-sm lg:text-base"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                Supporting ambitious entrepreneurs by managing the details, so you can focus on building the business everyone talks about.
              </p>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    className="relative w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center
                             transition-all duration-300 hover:bg-mint hover:shadow-lg hover:shadow-mint/30 hover:-translate-y-1
                             group"
                  >
                    <svg
                      className="w-5 h-5 transition-all duration-300 group-hover:scale-110"
                      fill={social.stroke ? "none" : "currentColor"}
                      stroke={social.stroke ? "currentColor" : "none"}
                      viewBox="0 0 24 24"
                    >
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4
                className="text-base font-medium mb-5 text-mint tracking-wider uppercase"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                Navigate
              </h4>
              <ul className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-white/80 hover:text-mint transition-colors duration-300 text-left relative group text-sm"
                      style={{ fontFamily: '"Inter", sans-serif' }}
                    >
                      <span className="relative">
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-mint transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h4
                className="text-base font-medium mb-5 text-mint tracking-wider uppercase"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                Get in Touch
              </h4>
              <div className="grid gap-4">
                <a
                  href="mailto:maceycherrill27@gmail.com"
                  className="flex items-start text-white/80 hover:text-mint transition-all duration-300 group"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  <svg
                    className="w-5 h-5 mr-3 text-mint mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="break-words text-sm">maceycherrill27@gmail.com</span>
                </a>

                <div
                  className="flex items-start text-white/70 text-sm"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  <svg
                    className="w-5 h-5 mr-3 text-mint mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <span className="text-mint font-medium">Response:</span> Within 24 hours
                  </div>
                </div>

                <div
                  className="flex items-start text-white/70 text-sm"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  <svg
                    className="w-5 h-5 mr-3 text-mint mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <span className="text-mint font-medium">Time zone:</span> GMT (London)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Gradient */}
      <div className="relative border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-mint/5 via-transparent to-rose/5"></div>
        <div className="relative max-w-7xl 2xl:max-w-[90rem] mx-auto px-6 lg:px-16 py-5">
          <p
            className="text-white/60 text-xs lg:text-sm text-center"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            &copy; {new Date().getFullYear()} Macey's Method. All rights reserved.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
      `}</style>
    </footer>
  );
}