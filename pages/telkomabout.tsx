import React from 'react';

const TelkomAbout = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-3xl font-extrabold text-[#005288] leading-tight">
            What is Telkom's Smart Router?
          </h2>
          
          <p className="text-[#005288] text-lg leading-relaxed font-medium">
            Introducing Telkom's new smart router, a cutting-edge device 
            designed to enhance your internet experience. This router offers 
            reliable connectivity, making it perfect for streaming, gaming, and 
            browsing. With its impressive speed and stability, the Telkom Smart 
            Router ensures that you can enjoy your online activities 
            without interruptions.
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <img 
              src="/friends-phone.png" 
              alt="Friends enjoying high speed internet" 
              className="w-full h-auto object-cover transform scale-x-[-1]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default TelkomAbout;
