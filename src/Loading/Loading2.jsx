import React, { useEffect } from "react";
import gsap from "gsap";
import "./Loading2.css";

const Loading2 = ({ onAnimationComplete }) => {
  useEffect(() => {
    // Line animation
    gsap.to(".loader .line", {
      scaleY: 0,
      transformOrigin: "top",
      duration: 3,
      delay: 0.5,
    });

    // Circle animation
    gsap.to(".loader .circles span", {
      scale: 0,
      duration: 2,
      delay: 4, // Starts after 4 seconds
      stagger: {
        grid: [3, 3],
        from: "random",
        each: 0.3,
      },
    });

    // Call the onAnimationComplete callback after 7 seconds
    const timer = setTimeout(() => {
      if (onAnimationComplete) onAnimationComplete();
    }, 7000);

    return () => clearTimeout(timer); // Clean up the timer
  }, [onAnimationComplete]);

  return (
    <div className="loader">
      <div className="line"></div>
      <div className="circles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loading2;
