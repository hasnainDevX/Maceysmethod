import React from "react";
import { InlineWidget } from "react-calendly";

const CalendyWidget = () => {
  return (
    <>
      {/* Calendly Widget Embed */}
      <div id="schedule-a-call" className="bg-off-white/40 py-20 px-6 lg:px-12  mx-auto">
         <div className="text-center mb-12">
          <h2
            className="text-4xl lg:text-6xl font-light text-sage mb-6 tracking-tight leading-tight"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Schedule Your Free Call Here
          </h2>
           <p
            className="text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
             Pick a time that works best for you
          </p>
        </div>

        {/* Calendly Inline Widget */}
        <div className=" rounded-2xl overflow-hidden relative">
          <InlineWidget
            className=""
            pageSettings={{ hideGdprBanner: true, hideEventTypeDetails: false }}
            url="https://calendly.com/maceycherrill27/30min?primary_color=6b8d71"
            styles={{ minWidth: "100%", height: "700px" }}
          />
        </div>
      </div>
    </>
  );
};

export default CalendyWidget;
