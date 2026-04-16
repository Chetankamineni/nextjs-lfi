function HeroSection() {
  return (
    <main className="min-h-screen bg-[#0099FF] flex flex-col md:flex-row items-center justify-between px-6 sm:px-8 md:px-24 py-10 md:py-12 text-white font-sans overflow-hidden">
      
      <div className="z-10 max-w-xl space-y-6 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-black tracking-tight md:whitespace-nowrap">
          Telkom <span className="text-[#91E200]">smart router</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl font-medium leading-tight max-w-md mx-auto md:mx-0">
          When the lights are off, your Wi-Fi stays on. 
          Touch, scan, connect - it's that easy. Ready for 
          the connection of the summer?
        </p>

        <div className="py-4">
          <p className="text-lg md:text-xl font-bold">From</p>
          <div className="flex items-baseline justify-center md:justify-start">
            <span className="text-5xl sm:text-6xl md:text-6xl font-black">R308</span>
          </div>
          <p className="text-xs md:text-sm font-bold uppercase tracking-wider">PM x 24</p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 justify-center md:justify-start">
          <button className="w-full sm:w-auto bg-[#91E200] text-[#003F6A] px-6 md:px-10 py-3 rounded-md font-bold text-base md:text-lg hover:bg-opacity-90 transition-all">
            Buy now
          </button>
          <button className="w-full sm:w-auto bg-white text-[#003F6A] px-6 md:px-10 py-3 rounded-md font-bold text-base md:text-lg hover:bg-gray-100 transition-all">
            Call me back
          </button>
        </div>
      </div>

      <div className="relative mt-10 md:mt-0 md:h-150 w-full flex justify-center md:justify-end items-start">
        <img 
          src="/woman.png" 
          alt="Smiling woman with glasses"
          className="h-72 sm:h-96 md:h-full object-contain md:scale-125 md:translate-x-20"
        />
      </div>
    </main>
  );
}

export default function Landing() {
  return (
    <>
      <HeroSection />
    </>
  );
}