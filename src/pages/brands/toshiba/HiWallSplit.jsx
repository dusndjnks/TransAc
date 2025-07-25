import React, { useState } from "react";

const categories = [
  {
    name: "Hi‑Wall Inverter Split AC Series (Toshiba India)",
    products: [
      {
        title: "G3KCV – 3 & 5 Star R32 Inverter Hi‑Wall AC",
        image: "https://www.toshibaac.in/images/products/Splits/hi-wall-new/G3KCV5SG.png", // not exposed in static HTML
        features: [
          "Nano‑coated heat‑exchanger for corrosion resistance",
          "High airflow fan coil for fast cooling",
          "DC Inverter with PAM/PWM for energy efficiency",
          "Self‑cleaning fan eliminates mould / moisture",
          "Quiet performance (~23 dB(A)) with incline fan blades",
          "Operates stably up to 52 °C ambient temperature",
          "Stabilizer‑free operation in 160–265 V range",
          "5‑speed fan, swing louver & preset favorites",
          "Weekly timer and preset functionality",
        ],
      },
      {
        title: "R32 5‑Star Hi‑Wall Inverter AC",
        image: "https://www.toshibaac.in/images/products/R32_product.png",
        features: [
          "13 % larger fan coil + 10 % increased heat transfer surface",
          "Whisper‑quiet blades (~23 dB)",
          "11 louver positions for airflow precision",
          "Aqua Resin coated coil (Magic Coil) prevents dirt build-up",
          "Double‑clean system: self‑clean and air filter function",
          "IAQ filter reduces bacteria & virus (e.g. H5N1) spread",
          "Smartphone control via optional Wi‑Fi module",
          "Power‑select (50 % / 75 % / 100 %) for savings",
          "Programmable weekly scheduling and ECO mode",
        ],
      },
      {
        title: "Seiya (2 kW – 7 kW) & Seiya Classic (up to 10 kW)",
        image: "https://www.toshibaac.in/images/products/splits/heating-cooling.png",
        features: [
          "Quiet operation via noise-reduction function",
          "Efficient hybrid inverter and twin rotary compressor",
          "Ultra‑Pure filter absorbs odors, bacteria & mold",
          "Magic Coil for easy cleaning / hygiene",
          "6 airflow patterns in Seiya Classic models",
          "Power‑select & ECO standby modes",
          "Remote or built‑in Wi‑Fi control (optional)",
        ],
      },
    ],
  },
];


const HiWallSplit = () => {
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
      await fetch(scriptURL, { method: "POST", body: formData });
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
          Toshiba Hi‑Wall Inverter Split AC
        </h1>
      </section>

      <div className="py-14 px-6 md:px-16 lg:px-40 bg-white text-center">
        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
          Experience advanced inverter cooling from Toshiba’s premium Hi‑Wall Split AC range.
          Equipped with DC Hybrid technology, Magic Coil anti-dust protection, IAQ filtering,
          and silent operation, these units deliver comfort, energy savings, and durable performance.
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
                      {openFeatures[product.title] ? "Hide Features" : "Show Features"}
                    </button>
                    <button
                      onClick={() => setModal({ open: true, product: product.title })}
                      className="text-sm text-white bg-primary px-3 py-1.5 rounded-md hover:bg-primary-dark transition"
                    >
                      Enquire Now
                    </button>
                  </div>

                  {openFeatures[product.title] && (
                    <ul className="mt-4 text-left text-sm text-gray-700 list-disc list-inside">
                      {product.features.map((f, idx2) => (
                        <li key={idx2}>{f}</li>
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

export default HiWallSplit;
