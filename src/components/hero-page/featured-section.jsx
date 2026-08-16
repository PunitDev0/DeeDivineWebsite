"use client";

import { useEffect, useRef } from "react";
import { ShieldCheck, FileCheck, MapPin, Tag, UserCheck, Phone, CheckCircle2, Award } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FeatureSections() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const cardsRef = useRef([]);
  const reraRef = useRef(null);
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
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 90%",
          },
        }
      );

      // RERA section animation
      if (reraRef.current) {
        gsap.fromTo(
          reraRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: reraRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Right image reveal
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

  // 5 Supporting Points requested by user
  const supportingPoints = [
    {
      icon: <ShieldCheck size={20} />,
      title: "Verified & RERA-Approved",
      description: "Verified & RERA-approved listings only — ensuring total legal security.",
      highlight: false,
    },
    {
      icon: <FileCheck size={20} />,
      title: "End-to-End Legal Support",
      description: "Complete legal, document audit, and HARERA compliance assistance.",
      highlight: true, // Highlighted card
    },
    {
      icon: <MapPin size={20} />,
      title: "Deep Local Expertise",
      description: "Deep local expertise across Gurgaon's prime growth & luxury corridors.",
      highlight: false,
    },
    {
      icon: <Tag size={20} />,
      title: "Transparent Pricing",
      description: "Transparent pricing with no hidden charges or undisclosed terms.",
      highlight: false,
    },
    {
      icon: <UserCheck size={20} />,
      title: "Dedicated Advisor",
      description: "Dedicated relationship manager assigned for every client.",
      highlight: false,
    },
  ];

  return (
    <section ref={containerRef} className="relative py-24 px-6 md:px-16 bg-[#ffffff] overflow-hidden border-b border-neutral-100">
      <div className="mx-auto max-w-7xl flex flex-col space-y-24">
        
        {/* ── SECTION 1: WHY CHOOSE DEE DIVINE PROPINFRA ── */}
        <div className="grid gap-16 lg:grid-cols-12 items-start">
          
          {/* LEFT COLUMN: CONTENT + 5 POINTS GRID */}
          <div className="lg:col-span-7 flex flex-col space-y-10">
            
            {/* Header */}
            <div ref={headlineRef}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-red-500" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#e63946]">
                  Your Dedicated Advisor
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black leading-[1.1] uppercase tracking-tight text-[#0c0d12]">
                Why Choose Dee Divine Propinfra <br />
                <span className="text-neutral-400">as Your Real Estate Consultant</span>
              </h2>
              
              <p className="text-neutral-600 text-sm md:text-base leading-relaxed mt-6">
                At Dee Divine Propinfra, we go beyond just listing properties — we act as your dedicated advisor throughout the investment journey. Our team combines local market expertise with complete transparency, ensuring every property we recommend is legally verified, RERA-compliant, and aligned with your financial goals. From first-time homebuyers to seasoned investors, we build long-term relationships based on trust, not just transactions.
              </p>
            </div>

            {/* 5 Supporting Points Grid */}
            <div className="grid gap-5 sm:grid-cols-2">
              {supportingPoints.map((point, index) => (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className={`group border flex flex-col justify-between p-6 shadow-sm hover:shadow-md transition-all duration-300 ${
                    point.highlight
                      ? "bg-[#0c0d12] border-[#0c0d12] text-white sm:col-span-2 md:col-span-1"
                      : "bg-white border-neutral-100 text-[#0c0d12]"
                  }`}
                >
                  <div>
                    <div
                      className={`w-10 h-10 flex items-center justify-center mb-4 shadow-sm transition-transform duration-300 group-hover:scale-105 ${
                        point.highlight
                          ? "bg-white/10 text-red-400"
                          : "bg-neutral-50 text-red-500 border border-neutral-100"
                      }`}
                    >
                      {point.icon}
                    </div>
                    
                    <h3 className="font-black text-sm uppercase tracking-wider mb-2">
                      {point.title}
                    </h3>
                    
                    <p className={`text-xs leading-relaxed ${
                      point.highlight ? "text-neutral-400" : "text-neutral-500"
                    }`}>
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: IMAGE + CALLOUT */}
          <div className="lg:col-span-5 flex flex-col space-y-8 items-center justify-center relative">
            
            {/* Image Block */}
            <div 
              ref={imageWrapperRef}
              className="w-full h-[450px] relative overflow-hidden bg-neutral-200 shadow-lg rounded-sm"
              style={{ clipPath: "inset(0 0 100% 0)" }}
            >
              <Image
                src="/assets/featureSection1.webp"
                alt="Luxury Real Estate Property Gurgaon"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>

            {/* Subtext description */}
            <p className="text-neutral-500 text-xs leading-relaxed max-w-sm text-center">
              Partner with Gurgaon’s most trusted real estate consultants for RERA approved plots, luxury residential apartments, and high-yield commercial investments.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <button
                className="px-8 py-3.5 bg-black hover:bg-neutral-800 text-white text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-md w-full sm:w-auto"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Book a Consultation
              </button>

              <div className="flex items-center gap-3 bg-white border border-neutral-200 px-5 py-2.5 shadow-sm w-full sm:w-auto justify-center">
                <div className="w-8 h-8 bg-red-500 flex items-center justify-center text-white">
                  <Phone size={14} />
                </div>
                <div className="text-left">
                  <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">Call Us Directly</p>
                  <p className="text-xs font-black text-[#0c0d12] tracking-wider">+91 9211496111</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* ── SECTION 2: RERA APPROVED PLOTS & PROPERTIES ACROSS DELHI NCR ── */}
        <div ref={reraRef} className="bg-[#0c0d12] text-white p-8 md:p-14 relative overflow-hidden shadow-2xl rounded-sm">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-8 flex flex-col space-y-6">
              <div className="flex items-center gap-3">
                <Award className="text-red-500" size={24} />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-red-400">
                  HARERA Regulatory Assurance
                </span>
              </div>

              <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white leading-snug">
                RERA Approved Plots & Properties Across Delhi NCR
              </h3>

              <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                Every property we deal in is thoroughly verified against Haryana Real Estate Regulatory Authority (HARERA) records before it reaches our clients. This means clean titles, verified builder credentials, and full regulatory compliance giving you complete peace of mind with your investment. Our RERA-approved portfolio spans plotted developments, residential apartments, and premium villas across Gurgaon&apos;s most sought-after sectors.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/15 text-xs font-bold uppercase tracking-wider text-white">
                  <CheckCircle2 size={16} className="text-emerald-400" /> Clean Legal Titles
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/15 text-xs font-bold uppercase tracking-wider text-white">
                  <CheckCircle2 size={16} className="text-emerald-400" /> HARERA Verification
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/15 text-xs font-bold uppercase tracking-wider text-white">
                  <CheckCircle2 size={16} className="text-emerald-400" /> Prime Gurgaon Sectors
                </div>
              </div>
            </div>

            {/* Trust Signal Card */}
            <div className="lg:col-span-4 bg-white/5 backdrop-blur-md border border-white/15 p-8 rounded-sm text-center flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-500">
                <ShieldCheck size={32} />
              </div>
              <h4 className="text-base font-black uppercase tracking-wider text-white">100% RERA Verified Portfolio</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Verified HARERA registrations & builder licenses across all ongoing and upcoming plotted developments in Gurgaon.
              </p>
              <div className="w-12 h-[2px] bg-red-500 my-2" />
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">
                ● Verified & Active Registrations
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
