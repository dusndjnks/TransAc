import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { NavLink } from 'react-router-dom';

import logo1 from "../assets/logo/logo.png";
import logo2 from "../assets/logo/logo2.png";
import logo3 from "../assets/logo/logo3.png";
import logo4 from "../assets/logo/logo4.png";
import logo5 from "../assets/logo/logo5.png";

// Updated with individual paths
const brands = [
  {
    name: 'General',
    description: 'General delivers high-performance air conditioning with unmatched durability and comfort.',
    image: logo2,
    path: '/general',
  },
  {
    name: 'Mitsubishi',
    description: 'Mitsubishi offers precision-engineered cooling systems designed for lasting efficiency.',
    image: logo5,
    path: '/mitsubishi',
  },
  {
    name: 'Daikin',
    description: 'Daikin manufactures energy-efficient solutions, combining innovation with Japanese expertise.',
    image: logo3,
    path: '/daikin',
  },
  {
    name: 'Toshiba',
    description: 'Toshiba brings decades of innovation in HVAC technology with smart, reliable performance.',
    image: logo1,
    path: '/toshiba',
  },
  {
    name: 'Blue Star',
    description: 'Blue Star provides industrial-grade cooling with premium reliability and sleek design.',
    image: logo4,
    path: '/bluestar',
  },
];

export default function ProductBrands() {
  return (
    <section className="bg-white lg:py-20 px-8 lg:px-10 xl:px-20 py-10" id="brands">
      <div className="max-w-5xl mx-auto font-sans">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 mb-2">
            Trusted Product Brands
          </h2>
          <div className="w-20 h-1 bg-[#FF6B00] mx-auto mb-4 rounded-full"></div>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            We partner with global leaders in HVAC technology to deliver premium cooling solutions.
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          speed={600}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
          }}
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center text-center border-t-4 border-[#FF6B00] h-full min-h-[300px] mb-2">
                <div className="w-24 h-20 mb-4 flex items-center justify-center bg-[#fff3e9] rounded-full overflow-hidden">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="object-contain h-full max-h-16"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1 font-heading">
                  {brand.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-[240px] font-sans">
                  {brand.description}
                </p>
                <NavLink
                  to={brand.path}
                  className="mt-3 text-[#FF6B00] font-medium text-sm hover:underline font-sans"
                >
                  Explore Products →
                </NavLink>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
