import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import about2 from "../assets/about2.webp";
import about1 from "../assets/about1.webp";
import about3 from "../assets/about3.webp";
import hero from "../assets/hero2.jpg";

const About = () => {
  return (
    <div className="font-sans">

       <section className="bg-bg-dark text-white py-20 lg:py-40 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-display text-primary">
          Expert AC Solutions Since 40 Years
        </h1>
        <p className="text-white/70 mt-4 text-lg max-w-2xl mx-auto">
          Your trusted partner for all air conditioning needs - from installation to repair,
      we keep your space perfectly comfortable year-round.
        </p>
      </section>


    {/* Intro Section */}
      <div className="flex flex-col lg:flex-row mt-8 md:mt-16 lg:mt-32 gap-8">
        <div className="w-full lg:w-1/2 px-4 md:px-8 flex justify-center items-center">
          <img
            src={about1}
            alt="AC technician working"
            className="w-full max-w-sm md:max-w-md lg:max-w-[550px] h-auto object-cover lg:ml-80"
          />
        </div>
        <div className="w-full lg:w-1/2 bg-primary-dark text-white order-2 lg:order-1 flex flex-col justify-center lg:max-w-[650px] lg:ml-20">
          <h1 className="text-2xl md:text-3xl font-bold px-6 md:px-12 pt-8 font-heading">
            Precision Cooling Solutions <br />
            Tailored to Your Comfort Needs
          </h1>
          <p className="pt-4 px-6 md:px-12 pb-8 text-lg text-white/70">
            Founded as a small local HVAC service, we've grown into a premier AC specialist serving both residential and commercial clients. Our certified technicians combine technical expertise with a customer-first approach to deliver exceptional climate control solutions that stand the test of time.
          </p>
        </div>
      </div>

     <div className="flex flex-col lg:flex-row justify-center mt-8 md:mt-16 lg:mt-36 gap-8 lg:gap-10 pb-10 text-text-base px-4 md:px-8 lg:px-0">
        <div className="lg:mr-64">
          <h1 className="text-2xl md:text-3xl font-bold font-heading">Our Mission</h1>
          <p className="pt-6">
            We strive to provide the most reliable and efficient plumbing
            services, without <br className="hidden lg:block" />
            compromising on quality or safety. We also aim to prove our quality
            skills, fair <br className="hidden lg:block" />
            prices and customer care, so that we continue our business
            relationship for many <br className="hidden lg:block" />
            years, beyond the first job we complete.
          </p>
        </div>

        <div className="lg:mr-28">
          <h1 className="text-2xl md:text-3xl font-bold font-heading">Core Values</h1>
          <div className="pt-6 flex items-start">
            <FontAwesomeIcon icon={faCircleCheck} className="mt-1 mr-2 text-primary flex-shrink-0" />
            <p>
              Consider honesty as the key to a business' <br className="hidden lg:block" />
              trustworthiness and integrity.
            </p>
          </div>
          <div className="pt-3 flex items-start">
            <FontAwesomeIcon icon={faCircleCheck} className="mt-1 mr-2 text-primary flex-shrink-0" />
            <p>
              Always do the right thing to solve the <br className="hidden lg:block" />
              customer's problem.
            </p>
          </div>
          <div className="pt-3 flex items-start">
            <FontAwesomeIcon icon={faCircleCheck} className="mt-1 mr-2 text-primary flex-shrink-0" />
            <p>
              Perform all work with the highest level of <br className="hidden lg:block" />
              excellence in mind.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="flex flex-col lg:flex-row mt-8 md:mt-16 lg:mt-32 gap-4">
        <div className="w-full lg:w-1/2 bg-primary-dark text-white order-2 lg:order-1 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold px-6 md:px-12 pt-8 font-heading">
            Why Choose Our AC Services?
          </h1>
          <p className="pt-2 px-6 md:px-12 pb-5 text-lg text-white/70">
            From residential to commercial systems, we go the extra mile to ensure efficient cooling and long-lasting comfort. Your satisfaction is our top priority.
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

          {/* Testimonials Section */}
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
          <h1 className="text-2xl md:text-3xl font-bold px-6 md:px-12 pt-8 font-heading">
            Need Fast, Reliable AC Help? <br />
            Call Us Today!
          </h1>
          <div className="px-6 md:px-12 pt-6 pb-8">
            <button className="bg-white text-primary py-3 px-6 rounded shadow-md hover:bg-accent-2 transition flex items-center">
              <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
              +1 234 567 890
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Testimonial card
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
    <p className="text-text-light mb-4">
      "Our office AC system failed in peak summer. They arrived within 2 hours,
      diagnosed the issue quickly, and had us cooling again by end of day.
      Professional service from start to finish!"
    </p>
    <div className="flex items-center gap-4 mt-4">
      <img
        src={person.img}
        alt={person.name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <h3 className="text-lg font-semibold text-text-base">{person.name}</h3>
    </div>
  </div>
);

const testimonials = [
  {
    name: "Martin Foster",
    img: "https://websitedemos.net/local-business-02/wp-content/uploads/sites/832/2021/04/customer-1-150x150.jpg",
  },
  {
    name: "Bryan Cirius",
    img: "https://websitedemos.net/local-business-02/wp-content/uploads/sites/832/2021/06/customer-4-150x150.jpg",
  },
  {
    name: "Jane Dowser",
    img: "https://websitedemos.net/local-business-02/wp-content/uploads/sites/832/2021/04/customer-3-150x150.jpg",
  },
  // Duplicates removed - you might want to use unique data
];

export default About;
