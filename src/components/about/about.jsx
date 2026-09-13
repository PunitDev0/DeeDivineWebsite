"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight, CheckCircle2, Shield, Home, Briefcase, Handshake, Users } from "lucide-react";
import DeeDivineSection from "./dee-divine-team";

export default function AboutUs() {
  const leaders = [
    {
      id: "01",
      name: "MR. DIWAKAR DIXIT – DIRECTOR",
      description:
        "A visionary leader who laid the foundation of Dee Divine Propinfra with strategic expertise and unmatched real estate knowledge.",
      image: "/assets/diwakar-dixit.webp",
    },
    {
      id: "02",
      name: "MRS. KAVITA DIXIT – CHAIRMAN",
      description:
        "The driving force behind smooth operations and excellence, committed to delivering customer satisfaction and quality.",
      image: "/assets/kavita.jpg",
    },
    {
      id: "03",
      name: "MR. DHANANJAY ARYA – MD (MANAGING DIRECTOR)",
      description:
        "An innovative leader ensuring growth and modern business practices, keeping the company ahead of the market.",
      image: "/assets/dj.JPG",
    },
  ];

  return (
    <main className="font-sans text-[#0c0d12] bg-[#FDFDFD] pt-24 overflow-hidden">
      {/* GLOBAL BACKGROUND GLOW */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top_right,rgba(229,45,79,0.03)_0%,transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(181,31,59,0.03)_0%,transparent_60%)] blur-3xl" />
      </div>

      {/* 1. COMPANY INTRODUCTION */}
      <section className="pt-8 md:pt-12 pb-16 md:pb-24 px-6 md:px-16 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Text Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-gradient-to-r from-[#B51F3B] to-[#FF5364]" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#0c0d12]">
                Our Company
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.1] tracking-tight text-[#0c0d12]">
              DEE DIVINE PROPINFRA PVT. LTD.
            </h2>

            <div className="space-y-6 text-sm text-neutral-600 leading-relaxed font-medium">
              <p>
                At <span className="font-bold text-[#0c0d12]">Dee Divine Propinfra Pvt. Ltd.</span>, we believe that buying a home or property is one of the most important decisions in life — it’s not just about land or walls, but about <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#B51F3B] to-[#FF5364]">dreams, security, and legacy.</span> With this philosophy at our core, we have built a reputation as one of the most trusted and fast-growing real estate companies, dedicated to providing value-driven and customer-focused property solutions.
              </p>
              <p>
                Our journey began with a simple yet powerful vision: to make real estate transparent, trustworthy, and accessible for everyone. Over the years, we have grown from a promising startup into a recognized brand, offering a wide spectrum of real estate services — from affordable housing projects to premium developments, commercial spaces, investment opportunities, and end-to-end consultation.
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative group">
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#B51F3B]/20 to-transparent blur-3xl rounded-full" />
            
            {/* Premium glass container */}
            <div className="relative rounded-3xl overflow-hidden border border-white/80 bg-white/40 backdrop-blur-md p-2.5 shadow-[0_8px_40px_rgba(0,0,0,0.06)] group-hover:shadow-[0_15px_50px_rgba(229,45,79,0.12)] transition-all duration-500">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100">
                <Image
                  src="/assets/aboutImage2.webp"
                  alt="About Dee Divine Propinfra"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. OUR STORY */}
      <section className="relative py-20 md:py-32 px-6 md:px-16 z-10 bg-gradient-to-b from-white/0 via-neutral-50/50 to-white/0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20">
          
          <div className="md:w-1/3">
            <div className="sticky top-32">
              <h2 className="text-3xl md:text-5xl font-black uppercase text-[#0c0d12] mb-6 tracking-tight">
                Our Story
              </h2>
              {/* Glass info element */}
              <div className="rounded-2xl border border-white/80 bg-white/60 backdrop-blur-md p-6 shadow-sm">
                <p className="text-[11px] font-black uppercase tracking-widest text-[#B51F3B] mb-2">Foundation</p>
                <p className="text-sm font-bold text-[#0c0d12]">Building trust and transparency in the real estate market.</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 relative">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#B51F3B] via-[#FF5364] to-transparent opacity-30 hidden md:block" />
            
            <div className="md:pl-10 space-y-8 text-neutral-600 text-sm md:text-base leading-relaxed font-medium">
              <p>
                Every great company has a story, and ours is rooted in <span className="font-extrabold text-[#0c0d12]">vision, hard work, and trust.</span> Dee Divine Propinfra was founded with the goal of making the property-buying process hassle-free, guided, and reliable.
              </p>
              <p>
                We noticed a gap in the real estate market — buyers often struggled with lack of clarity, complex documentation, and unverified projects. Our founders came together to bridge this gap and build an organization that puts customers first, ensures transparency, and delivers on every promise. Today, we stand tall as a company recognized for integrity, quality, and personalized solutions.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* 4. PILLARS OF LEADERSHIP */}
      <section className="py-20 md:py-24 px-6 md:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#0c0d12]">
                Leadership
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-[#0c0d12] mb-6 tracking-tight">
              Our Pillars of Leadership
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-2xl mx-auto font-medium">
              Dee Divine Propinfra’s growth is powered by a leadership team that blends vision, expertise, and a commitment to excellence—shaping the future of the company with integrity and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-md border border-white/60 p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(229,45,79,0.12)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between overflow-hidden"
              >
                {/* Number Badge */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#B51F3B] to-[#FF5364] flex items-center justify-center text-white text-xl font-black mb-8 shadow-[0_4px_15px_rgba(229,45,79,0.3)] group-hover:scale-110 transition-transform duration-500">
                  {leader.id}
                </div>
                
                <div>
                  <h3 className="text-sm font-black uppercase tracking-wider text-[#0c0d12] mb-3 leading-tight group-hover:text-[#B51F3B] transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-neutral-500 text-xs md:text-sm leading-relaxed font-medium">
                    {leader.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHAT MAKES US DIFFERENT */}
      <section className="relative py-24 md:py-32 px-6 md:px-16 bg-[#07080C] text-white overflow-hidden">
        {/* Dark Red Radial Glow */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(143,18,48,0.25)_0%,transparent_70%)] blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
            
            <div className="md:w-1/2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-6 h-[2px] bg-gradient-to-r from-[#B51F3B] to-[#FF5364]" />
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#FF5364]">
                  Advantage
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight">
                What Makes Us Different?
              </h2>
              <p className="text-[#a0a1a5] text-sm md:text-base leading-relaxed font-medium">
                In a crowded real estate market, <span className="font-bold text-white">Dee Divine Propinfra Pvt. Ltd.</span> stands apart because we don’t just focus on selling properties — we focus on building relationships.
              </p>
            </div>

            <div className="md:w-1/2 w-full grid sm:grid-cols-2 gap-4">
              {[
                { text: "Verified & RERA-approved projects", icon: Shield },
                { text: "Affordable and premium housing", icon: Home },
                { text: "End-to-end consult & registry", icon: Handshake },
                { text: "Loan & documentation guidance", icon: Briefcase },
              ].map((item, i) => (
                <div key={i} className="group bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl hover:bg-white/10 hover:border-[#FF5364]/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B51F3B]/20 to-[#FF5364]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 text-[#FF5364]" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 6 & 7. CORE VALUES & EXPERTISE */}
      <section className="py-24 px-6 md:px-16 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20">
          
          {/* Core Values */}
          <div>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#0c0d12] mb-10 flex items-center gap-3">
              <span className="w-6 h-[2px] bg-gradient-to-r from-[#B51F3B] to-[#FF5364]" />
              Our Core Values
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Trust", desc: "The foundation of every deal and relationship.", light: true },
                { title: "Transparency", desc: "Complete clarity in processes, promises, and pricing.", light: false },
                { title: "Integrity", desc: "Delivering what we commit, every single time.", light: false },
                { title: "Customer First", desc: "Tailoring solutions to meet every client’s needs.", light: true },
              ].map((value, i) => (
                <div key={i} className={`p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(229,45,79,0.1)] ${value.light ? 'bg-white/90 border-white shadow-[0_4px_20px_rgba(0,0,0,0.03)]' : 'bg-neutral-50/80 border-neutral-200/50 backdrop-blur-sm'}`}>
                  <h3 className="font-black text-sm uppercase tracking-wider text-[#0c0d12] mb-3 group-hover:text-[#B51F3B]">
                    {value.title}
                  </h3>
                  <p className="text-xs text-neutral-500 font-medium leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#0c0d12] mb-10 flex items-center gap-3">
              <span className="w-6 h-[2px] bg-gradient-to-r from-[#B51F3B] to-[#FF5364]" />
              Our Expertise
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Residential", desc: "Affordable housing, luxury apartments, and plots." },
                { title: "Commercial", desc: "Offices, retail shops, and business spaces." },
                { title: "Advisory", desc: "Helping clients identify safe, profitable opportunities." },
                { title: "Support", desc: "Document filing, loan support, and verification checks." },
              ].map((exp, i) => (
                <div key={i} className="group p-8 rounded-3xl bg-white/80 border border-white/60 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(229,45,79,0.1)] hover:-translate-y-1 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#B51F3B]/10 to-[#FF5364]/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5364]" />
                  </div>
                  <h3 className="font-black text-sm uppercase tracking-wider text-[#0c0d12] mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-neutral-500 font-medium leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 8. COMMITMENT / MISSION / VISION */}
      <section className="py-24 px-6 md:px-16 relative z-10 bg-gradient-to-b from-neutral-50/50 to-white/0 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#0c0d12] mb-6">
              Our Commitment
            </h2>
            <p className="text-sm md:text-base text-neutral-500 font-medium leading-relaxed">
              Choosing Dee Divine Propinfra means choosing a partner who walks with you throughout your journey. From your very first consultation to the final handover and even beyond, we provide personalized guidance and continuous support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-md border border-white/60 p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden group hover:shadow-[0_15px_40px_rgba(229,45,79,0.1)] transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#B51F3B] to-[#FF5364]" />
              <h3 className="font-black text-xl uppercase tracking-wider text-[#0c0d12] mb-4">Mission</h3>
              <p className="text-sm text-neutral-500 font-medium leading-relaxed">
                To offer transparent, trustworthy, and customer-centric solutions, making homeownership simple and rewarding.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-md border border-white/60 p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden group hover:shadow-[0_15px_40px_rgba(229,45,79,0.1)] transition-all duration-500">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#B51F3B] to-[#FF5364]" />
              <h3 className="font-black text-xl uppercase tracking-wider text-[#0c0d12] mb-4">Vision</h3>
              <p className="text-sm text-neutral-500 font-medium leading-relaxed">
                To be recognized as the most reliable, ethical, and customer-focused real estate advisory in the region.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 9. FOUNDER HIGHLIGHT */}
      <section className="py-24 px-6 md:px-16 relative z-10 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-center">
          
          {/* Founder Image */}
          <div className="relative group mx-auto md:mx-0 w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B51F3B]/10 to-[#FF5364]/10 blur-2xl rounded-[2rem] group-hover:from-[#B51F3B]/20 transition-all duration-500" />
            <div className="relative rounded-[2rem] overflow-hidden border border-white/80 bg-white/50 p-2.5 shadow-[0_8px_40px_rgba(0,0,0,0.06)] backdrop-blur-sm">
              <div className="relative w-full aspect-[3/4] rounded-[1.5rem] overflow-hidden bg-neutral-100">
                <Image
                  src="/assets/diwakar-dixit.webp"
                  alt="Mr. Diwakar Dixit"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          {/* Founder Content */}
          <div className="space-y-8">
            <div>
              <p className="uppercase text-[11px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#B51F3B] to-[#FF5364] tracking-[0.2em] mb-3">
                FOUNDER & DIRECTOR
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-[#0c0d12] uppercase tracking-tight">
                Mr. Diwakar Dixit
              </h2>
            </div>

            <div className="text-neutral-600 text-sm md:text-base leading-relaxed space-y-5 font-medium">
              <p>
                With over 18 years of extensive experience in the real estate industry, Mr. Diwakar Dixit is a seasoned strategist and respected leader in real estate consulting, project execution, and land solutions. As the Founder & Director of Dee Divine Propinfra Pvt. Ltd., he has positioned the company as a key player across North India.
              </p>
              <p>
                Mr. Diwakar has successfully collaborated with some of the most reputed developers in the country, including DLF, M3M, Elan, BPTP, AIPL, Signature Global, and Whiteland, built on trust, transparency, and a shared commitment to delivering excellence.
              </p>
              <p>
                Under his visionary leadership, the company continues to grow as a trusted real estate entity known for end-to-end solutions, strategic tie-ups, and long-term client relationships.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 10. TEAM MEMBERS */}
      <DeeDivineSection />
    </main>
  );
}