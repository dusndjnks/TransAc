import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import about1 from "../assets/about1.webp";
import about2 from "../assets/about2.webp";
import about3 from "../assets/about3.webp";
import awards1 from "../assets/awards (1).jpg";
import awards2 from "../assets/awards (2).jpg";
import awards3 from "../assets/awards (3).jpg";

const testimonials = [
  {
    name: "Arun Krishnan",
    review:
      "Quick and reliable service. My home AC was fixed in no time and now works better than ever. Highly recommended!",
  },
  {
    name: "Sneha Nair",
    review:
      "Excellent customer care and professional work. They even explained maintenance tips which was really helpful.",
  },
  {
    name: "Riyas Mohammed",
    review:
      "The team was punctual and efficient. Our office cooling issue was solved the same day. Great service experience!",
  },
];

const TestimonialCard = ({ person }) => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <div className="flex gap-1 mb-4 justify-start">
      {[...Array(5)].map((_, idx) => (
        <svg
          key={idx}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545z" />
        </svg>
      ))}
    </div>
    <p className="text-text-light mb-4">"{person.review}"</p>
    <h3 className="text-lg font-semibold text-text-base mt-4">{person.name}</h3>
  </div>
);

const About = () => {
  return (
    <div className="font-sans">

      {/* Page Banner */}
      <section className="bg-bg-dark text-white py-32 md:py-48 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-display text-primary">About Us</h1>
        <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
      </section>

      {/* Intro Section */}
      <div className="flex flex-col lg:flex-row mt-8 md:mt-16 lg:mt-32 gap-4 pb-5 md:pb-10 lg:mb-16">
        <div className="w-full lg:w-1/2 px-4 md:px-8 flex justify-center lg:ml-56 order-1">
          <img
            src={about1}
            alt="AC technician working"
            className="w-full max-w-sm md:max-w-md lg:max-w-[550px] h-auto object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 bg-primary-dark text-white order-2 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold px-6 md:px-12 pt-8 font-heading">
            Precision Cooling Solutions <br />
            Tailored to Your Comfort Needs
          </h1>
          <p className="pt-4 px-6 md:px-12 pb-8 text-lg text-white/70">
            Founded as a small local HVAC service, we've grown into a premier AC specialist
            serving both residential and commercial clients. Our certified technicians combine
            technical expertise with a customer-first approach to deliver exceptional climate
            control solutions that stand the test of time.
          </p>
        </div>
      </div>

      {/* Mission & Core Values */}
      <div className="bg-bg-dark py-16 px-4 md:px-8 lg:px-20 text-white">
        <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-10 text-text-base">

          {/* Our Mission */}
          <div className="lg:mr-64">
            <h1 className="text-2xl md:text-3xl font-bold font-heading text-white">Our Mission</h1>
            <p className="pt-6 text-white/80">
              We strive to provide the most reliable and efficient air conditioning solutions,
              without <br className="hidden lg:block" />
              compromising on quality or performance. We also aim to prove our expert service,
              fair <br className="hidden lg:block" />
              pricing and customer care, so that we continue our business relationship for many
              <br className="hidden lg:block" />
              years, beyond the first system we install.
            </p>
          </div>

          {/* Core Values */}
          <div className="lg:mr-28">
            <h1 className="text-2xl md:text-3xl font-bold font-heading text-white">Core Values</h1>

            {[
              "Consider honesty as the key to a company’s trustworthiness and service quality.",
              "Always do the right thing to solve the customer's cooling requirement.",
              "Perform all work with the highest level of expertise and professionalism.",
            ].map((value, index) => (
              <div key={index} className="pt-3 flex items-start">
                <FontAwesomeIcon icon={faCircleCheck} className="mt-1 mr-2 text-primary flex-shrink-0" />
                <p className="text-white/80">{value}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Why Choose Us */}
      <div className="flex flex-col lg:flex-row mt-8 md:mt-16 lg:mt-32 gap-4 pb-5 md:pb-10 lg:mb-16">
        <div className="w-full lg:w-1/2 bg-primary-dark text-white order-2 lg:order-1 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold px-6 md:px-12 pt-8 font-heading">
            Why Choose Our AC Services?
          </h1>
          <p className="pt-2 px-6 md:px-12 pb-5 text-lg text-white/70">
            From residential to commercial systems, we go the extra mile to ensure efficient
            cooling and long-lasting comfort. Your satisfaction is our top priority.
          </p>
          <div className="space-y-3 px-6 md:px-12 pb-10 text-white/80 text-base">
            {[
              "NATE-certified HVAC technicians",
              "Transparent and fair pricing",
              "Energy-efficient system installations",
              "Preventive maintenance plans",
              "24/7 emergency AC services",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <FontAwesomeIcon icon={faCircleCheck} className="mt-1 text-accent-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-4 md:px-8 flex justify-center lg:mr-56 order-1 lg:order-2">
          <img
            src={about2}
            alt="AC unit installation"
            className="w-full max-w-sm md:max-w-md lg:max-w-[550px] h-auto object-cover"
          />
        </div>
      </div>

      {/* Awards Section */}
      <section className="bg-bg-dark py-16 px-4 md:px-10 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-primary mb-12">
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[awards1, awards2, awards3].map((img, index) => (
              <div
                key={index}
                className="bg-[#2c2c2c] p-8 rounded-xl shadow-lg hover:shadow-primary/30 transition duration-300"
              >
                <img
                  src={img}
                  alt={`Award ${index + 1}`}
                  className="w-60 h-60 mx-auto mb-4 object-contain"
                />
                <h3 className="text-2xl font-semibold text-white mt-4">
                  {[
                    "Dealership Certificate",
                    "Certificate Of Appreciation",
                    "Partnership In Excellence",
                  ][index]}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <div className="flex flex-col items-center justify-center mt-8 md:mt-16 lg:mt-36 mb-8 md:mb-16 lg:mb-24 bg-bg-light py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 px-4 md:px-8 lg:px-40 xl:px-56">
          {testimonials.map((person, i) => (
            <TestimonialCard key={i} person={person} />
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="flex flex-col lg:flex-row mt-8 md:mt-16 lg:mt-32">
        <div className="w-full lg:w-1/2 px-4 md:px-8 order-2 lg:order-1 flex justify-center bg-primary">
          <img
            src={about3}
            alt="AC maintenance service"
            className="w-full max-w-xl h-auto object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 bg-primary text-white order-1 lg:order-2 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold px-6 md:px-12 pt-8 font-display">
            Need Fast, Reliable AC Help? <br />
            Call Us Today!
          </h1>
          <div className="px-6 md:px-12 pt-6 pb-8">
            <button className="bg-white text-primary py-3 px-6 rounded shadow-md hover:bg-accent-2 transition flex items-center">
              <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
              <a href="tel:+917558801625" className="hover:text-primary-600 transition-colors">
                +91 7558801625
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
