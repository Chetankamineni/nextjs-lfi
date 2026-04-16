import { useState, useRef } from "react";

export default function PlanSection() {
  const [activeTab, setActiveTab] = useState("unlimited");
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);

  const unlimitedPlans = [
    {
      title: "LTE All Hours Basic",
      speed: "10Mbps",
      price: "R388",
      points: [
        "Telkom 4G Network coverage",
        "Includes Telkom Smart Router",
        "R99 once-off activation fee",
      ],
    },
    {
      title: "LTE All Hours",
      speed: "20Mbps",
      price: "R538",
      points: [
        "Telkom 4G Network coverage",
        "Includes Telkom Smart Router",
        "R99 once-off activation fee",
      ],
    },
    {
      title: "LTE Daytime",
      speed: "20Mbps",
      price: "R388",
      points: [
        "Telkom 4G Network coverage",
        "Includes Telkom Smart Router",
        "R99 once-off activation fee",
      ],
    },
    {
      title: "LTE All Hours",
      speed: "30Mbps",
      price: "R688",
      points: [
        "Telkom 4G Network coverage",
        "Includes Telkom Smart Router",
        "R99 once-off activation fee",
      ],
    },
  ];

  const dataPlans = [
    {
      title: "LTE",
      speed: "160GB LTE",
      price: "R308",
      points: [
        "SIM & Router",
        "80GB anytime + 80GB night surfer",
        "R99 once-off activation fee",
      ],
    },
    {
      title: "LTE",
      speed: "240GB LTE",
      price: "R368",
      points: [
        "SIM & Router",
        "120GB anytime + 120GB night surfer",
        "R99 once-off activation fee",
      ],
    },
    {
      title: "LTE",
      speed: "360GB LTE",
      price: "R478",
      points: [
        "SIM & Router",
        "180GB anytime + 180GB night surfer",
        "R99 once-off activation fee",
      ],
    },
    {
      title: "LTE",
      speed: "2TB LTE",
      price: "R788",
      points: [
        "SIM & Router",
        "Telkom 4G Network coverage",
        "R99 once-off activation fee",
      ],
    },
  ];

  const plans = activeTab === "unlimited" ? unlimitedPlans : dataPlans;

  // 👉 Scroll logic
  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;

    const cardWidth = scrollRef.current.children[0].clientWidth + 16;
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });

    setCurrentIndex(index);
  };

  const next = () => {
    if (currentIndex < plans.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };
  return (
    <section className="bg-[#FFF] py-16 px-6 md:px-24">
      
      {/* Title */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#003366] mb-6">
        Paired with a plan
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-3 mb-8">
        <button
          onClick={() => setActiveTab("unlimited")}
          className={`px-4 py-2 rounded-md text-sm font-semibold ${
            activeTab === "unlimited"
              ? "bg-blue-500 text-white"
              : "bg-white border text-blue-500"
          }`}
        >
          LTE unlimited
        </button>

        <button
          onClick={() => setActiveTab("data")}
          className={`px-4 py-2 rounded-md text-sm font-semibold ${
            activeTab === "data"
              ? "bg-blue-500 text-white"
              : "bg-white border text-blue-500"
          }`}
        >
          LTE data contracts
        </button>
      </div>

      {/* Top Row */}
      <div className="flex justify-between text-sm text-gray-600 mb-4">
        <span>Showing 4</span>
        <span className="text-blue-500 cursor-pointer">View all →</span>
      </div>

      {/* Cards */}
      <div
        ref={scrollRef}
        className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible scroll-smooth"
      >
        {plans.map((plan, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center min-w-[280px] md:min-w-0">
            <img src="/LTE.svg" className="w-16 h-16 mb-3" />

            <h3 className="text-blue-600 font-semibold text-sm">
              {plan.title}
            </h3>

            <p className="text-xs text-gray-500 mb-2">{plan.speed}</p>
            <div className="bg-[#e6f0fa] w-full rounded-md py-3 mb-3">
              <p className="text-sm">From</p>
              <p className="text-xl font-bold text-[#003366]">
                {plan.price}* 
              </p>
              <p className="text-xs text-gray-500">On contract</p>
            </div>

            <div className="text-left text-xs space-y-1 mb-4">
              {plan.points.map((p, idx) => (
                <p key={idx}>• {p}</p>
              ))}
            </div>

            <div className="flex gap-2 w-full">
              <button className="flex-1 border border-blue-500 text-blue-500 py-2 rounded-md text-sm">
                Call me back
              </button>
              <button className="flex-1 bg-lime-400 py-2 rounded-md text-sm font-semibold">
                View details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows + Dots (ONLY mobile) */}
      <div className="flex md:hidden items-center justify-center gap-4 mt-6">
        
        <button onClick={prev} className="bg-gray-200 p-2 rounded-full">
          ←
        </button>

        <div className="flex gap-2">
          {plans.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-6 rounded-full ${
                i === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button onClick={next} className="bg-gray-200 p-2 rounded-full">
          →
        </button>
      </div>
    </section>
  );
}