"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Consultation & Matching",
    desc: "We assess your budget, location goals, and preferences to curate a personalized property shortlist."
  },
  {
    num: "02",
    title: "Guided Site Visits",
    desc: "Experience shortlisted properties in person with comparative pricing insights."
  },
  {
    num: "03",
    title: "Due Diligence Audit",
    desc: "Our team verifies HARERA approvals, ownership records, and builder agreements."
  },
  {
    num: "04",
    title: "Registry & Handover",
    desc: "We manage the entire transaction, from bank coordination to final registry execution."
  }
];

export default function BuyingRoadmap() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Progress line animation
      gsap.fromTo(
        ".roadmap-progress-bar",
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".roadmap-step-grid",
            start: "top 80%",
            end: "bottom 60%",
            scrub: true
          }
        }
      );

      // Staggered slide up of step cards
      gsap.fromTo(
        ".roadmap-step-card",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".roadmap-step-grid",
            start: "top 85%"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-white py-24 px-6 md:px-16 border-t border-neutral-200/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-red-500" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#e63946]">
              Seamless Execution
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#0c0d12]">
            Our Property Acquisition Process
          </h2>
          
          <p className="text-neutral-600 text-sm md:text-base max-w-xl mt-4 leading-relaxed font-medium">
            We follow a structured, transparent process to make your property acquisition seamless:
          </p>
        </div>

        {/* Timeline Progress Bar (Hidden on mobile) */}
        <div className="relative w-full h-[2px] bg-neutral-100 mb-16 hidden lg:block">
          <div className="roadmap-progress-bar absolute top-0 left-0 h-full w-full bg-red-500 origin-left" />
        </div>

        {/* Step Grid */}
        <div className="roadmap-step-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="roadmap-step-card flex flex-col justify-between p-6 bg-[#fafafa] border border-neutral-200/50 hover:border-neutral-300 hover:shadow-lg hover:shadow-black/[0.01] transition-all duration-300 relative group h-full"
            >
              <div>
                {/* Accent red dot relative to line */}
                <div className="absolute -top-[17px] left-6 w-2 h-2 rounded-full bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block" />

                {/* Step Number */}
                <span className="text-[48px] font-black text-neutral-200 group-hover:text-red-500/10 transition-colors duration-300 leading-none select-none block mb-4">
                  {step.num}
                </span>

                {/* Tiny red block */}
                <div className="w-6 h-[2px] bg-red-500 mb-4" />

                {/* Step Title */}
                <h3 className="text-xs md:text-sm font-black uppercase tracking-wider text-[#0c0d12] mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
