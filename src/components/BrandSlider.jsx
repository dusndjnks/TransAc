import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import prdts1 from "../assets/prdts (1).png";
import prdts2 from "../assets/prdts (2).png";
import prdts3 from "../assets/prdts (3).png";
import prdts4 from "../assets/prdts (4).png";
import prdts5 from "../assets/prdts (5).png";
import prdts6 from "../assets/prdts (6).png";

const brands = [
  prdts1,
  prdts2,
  prdts3,
  prdts4,
  prdts5,
  prdts6,
];

const BrandSlider = () => {
  return (
   <section className="md:py-20 py-12 bg-[#fff8f3]">
  <div className="max-w-screen-xl mx-auto px-6">
    <div className="flex justify-center">
      <div className="text-center max-w-2xl pb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#f8821e] pb-4">
          Our Major Clients
        </h1>
      </div>
    </div>

    <div className="bg-white rounded-2xl py-3 md:py-6 shadow-md shadow-[#f8821e]/20">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        freeMode={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        slidesPerView={3}
        spaceBetween={40}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        allowTouchMove={false}
      >
        {brands.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center h-24">
              <img
                src={logo}
                alt={`Brand ${index + 1}`}
                className="md:h-20 h-12 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
</section>

  );
};

export default BrandSlider;
