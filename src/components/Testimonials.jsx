import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const testimonials = [
  {
    name: "Mark Alviro Wiens",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware.",
    rating: 4,
  },
  {
    name: "Lina Harrington",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Hypnosis quit smoking methods maintain caused quite world over the last two decades. There is a lot of argument pertaining to.",
    rating: 3,
  },
  {
    name: "John Doe",
    img: "https://randomuser.me/api/portraits/men/53.jpg",
    text: "We were amazed at the professionalism and quick service. Definitely a company to rely on for cooling needs.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Great experience from start to finish. Their AC installation team was top-notch.",
    rating: 4,
  },
];

const TestimonialSlider = () => {
  return (
    <section className="testimonial-area py-28 bg-[#f5f7fa]" id="testimonial">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Testimonial from our Clients
          </h2>
          <p className="text-gray-600">Who are in extremely love with eco friendly system.</p>
        </div>

        {/* Testimonial Swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 } }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border border-green-100 shadow-md rounded-lg p-6 mx-2 h-full flex gap-5 items-start hover:shadow-lg transition-all duration-300">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-green-500"
                />
                <div>
                  <p className="text-gray-700 text-[15px] mb-3 leading-relaxed">{t.text}</p>
                  <h4 className="text-lg font-semibold text-green-600 mb-1">{t.name}</h4>
                  <div className="star text-yellow-400 space-x-1 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fa fa-star ${i >= t.rating ? "text-gray-300" : ""}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;
