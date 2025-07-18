import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 80 });
  }, []);

  return (
    <div>
     <section
      role="banner"
      aria-label="About Us page header"
      className="relative bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center justify-center text-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80")',
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>

      <div className="relative z-10 max-w-4xl px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
          About Our Company
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          We're dedicated to delivering exceptional solutions with transparency
          and innovation at our core.
        </p>

        <div className="mt-6 w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
      </div>
    </section>

       <div>
      {/* Intro Section */}
      <div
        className="flex flex-col lg:flex-row mt-8 md:mt-16 lg:mt-32 gap-8 lg:gap-12"
        data-aos="fade-up"
      >
        <div className="px-4 md:px-8 lg:px-0 lg:pl-80">
          <img
            src="https://websitedemos.net/local-business-02/wp-content/uploads/sites/832/elementor/thumbs/why-choose-us-p6dpqrzat55gttaj9e4rjuc5rm6x4qczldnifi683g.jpg"
            alt="pipe"
            className="w-full h-auto lg:h-auto lg:w-[1030px]"
          />
        </div>
        <div className="bg-blue-600 text-white w-full">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold px-6 md:px-12 lg:pl-24 pt-8 lg:pt-10">
            We Solve Plumbing and <br />
            Heating Problems with <br />
            Most Efficiency
          </h1>
          <p className="pt-4 px-6 md:px-12 lg:pl-24 pb-8 lg:pb-20 text-lg md:text-xl text-white/70">
            We started off as a small 2 men army offering{" "}
            <br className="hidden lg:block" />
            dedicated plumbing solutions in the neighborhood.{" "}
            <br className="hidden lg:block" />
            This then expanded into a larger team offering a{" "}
            <br className="hidden lg:block" />
            wider range of services at affordable prices.{" "}
            <br className="hidden lg:block" />
            Whether it's repair or replacement, we make sure{" "}
            <br className="hidden lg:block" />
            it's done well.
          </p>
        </div>
      </div>

      {/* Mission & Values */}
      <div
        className="flex flex-col lg:flex-row justify-center mt-8 md:mt-16 lg:mt-36 gap-8 lg:gap-10 pb-10 text-gray-700 px-4 md:px-8 lg:px-0"
        data-aos="fade-right"
      >
        <div className="lg:mr-64">
          <h1 className="text-2xl md:text-3xl font-bold">Our Mission</h1>
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
          <h1 className="text-2xl md:text-3xl font-bold">Core Values</h1>
          <div className="pt-6 flex items-start">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="mt-1 mr-2 text-gray-700 flex-shrink-0"
            />
            <p>
              Consider honesty as the key to a business'{" "}
              <br className="hidden lg:block" />
              trustworthiness and integrity.
            </p>
          </div>
          <div className="pt-3 flex items-start">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="mt-1 mr-2 text-gray-700 flex-shrink-0"
            />
            <p>
              Always do the right thing to solve the{" "}
              <br className="hidden lg:block" />
              customer's problem.
            </p>
          </div>
          <div className="pt-3 flex items-start">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="mt-1 mr-2 text-gray-700 flex-shrink-0"
            />
            <p>
              Perform all work with the highest level of{" "}
              <br className="hidden lg:block" />
              excellence in mind.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div
        className="flex flex-col lg:flex-row mt-8 md:mt-16 lg:mt-32 gap-8 lg:gap-12"
        data-aos="fade-left"
      >
        <div className="bg-blue-600 text-white w-full order-2 lg:order-1">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold px-6 md:px-12 lg:pl-96 pt-8 lg:pt-10">
            Why Choose Us?
          </h1>

          <p className="pt-4 px-6 md:px-12 lg:pl-96 pb-8 lg:pb-10 text-lg md:text-xl text-white/70">
            We show you our appreciation by going above and{" "}
            <br className="hidden lg:block" />
            beyond, ensuring a flawless experience. We can be{" "}
            <br className="hidden lg:block" />
            your top choice today!
          </p>

          <div className="px-6 md:px-12 lg:pl-96 space-y-3 text-white/80 text-base lg:text-lg pb-8 lg:pb-0">
            <div className="flex items-start gap-2">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="mt-1 text-white flex-shrink-0"
              />
              <span>Highly qualified staff</span>
            </div>
            <div className="flex items-start gap-2">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="mt-1 text-white flex-shrink-0"
              />
              <span>Honest and flat-rate pricing</span>
            </div>
            <div className="flex items-start gap-2">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="mt-1 text-white flex-shrink-0"
              />
              <span>100% satisfaction guaranteed</span>
            </div>
            <div className="flex items-start gap-2">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="mt-1 text-white flex-shrink-0"
              />
              <span>Wide service area</span>
            </div>
            <div className="flex items-start gap-2">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="mt-1 text-white flex-shrink-0"
              />
              <span>On-demand emergency services</span>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-8 lg:px-0 lg:pr-80 order-1 lg:order-2">
          <img
            src="https://websitedemos.net/local-business-02/wp-content/uploads/sites/832/elementor/thumbs/plumbing-about-p6f4oydpn17ug438u4vhh1papz33wcaqnyuths3k5c.jpg"
            alt="pipe"
            className="w-full h-auto lg:h-auto lg:w-[1030px]"
          />
        </div>
      </div>

      {/* Testimonials Section */}
      <div
        className="flex flex-col items-center justify-center mt-8 md:mt-16 lg:mt-36 mb-8 md:mb-16 lg:mb-24"
        data-aos="zoom-in"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 px-4 md:px-8 lg:px-80">
          {[
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
          ].map((person, i) => (
            <div
              key={i}
              className="bg-white p-6 shadow-md lg:shadow-none rounded-lg lg:rounded-none"
            >
              {/* Stars at the top */}
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

              {/* Testimonial text */}
              <p className="text-gray-600 mb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>

              {/* Image + Name */}
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  {person.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex flex-col lg:flex-row mt-8 md:mt-16 lg:mt-32"
        data-aos="fade-up"
      >
        {/* Left Image */}
        <div className="px-4 md:px-8 lg:px-0 lg:pl-80 bg-blue-600 order-2 lg:order-1">
          <img
            src="https://websitedemos.net/local-business-02/wp-content/uploads/sites/832/elementor/thumbs/emergency-p6fj1dvjr0y6g68d6x2m6mdowd49kr4gh2eh4pn0co.jpg"
            alt="pipe"
            className="w-full h-auto lg:h-auto lg:w-[1030px]"
          />
        </div>

        {/* Right Text + Button */}
        <div className="bg-blue-600 text-white w-full order-1 lg:order-2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold px-6 md:px-12 lg:pl-24 pt-8 lg:pt-32">
            We're here to help! Call <br />
            Us Today!
          </h1>
          <div className="px-6 md:px-12 lg:pl-24 pt-6 pb-8 lg:pb-0">
            <button className="bg-white text-blue-600 py-3 px-6 rounded shadow-md hover:bg-gray-100 transition">
              <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
              +1 234 567 890
            </button>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default About;
