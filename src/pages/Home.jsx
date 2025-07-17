import React from 'react'

const Home = () => {
  return (
    <div>
      <section  id="home"  className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center pt-[130px]"  style={{ backgroundImage: `url("https://images.pexels.com/photos/1029243/pexels-photo-1029243.jpeg")` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center justify-center text-center">
           <div className="w-full lg:w-3/4 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                Efficient Cooling Solutions <br className="hidden sm:block" />
                for Every Home & Office
              </h1>
              <p className="text-white text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8">
                We provide top-notch air conditioning installation, repair, and maintenance services. Reliable, fast, and energy-efficient cooling you can count on.
              </p>
              <a
                href="#about"
                className="inline-block border border-white text-white hover:text-green-400 hover:border-green-400 font-semibold px-6 py-2 rounded uppercase tracking-wide transition duration-300"
              >
                ↓ Scroll Down
              </a>
            </div>

          </div>
        </div>
      </section>

</div>
  )
}

export default Home