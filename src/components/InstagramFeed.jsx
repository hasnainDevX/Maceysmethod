import React from "react";
import { useEffect, useState } from "react";
import { Instagram, Linkedin } from "lucide-react";
import { instagramFeedContent } from "../../data.json";

export default function InstagramFeed() {
  const [imageError, setImageError] = useState({});

  useEffect(() => {
    // Inject Elfsight script once
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50/20 to-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-mint rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-rose rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-6 lg:px-16 relative">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block mb-6 relative">
            <span
              className="text-rose text-xs font-semibold tracking-[0.4em] uppercase relative z-10"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              {instagramFeedContent.badge}
            </span>
            <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose/30 to-transparent"></div>
          </div>
          
          <h2
            className="text-4xl lg:text-6xl font-light text-sage mb-6 tracking-tight leading-tight"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            {instagramFeedContent.title}
          </h2>
          
          <p
            className="text-base lg:text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            {instagramFeedContent.description}
          </p>
        </div>

        {/* Instagram Feed from Elfsight */}
        <div className="mb-16">
          <div
            className={instagramFeedContent.elfsightId}
            data-elfsight-app-lazy
          ></div>
        </div>

        {/* CTA Note */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-sm text-gray-500 font-light italic"
            style={{ fontFamily: '"Inter", sans-serif' }}>
            {instagramFeedContent.ctaNote}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={instagramFeedContent.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-sage to-sage/90 text-white px-10 py-4 rounded-2xl 
              hover:from-sage/90 hover:to-sage transition-all duration-300 font-medium text-sm 
              uppercase tracking-wider shadow-lg hover:shadow-xl flex items-center gap-3"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            <Instagram className="w-4 h-4" />
            <span>{instagramFeedContent.instagramButtonText}</span>
          </a>

          <a
            href={instagramFeedContent.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-sage font-medium text-sm uppercase tracking-wider 
              hover:text-rose transition-all duration-300 flex items-center gap-2"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            <Linkedin className="w-4 h-4" />
            <span>{instagramFeedContent.linkedinButtonText}</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}