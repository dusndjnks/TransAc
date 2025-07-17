import React from 'react'

const About = () => {
  return (
    <div>

        <section
          role="banner"
          aria-label="About Us page header"
          className="relative bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center justify-center text-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80")',
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gray-900/60" aria-hidden="true"></div>
        
          {/* Centered Content */}
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
              About Our Company
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300">
              We're dedicated to delivering exceptional solutions with transparency and innovation at our core.
            </p>
          </div>
        </section>


        <section id="service" className="md:py-20 py-8 px-5 sm:px-10 md:px-28 lg:px-40 bg-white">
        <div className="max-w-screen-xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl  font-bold text-gray-900 mb-4 ">
              What we offer to our clients
            </h1>
            <p className="text-gray-500 text-[12px] md:text-[14px] 2xl:text-[15px]">
              Premium air conditioning solutions tailored for comfort and efficiency.
            </p>
          </div>
        
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Box 1 */}
            <div className="rounded-md border border-gray-100 shadow-sm p-8 text-center hover:bg-[#020a27] transition-all duration-300 group">
              <a href="#">
                <h4 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-yellow-400 transition-all duration-300">
                  AC Installation
                </h4>
              </a>
              <p className="text-gray-600 group-hover:text-gray-300 transition-all duration-300 text-[15px] leading-relaxed">
                We provide professional air conditioner installation for homes and businesses with precise, hassle-free setup.
              </p>
            </div>
        
            {/* Box 2 */}
            <div className="rounded-md border border-gray-100 shadow-sm p-8 text-center hover:bg-[#020a27] transition-all duration-300 group">
              <a href="#">
                <h4 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-yellow-400 transition-all duration-300">
                  Maintenance & Repair
                </h4>
              </a>
              <p className="text-gray-600 group-hover:text-gray-300 transition-all duration-300 text-[15px] leading-relaxed">
                From routine checkups to emergency repairs, our experts ensure your cooling systems work smoothly year-round.
              </p>
            </div>
        
            {/* Box 3 */}
            <div className="rounded-md border border-gray-100 shadow-sm p-8 text-center hover:bg-[#020a27] transition-all duration-300 group">
              <a href="#">
                <h4 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-yellow-400 transition-all duration-300">
                  AMC & Support
                </h4>
              </a>
              <p className="text-gray-600 group-hover:text-gray-300 transition-all duration-300 text-[15px] leading-relaxed">
                Sign up for our Annual Maintenance Contracts and enjoy uninterrupted cooling with full service support.
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default About