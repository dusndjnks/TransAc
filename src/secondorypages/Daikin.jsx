import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import daikin1 from "../pages/brands/Daikinx/daikin/daikin (1).png"
import daikin2 from "../pages/brands/Daikinx/daikin/daikin (2).png";
import daikin3 from "../pages/brands/Daikinx/daikin/daikin (3).png";
import daikin4 from "../pages/brands/Daikinx/daikin/daikin (4).png";
import daikin5 from "../pages/brands/Daikinx/daikin/daikin (5).png";
import logo from "../assets/logo/logo3.png"

const categories = [
  {
    name: "Wall Mounted",
    link: "/daikin-split",
    image: daikin5,
  },
  {
    name: "Cassette ACs",
    link: "/daikin-cassette",
    image: daikin4,
  },
  {
    name: "Ducted Systems",
    link: "/daikin-ducted",
    image: daikin2,
  },
  {
    name: "VRV Systems",
    link: "/daikin-vrv",
    image: daikin3,
  },
  {
    name: "Floor Standing",
    link: "/daikin-floor",
    image: daikin1,
  },
];

const Daikin = () => {
  return (
    <div className="font-sans text-text-base bg-bg-light">
      {/* Logo Section */}
      <section className="bg-bg-dark text-white text-center pt-10 pb-6 flex flex-col items-center">
        <img
          src={logo}
          alt="Daikin Logo"
          className="mx-auto py-16 px-20 md:h-56 lg:h-72"
        />
      </section>

      {/* Category Grid */}
      <section className="py-20 px-6 md:px-40">
        <div className="grid gap-10 lg:grid-cols-2">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="space-y-4 bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-heading font-semibold text-text-base">
                  {cat.name}
                </h2>
                <a
                  href={cat.link}
                  className="text-primary font-medium hover:underline text-sm flex items-center"
                >
                  Go to{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-xs" />
                </a>
              </div>
              <div className="w-full h-56 flex items-center justify-center bg-bg-light rounded-lg overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Daikin;
