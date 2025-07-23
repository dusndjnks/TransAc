import { NavLink } from "react-router-dom";
import gal2 from "../assets/project9.png";
import gal3 from "../assets/IMG-20250714-WA0029.jpg";


const GallerySection = () => {
  return (
    <section className="gallery-area pb-28 py-8 md:py-16 bg-[#fdfaf8]">
  <div className="px-4 sm:px-8 md:px-16 lg:px-28 xl:px-40">
    {/* Header */}
    <div className="flex justify-center">

<div className="text-center max-w-2xl pb-10">
  <NavLink
    to="/project"
    className="inline-flex items-center justify-center gap-3 text-3xl md:text-4xl font-heading font-bold text-[#f8821e] group hover:underline"
  >
    Our Recent Works
    <span className="text-3xl transition-transform duration-300 group-hover:translate-x-1">→</span>
  </NavLink>
</div>

    </div>

    {/* Gallery Grid */}
    <div className="grid grid-cols-12 gap-4">
      {/* Row 1 Left */}
      <div className="col-span-12 lg:col-span-8">
        <div className="relative overflow-hidden rounded-2xl shadow shadow-[#f8821e]/20 h-[300px] lg:h-[350px]">
          <img
            src={gal3}
            alt="Lavender ambient interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center px-6">
            <h3 className="text-xl md:text-2xl font-heading font-semibold text-white mb-4">
              Centralised Air Conditioning
            </h3>
            <NavLink
              to="/project"
              className="bg-[#f8821e] hover:bg-[#e67212] text-white text-sm font-semibold py-2 px-4 rounded uppercase transition"
            >
              View More
            </NavLink>
          </div>
        </div>
      </div>

      {/* Row 1 Right */}
      <div className="col-span-12 lg:col-span-4">
        <div className="relative overflow-hidden rounded-2xl shadow shadow-[#f8821e]/20 h-[300px] lg:h-[350px]">
          <img
            src={gal2}
            alt="Ambient interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center px-6">
            <h3 className="text-xl font-heading font-semibold text-white mb-4">
              Centralised Air Conditioning
            </h3>
            <NavLink
              to="/project"
              className="bg-[#f8821e] hover:bg-[#e67212] text-white text-sm font-semibold py-2 px-4 rounded uppercase transition"
            >
              View More
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
