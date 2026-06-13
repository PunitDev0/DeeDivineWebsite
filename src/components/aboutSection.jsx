"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  "Customer-First Approach",
  "Innovation-Led Growth",
  "Trusted Business Practices",
  "Commitment to Excellence",
  "Long-Term Vision",
  "Professional Expertise",
  "Sustainable Development",
  "Strong Industry Network",
];

const businesses = [
  {
    number: "01",
    name: "Dee Divine Propinfra Pvt. Ltd.",
    desc: "Delivers reliable and customer-focused solutions with a commitment to transparency, professionalism, and long-term value creation.",
    accent: "#0055a5",
  },
  {
    number: "02",
    name: "Dee Divine Developers",
    desc: "Brings together expertise, creativity, and strategic planning to deliver quality-driven projects with modern standards.",
    accent: "#b8860b",
  },
  {
    number: "03",
    name: "Dee Divine Astroverse",
    desc: "Combines traditional knowledge with personalized guidance through astrology and numerology consultations to empower decisions.",
    accent: "#008055",
  },
  {
    number: "04",
    name: "Dee Divine Groups",
    desc: "As the parent organization, provides strategic direction and operational excellence while exploring new opportunities.",
    accent: "#e63946",
  },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const aboutBlockRef = useRef(null);
  const businessRefs = useRef([]);
  const valueRefs = useRef([]);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const closingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero headline
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: headlineRef.current, start: "top 85%" } }
      );

      // About block
      gsap.fromTo(
        aboutBlockRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: aboutBlockRef.current, start: "top 85%" } }
      );

      // Business cards
      businessRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, x: i % 2 === 0 ? -60 : 60 },
          { opacity: 1, x: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } }
        );
      });

      // Values stagger
      gsap.fromTo(
        valueRefs.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: valueRefs.current[0], start: "top 88%" },
        }
      );

      // Mission + Vision
      [missionRef, visionRef].forEach((ref, i) => {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, delay: i * 0.15, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } }
        );
      });

      // Closing
      gsap.fromTo(
        closingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: closingRef.current, start: "top 90%" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#f8f9fa] text-[#0c0d12]">

      {/* ── HERO HEADLINE ── */}
      <div ref={headlineRef} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-28 pb-20 border-b border-neutral-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-6 h-[2px] bg-red-500" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#e63946] font-extrabold">About Us</span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[1] tracking-tight text-[#0c0d12] max-w-4xl mb-6">
          One Vision.<br />Multiple Ventures.<br />
          <span className="text-neutral-300">Endless Possibilities.</span>
        </h1>
        <p className="text-neutral-500 text-base md:text-lg leading-relaxed max-w-2xl mt-8">
          At Dee Divine Groups, we bring together innovative businesses that create value, inspire growth, and deliver excellence across diverse industries. Our group companies work with a shared commitment to quality, trust, and long-term success.
        </p>
      </div>

      {/* ── ABOUT BLOCK ── */}
      <div ref={aboutBlockRef} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-24 grid lg:grid-cols-2 gap-16 items-center border-b border-neutral-200">
        <div>
          <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight tracking-tight mb-6">
            Building Businesses<br />That Create Impact
          </h2>
          <div className="w-12 h-[2px] bg-red-500 mb-8" />
          <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-5">
            Dee Divine Groups is a dynamic business group driven by innovation, integrity, and growth. We operate through specialized companies that serve different sectors while sharing a common purpose — creating meaningful opportunities and delivering exceptional experiences.
          </p>
          <p className="text-neutral-500 text-sm md:text-base leading-relaxed">
            Through our diverse portfolio, we focus on sustainable growth, customer satisfaction, and industry leadership. Every venture under our group reflects our dedication to excellence and our vision for a brighter future.
          </p>
        </div>

        {/* Accent block */}
        <div className="bg-[#0c0d12] text-white p-10 lg:p-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full translate-x-16 -translate-y-16" />
          <p className="text-[11px] uppercase tracking-[0.35em] text-red-400 font-extrabold mb-4">Our Purpose</p>
          <p className="text-2xl md:text-3xl font-black uppercase leading-snug mb-6">
            Our Businesses,<br />One Shared Vision
          </p>
          <div className="w-10 h-[2px] bg-red-500" />
        </div>
      </div>

      {/* ── BUSINESSES GRID ── */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-24 border-b border-neutral-200">
        <div className="grid md:grid-cols-2 gap-6">
          {businesses.map((b, i) => (
            <div
              key={i}
              ref={(el) => (businessRefs.current[i] = el)}
              className="bg-white border border-neutral-100 p-8 hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-5xl font-black text-neutral-100 group-hover:text-neutral-200 transition-colors">{b.number}</span>
                <div className="w-8 h-[2px] mt-3" style={{ backgroundColor: b.accent }} />
              </div>
              <h3 className="text-[15px] font-black uppercase tracking-wider text-[#0c0d12] mb-3">{b.name}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── VALUES ── */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-24 border-b border-neutral-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-[2px] bg-red-500" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#e63946] font-extrabold">Why Choose Us</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-14 max-w-lg leading-tight">
          The Values That<br />Drive Us Forward
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <div
              key={i}
              ref={(el) => (valueRefs.current[i] = el)}
              className="border border-neutral-200 px-5 py-4 bg-white hover:border-red-500 hover:shadow-sm transition-all duration-300"
            >
              <div className="w-5 h-[2px] bg-red-500 mb-3" />
              <p className="text-[13px] font-bold text-[#0c0d12] tracking-wide">{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── MISSION & VISION ── */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-24 grid lg:grid-cols-2 gap-8 border-b border-neutral-200">
        <div ref={missionRef} className="bg-[#0c0d12] text-white p-10 lg:p-14 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-red-500/5 rounded-full -translate-x-20 translate-y-20" />
          <p className="text-[11px] uppercase tracking-[0.35em] text-red-400 font-extrabold mb-4">Our Mission</p>
          <h2 className="text-2xl md:text-3xl font-black uppercase leading-snug mb-6">
            Empowering Growth<br />Through Excellence
          </h2>
          <div className="w-10 h-[2px] bg-red-500 mb-8" />
          <p className="text-neutral-400 text-sm leading-relaxed">
            Our mission is to build successful businesses that create lasting value for customers, partners, and communities. We strive to foster innovation, encourage growth, and maintain the highest standards of integrity across all our ventures.
          </p>
        </div>

        <div ref={visionRef} className="border border-neutral-200 bg-white p-10 lg:p-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/5 rounded-full translate-x-20 -translate-y-20" />
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#e63946] font-extrabold mb-4">Our Vision</p>
          <h2 className="text-2xl md:text-3xl font-black uppercase leading-snug mb-6 text-[#0c0d12]">
            Creating a Future of<br />Opportunity and Success
          </h2>
          <div className="w-10 h-[2px] bg-red-500 mb-8" />
          <p className="text-neutral-500 text-sm leading-relaxed">
            We envision Dee Divine Groups as a trusted and respected business group known for excellence, innovation, and positive impact. Our goal is to expand our reach, strengthen our businesses, and create opportunities that contribute to long-term success.
          </p>
        </div>
      </div>

      {/* ── CLOSING ── */}
      <div ref={closingRef} className="bg-[#0c0d12] text-white py-24 px-6 md:px-12 lg:px-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-6 h-[2px] bg-red-500" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-red-400 font-extrabold">Together</span>
            <div className="w-6 h-[2px] bg-red-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight tracking-tight mb-6">
            We Build a<br />Better Tomorrow
          </h2>
          <div className="w-12 h-[2px] bg-red-500 mx-auto mb-8" />
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-10">
            At Dee Divine Groups, every venture reflects our passion for growth, commitment to quality, and dedication to creating meaningful impact. As we continue to evolve, we remain focused on building strong businesses, empowering people, and shaping a future filled with opportunity.
          </p>
          <p className="text-white/30 text-xs uppercase tracking-[0.4em] font-bold">
            Dee Divine Groups — One Vision, Multiple Ventures, Lasting Success
          </p>
        </div>
      </div>

    </section>
  );
}
