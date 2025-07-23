import React, { useState } from 'react';

const categories = [
  {
    title: "AJG072/108JATAH – VRF System",
    brand: "General",
    image: "https://www.general-hvac.com/shared/in/img-0000-vrf-ajg072-108jatah-01.png",
    description: `• Compact design for small spaces\n• Highly efficient inverter compressor\n• Reliable in tropical climates\n• Quiet indoor operation\n• Wide range of indoor units\n• Intelligent control systems`,
  },
  {
    title: "V3 Tropical Series – VRF System",
    brand: "General",
    image: "https://www.general-hvac.com/shared/in/img-0000-products-vrf-btn-vrf-v3-tropical-02.png",
    description: `• Built for hot, humid environments\n• Excellent energy efficiency\n• Up to 150% connected indoor capacity\n• Advanced oil control system\n• Long pipe length design\n• High external static pressure`,
  },
];

const Products = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="bg-bg-light py-20 px-4 md:px-10 text-text-base font-sans">
      <h2 className="text-4xl font-display font-semibold text-center text-primary mb-4">
        Popular Product Category
      </h2>
      <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-12"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col items-center overflow-hidden"
          >
            <div className="w-full bg-[#fff2ea] p-6 flex justify-center items-center border-b border-primary">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[260px] object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold font-heading text-text-base mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-text-light font-medium mb-4">
                <span className="font-semibold text-gray-700">Brand:</span> {item.brand}
              </p>

              <p
                className={`text-sm text-text-light text-left whitespace-pre-line leading-relaxed transition-all duration-300 ${
                  expandedIndex === index ? '' : 'line-clamp-3'
                }`}
              >
                {item.description}
              </p>

              <button
                onClick={() => toggleExpand(index)}
                className="mt-4 px-5 py-2 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-all duration-300"
              >
                {expandedIndex === index ? 'Hide Features' : 'Show Features'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
