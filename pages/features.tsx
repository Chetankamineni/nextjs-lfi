import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="bg-[#f0f4f8] py-16 px-4 md:px-24 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-black text-[#003366] mb-12 text-center">Features</h2>
        
        {/* Main Grid: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. Speed Section (Full Height) */}
          <div className="md:row-span-2 bg-white rounded-3xl shadow-sm p-10 flex flex-col items-start border border-gray-100">
            <h3 className="text-5xl font-black text-[#003366] mb-6">Speed</h3>
            <p className="text-[15px] font-bold text-[#003366] leading-tight mb-8">
              Supports up to download speed of 300Mbps and upload speed of 50Mbps - CAT6.
            </p>
            <div className="relative w-full flex rounded-3xl justify-center mt-auto">
              <img 
                src="/phone-app.png" 
                alt="Speed Test App" 
                className="w-full max-w-[240px] h-auto object-contain" 
              />
            </div>
          </div>

          {/* 2. Connection Section */}
          <div className="bg-white rounded-3xl shadow-sm p-10 border border-gray-100">
            <h3 className="text-4xl font-black text-[#003366] mb-4">Connection</h3>
            <p className="text-[15px] font-bold text-[#003366] leading-tight">
              Easy Wi-Fi connection via QR scan on 2.4GHz and 5GHz.
            </p>
          </div>

          {/* 3. Battery Section */}
          <div className="bg-white rounded-3xl shadow-sm p-10 border border-gray-100">
            <h3 className="text-4xl font-black text-[#003366] mb-4">Battery</h3>
            <p className="text-[15px] font-bold text-[#003366] leading-tight">
              4400mAh battery backup ready to be installed included.
            </p>
          </div>

        <div className="md:col-span-2 bg-white rounded-3xl shadow-sm p-10 flex flex-col md:flex-row items-center justify-between border border-gray-100">
  <div className="flex-1">
    <h3 className="text-4xl font-black text-[#003366] mb-6">Design</h3>
    <ul className="space-y-4 text-[#003366] font-bold text-[15px]">
      {[
        "2.4-inch LCD touch screen",
        "Easy on-screen balance request",
        "2x changeable colour sleeves",
      ].map((text, index) => (
        <li key={index} className="flex items-center gap-3">
          {/* Check Icon Container */}
          <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
            <img           
               src="/supporting icon.svg" 
               alt="Check Icon" 
               className="w-5 h-5 flex-shrink-0 mt-0.5"
            /> 
          </div>
          <span>{text}</span>
        </li>
      ))}
    </ul>
  </div>
  
  <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
    <img 
      src="/design.png" 
      alt="Smart Router" 
      className="w-full max-w-[320px] h-auto object-contain" 
    />
  </div>
</div>



        </div>
      </div>
    </section>
  );
};

export default Features;
