import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import generalLogo from "../assets/logo/logo2.png";

const categories = [
  {
    name: "Wall Mounted",
    link: "wall-mounted",
    image: "https://www.general-hvac.com/shared/in/img-gcin-split-wall-asgg18-36-ceta-b-01.png",
  },
  {
    name: "VRF Systems",
    link: "vrf",
    image: "https://www.general-hvac.com/shared/in/img-0000-vrf-ajg072-108jatah-01.png",
  },
  {
    name: "Cassette",
    link: "cassette",
    image: "https://www.general-hvac.com/shared/in/img-0000-vrf-indoor-circular-flow-cassette-small-01.png",
  },
  {
    name: "Duct",
    link: "duct",
    image: "https://www.hvacdxb.com/wp-content/uploads/2019/06/SGDA-series.png",
  },
];

const General = () => {
  return (
    <div className="font-sans text-text-base bg-bg-light">

      {/* Logo Section */}
      <section className="bg-bg-dark text-white text-center pt-10 pb-6 flex flex-col items-center">
        <img
          src={generalLogo}
          alt="General Logo"
          className="mx-auto py-16 px-20 md:h-56 lg:h-72"
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

export default General;
