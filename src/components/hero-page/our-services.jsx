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
    <section className="relative py-20 md:py-24 px-6 md:px-12 lg:px-16 bg-[#fcfcfc] overflow-hidden">
      {/* Subtle Premium Background Glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(217,35,62,0.03)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* Title Header */}
        <div className="flex flex-col items-center mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-[2px] bg-gradient-to-r from-[#8F1230] to-[#FF5A67]" />
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.35em] bg-gradient-to-r from-[#8F1230] to-[#FF5A67] bg-clip-text text-transparent">
              End-to-End Solutions
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#0c0d12] max-w-3xl px-2 leading-[1.15]">
            Our Real Estate Consulting Services in Gurgaon
          </h2>

          <p className="text-[#5F6065] text-sm md:text-base leading-relaxed max-w-2xl mt-6 px-2">
            We offer comprehensive, end-to-end real estate consulting designed to simplify every step of your property journey:
          </p>
        </div>

        {/* Services Grid (5 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10 text-left">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group flex flex-col justify-between items-start p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(217,35,62,0.1)] hover:-translate-y-1.5 transition-all duration-500 rounded-2xl border ${
                service.active
                  ? "bg-gradient-to-br from-[#08090C] via-[#240A12] to-[#5A1022] border-[#D9233E]/30 text-white relative overflow-hidden"
                  : "bg-white/60 backdrop-blur-md border-neutral-200/60 hover:border-[#D9233E]/40 text-[#0c0d12]"
              } ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              {/* Subtle inner red glow for active card */}
              {service.active && (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,35,62,0.15)_0%,transparent_60%)] pointer-events-none group-hover:opacity-80 transition-opacity duration-500"></div>
              )}

              <div className="relative z-10 w-full">
                <div className="flex items-center justify-between w-full mb-8">
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-105 ${
                      service.active 
                        ? "bg-gradient-to-br from-[#8F1230] to-[#D9233E] text-white border border-white/10 shadow-[0_4px_12px_rgba(217,35,62,0.4)] group-hover:brightness-110" 
                        : "bg-gradient-to-br from-[#8F1230]/10 to-[#FF5A67]/5 text-[#D9233E] border border-[#D9233E]/20 group-hover:bg-[#8F1230]/15"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <span className={`text-[11px] font-extrabold uppercase tracking-[0.25em] transition-colors duration-300 ${
                    service.active ? "text-[#E5E7EB] group-hover:text-white" : "text-[#8b8c91] group-hover:text-[#5F6065]"
                  }`}>
                    SERVICE {service.number}
                  </span>
                </div>

                <h3 className={`text-[15px] font-black uppercase tracking-wider mb-3 ${service.active ? "text-white" : "text-[#0c0d12]"}`}>
                  {service.title}
                </h3>

                <p className={`text-[13px] leading-relaxed ${service.active ? "text-[#E5E7EB]" : "text-[#6B6D72]"}`}>
                  {service.description}
                </p>
              </div>

              {/* Bottom Gradient Accent */}
              <div className={`w-full h-[2px] mt-8 relative z-10 ${
                service.active 
                  ? "bg-gradient-to-r from-[#8F1230] via-[#D9233E] to-[#FF5A67] opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                  : "bg-gradient-to-r from-[#8F1230]/20 via-[#D9233E]/20 to-[#FF5A67]/20 group-hover:from-[#8F1230] group-hover:via-[#D9233E] group-hover:to-[#FF5A67] transition-all duration-500"
              }`} />
            </div>
          ))}
        </div>

        {/* Closing Corridor Tagline Banner */}
        <div className="mt-16 bg-white/80 backdrop-blur-md border border-[#D9233E]/20 p-6 rounded-2xl max-w-3xl mx-auto shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(217,35,62,0.08)] transition-all duration-500 flex items-center justify-center gap-4 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8F1230]/10 to-[#FF5A67]/10 flex items-center justify-center text-[#D9233E] flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
            <CheckCircle size={20} />
          </div>
          <p className="text-[13px] sm:text-sm font-black uppercase tracking-wide text-[#0c0d12] text-left">
            Whichever corridor fits your needs, our local expertise ensures you invest with confidence.
          </p>
        </div>

      </div>
    </section>
  );
}
