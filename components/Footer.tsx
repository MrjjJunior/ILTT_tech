
import React from 'react';
import { ShieldCheck, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1D1D1F] text-[#F5F5F7] pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#333333] rounded-xl flex items-center justify-center text-white border border-white/10">
                <ShieldCheck size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">ILTT TECH</span>
            </div>
            <p className="text-[#86868B] text-sm leading-relaxed">
              Leading provider of premium security solutions and smart home technology. Professional installation, ultimate peace of mind.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Solutions</h4>
            <ul className="space-y-4 text-sm text-[#86868B]">
              <li><a href="#" className="hover:text-white transition-colors">CCTV Systems</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Solar Cameras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Smart Locks</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Access Control</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-[#86868B]">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between text-xs text-[#86868B]">
          <p>© 2024 ILTT TECH. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Made with excellence for modern security.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
