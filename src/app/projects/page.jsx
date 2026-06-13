"use client";

import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "M3M Antalya Hills",
      price: "1.2 Cr* Onwards",
      location: "Dwarka Expressway",
      type: "Residential",
      image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      title: "M3M Golf Hills",
      price: "1.49 Cr* Onwards",
      location: "Dwarka Expressway",
      type: "Residential",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      title: "Twin Tower Signature Global",
      price: "3.97 - 5.41 Cr*",
      location: "Sohna Road",
      type: "Residential",
      image: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      title: "Krisumi Waterfall Residences",
      price: "₹4.18 Cr* Onwards",
      location: "Sector 36A, Gurugram",
      type: "Residential",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      title: "BPTP Lutyens",
      price: "On Request",
      location: "Sector 102, Gurgaon",
      type: "Residential",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 6,
      title: "4S The Aurrum",
      price: "On Request",
      location: "Sector 59, Gurgaon",
      type: "Residential",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 7,
      title: "Elan Presidential 106",
      price: "₹7.25 Cr*",
      location: "Sector 106, Gurgaon",
      type: "Residential",
      image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 8,
      title: "DLF Privana South",
      price: "₹7 Cr* Onwards",
      location: "Sector 77, Gurgaon",
      type: "Residential",
      image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <section className="bg-[#f8f9fa] py-24 px-6 md:px-16 pt-32 border-b border-black/5">
      {/* Banner Area */}
      <div className="max-w-7xl mx-auto mb-16">
        <div
          className="relative w-full h-[250px] md:h-[350px] flex items-end pb-8 pl-8 overflow-hidden bg-cover bg-center border border-black/5"
          style={{ backgroundImage: "url('/assets/hero-section.webp')" }}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-0" />
          
          <div className="relative z-10 bg-[#0c0d12]/80 backdrop-blur-sm text-white px-5 py-3 border border-white/10">
            <Link href="/" className="flex items-center gap-2 text-xs font-black uppercase tracking-wider">
              Projects <ArrowRight size={14} className="text-red-500" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-10">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-red-500" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#e63946]">
              Collection
            </span>
            <div className="w-6 h-[2px] bg-red-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0c0d12]">
            Featured Projects
          </h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white border border-neutral-100 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-[380px]"
            >
              {/* Image wrapper */}
              <div className="relative w-full h-[220px] overflow-hidden bg-neutral-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-[#0c0d12]/80 backdrop-blur-sm px-3 py-1 border border-white/10 text-[9px] uppercase tracking-wider text-white font-bold">
                  {project.type}
                </div>
              </div>

              {/* Contents details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[13px] font-black uppercase tracking-wider text-[#0c0d12] mb-1.5 truncate">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-neutral-500 text-xs mt-1">
                    <MapPin size={12} className="text-red-500" />
                    <span className="truncate">{project.location}</span>
                  </div>
                </div>

                <div className="border-t border-neutral-100 mt-4 pt-3 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Starting Price</span>
                  <span className="text-xs font-black text-red-500">{project.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
