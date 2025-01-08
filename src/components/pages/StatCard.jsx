import React from 'react';
// import { LucideIcon } from 'lucide-react';
import '../../styles/glass.css';

export function StatCard({ icon: Icon, value, label, color }) {
  return (
    <div className="transform-gpu hover:scale-105 transition-all duration-300">
      <div className={`glass-card relative overflow-hidden rounded-xl p-6 text-white`}>
        <div className={`absolute -right-4 -top-4 opacity-20 ${color}`}>
          <Icon size={100} />
        </div>
        <div className="relative z-10">
          <Icon className={`w-8 h-8 mb-4 ${color}`} />
          <h3 className="text-3xl font-bold mb-1">{value}</h3>
          <p className="text-sm text-gray-100">{label}</p>
        </div>
      </div>
    </div>
  );
}
