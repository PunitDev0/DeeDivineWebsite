"use client";

import Image from "next/image";

const locations = [
  {
    name: "Dubai",
    image: "/assets/destinations/dubai.png",
    className: "col-span-1 sm:col-span-2 row-span-2 sm:row-span-2 shadow-[0_8px_30px_rgba(217,35,62,0.1)]", // Large featured card
    isFeatured: true,
  },
  {
    name: "SPR Road",
    image: "/assets/destinations/wat-arun.jpg",
    className: "col-span-1 row-span-1",
  },
  {
    name: "New Gurgaon",
    image: "/assets/destinations/lotus-temple.jpg",
    className: "col-span-1 row-span-1",
  },
  {
    name: "Manesar",
    image: "/assets/destinations/brandenburg.jpg",
    className: "col-span-1 row-span-1",
  },
  {
    name: "Golf Course Road",
    image: "/assets/destinations/india-gate.jpg",
    className: "col-span-1 row-span-1",
  },
];

export default function PrimeLocations() {
  return (
    <section className="relative py-20 md:py-28 bg-[#fcfcfc] overflow-hidden">
      {/* Subtle Premium Background Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(217,35,62,0.04)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(143,18,48,0.03)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 md:mb-20 text-center">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-[2px] bg-gradient-to-r from-[#8F1230] to-[#FF5A67]" />
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.35em] bg-gradient-to-r from-[#8F1230] to-[#FF5A67] bg-clip-text text-transparent">
              Destinations
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0c0d12] max-w-3xl mb-6">
            Create the Perfect Home at the Perfect Place
          </h2>
          <p className="text-[#5F6065] text-sm md:text-base max-w-2xl leading-relaxed">
            Choose Your Location, and Let Us Create a Home That Matches Your Imagination
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 auto-rows-[220px] md:auto-rows-[280px]">
          {locations.map((loc, index) => (
            <div
              key={index}
              className={`group relative rounded-[2rem] overflow-hidden cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(217,35,62,0.15)] hover:-translate-y-1.5 transition-all duration-500 ease-out border border-white/60 bg-white/10 ${loc.className}`}
            >
              {/* Image */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
                <Image
                  src={loc.image}
                  unoptimized
                  alt={loc.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Glassmorphism Gradient Overlay (Only for featured) */}
              {loc.isFeatured && (
                <div className="absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-[#0c0d12]/90 via-[#0c0d12]/20 to-transparent opacity-80 group-hover:opacity-90" />
              )}

              {/* Red Subtle Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#8F1230]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

              {/* Inner Light Border for Glass Effect */}
              <div className="absolute inset-0 rounded-[2rem] border border-white/20 group-hover:border-white/40 transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
