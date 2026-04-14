import { useState } from "react";

export default function PlanSection() {
  const [activeTab, setActiveTab] = useState("unlimited");

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
      <div className="grid md:grid-cols-4 gap-6">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center"
          >
            {}
            <img
              src="/LTE.svg"   //common image
              className="w-16 h-16 mb-3"
            />

            <h3 className="text-blue-600 font-semibold text-sm">
              {plan.title}
            </h3>

            <p className="text-xs text-gray-500 mb-2">{plan.speed}</p>

            {/* Price */}
            <div className="bg-[#e6f0fa] w-full rounded-md py-3 mb-3">
              <p className="text-sm">From</p>
              <p className="text-xl font-bold text-[#003366]">
                {plan.price}*
              </p>
              <p className="text-xs text-gray-500">On contract</p>
            </div>

            {/* Details */}
            <div className="text-left text-xs space-y-1 mb-4">
              {plan.points.map((p, idx) => (
                <p key={idx}>• {p}</p>
              ))}
            </div>

            {/* Buttons */}
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
    </section>
  );
}