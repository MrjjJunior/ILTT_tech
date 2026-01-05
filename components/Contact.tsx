
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'CCTV Systems'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We will contact you at ${formData.phone} shortly.`);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Abstract Background Detail */}
      <div className="absolute top-0 right-0 -mr-20 mt-20 w-96 h-96 bg-gray-100 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 mb-20 w-96 h-96 bg-gray-100 rounded-full blur-3xl"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1D1D1F] mb-4">Ready to Secure Your Property?</h2>
          <p className="text-lg text-[#86868B]">Contact ILTT TECH today for a customized security assessment.</p>
        </div>

        <form onSubmit={handleSubmit} className="ios-card p-8 md:p-12 space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#86868B] uppercase tracking-widest pl-2">Full Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-[#F5F5F7] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#1D1D1F] transition-all outline-none text-[#1D1D1F]"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#86868B] uppercase tracking-widest pl-2">Phone Number</label>
              <input 
                type="tel" 
                required
                className="w-full bg-[#F5F5F7] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#1D1D1F] transition-all outline-none text-[#1D1D1F]"
                placeholder="071 234 5678"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#86868B] uppercase tracking-widest pl-2">Service Interested In</label>
            <select 
              className="w-full bg-[#F5F5F7] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#1D1D1F] transition-all outline-none text-[#1D1D1F] appearance-none"
              value={formData.service}
              onChange={(e) => setFormData({...formData, service: e.target.value})}
            >
              <option>CCTV Systems</option>
              <option>Solar Wireless Cameras</option>
              <option>Smart Locks</option>
              <option>WiFi Networking</option>
            </select>
          </div>

          <button type="submit" className="w-full pill-button bg-[#1D1D1F] text-white py-5 text-lg font-bold hover:bg-black shadow-xl shadow-black/10 active:scale-[0.98]">
            Request Assessment
          </button>
        </form>
      </div>
    </section>
  );
}
