import { NavLink } from "react-router-dom";

const GallerySection = () => {
  return (
<section className="gallery-area pb-28 bg-gray-100 py-8 md:py-16">
  <div className="px-4 sm:px-8 md:px-16 lg:px-28 xl:px-48 2xl:px-56">
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
    <div className="grid grid-cols-12 gap-3 ">
      {/* First Row */}
      <div className="col-span-12 lg:col-span-8">
        <div className="relative group overflow-hidden rounded-2xl shadow lg:h-[400px] h-[300px]">
          <img
            src="https://images.pexels.com/photos/1029243/pexels-photo-1029243.jpeg"
            alt="Lavender ambient interior"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition duration-300" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10 opacity-0 group-hover:opacity-100 transition duration-300">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">Lavender ambient interior</h3>
            <NavLink
              to="/projects"
              className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2 px-4 rounded uppercase transition"
            >
              More Details
            </NavLink>
          </div>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-4">
        <div className="relative group overflow-hidden  rounded-2xl shadow lg:h-[400px] h-[300px]">
          <img
            src="https://images.unsplash.com/photo-1620207418302-439b387441b0?auto=format&fit=crop&w=800&q=80"
            alt="Ambient interior"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition duration-300" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10 opacity-0 group-hover:opacity-100 transition duration-300">
            <h3 className="text-xl font-semibold text-white mb-4">Ambient interior</h3>
            <NavLink
              to="/projects"
              className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2 px-4 rounded uppercase transition"
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