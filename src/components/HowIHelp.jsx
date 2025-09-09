import React from 'react';

export default function HowIHelp() {
  const packages = [
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      title: "Monthly Retainer Plan",
      price: "From £300",
      description: "Consistent, long-term support for ongoing business needs with dedicated monthly hours."
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      title: "10 Hour Block Plan", 
      price: "£300",
      description: "Use your 10 hours anytime within 2 months for flexible, project-based support."
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      title: "VIP Day Intensive",
      price: "£500",
      description: "One focused day dedicated to transforming a specific area of your business operations."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 
            className="text-4xl lg:text-6xl font-light text-[#2d2826] mb-8 tracking-tight leading-tight"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            How I help
          </h2>
          <p 
            className="text-lg lg:text-xl text-[#666] max-w-4xl mx-auto leading-relaxed font-light"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Depending on your needs, I like to start with a zoom call to get to know each other, find out more about your business and to see if we're a good match!
          </p>
        </div>
        
        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className="group bg-[#faf9f7] rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img 
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Content */}
              <div className="p-8 lg:p-10">
                <h3 
                  className="text-2xl lg:text-3xl font-light text-[#2d2826] mb-4 tracking-wide leading-tight"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {pkg.title}
                </h3>
                
                <p 
                  className="text-[#d4a574] text-xl lg:text-2xl font-light mb-6 tracking-wide"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {pkg.price}
                </p>
                
                <p 
                  className="text-base lg:text-lg text-[#666] leading-relaxed font-light"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  {pkg.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button 
            className="bg-[#d4a574] text-white px-10 py-4 rounded-full hover:bg-[#c29660] transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-light text-base uppercase tracking-widest"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Let's Chat
          </button>
        </div>
      </div>
    </section>
  );
}