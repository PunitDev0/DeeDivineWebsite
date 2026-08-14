"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  TrendingUp,
  ShieldCheck,
  Compass,
  CheckCircle2,
  Users,
  Search,
  BarChart3,
  Layers,
  Award,
  ArrowRight,
  Sparkles,
  Briefcase,
  Globe,
  Home,
  MapPin,
  HelpCircle,
  AlertTriangle
} from "lucide-react";

export default function VasstaConsultancyContent() {
  const [activeStep, setActiveStep] = useState(0);

  const offerings = [
    {
      icon: <TrendingUp className="w-6 h-6 text-red-500" />,
      title: "Property Investment Advisory",
      desc: "We help you identify and evaluate property opportunities that align with your investment goals and financial objectives."
    },
    {
      icon: <Home className="w-6 h-6 text-red-500" />,
      title: "Residential Property Consultancy",
      desc: "Explore apartments, luxury residences, villas, and plotted developments selected according to location, budget, lifestyle, and investment potential."
    },
    {
      icon: <Building2 className="w-6 h-6 text-red-500" />,
      title: "Commercial Property Consultancy",
      desc: "Get guidance on commercial properties by evaluating factors such as location, business potential, rental prospects, demand, and long-term value."
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-500" />,
      title: "Land & Plot Investment",
      desc: "Understand opportunities in plotted developments and land investments with a focus on location growth, connectivity, infrastructure, and future potential."
    },
    {
      icon: <Search className="w-6 h-6 text-red-500" />,
      title: "Location Analysis",
      desc: "We help assess emerging and established real estate markets by considering infrastructure development, connectivity, employment hubs, demand, and growth prospects."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-red-500" />,
      title: "Investment Opportunity Evaluation",
      desc: "Compare shortlisted properties across pricing, location, developer profile, project fundamentals, amenities, and potential investment advantages."
    }
  ];

  const whyUs = [
    {
      title: "Insight-Driven Approach",
      desc: "Our consultancy focuses on relevant property information, market understanding, and practical investment analysis."
    },
    {
      title: "Personalised Guidance",
      desc: "Every investor has different objectives. Our recommendations are tailored to your budget, risk preference, investment horizon, and goals."
    },
    {
      title: "Market Understanding",
      desc: "We evaluate the broader real estate environment to help you understand where and why a property may fit your investment strategy."
    },
    {
      title: "Transparent Communication",
      desc: "We believe investors should have a clear understanding of the opportunities and important considerations before making a decision."
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Understand",
      desc: "We first understand your investment objectives, budget, preferred locations, and timeline."
    },
    {
      num: "02",
      title: "Analyse",
      desc: "Suitable markets and properties are reviewed based on key investment factors."
    },
    {
      num: "03",
      title: "Shortlist",
      desc: "We identify relevant opportunities that match your requirements."
    },
    {
      num: "04",
      title: "Compare",
      desc: "Shortlisted properties are compared to help you understand their relative strengths and considerations."
    },
    {
      num: "05",
      title: "Decide",
      desc: "You get the information and guidance needed to make a more informed property investment decision."
    }
  ];

  const clientTypes = [
    {
      title: "First-Time Investors",
      desc: "Understand the fundamentals before entering the property market."
    },
    {
      title: "Experienced Investors",
      desc: "Evaluate new opportunities for portfolio growth and diversification."
    },
    {
      title: "NRI Investors",
      desc: "Explore Indian real estate opportunities with structured property guidance."
    },
    {
      title: "HNI & Premium Buyers",
      desc: "Assess luxury and premium real estate opportunities based on investment objectives."
    }
  ];

  return (
    <section className="bg-[#fcfcfc] min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-12 font-sans text-neutral-800">
      <div className="max-w-6xl mx-auto">
        
        {/* HERO BANNER */}
        <div className="bg-[#0c0d12] text-white rounded-3xl p-8 sm:p-12 md:p-16 mb-16 relative overflow-hidden shadow-2xl border border-black/10">
          {/* Background Glow Overlay */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.25em] mb-6 backdrop-blur-md border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-red-500" />
              <span>Real Estate & Property Advisory</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4 leading-tight">
              Vassta Consultancy
              <span className="block text-red-500 text-2xl sm:text-3xl md:text-4xl mt-2 font-extrabold">
                Property Investment, Guided by Insight
              </span>
            </h1>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
              <p className="mb-4">
                At <strong className="text-white font-bold">Vassta Consultancy</strong>, we believe that a successful property investment begins with the right information, the right strategy, and the right opportunity. Our consultancy helps investors navigate the real estate market with a clear understanding of location, property potential, market trends, and investment objectives.
              </p>
              <p>
                Whether you are looking for a residential property, commercial asset, plotted development, or a long-term real estate investment, our approach is designed to help you make informed and confident decisions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-lg flex items-center gap-2 active:scale-95"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* OVERVIEW SECTION */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-sm mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-red-500" />
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-red-600">
                Our Philosophy
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900 mb-6">
              Our Property Investment Consultancy
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-4">
              Real estate investment involves more than simply choosing a property. Location, pricing, connectivity, market demand, development plans, rental potential, and future appreciation can all influence an investment decision.
            </p>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-medium">
              Vassta Consultancy provides personalised property investment guidance based on your requirements, investment horizon, budget, and objectives.
            </p>
          </div>
        </div>

        {/* WHAT WE OFFER GRID */}
        <div className="mb-16">
          <div className="flex flex-col items-start mb-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-[2px] bg-red-500" />
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-red-600">
                Services Scope
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900">
              What We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-base text-neutral-900 uppercase tracking-wide mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WHY VASSTA CONSULTANCY */}
        <div className="bg-[#0c0d12] text-white rounded-3xl p-8 sm:p-12 mb-16 border border-black/10 relative overflow-hidden shadow-xl">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-red-500" />
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-red-400">
                Key Advantages
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-10">
              Why Vassta Consultancy?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyUs.map((w, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <h3 className="font-bold text-sm sm:text-base text-white uppercase tracking-wide">
                      {w.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pl-8">
                    {w.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* OUR APPROACH STEP-BY-STEP */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-sm mb-16">
          <div className="flex flex-col items-start mb-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-[2px] bg-red-500" />
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-red-600">
                Methodology
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900">
              Our Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((st, idx) => (
              <div key={idx} className="bg-neutral-50 p-5 rounded-2xl border border-neutral-200 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black text-red-600 uppercase tracking-widest block mb-2">
                    {st.num}
                  </span>
                  <h3 className="font-bold text-sm text-neutral-900 uppercase tracking-wide mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WHO WE HELP */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-sm mb-16">
          <div className="flex flex-col items-start mb-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-[2px] bg-red-500" />
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-red-600">
                Target Clientele
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900">
              Who We Help
            </h2>
            <p className="text-neutral-600 text-sm mt-2">
              Vassta Consultancy works with individuals and investors looking for professional guidance across different real estate segments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {clientTypes.map((c, idx) => (
              <div key={idx} className="bg-neutral-50 p-5 rounded-2xl border border-neutral-200 flex flex-col">
                <Users className="w-6 h-6 text-red-500 mb-3" />
                <h3 className="font-bold text-xs sm:text-sm text-neutral-900 uppercase tracking-wide mb-2">
                  {c.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA BANNER */}
        <div className="bg-gradient-to-r from-neutral-900 via-[#0c0d12] to-neutral-900 text-white rounded-3xl p-8 sm:p-12 mb-16 border border-neutral-800 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-4">
              Make Your Next Property Decision With Greater Clarity
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
              The right investment starts with the right evaluation. From selecting the right location to understanding the potential of a property, Vassta Consultancy helps you approach real estate investment with greater clarity and confidence.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-xl active:scale-95"
            >
              <span>Connect With Vassta Consultancy</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* DISCLAIMER */}
        <div className="bg-amber-50/60 border border-amber-200 p-6 rounded-2xl text-amber-950 text-xs leading-relaxed">
          <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-amber-900 mb-2">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Disclaimer</span>
          </div>
          <p>
            Property investment involves market risks, and returns are not guaranteed. Information provided by Vassta Consultancy is for general informational and consultancy purposes only and should not be considered financial, legal, or investment advice. Investors should independently verify property, regulatory, legal, pricing, and financial information before making any investment decision.
          </p>
        </div>

      </div>
    </section>
  );
}
