import React from 'react';
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import HowIHelp from '../components/HowIHelp';
// import Testimonials from '../components/Testimonials';
import LetsChat from '../components/LetsChat';
import ContactForm from '../components/ContactForm';
import InstagramFeed from '../components/InstagramFeed';
import Footer from '../components/Footer';
import CalendyWidget from '../components/CalendyWidget';
import Testimonials from '../components/Testimonials';
import ModernMarquee from '../components/ui/Marquee';


export default function Home() {
  useEffect(() => {
    // Initialize GSAP animations
    if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
      const { gsap, ScrollTrigger } = window;
      
      // Fade in animations for sections
      gsap.utils.toArray('section').forEach((section, index) => {
        gsap.fromTo(section, 
          { 
            opacity: 0, 
            y: 50 
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Service cards staggered animation
      gsap.fromTo('.service-card',
        {
          opacity: 0,
          y: 30,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.services-grid',
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Testimonial cards animation
      gsap.fromTo('.testimonial-card',
        {
          opacity: 0,
          x: -30
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.testimonials-grid',
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ModernMarquee />
        <About />
        <Services />
        <HowIHelp />
        {/* <TestimonialsStack /> */}
        <Testimonials />
        <LetsChat />
        <CalendyWidget/>
        {/* <ContactForm /> */}
        {/* <InstagramFeed /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
