import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="bg-[#f0f4f8] py-16 px-4 md:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-[#003366] mb-12 text-center">Features</h2>
        
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. Speed Section (Spans 2 Rows) */}
          <div className="md:row-span-2 bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between items-center text-center">
            <div className="text-left w-full">
              <h3 className="text-4xl font-black text-[#003366] mb-4">Speed</h3>
              <p className="text-sm font-bold text-[#003366] leading-snug">
                Supports up to download speed of 300Mbps and upload speed of 50Mbps - CAT6.
              </p>
            </div>
           
            <div className="mt-8 bg-blue-100 w-48 h-96 rounded-[3rem] border-8 border-gray-900 flex items-center justify-center">
               <span className="text-xs text-blue-800">[Speed Test App]</span>
             {<img 
               src="/phone-app.png" 
               alt="Speed Test App" 
              className="mt-8 w-48 h-auto object-contain" 
/>
}
            </div>
          </div>

          {/* 2. Connection Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-3xl font-black text-[#003366] mb-4">Connection</h3>
            <p className="text-sm font-bold text-[#003366]">
              Easy Wi-Fi connection via QR scan on 2.4GHz and 5GHz.
            </p>
          </div>

          {/* 3. Battery Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-3xl font-black text-[#003366] mb-4">Battery</h3>
            <p className="text-sm font-bold text-[#003366]">
              4400mAh battery backup ready to be installed included.
            </p>
          </div>

          {/* 4. Design Section (Spans 2 Columns on bottom right) */}
          <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-between">
            <div className="space-y-4">
              <h3 className="text-3xl font-black text-[#003366]">Design</h3>
              <ul className="space-y-2 text-[#003366] font-bold text-smdisplay: flex;
flex-direction: column;
align-items: flex-start;
gap: var(--responsive-gap-xs2, 8px);">
                <li>• 2.4-inch LCD touch screen</li>
                <li>• Easy on-screen balance request</li>
                <li>• 2x changeable colour sleeves</li>
              </ul>
            </div>
            
            <div className="w-450px h-400px bg-gray-100 rounded-lg mt-6 md:mt-0 flex items-center justify-center ">
              {<img 
                src="/design.png" 
                alt="Smart Router" 
                className="w-full h-full object-contain mt-6 md:mt-0" 
            />
                }
               <span className="text-xs"></span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;