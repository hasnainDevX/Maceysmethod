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
    // GSAP scroll animations
    if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
      const { gsap, ScrollTrigger } = window;
      
      // fade in each section when scrolled into view
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

      // stagger service cards on scroll
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

      // testimonial cards slide in from left
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
      <Helmet>
        {/* Main SEO tags */}
        <title>Macey's Method | Professional Virtual Assistant Services UK</title>
        <meta 
          name="description" 
          content="Professional virtual assistant services in the UK. Email management, social media management, calendar management, CRM support, and administrative support for entrepreneurs and growing businesses." 
        />
        <meta 
          name="keywords" 
          content="virtual assistant UK, VA services, email management, social media management, administrative support, business support" 
        />
        <meta name="language" content="English" />
        <meta name="author" content="Macey Cherrill" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://maceysmethod.co.uk/" />
        
        {/* Social media sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maceysmethod.co.uk/" />
        <meta property="og:title" content="Macey's Method | Professional Virtual Assistant Services" />
        <meta 
          property="og:description" 
          content="Grow and scale your business with behind-the-scenes support from a professional virtual assistant" 
        />
        <meta property="og:image" content="https://maceysmethod.co.uk/og-image.jpg" />
        <meta property="og:site_name" content="Macey's Method" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://maceysmethod.co.uk/" />
        <meta name="twitter:title" content="Macey's Method | Virtual Assistant Services" />
        <meta name="twitter:description" content="Professional administrative and social media support for entrepreneurs" />
        <meta name="twitter:image" content="https://maceysmethod.co.uk/og-image.jpg" />
        
        {/* Business info for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Macey's Method",
            "url": "https://maceysmethod.co.uk",
            "image": "https://maceysmethod.co.uk/logo.jpg",
            "description": "Professional virtual assistant providing email management, social media management, calendar management, CRM support, and administrative services for entrepreneurs and growing businesses in the UK",
            "founder": {
              "@type": "Person",
              "name": "Macey Cherrill"
            },
            "sameAs": [
              "https://www.instagram.com/maceys.method",
              "https://www.linkedin.com/in/macey-cherrill-a5b9092aa"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "GB",
              "addressRegion": "United Kingdom"
            },
            "contact": {
              "@type": "ContactPoint",
              "contactType": "Customer Support",
              "email": "maceycherrill27@gmail.com",
              "url": "https://maceysmethod.co.uk/#contact"
            },
            "service": [
              {
                "@type": "Service",
                "name": "Email Management",
                "description": "Professional email inbox organization and management"
              },
              {
                "@type": "Service",
                "name": "Social Media Management",
                "description": "Graphic creation, captions, hashtags, reels, and post scheduling"
              },
              {
                "@type": "Service",
                "name": "Calendar Management",
                "description": "Seamlessly coordinate your schedule and optimize your time"
              },
              {
                "@type": "Service",
                "name": "CRM Support",
                "description": "Keep backend systems up-to-date and organized"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "50"
            }
          })}
        </script>
        
        {/* Organization schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Macey's Method",
            "url": "https://maceysmethod.co.uk",
            "logo": "https://maceysmethod.co.uk/logo.jpg",
            "sameAs": [
              "https://www.instagram.com/maceys.method",
              "https://www.linkedin.com/in/macey-cherrill-a5b9092aa"
            ]
          })}
        </script>
        
        {/* Navigation breadcrumbs */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://maceysmethod.co.uk/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About",
                "item": "https://maceysmethod.co.uk/#about"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Services",
                "item": "https://maceysmethod.co.uk/#services"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Pricing",
                "item": "https://maceysmethod.co.uk/#pricing"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Contact",
                "item": "https://maceysmethod.co.uk/#contact"
              }
            ]
          })}
        </script>
        
        {/* FAQs for Google rich snippets */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What services does Macey's Method provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Macey's Method provides professional virtual assistant services including email management, social media management, calendar management, CRM support, and administrative tasks for entrepreneurs and growing businesses."
                }
              },
              {
                "@type": "Question",
                "name": "What packages are available?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer the Essentials package (£297/month), the Elevate package (£497/month), and custom packages tailored to your specific business needs."
                }
              },
              {
                "@type": "Question",
                "name": "How can I book a consultation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can schedule a free 30-minute discovery call to discuss your business needs and explore how Macey's Method can support your business growth."
                }
              },
              {
                "@type": "Question",
                "name": "What is included in the social media package?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The social media package includes graphic creation, caption writing, hashtag strategy, reel scheduling, and daily engagement with your audience."
                }
              },
              {
                "@type": "Question",
                "name": "How do I contact Macey?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can reach out via email at maceycherrill27@gmail.com, schedule a call, or fill out the contact form on the website. Response time is within 24 hours."
                }
              },
              {
                "@type": "Question",
                "name": "Is there a free trial or consultation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer a complimentary 30-minute discovery call to discuss your goals and see if we're the right fit for your business."
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