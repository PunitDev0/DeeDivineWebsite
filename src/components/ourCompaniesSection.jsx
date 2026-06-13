"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Custom circular logos inspired by mockup
const DevelopersLogo = () => (
  <div className="w-16 h-16 rounded-full bg-[#fdfaf2] border border-[#b8860b]/20 flex items-center justify-center text-[#b8860b] shadow-sm">
    <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="2.5" />
      <path d="M38 70V45L50 32L62 45V70" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M50 32V70" stroke="currentColor" strokeWidth="2" />
      <path d="M44 48H56" stroke="currentColor" strokeWidth="1.5" />
      <path d="M44 58H56" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  </div>
);

const PropInfraLogo = () => (
  <div className="w-16 h-16 rounded-full bg-[#f2f6fa] border border-[#0055a5]/20 flex items-center justify-center text-[#0055a5] shadow-sm">
    <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 75V25L42 15L52 25V75" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M52 35H68V75" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M42 15V75" stroke="currentColor" strokeWidth="2" />
      <path d="M32 45H52" stroke="currentColor" strokeWidth="2" />
      <path d="M32 60H52" stroke="currentColor" strokeWidth="2" />
    </svg>
  </div>
);

const AstroverseLogo = () => (
  <div className="w-16 h-16 rounded-full bg-[#f2faf6] border border-[#008055]/20 flex items-center justify-center text-[#008055] shadow-sm">
    <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 25H52C65 25 70 32 70 50C70 68 65 75 52 75H32V25Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M45 25V75" stroke="currentColor" strokeWidth="2" />
      <path d="M32 50H58" stroke="currentColor" strokeWidth="2.5" />
      <path d="M58 25L45 50L58 75" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  </div>
);

const AILogo = () => (
  <div className="w-16 h-16 rounded-full bg-[#faf2f2] border border-[#e65c00]/20 flex items-center justify-center text-[#e65c00] shadow-sm">
    <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="28" y="52" width="7" height="23" fill="currentColor" />
      <rect x="42" y="38" width="7" height="37" fill="currentColor" />
      <rect x="56" y="24" width="7" height="51" fill="currentColor" />
      <rect x="70" y="10" width="7" height="65" fill="currentColor" />
    </svg>
  </div>
);

const companies = [
  {
    name: "Dee Divine Developers",
    tag: "Construction & Development",
    desc: "Premium plotted developments and luxury residential communities crafted for tomorrow.",
    accent: "#b8860b",
    number: "01",
    logo: DevelopersLogo,
    image: "/assets/image1.jpg",
  },
  {
    name: "Dee Divine PropInfra",
    tag: "Real Estate & Infrastructure",
    desc: "Elegant homes that blend modern design with comfort, security and community lifestyle.",
    accent: "#0055a5",
    number: "02",
    logo: PropInfraLogo,
    image: "/assets/image2.jpg",
  },
  {
    name: "Dee Divine Astroverse",
    tag: "Astrology & Spiritual Wellness",
    desc: "Building strong foundations with infrastructure guidance that empowers and aligns communities.",
    accent: "#008055",
    number: "03",
    logo: AstroverseLogo,
    image: "/assets/heroImage.png",
  },
  {
    name: "Dee Divine AI",
    tag: "Technology & Innovation",
    desc: "Maximizing value through strategic tech management, automated processes and long-term growth.",
    accent: "#e65c00",
    number: "04",
    logo: AILogo,
    image: "/assets/image1.jpg",
  },
];

export default function OurCompaniesSection() {
  const sectionRef = useRef(null);
  const leftColumnRef = useRef(null);
  const cardRefs = useRef([]);
  const bannerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Left Column entry ──
      gsap.fromTo(
        leftColumnRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftColumnRef.current,
            start: "top 80%",
          },
        }
      );

      // ── Directional Card Entrance animations by screen size ──
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // Card 0: Enters from Left
        if (cardRefs.current[0]) {
          gsap.fromTo(
            cardRefs.current[0],
            { opacity: 0, x: -100 },
            {
              opacity: 1,
              x: 0,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: cardRefs.current[0],
                start: "top 85%",
              },
            }
          );
        }

        // Card 1: Enters from Right
        if (cardRefs.current[1]) {
          gsap.fromTo(
            cardRefs.current[1],
            { opacity: 0, x: 100 },
            {
              opacity: 1,
              x: 0,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: cardRefs.current[1],
                start: "top 85%",
              },
            }
          );
        }

        // Card 2: Enters from Down
        if (cardRefs.current[2]) {
          gsap.fromTo(
            cardRefs.current[2],
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: cardRefs.current[2],
                start: "top 85%",
              },
            }
          );
        }

        // Card 3: Enters from Down
        if (cardRefs.current[3]) {
          gsap.fromTo(
            cardRefs.current[3],
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: cardRefs.current[3],
                start: "top 85%",
              },
            }
          );
        }
      });

      mm.add("(max-width: 1023px)", () => {
        // Mobile / Tablet animations - simple y-slide
        cardRefs.current.forEach((el, i) => {
          if (!el) return;
          gsap.fromTo(
            el,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
              },
            }
          );
        });
      });

      // ── Banner slide up ──
      gsap.fromTo(
        bannerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: bannerRef.current, start: "top 95%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#f8f9fa] text-[#0c0d12] py-28 relative overflow-hidden"
    >
      {/* Container */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">

          {/* LEFT SIDE: Header and Watermark */}
          <div
            ref={leftColumnRef}
            className="lg:col-span-4 flex flex-col justify-between relative min-h-[400px] lg:min-h-full py-4 z-10"
          >
            {/* Watermark in bottom left */}
            <div className="absolute left-0 bottom-0 w-72 h-72 opacity-[0.03] grayscale pointer-events-none z-0">
              <Image
                src="/assets/heroImage.png"
                alt="Architecture Watermark"
                fill
                className="object-contain object-left-bottom"
              />
            </div>

            <div className="relative z-10">
              {/* Tag */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-[2px] bg-red-500" />
                <span className="text-[11px] uppercase tracking-[0.35em] text-[#e63946] font-extrabold">
                  Our Ecosystem
                </span>
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] uppercase tracking-tight text-[#0c0d12] mb-6">
                The Dee Divine<br />Groups Family
              </h2>

              {/* Divider */}
              <div className="w-16 h-[2px] bg-red-500 mb-8" />

              {/* Description */}
              <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-sm">
                Four specialized companies. One shared vision — to deliver excellence across every dimension of real estate.
              </p>
            </div>

            {/* Discover CTA Button */}
            <button className="relative z-10 mt-10 px-8 py-4 bg-[#0c0d12] text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-[#1f202b] active:scale-95 transition-all duration-300 self-start">
              Discover Our Companies →
            </button>
          </div>

          {/* RIGHT SIDE: 4 Vertical Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 z-10">
            {companies.map((company, i) => {
              const LogoComponent = company.logo;
              return (
                <div
                  key={i}
                  ref={(el) => (cardRefs.current[i] = el)}
                  className="bg-white border border-neutral-100 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full group"
                >
                  <div className="p-8 pb-4">
                    {/* Circle Logo */}
                    <div className="mb-6 flex justify-start">
                      <LogoComponent />
                    </div>

                    {/* Title */}
                    <h3 className="text-[14px] font-black uppercase tracking-wider text-[#0c0d12] mb-4">
                      {company.name}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-500 text-[13px] leading-relaxed mb-6">
                      {company.desc}
                    </p>

                    {/* Number + Red line */}
                    <div className="flex flex-col items-start gap-1">
                      <span className="text-xl font-black text-neutral-200">
                        {company.number}
                      </span>
                      <div className="w-6 h-[2px] bg-red-500" />
                    </div>
                  </div>

                  {/* Grayscale architectural image */}
                  <div className="relative w-full h-44 overflow-hidden mt-auto">
                    <Image
                      src={company.image}
                      alt={company.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* BOTTOM STATS BANNER */}
        <div
          ref={bannerRef}
          className="w-full bg-[#0c0d12] text-white py-10 px-8 lg:px-12 mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 divide-y xl:divide-y-0 xl:divide-x divide-white/10 relative z-10"
        >
          {/* Stat 1 */}
          <div className="flex items-center gap-4 xl:justify-center pt-6 md:pt-0 first:pt-0">
            <div className="text-red-500 flex-shrink-0">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] font-black uppercase tracking-wider text-white">4 Companies</span>
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">One Vision</span>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-4 xl:justify-center pt-6 xl:pt-0 xl:pl-8">
            <div className="text-red-500 flex-shrink-0">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] font-black uppercase tracking-wider text-white">1,000+</span>
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Successful Deals</span>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-4 xl:justify-center pt-6 xl:pt-0 xl:pl-8">
            <div className="text-red-500 flex-shrink-0">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] font-black uppercase tracking-wider text-white">Premium</span>
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Quality & Trust</span>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-4 xl:justify-center pt-6 xl:pt-0 xl:pl-8">
            <div className="text-red-500 flex-shrink-0">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] font-black uppercase tracking-wider text-white">Future-Ready</span>
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Innovation & Growth</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
