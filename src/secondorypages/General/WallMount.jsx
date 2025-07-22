import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import generalLogo from "../../assets/logo/logo2.png"; // your logo path

const categories = [
  {
    name: "Tropical Innovation Inverter",
    products: [
      {
        title: "ASGG18CETA-B",
        link: "https://www.general-hvac.com/in/products/split/wall/asgg18ceta-b.html",
      },
      {
        title: "ASGG24CETA-B",
        link: "https://www.general-hvac.com/in/products/split/wall/asgg24ceta-b.html",
      },
      {
        title: "ASGG30CETA-B",
        link: "https://www.general-hvac.com/in/products/split/wall/asgg30ceta-b.html",
      },
      {
        title: "ASGG36CETA-B",
        link: "https://www.general-hvac.com/in/products/split/wall/asgg36ceta-b.html",
      },
    ],
  },
  {
    name: "Efficient & Tropical Inverter",
    products: [
      {
        title: "ASGG12CGTB-B",
        link: "https://www.general-hvac.com/in/products/split/wall/asgg12cgtb-b.html",
      },
      {
        title: "ASGG18CGTB-B",
        link: "https://www.general-hvac.com/in/products/split/wall/asgg18cgtb-b.html",
      },
      {
        title: "ASGG24CGTB-B",
        link: "https://www.general-hvac.com/in/products/split/wall/asgg24cgtb-b.html",
      },
    ],
  },
  {
    name: "Tropical Inverter",
    products: [
      {
        title: "ASGG12CPAA-B",
        link: "https://www.general-hvac.com/in/products/split/wall/asgg12cpaa-b.html",
      },
      {
        title: "ASGG18CPAA-B",
        link: "https://www.general-hvac.com/in/products/split/wall/asgg18cpaa-b.html",
      },
      {
        title: "ASGG24CPAA-B",
        link: "https://www.general-hvac.com/in/products/split/wall/asgg24cpaa-b.html",
      },
    ],
  },
];

const WallMount = () => {
  return (
    <div className="font-sans">
        {/* Hero Section with Title */}
        <section className="bg-bg-dark py-24 text-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-display py-20 md:py-24">
            General – Wall Mounted ACs
          </h1>
        </section>
        {/* Description Below Hero */}
        <div className="py-14 px-6 md:px-16 lg:px-40 bg-white text-center">
          <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
            Discover General’s premium wall-mounted air conditioners. Designed to perform in tropical
            climates, offering superior energy efficiency, reliability, and advanced inverter technology.
          </p>
        </div>


      {/* Categories with Product List */}
      <section className="bg-bg-light py-20 px-6 md:px-20 lg:px-40 space-y-16">
        {categories.map((cat, idx) => (
          <div key={idx} className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-heading font-semibold text-text-base">{cat.name}</h3>
              <a
                href={cat.products[0].link.split("/products")[0] + "/products/split/wall/"} // fallback
                className="text-primary font-medium hover:underline text-sm flex items-center"
              >
                See All <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-xs" />
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {cat.products.map((p, i) => (
                <a
                  key={i}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center"
                >
                  <img
                    src="https://www.general-hvac.com/shared/in/img-gcin-split-wall-asgg18-36-ceta-b-01.png"
                    alt={p.title}
                    className="w-full h-44 object-contain mb-4"
                  />
                  <div className="text-text-base font-medium text-lg">{p.title}</div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default WallMount;
