import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useSpring, animated } from "react-spring";
import Untitled from './assets/Images/Untitled.png';

const LuckyPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Animation spring for popup
  const popupAnimation = useSpring({
    opacity: showPopup ? 1 : 0,
    transform: showPopup ? "scale(1)" : "scale(0.8)",
    config: { tension: 200, friction: 20 },
  });

  const characterAnimation = useSpring({
    transform: showPopup ? "translateY(0)" : "translateY(100px)",
    opacity: showPopup ? 1 : 0,
    config: { tension: 200, friction: 20 },
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setShowPopup(true);
    }, 120000); // Show every 2 minutes (120000 milliseconds)

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center pt-20">
          <Confetti width={windowSize.width} height={windowSize.height} />
          <animated.div
            style={popupAnimation}
            className="flex items-center bg-white rounded-lg shadow-xl overflow-hidden w-11/12 max-w-4xl h-3/4"
          >
            {/* Character Image */}
            <animated.div
              style={characterAnimation}
              className="flex-shrink-0 w-1/3 bg-white h-full"
            >
              <img
                src={Untitled}
                alt="Character"
                className="w-full h-full object-cover"
              />
            </animated.div>

            {/* Text and Buttons Section */}
            <div className="flex-grow p-8 text-center">
              <h1 className="text-4xl font-extrabold text-green-500 mb-4">
                Congratulations! 🎉
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                You are one of the lucky ones! Book a demo class or schedule a
                call with just one click.
              </p>
              <div className="flex justify-center gap-4">
                <button
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold hover:bg-blue-600 transition duration-300"
                  onClick={() => alert("Booking process started!")}
                >
                  Book Now
                </button>
                <button
                  onClick={handleClose}
                  className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold hover:bg-red-600 transition duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </animated.div>
        </div>
      )}
    </>
  );
};

export default LuckyPopup;