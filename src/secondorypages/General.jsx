import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import generalLogo from "../assets/logo/logo2.png";

const categories = [
  {
    name: "Wall Mounted",
    link: "wall-mounted",
    products: [
      { title: "TROPICAL INNOVATION INVERTER", image: "https://www.general-hvac.com/shared/in/img-gcin-split-wall-asgg18-36-ceta-b-01.png" },
      { title: "EFFICIENT & TROPICAL INVERTER", image: "https://www.general-hvac.com/shared/in/img-gcin-split-wall-asgg12-24cgtb-b-01.png" },
      { title: "TROPICAL INVERTER", image: "https://www.general-hvac.com/shared/in/img-gcin-split-wall-asgg18-24cptb-b-01.png" },
    ],
  },
  {
    name: "Cassette",
    link: "cassette",
    products: [
      { title: "HYPER TROPICAL CASSETTE", image: "https://www.general-hvac.com/shared/in/img-0000-vrf-indoor-circular-flow-cassette-small-01.png" },
      { title: "ECO FRIENDLY CASSETTE", image: "https://www.general-hvac.com/shared/in/img-gcin-split-cassette-aug36-54fuas-01.png" },
    ],
  },
  {
    name: "Duct",
    link: "duct",
    products: [
      { title: "General Cassette AC", image: "https://www.hvacdxb.com/wp-content/uploads/2019/06/SGDA-series.png" },
      { title: "General Ceiling Cassette", image: "https://www.general-hvac.com/shared/in/img-0000-split-b-duct-top-01.png" },
    ],
  },
  {
    name: "VRF Systems",
    link: "vrf",
    products: [
      { title: "VC-V", image: "https://www.general-hvac.com/shared/in/img-0000-vrf-ajg072-108jatah-01.png" },
      { title: "V-111 Topical Series", image: "https://www.general-hvac.com/shared/in/img-0000-products-vrf-btn-vrf-v3-tropical-02.png" },
      { title: "J-IVS", image: "https://www.general-hvac.com/shared/in/img-0000-vrf-j4s-ajh040-054lclbh-lclah-01.png" },
    ],
  }
];

const General = () => {
  return (
    <div className="font-sans text-text-base bg-bg-light">

      <section className="bg-bg-dark text-white text-center pt-10 pb-6 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <img
            src={generalLogo}
            alt="General Logo"
            className="mx-auto py-16 px-20 md:h-56 lg:h-72"
          />
        </div>
      </section>

      {/* Categories with Product Carousels */}
      <section className="py-20 px-6 md:px-40 space-y-20">
  {categories.map((cat, idx) => (
    <div key={idx}>
      {/* Category Title + Link */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-heading font-semibold text-text-base">
          {cat.name}
        </h2>
        <a
          href={cat.link}
          className="text-primary font-medium hover:underline text-sm flex items-center"
        >
          See All{" "}
          <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-xs" />
        </a>
      </div>

      {/* Product Carousel */}
      <Swiper
        spaceBetween={24}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {cat.products.map((product, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white shadow-md rounded-xl overflow-hidden">
              <div className="w-full h-60 bg-white flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-4 text-center text-sm font-medium">
                {product.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  ))}
</section>

    </div>
  );
};

export default General;
