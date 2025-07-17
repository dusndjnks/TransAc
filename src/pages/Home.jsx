import { NavLink } from "react-router-dom"
import BrandSlider from "../components/BrandSlider"


const Home = () => {
  return (
    <div>
      <section id="home" className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center pt-[130px]" style={{ backgroundImage: `url("https://images.pexels.com/photos/1029243/pexels-photo-1029243.jpeg")` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-8xl mx-auto px-6">
          <div className="flex flex-col items-center justify-center text-center">
           <div className="w-full  text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Efficient Cooling Solutions <br className="hidden sm:block" />
              for Every Home & Office
            </h1>
            <p className="text-white text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8">
              We provide top-notch air conditioning installation, repair, and maintenance services. Reliable, fast, and energy-efficient cooling you can count on.
            </p>
          </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section - Replace with your actual image */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-md h-80 md:h-96 bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Our team at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-green-600 text-white px-6 py-3">
                <span className="text-2xl font-bold">40+</span>
                <p className="text-sm">Years of Experience</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About Our Company
            </h2>
            
            <p className="text-gray-600 mb-4">
              Since 1983, we've been providing top-quality cooling solutions across India, 
              building lasting relationships with our clients through exceptional service 
              and innovative technology.Our team of certified professionals brings unparalleled expertise to every 
              project, ensuring energy-efficient and reliable solutions tailored to your 
              specific needs.
            </p>
                                      
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">40+ years of trusted service</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">5000+ satisfied customers</span>
              </div>

            </div>
            
            <NavLink 
              to="/about" 
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-md transition duration-300 shadow-md hover:shadow-lg"
            >
              Read More About Us
            </NavLink>
          </div>
        </div>
      </div>
    </section>

       <BrandSlider/>
      
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

export default Home