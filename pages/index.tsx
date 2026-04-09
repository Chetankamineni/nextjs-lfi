import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Telkom | Smart Router</title>
        <meta name="description" content="Telkom smart router deals" />
      </Head>

      <main className="min-h-screen bg-[#0099FF] flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-12 text-white font-sans overflow-hidden">
        
        <div className="z-10 max-w-xl space-y-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight whitespace-nowrap">
            Telkom <span className="text-[#CCFF00]">smart router</span>
          </h1>
          
          <p className="text-lg md:text-xl font-medium leading-tight max-w-md">
            When the lights are off, your Wi-Fi stays on. 
            Touch, scan, connect - it's that easy. Ready for 
            the connection of the summer?
          </p>

          <div className="py-4">
            <p className="text-xl font-bold">From</p>
            <div className="flex items-baseline">
              <span className="text-7xl md:text-6xl font-black">R308</span>
            </div>
            <p className="text-sm font-bold uppercase tracking-wider">PM x 24</p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#CCFF00] text-[#001A33] px-10 py-3 rounded-md font-bold text-lg hover:bg-opacity-90 transition-all">
              Buy now
            </button>
            <button className="bg-white text-[#001A33] px-10 py-3 rounded-md font-bold text-lg hover:bg-gray-100 transition-all">
              Call me back
            </button>
          </div>
        </div>

        <div className="relative mt-12 md:mt-0 md:h-[600px] w-full flex justify-end items-start">
          <img 
            src="/woman.png" 
            alt="Smiling woman with glasses"
            className="h-full object-contain scale-125 translate-x-20"
          />
        </div>
      </main>
    </>
  )
}
