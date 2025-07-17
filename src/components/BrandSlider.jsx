import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const brands = [
  "https://tse2.mm.bing.net/th/id/OIP.cywXPMjBYVj6ws5JBbb_zwHaHZ?pid=Api&P=0&h=180",
  "https://companieslogo.com/img/orig/RELIANCE.NS-bb9f8a1b.png?t=1633628819",
  "https://static.vecteezy.com/system/resources/previews/021/671/862/large_2x/asian-paints-logo-free-png.png",
  "https://logos-world.net/wp-content/uploads/2020/11/HDFC-Bank-Logo.png",
  "https://tse2.mm.bing.net/th/id/OIP.cywXPMjBYVj6ws5JBbb_zwHaHZ?pid=Api&P=0&h=180",
  "https://companieslogo.com/img/orig/RELIANCE.NS-bb9f8a1b.png?t=1633628819",
];

const BrandSlider = () => {
  return (
    <section className="md:py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Brands We Work With
        </h2>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          freeMode={true}
          speed={3000} // faster than 5000
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          slidesPerView={2}
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
                  className="h-20 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BrandSlider;
