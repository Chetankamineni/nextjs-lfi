import React from 'react';
import { Smartphone, Battery, Monitor } from 'lucide-react';

const Smartrouter = () => {
  return (
    <section className="relative w-full overflow-hidden font-sans">
      
      <div className="bg-[#0091FF] px-8 py-16 md:px-24 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Why choose <br /> Telkom Smart <br /> Router?
            </h1>
          </div>
          
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden">
            
             <img 
               src="/path-to-smiling-person.png" 
               alt="Happy Customer" 
               className="h-full w-full object-cover object-left transform translate-x-12"
             />
          </div>
        </div>
      </div>

      
      <div className="bg-white px-8 pb-16 md:px-24">
        <div className="max-w-7xl mx-auto -mt-12 bg-white rounded-t-xl md:rounded-xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-800">
            
            <div className="flex flex-col gap-4">
              <div className="text-[#0091FF]">
                <Smartphone size={32} />
              </div>
              <h3 className="text-lg font-bold">Easy connection</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Easily connect to the internet by scanning the QR code on the back of the router.
              </p>
            </div>

            
            <div className="flex flex-col gap-4 border-l border-gray-100 md:pl-12">
              <div className="text-[#0091FF]">
                <Battery size={32} />
              </div>
              <h3 className="text-lg font-bold">Long lasting battery</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                4400mAh battery ensures that you stay connected even during power outages.
              </p>
            </div>

            
            <div className="flex flex-col gap-4 border-l border-gray-100 md:pl-12">
              <div className="text-[#0091FF]">
                <Monitor size={32} />
              </div>
              <h3 className="text-lg font-bold">On-screen balance request</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
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
