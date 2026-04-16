import React from 'react';

const SetupSection: React.FC = () => {
  const steps = [
    "Insert SIM card",
    "Install battery",
    "Turn on the device",
    "If don't power by battery, connect the matching power adapter, the device will turn on automatically",
    "Connect to Wi-Fi network",
    "Open a web browser and go to http://192.168.0.1 and login as administrator. For the default administrator password refer to the sticker on the device.",
    "The screen can be activated by touching, or by pressing the 'Link' button.",
    "Start using your router"
  ];

  return (
    /* py-10 for mobile, xl:py-16 and px-6 xl:px-[275px] for desktop design spec */
    <section className="bg-white py-10 xl:py-16 px-6 xl:px-[275px] font-sans">
      
      {/* flex-col-reverse ensures the text is below the image on mobile if needed, 
          but md:flex-row places them side-by-side for desktop */}
      <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row items-center gap-12 xl:gap-[100px]">
        
        {/* Left Side: Content */}
        <div className="flex-1 w-full order-2 md:order-1">
          <h2 className="text-3xl xl:text-4xl font-black text-[#003366] mb-6">How to set up</h2>
          
          <p className="text-[#003366] font-bold text-[15px] leading-snug mb-8">
            To set up your smart router, first, unpack the box which includes the 
            router, AC power adapter, battery pack with screwdriver, RJ45 LAN 
            (local area network) cable, quick start guide, data spec sheet, 
            warranty card, and two cover skins.
          </p>

          <ul className="space-y-4 w-full">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start gap-4">
                {/* Blue numbered circle matching your image */}
                <div className="flex-shrink-0 w-6 h-6 bg-[#B8E3FF] text-[#005288] rounded-full flex items-center justify-center text-[12px] font-black mt-0.5">
                  {index + 1}
                </div>
                <span className="text-[#003366] font-bold text-[15px] leading-tight">
                  {step}
                </span>
              </li>
            ))}
          </ul>

          {/* Lime green tutorial button */}
          <button className="mt-10 w-full md:w-auto flex items-center justify-center gap-3 bg-[#A3E635] text-[#003366] px-8 py-3 rounded-lg font-black text-[15px] hover:bg-[#8DC63F] transition-all">
             <div className="w-6 h-6 bg-[#003366] rounded-full flex items-center justify-center">
                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://w3.org">
                  <path d="M7.5 5L0.75 9.33013L0.75 0.669873L7.5 5Z" fill="#A3E635" />
                </svg>
             </div>
            Watch the tutorial
          </button>
        </div>

        {/* Right Side: Image matching the photo in your reference */}
        <div className="flex-1 w-full order-1 md:order-2">
          <div className="rounded-2xl overflow-hidden">
            <img 
              src="/women.png" 
              alt="Unboxing smart router" 
              className="w-full h-auto object-cover aspect-[4/3] md:aspect-square xl:aspect-[4/3]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default SetupSection;
