import { NavLink } from "react-router-dom";
import gal1 from "../assets/IMG-20250714-WA0021.jpg";
import gal2 from "../assets/IMG-20250714-WA0028.jpg";
import gal3 from "../assets/IMG-20250714-WA0029.jpg";
import gal4 from "../assets/IMG-20250714-WA0030.jpg";

const GallerySection = () => {
  return (
    <section className="gallery-area pb-28 py-8 md:py-16 bg-white">
      <div className="px-4 sm:px-8 md:px-16 lg:px-28 xl:px-48">
        {/* Header */}
        <div className="flex justify-center">
          <div className="text-center max-w-2xl pb-10">
            <h1 className="text-3xl md:text-4xl font-bold pb-4">
              Our Recent Works may impress you
            </h1>
            <p className="text-gray-600">
              Who are in extremely love with eco friendly system.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-12 gap-4">
          {/* Row 1 */}
          <div className="col-span-12 lg:col-span-8">
            <div className="relative overflow-hidden rounded-2xl shadow h-[300px] lg:h-[400px]">
              <img
                src={gal3}
                alt="Lavender ambient interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center px-6">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  Lavender ambient interior
                </h3>
                <NavLink
                  to="/projects"
                  className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2 px-4 rounded uppercase transition"
                >
                  More Details
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div className="relative overflow-hidden rounded-2xl shadow h-[300px] lg:h-[400px]">
              <img
                src={gal1}
                alt="Ambient interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center px-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Ambient interior
                </h3>
                <NavLink
                  to="/projects"
                  className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2 px-4 rounded uppercase transition"
                >
                  More Details
                </NavLink>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="col-span-12 lg:col-span-4 mt-6">
            <div className="relative overflow-hidden rounded-2xl shadow h-[300px] lg:h-[400px]">
              <img
                src={gal2}
                alt="Cooling Systems Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center px-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Cooling Systems Interior
                </h3>
                <NavLink
                  to="/projects"
                  className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2 px-4 rounded uppercase transition"
                >
                  More Details
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8 mt-6">
            <div className="relative overflow-hidden rounded-2xl shadow h-[300px] lg:h-[400px]">
              <img
                src={gal4}
                alt="Modern Lobby Design"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center px-6">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  Modern Lobby Design
                </h3>
                <NavLink
                  to="/projects"
                  className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2 px-4 rounded uppercase transition"
                >
                  More Details
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
