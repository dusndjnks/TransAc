import React, { useState } from "react";

const categories = [
  {
    name: "VRF Indoor Unit Range",
    products: [
      {
        title: "Hi Wall",
        image: "https://www.toshibaac.in/images/products/VRF/new/hi-wall.png", // (image not publicly exposed)
        features: [
          "High safety: Steel casing for indoor PCB",
          "Ease of maintenance: Removable drain pipe",
          "7-step vane control with quiet operation",
        ],
      },
      {
        title: "Compact 4‑Way Cassette",
        image: "https://www.toshibaac.in/images/products/VRF/new/COMPACT4WAYCASSETTE/main.jpg",
        features: [
          "Uniform air distribution via individual louver control",
          "Quiet operation",
          "High‑lift drain pump up to 850 mm",
          "Air purification kit with ionizer and QC indicator",
        ],
      },
      {
        title: "4‑Way Cassette",
        image: "https://www.toshibaac.in/images/products/VRF/new/4way.jpg",
        features: [
          "Low sound levels (~29 dB)",
          "Finned tube heat exchanger",
          "Compact design for office applications",
        ],
      },
      {
        title: "1‑Way Cassette",
        image: "https://www.toshibaac.in/images/products/VRF/new/2way.jpg",
        features: [
          "Slim & compact for small areas like hotels and offices",
          "Duct sensor detecting PM10 particles + plasma air purifier",
          "Resin-coated heat exchanger",
          "Occupancy sensor detects operating patterns",
        ],
      },
      {
        title: "2‑Way Cassette",
        image: "https://www.toshibaac.in/images/products/VRF/new/1way.png",
        features: [
          "Compact and lightweight design",
          "Easy installation in any interior",
        ],
      },
      {
        title: "Slim Duct",
        image: "https://www.toshibaac.in/images/products/VRF/new/slim-duct.png",
        features: [
          "Ultra‑slim body height for thin ceilings",
          "Low static pressure: 5–30 Pa",
          "Ideal for concealed installation in hotels or quiet areas",
        ],
      },
      {
        title: "MSP Concealed Duct",
        image: "https://www.toshibaac.in/images/products/VRF/new/msp.jpg",
        features: [
          "High external static pressure (30–150 Pa in 7 steps)",
          "Flexible return air path (back or side)",
          "Uniform temperature and airflow distribution",
        ],
      },
      {
        title: "High Static Pressure Duct (HSP)",
        image: "https://www.toshibaac.in/images/products/VRF/new/hspd.jpg",
        features: [
          "Handles air flows up to 4,800 m³/h",
          "External static pressure up to 250 Pa",
          "Capacity range from 2–10 HP",
        ],
      },
      {
        title: "Under Ceiling",
        image: "https://www.toshibaac.in/images/products/VRF/new/under-ceiling.jpg",
        features: [
          "Mounted below ceiling with wide airflow",
          "Quiet performance with low vibration",
        ],
      },
      {
        title: "Console (Bi‑Flow)",
        image: "https://www.toshibaac.in/images/products/VRF/new/bi-flowing.jpg",
        features: [
          "Can be floor- or wall-mounted",
          "Two-direction airflow",
          "Great for spaces without false ceilings",
        ],
      },
      {
        title: "Floor Standing",
        image: "https://www.toshibaac.in/images/products/VRF/new/floor-standing.jpg",
        features: [
          "Freestanding — no ceiling or wall mounting needed",
          "Stylish front panel design",
          "Powerful airflow",
        ],
      },
      {
        title: "Fresh Air Intake Duct",
        image: "https://www.toshibaac.in/images/products/VRF/new/faid.jpg",
        features: [
          "Airflow range: 1,080–3,050 m³/h",
          "Suitable for ventilation in commercial buildings",
          "Helps meet IAQ standards",
        ],
      },
      {
        title: "Air‑to‑Air Heat Exchanger",
        image: "https://www.toshibaac.in/images/products/VRF/new/air-to-air-heat-exchanger.jpg",
        features: [
          "Used for heat recovery and reusing energy",
          "Improves system efficiency in large installations",
        ],
      },
    ],
  },
];



const VrfIndoor = () => {
 const [modal, setModal] = useState({ open: false, product: null });
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [openFeatures, setOpenFeatures] = useState({});
 
   const toggleFeatures = (title) => {
     setOpenFeatures((prev) => ({ ...prev, [title]: !prev[title] }));
   };
 
   const handleSubmit = async (e) => {
     e.preventDefault();
 
     const scriptURL =
       "https://script.google.com/macros/s/AKfycby8iYYpTB0-yQ4YiSJVyizcc14evLr9Zx0O5WONfzsdqNbC2fZd5ZhwFAqd8y8czuMw/exec";
 
     const formData = new FormData();
     formData.append("email", email);
     formData.append("phone", phone);
     formData.append("product", modal.product);
 
     try {
       await fetch(scriptURL, {
         method: "POST",
         body: formData,
       });
       setModal({ open: false, product: null });
       setEmail("");
       setPhone("");
     } catch (error) {
       setModal({ open: false, product: null });
       setEmail("");
       setPhone("");
     }
   };
 
   return (
     <div className="font-sans">
       <section className="bg-bg-dark py-24 md:py-40 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-display px-4">
            Toshiba VRF Indoor Unit Range
          </h1>
        </section>
        
        <div className="py-14 px-6 md:px-16 lg:px-40 bg-white text-center">
          <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
            Toshiba’s VRF Indoor Unit Range offers a wide variety of solutions to suit different room layouts and air conditioning needs — from sleek ceiling-mounted units to compact ducted options. Each unit is engineered for quiet performance, flexible installation, and enhanced energy efficiency.
          </p>
        </div>
 
       <section className="bg-bg-light py-20 px-6 md:px-20 lg:px-40 space-y-16">
         {categories.map((cat, idx) => (
           <div key={idx} className="space-y-6">
             <h3 className="text-2xl font-heading font-semibold text-text-base">
               {cat.name}
             </h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
               {cat.products.map((product, i) => (
                 <div
                   key={i}
                   className="bg-white rounded-xl shadow-md p-6 text-center"
                 >
                   <img
                     src={product.image}
                     alt={product.title}
                     className="w-full h-44 object-contain mb-4"
                   />
                   <div className="text-text-base font-medium text-lg">
                     {product.title}
                   </div>
 
                   <div className="mt-4 flex justify-center gap-4">
                     <button
                       onClick={() => toggleFeatures(product.title)}
                       className="text-sm text-primary font-semibold hover:underline"
                     >
                       {openFeatures[product.title]
                         ? "Hide Features"
                         : "Show Features"}
                     </button>
                     <button
                       onClick={() =>
                         setModal({ open: true, product: product.title })
                       }
                       className="text-sm text-white bg-primary px-3 py-1.5 rounded-md hover:bg-primary-dark transition"
                     >
                       Enquire Now
                     </button>
                   </div>
 
                   {openFeatures[product.title] && (
                     <ul className="mt-4 text-left text-sm text-gray-700 list-disc list-inside">
                       {product.features.map((f, fi) => (
                         <li key={fi}>{f}</li>
                       ))}
                     </ul>
                   )}
                 </div>
               ))}
             </div>
           </div>
         ))}
       </section>
 
       {modal.open && (
         <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
           <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6">
             <h3 className="text-lg font-semibold mb-4 text-text-base">
               Enquire About: {modal.product}
             </h3>
             <form onSubmit={handleSubmit} className="space-y-4">
               <input
                 type="email"
                 required
                 placeholder="Your Email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
               />
               <input
                 type="tel"
                 required
                 placeholder="Your Phone Number"
                 value={phone}
                 onChange={(e) => setPhone(e.target.value)}
                 className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
               />
               <input
                 type="text"
                 readOnly
                 value={modal.product}
                 className="w-full bg-gray-100 border border-gray-200 rounded px-3 py-2 text-sm"
               />
               <div className="flex justify-end gap-3">
                 <button
                   type="button"
                   onClick={() => setModal({ open: false, product: null })}
                   className="text-sm px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
                 >
                   Cancel
                 </button>
                 <button
                   type="submit"
                   className="text-sm px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
                 >
                   Submit
                 </button>
               </div>
             </form>
           </div>
         </div>
       )}
     </div>
   );
 };

export default VrfIndoor