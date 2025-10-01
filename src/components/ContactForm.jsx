import React, { useState, useRef } from "react";

export default function ContactForm() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    newsletter: false,
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateName = (value) => {
    if (!value.trim()) return "This field is required";
    if (value.trim().length < 2) return "Must be at least 2 characters";
    if (/\d/.test(value)) return "Numbers are not allowed";
    return "";
  };

  const validateEmail = (value) => {
    if (!value.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "Please enter a valid email";
    return "";
  };

  const validateRequired = (value) => {
    if (!value.trim()) return "This field is required";
    return "";
  };

  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
      case "lastName":
        return validateName(value);
      case "email":
        return validateEmail(value);
      case "subject":
      case "message":
        return validateRequired(value);
      default:
        return "";
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    if (touched[name]) {
      const error = validateField(name, newValue);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const isFormValid = () => {
    const requiredFields = ["firstName", "lastName", "email", "subject", "message"];
    return requiredFields.every(field => {
      const error = validateField(field, formData[field]);
      return !error;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (key !== "newsletter") {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
        newsletter: false,
      });
      setTouched({});
      setErrors({});
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClassName = (fieldName) => {
    const baseClass = "w-full px-4 py-3 bg-white border rounded-3xl transition-all duration-300 text-[#000000] placeholder-gray-400";
    
    if (touched[fieldName] && errors[fieldName]) {
      return `${baseClass} border-[#badbce] focus:outline-none focus:ring-2 focus:ring-red-2`;
    }
    
    if (touched[fieldName] && !errors[fieldName] && formData[fieldName]) {
      return `${baseClass} border-[#6b8d71] focus:outline-none focus:ring-2 focus:ring-[#73a693]`;
    }
    
    return `${baseClass} border-[#badbce] focus:outline-none focus:ring-2 focus:ring-[#73a693] hover:border-[#73a693]`;
  };

  return (
    <section id="contact" className="py-24 bg-white" data-testid="section-contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-light text-[#6b8d71] mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Get in <em className="italic">touch!</em>
          </h2>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            If you're interested in working with me, please fill out the form
            below and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Contact Form */}
          <div className="bg-white p-10">
            <div ref={formRef} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium text-[#000000] mb-3"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    First Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={getInputClassName("firstName")}
                      style={{ fontFamily: "Inter, sans-serif" }}
                      placeholder="John"
                      data-testid="input-first-name"
                    />
                    {touched.firstName && !errors.firstName && formData.firstName && (
                      <svg className="w-5 h-5 text-[#6b8d71] absolute right-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  {touched.firstName && errors.firstName && (
                    <p className="mt-1.5 text-sm text-red-300" style={{ fontFamily: "Inter, sans-serif" }}>
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-[#000000] mb-3"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Last Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={getInputClassName("lastName")}
                      style={{ fontFamily: "Inter, sans-serif" }}
                      placeholder="Doe"
                      data-testid="input-last-name"
                    />
                    {touched.lastName && !errors.lastName && formData.lastName && (
                      <svg className="w-5 h-5 text-[#6b8d71] absolute right-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  {touched.lastName && errors.lastName && (
                    <p className="mt-1.5 text-sm text-red-500" style={{ fontFamily: "Inter, sans-serif" }}>
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  className="block text-sm font-medium text-[#000000] mb-3"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Email Address *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={getInputClassName("email")}
                    style={{ fontFamily: "Inter, sans-serif" }}
                    placeholder="your@email.com"
                    data-testid="input-email"
                  />
                  {touched.email && !errors.email && formData.email && (
                    <svg className="w-5 h-5 text-[#6b8d71] absolute right-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                {touched.email && errors.email && (
                  <p className="mt-1.5 text-sm text-red-500" style={{ fontFamily: "Inter, sans-serif" }}>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label
                  className="block text-sm font-medium text-[#000000] mb-3"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Subject *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={getInputClassName("subject")}
                    style={{ fontFamily: "Inter, sans-serif" }}
                    placeholder="What can I help you with?"
                    data-testid="input-subject"
                  />
                  {touched.subject && !errors.subject && formData.subject && (
                    <svg className="w-5 h-5 text-[#6b8d71] absolute right-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                {touched.subject && errors.subject && (
                  <p className="mt-1.5 text-sm text-red-500" style={{ fontFamily: "Inter, sans-serif" }}>
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label
                    className="block text-sm font-medium text-[#000000]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Message *
                  </label>
                  <span className="text-xs text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>
                    {formData.message.length}/500
                  </span>
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    maxLength={500}
                    rows="5"
                    className={getInputClassName("message") + " resize-none"}
                    style={{ fontFamily: "Inter, sans-serif" }}
                    placeholder="Tell me about your project or how I can help..."
                    data-testid="textarea-message"
                  ></textarea>
                </div>
                {touched.message && errors.message && (
                  <p className="mt-1.5 text-sm text-red-500" style={{ fontFamily: "Inter, sans-serif" }}>
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Newsletter Checkbox */}
              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-[#6b8d71] bg-white border-[#badbce] rounded-md
                           focus:ring-[#73a693] focus:ring-2 mt-0.5"
                  data-testid="checkbox-newsletter"
                />
                <label
                  htmlFor="newsletter"
                  className="text-sm text-gray-600 leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Yes, I'd like to receive helpful tips and updates via email
                </label>
              </div>

              {/* Submit Status */}
              {submitStatus === "success" && (
                <div
                  className="p-4 bg-[#badbce] border border-[#6b8d71] rounded-2xl text-[#6b8d71] flex items-center gap-2"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Thank you for your message! I'll get back to you within 24 hours.
                </div>
              )}

              {submitStatus === "error" && (
                <div
                  className="p-4 bg-red-50 border border-red-200 rounded-2xl text-red-800"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  There was an error sending your message. Please try again or email me directly.
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={isSubmitting || !isFormValid()}
                className="w-full bg-[#73a693] text-white px-8 py-4 rounded-3xl font-medium
                         hover:bg-[#6b8d71] transition-all duration-300 
                         disabled:opacity-50 disabled:cursor-not-allowed
                         inline-flex items-center justify-center gap-2
                         hover:shadow-lg"
                style={{ fontFamily: "Inter, sans-serif" }}
                data-testid="button-submit"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending your message...
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5"
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
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Contact Info Section - Redesigned */}
          <div className="space-y-12 lg:pt-8 px-6 lg:px-0">
            <div>
              <h3
                className="text-3xl font-light text-[#000000] mb-6"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Let's work together
              </h3>
              <p
                className="text-lg text-gray-600 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                I'm here to help streamline your business operations so you can
                focus on what you do best. Whether you need ongoing support or a
                one-time project, I'd love to hear about your needs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#ecc9c6] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-[#df749d]"
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
                </div>
                <div>
                  <p
                    className="font-medium text-[#000000] mb-1"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Quick Response
                  </p>
                  <p
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    I'll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#badbce] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-[#6b8d71]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    className="font-medium text-[#000000] mb-1"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Free Consultation
                  </p>
                  <p
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    30-minute discovery call included
                  </p>
                </div>
              </div>
            </div>

            {/* Professional workspace image */}
            <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1470&auto=format&fit=crop"
                alt="Professional workspace with modern aesthetic"
                className="w-full h-[20rem] object-cover"
                data-testid="img-contact"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}