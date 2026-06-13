"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    number: "01",
    title: "Understanding Your Vision",
    desc: "We deeply understand your requirements — budget, location, lifestyle goals.",
  },
  {
    number: "02",
    title: "Curated Selection",
    desc: "Our expert team recommends only truly premium properties — no compromises.",
  },
  {
    number: "03",
    title: "Complete Transparency",
    desc: "Every document, every clause, every payment — guided with full clarity.",
  },
  {
    number: "04",
    title: "Seamless Handover",
    desc: "From possession to post-possession — we stay with you throughout.",
  },
];

export default function HowWeWorkSection() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const circleImageRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const dotsRef = useRef([]);
  const stepsRef = useRef([]);
  const stepHeadingRef = useRef(null);
  const dividerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── DARK → WHITE background transition on scroll ──────────────
      gsap.to(bgRef.current, {
        backgroundColor: "#ffffff",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "top 10%",
          scrub: true,
        },
      });

      // Text color transition (white → dark)
      gsap.to(sectionRef.current, {
        color: "#0c0d12",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "top 10%",
          scrub: true,
        },
      });

      // ── Circular image — scale + clip reveal ──────────────────────
      if (circleImageRef.current) {
        gsap.fromTo(
          circleImageRef.current,
          { scale: 0.6, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: circleImageRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // ── Heading reveal ────────────────────────────────────────────
      if (headingRef.current) {
        const lines = headingRef.current.querySelectorAll(".hw-line");
        gsap.fromTo(
          lines,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power4.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // ── Description fade ──────────────────────────────────────────
      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: descRef.current, start: "top 82%" },
        }
      );

      // ── Button slide-in ───────────────────────────────────────────
      gsap.fromTo(
        btnRef.current,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: btnRef.current, start: "top 88%" },
        }
      );

      // ── Decorative dots stagger ───────────────────────────────────
      dotsRef.current.forEach((dot, i) => {
        if (!dot) return;
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: "back.out(2)",
            delay: i * 0.06,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
            },
          }
        );
      });

      // ── Divider line ──────────────────────────────────────────────
      if (dividerRef.current) {
        gsap.fromTo(
          dividerRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power3.inOut",
            scrollTrigger: { trigger: dividerRef.current, start: "top 85%" },
          }
        );
      }

      // ── Steps heading ─────────────────────────────────────────────
      if (stepHeadingRef.current) {
        gsap.fromTo(
          stepHeadingRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: stepHeadingRef.current, start: "top 85%" },
          }
        );
      }

      // ── Step items stagger ────────────────────────────────────────
      stepsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: { trigger: el, start: "top 88%" },
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Decorative dot positions (scattered pattern like reference)
  const dotPositions = [
    { top: "18%", left: "8%" },
    { top: "28%", left: "12%" },
    { top: "38%", left: "6%" },
    { top: "48%", left: "14%" },
    { top: "55%", left: "4%" },
    { top: "62%", left: "10%" },
    { top: "72%", left: "7%" },
    { top: "25%", left: "42%" },
    { top: "70%", left: "38%" },
    { top: "80%", left: "44%" },
    { top: "85%", left: "12%" },
    { top: "15%", left: "35%" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden text-white"
    >
      {/* Animated background layer */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-[#0c0d12] pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* ── Decorative red dots ── */}
      {dotPositions.map((pos, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          className="absolute w-2 h-2 bg-red-500 pointer-events-none"
          style={{
            top: pos.top,
            left: pos.left,
            zIndex: 1,
            borderRadius: "50%",
          }}
        />
      ))}

      {/* ══════════════════════════════════════════════════
          HERO AREA — Circular image + heading
      ══════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT — Circular Image */}
          <div className="flex justify-center md:justify-start">
            <div
              ref={circleImageRef}
              className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px]"
            >
              {/* Gray semi-circle behind */}
              <div
                className="absolute top-4 -left-6 w-full h-full"
                style={{
                  borderRadius: "50%",
                  background: "rgba(150,150,150,0.2)",
                  zIndex: 0,
                }}
              />
              {/* Main circular image */}
              <div
                className="relative w-full h-full overflow-hidden"
                style={{ borderRadius: "50%", zIndex: 1 }}
              >
                <Image
                  src="/assets/image1.jpg"
                  alt="Dee Divine Groups Architecture"
                  fill
                  className="object-cover contrast-110"
                />
              </div>
            </div>
          </div>

          {/* RIGHT — Heading + Description */}
          <div>
            <h2
              ref={headingRef}
              className="text-4xl md:text-6xl font-black uppercase leading-[1.05] mb-8"
              style={{ fontFamily: "var(--font-geist-sans), Arial, sans-serif" }}
            >
              <span className="hw-line block">PREMIUM PLOTS</span>
              <span className="hw-line block">AND LUXURY</span>
              <span className="hw-line block">LIVING SPACES</span>
            </h2>

            <p
              ref={descRef}
              className="text-base md:text-lg leading-relaxed max-w-md opacity-60 mb-8"
            >
              Dee Divine Groups is a premium real estate company
              based in Haryana, crafting plotted developments and
              luxury residential spaces. We don&apos;t just build
              structures — we build your future.
            </p>

            <button
              ref={btnRef}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0c0d12] text-white text-xs font-black uppercase tracking-[0.2em] border border-white/20 hover:bg-white hover:text-[#0c0d12] transition-all duration-400"
              style={{ borderRadius: 0 }}
            >
              <span>EXPLORE MORE</span>
              <span className="text-base">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          DIVIDER
      ══════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        <div
          ref={dividerRef}
          className="w-full h-[1px] bg-current opacity-15"
        />
      </div>

      {/* ══════════════════════════════════════════════════
          HOW WE WORK — Process Steps
      ══════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-24">

        <h3
          ref={stepHeadingRef}
          className="text-xs font-black tracking-[0.4em] uppercase opacity-40 mb-16"
        >
          How We Work
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {processSteps.map((step, i) => (
            <div
              key={i}
              ref={(el) => (stepsRef.current[i] = el)}
              className="group relative p-8 border-l border-current/10 first:border-l-0 hover:bg-white/5 transition-colors duration-300"
              style={{ borderRadius: 0 }}
            >
              {/* Step Number */}
              <span className="text-[56px] font-black leading-none opacity-[0.07] block mb-6 select-none">
                {step.number}
              </span>

              {/* Small accent line */}
              <div className="w-8 h-[2px] bg-red-500 mb-5" />

              {/* Title */}
              <h4 className="text-lg font-black uppercase tracking-wide leading-tight mb-3">
                {step.title}
              </h4>

              {/* Description */}
              <p className="text-sm leading-relaxed opacity-50">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          BOTTOM STRIP
      ══════════════════════════════════════════════════ */}
      <div className="relative z-10 border-t border-current/10">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm opacity-40 tracking-wide max-w-md text-center md:text-left">
            Trusted by 1000+ families across Haryana for premium plotted developments and luxury homes.
          </p>
          <div className="flex items-center gap-10 text-center">
            <div>
              <span className="text-3xl font-black block">1000+</span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Deals</span>
            </div>
            <div className="w-[1px] h-8 bg-current opacity-15" />
            <div>
              <span className="text-3xl font-black block">98%</span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Satisfaction</span>
            </div>
            <div className="w-[1px] h-8 bg-current opacity-15" />
            <div>
              <span className="text-3xl font-black block">5+</span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Years</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
