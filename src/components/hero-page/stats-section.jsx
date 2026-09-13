"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StatsSection() {
  const containerRef = useRef(null);
  const valRefs = useRef([]);

  const stats = [
    { targetVal: 30, suffix: "+", label: "Associated Builders" },
    { targetVal: 1500, suffix: "+", label: "Property Sales" },
    { targetVal: 1250, suffix: "+", label: "Rented Property" },
    { targetVal: 2130, suffix: "+", label: "Happy Customers" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      stats.forEach((stat, i) => {
        const ref = valRefs.current[i];
        if (!ref) return;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.targetVal,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref,
            start: "top 85%",
          },
          onUpdate: () => {
            if (ref) {
              ref.textContent = Math.round(obj.val).toLocaleString() + stat.suffix;
            }
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-gradient-to-r from-[#08090C] via-[#240A12] to-[#16090E] border-t border-b border-white/10 overflow-hidden py-10 md:py-14 px-4 sm:px-6 md:px-16">
      {/* Subtle radial red glow behind statistics */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(90,16,34,0.4)_0%,transparent_60%)] pointer-events-none mix-blend-screen"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden">
          {stats.map((stat, index) => (
            <div key={index} className="group relative flex flex-col items-center py-8 md:py-10 text-center px-4 sm:px-6 transition-colors duration-500 hover:bg-[#8F1230]/20">
              {/* Soft red glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(217,35,62,0.2)_0%,transparent_70%)] transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="group-hover:scale-105 transition-transform duration-500 relative z-10 flex flex-col items-center">
                {/* Stat number holding ref */}
                <span
                  ref={(el) => {
                    if (el) valRefs.current[index] = el;
                  }}
                  className="text-4xl sm:text-5xl md:text-5xl font-black tracking-tight text-white drop-shadow-[0_0_12px_rgba(217,35,62,0.4)] group-hover:drop-shadow-[0_0_20px_rgba(255,90,103,0.6)] transition-all duration-500"
                >
                  0{stat.suffix}
                </span>

                {/* Label */}
                <span className="text-[10px] sm:text-[11px] md:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-white/50 mt-2 sm:mt-3 group-hover:text-[#FF5A67] transition-colors duration-500">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
