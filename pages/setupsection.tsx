import React from 'react';

const SetupSection: React.FC = () => {
  const steps = [
    "Insert SIM card",
    "Install battery",
    "Turn on the device",
    "If don't power by battery, connect the matching power adapter, the device will turn on automatically",
    "Connect to Wi-Fi network",
    "Open a web browser and go to http://192.168.1.1 and login as administrator. For the default administrator password refer to the sticker on the device.",
    "The screen can be activated by touching, or by pressing the 'Link' button.",
    "Start using your router"
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left Side: Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-black text-[#005288] mb-6">How to set up</h2>
          
          <p className="text-[#005288] font-medium text-sm leading-relaxed mb-8">
            To set up your smart router, first, unpack the box which includes the 
            router, AC power adapter, battery pack with screwdriver, RJ45 LAN 
            (local area network) cable, quick start guide, data spec sheet, 
            warranty card, and two cover skins.
          </p>

          <ul className="space-y-4">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                {/* Blue Numbered Circle */}
                <div className="flex-shrink-0 w-5 h-5 bg-[#B8E3FF] text-[#005288] rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5">
                  {index + 1}
                </div>
                <span className="text-[#005288] font-semibold text-[13px] leading-tight">
                  {step}
                </span>
              </li>
            ))}
          </ul>

          {/* Tutorial Button */}
          <button className="mt-8 flex items-center gap-2 bg-[#91E200] text-[#003F6A] px-4 py-2 font-bold text-xs hover:bg-[#7db335] transition-colors">
            <div className="w-4 h-4 bg-[#003F6A] rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[5px] border-l-[#8DC63F] border-b-[3px] border-b-transparent ml-0.5"></div>
            </div>
            Watch the tutorial
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1">
          <div className=" overflow-hidden shadow-xl">
            <img 
              src="/women.png" 
              alt="Unboxing smart router" 
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default SetupSection;
