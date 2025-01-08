import React from 'react';
import { Building2, MapPin } from 'lucide-react';
import '../../styles/animations.css';

function PlacementCard({ 
  company, 
  name, 
  role, 
  pkg,  // Renamed package to pkg to avoid using the reserved keyword
  logo, 
  image,
  location = "Bangalore, India" 
}) {
  return (
    <div className="transform-gpu hover:scale-105 transition-all duration-300">
      <div 
        className="relative group rounded-xl overflow-hidden shadow-xl h-[400px] sm:h-[450px] md:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6">
          <div>
            <img src={logo} alt={company} className="h-6 sm:h-8 object-contain filter brightness-0 invert mb-4 sm:mb-6" />
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {name}
              </h3>
              <div className="space-y-1">
                <p className="text-base sm:text-lg text-white flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  {role}
                </p>
                <p className="text-sm sm:text-base text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {location}
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-auto">
            <span className="inline-block text-xl sm:text-2xl font-bold text-white px-4 py-1 rounded-full bg-black/50">
              ₹{pkg} LPA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlacementCard;