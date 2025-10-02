import {
    ArrowRight,
    Star
} from "lucide-react";
import { useState } from "react";
import { categories } from "../../data.js";

export default function HowIHelp() {
  const [activeCategory, setActiveCategory] = useState("social");
  const currentPackages = categories[activeCategory];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-mint rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-6 lg:px-16 relative">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block mb-6 relative">
            <span
              className="text-rose text-xs font-semibold tracking-[0.4em] uppercase relative z-10"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Support That Scales
            </span>
            <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose/30 to-transparent"></div>
          </div>
          <h2
            className="text-4xl lg:text-6xl font-light text-sage mb-12 tracking-tight leading-tight relative"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Choose Your Package
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {Object.entries(categories).map(([key, category]) => {
              const Icon = category.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`group relative px-8 py-4 rounded-2xl font-medium text-sm tracking-wider transition-all duration-500 flex items-center gap-3 ${
                    activeCategory === key
                      ? "bg-gradient-to-r from-sage to-sage/90 text-white shadow-lg"
                      : "bg-white text-sage/80 hover:text-sage shadow-sm hover:shadow-md"
                  }`}
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  <Icon
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeCategory === key
                        ? "rotate-0"
                        : "group-hover:rotate-12"
                    }`}
                  />
                  <span className="uppercase">{category.name}</span>
                  {activeCategory === key && (
                    <div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent 
                      animate-pulse pointer-events-none"
                    ></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Header with Background */}
        {/* <div className="relative mb-16 rounded-3xl overflow-hidden h-48 group">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ 
              backgroundImage: `url('${currentPackages.bgImage}')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-sage/95 via-sage/85 to-transparent"></div>
          <div className="relative z-10 h-full flex items-center px-12">
            <div>
              <h3 className="text-3xl font-light text-white mb-3"
                style={{ fontFamily: '"Playfair Display", serif' }}>
                {categories[activeCategory].name} Solutions
              </h3>
              <p
                className="text-white/90 font-light max-w-2xl leading-relaxed"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                {currentPackages.description}
              </p>
            </div>
          </div>
        </div> */}

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-16">
          {currentPackages.packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative overflow-hidden !rounded-3xl transition-all duration-500 hover:shadow-xl group h-[600px] ${
                pkg.popular
                  ? "shadow-xl scale-105 lg:scale-110 rounded-2xl"
                  : "shadow-lg hover:shadow-2xl rounded-3xl"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div
                  className="absolute top-3 left-8 z-50 flex items-center gap-2 bg-gradient-to-r from-rose to-rose/90 
                  text-white px-5 py-2 rounded-full shadow-lg"
                >
                  <Star className="w-3 h-3 fill-white" />
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    Most Popular
                  </span>
                </div>
              )}
              {/* Background Image - Top Half */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${pkg.img}')`,
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
            <div className="inline-block w-12 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"></div>

            <p
              className="text-gray-600 font-light mb-10 text-lg leading-relaxed"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Need something more custom? Let's create a package that perfectly
              fits your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className="group bg-sage text-white px-10 py-4 rounded-2xl hover:bg-sage/90 transition-all duration-300 
                  font-medium text-sm uppercase tracking-wider shadow-lg hover:shadow-xl flex items-center gap-3"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                <span>Schedule Discovery Call</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                className="text-sage font-medium text-sm uppercase tracking-wider hover:text-rose 
                  transition-colors duration-300 flex items-center gap-2 group"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                <span>Custom Package</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
