import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import about1image from "../assets/clientimg1.jpg";
import about2image from "../assets/clientimg2.jpg";

export default function About() {
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Register the plugin
    gsap.registerPlugin(ScrollTrigger);

    // Image animation
    gsap.fromTo(
      imageRef1.current,
      {
        opacity: 0,
        x: -50,
        scale: 0.95,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef1.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none ",
        },
      }
    );

    // Image animation for the second image
    gsap.fromTo(
      imageRef2.current,
      {
        opacity: 0,
        x: 50,
        scale: 0.95,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef2.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none ",
        },
      }
    );
  

    // Text animation
    gsap.fromTo(
      textRef.current.children,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none ",
        },
      }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12  items-center">
          <div className="imgcontainer flex justify-start h-full scale-90">
            {/* Left Profile Image */}
            <div className="lg:col-span-1" ref={imageRef1}>
              <div className="bg-off-white  p-1 lg:p-2">
                <img
                  src={about2image}
                  alt="Professional female virtual assistant in UK"
                  className="w-full h-full 2xl:scale-110 transform 2xl:hover:scale-[1.05] hover:scale-[1.02] transition-all duration-500"
                />
              </div>
            </div>
          </div>
          

          {/* Center Text Content */}
          <div className="lg:col-span-1 text-center relative" ref={textRef}>
            {/* Welcome message */}
            <br />

            <br />
            <p
              className="text-rose/60 text-lg 2xl:text-xl font-light italic mb-6 tracking-wide xl:text-xl"
              style={{ fontFamily: '"Dancing Script", cursive' }}
            >
              Hey, welcome in!
            </p>

            {/* Main heading */}
            <h2
              className="text-5xl lg:text-7xl 2xl:text-8xl font-light text-rose mb-8 tracking-tight leading-none"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              I'm Macey
            </h2>

            {/* Description paragraphs */}
            <div className="space-y-6 mb-10">
              <p
                className="text-sm lg:text-base 2xl:text-2xl text-gray-600 leading-relaxed font-light mx-auto"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                The organised, proactive support behind busy entrepreneurs and
                growing businesses. Through Macey’s Method, I provide tailored
                admin and social media support that helps business owners
                reclaim their time and focus on what they do best.
              </p>

              <p
                className="text-sm lg:text-base 2xl:text-2xl text-gray-600 leading-relaxed font-light max-w-sm mx-auto"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                From inboxes to systems, I handle the behind-the-scenes so you
                can lead, create, and scale your business.
              </p>
            </div>

            {/* Learn more button */}
            <button
              onClick={scrollToServices}
              className="bg-mint text-white px-8 py-3 rounded-full hover:bg-sage transition-all duration-300 font-light text-sm uppercase tracking-widest 2xl:px-12 2xl:py-4 2xl:text-lg shadow-lg hover:shadow-xl cursor-pointer"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Learn more
            </button>
          </div>

          <div className="imgcontainer relative flex justify-end h-full scale-90 2xl:scale-100">
            {/* Right Decorative Image */}
            <div className="lg:col-span-1 hidden lg:block self-end w-full" ref={imageRef2}>
              <div className="bg-off-white p-1 lg:p-2 scale-90">
                <img
                  src="https://images.unsplash.com/photo-1519086588705-c935fdedcc14?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Elegant workspace setup"
                  className=" w-full transform hover:scale-[1.02] transition-all duration-500 s"
                />
              </div>
            </div>
            <div className="absolute bottom-[26rem] right-0 md:top-[0rem] md:right-[27vw] w-40 h-40 z-10 flex items-center justify-center md:scale-100 scale-75 xl:scale-150 translate-x-10">
              <div
                className="animate-spin w-56 h-56"
                style={{ animationDuration: "15s" }}
              >
                <svg
                  width="224"
                  height="224"
                  viewBox="0 0 224 224"
                  className="w-full h-full"
                >
                  <defs>
                    <path
                      id="circle"
                      d="M 112,112 m -90,0 a 90,90 0 1,1 180,0 a 90,90 0 1,1 -180,0"
                    />
                  </defs>
                  <text
                    fill="#6B7280"
                    fontSize="16"
                    fontWeight="300"
                    letterSpacing="3px"
                    fontFamily="'Inter', 'Helvetica Neue', sans-serif"
                  >
                    <textPath href="#circle">
                      MACEY • METHOD •• VIRTUAL • ASSISTANT •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
