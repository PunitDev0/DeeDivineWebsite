"use client";

import { Home, ShieldCheck, Clock, FileText } from "lucide-react";

export default function OurServices() {
  const services = [
    {
      title: "Affordable Property Options",
      description:
        "We help you find the best value-driven homes by offering a curated and smart real estate consulting experience.",
      icon: <Home size={28} />,
      active: true, // highlighted card
    },
    {
      title: "Guaranteed Quality Homes",
      description:
        "Every single listing is verified to meet premium structural and legal standards so you can invest with absolute peace of mind.",
      icon: <ShieldCheck size={28} />,
    },
    {
      title: "Fast and Easy Process",
      description:
        "From property tour schedules to document clearance, our team manages the entire process smoothly without hassles.",
      icon: <Clock size={28} />,
    },
    {
      title: "Property Consulting",
      description:
        "Detailed legal checking, tax consults, and strategic real estate guidance tailored directly to your future needs.",
      icon: <FileText size={28} />,
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-[#f8f9fa] border-b border-black/5">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-red-500" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#e63946]">
              Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0c0d12]">
            Our Core Services
          </h2>
          <p className="text-neutral-500 text-sm leading-relaxed max-w-md mt-4">
            Simplifying real estate and offering reliable consultancy services across Delhi NCR.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col items-start p-8 shadow-sm hover:shadow-md transition-all duration-300 border ${
                service.active
                  ? "bg-[#0c0d12] text-white border-[#0c0d12]"
                  : "bg-white text-[#0c0d12] border-neutral-100 hover:bg-[#ffffff]"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-12 h-12 flex items-center justify-center ${
                    service.active ? "bg-white/10 text-red-400" : "bg-neutral-50 text-red-500 border border-neutral-100"
                  }`}
                >
                  {service.icon}
                </div>
                
                <h3 className="text-base font-black uppercase tracking-wider">
                  {service.title}
                </h3>
              </div>
              
              <p className={`text-xs sm:text-sm leading-relaxed text-left ${
                service.active ? "text-neutral-400" : "text-neutral-500"
              }`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
