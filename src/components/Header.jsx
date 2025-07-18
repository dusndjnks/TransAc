import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/trans_india_ac_plaza_compressed__1__page-0001-removebg-preview.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-black/30" : "bg-transparent"
      }`}
    >
      {/* Top Header (visible only in md+) */}
      <div className="bg-transparent text-sm py-2 hidden md:block">
        <div className="max-w-screen-xl mx-auto px-4 border-b border-white/20 pb-2">
          <div className="flex items-center justify-between gap-6 text-gray-300">
            <div>
              <a href="tel:+9530123654896" className="hover:underline">
                +953 012 3654 896
              </a>
            </div>
            <div>
              <a href="mailto:transac@gmail.com" className="hover:underline">
                transac@gmail.com
              </a>
            </div>
            <div className="flex gap-4 ml-auto">
              <a href="#"><FaFacebook className="hover:text-green-500" /></a>
              <a href="#"><FaTwitter className="hover:text-green-500" /></a>
              <a href="#"><FaInstagram className="hover:text-green-500" /></a>
              <a href="#"><FaDribbble className="hover:text-green-500" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="relative z-50">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-12">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center gap-1">
                <img src={logo} alt="Logo" className="h-12 md:h-16" />
                <span className="text-lg md:text-xl font-semibold text-white">
                  Trans India Cooling
                </span>
              </a>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
              </button>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6 text-white font-medium text-sm">
                <li>
                  <NavLink to="/" className="hover:text-green-500">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="hover:text-green-500">About</NavLink>
                </li>
                <li>
                  <NavLink to="/project" className="hover:text-green-500">Projects</NavLink>
                </li>
                <li>
                  <NavLink to="/product" className="hover:text-green-500">Products</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Mobile Slide Menu */}
        <div
          className={`fixed top-0 left-0 h-screen w-[75%] bg-black/95 z-50 transform transition-transform duration-300 md:hidden ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col space-y-6 text-white font-medium text-base p-6 pt-20">
            <li>
              <NavLink to="/" onClick={toggleMenu} className="hover:text-green-500">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={toggleMenu} className="hover:text-green-500">About</NavLink>
            </li>
            <li>
              <NavLink to="/project" onClick={toggleMenu} className="hover:text-green-500">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/product" onClick={toggleMenu} className="hover:text-green-500">Products</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
