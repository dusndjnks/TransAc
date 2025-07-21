import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import bluestar from "../assets/products/bluestarmain.webp";

const Product = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-bg-dark text-white py-32 md:py-48 lg:py-40 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-display text-primary">
          Our Products
        </h1>
        <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
      </section>

      {/* Title Below Hero */}
      <div className="py-20 text-center bg-bg-light text-white">
        <h2 className="text-4xl font-bold font-display text-primary">
          Trusted Product Brands
        </h2>
        <p className="text-lg mt-4 text-gray-900 max-w-2xl mx-auto px-4">
          Explore top air conditioning brands we proudly offer, trusted for quality and performance.
        </p>
      </div>

      {/* Brands Section */}
      <section className="bg-bg-light pb-5 md:pb-16 px-6 md:px-20 lg:px-40">

        {/* Mitsubishi Electric */}
        <div className="bg-white shadow-md rounded-2xl overflow-hidden mb-20 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 sm:gap-10 items-center">
            <img
              src="http://s3-ap-southeast-1.amazonaws.com/hnsgsfp/9/images/detailed/9/Mitsubishi_MS-HK10VA.jpg"
              alt="Mitsubishi Electric"
              className="h-28 lg:my-10 mt-4 md:ml-20 ml-16 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold font-heading text-text-base mb-4">
                Mitsubishi Electric
              </h3>
              <p className="text-text-light text-base mb-6">
                Renowned for energy efficiency and cutting-edge Japanese engineering, Mitsubishi wall-mounted ACs deliver superior cooling with minimal noise.
              </p>
              <a
                href="/brands/mitsubishi"
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                Check Products{" "}
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
              </a>
            </div>
          </div>
        </div>

        {/* General */}
        <div className="bg-white shadow-md rounded-2xl overflow-hidden mb-20 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img
              src="https://www.general-hvac.com/shared/in/img-gcin-split-wall-asgg18-36-ceta-b-01.png"
              alt="General"
              className="w-full h-72 ml-10 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold font-heading text-text-base mb-4">
                General
              </h3>
              <p className="text-text-light text-base mb-6">
                General ACs are built to perform in extreme temperatures, offering powerful cooling and durability suited for both residential and commercial spaces.
              </p>
              <a
                href="/brands/general"
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                Check Products{" "}
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
              </a>
            </div>
          </div>
        </div>

        {/* Daikin */}
        <div className="bg-white shadow-md rounded-2xl overflow-hidden mb-20 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img
              src="https://m.media-amazon.com/images/I/41zljqtpKgL._SX679_.jpg"
              alt="Daikin"
              className="w-full h-80 ml-10  object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold font-heading text-text-base mb-4">
                Daikin
              </h3>
              <p className="text-text-light text-base mb-6">
                Daikin's wall-mounted ACs bring advanced inverter technology and quiet operation, making them a top choice for modern homes and offices.
              </p>
              <a
                href="/brands/daikin"
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                Check Products{" "}
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
              </a>
            </div>
          </div>
        </div>

        {/* Toshiba */}
        <div className="bg-white shadow-md rounded-2xl overflow-hidden mb-20 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img
              src="https://www.toshibaac.in/images/products/splits/heating-cooling.png" // Replace with actual Toshiba wall-mounted AC image
              alt="Toshiba"
              className="w-full h-72 ml-8 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold font-heading text-text-base mb-4">
                Toshiba
              </h3>
              <p className="text-text-light text-base mb-6">
                With a legacy of innovation, Toshiba ACs provide smart features, high energy ratings, and elegant designs for comfortable living.
              </p>
              <a
                href="/brands/toshiba"
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                Check Products{" "}
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
              </a>
            </div>
          </div>
        </div>

        {/* Blue Star */}
        <div className="bg-white shadow-md rounded-2xl overflow-hidden mb-20 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img
              src={bluestar}
              alt="Blue Star"
              className="w-full h-80 ml-10 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold font-heading text-text-base mb-4">
                Blue Star
              </h3>
              <p className="text-text-light text-base mb-6">
                A trusted Indian brand, Blue Star wall-mounted ACs offer reliable cooling, robust design, and great value for money.
              </p>
              <a
                href="/brands/bluestar"
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                Check Products{" "}
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
