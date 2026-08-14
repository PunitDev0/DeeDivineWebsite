"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";
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
      image: "/leaders/kavita.jpg",
    },
    {
      id: "03",
      name: "MR. DHANANJAY ARYA – MD (MANAGING DIRECTOR)",
      description:
        "An innovative leader ensuring growth and modern business practices, keeping the company ahead of the market.",
      image: "/leaders/dhananjay.jpg",
    },
  ];

  return (
    <main className="font-sans text-[#0c0d12] bg-white pt-24">
      {/* HERO Banner */}
      <div className="px-6 md:px-16 py-8">
        <div
          className="relative w-full h-[250px] md:h-[380px] flex items-end pb-8 pl-8 overflow-hidden bg-cover bg-center border border-black/5"
          style={{ backgroundImage: "url('/assets/aboutImage.webp')" }}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-0" />
          
          <div className="relative z-10 bg-[#0c0d12]/80 backdrop-blur-sm text-white px-5 py-3 border border-white/10">
            <Link href="/" className="flex items-center gap-2 text-xs font-black uppercase tracking-wider">
              About Us <ArrowRight size={14} className="text-red-500" />
            </Link>
          </div>
        </div>
      </div>

      {/* INTRODUCTION */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Image Section */}
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-24 h-24 border border-dashed border-red-500/20 rounded-full opacity-60 hidden md:block"></div>
            <div className="absolute -bottom-8 -right-6 w-20 h-20 border border-dashed border-red-500/20 rounded-full opacity-60 hidden md:block"></div>

            <div className="relative border border-neutral-100 bg-white p-2 shadow-sm">
              <Image
                src="/assets/aboutImage2.webp"
                alt="About Dee Divine Propinfra"
                width={600}
                height={700}
                className="object-cover brightness-95"
              />
            </div>
          </div>

          {/* Right Text Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-red-500" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#e63946]">
                About Us
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight tracking-tight text-gray-900">
              DEE DIVINE PROPINFRA PVT. LTD.
            </h2>

            <p className="text-neutral-500 text-sm leading-relaxed">
              At <span className="font-bold text-[#0c0d12]">Dee Divine Propinfra Pvt. Ltd.</span>, we believe that buying a home or property is one of the most important decisions in life — it’s not just about land or walls, but about <span className="font-bold text-red-500">dreams, security, and legacy.</span> With this philosophy at our core, we have built a reputation as one of the most trusted and fast-growing real estate companies, dedicated to providing value-driven and customer-focused property solutions.
            </p>

            <p className="text-neutral-500 text-sm leading-relaxed">
              Our journey began with a simple yet powerful vision: to make real estate transparent, trustworthy, and accessible for everyone. Over the years, we have grown from a promising startup into a recognized brand, offering a wide spectrum of real estate services — from affordable housing projects to premium developments, commercial spaces, investment opportunities, and end-to-end consultation.
            </p>
          </div>
        </div>
      </section>

      {/* STORY & LEADERSHIP */}
      <section className="bg-[#f8f9fa] text-gray-800 px-6 md:px-16 py-24 border-t border-b border-black/5">
        
        {/* Story */}
        <div className="max-w-7xl mx-auto mb-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-red-500" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#e63946]">History</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black uppercase text-gray-900 mb-6 tracking-tight">
            Our Story
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-neutral-500 text-sm leading-relaxed">
            <p>
              Every great company has a story, and ours is rooted in <span className="font-bold text-[#0c0d12]">vision, hard work, and trust.</span> Dee Divine Propinfra was founded with the goal of making the property-buying process hassle-free, guided, and reliable.
            </p>
            <p>
              We noticed a gap in the real estate market — buyers often struggled with lack of clarity, complex documentation, and unverified projects. Our founders came together to bridge this gap and build an organization that puts customers first, ensures transparency, and delivers on every promise. Today, we stand tall as a company recognized for integrity, quality, and personalized solutions.
            </p>
          </div>
        </div>

        {/* Leadership Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-red-500" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#e63946]">Leadership</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black uppercase text-gray-900 mb-6 tracking-tight">
            Our Pillars of Leadership
          </h2>
          
          <p className="text-neutral-500 mb-12 text-sm leading-relaxed max-w-2xl">
            Dee Divine Propinfra’s growth is powered by a leadership team that blends vision, expertise, and a commitment to excellence—shaping the future of the company with integrity and innovation.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="relative bg-white border border-neutral-100 p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[72px] font-black text-neutral-100 select-none block leading-none mb-4">
                    {leader.id}
                  </span>
                  
                  <h3 className="text-[13px] font-black uppercase tracking-wider text-gray-900 mb-3 leading-tight">
                    {leader.name}
                  </h3>

                  <p className="text-neutral-500 text-xs leading-relaxed">
                    {leader.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="bg-white px-6 md:px-16 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-red-500" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#e63946]">Advantage</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black uppercase text-gray-900 mb-8 tracking-tight">
            What Makes Us Different?
          </h2>

          <div className="bg-[#f8f9fa] border border-neutral-100 text-sm p-8 md:p-12 leading-relaxed">
            <p className="text-neutral-500 mb-6">
              In a crowded real estate market, <span className="font-bold text-[#0c0d12]">Dee Divine Propinfra Pvt. Ltd.</span> stands apart because we don’t just focus on selling properties — we focus on building relationships.
            </p>

            <ul className="grid gap-3 sm:grid-cols-2 text-xs font-bold uppercase tracking-wider text-neutral-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                <span>Verified & RERA-approved projects</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                <span>Affordable and premium housing</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                <span>End-to-end consult & registry</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                <span>Loan & documentation guidance</span>
              </li>
            </ul>
          </div>
        </div>

        {/* VALUES & EXPERTISE */}
        <div className="max-w-7xl mx-auto mt-16 grid md:grid-cols-2 gap-8">
          
          {/* Values */}
          <div className="border border-neutral-100 p-8 shadow-sm text-sm">
            <h3 className="font-black text-xs uppercase tracking-widest text-[#0c0d12] mb-6 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-red-500" />
              Our Core Values
            </h3>
            
            <ul className="space-y-3 text-xs leading-relaxed text-neutral-500 font-medium">
              <li>
                <span className="font-black text-neutral-800 uppercase tracking-wider">Trust:</span> The foundation of every deal and relationship.
              </li>
              <li>
                <span className="font-black text-neutral-800 uppercase tracking-wider">Transparency:</span> Complete clarity in processes, promises, and pricing.
              </li>
              <li>
                <span className="font-black text-neutral-800 uppercase tracking-wider">Integrity:</span> Delivering what we commit, every single time.
              </li>
              <li>
                <span className="font-black text-neutral-800 uppercase tracking-wider">Customer First:</span> Tailoring solutions to meet every client’s needs.
              </li>
            </ul>
          </div>

          {/* Expertise */}
          <div className="border border-neutral-100 p-8 shadow-sm text-sm">
            <h3 className="font-black text-xs uppercase tracking-widest text-[#0c0d12] mb-6 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-red-500" />
              Our Expertise
            </h3>
            
            <ul className="space-y-3 text-xs leading-relaxed text-neutral-500 font-medium">
              <li>
                <span className="font-black text-neutral-800 uppercase tracking-wider">Residential:</span> Affordable housing, luxury apartments, and plots.
              </li>
              <li>
                <span className="font-black text-neutral-800 uppercase tracking-wider">Commercial:</span> Offices, retail shops, and business spaces.
              </li>
              <li>
                <span className="font-black text-neutral-800 uppercase tracking-wider">Advisory:</span> Helping clients identify safe, profitable opportunities.
              </li>
              <li>
                <span className="font-black text-neutral-800 uppercase tracking-wider">Support:</span> Document filing, loan support, and verification checks.
              </li>
            </ul>
          </div>
          
        </div>

        {/* MISSION & VISION */}
        <div className="max-w-7xl mx-auto mt-8 grid md:grid-cols-2 gap-8">
          
          {/* Commitment */}
          <div className="bg-[#f8f9fa] border border-neutral-100 p-8 shadow-sm text-sm">
            <h3 className="font-black text-xs uppercase tracking-widest text-[#0c0d12] mb-6 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-red-500" />
              Our Commitment
            </h3>
            
            <p className="text-xs leading-relaxed text-neutral-500">
              Choosing Dee Divine Propinfra means choosing a partner who walks with you throughout your journey. From your very first consultation to the final handover and even beyond, we provide personalized guidance and continuous support.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="bg-[#f8f9fa] border border-neutral-100 p-8 shadow-sm text-sm">
            <h3 className="font-black text-xs uppercase tracking-widest text-[#0c0d12] mb-6 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-red-500" />
              Our Mission & Vision
            </h3>
            
            <p className="text-xs leading-relaxed text-neutral-500 mb-3">
              <span className="font-black text-neutral-800 uppercase tracking-wider">Mission:</span> To offer transparent, trustworthy, and customer-centric solutions, making homeownership simple and rewarding.
            </p>
            <p className="text-xs leading-relaxed text-neutral-500">
              <span className="font-black text-neutral-800 uppercase tracking-wider">Vision:</span> To be recognized as the most reliable, ethical, and customer-focused real estate advisory in the region.
            </p>
          </div>
          
        </div>
      </section>

      {/* FOUNDER HIGHLIGHT */}
      <section className="bg-white px-6 md:px-16 py-24 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[300px_1fr] gap-12 items-start">
          
          {/* Image */}
          <div className="flex justify-center md:justify-start">
            <div className="border border-neutral-100 p-2 shadow-sm bg-white">
              <Image
                src="/assets/diwakar-dixit.webp"
                alt="Mr. Diwakar Dixit"
                unoptimized
                width={300}
                height={380}
                className="object-cover brightness-95"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 text-left">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase">
              Mr. Diwakar Dixit
            </h2>
            <p className="uppercase text-[10px] font-bold text-red-500 tracking-widest leading-none">
              Founder & Director, Dee Divine Propinfra Pvt. Ltd.
            </p>

            <div className="text-neutral-500 text-sm leading-relaxed space-y-4">
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

      {/* TEAM MEMBERS */}
      <DeeDivineSection />
    </main>
  );
}