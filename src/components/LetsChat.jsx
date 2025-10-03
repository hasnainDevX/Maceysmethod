import React, { useState } from "react";

export default function LetsChat() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleBookCall = () => {
    window.open("https://calendly.com/codebyte-wd/30min", "_blank");
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("maceycherrill27@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section id="book-a-call" className="py-32 bg-[#f2fdf8]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2
            className="text-5xl md:text-7xl font-light text-[#6b8d71] mb-8 tracking-tight"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Let's Chat
          </h2>
          <p
            className="text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            I'd love to hear about your business and explore how we can work together.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Book Call */}
          <div className="text-center md:text-center">
            <div className="inline-block mb-6">
              <div className="w-16 h-16 rounded-full bg-[#badbce] flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-[#6b8d71]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            <h3
              className="text-2xl font-light text-[#000000] mb-4"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Book a Discovery Call
            </h3>

            <p
              className="text-gray-600 font-light leading-relaxed mb-8"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Schedule a complimentary 30-minute consultation to discuss your goals and see if we're the right fit.
            </p>

            <button
              onClick={handleBookCall}
              className="group inline-flex items-center gap-2 text-[#6b8d71] font-light border-b-2 border-[#6b8d71] pb-1 hover:border-[#73a693] hover:text-[#73a693] transition-all duration-300 cursor-pointer"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Schedule Now
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Right - Email */}
          <div className="text-center md:text-center">
            <div className="inline-block mb-6">
              <div className="w-16 h-16 rounded-full bg-[#ecc9c6] flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-[#df749d]"
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
              </div>
            </div>

            <h3
              className="text-2xl font-light text-[#000000] mb-4"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Send an Email
            </h3>

            <p
              className="text-gray-600 font-light leading-relaxed mb-8"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Prefer email? Drop me a message and I'll respond within 24 hours.
            </p>

            <div className="flex flex-row gap-3 justify-center md:justify-center" onClick={handleCopyEmail}>
              <a
                href="mailto:maceycherrill27@gmail.com"
                className="group inline-flex items-center gap-2 text-[#df749d] font-light border-b-2 border-[#df749d] pb-1 hover:border-[#ecc9c6] hover:text-[#ecc9c6] transition-all duration-300"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                maceycherrill27@gmail.com
              </a>

              <button
                className="group relative inline-flex items-center gap-2 text-gray-500 hover:text-[#df749d] transition-colors duration-300"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                {emailCopied ? (
                  <>
                    <svg
                      className="w-5 h-5 text-[#6b8d71]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-[#6b8d71]">Copied!</span>
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
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}