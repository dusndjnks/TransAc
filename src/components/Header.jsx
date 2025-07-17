import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaDribbble, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md bg-black/30' : 'bg-transparent'
      }`}
    >
          {/* Top Header */}
            <div className="bg-transparent text-sm py-2">
              <div className="max-w-screen-xl mx-auto px-4 pb-3 border-b border-white/20">
                <div className="flex flex-wrap items-center justify-between md:justify-start md:gap-6">
                  {/* Phone */}
                  <div className="text-gray-300">
                    <a href="tel:+9530123654896" className="hover:underline">+953 012 3654 896</a>
                  </div>

                  {/* Email - right on small, next to phone on md+ */}
                  <div className="text-gray-300 md:ml-4 ml-auto">
                    <a href="mailto:transac@gmail.com" className="hover:underline">transac@gmail.com</a>
                  </div>

                  {/* Social icons - hidden on small */}
                  <div className="hidden md:flex gap-4 text-gray-300 ml-auto">
                    <a href="#"><FaFacebook className="hover:text-green-500" /></a>
                    <a href="#"><FaTwitter className="hover:text-green-500" /></a>
                    <a href="#"><FaInstagram className="hover:text-green-500" /></a>
                    <a href="#"><FaDribbble className="hover:text-green-500" /></a>
                  </div>
                </div>
              </div>
            </div>



      {/* Main Navigation */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        ></div>
      )}

      <div className="relative z-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div id="logo" className="flex items-center gap-3">
              <a href="/" className="flex items-center gap-3">
                <img
                  src="https://pngimg.com/d/meta_PNG5.png"
                  alt="Logo"
                  title="Logo"
                  className="h-10"
                />
                <span className="text-xl font-semibold text-white">Trans India Cooling</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:block">
              <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-white font-medium text-sm p-4 md:p-0">
                <li><NavLink to="/" className="hover:text-green-500 block py-2">Home</NavLink></li>
                <li><NavLink to="about" className="hover:text-green-500 block py-2">About</NavLink></li>
                <li><NavLink to="project" className="hover:text-green-500 block py-2">Projects</NavLink></li>
                <li><NavLink to="product" className="hover:text-green-500 block py-2">Products</NavLink></li>
                <li><NavLink to="contact" className="hover:text-green-500 block py-2">Contact</NavLink></li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Mobile Slide Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-[75%] backdrop-blur-md bg-black/20 z-50 transform transition-transform duration-300 md:hidden ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <ul className="flex flex-col space-y-6 text-white font-medium text-base p-6 pt-24">
            <li><NavLink to="/" onClick={toggleMenu} className="hover:text-green-500">Home</NavLink></li>
            <li><NavLink to="about" onClick={toggleMenu} className="hover:text-green-500">About</NavLink></li>
            <li><NavLink to="project" onClick={toggleMenu} className="hover:text-green-500">Projects</NavLink></li>
            <li><NavLink to="product" onClick={toggleMenu} className="hover:text-green-500">Products</NavLink></li>
            <li><NavLink to="contact" onClick={toggleMenu} className="hover:text-green-500">Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
