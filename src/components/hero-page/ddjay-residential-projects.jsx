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
    <section className="py-20 px-6 md:px-16 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-red-500" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-red-500">
              Exclusive Projects
            </span>
            <div className="w-6 h-[2px] bg-red-500" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#0c0d12] mb-4 whitespace-nowrap">
            DDJAY Plots & Residential Projects
          </h2>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
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
              className="group bg-white border border-neutral-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between rounded-sm"
            >
              <div>
                <div className="relative h-60 w-full bg-[#0c0d12] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 bg-[#0c0d12]/80 backdrop-blur-md text-white border border-white/10">
                      {project.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-5 md:p-6">
                  <h3 className="text-xl font-black text-[#0c0d12] uppercase tracking-wide mb-2 leading-snug group-hover:text-red-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-neutral-500 text-sm">
                    <MapPin size={16} className="text-red-500" />
                    <span>{project.location}</span>
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
