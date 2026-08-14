"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/css";
import "swiper/css/navigation";

gsap.registerPlugin(ScrollTrigger);

const sliderImages = [
  "/assets/image1.jpg",
  "/assets/image2.jpg",
];

export default function TrustCatalogSection() {
  const sectionRef = useRef(null);

  const tagRef = useRef(null);
  const headingRef = useRef(null);
  const counterRef = useRef(null);
  const dividerLeftRef = useRef(null);
  const descRef = useRef(null);

  const leftImageWrapperRef = useRef(null);
  const leftImageRef = useRef(null);
  const leftImageInnerRef = useRef(null);

  const rightImageWrapperRef = useRef(null);
  const rightImageRef = useRef(null);
  const rightImageInnerRef = useRef(null);

  const archTagRef = useRef(null);
  const archHeadingRef = useRef(null);
  const dividerArchRef = useRef(null);
  const archTextRef = useRef(null);

  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  // Stats refs
  const statsRef = useRef(null);
  const statItemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── 1. Tag label fade ─────────────────────────────────────────────
      gsap.fromTo(
        tagRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: tagRef.current, start: "top 85%" },
        }
      );

      // ── 2. SPLIT CHARACTER ANIMATION on heading ───────────────────────
      const headingEl = headingRef.current;
      if (headingEl) {
        const rawText = headingEl.innerText;
        const lines = rawText.split("\n").filter(Boolean);
        headingEl.innerHTML = "";

        lines.forEach((line, li) => {
          const lineDiv = document.createElement("div");
          lineDiv.style.overflow = "hidden";
          lineDiv.style.display = "block";

          [...line].forEach((char) => {
            const span = document.createElement("span");
            span.textContent = char === " " ? "\u00A0" : char;
            span.style.display = "inline-block";
            lineDiv.appendChild(span);
          });

          headingEl.appendChild(lineDiv);
          if (li < lines.length - 1) headingEl.appendChild(document.createElement("br"));
        });

        const chars = headingEl.querySelectorAll("span");
        gsap.fromTo(
          chars,
          { y: "110%", opacity: 0, rotateX: -40 },
          {
            y: "0%",
            opacity: 1,
            rotateX: 0,
            duration: 0.8,
            ease: "power4.out",
            stagger: 0.04,
            scrollTrigger: {
              trigger: headingEl,
              start: "top 80%",
            },
          }
        );
      }

      // ── 3. COUNT-UP ANIMATION ─────────────────────────────────────────
      if (counterRef.current) {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: 1000,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: counterRef.current,
            start: "top 80%",
          },
          onUpdate: () => {
            if (counterRef.current) {
              counterRef.current.textContent = Math.round(obj.val).toLocaleString();
            }
          },
        });
      }

      // ── 4. Description fade ───────────────────────────────────────────
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

      // ── 5. DIVIDER LINE REVEAL ────────────────────────────────────────
      [dividerLeftRef, dividerArchRef].forEach((ref) => {
        if (!ref.current) return;
        gsap.fromTo(
          ref.current,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: 1,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
            },
          }
        );
      });

      // ── 6. LEFT IMAGE — clip reveal + parallax ────────────────────────
      gsap.fromTo(
        leftImageRef.current,
        { clipPath: "inset(0 0 100% 0)" },
        {
          clipPath: "inset(0 0 0% 0)",
          ease: "none",
          scrollTrigger: {
            trigger: leftImageWrapperRef.current,
            start: "top 90%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        leftImageInnerRef.current,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: leftImageWrapperRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // ── 7. RIGHT IMAGE — clip reveal + parallax ───────────────────────
      gsap.fromTo(
        rightImageRef.current,
        { clipPath: "inset(0 0 100% 0)" },
        {
          clipPath: "inset(0 0 0% 0)",
          ease: "none",
          scrollTrigger: {
            trigger: rightImageWrapperRef.current,
            start: "top 90%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        rightImageInnerRef.current,
        { yPercent: -12 },
        {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: rightImageWrapperRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // ── 8. ARCHITECTURE TAG + HEADING ─────────────────────────────────
      if (archTagRef.current) {
        gsap.fromTo(
          archTagRef.current,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: archTagRef.current, start: "top 85%" },
          }
        );
      }

      if (archHeadingRef.current) {
        const lines = archHeadingRef.current.querySelectorAll(".arch-line");
        gsap.fromTo(
          lines,
          (i) => ({ x: i % 2 === 0 ? -120 : 120, opacity: 0 }),
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: archHeadingRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // ── 9. ARCHITECTURE BODY TEXT ─────────────────────────────────────
      gsap.fromTo(
        archTextRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: archTextRef.current,
            start: "top 82%",
          },
        }
      );

      // ── 10. STATS ROW ────────────────────────────────────────────────
      statItemsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: { trigger: statsRef.current, start: "top 85%" },
          }
        );
      });

    });

    // ── 11. MAGNETIC CURSOR on nav buttons ──────────────────────────────
    const magneticBtns = [prevBtnRef.current, nextBtnRef.current];
    const cleanups = [];

    magneticBtns.forEach((btn) => {
      if (!btn) return;

      const handleMove = (e) => {
        const rect = btn.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        gsap.to(btn, { x: dx * 0.35, y: dy * 0.35, duration: 0.3, ease: "power2.out" });
      };

      const handleLeave = () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
      };

      btn.addEventListener("mousemove", handleMove);
      btn.addEventListener("mouseleave", handleLeave);
      cleanups.push(() => {
        btn.removeEventListener("mousemove", handleMove);
        btn.removeEventListener("mouseleave", handleLeave);
      });
    });

    return () => {
      ctx.revert();
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <section
      id="catalogue"
      ref={sectionRef}
      className="w-full bg-[#0c0d12] text-white"
    >

      {/* ══════════════════════════════════════════════════
          STATS BAR — Top accent strip
      ══════════════════════════════════════════════════ */}
      <div ref={statsRef} className="border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { num: "1000+", label: "Deals Closed" },
            { num: "₹500Cr+", label: "Property Value" },
            { num: "98%", label: "Satisfaction" },
            { num: "50+", label: "Projects" },
          ].map((stat, i) => (
            <div
              key={i}
              ref={(el) => (statItemsRef.current[i] = el)}
              className="flex flex-col items-center py-8 border-r border-white/5 last:border-r-0"
            >
              <span className="text-2xl md:text-3xl font-black tracking-tight text-white">
                {stat.num}
              </span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          TRUST SECTION — Two column layout
      ══════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-28">
        <div className="grid md:grid-cols-2 gap-20">

          {/* ── LEFT COLUMN ── */}
          <div className="space-y-10">

            {/* Tag */}
            <div ref={tagRef} className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-white/40" />
              <span className="text-[11px] uppercase tracking-[0.35em] text-white/40 font-bold">
                Why Choose Us
              </span>
            </div>

            {/* Main Heading */}
            <h2
              ref={headingRef}
              className="text-6xl md:text-8xl font-black leading-[0.88] tracking-tight"
              style={{ perspective: "600px" }}
            >
              {`TRUST\nUS`}
            </h2>

            {/* Divider */}
            <div ref={dividerLeftRef} className="w-16 h-[2px] bg-white/20" />

            {/* Description with counter */}
            <div ref={descRef}>
              <p className="text-white/50 text-lg leading-[1.8] max-w-md">
                In the entire history of our agency, we have made more than{" "}
                <span
                  ref={counterRef}
                  className="text-white font-black text-xl"
                >
                  0
                </span>{" "}
                successful deals. We help clients discover modern, luxurious
                spaces that perfectly match their lifestyle and vision.
              </p>
            </div>

            {/* Left Image — clip + parallax */}
            <div
              ref={leftImageWrapperRef}
              className="overflow-hidden mt-4"
            >
              <div
                ref={leftImageRef}
                style={{ clipPath: "inset(0 0 100% 0)" }}
              >
                <div ref={leftImageInnerRef}>
                  <Image
                    src="/assets/image2.jpg"
                    alt="Premium Development"
                    width={1200}
                    height={1500}
                    className="w-full h-[520px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN — Large image ── */}
          <div
            ref={rightImageWrapperRef}
            className="relative flex items-start pt-20"
          >
            <div
              ref={rightImageRef}
              className="overflow-hidden w-full"
              style={{ clipPath: "inset(0 0 100% 0)" }}
            >
              <div ref={rightImageInnerRef}>
                <Image
                  src="/assets/image1.jpg"
                  alt="Luxury Architecture"
                  width={1000}
                  height={1000}
                  className="w-full h-[750px] object-cover"
                />
              </div>
            </div>

            {/* Floating label on right image */}
            <div className="absolute bottom-8 left-8 z-10 bg-[#0c0d12]/80 backdrop-blur-sm px-6 py-4 border border-white/10">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/50 block mb-1">
                Haryana
              </span>
              <span className="text-sm font-black text-white tracking-wide uppercase">
                Premium Plotted Development
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          ARCHITECTURE / CATALOG — Slider section
      ══════════════════════════════════════════════════ */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-28">
          <div className="grid md:grid-cols-2 gap-20 items-center">

            {/* ── Left text column ── */}
            <div>
              {/* Tag */}
              <div ref={archTagRef} className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[2px] bg-white/40" />
                <span className="text-[11px] uppercase tracking-[0.35em] text-white/40 font-bold">
                  Architecture
                </span>
              </div>

              {/* Heading */}
              <h2
                ref={archHeadingRef}
                className="text-6xl md:text-8xl font-black leading-[0.88] tracking-tight mb-8"
                style={{ overflow: "hidden" }}
              >
                <span className="arch-line block">MODERN</span>
                <span className="arch-line block">DESIGN</span>
              </h2>

              {/* Divider */}
              <div ref={dividerArchRef} className="w-16 h-[2px] bg-white/20 mb-8" />

              {/* Description */}
              <p ref={archTextRef} className="text-white/50 text-lg leading-[1.8] max-w-md mb-10">
                Discover innovative architecture and modern living spaces crafted
                with elegance, creativity, and functionality. Every project is
                a statement of premium quality.
              </p>

              {/* Mini features */}
              <div className="flex gap-10">
                {["Quality Materials", "Smart Design", "Green Spaces"].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white/40" />
                    <span className="text-[11px] font-bold tracking-wider uppercase text-white/40">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right slider ── */}
            <div className="relative">
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                  prevEl: ".custom-prev",
                  nextEl: ".custom-next",
                }}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                loop
                className="h-[600px]"
              >
                {sliderImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-[600px] overflow-hidden">
                      <Image
                        src={img}
                        alt={`Architecture Slide ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation buttons — sharp square style */}
              <button
                ref={prevBtnRef}
                className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#0c0d12]/70 backdrop-blur-sm w-12 h-12 flex items-center justify-center text-white text-lg border border-white/10 hover:bg-white hover:text-[#0c0d12] transition-all duration-300"
              >
                ←
              </button>

              <button
                ref={nextBtnRef}
                className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#0c0d12]/70 backdrop-blur-sm w-12 h-12 flex items-center justify-center text-white text-lg border border-white/10 hover:bg-white hover:text-[#0c0d12] transition-all duration-300"
              >
                →
              </button>

              {/* Slide counter label */}
              <div className="absolute bottom-4 right-4 z-20 bg-[#0c0d12]/70 backdrop-blur-sm px-4 py-2 border border-white/10">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">
                  {sliderImages.length} Projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
