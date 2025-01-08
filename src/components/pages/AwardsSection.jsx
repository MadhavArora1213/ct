import React from "react";
import './AS.css';
import naac from "../../assets/Images/naac.jpg";
import two from "../../img/2.jpg";
import third from '../../img/3.jpg';

const awardsData = [
  {
    year: "2022",
    achievements: [
      "Received the prestigious Sir Viswesvaraya Award for ‘Best Corporate Entity’ at TechKnow '22",
      "Won Sonatype Partner Award",
    ],
    color: "bg-blue-500",
    image: naac, // Replace with actual image URL 
  },
  {
    year: "2021",
    achievements: [
      "RETINA360 wins 'Digital Technology of the Year: Big Data, IT & Analytics' Award at IWEF 2021",
      "HR team wins ‘Best Business Communication’ Award at Corporate Communication Excellence Awards",
    ],
    color: "bg-orange-500",
    image: two, // Replace with actual image URL
  },
  {
    year: "2020",
    achievements: [
      "FuelTrans Bags CII - SCALE Awards",
      "rt360 wins ETBFSI Excellence Awards",
      "retina360 wins Digital Technology of the Year at IWEF",
    ],
    color: "bg-green-500",
    image: third, // Replace with actual image URL
  },
];

const AwardsSection = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-r from-blue-50 to-blue-100">
      {/* Background Design */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-300 to-purple-400 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-green-300 to-yellow-400 opacity-20 rounded-full blur-3xl"></div>
      </div>

      {/* Section Title */}
      <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold z-10 relative text-center mb-8 text-black">
        <span className="text-[#284587]">Awards</span> and Achievements
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

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-300 h-full z-0"></div>

        {/* Awards List */}
        {awardsData.map((award, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center mb-16 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
          >
            {/* Year Circle */}
            <div className="relative z-10 flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full shadow-lg font-bold text-white text-lg md:text-xl bg-[#284587] mb-4 md:mb-0">
              {award.year}
            </div>

            {/* Image */}
            <div className="w-full md:w-1/3 p-4">
              <img
                src={award.image}
                alt={`Award ${award.year}`}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Achievement Box */}
            <div className="relative w-full md:w-2/3 p-6 rounded-lg shadow-lg bg-white">
              <ul className="space-y-2">
                {award.achievements.map((achievement, idx) => (
                  <li
                    key={idx}
                    className="text-gray-800 text-sm md:text-lg leading-6 font-medium flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-[#284587] rounded-full"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            {/* Arrow */}
            <div className={`absolute hidden ${index % 2 === 0 ? "left-[-20px] md:left-[-40px]" : "right-[-20px] md:right-[-40px]"} top-1/2 transform -translate-y-1/2`}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 4L15 12L8 20" stroke="#185da0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;