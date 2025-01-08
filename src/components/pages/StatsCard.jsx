import React from 'react';

const StatsCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/20">
      <div className="text-yellow-400 mb-3">{icon}</div>
      <h3 className="text-white text-lg sm:text-xl font-bold mb-1">{title}</h3>
      <p className="text-gray-300 text-sm sm:text-base">{description}</p>
    </div>
  );
};

export default StatsCard;