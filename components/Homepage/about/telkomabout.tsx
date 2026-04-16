import React from 'react';


export const content = {
  title: "What is Telkom's Smart Router?",
  description: "Introducing Telkom's new smart router, a cutting-edge device designed to enhance your internet experience...",
  image: "/friends-phone.png",
};

const TelkomAbout = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#005288] leading-tight">
            {content.title}
          </h2>
          
          <p className="text-[#005288] text-lg leading-relaxed font-medium">
            {content.description}
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <img 
              src={content.image} 
              alt= "Friends enjoying high speed internet"
              className="w-full h-auto object-cover transform scale-x-[-1]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default TelkomAbout;
