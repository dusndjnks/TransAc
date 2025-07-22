import React, { useState } from "react";

const categories = [
  {
    name: "Tropical Innovation Inverter",
    products: [
      {
        title: "ASGG18CETA-B",
        features: [
          "Inverter Technology",
          "Tropical compressor for high ambient performance",
          "Energy efficient with smart controls",
        ],
      },
      {
        title: "ASGG24CETA-B",
        features: [
          "Robust cooling for large rooms",
          "Low-noise operation",
          "Smart diagnostics",
        ],
      },
      {
        title: "ASGG30CETA-B",
        features: [
          "Wide airflow range",
          "Inverter-based precise temperature control",
          "Long-life filters",
        ],
      },
      {
        title: "ASGG36CETA-B",
        features: [
          "Heavy-duty cooling",
          "Smart timer and remote",
          "Advanced tropical compressor",
        ],
      },
    ],
  },
  {
    name: "Efficient & Tropical Inverter",
    products: [
      {
        title: "ASGG12CGTB-B",
        features: [
          "Eco mode with quick cooling",
          "Energy-saving inverter motor",
          "Modern compact design",
        ],
      },
      {
        title: "ASGG18CGTB-B",
        features: [
          "Dual inverter for efficiency",
          "Noise reduction system",
          "Powerful cooling in seconds",
        ],
      },
      {
        title: "ASGG24CGTB-B",
        features: [
          "High SEER rating",
          "Easy-clean air filters",
          "Anti-rust body design",
        ],
      },
    ],
  },
  {
    name: "Tropical Inverter",
    products: [
      {
        title: "ASGG12CPAA-B",
        features: [
          "Smart control system",
          "Tropical resilience for coastal areas",
          "LED display",
        ],
      },
      {
        title: "ASGG18CPAA-B",
        features: [
          "Fast dehumidification",
          "Anti-dust pre-filters",
          "Sleep mode",
        ],
      },
      {
        title: "ASGG24CPAA-B",
        features: [
          "Built-in stabilizer",
          "Powerful airflow for large spaces",
          "Advanced refrigerant handling",
        ],
      },
    ],
  },
];

const WallMount = () => {
  const [modal, setModal] = useState({ open: false, product: null });
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [openFeatures, setOpenFeatures] = useState({});

  const toggleFeatures = (title) => {
    setOpenFeatures((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL = "https://script.google.com/macros/s/AKfycby8iYYpTB0-yQ4YiSJVyizcc14evLr9Zx0O5WONfzsdqNbC2fZd5ZhwFAqd8y8czuMw/exec"; // replace with your own script URL

    const formData = new FormData();
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("product", modal.product);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });
      alert("Enquiry sent successfully!");
    } catch (error) {
      console.error("Error!", error.message);
      alert("Something went wrong.");
    }

    setModal({ open: false, product: null });
    setEmail("");
    setPhone("");
  };

  return (
    <div className="font-sans">
      <section className="bg-bg-dark py-24 md:py-40 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold text-primary font-display">
          General – Wall Mounted ACs
        </h1>
      </section>

      <div className="py-14 px-6 md:px-16 lg:px-40 bg-white text-center">
        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
          Discover General’s premium wall-mounted air conditioners. Designed to
          perform in tropical climates, offering superior energy efficiency,
          reliability, and advanced inverter technology.
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
                    src="https://www.general-hvac.com/shared/in/img-gcin-split-wall-asgg18-36-ceta-b-01.png"
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

export default WallMount;
