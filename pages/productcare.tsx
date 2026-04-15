import React from 'react';

const ProductCare: React.FC = () => {
  const careData = [
    {
      title: "Router",
      icon: <img src="router.svg" alt="Router Icon" className="w-8 h-8" />,
      points: [
        "24 months warranty",
        "The support function on the device serves as the initial contact point."
      ]
    },
    {
      title: "Battery",
      icon: <img src="battery-1.svg" alt="Battery Icon" className="w-8 h-8" />,
      points: [
        "6 months warranty",
        "The support function on the device serves as the initial contact point.",
        "If the battery is the sole issue, only the battery will be replaced."
      ]
    }
  ];

  return (
    <section className="bg-[#eef6ff] py-16 px-6 md:px-24 font-sans">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-[#003366] mb-10">Product care</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {careData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-10 shadow-sm flex flex-col items-start min-h-[320px]"
            >
              <div className="mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-[#003366] mb-6">{item.title}</h3>
              <ul className="space-y-4">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                     <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <img src="supporting icon.svg" alt="check" className="w-5 h-5 flex-shrink-0 mt-0.5" /></div>
                    <span className="text-[15px] font-bold text-[#003366] leading-tight">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default ProductCare;
