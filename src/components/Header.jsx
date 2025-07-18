import { FaBars, FaTimes, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/trans_india_ac_plaza_compressed__1__page-0001-removebg-preview.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
  ];

  return (
    <header className={`fixed w-full z-50 ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"}`}>
      
      {/* Top Header - Always visible */}
      <div className={`hidden md:block py-2 ${isScrolled ? "bg-white/90" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="tel:+9530123654896" className={`flex items-center text-sm ${isScrolled ? "text-gray-600" : "text-white"}`}>
              <FaPhone className="mr-2" />
              +953 012 3654 896
            </a>
            <a href="mailto:transac@gmail.com" className={`flex items-center text-sm ${isScrolled ? "text-gray-600" : "text-white"}`}>
              <FaEnvelope className="mr-2" />
              transac@gmail.com
            </a>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className={`${isScrolled ? "text-gray-600" : "text-white"} hover:opacity-80`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="Trans India Cooling Logo" className="h-10" />
            <span className={`ml-3 text-xl font-medium ${isScrolled ? "text-gray-900" : "text-white"}`}>
              Trans India Cooling
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `
                  px-2 py-1 text-sm font-medium transition-colors
                  ${isActive ? 
                    (isScrolled ? "text-gray-900 border-b-2 border-gray-900" : "text-white border-b-2 border-white") : 
                    (isScrolled ? "text-gray-600 hover:text-gray-900" : "text-white hover:text-gray-200")}
                `}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? "text-gray-900" : "text-white"}`}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => `
                  block px-3 py-3 rounded-lg text-base
                  ${isActive ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-50"}
                `}
              >
                {link.label}
              </NavLink>
            ))}
            
            {/* Contact in mobile menu */}
            <div className="pt-4 border-t border-gray-100 mt-2">
              <a href="tel:+9530123654896" className="flex items-center px-3 py-3 text-gray-700">
                <FaPhone className="mr-3" />
                +953 012 3654 896
              </a>
              <a href="mailto:transac@gmail.com" className="flex items-center px-3 py-3 text-gray-700">
                <FaEnvelope className="mr-3" />
                transac@gmail.com
              </a>
              <div className="flex space-x-4 px-3 py-3">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.url} className="text-gray-700 hover:text-gray-900">
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