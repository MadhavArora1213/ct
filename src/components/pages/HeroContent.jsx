import React from 'react';
import { GraduationCap, Award, Trophy } from 'lucide-react';
import StatsCard from './StatsCard';
import MorphingText from './MorphingText';

const HeroContent = () => (
  <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
    <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
      Shape Your <MorphingText />
    </h1>
    <p className="text-lg sm:text-xl text-gray-200 mb-8">
      Discover a world of opportunities and excellence in education
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
      <StatsCard
        icon={<GraduationCap className="w-8 h-8" />}
        title="NAAC A"
        description="Accredited Institution"
      />
      <StatsCard
        icon={<Award className="w-8 h-8" />}
        title="Top 50"
        description="in Innovation Rankings"
      />
      <StatsCard
        icon={<Trophy className="w-8 h-8" />}
        title="#150"
        description="in University Rankings"
      />
    </div>
  </div>
);

export default HeroContent;