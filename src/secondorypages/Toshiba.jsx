import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import toshibaLogo from "../assets/logo/logo.png"; // Replace with actual Toshiba logo path

const categories = [
  {
    name: "Wall Mounted",
    link: "wall-split",
    image: "https://www.toshibaac.in/images/products/Splits/hi-wall-new/G3KCV5SG.png", // Example Toshiba wall mount image
  },
  {
    name: "Cassette",
    link: "toshiba-casette",
    image: "https://www.toshibaac.in/images/products/Cassette/RAV-SE801UP_RAV-TE801AP.png", // Example cassette
  },
  {
    name: "Ducted",
    link: "toshiba-duct",
    image: "https://www.toshibaac.in/images/products/Ducted/RAV-SE801BP_RAV-TE801AP.png", // Ducted AC image
  },
  {
    name: "VRF Top Discharge AC",
    link: "toshiba-vrf",
    image: "https://www.toshibaac.in/images/products/VRF/1.png", // Example VRF
  },
  {
    name: "VRF Systems",
    link: "indoor-vrf",
    image: "https://www.toshibaac.in/images/products/VRF/new/bi-flowing.jpg", // Example VRF
  },
];

const Toshiba = () => {
  return (
    <div className="font-sans text-text-base bg-bg-light">

      {/* Logo Section */}
      <section className="bg-bg-dark text-white text-center pt-10 pb-6 flex flex-col items-center">
        <img
          src={toshibaLogo}
          alt="Toshiba Logo"
          className="mx-auto py-16 px-20 md:h-56 lg:h-96"
        />
      </section>

      {/* Category Grid */}
      <section className="py-20 px-6 md:px-40">
        <div className="grid gap-10 lg:grid-cols-2">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-4 bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-heading font-semibold text-text-base">
                  {cat.name}
                </h2>
                <a
                  href={cat.link}
                  className="text-primary font-medium hover:underline text-sm flex items-center"
                >
                  Go to{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-xs" />
                </a>
              </div>
              <div className="w-full h-56 flex items-center justify-center bg-bg-light rounded-lg overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Toshiba;
