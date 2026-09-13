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
    <main className="font-sans text-[#0c0d12] bg-[#FDFDFD] min-h-screen pt-28 overflow-hidden relative">
      
      {/* GLOBAL BACKGROUND GLOW */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(229,45,79,0.03)_0%,transparent_60%)] blur-3xl" />
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(181,31,59,0.03)_0%,transparent_60%)] blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* 1 & 2. CAREER HERO & TEAM IMAGE */}
        <section className="pt-8 md:pt-16 pb-16 md:pb-24 px-6 md:px-16">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            
            {/* Editorial Hero Text */}
            <div className="max-w-3xl mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-gradient-to-r from-[#B51F3B] to-[#FF5364]" />
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#0c0d12]">
                  Careers
                </span>
                <div className="w-8 h-[2px] bg-gradient-to-l from-[#B51F3B] to-[#FF5364]" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0c0d12] mb-6 relative inline-block">
                <span className="relative z-10">Build Your Career with <br/>Dee Divine Propinfra</span>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(229,45,79,0.08),transparent_70%)] blur-2xl z-0 pointer-events-none" />
              </h1>
              
              <div className="text-neutral-500 text-sm md:text-base leading-relaxed font-medium space-y-4 max-w-2xl mx-auto">
                <p>
                  At Dee Divine Propinfra, we believe that our success is powered by people. We’re always looking for passionate individuals who want to build a meaningful career in real estate.
                </p>
                <p>
                  Whether you’re experienced or just starting, we offer growth, innovation, and a supportive environment.
                </p>
              </div>
            </div>

            {/* Team Image Glass Container */}
            <div className="w-full relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B51F3B]/10 to-transparent blur-3xl rounded-[2rem] pointer-events-none" />
              <div className="relative rounded-[2rem] overflow-hidden border border-white/80 bg-white/40 backdrop-blur-md p-2.5 shadow-[0_8px_40px_rgba(0,0,0,0.05)]">
                <div className="relative w-full aspect-[21/9] md:aspect-[21/7] rounded-[1.5rem] overflow-hidden bg-neutral-100">
                  <Image
                    src="/assets/career-team.webp"
                    alt="Team at Dee Divine"
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    priority
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 3. LIFE AT DEE DIVINE / CULTURE */}
        <section className="py-24 px-6 md:px-16 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-6 h-[2px] bg-gradient-to-r from-[#B51F3B] to-[#FF5364]" />
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#0c0d12]">
                  Culture
                </span>
                <div className="w-6 h-[2px] bg-gradient-to-l from-[#B51F3B] to-[#FF5364]" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#0c0d12] mb-6">
                Life at Dee Divine Propinfra
              </h2>
              
              <p className="text-neutral-500 text-[11px] sm:text-[13px] font-extrabold uppercase tracking-[0.2em]">
                Collaboration • Learning • Innovation • Work-Life Balance
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Growth & Learning", desc: "Mentorship, training, and leadership opportunities." },
                { title: "Inclusive Environment", desc: "Diversity and respect for every voice and idea." },
                { title: "Work-Life Balance", desc: "Flexible policies and a positive, supportive culture." }
              ].map((card, i) => (
                <div 
                  key={i} 
                  className="group bg-white/80 backdrop-blur-[16px] border border-white/65 rounded-[24px] p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(229,45,79,0.08)] hover:-translate-y-1 transition-all duration-500 relative overflow-hidden"
                >
                  {/* 4. CULTURE CARD ACCENT */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#B51F3B] to-[#FF5364] opacity-70" />
                  
                  <h3 className="text-[15px] font-black uppercase tracking-wider text-[#0c0d12] mb-4 group-hover:text-[#B51F3B] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-neutral-500 text-xs lg:text-sm font-medium leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CURRENT OPENINGS */}
        <section className="py-24 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-6 h-[2px] bg-gradient-to-r from-[#B51F3B] to-[#FF5364]" />
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#0c0d12]">
                  Careers
                </span>
                <div className="w-6 h-[2px] bg-gradient-to-l from-[#B51F3B] to-[#FF5364]" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#0c0d12] mb-4">
                Current Openings
              </h2>
              <p className="text-neutral-500 text-sm md:text-base font-medium">
                Find your next role with us
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {openings.map((job) => (
                <div
                  key={job.id}
                  className="group flex flex-col justify-between bg-white/80 backdrop-blur-[16px] border border-white/65 rounded-[26px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(229,45,79,0.08)] hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="p-8 lg:p-10">
                    {/* 8. JOB TITLE */}
                    <h3 className="text-lg font-black uppercase tracking-tight text-[#0c0d12] mb-4 leading-snug group-hover:text-[#B51F3B] transition-colors duration-300">
                      {job.title}
                    </h3>
                    
                    {/* 9. JOB METADATA */}
                    <p className="text-[10px] text-neutral-500 font-extrabold uppercase tracking-widest mb-6 flex items-center gap-2">
                      <span>{job.location}</span>
                      <span className="w-1 h-1 rounded-full bg-gradient-to-r from-[#B51F3B] to-[#FF5364]" />
                      <span>{job.type}</span>
                    </p>
                    
                    {/* 10. JOB DESCRIPTION */}
                    <p className="text-neutral-500 text-xs md:text-sm font-medium leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                  
                  <div className="px-8 lg:px-10 pb-8 lg:pb-10 pt-4 mt-auto">
                    {/* 11. APPLY NOW BUTTON */}
                    <Link
                      href={`/upload-resume?job=${encodeURIComponent(job.title)}`}
                      className="group/btn inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#B51F3B] to-[#FF5364] text-white text-[11px] font-black uppercase tracking-[0.15em] rounded-full shadow-[0_4px_15px_rgba(229,45,79,0.25)] hover:shadow-[0_8px_25px_rgba(229,45,79,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Apply Now
                      <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 13. READY TO JOIN US CTA */}
        <section className="bg-[#0C0D12] py-24 md:py-32 relative overflow-hidden text-white mt-12">
          {/* 14. DARK CINEMATIC CTA BACKGROUND */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(181,31,59,0.18),transparent_55%)] blur-2xl" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            {/* 15. CTA GLASS EFFECT (Subtle border box) */}
            <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-[2rem] p-10 md:p-16 shadow-2xl">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-6 h-[2px] bg-gradient-to-r from-[#B51F3B] to-[#FF5364]" />
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#FF5364]">
                  Join Us
                </span>
                <div className="w-6 h-[2px] bg-gradient-to-l from-[#B51F3B] to-[#FF5364]" />
              </div>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6">
                Ready to Join Us?
              </h2>
              
              <p className="max-w-lg mx-auto mb-12 text-neutral-400 text-sm md:text-base font-medium leading-relaxed">
                Be part of a dynamic team that’s shaping the future of real estate.
              </p>
              
              {/* 16. SEND YOUR RESUME BUTTON */}
              <Link
                href="/upload-resume"
                className="group inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-[#B51F3B] to-[#FF5364] text-white text-[12px] font-black uppercase tracking-[0.2em] rounded-full shadow-[0_6px_20px_rgba(229,45,79,0.3)] hover:shadow-[0_10px_30px_rgba(229,45,79,0.5)] hover:-translate-y-1 transition-all duration-300"
              >
                Send Your Resume
                <ArrowRight className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}