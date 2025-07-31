import {
  FaBars,
  FaTimes,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/project", label: "Projects" },
    { path: "/product", label: "Products" },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: "#" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/transindia-cooling-solutions-a1b442345/?originalSubdomain=in" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/trans_india_cooling_solution?igsh=MTQ4bWN4Mjg5b3draA==" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#fff5eb] shadow-sm" : "bg-transparent"
      }`}
    >
      {/* Top Header - Hidden on Scroll */}
      {!isScrolled && (
        <div className="hidden md:block py-2 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <div className="flex space-x-6">
              <a
                href="tel:+7558801625"
                className="flex items-center text-sm text-white font-sans"
              >
                <FaPhone className="mr-2" />
                +91 7558801625 
              </a>
               <a
                href="tel:+9447082873"
                className="flex items-center text-sm text-white font-sans"
              >
                <FaPhone className="mr-2" />
                +91 9447082873 
              </a>  
              <a
                href="mailto:transindiacooling@gmail.com"
                className="flex items-center text-sm text-white font-sans"
              >
                <FaEnvelope className="mr-2" />
                transindiacooling@gmail.com
              </a>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-white hover:opacity-80"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* HR between top header and nav */}
      {!isScrolled && (
        <hr className="border-t border-white/30 md:block hidden max-w-7xl mx-auto px-4   " />
      )}

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="Trans India Cooling Logo" className="h-8 lg:h-10 pr-3" />
            <span
              className={`text-xl font-semibold ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              TRANS INDIA
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 font-sans">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `
                  px-2 py-1 text-sm font-medium transition-colors
                  ${
                    isActive
                      ? isScrolled
                        ? "text-gray-900 border-b-2 border-primary"
                        : "text-white border-b-2 border-white"
                      : isScrolled
                      ? "text-gray-600 hover:text-primary"
                      : "text-white hover:text-gray-200"
                  }
                `}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-3 space-y-2 font-sans">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => `
                  block px-3 py-3 rounded-lg text-base
                  ${
                    isActive
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700 hover:bg-gray-50"
                  }
                `}
              >
                {link.label}
              </NavLink>
            ))}

            {/* Contact in mobile menu */}
            <div className="pt-4 border-t border-gray-100 mt-2">
              <a
                href="tel:+91 7558801625"
                className="flex items-center px-3 py-3 text-gray-700"
              >
                <FaPhone className="mr-3" />
                +91 7558801625
              </a>
              <a
                href="tel:+91 9447082873 "
                className="flex items-center px-3 py-3 text-gray-700"
              >
                <FaPhone className="mr-3" />
                +91 9447082873 
              </a>
              <a
                href="mailto:transindiacooling@gmail.com"
                className="flex items-center px-3 py-3 text-gray-700"
              >
                <FaEnvelope className="mr-3" />
                transindiacooling@gmail.com
              </a>
              <div className="flex space-x-4 px-3 py-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="text-gray-700 hover:text-gray-900"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
