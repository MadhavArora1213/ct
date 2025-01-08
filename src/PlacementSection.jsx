import React from 'react';
import { PlacementStats } from './components/pages/PlacementStats';
import { PlacementSlider } from './components/pages/PlacementSlider';
import { Vision } from './components/pages/Vision';
import './styles/animations.css';
import './styles/glass.css';

export default function PlacementSection() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#EEF5FF] via-[#dfe7fd] to-[#e0f7ff] text-black">
      <div className="mx-auto px-4 py-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-blue-700 underline bg-clip-text text-transparent">
             <p className='text-4xl sm:text-4xl md:text-5xl font-bold text-black underline'> Outstanding Placements</p>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-black max-w-2xl mx-auto">
              Our students excel in their careers with top companies worldwide
            </p>
          </div>

          {/* Stats Section */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">Placement Highlights</h2>
            <PlacementStats />
          </section>

          {/* Top Placements Section */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">Top Placements</h2>
            <PlacementSlider />
          </section>

          {/* Vision Section */}
          <section>
            <Vision />
          </section>
        </div>
      </div>
    </div>
  );
}