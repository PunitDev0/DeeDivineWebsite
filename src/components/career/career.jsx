"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

export default function Career() {
  const openings = [
    {
      id: 1,
      title: "Sales Team",
      location: "Gurugram, Haryana",
      type: "Full-time",
      description:
        "Drive client engagement and property sales with confidence. Ideal for self-motivated professionals with a strong understanding of real estate trends.",
    },
    {
      id: 2,
      title: "Digital Marketing Specialist",
      location: "Remote / Gurugram",
      type: "Full-time",
      description:
        "Manage online marketing campaigns, social media presence, and lead generation for our upcoming real estate projects.",
    },
    {
      id: 3,
      title: "Customer Relationship Manager (CRM)",
      location: "Delhi NCR",
      type: "Full-time",
      description:
        "Build and maintain client relationships, ensure seamless communication and enhance customer experience throughout the buying journey.",
    },
  ];

  return (
    <main className="font-sans text-[#0c0d12] bg-white pt-24">
      
      {/* HERO Banner */}
      <div className="px-6 md:px-16 py-8">
        <div
          className="relative w-full h-[250px] md:h-[380px] flex items-end pb-8 pl-8 overflow-hidden bg-cover bg-center border border-black/5"
          style={{ backgroundImage: "url('/assets/careerImage.webp')" }}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-0" />
          
          <div className="relative z-10 bg-[#0c0d12]/80 backdrop-blur-sm text-white px-5 py-3 border border-white/10">
            <Link href="/career" className="flex items-center gap-2 text-xs font-black uppercase tracking-wider">
              Careers <ArrowRight size={14} className="text-red-500" />
            </Link>
          </div>
        </div>
      </div>

      {/* INTRODUCTION */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-red-500" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#e63946]">
                Join Our Team
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight uppercase">
              Build Your Career with <br />
              <span className="text-neutral-400">Dee Divine Propinfra</span>
            </h2>
            
            <p className="text-neutral-500 text-sm leading-relaxed">
              At Dee Divine Propinfra, we believe that our success is powered by people. We’re always looking for passionate individuals who want to build a meaningful career in real estate.
            </p>
            
            <p className="text-neutral-500 text-sm leading-relaxed">
              Whether you’re experienced or just starting, we offer growth, innovation, and a supportive environment.
            </p>
          </div>
          
          {/* Right Image Block */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-dashed border-red-500/20 rounded-full opacity-60 hidden md:block"></div>
            <div className="absolute -bottom-10 -right-8 w-24 h-24 border border-dashed border-red-500/20 rounded-full opacity-60 hidden md:block"></div>
            
            <div className="relative border border-neutral-100 bg-white p-2 shadow-sm">
              <Image
                src="/assets/career-team.webp"
                alt="Team at Dee Divine"
                width={600}
                height={700}
                className="object-cover brightness-95"
              />
            </div>
          </div>
          
        </div>
      </section>

      {/* COMPANY CULTURE */}
      <section className="bg-[#f8f9fa] py-24 px-6 md:px-16 border-t border-b border-black/5">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-red-500" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#e63946]">Culture</span>
            <div className="w-6 h-[2px] bg-red-500" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black uppercase text-[#0c0d12] mb-4">Life at Dee Divine Propinfra</h2>
          
          <p className="text-neutral-500 text-xs sm:text-sm tracking-wider uppercase">
            Collaboration • Learning • Innovation • Work-Life Balance
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {["Growth & Learning", "Inclusive Environment", "Work-Life Balance"].map((title, i) => (
            <div key={i} className="bg-white p-8 border border-neutral-100 hover:shadow-md transition-all duration-300">
              <div className="w-8 h-[2px] bg-red-500 mb-5" />
              <h3 className="text-sm font-black uppercase tracking-wider text-[#0c0d12] mb-3">{title}</h3>
              <p className="text-neutral-500 text-xs leading-relaxed">
                {i === 0 && "Mentorship, training, and leadership opportunities."}
                {i === 1 && "Diversity and respect for every voice and idea."}
                {i === 2 && "Flexible policies and a positive, supportive culture."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CURRENT OPENINGS */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-red-500" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#e63946]">Careers</span>
            <div className="w-6 h-[2px] bg-red-500" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black uppercase text-[#0c0d12] mb-4">Current Openings</h2>
          <p className="text-neutral-500 text-sm">Find your next role with us</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {openings.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-neutral-100 flex flex-col justify-between hover:shadow-md transition-all duration-300"
            >
              <div className="p-8">
                <h3 className="text-[14px] font-black uppercase tracking-wider text-[#0c0d12] mb-2">{job.title}</h3>
                <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider mb-6">
                  {job.location} • {job.type}
                </p>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  {job.description}
                </p>
              </div>
              
              <div className="bg-[#f8f9fa] border-t border-neutral-100 px-8 py-5 flex items-center justify-between">
                <Link
                  href={`/upload-resume?job=${encodeURIComponent(job.title)}`}
                  className="text-red-500 font-black text-[10px] uppercase tracking-widest hover:underline flex items-center gap-2"
                >
                  Apply Now <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0c0d12] py-24 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/10 rounded-full translate-x-24 -translate-y-24" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-6 h-[2px] bg-red-500" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-red-400">Join Us</span>
            <div className="w-6 h-[2px] bg-red-500" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
            Ready to Join Us?
          </h2>
          
          <p className="max-w-lg mx-auto mb-10 text-neutral-400 text-xs sm:text-sm leading-relaxed">
            Be part of a dynamic team that’s shaping the future of real estate.
          </p>
          
          <Link
            href="/upload-resume"
            className="inline-block px-8 py-4 bg-white text-[#0c0d12] text-xs font-black uppercase tracking-[0.2em] hover:bg-neutral-100 active:scale-95 transition-all duration-300"
          >
            Send Your Resume →
          </Link>
        </div>
      </section>

    </main>
  );
}