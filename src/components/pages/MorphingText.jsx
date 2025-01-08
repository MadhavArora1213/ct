import React, { useState, useEffect } from 'react';

const words = ['Future', 'Dreams', 'Success', 'Excellence'];

const MorphingText = () => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-yellow-400 inline-block min-w-[100px] sm:min-w-[150px] md:min-w-[200px] lg:min-w-[250px] transition-all duration-300">
      {words[currentWord]}
    </span>
  );
};

export default MorphingText;