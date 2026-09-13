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
                <div className="w-6 h-[2px] bg-gradient-to-r from-[#8F1230] to-[#FF5A67]" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] bg-gradient-to-r from-[#8F1230] to-[#FF5A67] bg-clip-text text-transparent">
                  Your Dedicated Advisor
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black leading-[1.1] uppercase tracking-tight text-[#0c0d12]">
                Why Choose Dee Divine Propinfra <br />
                <span className="bg-gradient-to-r from-[#8F1230] via-[#D9233E] to-[#FF5A67] bg-clip-text text-transparent">as Your Real Estate Consultant</span>
              </h2>

              <p className="text-[#5F6065] text-sm md:text-base leading-relaxed mt-6">
                At Dee Divine Propinfra, we go beyond just listing properties — we act as your dedicated advisor throughout the investment journey. Our team combines local market expertise with complete transparency, ensuring every property we recommend is legally verified, RERA-compliant, and aligned with your financial goals. From first-time homebuyers to seasoned investors, we build long-term relationships based on trust, not just transactions.
              </p>
            </div>

            {/* 5 Supporting Points Grid */}
            <div className="grid gap-5 sm:grid-cols-2">
              {supportingPoints.map((point, index) => (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className={`group flex flex-col justify-between p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(217,35,62,0.1)] hover:-translate-y-1 hover:border-[#D9233E]/40 transition-all duration-500 rounded-2xl border ${point.highlight
                      ? "bg-gradient-to-br from-[#08090C] via-[#240A12] to-[#5A1022] border-[#D9233E]/20 text-white sm:col-span-2 md:col-span-1 relative overflow-hidden"
                      : "bg-white/60 backdrop-blur-md border-neutral-200/60 text-[#0c0d12]"
                    }`}
                >
                  {/* Subtle red inner glow for the dark card */}
                  {point.highlight && (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,35,62,0.15)_0%,transparent_60%)] pointer-events-none"></div>
                  )}

                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-xl mb-5 transition-transform duration-300 group-hover:scale-105 ${point.highlight
                          ? "bg-gradient-to-br from-[#8F1230] to-[#D9233E] text-white border border-white/10 shadow-[0_4px_12px_rgba(217,35,62,0.4)]"
                          : "bg-gradient-to-br from-[#8F1230]/10 to-[#FF5A67]/5 text-[#D9233E] border border-[#D9233E]/20"
                        }`}
                    >
                      {point.icon}
                    </div>

                    <h3 className={`font-black text-[15px] uppercase tracking-wider mb-2 ${point.highlight ? "text-white" : "text-[#0c0d12]"}`}>
                      {point.title}
                    </h3>

                    <p className={`text-[13px] leading-relaxed ${point.highlight ? "text-[#E5E7EB]" : "text-[#6B6D72]"}`}>
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
              className="w-full h-[450px] relative bg-white/50 backdrop-blur-md shadow-[0_8px_40px_rgba(0,0,0,0.08)] rounded-[20px] border border-neutral-200/60 p-2"
              style={{ clipPath: "inset(0 0 100% 0)" }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-neutral-100">
                <Image
                  src="/assets/featureSection1.webp"
                  alt="Luxury Real Estate Property Gurgaon"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
            </div>

            {/* Subtext description */}
            <p className="text-[#5F6065] text-sm leading-relaxed max-w-sm text-center">
              Partner with Gurgaon’s most trusted real estate consultants for RERA approved plots, luxury residential apartments, and high-yield commercial investments.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <button
                className="px-8 py-3.5 bg-gradient-to-r from-[#8F1230] via-[#D9233E] to-[#FF5A67] hover:shadow-[0_8px_25px_rgba(217,35,62,0.4)] text-white rounded-xl text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 w-full sm:w-auto"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Book a Consultation
              </button>

              <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md border border-neutral-200/60 rounded-xl px-6 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_25px_rgba(217,35,62,0.1)] transition-all duration-300 w-full sm:w-auto justify-center group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8F1230]/10 to-[#FF5A67]/10 flex items-center justify-center text-[#D9233E] group-hover:scale-110 transition-transform duration-300">
                  <Phone size={16} />
                </div>
                <div className="text-left">
                  <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">Call Us Directly</p>
                  <p className="text-sm font-black text-[#0c0d12] tracking-wider">+91 9211496111</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* ── SECTION 2: RERA APPROVED PLOTS & PROPERTIES ACROSS DELHI NCR ── */}
        <div ref={reraRef} className="group bg-white/70 backdrop-blur-xl text-[#0c0d12] p-8 md:p-14 relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(217,35,62,0.08)] border border-neutral-200/60 rounded-3xl transition-all duration-500">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(217,35,62,0.08)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#8F1230]/0 via-[#FF5A67]/[0.02] to-[#8F1230]/[0.05] pointer-events-none"></div>

          <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-8 flex flex-col space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8F1230]/10 to-[#FF5A67]/10 flex items-center justify-center text-[#D9233E]">
                  <Award size={20} />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] bg-gradient-to-r from-[#8F1230] to-[#FF5A67] bg-clip-text text-transparent">
                  HARERA Regulatory Assurance
                </span>
              </div>

              <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-[#0c0d12] leading-snug">
                RERA Approved Plots & Properties Across Delhi NCR
              </h3>

              <p className="text-[#5F6065] text-sm md:text-base leading-relaxed">
                Every property we deal in is thoroughly verified against Haryana Real Estate Regulatory Authority (HARERA) records before it reaches our clients. This means clean titles, verified builder credentials, and full regulatory compliance giving you complete peace of mind with your investment. Our RERA-approved portfolio spans plotted developments, residential apartments, and premium villas across Gurgaon&apos;s most sought-after sectors.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full border border-[#D9233E]/20 text-[11px] font-bold uppercase tracking-wider text-[#0c0d12] shadow-sm hover:shadow-[0_4px_15px_rgba(217,35,62,0.15)] hover:-translate-y-0.5 transition-all duration-300">
                  <CheckCircle2 size={16} className="text-[#D9233E]" /> Clean Legal Titles
                </div>
                <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full border border-[#D9233E]/20 text-[11px] font-bold uppercase tracking-wider text-[#0c0d12] shadow-sm hover:shadow-[0_4px_15px_rgba(217,35,62,0.15)] hover:-translate-y-0.5 transition-all duration-300">
                  <CheckCircle2 size={16} className="text-[#D9233E]" /> HARERA Verification
                </div>
                <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full border border-[#D9233E]/20 text-[11px] font-bold uppercase tracking-wider text-[#0c0d12] shadow-sm hover:shadow-[0_4px_15px_rgba(217,35,62,0.15)] hover:-translate-y-0.5 transition-all duration-300">
                  <CheckCircle2 size={16} className="text-[#D9233E]" /> Prime Gurgaon Sectors
                </div>
              </div>
            </div>

            {/* Trust Signal Card */}
            <div className="lg:col-span-4 bg-white/80 backdrop-blur-md border border-[#D9233E]/20 p-8 rounded-3xl text-center flex flex-col items-center justify-center space-y-5 shadow-[0_8px_30px_rgba(217,35,62,0.06)] hover:shadow-[0_12px_40px_rgba(217,35,62,0.12)] hover:-translate-y-1 transition-all duration-500 relative overflow-hidden group/card">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8F1230]/10 to-[#FF5A67]/10 border border-[#D9233E]/20 flex items-center justify-center text-[#D9233E] group-hover/card:scale-110 transition-transform duration-500 shadow-sm">
                <ShieldCheck size={30} />
              </div>
              <h4 className="text-[15px] font-black uppercase tracking-wider text-[#0c0d12]">100% RERA Verified Portfolio</h4>
              <p className="text-[13px] text-[#6B6D72] leading-relaxed">
                Verified HARERA registrations & builder licenses across all ongoing and upcoming plotted developments in Gurgaon.
              </p>
              <div className="w-12 h-[2px] bg-gradient-to-r from-[#8F1230] to-[#FF5A67] my-2" />
              <div className="flex items-center gap-2 text-[#D9233E]">
                <div className="w-2 h-2 rounded-full bg-[#D9233E] animate-pulse"></div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest">
                  Verified & Active Registrations
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
