"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Visit Us",
    value: "Haryana, India",
    sub: "Premium Office Location",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Call Us",
    value: "+91 98XXX XXXXX",
    sub: "Mon – Sat, 10am – 7pm",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email Us",
    value: "info@deedivine.com",
    sub: "We reply within 24 hours",
  },
];

export default function ContactSection() {
  const sectionRef = useRef(null);
  const tagRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const formRef = useRef(null);
  const cardRefs = useRef([]);
  const mapRef = useRef(null);
  const footerRef = useRef(null);
  const dividerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Tag label fade ──
      if (tagRef.current) {
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
      }

      // ── Heading lines reveal ──
      if (headingRef.current) {
        const lines = headingRef.current.querySelectorAll(".ct-line");
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

      // ── Description fade ──
      if (descRef.current) {
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
      }

      // ── Form slide up ──
      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: formRef.current, start: "top 88%" },
          }
        );
      }

      // ── Contact cards stagger ──
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            delay: i * 0.12,
            scrollTrigger: { trigger: el, start: "top 90%" },
          }
        );
      });

      // ── Map image reveal ──
      if (mapRef.current) {
        gsap.fromTo(
          mapRef.current,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            ease: "none",
            scrollTrigger: {
              trigger: mapRef.current,
              start: "top 90%",
              end: "bottom 60%",
              scrub: 1,
            },
          }
        );
      }

      // ── Divider line reveal ──
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

      // ── Footer fade ──
      if (footerRef.current) {
        gsap.fromTo(
          footerRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: footerRef.current, start: "top 95%" },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="w-full bg-white text-[#0c0d12] relative overflow-hidden"
    >
      {/* ── Decorative background pattern ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, rgba(230,57,70,0.3) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-[0.03]"
          style={{
            background:
              "radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ══════════════════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* ── LEFT COLUMN — Text + Contact Cards ── */}
          <div className="space-y-10">
            {/* Tag */}
            <div ref={tagRef} className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-red-500" />
              <span className="text-[11px] uppercase tracking-[0.35em] text-[#e63946] font-extrabold">
                Get In Touch
              </span>
            </div>

            {/* Big Heading */}
            <h2
              ref={headingRef}
              className="text-5xl md:text-7xl font-black uppercase leading-[1.05] tracking-tight text-[#0c0d12]"
              style={{
                fontFamily: "var(--font-geist-sans), Arial, sans-serif",
              }}
            >
              <span className="ct-line block">LET&apos;S BUILD</span>
              <span className="ct-line block text-neutral-300">YOUR DREAM</span>
              <span className="ct-line block">
                <span className="text-[#e63946]">TOGETHER</span>
              </span>
            </h2>

            {/* Description */}
            <p
              ref={descRef}
              className="text-neutral-500 text-base md:text-lg leading-[1.8] max-w-md"
            >
              Whether you&apos;re looking for premium plots, luxury homes, or
              investment opportunities — our team is ready to guide you every
              step of the way.
            </p>

            {/* ── Contact Info Cards ── */}
            <div className="space-y-4 pt-4">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  ref={(el) => (cardRefs.current[i] = el)}
                  className="group flex items-start gap-5 p-6 border border-neutral-100 hover:border-neutral-200 bg-[#f8f9fa] hover:bg-neutral-100 transition-all duration-400"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-white flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all duration-300 shadow-sm">
                    {info.icon}
                  </div>

                  {/* Text */}
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400 mb-1">
                      {info.label}
                    </span>
                    <span className="text-sm font-black text-[#0c0d12] tracking-wide uppercase">
                      {info.value}
                    </span>
                    <span className="text-[11px] text-neutral-400 mt-1">
                      {info.sub}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN — Contact Form ── */}
          <div className="flex flex-col justify-center">
            <div
              ref={formRef}
              className="bg-[#f8f9fa] border border-neutral-100 p-10 md:p-14"
            >
              {/* Form header */}
              <div className="mb-10">
                <h3 className="text-lg font-black uppercase tracking-[0.15em] text-[#0c0d12] mb-2">
                  Send Us a Message
                </h3>
                <div className="w-10 h-[2px] bg-red-500" />
              </div>

              <form className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-neutral-200 focus:border-red-500 pb-3 text-sm text-[#0c0d12] placeholder:text-neutral-300 outline-none transition-colors duration-300"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-transparent border-b border-neutral-200 focus:border-red-500 pb-3 text-sm text-[#0c0d12] placeholder:text-neutral-300 outline-none transition-colors duration-300"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className="w-full bg-transparent border-b border-neutral-200 focus:border-red-500 pb-3 text-sm text-[#0c0d12] placeholder:text-neutral-300 outline-none transition-colors duration-300"
                  />
                </div>

                {/* Interest Dropdown */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400 block">
                    Interested In
                  </label>
                  <select className="w-full bg-transparent border-b border-neutral-200 focus:border-red-500 pb-3 text-sm text-neutral-400 outline-none transition-colors duration-300 appearance-none cursor-pointer">
                    <option value="" className="bg-white">
                      Select your interest
                    </option>
                    <option value="plots" className="bg-white">
                      Premium Plots
                    </option>
                    <option value="homes" className="bg-white">
                      Luxury Homes
                    </option>
                    <option value="investment" className="bg-white">
                      Investment
                    </option>
                    <option value="commercial" className="bg-white">
                      Commercial Spaces
                    </option>
                    <option value="other" className="bg-white">
                      Other
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400 block">
                    Message
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Tell us about your requirements..."
                    className="w-full bg-transparent border-b border-neutral-200 focus:border-red-500 pb-3 text-sm text-[#0c0d12] placeholder:text-neutral-300 outline-none resize-none transition-colors duration-300"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-6 px-8 py-5 bg-[#0c0d12] text-white text-xs font-black uppercase tracking-[0.25em] hover:bg-[#1f202b] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <span>Submit Enquiry</span>
                  <span className="text-base group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          IMAGE STRIP — Full-width architectural image
      ══════════════════════════════════════════════════ */}
      <div className="relative z-10">
        <div
          ref={mapRef}
          className="relative w-full h-[300px] md:h-[400px] overflow-hidden"
          style={{ clipPath: "inset(0 0 100% 0)" }}
        >
          <Image
            src="/assets/heroImage.png"
            alt="Dee Divine Groups Location"
            fill
            className="object-cover brightness-75 contrast-110"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/50" />

          {/* Floating label */}
          <div className="absolute bottom-8 left-6 md:left-16 z-10 flex items-center gap-4">
            <div className="w-12 h-12 bg-[#e63946] flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-500 block">
                Headquarters
              </span>
              <span className="text-sm font-black text-[#0c0d12] tracking-wide uppercase">
                Haryana, India
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          FOOTER BAR
      ══════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        <div ref={dividerRef} className="w-full h-[1px] bg-neutral-200" />
      </div>

      <div
        ref={footerRef}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-12"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left — Brand */}
          <div className="flex items-center gap-4">
            <Image
              src="/assets/logo.png"
              alt="Dee Divine Groups"
              width={40}
              height={40}
              className="object-contain"
            />
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#0c0d12] block">
                Dee Divine Groups
              </span>
              <span className="text-[10px] text-neutral-400 tracking-wider uppercase">
                Shaping The Future
              </span>
            </div>
          </div>

          {/* Center — Copyright */}
          <p className="text-[11px] text-neutral-400 tracking-wider text-center">
            © {new Date().getFullYear()} Dee Divine Groups. All rights reserved.
          </p>

          {/* Right — Social Links */}
          <div className="flex items-center gap-4">
            {["Instagram", "LinkedIn", "YouTube"].map((social, i) => (
              <a
                key={i}
                href="#"
                className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-400 hover:text-[#0c0d12] transition-colors duration-300 px-2"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
