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
    <section className="flex flex-col items-center justify-center bg-[#E7F6FF] py-[64px] px-[20px] xl:px-[275px] font-sans w-full">
      <div className="flex flex-col items-center gap-[60px] w-full max-w-[1920px]">
        <h2 className="text-4xl font-black text-[#003366] self-start">Product care</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {careData.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#FFF] rounded-[8px] p-10 flex flex-col items-start min-h-[320px]"
              style={{ boxShadow: '2px 2px 4px 0px rgba(46, 63, 75, 0.15)' }}
            >
              <div className="mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-[#003366] mb-6">{item.title}</h3>
              <ul className="space-y-4">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <img src="supporting icon.svg" alt="check" className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    </div>
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
