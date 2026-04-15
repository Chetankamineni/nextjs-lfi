import React from 'react';

const Smartrouter = () => {
  return (
    <section className="relative w-full overflow-hidden font-sans">
      
      
      <div className="bg-[#0099FF] py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1370px] mx-auto flex items-center justify-between relative">
          
          
          <div className="w-full md:w-1/2 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white leading-tight">
              Why choose <br /> Telkom Smart <br /> Router?
            </h1>
          </div>

          
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden">
            <img 
              src="/telkomsmart.png" 
              alt="Happy Customer" 
              className="h-full w-full object-cover object-left translate-x-12"
            />
          </div>
        </div>
      </div>

    
<div className="bg-[#0099FF] px-4 md:px-8 lg:px-0">
  
  <div className="max-w-[1100px] mx-auto -mt-12 bg-white rounded-xl shadow-sm border border-gray-200 p-10">
    
    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">

            <div className="flex flex-col gap-4 pr-0 md:pr-12 pb-8 md:pb-0">
              <img 
                src="/Connected-circles.svg" 
                alt="Easy connection" 
                className="w-8 h-8"
              />
              <h3 className="text-base font-bold text-gray-900">
                Easy connection
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-[280px]">
                Easily connect to the internet by scanning the QR code on the back of the router.
              </p>
            </div>

            
            <div className="flex flex-col gap-4 px-0 md:px-12 py-8 md:py-0">
              <img 
                src="/Battery-vertical-4.svg" 
                alt="Battery" 
                className="w-8 h-8"
              />
              <h3 className="text-base font-bold text-gray-900">
                Long lasting battery
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-[280px]">
                4400mAh battery ensures that you stay connected even during power outages.
              </p>
            </div>

            
            <div className="flex flex-col gap-4 pl-0 md:pl-12 pt-8 md:pt-0">
              <img 
                src="/Screencast.svg" 
                alt="On-screen balance" 
                className="w-8 h-8"
              />
              <h3 className="text-base font-bold text-gray-900">
                On-screen balance request
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-[280px]">
                You can easily request your balance right on the LCD screen.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Smartrouter;