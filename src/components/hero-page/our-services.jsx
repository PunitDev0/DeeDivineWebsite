"use client";

import { Home, Eye, Scale, FileText, Key, CheckCircle } from "lucide-react";

export default function OurServices() {
  const services = [
    {
      number: "01",
      title: "Property Consultation & Matching",
      description:
        "Understanding your budget, location preference, and investment goals to shortlist the right options tailored specifically to your needs.",
      icon: <Home size={24} />,
      active: true, // Highlighted card
    },
    {
      number: "02",
      title: "Site Visits & Comparative Analysis",
      description:
        "Guided tours with detailed pricing, project comparisons, and transparent market evaluation across prime Gurgaon sectors.",
      icon: <Eye size={24} />,
    },
    {
      number: "03",
      title: "Legal & Regulatory Due Diligence",
      description:
        "Thorough verification of ownership records, HARERA approvals, builder licenses, and municipal permits to guarantee safety.",
      icon: <Scale size={24} />,
    },
    {
      number: "04",
      title: "Loan & Documentation Assistance",
      description:
        "Complete support with bank coordination, loan evaluation, interest rate optimization, and legal paperwork execution.",
      icon: <FileText size={24} />,
    },
    {
      number: "05",
      title: "Registry & Handover",
      description:
        "Complete assistance through final transaction closure, stamp duty execution, and key registry handover.",
      icon: <Key size={24} />,
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-[#f8f9fa] border-b border-black/5">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Title Header */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-red-500" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#e63946]">
              End-to-End Solutions
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#0c0d12] max-w-3xl">
            Our Real Estate Consulting Services in Gurgaon
          </h2>
          
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-2xl mt-4">
            We offer comprehensive, end-to-end real estate consulting designed to simplify every step of your property journey:
          </p>
        </div>

        {/* Services Grid (5 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between items-start p-8 shadow-sm hover:shadow-md transition-all duration-300 border ${
                service.active
                  ? "bg-[#0c0d12] text-white border-[#0c0d12]"
                  : "bg-white text-[#0c0d12] border-neutral-200/80 hover:bg-[#ffffff]"
              } ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div>
                <div className="flex items-center justify-between w-full mb-6">
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-sm ${
                      service.active ? "bg-white/10 text-red-400" : "bg-neutral-50 text-red-500 border border-neutral-100"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <span className={`text-xs font-black tracking-widest ${service.active ? "text-neutral-400" : "text-neutral-300"}`}>
                    SERVICE {service.number}
                  </span>
                </div>
                
                <h3 className="text-base font-black uppercase tracking-wider mb-3 text-left">
                  {service.title}
                </h3>
                
                <p className={`text-xs sm:text-sm leading-relaxed text-left ${
                  service.active ? "text-neutral-400" : "text-neutral-600"
                }`}>
                  {service.description}
                </p>
              </div>

              <div className={`w-full h-[2px] mt-6 ${service.active ? "bg-red-500" : "bg-neutral-100"}`} />
            </div>
          ))}
        </div>

        {/* Closing Corridor Tagline Banner */}
        <div className="mt-16 bg-white border border-neutral-200 p-6 max-w-2xl mx-auto shadow-sm flex items-center justify-center gap-3">
          <CheckCircle className="text-red-500 flex-shrink-0" size={20} />
          <p className="text-xs md:text-sm font-black uppercase tracking-wide text-[#0c0d12]">
            Whichever corridor fits your needs, our local expertise ensures you invest with confidence.
          </p>
        </div>

      </div>
    </section>
  );
}
