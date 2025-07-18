import { NavLink } from "react-router-dom"
import BrandSlider from "../components/BrandSlider"
import TestimonialSlider from "../components/Testimonials"
import GallerySection from "../components/GallerySection"
import home1 from "../assets/hero.jpg";
import home2 from "../assets/hero2.jpg"
import home3 from "../assets/hero3.jpg";




const Home = () => {
  return (
    <div>
         <section
        id="home"
        className="relative bg-cover bg-center bg-no-repeat h-[90vh] lg:h-screen flex items-center justify-center pt-[130px]"
        style={{ backgroundImage: `url(${home1})` }}
      >
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

        <section id="about" className="py-16 md:py-24 ">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">

              {/* Image Section */}
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
                <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                  <span className="font-semibold text-green-600">TRANS INDIA COOLING SOLUTIONS</span> has been delivering trusted air conditioning services for over 40 years. With showrooms in <span className="text-green-600">Perumbavoor</span>, <span className="text-green-600">Kothamangalam</span>, and <span className="text-green-600">Thankalam</span>, we specialize in top-tier brands including <span className="text-green-600">Mitsubishi</span>, <span className="text-green-600">Toshiba</span>, <span className="text-green-600">General</span>, <span className="text-green-600">Daikin</span>, and <span className="text-green-600">Panasonic</span>. We also specialize in centralized systems such as <span className="text-green-600">VRF</span>, <span className="text-green-600">VRV</span>, <span className="text-green-600">ductable units</span>, <span className="text-green-600">package units</span>, and <span className="text-green-600">AHUs</span>. Our team of skilled professionals ensures each project is handled with care — delivering energy-efficient, long-lasting cooling solutions tailored to your specific needs.
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
                    <span className="text-gray-700">500+ satisfied customers</span>
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

      <GallerySection/>
      
      <section
  className="relative bg-fixed bg-center bg-cover min-h-screen flex items-center justify-center"
  style={{
    backgroundImage: `url(${home1})`,
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 py-16 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
      Our Showrooms
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
      {/* Showroom 1 */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
        <img
          src={home2}
          alt="Perumbavoor Showroom"
          className="w-full h-52 object-cover"
        />
        <div className="px-4 py-3 text-center font-medium text-gray-800">
          Trans India AC, Perumbavoor
        </div>
      </div>

      {/* Showroom 2 */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
        <img
          src={home1}
          alt="Kothamangalam Showroom"
          className="w-full h-52 object-cover"
        />
        <div className="px-4 py-3 text-center font-medium text-gray-800">
          Trans India AC, Kothamangalam
        </div>
      </div>

      {/* Showroom 3 */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
        <img
          src={home3}
          alt="Thankalam Showroom"
          className="w-full h-52 object-cover"
        />
        <div className="px-4 py-3 text-center font-medium text-gray-800">
          Trans India AC, Thankalam
        </div>
      </div>
    </div>
  </div>
</section>




      <TestimonialSlider/>


</div>
  )
}

export default Home