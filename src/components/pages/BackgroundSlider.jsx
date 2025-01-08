import React from 'react';
import hostel from "../../assets/Images/hostel.png";
import p from "../../assets/Images/p.jpg";

const BackgroundSlider = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
  
    React.useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % mediaContent.length);
      }, 6000);
  
      return () => clearInterval(interval);
    }, []);
  
    const mediaContent = [
      {
        type: 'image',
         url: p,
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1920',
      },
      {
        type: 'image',
        url: hostel,
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1920',
      },
    ];
  
    return (
      <div className="absolute inset-0 w-full h-full">
        {mediaContent.map((media, index) => (
          <div
            key={media.url}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {media.type === 'video' ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="object-cover w-full h-full"
              >
                <source src={media.url} type="video/mp4" />
              </video>
            ) : (
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${media.url})` }}
              />
            )}
          </div>
        ))}
        <div className="absolute inset-0 bg-black/50" />
      </div>
    );
  };
  
  export default BackgroundSlider;
  