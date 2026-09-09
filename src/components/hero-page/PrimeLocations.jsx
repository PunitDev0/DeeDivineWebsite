"use client";

import Image from "next/image";

const locations = [
  {
    name: "Dwarka Expressway",
    image: "/assets/locations/dwarka-expressway.png",
    className: "col-span-1 sm:col-span-2 row-span-1", // Spans 2 columns on desktop
  },
  {
    name: "SPR Road",
    image: "/assets/locations/spr-road.png",
    className: "col-span-1",
  },
  {
    name: "New Gurgaon",
    image: "/assets/locations/new-gurgaon.png",
    className: "col-span-1",
  },
  {
    name: "Manesar",
    image: "/assets/locations/manesar.png",
    className: "col-span-1",
  },
  {
    name: "Golf Course Road",
    image: "/assets/locations/golf-course-road.png",
    className: "col-span-1",
  },
  {
    name: "Golf Course Ext. Road",
    image: "/assets/locations/golf-course-ext-road.png",
    className: "col-span-1",
  },
  {
    name: "Sohna Road",
    image: "/assets/locations/sohna-road.png",
    className: "col-span-1",
  },
];

export default function PrimeLocations() {
  return (
    <section className="py-12 md:py-24 bg-[#f8f6f5] text-center border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-10 md:mb-16 text-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 sm:w-6 h-[2px] bg-red-500" />
            <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.2em] sm:tracking-[0.35em] text-[#e63946]">
              Destinations
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0c0d12] max-w-2xl mb-4 px-2">
            Create the Perfect Home at the Perfect Place
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm md:text-base max-w-2xl px-2">
            Choose Your Location, and Let Us Create a Home That Matches Your Imagination
          </p>
        </div>

        {/* Location Asymmetric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {locations.map((loc, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer ${loc.className}`}
            >
              {/* Image */}
              <Image
                src={loc.image}
                unoptimized
                alt={loc.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Text Label */}
              <div className="absolute bottom-6 left-6 text-left">
                <h3 className="text-white text-sm md:text-base font-black uppercase tracking-wider">
                  {loc.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
