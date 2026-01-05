
import React from 'react';
import { Layout, Shield, Cpu } from 'lucide-react';

const About: React.FC = () => {
  const bullets = [
    {
      title: "Plug & Play Simplicity",
      desc: "Mobile access and easy setup on all devices.",
      icon: <Layout className="text-[#1D1D1F]" size={24} />
    },
    {
      title: "All-Inclusive Value",
      desc: "Most of our packages include professional installation in the price.",
      icon: <Shield className="text-[#1D1D1F]" size={24} />
    },
    {
      title: "Latest Tech",
      desc: "From Human Detection AI to Full-Colour Night Vision.",
      icon: <Cpu className="text-[#1D1D1F]" size={24} />
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1D1D1F] leading-tight mb-8">
              Why Choose ILTT TECH?
            </h2>
            <p className="text-lg text-[#86868B] leading-relaxed mb-10">
              At ILTT TECH, we believe security shouldn't be complicated. We specialize in cutting-edge surveillance and smart home technology that puts control back in your hands. Whether you need a robust 8-channel CCTV system for your business or a wire-free solar camera for your home perimeter, we provide end-to-end solutions.
            </p>
            <div className="space-y-6">
              {bullets.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-5 group">
                  <div className="mt-1 w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1D1D1F] mb-1">{item.title}</h3>
                    <p className="text-[#86868B]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img src="https://picsum.photos/seed/sec1/400/600" className="rounded-3xl shadow-lg w-full h-[300px] object-cover" alt="Security View 1" />
              <img src="https://picsum.photos/seed/sec2/400/400" className="rounded-3xl shadow-lg w-full h-[200px] object-cover" alt="Security View 2" />
            </div>
            <div className="space-y-4">
              <img src="https://picsum.photos/seed/sec3/400/400" className="rounded-3xl shadow-lg w-full h-[200px] object-cover" alt="Security View 3" />
              <img src="https://picsum.photos/seed/sec4/400/600" className="rounded-3xl shadow-lg w-full h-[300px] object-cover" alt="Security View 4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
