import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import generalLogo from "../assets/logo/logo2.png";
import wall1 from "../assets/products/bluestarmain.webp";
import wall2 from "../assets/products/bluestarmain.webp";
import inv1 from "../assets/products/bluestarmain.webp";
import cas1 from "../assets/products/bluestarmain.webp";

const categories = [
  {
    name: "Wall Mounted ACs",
    link: "/brands/general/wall-mounted",
    products: [
      { title: "General Wall AC 1 Ton", image: wall1 },
      { title: "General Wall AC 1.5 Ton", image: wall2 },
    ],
  },
  {
    name: "Inverter ACs",
    link: "/brands/general/inverter",
    products: [
      { title: "General Inverter 1.5 Ton", image: inv1 },
      { title: "General Inverter 2 Ton", image: wall1 },
    ],
  },
  {
    name: "Cassette ACs",
    link: "/brands/general/cassette",
    products: [
      { title: "General Cassette AC", image: cas1 },
      { title: "General Ceiling Cassette", image: wall2 },
    ],
  },
];

const General = () => {
  return (
    <div className="font-sans text-text-base bg-bg-light">
      {/* Hero with Logo */}
      <section className="bg-bg-dark text-white py-16 md:py-24 lg:py-20 text-center">
        <img
          src={generalLogo}
          alt="General Logo"
          className="mx-auto h-40 md:h-56 lg:h-72"
        />
      </section>

      {/* Title + Description Below Hero */}
      <section className="bg-white py-12 px-6 md:px-40 text-center">
        <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto leading-relaxed">
          Built for durability and high performance. General ACs keep you cool even in extreme conditions.
        </p>
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
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-60 object-cover"
                    />
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
