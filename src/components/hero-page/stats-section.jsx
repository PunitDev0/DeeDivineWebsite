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
    <section ref={containerRef} className="w-full bg-[#0c0d12] text-white border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center py-10 md:py-14 text-center px-4">
              {/* Stat number holding ref */}
              <span
                ref={(el) => (valRefs.current[index] = el)}
                className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white"
              >
                0{stat.suffix}
              </span>
              
              {/* Label */}
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-white/40 mt-3">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
