import logo from "../assets/LOGO.jpg";

const Footer = () => {
  return (
  <footer className="w-full bg-gradient-to-b from-orange-50 to-white py-12 text-gray-700">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
      {/* About Section */}
      <div className="flex flex-col items-center md:items-start">
        <div className="flex items-center mb-4">
          <img 
            src={logo} 
            alt="Trans India Cooling Logo" 
            className="h-10 "
          />
          <h2 className="text-xl font-bold text-gray-800">
            Trans India Cooling Solutions
          </h2>
        </div>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed text-center md:text-left">
          Trusted HVAC experts since 40 Years. We provide AC installation, service & maintenance for homes and businesses.
        </p>
       <div className="flex space-x-4 mt-auto">
          <a
            href="https://www.facebook.com"
            className="text-primary-500 hover:text-primary-600 transition-colors"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
            </svg>
          </a>
          
          <a
            href="https://www.instagram.com/trans_india_cooling_solution?igsh=MTQ4bWN4Mjg5b3draA=="
            className="text-primary-500 hover:text-primary-600 transition-colors"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          
          <a
            href="https://www.linkedin.com/in/transindia-cooling-solutions-a1b442345/?originalSubdomain=in"
            className="text-primary-500 hover:text-primary-600 transition-colors"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.5 20h-3v-11h3v11zm-1.5-12.3c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75c.96 0 1.75.79 1.75 1.75s-.79 1.75-1.75 1.75zm13 12.3h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-11h3v1.5c.6-.9 1.6-1.5 2.7-1.5 2 0 3.3 1.6 3.3 3.7v7.3z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Quick Contact */}
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          24/7 Emergency Service
        </h2>
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-center md:justify-start">
            <div className="bg-primary-100 p-2 rounded-full mr-3">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <div className="flex flex-col space-y-3">
              <a href="tel:+917558801625" className="hover:text-primary-600 transition-colors">
              +91 7558801625
            </a>
            <a href="tel:+9194470828735" className="hover:text-primary-600 transition-colors">
              +91 9447082873
            </a>
            <a href="tel:+916238311805" className="hover:text-primary-600 transition-colors">
              +91 6238311805

            </a>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <div className="bg-primary-100 p-2 rounded-full mr-3">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <a href="mailto:transindiacooling@gmail.com" className="hover:text-primary-600 transition-colors">
              transindiacooling@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <a href="https://maps.app.goo.gl/arFq4A2M4yk8gbxv6" className="flex items-center text-sm text-gray-600 hover:text-primary-600 transition-colors">
              <div className="bg-primary-100 p-2 rounded-full mr-3">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <span>Kala Nagar, Kothamangalam, Kerala</span>
            </a>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Our Services
        </h2>
        <ul className="space-y-2 text-gray-600 text-sm">
          <li className="flex items-center">
            <svg className="w-4 h-4 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            Residential AC Repair
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            Commercial Installation
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            Maintenance Plans
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            Emergency Services
          </li>
        </ul>
      </div>
    </div>

    {/* Accreditation */}
    <div className="mt-12 pt-6 border-t border-orange-200 text-center text-sm text-gray-500">
      <div>
        <h1>Developed by DiveGrid*</h1>
      </div>
      <p className="mt-4">© {new Date().getFullYear()} Trans India Cooling Solutions. All rights reserved.</p>
    </div>
  </div>
</footer>
  );
};

export default Footer;
