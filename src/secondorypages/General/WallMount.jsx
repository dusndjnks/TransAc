import React, { useState } from "react";
import generalLogo from "../../assets/logo/logo2.png";

const categories = [
  {
    name: "Tropical Innovation Inverter",
    products: [
      {
        title: "ASGG18CETA-B",
        features: ["Powerful tropical inverter technology", "Energy-efficient", "Works up to 55°C"],
      },
      {
        title: "ASGG24CETA-B",
        features: ["Robust compressor", "Smart airflow", "Antibacterial filter"],
      },
    ],
  },
  {
    name: "Efficient & Tropical Inverter",
    products: [
      {
        title: "ASGG12CGTB-B",
        features: ["Sleek design", "Eco refrigerant", "Turbo mode cooling"],
      },
    ],
  },
];

const WallMount = () => {
  const [openFeatureIndex, setOpenFeatureIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleEnquire = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Product:", selectedProduct?.title);

    // TODO: EmailJS or API submission here

    setShowModal(false);
    setEmail("");
    setPhone("");
  };

  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="bg-bg-dark py-24 text-center text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-display py-20 md:py-24">
          General – Wall Mounted ACs
        </h1>
      </section>

      {/* Description */}
      <div className="py-14 px-6 md:px-16 lg:px-40 bg-white text-center">
        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
          Discover General’s premium wall-mounted air conditioners. Designed to perform in tropical
          climates, offering superior energy efficiency, reliability, and advanced inverter technology.
        </p>
      </div>

      {/* Product Categories */}
      <section className="bg-bg-light py-20 px-6 md:px-20 lg:px-40 space-y-16">
        {categories.map((cat, catIdx) => (
          <div key={catIdx} className="space-y-6">
            <h3 className="text-2xl font-heading font-semibold text-text-base">{cat.name}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {cat.products.map((product, prodIdx) => {
                const isOpen = openFeatureIndex === `${catIdx}-${prodIdx}`;
                return (
                  <div
                    key={prodIdx}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center"
                  >
                    <img
                      src="https://www.general-hvac.com/shared/in/img-gcin-split-wall-asgg18-36-ceta-b-01.png"
                      alt={product.title}
                      className="w-full h-44 object-contain mb-4"
                    />
                    <div className="text-text-base font-medium text-lg mb-2">{product.title}</div>

                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() =>
                          setOpenFeatureIndex(isOpen ? null : `${catIdx}-${prodIdx}`)
                        }
                        className="text-sm text-primary font-semibold hover:underline"
                      >
                        {isOpen ? "Hide Features" : "Show Features"}
                      </button>

                      <button
                        onClick={() => handleEnquire(product)}
                        className="text-sm text-white bg-primary px-3 py-1.5 rounded-md hover:bg-primary-dark transition"
                      >
                        Enquire Now
                      </button>
                    </div>

                    {isOpen && (
                      <ul className="mt-4 text-left text-sm text-gray-700 list-disc list-inside">
                        {product.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* Enquiry Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold mb-4 text-text-base">
              Enquire About: {selectedProduct?.title}
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
                value={selectedProduct?.title}
                className="w-full bg-gray-100 border border-gray-200 rounded px-3 py-2 text-sm"
              />
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
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

export default WallMount;
