import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* উপরের অংশ */}
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-10">
        <div className="flex flex-wrap">
          {/* 1st Column */}
          <div className="w-1/2 md:w-1/4 mb-6 md:mb-0">
            <div className="flex items-center font-bold sm:text-xl mb-2">
              <p className="bg-secondary text-white px-1 py-[0.20rem] sm:py-0 border-2 border-white border-r-0">
                NK
              </p>
              <p className="border-2 border-white px-1 py-[0.20rem] sm:py-0 border-l-0">
                Traders<span className="text-secondary">.</span>
              </p>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm md:text-base">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about-us" className="hover:underline">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* 2nd Column */}
          <div className="w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-sm sm:text-base md:text-lg font-semibold mb-4">
              USEFULL LINKS
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm md:text-base">
              <li>
                <a href="#jdm" className="hover:underline">
                  JDM
                </a>
              </li>
              <li>
                <a href="#weekly-buzz" className="hover:underline">
                  Weekly Buzz
                </a>
              </li>
              <li>
                <a href="#exclusive-in-stock" className="hover:underline">
                  Exclusive in Stock
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd Column */}
          <div className="w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-sm sm:text-base md:text-lg font-semibold mb-4">
              EUROPEAN
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm md:text-base">
              <li>
                <a href="#european-cars" className="hover:underline">
                  European Cars
                </a>
              </li>
            </ul>
          </div>

          {/* 4th Column */}
          <div className="w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-sm sm:text-base md:text-lg font-semibold mb-4">
              KEEP IN TOUCH
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm md:text-base">
              <li>
                <a href="#contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>

            {/* সোশ্যাল আইকন সেকশন */}
            <div className="flex items-center mt-4 space-x-4">
              <a
                href="#facebook"
                className="text-gray-300 hover:text-white transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#instagram"
                className="text-gray-300 hover:text-white transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#what'sapp"
                className="text-gray-300 hover:text-white transition"
              >
                <BsWhatsapp />
              </a>
              <a
                href="#youtube"
                className="text-gray-300 hover:text-white transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* নিচের অংশ: কপিরাইট বার */}
      <div className="border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm md:text-base">
          <p className="mb-2 sm:mb-0">
            © Copyright 2025. All Rights Reserved |
            <span className="text-red-500 ml-1">NK-Traders</span>
          </p>
          <p className="text-gray-400">
            Powered by <span className="text-white">NK-Traders</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
