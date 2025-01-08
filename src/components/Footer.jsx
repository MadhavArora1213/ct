import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Logo from "../assets/Images/Navbar/ctlogo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#bcbbbb] via-[#027FC3] to-[#2B4184] text-white py-8 px-4 sm:px-8 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        {/* Left Section */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <img
            src={Logo}
            alt="CT Logo"
            className="mb-4 w-24 sm:w-32"
          />
          <p className="text-xs sm:text-sm leading-relaxed">
            CT Group of Institutions is renowned for its exceptional academic programs, providing top-tier education in both undergraduate and postgraduate fields. Located in Jalandhar, Punjab, the college is committed to fostering a culture of innovation and excellence.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-xs sm:text-sm mb-2">Urban Estate Phase 2, Pratappura Road, Near Lambra, Shahpur, Jalandhar, Punjab 144020</p>
          <p className="text-xs sm:text-sm mb-2">
            📞 1800-137-2227, +91-181-5055127, +91-181-5055128, +91-181-2995967
          </p>
          <p className="text-xs sm:text-sm mb-4">✉️ info@ctgroup.in</p>
          <div className="flex space-x-2 sm:space-x-4">
            <a href="#" className="p-2 bg-white text-purple-900 rounded-full hover:bg-purple-700 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-white text-purple-900 rounded-full hover:bg-purple-700 hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-white text-purple-900 rounded-full hover:bg-purple-700 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-white text-purple-900 rounded-full hover:bg-purple-700 hover:text-white">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-2 bg-white text-purple-900 rounded-full hover:bg-purple-700 hover:text-white">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white mt-8 pt-4 text-center text-xs sm:text-sm">
        COPYRIGHT©2024 CT Group. All rights Reserved
      </div>
    </footer>
  );
};

export default Footer;