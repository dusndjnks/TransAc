import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import logo1 from "../assets/logo/kcvjbjkv (1).jpg";
import logo2 from "../assets/logo/logo1.png";
import logo3 from "../assets/logo/kcvjbjkv (2).jpg";
import logo4 from "../assets/logo/logo2.png";
import logo5 from "../assets/logo/kcvjbjkv (3).png";

const brands = [
  {
    name: 'Carrier',
    description: 'Carrier Midea India was set up in 2012 to deliver cutting-edge cooling technology.',
    image: logo1,
  },
  {
    name: 'Toshiba',
    description: 'Toshiba has invested heavily in innovation over the last 30 years in HVAC systems.',
    image: logo2,
  },
  {
    name: 'Daikin',
    description: 'Daikin\'s Rajasthan plant creates energy-efficient products with Japanese precision.',
    image: logo3,
  },
  {
    name: 'Voltas',
    description: 'Voltas leads the Indian AC market with powerful and smart cooling solutions.',
    image: logo4,
  },
  {
    name: 'Blue Star',
    description: 'Blue Star offers industrial-grade cooling with uncompromising reliability.',
    image: logo5,
  },
];

export default function ProductBrands() {
  return (
    <section className="bg-white py-16 lg:py-24 px-4 lg:px-16" id="brands">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Trusted Product Brands
          </h2>
          <div className="w-24 h-1 bg-[#FF6B00] mx-auto mb-5 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We partner with global leaders in HVAC technology to deliver premium cooling solutions.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          speed={700}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 24 },
            768: { slidesPerView: 2, spaceBetween: 32 },
          }}
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 mx-4 flex flex-col items-center text-center border-t-4 border-[#FF6B00] h-full">
                <div className="w-28 h-28 sm:w-32 sm:h-32 mb-6 flex items-center justify-center bg-[#fff3e9] rounded-full overflow-hidden">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="object-contain w-full h-full max-h-20"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{brand.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{brand.description}</p>
                <div className="mt-6 text-[#FF6B00] font-medium text-sm hover:underline">
                  Explore Products →
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
