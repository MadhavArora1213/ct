import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

// Import all logos
import logo1 from '../../assets/Images/logo1.jpg';
import logo2 from '../../assets/Images/logo 2.jpg';
import logo3 from '../../assets/Images/logo 3.jpg';
import logo4 from '../../assets/Images/logo 4.jpg';
import logo5 from '../../assets/Images/logo 5.jpg';
import logo6 from '../../assets/Images/logo 6.jpg';
import logo7 from '../../assets/Images/logo 7.jpg';
import logo8 from '../../assets/Images/logo 8.jpg';
import logo9 from '../../assets/Images/logo 9.jpg';
import logo10 from '../../assets/Images/logo 10.jpg';
import logo11 from '../../assets/Images/logo 11.jpg';
import logo12 from '../../assets/Images/logo 12.jpg';
import logo13 from '../../assets/Images/logo 13.jpg';
import logo14 from '../../assets/Images/logo 14.jpg';
import logo15 from '../../assets/Images/logo 15.jpg';
import logo16 from '../../assets/Images/logo 16.jpg';
import logo17 from '../../assets/Images/logo 17.jpg';
import logo18 from '../../assets/Images/logo18.jpg';
import logo19 from '../../assets/Images/logo19.jpg';
import logo20 from '../../assets/Images/logo 20.jpg';
import logo21 from '../../assets/Images/logo 21.jpg';
import logo22 from '../../assets/Images/logo 22.jpg';
import logo23 from '../../assets/Images/logo 23.jpg';
import logo24 from '../../assets/Images/logo24.jpg';

const LogoSlider = () => {
  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12,
    logo13, logo14, logo15, logo16, logo17, logo18,
    logo19, logo20, logo21, logo22, logo23, logo24,
  ];

  // Group logos into 4 columns
  const groupedLogos = [
    logos.filter((_, index) => index % 4 === 0), // Column 1
    logos.filter((_, index) => index % 4 === 1), // Column 2
    logos.filter((_, index) => index % 4 === 2), // Column 3
    logos.filter((_, index) => index % 4 === 3), // Column 4
  ];

  const slideOptions = (delay) => ({
    type: 'loop',
    autoplay: true,
    interval: 2000,
    direction: 'ttb',
    height: '400px',
    perPage: 1,
    pagination: false,
    arrows: false,
    speed: 1000,
    easing: 'linear',
    autoplayStart: delay,
  });

  return (
    <section className="text-black bg-white flex flex-col px-4 md:px-24 lg:px-24">
      <div className="pt-20 mx-4 md:mx-8 lg:mx-20">
        <div className="relative flex justify-center items-center h-28">
          <h1 className="text-3xl sm:text-6xl font-bold z-10 relative">
            <span className="text-[#284587]">Recruiters </span>at CT Group
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1"
              width="300"
              height="30"
              viewBox="0 0 300 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,25 C75,-25 225,75 300,25"
                stroke="#185da0"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M0,35 C75,-15 225,85 300,35"
                stroke="#185da0"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </h1>
        </div>
        <p className="text-center mt-4 md:mt-6 mb-8">
          We'll help you get hired. Our team will work with you throughout the
          program and after graduation to help you embellish your portfolio,
          practice interviewing, and land a job that enhances your skills and
          accelerates your growth.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 bg-white items-center justify-items-center px-4 md:px-8 lg:px-12">
        {groupedLogos.map((column, colIndex) => (
          <Splide
            key={colIndex}
            options={slideOptions(colIndex % 2 === 0 ? 0 : 2000)}
            className="w-full h-full"
          >
            {column.map((logo, logoIndex) => (
              <SplideSlide key={logoIndex}>
                <div className="img_box flex justify-center items-center">
                  <img
                    src={logo}
                    alt={`Logo ${logoIndex + 1}`}
                    className="w-24 h-18 md:w-36 md:h-27 lg:w-48 lg:h-36 xl:w-56 xl:h-42"
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        ))}
      </div>
    </section>
  );
};

export default LogoSlider;