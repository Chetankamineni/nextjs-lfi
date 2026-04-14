import React from "react";

const UpgradeBanner = () => {
  return (
    <section className="w-full bg-[#FFF] py-12 px-6 md:px-20">
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="max-w-xl space-y-4">
          <p className="text-lg text-blue-500 font-medium">
            Upgrade to the new
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
            Telkom smart router
          </h2>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Purchase this router as a standalone product or pair it with a data
            plan for added flexibility.
          </p>

          {/* Price */}
          <div className="pt-2">
            <span className="text-3xl font-bold text-[#003366]">
              R2149<span className="text-sm align-top">.00</span>
            </span>
            <p className="text-xs text-gray-500">Once-off</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-md font-semibold hover:bg-blue-50">
              Call me back
            </button>

            <button className="bg-lime-400 text-black px-6 py-2 rounded-md font-semibold hover:bg-lime-500">
              View deals
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end w-full">
          <img
            src="/router-4.png" 
            alt="Router"
            className="w-[300px] md:w-[380px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default UpgradeBanner;