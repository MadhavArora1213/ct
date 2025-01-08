import React, { useState } from 'react';
import { Menu, X, Phone, Search } from 'lucide-react';
import NavLink from './navigation/Navlink';
import CourseDropdown from './navigation/CourseDropdown';
import CtLogo from '../../assets/Images/Navbar/ctlogo.png';
import NaacLogo from '../../assets/Images/Navbar/naaclogo.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-lg fixed w-full top-0 z-[9999]">
        {/* Top bar with contact and social */}
        <div className="bg-[#224E91] text-white px-4 py-1 hidden md:flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:+1234567890" className="flex items-center space-x-1 hover:text-gray-200">
              <Phone size={14} />
              <span>Call Us</span>
            </a>
          </div>
          <div className="flex items-center space-x-4 text-white">
            <a href="#" className="hover:text-gray-200">Get Social</a>
            <div className="h-4 w-[1px] bg-gray-400"></div>
            <a href="#" className="hover:text-gray-200">News</a>
            <div className="h-4 w-[1px] bg-gray-400"></div>
            <a href="#" className="hover:text-gray-200">Events</a>
          </div>
        </div>

        {/* Main navbar */}
        <div className=" mx-auto px-4">
          <div className="flex justify-between items-center h-20 gap-2 lg:gap-8">
            {/* Logo */}
            <div className="flex items-center space-x-2 lg:space-x-4">
              <a href="/" className="flex items-center">
                <img src={CtLogo} alt="CT Logo" className="h-8 sm:h-10 md:h-10 lg:h-14" />
              </a>
              <a href="/" className="flex items-center">
                <img src={NaacLogo} alt="NAAC Logo" className="h-8 sm:h-10 md:h-10 lg:h-14" />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-8 text-sm lg:text-base">
              <NavLink
                href="#"
                text="Course List"
                onClick={(e) => {
                  e.preventDefault();
                  setIsCourseDropdownOpen(true);
                }}
                className="bg-[#ff0000] text-white px-6 py-3 rounded-full text-4xl lg:text-4xl flex items-center justify-center"
              />
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Search size={20} className="text-gray-600" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <MobileNavLink
                  href="#"
                  text="Dream Your Courses"
                  onClick={() => {
                    setIsOpen(false);
                    setIsCourseDropdownOpen(true);
                  }}
                  className="bg-red-500 text-white px-6 py-3 rounded-full text-4xl flex items-center justify-center"
                />
              </div>
            </div>
          )}
        </div>
      </nav>

      <CourseDropdown
        isOpen={isCourseDropdownOpen}
        onClose={() => setIsCourseDropdownOpen(false)}
      />
    </>
  );
};

const MobileNavLink = ({ href, text, onClick, className }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-gray-700 hover:text-[#1a237e] block px-3 py-2 rounded-md text-base font-medium ${className}`}
    >
      {text}
    </a>
  );
};

export default Navbar;
