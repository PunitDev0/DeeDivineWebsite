"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  { name: "Mr. Diwakar Dixit", role: "Founder & Director", image: "/assets/employes/diwakar sir.jpg", linkedin: "https://www.linkedin.com/in/diwakar-dixit-391751339/" },
  { name: "Mrs. Kavita Dixit", role: "Chairman", image: "/assets/employes/kavita mam.jpg", linkedin: "https://www.linkedin.com/in/kavita-dixit-0912b5239/" },
  { name: "Mr. Dhananjay Arya", role: "MD (Managing Director)", image: "/assets/employes/dj sir.jpg" },
  { name: "Ashish Dixit", role: "Team Head", image: "/assets/employes/ashish dixit.jpg", linkedin: "https://www.linkedin.com/in/ashish-kumar-88116b173" },
  { name: "Rajiv Singh", role: "Team Head", image: "/assets/employes/rajiv singh.jpg" },
  { name: "Manish Sharma", role: "VP – Finance / Accounts", image: "/assets/employes/manish sharma.jpg" },
  { name: "Akshay Chauhan", role: "VP – Marketing", image: "/assets/employes/akshay chauhan.jpg", linkedin: "https://www.linkedin.com/in/akshay-chauhan-dm/" },
  { name: "Rohit", role: "VP – Sales", image: "/assets/employes/rohit.jpg" },
  { name: "Aditya Singh", role: "VP", image: "/assets/aditya.jpg" },
  { name: "Sukhpreet", role: "VP – Sales", image: "/assets/employes/sukhpreet.jpg" },
  { name: "Sanaya", role: "AVP – Sales", image: "/assets/employes/sanaya.jpg" },
  { name: "Saurav Kumar", role: "AVP – Sales", image: "/assets/employes/saurav.jpg" },
  { name: "Deepak Singh", role: "General Manager", image: "/assets/employes/deepak singh.jpg" },
  { name: "Neeraj Nayar", role: "Team Head", image: "/assets/employes/neeraj nayar.jpg" },
  { name: "Vinay Raj", role: "Team Head", image: "/assets/employes/vinay raj.jpg" },
];

function TeamCard({ member }) {
  return (
    <div className="team-card group relative flex flex-col justify-between bg-white/80 backdrop-blur-md border border-white/60 rounded-2xl p-4 md:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#FF5364]/30 hover:shadow-[0_15px_40px_rgba(229,45,79,0.08)] hover:-translate-y-1 transition-all duration-500 overflow-hidden">
      <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-neutral-100 mb-4">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 15vw"
          className="object-cover object-top group-hover:scale-[1.05] transition-all duration-700 ease-out"
        />
      </div>
      <div className="flex items-center justify-between gap-2">
        <h4 className="font-extrabold text-[13px] uppercase tracking-wider text-[#0c0d12] group-hover:text-[#B51F3B] transition-colors duration-300 leading-snug truncate">
          {member.name}
        </h4>
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="shrink-0 w-6 h-6 rounded-md bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
          </a>
        )}
      </div>
      <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mt-1.5 truncate">
        {member.role}
      </p>
      <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#B51F3B] to-[#FF5364] transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

export default function TeamSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".team-card",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: { trigger: ".team-grid", start: "top 85%", toggleActions: "play none none none" },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-24 px-6 md:px-16 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Headline section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
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


        <div className="team-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
          {teamMembers.map((member, idx) => (
            <TeamCard key={idx} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
