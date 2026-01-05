
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 bg-[#E8E8ED] rounded-full text-[#1D1D1F] text-xs font-bold tracking-widest uppercase mb-4">
            Next-Gen Security
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1D1D1F] leading-[1.1]">
            Professional Security & <br className="hidden md:block" /> Smart Home Solutions.
          </h1>
          <p className="text-lg md:text-xl text-[#86868B] max-w-xl mx-auto md:mx-0">
            Secure your home or business with high-definition CCTV, 100% wireless solar cameras, and biometric smart locks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a href="#products" className="pill-button bg-[#1D1D1F] text-white px-8 py-4 text-lg font-semibold hover:bg-black w-full sm:w-auto text-center">
              View Special Offers
            </a>
            <a href="#contact" className="pill-button border-2 border-[#1D1D1F] text-[#1D1D1F] px-8 py-3.5 text-lg font-semibold hover:bg-gray-100 w-full sm:w-auto text-center">
              Get a Free Quote
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative group">
          <div className="relative z-10 animate-float">
            <img 
              src="https://picsum.photos/seed/security/800/600" 
              alt="Security Solution Collage" 
              className="rounded-[32px] shadow-2xl object-cover w-full h-[400px] md:h-[500px]"
            />
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#1D1D1F]/5 blur-3xl rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gray-400/10 blur-3xl rounded-full"></div>
          </div>
          
          {/* Badge */}
          <div className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl z-20 border border-white/50 hidden lg:block">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <div className="text-sm font-bold text-[#1D1D1F]">AI Detection</div>
                <div className="text-xs text-[#86868B]">100% Active 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
