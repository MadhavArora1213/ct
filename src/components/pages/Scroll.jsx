"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import "../../App.css";
import gsap from "gsap";
import FeaturesPage from "../FeaturesPage";
import audiImage from '../../assets/Images/audi.jpg';

export default function Scroll() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main
      ref={container}
      className="relative min-h-[200vh] overflow-hidden"
      style={{ backgroundImage: `url(${audiImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  );
}

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  const boxes = [
    {
      title: "Innovation",
      content: "Discover innovative approaches to learning and growth.",
      gradient: "from-gray-700 via-gray-900 to-black",
    },
    {
      title: "Community",
      content: "Build lifelong connections through collaborative efforts.",
      gradient: "from-gray-700 via-gray-900 to-black",
    },
    {
      title: "Achievements",
      content: "Celebrating milestones of excellence in education.",
      gradient: "from-gray-700 via-gray-900 to-black",
    },
    {
      title: "Innovation",
      content: "Discover innovative approaches to learning and growth.",
      gradient: "from-gray-700 via-gray-900 to-black",
    },
    {
      title: "Community",
      content: "Build lifelong connections through collaborative efforts.",
      gradient: "from-gray-700 via-gray-900 to-black",
    },
    {
      title: "Achievements",
      content: "Celebrating milestones of excellence in education.",
      gradient: "from-gray-700 via-gray-900 to-black",
    },
  ];

  return (
    <motion.section
      style={{ scale, rotate }}
      className="sticky font-semibold top-0 min-h-screen  text-white flex flex-col items-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${audiImage})` }}
      ></div>
      <div className="relative py-16 px-8 w-full max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-12">
          About Us
        </h1>
        <p className="text-bold text-3xl mb-7">Why Study at CT Group?</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {boxes.map((box, index) => (
            <motion.div
              key={index}
              className={`group relative rounded-lg bg-gradient-to-br ${box.gradient} p-6 shadow-lg backdrop-blur-lg overflow-hidden transition-transform duration-700 transform hover:scale-105 hover:shadow-2xl`}
            >
              <div className="absolute inset-0 bg-[#224E91]/30 group-hover:bg-black/20 transition-colors duration-700"></div>
              <div className="relative z-10 text-center text-white">
                <h2 className="text-2xl font-bold mb-4 group-hover:translate-y-[-5px] transition-transform duration-500">
                  {box.title}
                </h2>
                <p className="opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  {box.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className="relative min-h-screen bg-gradient-to-t from-[#bcbbbb] via-[#027FC3] to-[#2B4184] text-white"
    >
      <FeaturesPage />
    </motion.section>
  );
};