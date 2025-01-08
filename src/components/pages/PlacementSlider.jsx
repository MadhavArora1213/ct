import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import PlacementCard from './PlacementCard';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import '../../styles/glass.css';

export function PlacementSlider() {
  const placements = [
    {
      company: "Microsoft",
      name: "Ameya Ohri",
      role: "Software Engineer",
      package: "54.75",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      image: "https://ptu.ac.in/wp-content/uploads/2024/07/CT-Institute-2024-Placement.jpeg"
    },
    {
      company: "Amazon",
      name: "Abhishek Dimri",
      role: "SDE",
      package: "52.11",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80"
    },
    {
      company: "Palo Alto",
      name: "Vandana Chauhan",
      role: "Security Engineer",
      package: "50.25",
      logo: "https://www.paloaltonetworks.com/content/dam/pan/en_US/images/logos/brand/primary-company-logo-color-white/PANW_Parent_Brand_Primary_Logo_RGB_Red_White.png",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
    },
    {
      company: "Amazon",
      name: "Abhishek Dimri",
      role: "SDE",
      package: "52.11",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80"
    },
    {
      company: "Palo Alto",
      name: "Vandana Chauhan",
      role: "Security Engineer",
      package: "50.25",
      logo: "https://www.paloaltonetworks.com/content/dam/pan/en_US/images/logos/brand/primary-company-logo-color-white/PANW_Parent_Brand_Primary_Logo_RGB_Red_White.png",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
    },
    
  ];

  return (
    <div className="glass-dark rounded-xl p-4 sm:p-8">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="w-full"
      >
        {placements.map((placement, index) => (
          <SwiperSlide key={index} className="max-w-xs sm:max-w-sm">
            <PlacementCard {...placement} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}