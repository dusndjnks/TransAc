import React, { useState } from "react";

const categories = [
  {
    name: "VRF Top Discharge Systems",
    products: [
      {
        title: "SMMS‑7 Top Discharge VRF",
        image: "https://www.toshibaac.in/images/products/VRF/smms7.png", // Image not available in static content
        features: [
          "Power‑packed with the 7 Senses of Smartness",
          "High ISEER efficiency across full and part‑load conditions",
          "Redesigned 4‑way heat exchanger for balanced airflow",
          "NFC technology for system diagnostics via smartphone",
          "Expanded capacity up to 24 HP in a compact unit",
          "Supports piping up to 1000 m and up to 18 indoor FCUs",
          "Backup operation if compressor fails",
          "Quiet propeller design reduces noise by ~1.5 dB",
          "Compliance with ambient operation up to 52 °C",
          "DLC coated vane for durability and reduced friction",
          "Integration option with AHU systems for 16–60 HP range",
        ],
      },
      {
        title: "SMMS‑e (Top Discharge)",
        image: "https://www.toshibaac.in/images/products/VRF/1.png",
        features: [
          "Capacity range 8–22 HP suitable for diverse installations",
          "Highest ISEER up to ~8.6 with wide control precision",
          "SMMS Wave Tool for remote configuration & diagnostics",
          "DC twin‑rotary compressor with DLC vane reliability",
          "Piping layout flexibility: 1000 m length, 235 m equivalent run",
          "Vertical lift up to 40 m (≈11 storeys)",
          "Affords up to 200 % diversity factor in system design",
          "Compact design with reduced installation footprint",
          "Backup operation feature in multi‑compressor setup",
        ],
      },
    ],
  },
];


const IndoorAc = () => {
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
            Toshiba VRF Top Discharge AC
          </h1>
        </section>

        <div className="py-14 px-6 md:px-16 lg:px-40 bg-white text-center">
          <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
            Designed to deliver consistent cooling performance with wide voltage tolerance, the Toshiba Stable Power Inverter Ducted AC offers high energy efficiency, powerful airflow, and quiet operation—making it ideal for commercial and residential ducted applications.
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
export default IndoorAc