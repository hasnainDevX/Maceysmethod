import React from "react";
import element1 from "../assets/new8.png";
import element2 from "../assets/new4.png";
export default function HowIHelp() {
  // Add image property to each package object
  const packages = [
    {
      title: "THE MINI PACKAGE",
      price: "£324",
      duration: "per month",
      hours: "12 hours",
      weekly: "3 hours per week",
      popular: false,
      image:
        "https://images.unsplash.com/photo-1629757509637-7c99379d6d26?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Small team/startup vibe
      features: [
        "12 hours per month",
        "3 hours per week",
        "Admin and/or Social Media Support",
        "Free optional catch-up call, up to once per week",
      ],
    },
    {
      title: "THE BASIC PACKAGE",
      price: "£520",
      duration: "per month",
      hours: "20 hours",
      weekly: "5 hours per week",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1499612585733-d005d10abeb3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Professional workspace
      features: [
        "20 hours per month",
        "5 hours per week",
        "Admin and/or Social Media Support",
        "Free optional catch-up call, up to once per week",
      ],
    },
    {
      title: "THE STANDARD PACKAGE",
      price: "£700",
      duration: "per month",
      hours: "28 hours",
      weekly: "7 hours per week",
      popular: false,
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=870&auto=format&fit=crop", // Executive/premium feel
      features: [
        "28 hours per month",
        "7 hours per week",
        "Admin and/or Social Media Support",
        "Free optional catch-up call, up to once per week",
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50/30">
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-6 lg:px-16 relative">
        <img
          className="hidden md:block absolute top-[14%] left-0 transform -translate-y-1/2 w-[6rem] lg:w-[8rem] opacity-80"
          src={element1}
          alt="element"
        />
        <img
          className="hidden md:block absolute top-[14%] right-0 transform -translate-y-1/2 w-[6rem] lg:w-[8rem] opacity-80"
          src={element2}
          alt="element"
        />
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block mb-6">
            <span
              className="text-rose text-sm font-medium tracking-[0.3em] uppercase"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Support That Scales
            </span>
          </div>
          <h2
            className="text-4xl lg:text-6xl font-light text-sage mb-6 tracking-tight leading-tight"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Choose Your Package
          </h2>
          {/* <p
            className="text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Tailored support packages designed to grow with your business needs
          </p> */}
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative overflow-hidden !rounded-3xl transition-all duration-500 hover:shadow-xl group h-[600px] ${
                pkg.popular
                  ? "shadow-xl scale-105 lg:scale-110 rounded-2xl"
                  : "shadow-lg hover:shadow-2xl rounded-3xl"
              }`}
            >
              {/* Background Image - Top Half */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${pkg.image}')`,
                  height: "50%",
                  top: 0,
                  filter: "brightness(0.75)",
                  zIndex: 1,
                }}
              >
                {/* <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div> */}
              </div>

              {/* Content Container */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Top Section - Over Image */}
                <div className="pt-12 pb-8 px-8 text-center text-white flex-1 flex flex-col justify-center">
                  <h3
                    className="text-lg font-medium mb-4 tracking-widest uppercase drop-shadow-lg"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    {pkg.title}
                  </h3>

                  <div className="mb-4">
                    <span
                      className="text-5xl lg:text-6xl font-light drop-shadow-lg"
                      style={{ fontFamily: '"Playfair Display", serif' }}
                    >
                      {pkg.price}
                    </span>
                    <span
                      className="text-white/90 text-sm font-light ml-2 drop-shadow"
                      style={{ fontFamily: '"Inter", sans-serif' }}
                    >
                      {pkg.duration}
                    </span>
                  </div>

                  <div className="bg-white/20 backdrop-blur-sm rounded-full py-2 px-4 inline-block">
                    <span
                      className="text-white font-medium text-sm drop-shadow"
                      style={{ fontFamily: '"Inter", sans-serif' }}
                    >
                      {pkg.hours} • {pkg.weekly}
                    </span>
                  </div>
                </div>

                {/* Bottom Section - Solid Background */}
                <div className="bg-white px-8 py-8 flex-1 flex flex-col">
                  {/* Features List */}
                  <div className="space-y-3 mb-6 flex-1">
                    {pkg.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-1.5 h-1.5 bg-rose rounded-full mt-2 flex-shrink-0"></div>
                        <p
                          className="text-gray-700 font-light leading-relaxed text-sm"
                          style={{ fontFamily: '"Inter", sans-serif' }}
                        >
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 px-6 rounded-full font-medium text-sm uppercase tracking-widest transition-all duration-300 ${
                      pkg.popular
                        ? "bg-rose text-white hover:bg-sage shadow-md hover:shadow-lg"
                        : "bg-mint text-white hover:bg-sage shadow-md hover:shadow-lg"
                    }`}
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="max-w-3xl mx-auto">
            <p
              className="text-gray-600 font-light mb-8 text-lg leading-relaxed"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Not sure which package is right for you? Let's have a conversation
              about your specific needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              
              <button
                className="bg-mint text-white px-10 py-4 rounded-full hover:bg-sage transition-all duration-300 font-medium text-sm uppercase tracking-widest shadow-sm hover:shadow-md"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                Schedule Discovery Call
              </button>

              <button
                className="text-sage font-medium text-sm uppercase tracking-widest hover:text-rose transition-colors duration-300"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                View All Services →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}