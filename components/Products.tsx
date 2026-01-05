
import React from 'react';
import { Product, Category } from '../types';

const productCategories: Category[] = [
  {
    name: "Wireless & Solar Security",
    products: [
      {
        name: "3MP 4G Solar PTZ Camera",
        price: "R1300",
        features: "100% Wire-Free, Auto Tracking, PIR Human Detection",
        tag: "Best Seller",
        image: "https://picsum.photos/seed/cam1/400/300"
      },
      {
        name: "HiMost 6MP Dual-Lens Solar Camera",
        price: "R1700",
        features: "Ultra HD 6MP, Dual Screen, Active Defense",
        image: "https://picsum.photos/seed/cam2/400/300"
      },
      {
        name: "HiMost WiFi Solar Camera (VCS20)",
        price: "R1400",
        features: "Large capacity battery, IP66 Waterproof",
        image: "https://picsum.photos/seed/cam3/400/300"
      }
    ]
  },
  {
    name: "Complete CCTV Systems",
    products: [
      {
        name: "8CH 2MP WiFi NVR Kit",
        price: "R2500",
        features: "4x WiFi Cameras, 500GB HDD, XMEye Support",
        image: "https://picsum.photos/seed/kit1/400/300"
      },
      {
        name: "Hikvision 720P Turbo HD Kit",
        price: "R2600",
        features: "4 Channel DVR, Cabling, Full Installation",
        image: "https://picsum.photos/seed/kit2/400/300"
      },
      {
        name: "Hikvision 8CH 1080P Pro Kit",
        price: "R7500",
        features: "8x Cameras, 1TB HDD, Central PSU",
        image: "https://picsum.photos/seed/kit3/400/300"
      }
    ]
  },
  {
    name: "Smart Access & Power",
    products: [
      {
        name: "Intelligent WiFi Smart Lock",
        price: "R1700",
        features: "Fingerprint, IC Card, App Control",
        image: "https://picsum.photos/seed/lock1/400/300"
      },
      {
        name: "Wi-Fi Extension Services",
        price: "From R800",
        features: "Dual Band Gigabit Routers",
        image: "https://picsum.photos/seed/router1/400/300"
      }
    ]
  }
];

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1D1D1F] mb-4">Our Technology</h2>
          <p className="text-[#86868B] text-lg max-w-2xl mx-auto">
            Choose from our range of premium security products. Prices include professional installation for most kits.
          </p>
        </div>

        {productCategories.map((category, catIdx) => (
          <div key={catIdx} className="mb-20 last:mb-0">
            <h3 className="text-xl font-bold text-[#1D1D1F] mb-8 border-l-4 border-[#1D1D1F] pl-4">
              {category.name}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product, pIdx) => (
                <div 
                  key={pIdx} 
                  className={`ios-card p-6 flex flex-col h-full ${product.tag === 'Best Seller' ? 'ring-2 ring-[#1D1D1F] md:col-span-1 lg:col-span-1' : ''}`}
                >
                  <div className="relative mb-6 rounded-2xl overflow-hidden aspect-video">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                    {product.tag && (
                      <span className="absolute top-3 left-3 bg-[#1D1D1F] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                        {product.tag}
                      </span>
                    )}
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg font-bold text-[#1D1D1F] mb-2">{product.name}</h4>
                    <p className="text-sm text-[#86868B] leading-relaxed mb-4">
                      {product.features}
                    </p>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xl font-bold text-[#1D1D1F]">{product.price}</span>
                    <button className="text-sm font-semibold text-[#1D1D1F] hover:underline">
                      Inquire →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
