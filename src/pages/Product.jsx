import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import logo1 from "../assets/logo/logo.png";
import logo2 from "../assets/logo/logo2.png";
import logo3 from "../assets/logo/logo3.png";
import logo4 from "../assets/logo/logo4.png";
import logo5 from "../assets/logo/logo5.png";

const brands = [
  {
    name: "General",
    description:
      "General ACs provide consistent cooling and are trusted for their rugged build and performance in extreme climates.",
    link: "/general",
    image: logo2,
  },
  {
    name: "Mitsubishi",
    description:
      "Mitsubishi air conditioners are known for their advanced technology, whisper-quiet operation, and long-term durability.",
    link: "/mitsubishi",
    image: logo5,
  },
  {
    name: "Daikin",
    description:
      "Daikin is a global leader in air conditioning offering energy-efficient solutions with high reliability and innovation.",
    link: "/daikin",
    image: logo3,
  },
  {
    name: "Toshiba",
    description:
      "Toshiba ACs combine elegant design with powerful cooling technology, suitable for both homes and commercial use.",
    link: "/toshiba",
    image: logo1,
  },
  {
    name: "Blue Star",
    description:
      "Blue Star offers reliable, value-packed wall-mounted ACs with durable construction and solid performance.",
    link: "/bluestar",
    image: logo4,
  },
];

const Product = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-bg-dark text-white py-32 md:py-48 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-display text-primary">
          Our Products
        </h1>
        <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
      </section>

      {/* Section Title */}
      <div className="py-20 text-center bg-bg-light text-white ">
        <h2 className="text-4xl font-bold font-display text-primary px-4">
          Trusted Product Brands
        </h2>
        <p className="text-lg mt-4 text-gray-900 max-w-2xl mx-auto px-4">
          Explore top air conditioning brands we proudly offer, trusted for
          quality and performance.
        </p>
      </div>

      {/* Brand Sections */}
      <section className="bg-bg-light pb-20 px-6 md:px-20 lg:px-40 space-y-20">
        {brands.map((brand, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-2xl overflow-hidden max-w-5xl mx-auto"
          >
            <div className="grid md:grid-cols-2 lg:gap-10 items-center">
              <div className="flex justify-center">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="md:h-72 px-5 md:py-8 object-contain"
                />
              </div>
              <div className="p-8 text-center md:text-left">
                <h3 className="text-2xl font-bold font-heading text-text-base mb-4">
                  {brand.name}
                </h3>
                <p className="text-text-light text-base mb-6">
                  {brand.description}
                </p>
                <a
                  href={brand.link}
                  className="inline-flex items-center text-primary font-semibold hover:underline"
                >
                  Check Products{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Product;
