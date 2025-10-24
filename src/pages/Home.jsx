import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import HowIHelping from '../components/HowIHelping';
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
    <>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Macey's Method | Virtual Assistant Training & Coaching UK</title>
        <meta 
          name="description" 
          content="Master virtual assistant skills with Macey's Method. Online training, coaching, and mentorship for aspiring VAs in the UK. Learn bookkeeping, admin, client management, and start earning as a VA." 
        />
        <meta 
          name="keywords" 
          content="virtual assistant training, VA course UK, virtual assistant coaching, online VA training, administrative training, how to become a VA" 
        />
        <meta name="language" content="English" />
        <meta name="author" content="Macey's Method" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph (Social Media) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maceysmethod.co.uk/" />
        <meta property="og:title" content="Macey's Method | Virtual Assistant Training & Coaching" />
        <meta 
          property="og:description" 
          content="Professional virtual assistant training and mentorship program in the UK" 
        />
        <meta property="og:image" content="https://maceysmethod.co.uk/og-image.jpg" />
        <meta property="og:site_name" content="Macey's Method" />
        
        {/* Twitter Card */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://maceysmethod.co.uk/" />
        <meta name="twitter:title" content="Macey's Method | VA Training" /> */}
        {/* <meta 
          name="twitter:description" 
          content="Learn virtual assistant skills with professional coaching" 
        /> */}
        {/* <meta name="twitter:image" content="https://maceysmethod.co.uk/og-image.jpg" /> */}
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://maceysmethod.co.uk/" />
        
        {/* JSON-LD Schema - EducationalOrganization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Macey's Method",
            "url": "https://maceysmethod.co.uk",
            "image": "https://maceysmethod.co.uk/logo.jpg",
            "description": "Virtual Assistant training and coaching program in the UK",
            "sameAs": [
              "https://www.linkedin.com/in/macey-cherrill-a5b9092aa",
              "https://www.instagram.com/maceys.method"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "GB",
              "addressRegion": "United Kingdom"
            },
            "founder": {
              "@type": "Person",
              "name": "Macey"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://maceysmethod.co.uk",
              "category": "Training Course"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "50"
            }
          })}
        </script>
        
        {/* JSON-LD Schema - FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Macey's Method?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Macey's Method is a comprehensive virtual assistant training and coaching program designed to help aspiring VAs develop the skills needed to start and grow a successful VA business."
                }
              },
              {
                "@type": "Question",
                "name": "Is this course for beginners?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Macey's Method welcomes all levels. Whether you're completely new to being a VA or looking to enhance your existing skills, our program is designed for you."
                }
              },
              {
                "@type": "Question",
                "name": "How long does the training take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The program is self-paced, allowing you to learn at your own speed. Most students complete the training within 4-8 weeks depending on their commitment level."
                }
              },
              {
                "@type": "Question",
                "name": "What will I learn in the VA training?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You'll learn bookkeeping, email management, scheduling, client communication, CRM tools, administrative skills, and how to start and manage your own VA business."
                }
              },
              {
                "@type": "Question",
                "name": "Do I get one-on-one coaching?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Macey's Method includes personalized coaching and mentorship to help you succeed in your VA journey."
                }
              },
              {
                "@type": "Question",
                "name": "How much can I earn as a virtual assistant?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "VA earnings vary based on your experience and rates, but many of our graduates earn £15-£50+ per hour depending on their specialization and client base."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen overflow-hidden">
        <Header />
        <main>
          <Hero />
          <ModernMarquee />
          <About />
          <Services />
          <HowIHelping />
          <Testimonials />
          <LetsChat />
          <CalendyWidget/>
          <ContactForm />
          <InstagramFeed />
        </main>
        <Footer />
      </div>
    </>
  );
}