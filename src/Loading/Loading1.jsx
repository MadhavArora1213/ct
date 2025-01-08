import React, { useEffect, useState } from "react";
import gsap from "gsap";
import img01 from "../assets/Images/01.jpg";
import img02 from "../assets/Images/02.jpg";
import img03 from "../assets/Images/03.jpg";
import img04 from "../assets/Images/04.jpg";
import img05 from "../assets/Images/05.jpg";

const Intro = ({ onFinish }) => {
  const images = [img01, img02, img03, img04, img05];
  const [currentImage, setCurrentImage] = useState(img01);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(images[randomNumber(0, images.length - 1)]);
    }, 300);

    return () => clearInterval(interval);
  }, [images]);

  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  useEffect(() => {
    const introTl = gsap.timeline();
    introTl
      .to("#introBlock1", {
        y: "-100%",
        delay: 1,
        ease: "power4.easeInOut",
        duration: 1.5,
      })
      .to("#introBlock2", {
        y: 0,
        delay: 1,
        ease: "power4.easeInOut",
        duration: 1.5,
      })
      .to(".intro", {
        duration: 0.5,
        opacity: 0,
      })
      .to(".intro", {
        zIndex: -20,
        onComplete: () => {
          onFinish(); // Trigger the transition
          window.scrollBy(0, -100); // Scroll up 100px after the loader finishes
        },
      });
  }, [onFinish]);

  return (
    <div className="intro flex items-center justify-center fixed inset-0 bg-gray-900 z-30 pt-8">
      <div className="relative w-1/3">
        <img
          src={currentImage}
          id="introImg"
          alt="Intro"
          className="object-contain scale-105 rounded-lg"
        />
      </div>
    </div>
  );
};

const Loading1 = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Call onFinish after 5 seconds
    }, 5000); // Show loader for 5 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return <Intro onFinish={onFinish} />;
};

export default Loading1;