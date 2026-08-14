"use client";

import Image from "next/image";

const locations = [
  {
    name: "Golf Course Road",
    image: "/assets/golf-course-road.webp",
  },
  {
    name: "Dwarka Expressway",
    image: "/assets/dwarka-expressway.webp",
  },
  {
    name: "Golf Course Ext. Road",
    image: "/assets/golf-course-ext.webp",
  },
  {
    name: "Sohna Road",
    image: "/assets/sonha-road.webp",
  },
  {
    name: "SPR Road",
    image: "/assets/spr-road.webp",
  },
];

export default function PrimeLocations() {
  return (
    <section className="py-24 bg-[#ffffff] text-center border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-red-500" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#e63946]">
              Destinations
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0c0d12] max-w-2xl">
            Explore Properties Across Prime Locations
          </h2>
        </div>

        {/* Location Circles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="flex flex-col items-center group hover:scale-102 transition-all duration-300"
            >
              {/* Circle Wrapper */}
              <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-full overflow-hidden p-1.5 border border-neutral-100 bg-white group-hover:border-red-500/50 shadow-sm transition-all duration-500">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={loc.image}
                    unoptimized
                    alt={loc.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Label */}
              <p className="mt-4 text-[#0c0d12] font-black uppercase tracking-wider text-[11px]">
                {loc.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
