import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const testimonials = [
  {
    name: "Anantha Krishnan",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjXTyrr7PdUJeWZPTe4S-rsrBSrZpor6M-PsZxgSORWfFlT0-Q5lcw=w90-h90-p-rp-mo-ba2-br100",
    text: "Trans India provided an excellent AC installation service. The team was quick, efficient, and very professional.",
    rating: 5,
  },
  {
    name: "Sabari P",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjUfKTKpZlc1xqmhsw5GdSoCxGJcVE4WtYsZ93xxN_AQ87rL0lPM=w90-h90-p-rp-mo-br100",
    text: "Their technicians diagnosed the issue with my old AC quickly and had it running in no time. Highly recommended!",
    rating: 4,
  },
  {
    name: "gokulan v.s",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjXgK0pn3SlH1bz39CvGSOeUfDVuxRYhxIWkkCFTY2E8g8V-EZ4=w90-h90-p-rp-mo-ba3-br100",
    text: "Great customer support and top-quality air conditioning systems. I’ve had no issues since installation.",
    rating: 5,
  },
  {
    name: "Aleena Alan",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjVO3VwQ8i-PecueOoPjCqwOpopw2x1askh93IFLbFalXYZpYUE=w90-h90-p-rp-mo-br100",
    text: "I had a wonderful experience with their team. Clean work, timely response, and affordable pricing.",
    rating: 4,
  },
];

const TestimonialSlider = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-[#f5f7fa]" id="testimonial">
  <div className="max-w-7xl mx-auto px-6 font-sans">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-800 mb-4">
        What Our Clients Say
      </h2>
      <p className="text-gray-600 font-sans">
        Real feedback from customers who trusted our cooling solutions.
      </p>
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
          <div className="bg-white border border-orange-100 shadow-md rounded-lg p-6 mx-2 h-full flex gap-5 items-start hover:shadow-lg transition-all duration-300">
            <img
              src={t.img}
              alt={t.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-[#f8821e]"
            />
            <div>
              <p className="text-gray-700 text-[15px] mb-3 leading-relaxed font-sans">
                {t.text}
              </p>
              <h4 className="text-lg font-semibold text-[#f8821e] mb-1 font-heading">
                {t.name}
              </h4>
              <div className="space-x-1 text-sm">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`fa fa-star ${i < t.rating ? "text-[#f8821e]" : "text-gray-300"}`}
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
