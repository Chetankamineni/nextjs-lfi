const Smartrouter = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white-100 p-4">
      <div className="relative bg-[#0099FF] text-white rounded-lg w-full max-w-6xl px-8 pt-16 pb-10 md:pb-32 overflow-hidden">
        
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">

          <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start z-10 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Why choose <br /> Telkom Smart <br /> Router?
            </h1>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center relative">
            <img
              src="/telkomsmart.png"
              alt="Happy Customer"
              className="h-auto w-auto object-contain opacity-90 mx-auto md:mx-0
                         scale-150 md:scale-[2.2] 
                         translate-x-0 md:-translate-x-1/4 
                         origin-justify"
            />
          </div>
        </div>

        <div className="relative mt-12 md:mt-0 md:absolute md:bottom-6 md:left-6 md:right-6 z-20 bg-white text-black rounded-lg shadow-xl border border-gray-200 p-6 md:p-10">

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            
            <div className="flex flex-col gap-4 pr-0 md:pr-12 pb-8 md:pb-0">
              <img
               src="/Connected-circles.svg"
                alt="Easy connection"
                 className="w-8 h-8"
              />
              <h3 className="text-base font-bold text-[#005288]">
                Easy connection
                </h3>
              <p className="text-sm text-[#005288] leading-relaxed max-w-full md:max-w-[280px]">
                Easily connect to the internet by scanning the QR code on the back of the router.
              </p>
            </div>

            <div className="flex flex-col gap-4 px-0 md:px-12 py-8 md:py-0">
              <img
                src="/Battery-vertical-4.svg"
                alt="Battery"
                className="w-8 h-8"
              />
              <h3 className="text-base font-bold text-[#005288]">
                Long lasting battery
                </h3>
              <p className="text-sm text-[#005288] leading-relaxed max-w-full md:max-w-[280px]">
                4400mAh battery ensures that you stay connected even during power outages.
              </p>
            </div>

            <div className="flex flex-col gap-4 pl-0 md:pl-12 pt-8 md:pt-0">
              <img
                src="/Screencast.svg" 
                alt="On-screen balance" 
                className="w-8 h-8"
              />
              <h3 className="text-base font-bold text-[#005288]">
                On-screen balance request
                </h3>
              <p className="text-sm text-[#005288] leading-relaxed max-w-full md:max-w-[280px]">
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