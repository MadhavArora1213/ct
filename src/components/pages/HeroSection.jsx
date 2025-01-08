import React from 'react';
import BackgroundSlider from './BackgroundSlider';
import HeroContent from './HeroContent';
import SignUpForm from './SignUpForm';

const HeroSection = () => (
  <div className="relative min-h-screen w-full overflow-hidden max-sm:pt-36 sm:pt-36 md:pt-36 lg:pt-36 pb-8">
    <BackgroundSlider />
    
    <div className="relative z-10 h-full">
      <div className="container mx-auto px-4 h-full">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <HeroContent />
          <div className="flex justify-center lg:justify-end">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;