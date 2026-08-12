"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp,
  BarChart3,
  ShieldCheck,
  Building2,
  Home,
  Layers,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  MapPin,
  Calendar,
  Award,
  Sparkles,
  Search,
  FileCheck
} from "lucide-react";

export default function ServicesContent() {
  const coreServices = [
    {
      id: "asset-strategy",
      tag: "Core Capability 01",
      title: "Asset Strategy",
      description:
        "Building a balanced real estate portfolio across residential, commercial, and plotted developments based on location, market potential, investment goals, and long-term value.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      icon: <TrendingUp className="w-6 h-6 text-red-500" />,
      features: [
        "Balanced Portfolio Building",
        "Residential, Commercial & Plotted Developments",
        "Targeted Growth & Location Analysis",
        "Long-Term Capital Value Optimization",
      ],
    },
    {
      id: "market-intelligence",
      tag: "Core Capability 02",
      title: "Market Intelligence",
      description:
        "Analyzing demand, pricing trends, infrastructure growth, connectivity, and emerging micro-markets to identify real estate opportunities backed by relevant market insights.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      icon: <BarChart3 className="w-6 h-6 text-red-500" />,
      features: [
        "Demand & Pricing Trend Analysis",
        "Infrastructure & Connectivity Mapping",
        "Micro-Market Opportunity Identification",
        "Data-Driven Real Estate Insights",
      ],
    },
    {
      id: "risk-due-diligence",
      tag: "Core Capability 03",
      title: "Risk & Due Diligence",
      description:
        "Evaluating project approvals, RERA details, documentation, developer background, pricing, and market factors to support informed and responsible property decisions.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      icon: <ShieldCheck className="w-6 h-6 text-red-500" />,
      features: [
        "100% RERA & Regulatory Verification",
        "Title & Project Approval Audits",
        "Developer Track Record Evaluation",
        "Transparent Pricing & Market Validation",
      ],
    },
  ];

  const propertySolutions = [
    {
      title: "Residential Property Solutions",
      category: "Living Spaces",
      desc: "Carefully curated luxury apartments, independent floors, villas, and township projects in prime locations.",
      icon: <Home className="w-5 h-5 text-red-500" />,
    },
    {
      title: "Commercial Real Estate",
      category: "Business & Retail",
      desc: "High-yield commercial spaces, corporate offices, SCO plots, and retail avenues designed for strong capital appreciation.",
      icon: <Building2 className="w-5 h-5 text-red-500" />,
    },
    {
      title: "Plotted Developments & Land",
      category: "Land Assets",
      desc: "Strategic residential plots and land developments in high-growth corridors with clear titles and infrastructure access.",
      icon: <Layers className="w-5 h-5 text-red-500" />,
    },
    {
      title: "End-to-End Buyer Assistance",
      category: "Client Advisory",
      desc: "Personalized guidance from initial project discovery, site visits, and price negotiation through documentation and possession.",
      icon: <FileCheck className="w-5 h-5 text-red-500" />,
    },
  ];

  return (
    <section className="bg-[#fcfcfc] min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* HERO BANNER / PROFILE SECTION */}
        <div className="bg-[#0c0d12] text-white rounded-3xl p-8 sm:p-12 md:p-16 mb-16 relative overflow-hidden shadow-2xl border border-black/10">
          {/* Decorative Glow Elements */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-extrabold uppercase tracking-[0.25em] mb-6 backdrop-blur-md border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-red-500" />
              <span>Real Estate Profile</span>
            </div>

            {/* H1 Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-none">
              Dee Divine Propinfra – Real Estate Company & Property Services
            </h1>

            {/* Profile Intro */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 text-neutral-200 text-sm sm:text-base leading-relaxed mb-8 shadow-inner">
              <p className="font-medium">
                <strong className="text-white font-bold">Dee Divine Propinfra Pvt. Ltd.</strong> is a growing real estate organization focused on transparent property solutions, carefully selected projects and customer-centric real estate services. Founded in April 2025, the company aims to create long-term value through trust, innovation and responsible real estate practices.
              </p>
            </div>

            {/* Company Highlights Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-6 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-red-500" />
                <div>
                  <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Founded</div>
                  <div className="font-bold text-white">April 2025</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <div>
                  <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Approach</div>
                  <div className="font-bold text-white">Transparent & Verified</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-red-500" />
                <div>
                  <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Focus</div>
                  <div className="font-bold text-white">Customer-Centric</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-red-500" />
                <div>
                  <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Portfolio</div>
                  <div className="font-bold text-white">Residential, Commercial & Plots</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* SECTION HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-red-500" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-red-500">
              Strategic Pillars
            </span>
            <div className="w-6 h-[2px] bg-red-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#0c0d12]">
            Our Core Real Estate Services
          </h2>
          <p className="text-sm text-neutral-600 mt-3">
            Delivering end-to-end real estate expertise built on thorough market intelligence, structured asset strategy, and rigorous due diligence.
          </p>
        </div>

        {/* CORE SERVICES CARDS WITH SUGGESTED PHOTOS */}
        <div className="space-y-16 mb-24">
          {coreServices.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition-shadow duration-300 grid grid-cols-1 lg:grid-cols-12 items-center"
              >
                {/* PHOTO CONTAINER */}
                <div
                  className={`lg:col-span-6 relative h-[320px] sm:h-[400px] lg:h-[480px] w-full overflow-hidden bg-neutral-900 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    unoptimized
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  
                  {/* Photo Tag Badge */}
                  <div className="absolute top-4 left-4 bg-[#0c0d12]/80 backdrop-blur-sm border border-white/20 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {service.tag}
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-[11px] font-extrabold uppercase tracking-widest text-red-400 mb-1">
                      Featured Pillar
                    </div>
                    <div className="text-xl font-bold">{service.title}</div>
                  </div>
                </div>

                {/* TEXT CONTENT CONTAINER */}
                <div
                  className={`lg:col-span-6 p-8 sm:p-12 space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0c0d12] tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3 text-xs font-semibold text-neutral-800 bg-neutral-50 p-3 rounded-xl border border-neutral-100">
                        <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#0c0d12] hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-sm"
                    >
                      <span>Inquire About {service.title}</span>
                      <ArrowRight className="w-4 h-4 text-red-500" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* EXPANDED PROPERTY SOLUTIONS GRID */}
        <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 md:p-16 mb-20 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-red-500 mb-2 block">
              Comprehensive Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4">
              Property Advisory & Solutions
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Whether you are acquiring a luxury residence, expanding a commercial portfolio, or securing strategic land, Dee Divine Propinfra provides dedicated support tailored to your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {propertySolutions.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 border border-white/10">
                    {item.icon}
                  </div>
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-red-400 mb-1">
                    {item.category}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CALL TO ACTION BANNER */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 text-center shadow-md flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-6">
            <PhoneCall className="w-7 h-7 text-red-500" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0c0d12] tracking-tight mb-3">
            Ready to Discuss Your Property Goals?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl mb-8 leading-relaxed">
            Connect with the Dee Divine Propinfra advisory team for personalized property insights, project walkthroughs, and strategic real estate guidance.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-md active:scale-95"
            >
              Contact Our Experts
            </Link>
            <a
              href="tel:+919211496111"
              className="px-8 py-3.5 bg-[#0c0d12] hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-md active:scale-95 flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-red-500" />
              <span>+91 9211496111</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
