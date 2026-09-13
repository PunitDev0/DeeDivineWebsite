"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Categorized members based on exact requested hierarchy:
// 1. Board & Leadership (Diwakar sir, Kavita mam, MD)
// 2. VPs (Vice Presidents)
// 3. AVPs (Assistant Vice Presidents)
// 4. General Managers & Team Heads (GM, Team Head)

const boardMembers = [
  { name: "Mr. Diwakar Dixit", role: "Founder & Director", image: "/assets/diwakar-dixit.webp" },
  { name: "Mrs. Kavita Dixit", role: "Chairman", image: "/assets/kavita.jpg" },
  { name: "Mr. Dhananjay Arya", role: "MD (Managing Director)", image: "/assets/dj.JPG" },
];

const vpMembers = [
  { name: "Aditya Singh", role: "VP", image: "/assets/aditya.jpg" },
  { name: "Manish Sharma", role: "Vice President (VP) – Finance / Accounts", image: "/assets/manish.JPG" },
  { name: "Akshay Chauhan", role: "VP – Marketing", image: "/assets/akshay.jpg" },
  { name: "Raveesh", role: "VP – Sales", image: "/assets/raveesh.jpg" },
  { name: "Rohit", role: "VP – Sales", image: "/assets/rohit.jpg" },
  { name: "SN Jha", role: "VP – Sales", image: "/assets/sn jha.jpg" },
  { name: "Sukhpreet", role: "VP – Sales", image: "/assets/Sukhpreet.jpg" },
];

const avpMembers = [
  { name: "Poonam Yadav", role: "AVP", image: "/assets/poonam.jpg" },
  { name: "Sagar Gola", role: "AVP", image: "/assets/sagar.jpg" },
  { name: "Sanaya", role: "AVP – Sales", image: "/assets/sanaya.jpg" },
  { name: "Vipin", role: "AVP – Sales", image: "/assets/vipin.jpg" },
];

const gmMembers = [
  { name: "Saurav Kumar", role: "General Manager", image: "/assets/sourav.jpg" },
  { name: "Deepak", role: "General Manager", image: "/assets/deepak.jpg" },
  { name: "Sachin Saini", role: "Team Head", image: "/assets/sachin saini.jpg" },
];

export default function TeamSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each team section group independently for performance and visual rhythm
      const groups = gsap.utils.toArray(".team-section-group");
      groups.forEach((group) => {
        const title = group.querySelector(".team-group-title");
        const cards = group.querySelectorAll(".team-card");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: group,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        if (title) {
          tl.fromTo(
            title,
            { opacity: 0, x: -25 },
            { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
          );
        }

        if (cards.length > 0) {
          tl.fromTo(
            cards,
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.06,
              ease: "power3.out",
            },
            "-=0.4"
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Card component for team members
  const TeamCard = ({ member, isPriority }) => (
    <div className="team-card flex flex-col justify-between group bg-white/80 backdrop-blur-md border border-white/60 rounded-2xl p-4 md:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#FF5364]/30 hover:shadow-[0_15px_40px_rgba(229,45,79,0.08)] hover:-translate-y-1 transition-all duration-500 ease-out overflow-hidden relative">
      <div>
        {/* Fixed aspect ratio square container */}
        <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-neutral-100 mb-5">
          {member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 15vw"
              loading={isPriority ? "eager" : "lazy"}
              priority={isPriority}
              className="object-cover object-top group-hover:scale-[1.05] transition-all duration-700 ease-out"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[10px] uppercase tracking-wider text-neutral-400 font-bold">
              No Image
            </div>
          )}
        </div>

        {/* Name and Designation */}
        <h4 className="font-extrabold text-[13px] uppercase tracking-wider text-[#0c0d12] transition-colors duration-300 group-hover:text-[#B51F3B] leading-snug w-full truncate">
          {member.name}
        </h4>
        <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mt-1.5 transition-colors duration-300 leading-relaxed truncate">
          {member.role}
        </p>
      </div>

      {/* Modern micro-animation highlight line at bottom */}
      <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#B51F3B] to-[#FF5364] transition-all duration-500 group-hover:w-full" />
    </div>
  );

  return (
    <section ref={containerRef} className="relative py-24 px-6 md:px-16 z-10">
      <div className="max-w-7xl mx-auto">

        {/* Headline section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[2px] bg-gradient-to-r from-[#B51F3B] to-[#FF5364]" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#0c0d12]">
                Our Team
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight uppercase tracking-tight text-[#0c0d12]">
              Shaping Real Estate <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B51F3B] to-[#FF5364]">Together</span>
            </h2>
          </div>
          
          <div className="lg:col-span-7 text-neutral-600 font-medium text-sm md:text-base leading-relaxed space-y-5 md:pl-10 border-l border-neutral-200/60 hidden md:block">
            <p>
              Dee Divine Propinfra is powered by a dedicated team of real estate experts, market analysts, and customer relation managers who work in unison to provide seamless guidance across Gurugram.
            </p>
            <p>
              With decades of collective experience, our leaders and sales professionals focus on customer satisfaction, absolute transparency, and long-term values to make your property acquisition effortless.
            </p>
          </div>
        </div>

        {/* ── 1. BOARD & LEADERSHIP SECTION ── */}
        <div className="team-section-group mb-24">
          <div className="team-group-title flex items-center gap-3 mb-10 border-b border-neutral-200/50 pb-4">
            <div className="w-1.5 h-1.5 bg-gradient-to-br from-[#B51F3B] to-[#FF5364] rounded-full" />
            <h3 className="font-black text-sm uppercase tracking-[0.25em] text-[#0c0d12] w-full">
              Board & Leadership
            </h3>
          </div>
          {/* Prominent layout for leadership with larger cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
            {boardMembers.map((member, idx) => (
              <div key={idx} className="team-card relative overflow-hidden flex flex-col justify-between group bg-white/80 backdrop-blur-md border border-white/60 rounded-3xl p-6 hover:shadow-[0_20px_50px_rgba(229,45,79,0.1)] hover:-translate-y-2 transition-all duration-500 ease-out">
                <div>
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100 mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 90vw, 30vw"
                      loading="eager"
                      priority={true}
                      className="object-cover object-top group-hover:scale-[1.05] transition-all duration-700 ease-out"
                    />
                  </div>
                  <h4 className="font-black text-base uppercase tracking-wider text-[#0c0d12] transition-colors duration-300 group-hover:text-[#B51F3B] leading-snug">
                    {member.name}
                  </h4>
                  <p className="text-[11px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#B51F3B] to-[#FF5364] uppercase tracking-widest mt-2">
                    {member.role}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-gradient-to-r from-[#B51F3B] to-[#FF5364] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* ── 2. VICE PRESIDENTS (VP) ── */}
        <div className="team-section-group mb-24">
          <div className="team-group-title flex items-center gap-3 mb-10 border-b border-neutral-200/50 pb-4">
            <div className="w-1.5 h-1.5 bg-gradient-to-br from-[#B51F3B] to-[#FF5364] rounded-full" />
            <h3 className="font-black text-sm uppercase tracking-[0.25em] text-[#0c0d12] w-full">
              Vice Presidents (VP)
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
            {vpMembers.map((member, idx) => (
              <TeamCard key={idx} member={member} isPriority={false} />
            ))}
          </div>
        </div>

        {/* ── 3. ASSISTANT VICE PRESIDENTS (AVP) ── */}
        <div className="team-section-group mb-24">
          <div className="team-group-title flex items-center gap-3 mb-10 border-b border-neutral-200/50 pb-4">
            <div className="w-1.5 h-1.5 bg-gradient-to-br from-[#B51F3B] to-[#FF5364] rounded-full" />
            <h3 className="font-black text-sm uppercase tracking-[0.25em] text-[#0c0d12] w-full">
              Assistant Vice Presidents (AVP)
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
            {avpMembers.map((member, idx) => (
              <TeamCard key={idx} member={member} isPriority={false} />
            ))}
          </div>
        </div>

        {/* ── 4. GENERAL MANAGERS & TEAM HEADS ── */}
        <div className="team-section-group">
          <div className="team-group-title flex items-center gap-3 mb-10 border-b border-neutral-200/50 pb-4">
            <div className="w-1.5 h-1.5 bg-gradient-to-br from-[#B51F3B] to-[#FF5364] rounded-full" />
            <h3 className="font-black text-sm uppercase tracking-[0.25em] text-[#0c0d12] w-full">
              General Managers & Team Heads
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
            {gmMembers.map((member, idx) => (
              <TeamCard key={idx} member={member} isPriority={false} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}