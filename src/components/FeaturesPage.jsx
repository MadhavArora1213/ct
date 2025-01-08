import React, { useState } from 'react';
import { GraduationCap, BookOpen, Users, Trophy, Rocket, Globe, Microscope } from 'lucide-react';

function GridItem({ icon, title, description, color, image }) {
  const Icon = icon;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <div
      className="group relative h-80 perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
    >
      <div
        className="absolute inset-0 rounded-xl shadow-lg transform-gpu transition-transform duration-200 overflow-hidden"
        style={{
          transform: `rotateY(${mousePosition.x * 20}deg) rotateX(${-mousePosition.y * 20}deg) translateZ(20px)`,
        }}
      >
        <div className="absolute inset-0">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transform scale-110 group-hover:scale-125 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </div>
        <div className="relative h-full p-6 flex flex-col items-center justify-center text-white">
          <div 
            className={`p-4 rounded-full mb-4 transform-gpu transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}
            style={{ backgroundColor: `${color}40` }}
          >
            <Icon size={32} className="transform group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-center">{title}</h3>
          <p className="text-gray-200 text-center">{description}</p>
          <div 
            className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
            style={{ backgroundColor: color }}
          />
        </div>
      </div>
    </div>
  );
}

function FeaturePage() {
  const items = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "World-class education with distinguished faculty",
      color: "#3B82F6",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: BookOpen,
      title: "Research Opportunities",
      description: "Cutting-edge research facilities and programs",
      color: "#10B981",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Users,
      title: "Student Life",
      description: "Vibrant campus community and activities",
      color: "#6366F1",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Trophy,
      title: "Athletics",
      description: "Championship-winning sports programs",
      color: "#EC4899",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "International programs and diverse community",
      color: "#F59E0B",
      image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Microscope,
      title: "Innovation Hub",
      description: "State-of-the-art labs and technology centers",
      color: "#8B5CF6",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl  text-white font-bold mb-4 bg-clip-text  text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          The Best of Our Offerings
          </h1>
          <p className="text-xl text-gray-300">Experience world-class education and opportunities</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="transform transition-all duration-500 hover:-translate-y-2"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.5s ease-out forwards'
              }}
            >
              <GridItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturePage;
