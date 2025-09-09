import React from "react";
import { InlineWidget } from "react-calendly";

const CalendyWidget = () => {
  return (
    <>
      {/* Calendly Widget Embed */}
      <div className="bg-[#faf9f7]">
        <div className="text-center">
          <h3
            className="text-5xl font-light text-[#2d2826] mb-2"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Schedule Directly Below
          </h3>
          <p
            className="text-[#666]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Pick a time that works best for you
          </p>
        </div>

        {/* Calendly Inline Widget */}
        <div className=" rounded-2xl overflow-hidden relative">
          <InlineWidget
            className=""
            pageSettings={{ hideGdprBanner: true, hideEventTypeDetails: false }}
            url="https://calendly.com/codebyte-wd/30min?primary_color=d4a574"
            styles={{ minWidth: "100%", height: "700px" }}
          />
        </div>
      </div>
    </>
  );
};

export default CalendyWidget;
