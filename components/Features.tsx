
import React from 'react';
import { Smartphone, Moon, CloudRain, BellRing } from 'lucide-react';

const features = [
  { icon: <Smartphone size={32} />, text: "Mobile Control via App" },
  { icon: <Moon size={32} />, text: "Full-Color Night Vision" },
  { icon: <CloudRain size={32} />, text: "IP66 Weatherproof" },
  { icon: <BellRing size={32} />, text: "Smart Motion Alerts" }
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-[#86868B] shadow-sm hover:shadow-md hover:text-[#0071E3] transition-all duration-300">
                {feature.icon}
              </div>
              <span className="text-sm font-semibold text-[#1D1D1F] uppercase tracking-wider">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
