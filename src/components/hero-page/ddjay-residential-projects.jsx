import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

export default function DdjayResidentialProjects() {
  const projects = [
    {
      id: 1,
      title: "Aaranya Greens",
      location: "Sonipat, Haryana",
      image: "/assets/project1-new.png",
      url: "https://deendayaljanawasyojnareg.com/",
      type: "DDJAY Plots",
    },
    {
      id: 2,
      title: "Deen Dayal Jan Awas Yojna",
      location: "Sector 27, Jhajjar",
      image: "/assets/project2-new.png",
      url: "https://www.deendayaljanawasyojanajhajjar.org/",
      type: "Residential",
    },
    {
      id: 3,
      title: "Shree KRISHNA HERITAGE",
      location: "Jhajjar",
      image: "/assets/project3-new.png",
      url: "https://www.deendayaljanawasyojanajhajjar.com/",
      type: "Premium Plots",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 md:px-16 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-5xl mx-auto mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-4 sm:w-6 h-[2px] bg-gradient-to-r from-[#8F1230] via-[#FF5A67] to-[#D9233E]" />
            <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.2em] sm:tracking-[0.35em] bg-gradient-to-r from-[#8F1230] to-[#FF5A67] bg-clip-text text-transparent">
              Exclusive Projects
            </span>
            <div className="w-4 sm:w-6 h-[2px] bg-gradient-to-r from-[#D9233E] via-[#FF5A67] to-[#8F1230]" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#0c0d12] mb-4">
            DDJAY Plots & Residential Projects
          </h2>
          <p className="text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed px-2">
            Affordable, HARERA-approved DDJAY plots and homes across Gurgaon and Delhi NCR.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/70 backdrop-blur-xl border border-neutral-200/60 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(217,35,62,0.12)] hover:-translate-y-1 hover:border-[#D9233E]/20 transition-all duration-500 flex flex-col justify-between rounded-3xl p-3 sm:p-4"
            >
              {/* Subtle red gradient glow inside the card on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF5A67]/0 to-[#8F1230]/0 group-hover:from-[#FF5A67]/5 group-hover:to-[#8F1230]/5 transition-colors duration-500 rounded-3xl pointer-events-none z-0"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="relative aspect-[4/3] w-full bg-neutral-100/50 overflow-hidden rounded-2xl border border-black/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out p-4"
                  />
                  {/* Premium Red Glass Badge */}
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-[#8F1230]/90 to-[#D9233E]/90 backdrop-blur-md px-3.5 py-1.5 border border-white/20 text-[9px] uppercase tracking-widest text-white font-black rounded-full shadow-[0_4px_12px_rgba(217,35,62,0.4)]">
                    {project.type}
                  </div>
                </div>
                
                <div className="pt-5 pb-2 px-2 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-[15px] sm:text-[17px] font-black text-[#0c0d12] uppercase tracking-wide mb-2 leading-snug group-hover:text-[#D9233E] transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-neutral-500 text-xs mt-3 border-t border-neutral-200/60 pt-4">
                    <MapPin size={14} className="text-[#D9233E] shrink-0" />
                    <span className="truncate font-medium">{project.location}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
