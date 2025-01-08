import React from "react";
import {
  FaUser,
  FaPhone,
  FaLock,
  FaMapMarkerAlt,
  FaUniversity,
  FaBook,
  FaClipboardList,
} from "react-icons/fa";
import NaacLogo from "../assets/Images/Navbar/naaclogo.webp";
import ct1 from "../assets/Images/ct1.jpeg";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen mt-24"
      style={{ backgroundImage: `url('src/assets/Images/ct1.jpeg')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 pb-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="max-w-2xl text-white p-4">
            <h1 className="text-5xl font-bold mb-6 text-center md:text-left">
              Choose a Place Where
              <span className="block text-yellow-400 mt-2">
                Educational Excellence
              </span>
              Surrounds You!
            </h1>

            <div className="space-y-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-[#bcbbbb]  to-[#027FC3] p-6 rounded-lg flex items-center justify-center flex-col text-center">
                <img src={NaacLogo} alt="NAAC A Logo" className="w-12 h-12" />
                <h3 className="text-2xl font-bold text-white">NAAC A</h3>
                <p className="text-white">Accredited Institution</p>
              </div>

              <div className="bg-gradient-to-r from-[#bcbbbb]  to-[#027FC3] p-6 rounded-lg flex items-center justify-center flex-col text-center">
                <h3 className="text-2xl font-bold text-white">Top 50</h3>
                <p className="text-white">in Innovation Rankings</p>
              </div>

              <div className="bg-gradient-to-r from-[#bcbbbb]  to-[#027FC3] p-6 rounded-lg flex items-center justify-center flex-col text-center">
                <h3 className="text-2xl font-bold text-white">#150</h3>
                <p className="text-white">in University Rankings</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Login Form) */}
        <div className="flex items-center justify-center min-h-screen  mt-8 md:mt-0">
          <div
            className="w-[450px] h-[450px] p-8 rounded-lg shadow-lg bg-white"
            style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}
          >
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
              Enquire Now
            </h2>
            <form className="grid grid-cols-2 gap-4">
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-10 p-3 bg-white bg-opacity-50 rounded-lg shadow-inner focus:outline-none text-gray-400"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                />
              </div>

              <div className="relative">
                <FaPhone className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full pl-10 p-3 bg-white bg-opacity-50 rounded-lg shadow-inner focus:outline-none text-gray-400"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                />
              </div>

              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-10 p-3 bg-white bg-opacity-50 rounded-lg shadow-inner focus:outline-none text-gray-400"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                />
              </div>

              <div className="relative">
                <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
                <select
                  className="w-full pl-10 p-3 bg-white bg-opacity-50 rounded-lg shadow-inner focus:outline-none text-gray-400"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <option value="">State</option>
                  <option value="state1">State 1</option>
                  <option value="state2">State 2</option>
                </select>
              </div>

              <div className="relative">
                <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
                <select
                  className="w-full pl-10 p-3 bg-white bg-opacity-50 rounded-lg shadow-inner focus:outline-none text-gray-400"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <option value="">City</option>
                  <option value="city1">City 1</option>
                  <option value="city2">City 2</option>
                </select>
              </div>

              <div className="relative">
                <FaUniversity className="absolute left-3 top-3 text-gray-400" />
                <select
                  className="w-full pl-10 p-3 bg-white bg-opacity-50 rounded-lg shadow-inner focus:outline-none text-gray-400"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <option value="">Campus</option>
                  <option value="campus1">Campus 1</option>
                  <option value="campus2">Campus 2</option>
                </select>
              </div>

              <div className="relative">
                <FaBook className="absolute left-3 top-3 text-gray-400" />
                <select
                  className="w-full pl-10 p-3 bg-white bg-opacity-50 rounded-lg shadow-inner focus:outline-none text-gray-400"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <option value="">Course</option>
                  <option value="course1">Course 1</option>
                  <option value="course2">Course 2</option>
                </select>
              </div>

              <div className="relative">
                <FaClipboardList className="absolute left-3 top-3 text-gray-400" />
                <select
                  className="w-full pl-10 p-3 bg-white bg-opacity-50 rounded-lg shadow-inner focus:outline-none text-gray-400"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <option value="">Specification</option>
                  <option value="spec1">Specification 1</option>
                  <option value="spec2">Specification 2</option>
                </select>
              </div>

              <button className="group relative inline-flex h-12 w-96 items-center justify-center overflow-hidden rounded-md border-2 dark:border-[#656fe2] border-[#185da0] font-medium">
                <div className="inline-flex h-12 translate-y-0 items-center justify-center bg-gradient-to-r dark:from-[#185da0] dark:to-[#185da0] from-[#fdfdfd] to-[#fcfcfc] px-6 dark:text-white text-black transition group-hover:-translate-y-[150%]">
                  Submit
                </div>
                <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center bg-[#185da0] dark:bg-[#656fe2] px-6 text-neutral-50 transition duration-300 group-hover:translate-y-0">
                  Submit
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;