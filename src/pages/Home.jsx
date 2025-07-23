import { NavLink } from "react-router-dom"
import BrandSlider from "../components/BrandSlider"
import TestimonialSlider from "../components/Testimonials"
import GallerySection from "../components/GallerySection"
import home1 from "../assets/hero.jpg";
import home2 from "../assets/hero2.jpg"
import home3 from "../assets/hero3.jpg";
import ProductBrands from "../components/ProductBrands";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";


const home4 = "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg"
const home5 = "https://images.pexels.com/photos/29252367/pexels-photo-29252367.jpeg"


const Home = () => {
  return (
    <div className="font-sans text-gray-800">

    <section id="home" className="relative w-full h-[65vh] lg:h-screen">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={500} // Smoother fade duration
        className="w-full h-full"
      >
        {[home3, home5, home4].map((image, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-[65vh] lg:h-screen bg-cover bg-center bg-no-repeat relative"
              style={{ backgroundImage: `url(${image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-bg-dark bg-opacity-80 z-0" />

              {/* Slide Content */}
              <div className="relative z-10 max-w-8xl mx-auto px-6 text-center flex flex-col items-center justify-center h-full">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold font-display leading-tight mb-6 text-white">
                  Efficient Cooling Solutions <br className="hidden sm:block" />
                  for Every Home & Office
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>



      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-md h-80 md:h-96 bg-gray-100">
                <img src={home1} alt="Our team at work" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 bg-primary text-white px-6 py-3">
                  <span className="text-2xl font-bold">40+</span>
                  <p className="text-sm">Years of Experience</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                About Our Company
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                  <span className="font-semibold text-primary">TRANS INDIA COOLING SOLUTIONS</span> has been delivering trusted air conditioning services for over 40 years. With showrooms in <span className="text-primary">Perumbavoor</span>, <span className="text-primary">Kothamangalam</span>, and <span className="text-primary">Thankalam</span>, we specialize in brands like <span className="text-primary">Mitsubishi</span>, <span className="text-primary">Toshiba</span>, <span className="text-primary">General</span>, <span className="text-primary">Daikin</span>, and <span className="text-primary">Panasonic</span>. We also specialize in centralized systems such as <span className="text-primary">VRF</span>, <span className="text-primary">VRV</span>, <span className="text-primary">ductable units</span>, <span className="text-primary">package units</span>, and <span className="text-primary">AHUs</span>. Our team of skilled professionals ensures each project is handled with care — delivering energy-efficient, long-lasting cooling solutions tailored to your <span className="text-primary">specific needs</span>.
                </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-primary-light p-2 rounded-full">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">40+ years of trusted service</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary-light p-2 rounded-full">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">500+ satisfied customers</span>
                </div>
              </div>

              <NavLink
                to="/about"
                className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-md transition duration-300 shadow-md hover:shadow-lg"
              >
                Read More About Us
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Brands & Gallery */}
      <BrandSlider />
      <ProductBrands />
      <GallerySection />

     {/* Showroom Section */}
      <section className="relative min-h-[60vh] bg-[#1E2A38] flex items-center">
        <div className="absolute inset-0">
          <img
            src={home1}
            alt="Trans India AC Showrooms"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1E2A38]/80" />
        </div>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Our Showrooms
            </h2>
            <p className="text-[#F1F5F9] max-w-2xl mx-auto">
              Visit our premium showrooms to experience our cooling solutions firsthand.
            </p>
          </div>
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: home2,
                location: "Kothamangalam",
                link: "https://maps.app.goo.gl/YPFFb6Y3Woeb1Ket8"
              },
              {
                img: home1,
                location: "Perumbavoor",
                link: "https://maps.app.goo.gl/xhbCWRAXwSsUkKVm6"
              },
              {
                img: home3,
                location: "Thankalam",
                link: "https://maps.app.goo.gl/q2hNWpx5N1XgF8Ex6"
              }
            ].map((showroom, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={showroom.img}
                  alt={`${showroom.location} Showroom`}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-medium text-lg text-[#1E293B]">
                    Trans India , {showroom.location}
                  </h3>
                  <a
                    href={showroom.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 px-4 py-2 bg-[#f8821e] text-white rounded-md hover:bg-[#e2710c] transition-colors"
                  >
                    View Location
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <TestimonialSlider />
    </div>
  );
};

export default Home;
