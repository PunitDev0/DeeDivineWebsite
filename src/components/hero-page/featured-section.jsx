"use client";

import { useEffect, useRef } from "react";
import { MessageSquare, FileText, Briefcase, Shield, Phone } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FeatureSections() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const cardsRef = useRef([]);
  const imageWrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading slide-up
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headlineRef.current,
            start: "top 85%",
          },
        }
      );

      // Cards stagger
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 90%",
          },
        }
      );

      // Right image parallax / reveal
      if (imageWrapperRef.current) {
        gsap.fromTo(
          imageWrapperRef.current,
          { clipPath: "inset(0 0 100% 0)", opacity: 0.8 },
          {
            clipPath: "inset(0 0 0% 0)",
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: imageWrapperRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: <MessageSquare size={20} />,
      title: "Verified Listings",
      description: "Browse 2BHK, 3BHK, and luxury apartments in Delhi NCR with trusted verification.",
      highlight: false,
    },
    {
      icon: <FileText size={20} />,
      title: "Diverse Options",
      description: "From affordable flats in Chattarpur to luxury villas in South Delhi — we’ve got it all.",
      highlight: true, // Second card highlighted as premium
    },
    {
      icon: <Briefcase size={20} />,
      title: "Expert Assistance",
      description: "Our experienced agents in Delhi, Noida, and Gurgaon make your property journey seamless.",
      highlight: false,
    },
    {
      icon: <Shield size={20} />,
      title: "Personalized Service",
      description: "Tailored recommendations designed to match your unique lifestyle and budget.",
      highlight: false,
    },
  ];

  return (
    <section ref={containerRef} className="relative py-24 px-6 md:px-16 bg-[#ffffff] overflow-hidden">
      <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-12 items-center">
        
        {/* ---------- LEFT COLUMN: CONTENT + GRID ---------- */}
        <div className="lg:col-span-7 flex flex-col space-y-12">
          
          {/* Header */}
          <div ref={headlineRef}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-red-500" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#e63946]">
                Delhi NCR Properties
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black leading-[1.1] uppercase tracking-tight text-[#0c0d12]">
              Find Your Dream Home <br />
              <span className="text-neutral-300">with DeeDivine Propinfra</span>
            </h2>
            
            <p className="text-neutral-500 text-sm leading-relaxed mt-4 max-w-lg">
              We bring you verified listings, trusted agents, and a wide range of properties to make your dream of owning or renting a perfect home a reality.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`group border flex flex-col justify-between p-6 shadow-sm hover:shadow-md transition-all duration-300 ${
                  feature.highlight
                    ? "bg-[#0c0d12] border-[#0c0d12] text-white"
                    : "bg-white border-neutral-100 text-[#0c0d12]"
                }`}
              >
                <div>
                  <div
                    className={`w-10 h-10 flex items-center justify-center mb-4 shadow-sm transition-transform duration-300 group-hover:scale-105 ${
                      feature.highlight
                        ? "bg-white/10 text-red-400"
                        : "bg-neutral-50 text-red-500 border border-neutral-100"
                    }`}
                  >
                    {feature.icon}
                  </div>
                  
                  <h3 className="font-black text-sm uppercase tracking-wider mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className={`text-xs leading-relaxed ${
                    feature.highlight ? "text-neutral-400" : "text-neutral-500"
                  }`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ---------- RIGHT COLUMN: IMAGE + CTA ---------- */}
        <div className="lg:col-span-5 flex flex-col space-y-8 items-center justify-center relative">
          
          {/* Image Block */}
          <div 
            ref={imageWrapperRef}
            className="w-full h-[400px] relative overflow-hidden bg-neutral-200"
            style={{ clipPath: "inset(0 0 100% 0)" }}
          >
            <Image
              src="/assets/featureSection1.webp"
              alt="Luxury Modern House"
              fill
              className="object-cover hover:scale-105 transition-all duration-700 ease-out"
            />
          </div>

          {/* Subtext description */}
          <p className="text-neutral-500 text-xs leading-relaxed max-w-sm text-center">
            At DEE DIVINE PROPINFRA, we connect you with homes that fit your style and budget — from luxury apartments to cozy studios across Delhi NCR.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <button
              className="px-8 py-3.5 bg-black hover:bg-neutral-800 text-white text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-md w-full sm:w-auto"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Explore Properties
            </button>

            <div className="flex items-center gap-3 bg-white border border-neutral-100 px-5 py-2.5 shadow-sm w-full sm:w-auto justify-center">
              <div className="w-8 h-8 bg-red-500 flex items-center justify-center text-white">
                <Phone size={14} />
              </div>
              <div className="text-left">
                <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">Call Us Anytime</p>
                <p className="text-xs font-black text-[#0c0d12] tracking-wider">+91 9211496111</p>
              </div>
            </div>
          </div>

          {/* Floating Badge (in bottom left) */}
          <div className="absolute -bottom-4 left-6 hidden sm:block">
            <div className="bg-[#f8f9fa] border border-neutral-200 px-4 py-2 flex items-center gap-2 shadow-sm">
              <span className="text-xs font-black text-red-500">49+</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                Top Rated Projects
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
