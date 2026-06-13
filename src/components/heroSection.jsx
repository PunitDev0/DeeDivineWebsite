"use client";

import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";

function HeroSection() {

  useEffect(() => {
    const textPath = document.querySelector(".scrolling-text-path");

    if (!textPath) return;

    // Smooth loop text scroll animation
    const animation = gsap.to(textPath, {
      attr: { startOffset: "-80%" }, 
      duration: 22,                  
      repeat: -1,                    
      ease: "none",                  
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-300">
      {/* Background Image - Forward layer to hide text behind building */}
      <Image
        src="/assets/heroImage.png"
        alt="Hero Image"
        fill
        priority
        className="object-cover brightness-50 contrast-110 z-10"
      />

      {/* SVG Path Text Overlay - Layered behind the building image */}
      <svg 
        className="absolute inset-0 w-full h-full z-1 pointer-events-none select-none"
        viewBox="0 0 1000 700" 
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path 
            id="buildingRoofPath" 
            d="M 320,220 C 410,370 540,360 620,350 C 790,310 820,200 1000,150"
            fill="transparent" 
          />
        </defs>
        
        {/* Neon Green / White Scrolling Text */}
        <text className="font-extrabold uppercase text-[22px] fill-black tracking-[3px] drop-shadow-xl">
          <textPath 
            className="scrolling-text-path"
            href="#buildingRoofPath" 
            startOffset="0%"
          >
            DEE DIVINE GROUPS • DEE DIVINE GROUPS • DEE DIVINE GROUPS • DEE DIVINE GROUPS • DEE DIVINE GROUPS • DEE DIVINE GROUPS • 
          </textPath>
        </text>
      </svg>

      {/* LEFT BOTTOM CONTENT BLOCK - Layered on top of image (z-20) */}
      <div className="absolute left-6 bottom-10 md:left-14 md:bottom-16 z-20 max-w-xl text-left select-none pointer-events-auto">
        
        {/* Main Badge / Sub-heading */}
        <div className="flex items-center space-x-3 mb-4">
          <span className="w-8 h-[1px] bg-white/60"></span>
          <span className="text-xs font-bold tracking-[0.4em] text-neutral-300 uppercase">
            Luxury Living
          </span>
        </div>

        {/* Big Premium Heading */}
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase font-sans leading-none mb-4">
          SHAPING <br /> THE FUTURE
        </h1>

        {/* Description Text */}
        <p className="text-xs md:text-sm text-neutral-400 font-medium tracking-wide leading-relaxed max-w-md mb-8">
          Crafting premium plotted developments and hyper-modern residential spaces designed for generations. Exceptional architecture meets sustainable living.
        </p>

        {/* Minimal Grid Data Table */}
        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 max-w-sm">
          <div>
            <p className="text-[10px] font-bold text-neutral-500 tracking-widest uppercase mb-1">Type</p>
            <p className="text-xs font-black text-white tracking-wide uppercase">Plotted Dev.</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-neutral-500 tracking-widest uppercase mb-1">Est.</p>
            <p className="text-xs font-black text-white tracking-wide uppercase">2026</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-neutral-500 tracking-widest uppercase mb-1">Status</p>
            <p className="text-xs font-black text-emerald-400 tracking-wide uppercase flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
              Active
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HeroSection;
