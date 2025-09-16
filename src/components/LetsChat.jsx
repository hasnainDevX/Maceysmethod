import React from "react";

export default function LetsChat() {
  const handleBookCall = () => {
    // Use the same URL as the inline widget
    window.open("https://calendly.com/codebyte-wd/30min", "_blank");
  };

  return (
    <section id="book-a-call" className="py-20 bg-[#faf9f7]" data-testid="section-lets-chat">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-light text-[#2d2826] mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Let's <em className="italic">Chat!</em>
          </h2>
          <p
            className="text-xl text-[#666] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            I'd love to chat with you about your business needs. Book a call
            using my Calendly below, or send me an email!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Calendly Booking Card */}
          <div
            className="bg-white p-6 rounded-2xl shadow-sm border border-[#f0efed] 
                        hover:shadow-md transition-shadow duration-300"
          >
            <div className="text-center">
              <div
                className="w-14 h-14 bg-gradient-to-br from-[#d4a574] to-[#b8935f] 
                            rounded-xl mx-auto mb-5 flex items-center justify-center"
              >
                <svg
                  className="w-7 h-7 text-white"
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

              <h3
                className="text-xl font-light text-[#2d2826] mb-3"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Book a Discovery Call
              </h3>

              <p
                className="text-[#666] mb-5 leading-relaxed text-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Schedule a complimentary 30-minute consultation to explore how
                we can work together.
              </p>

              <button
                onClick={handleBookCall}
                className="bg-[#d4a574] text-white px-6 py-3 rounded-full 
                         hover:bg-[#b8935f] transition-colors duration-300 font-medium text-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
                data-testid="button-book-call"
              >
                Book Your Call
              </button>
            </div>
          </div>

          {/* Email Contact Card */}
          <div
            className="bg-white p-6 rounded-2xl shadow-sm border border-[#f0efed] 
                        hover:shadow-md transition-shadow duration-300"
          >
            <div className="text-center">
              <div
                className="w-14 h-14 bg-gradient-to-br from-[#2d2826] to-[#1a1716] 
                            rounded-xl mx-auto mb-5 flex items-center justify-center"
              >
                <svg
                  className="w-7 h-7 text-white"
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

              <h3
                className="text-xl font-light text-[#2d2826] mb-3"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Send an Email
              </h3>

              <p
                className="text-[#666] mb-5 leading-relaxed text-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Prefer to reach out directly? I'd love to hear from you and will
                respond within 24 hours.
              </p>

              <a
                href="mailto:hello@miava4.com?subject=I'd%20love%20to%20chat%20about%20my%20business!"
                className="inline-block bg-[#2d2826] text-white px-6 py-3 rounded-full 
                         hover:bg-[#1a1716] transition-colors duration-300 font-medium text-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
                data-testid="link-email"
              >
                hello@miava4.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
