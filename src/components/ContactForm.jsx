import React, { useState, useRef } from 'react';

export default function ContactForm() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    newsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS integration - replace with your service details
      // Example: await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY');
      
      // For now, simulate EmailJS call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
        newsletter: false
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className="py-24 bg-white" data-testid="section-contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-[#2d2826] mb-6" 
              style={{ fontFamily: 'Playfair Display, serif' }}>
            Get in <em className="italic">touch!</em>
          </h2>
          <p className="text-xl text-[#666] max-w-2xl mx-auto leading-relaxed" 
             style={{ fontFamily: 'Inter, sans-serif' }}>
            If you're interested in working with me, please fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-[#faf9f7] p-10 rounded-2xl border border-[#f0efed]">
            <div ref={formRef} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#2d2826] mb-3" 
                         style={{ fontFamily: 'Inter, sans-serif' }}>
                    First Name *
                  </label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required 
                    className="w-full px-4 py-3 bg-white border border-[#e8e6e3] rounded-3xl 
                             focus:outline-none focus:ring-2 focus:ring-[#d4a574] focus:border-transparent
                             transition-all duration-300 text-[#2d2826] placeholder-[#999]
                             hover:border-[#d4a574]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    placeholder="Enter your first name"
                    data-testid="input-first-name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2d2826] mb-3" 
                         style={{ fontFamily: 'Inter, sans-serif' }}>
                    Last Name *
                  </label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required 
                    className="w-full px-4 py-3 bg-white border border-[#e8e6e3] rounded-3xl 
                             focus:outline-none focus:ring-2 focus:ring-[#d4a574] focus:border-transparent
                             transition-all duration-300 text-[#2d2826] placeholder-[#999]
                             hover:border-[#d4a574]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    placeholder="Enter your last name"
                    data-testid="input-last-name"
                  />
                </div>
              </div>
              
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[#2d2826] mb-3" 
                       style={{ fontFamily: 'Inter, sans-serif' }}>
                  Email Address *
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                  className="w-full px-4 py-3 bg-white border border-[#e8e6e3] rounded-3xl 
                           focus:outline-none focus:ring-2 focus:ring-[#d4a574] focus:border-transparent
                           transition-all duration-300 text-[#2d2826] placeholder-[#999]
                           hover:border-[#d4a574]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  placeholder="your@email.com"
                  data-testid="input-email"
                />
              </div>
              
              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-[#2d2826] mb-3" 
                       style={{ fontFamily: 'Inter, sans-serif' }}>
                  Subject *
                </label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required 
                  className="w-full px-4 py-3 bg-white border border-[#e8e6e3] rounded-3xl 
                           focus:outline-none focus:ring-2 focus:ring-[#d4a574] focus:border-transparent
                           transition-all duration-300 text-[#2d2826] placeholder-[#999]
                           hover:border-[#d4a574]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  placeholder="What can I help you with?"
                  data-testid="input-subject"
                />
              </div>
              
              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-[#2d2826] mb-3" 
                       style={{ fontFamily: 'Inter, sans-serif' }}>
                  Message *
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required 
                  rows="5" 
                  className="w-full px-4 py-3 bg-white border border-[#e8e6e3] rounded-3xl 
                           focus:outline-none focus:ring-2 focus:ring-[#d4a574] focus:border-transparent
                           resize-none transition-all duration-300 text-[#2d2826] placeholder-[#999]
                           hover:border-[#d4a574]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  placeholder="Tell me about your project or how I can help..."
                  data-testid="textarea-message"
                ></textarea>
              </div>
              
              {/* Newsletter Checkbox */}
              <div className="flex items-start gap-3 pt-2">
                <input 
                  type="checkbox" 
                  id="newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-[#d4a574] bg-white border-[#e8e6e3] rounded-2xl
                           focus:ring-[#d4a574] focus:ring-2 mt-0.5"
                  data-testid="checkbox-newsletter"
                />
                <label htmlFor="newsletter" className="text-sm text-[#666] leading-relaxed" 
                       style={{ fontFamily: 'Inter, sans-serif' }}>
                  Yes, I'd like to receive helpful tips and updates via email
                </label>
              </div>
              
              {/* Submit Status */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-2xl text-green-800" 
                     style={{ fontFamily: 'Inter, sans-serif' }}>
                  ✨ Thank you for your message! I'll get back to you within 24 hours.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-3xl text-red-800" 
                     style={{ fontFamily: 'Inter, sans-serif' }}>
                  There was an error sending your message. Please try again or email me directly.
                </div>
              )}
              
              <button 
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-[#d4a574] text-white px-8 py-4 rounded-3xl font-medium
                         hover:bg-[#b8935f] transition-colors duration-300 
                         disabled:opacity-50 disabled:cursor-not-allowed
                         inline-flex items-center justify-center gap-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
                data-testid="button-submit"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending your message...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>
          
          {/* Contact Info Section */}
          <div className="space-y-8">
            <div className="bg-[#faf9f7] p-8 rounded-2xl border border-[#f0efed]">
              <h3 className="text-2xl font-light text-[#2d2826] mb-4" 
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                Let's work together
              </h3>
              <p className="text-[#666] leading-relaxed mb-6" 
                 style={{ fontFamily: 'Inter, sans-serif' }}>
                I'm here to help streamline your business operations so you can focus on what you do best. 
                Whether you need ongoing support or a one-time project, I'd love to hear about your needs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#d4a574] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#2d2826]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Quick Response
                    </p>
                    <p className="text-sm text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      I'll respond within 24 hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2d2826] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#2d2826]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Free Consultation
                    </p>
                    <p className="text-sm text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      30-minute discovery call included
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Professional workspace image */}
            <div className="rounded-2xl overflow-hidden border border-[#f0efed]">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/67a9c7232f6bc0581ade3c6c/d280450a-e29c-43f1-984a-4139c9939107/WEB+6.jpg?format=1500w" 
                alt="Professional workspace with modern aesthetic" 
                className="w-full h-[22.8rem] object-cover"
                data-testid="img-contact"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}