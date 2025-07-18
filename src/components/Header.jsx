import { FaBars, FaTimes, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaDribbble } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/trans_india_ac_plaza_compressed__1__page-0001-removebg-preview.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
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
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaDribbble />, url: "#" },
  ];

  return (
    <header className={`fixed w-full z-50 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      {/* Top Header - Only shows when not scrolled */}
      {!isScrolled && (
        <div className="hidden md:block py-2 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 border-b border-white/20 pb-2">
            <div className="flex items-center justify-between gap-6 text-white">
              <div>
                <a href="tel:+9530123654896" className="flex items-center hover:text-blue-300">
                  <FaPhone className="mr-2" />
                  +953 012 3654 896
                </a>
              </div>
              <div>
                <a href="mailto:transac@gmail.com" className="flex items-center hover:text-blue-300">
                  <FaEnvelope className="mr-2" />
                  transac@gmail.com
                </a>
              </div>
              <div className="flex gap-4 ml-auto">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="text-white hover:text-blue-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-10" />
            <span className={`ml-2 text-lg font-medium ${isScrolled ? "text-gray-800" : "text-white"}`}>
              Trans India Cooling
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `${isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-300"} ${
                    isActive ? (isScrolled ? "text-blue-600 font-bold" : "text-blue-300 font-bold") : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden focus:outline-none ${isScrolled ? "text-gray-700" : "text-white"}`}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${isScrolled ? "bg-white" : "bg-gray-900"}`}>
          <div className="px-4 pt-2 pb-4 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-lg ${
                    isActive
                      ? isScrolled 
                        ? "bg-blue-50 text-blue-600 font-bold" 
                        : "bg-blue-900/30 text-blue-300 font-bold"
                      : isScrolled 
                        ? "text-gray-700 hover:bg-gray-100" 
                        : "text-white hover:bg-gray-800"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Contact in mobile menu - only shown when scrolled (since top header is hidden) */}
            {isScrolled && (
              <div className={`pt-4 border-t ${isScrolled ? "border-gray-200" : "border-gray-700"} mt-2`}>
                <a
                  href="tel:+9530123654896"
                  className={`flex items-center px-3 py-2 ${isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-300"}`}
                >
                  <FaPhone className="mr-2" />
                  +953 012 3654 896
                </a>
                <a
                  href="mailto:transac@gmail.com"
                  className={`flex items-center px-3 py-2 ${isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-300"}`}
                >
                  <FaEnvelope className="mr-2" />
                  transac@gmail.com
                </a>
                <div className="flex gap-4 pt-3 pl-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`${isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-300"}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;