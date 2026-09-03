"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  TrendingUp,
  MapPin,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Search,
  Award,
  Users,
  Compass,
  FileText,
  BarChart3,
  Landmark,
  Home,
  AlertTriangle
} from "lucide-react";

export default function PropertyInvestmentGurgaonContent() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const keyFactors = [
    {
      title: "Location & Connectivity",
      desc: "Proximity to expressways, metro stations, business hubs, airports, schools, hospitals, and major roads can influence property demand."
    },
    {
      title: "Market Demand",
      desc: "Residential and commercial demand can vary significantly between sectors. Understanding the local demand profile is important before investing."
    },
    {
      title: "Developer Reputation",
      desc: "The developer's track record, project approvals, construction quality, and delivery history should be carefully reviewed."
    },
    {
      title: "Pricing & Value",
      desc: "Comparing property prices with similar developments can help investors understand whether an opportunity is reasonably positioned within its market."
    },
    {
      title: "Future Development",
      desc: "Upcoming infrastructure, employment hubs, commercial development, and improved connectivity can influence a location's future attractiveness."
    }
  ];

  const categories = [
    {
      title: "Residential Property Investment",
      desc: "Residential properties remain a preferred choice for investors seeking a combination of end-user demand, rental potential, and long-term appreciation. Options may include premium apartments, luxury residences, independent floors, villas, and plotted developments across established and emerging sectors."
    },
    {
      title: "Commercial Property Investment",
      desc: "Commercial real estate can appeal to investors looking for rental-oriented assets and exposure to Gurgaon’s business ecosystem. Offices, high-street retail, and other commercial assets should be evaluated on location, occupancy prospects, tenant demand, and project quality."
    },
    {
      title: "Plots & Land Investment",
      desc: "Plots can provide flexibility and may appeal to investors seeking long-term land ownership. Location, legal status, approvals, infrastructure, development potential, and access to major connectivity corridors are particularly important in this segment."
    },
    {
      title: "Luxury Property Investment",
      desc: "Gurgaon has a strong premium housing segment, with luxury residences positioned near established business districts and high-value residential corridors. Investors should evaluate both the property's fundamentals and the depth of demand within the specific micro-market."
    }
  ];

  const areas = [
    {
      title: "Golf Course Road",
      desc: "An established premium corridor known for luxury residential developments, commercial activity, and access to major business districts."
    },
    {
      title: "Golf Course Extension Road",
      desc: "A growing residential and commercial corridor with a wide range of new developments and improving infrastructure."
    },
    {
      title: "Southern Peripheral Road (SPR)",
      desc: "SPR has emerged as an important growth corridor connecting several residential and commercial micro-markets. Its surrounding development makes it an area worth evaluating for long-term investors."
    },
    {
      title: "Dwarka Expressway",
      desc: "Dwarka Expressway has become a major real estate corridor connecting Gurgaon with Delhi and the airport region. Investors should assess individual projects based on connectivity, surrounding development, pricing, and delivery timelines."
    },
    {
      title: "New Gurgaon",
      desc: "Sectors in New Gurgaon offer a broad mix of residential developments and improving infrastructure, making the region relevant for investors looking at different price points and longer investment horizons."
    }
  ];

  const vasstaServices = [
    {
      step: "01",
      title: "Investment Requirement Analysis",
      desc: "We understand your preferred budget, property type, location, investment objective, and expected holding period."
    },
    {
      step: "02",
      title: "Location Evaluation",
      desc: "We compare suitable micro-markets based on connectivity, infrastructure, demand, surrounding development, and future growth drivers."
    },
    {
      step: "03",
      title: "Property Shortlisting",
      desc: "Relevant properties are shortlisted according to your investment criteria rather than using a one-size-fits-all approach."
    },
    {
      step: "04",
      title: "Opportunity Comparison",
      desc: "We help you compare properties on location, pricing, developer profile, specifications, amenities, demand, and other relevant factors."
    },
    {
      step: "05",
      title: "Investment Guidance",
      desc: "Our Property Investment Consultant in Gurgaon approach is designed to provide clear and practical information so investors can make better-informed decisions."
    }
  ];

  const investorTypes = [
    {
      title: "First-Time Investors",
      desc: "Get a better understanding of locations, property types, pricing, and basic investment considerations before entering the market."
    },
    {
      title: "Experienced Investors",
      desc: "Evaluate new opportunities for portfolio diversification and long-term real estate exposure."
    },
    {
      title: "NRI Investors",
      desc: "Explore Gurgaon property opportunities with location and project-focused guidance."
    },
    {
      title: "HNI & Premium Investors",
      desc: "Assess luxury and premium assets based on location quality, project positioning, demand, and investment objectives."
    }
  ];

  const faqs = [
    {
      q: "Which is the best area for property investment in Gurgaon?",
      a: "The best area depends on your budget, investment objective, property type, and investment horizon. Golf Course Road, Golf Course Extension Road, SPR, Dwarka Expressway, and New Gurgaon are among the key micro-markets investors may evaluate."
    },
    {
      q: "Is Gurgaon good for real estate investment?",
      a: "Gurgaon offers a diverse residential and commercial property market. Investment suitability depends on the specific location, project, pricing, demand, and long-term investment objective."
    },
    {
      q: "What should I check before investing in Gurgaon property?",
      a: "Investors should review location, developer credentials, project approvals, pricing, construction status, connectivity, market demand, and future development plans."
    },
    {
      q: "Can a property investment consultant help me choose a property?",
      a: "A qualified consultant can help compare locations and properties, analyse relevant investment factors, and provide guidance based on your requirements. Investors should still conduct their own independent due diligence."
    }
  ];

  return (
    <section className="bg-[#fcfcfc] min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-12 font-sans text-neutral-800">
      <div className="max-w-6xl mx-auto">
        
        {/* HERO BANNER */}
        <div className="bg-[#0c0d12] text-white rounded-3xl p-8 sm:p-12 md:p-16 mb-16 relative overflow-hidden shadow-2xl border border-black/10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.25em] mb-6 backdrop-blur-md border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-red-500" />
              <span>Real Estate Investment Guide • Gurugram</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4 leading-tight">
              Property Investment in Gurgaon
              <span className="block text-red-500 text-2xl sm:text-3xl md:text-4xl mt-2 font-extrabold">
                Smarter Property Investment Starts With the Right Guidance
              </span>
            </h1>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
              <p className="mb-4">
                Gurgaon, officially known as Gurugram, has become one of India’s leading real estate markets, supported by strong corporate activity, expanding infrastructure, premium residential developments, and growing commercial demand. For investors, this creates a wide range of opportunities across residential, commercial, luxury, and plotted developments.
              </p>
              <p>
                However, choosing the right property requires more than comparing prices. Location, connectivity, developer reputation, project fundamentals, demand, and long-term growth potential all need to be considered.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-lg flex items-center gap-2 active:scale-95"
              >
                <span>Speak With Vassta Consultancy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* WHY CONSIDER PROPERTY INVESTMENT IN GURGAON */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-sm mb-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-red-500" />
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-red-600">
                Market Dynamics
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900 mb-6">
              Why Consider Property Investment in Gurgaon?
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
              Gurgaon has developed into a major employment and business destination in the National Capital Region. Areas around major expressways, business districts, metro corridors, and emerging infrastructure have continued to attract residential and commercial development.
            </p>

            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200 mb-6">
              <h3 className="font-bold text-xs sm:text-sm text-neutral-900 uppercase tracking-wider mb-4">
                Key Investment Options in Gurgaon:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  "Residential apartments and luxury residences",
                  "Commercial offices and retail properties",
                  "Plots and plotted developments",
                  "Premium and high-end properties",
                  "Rental-focused investments",
                  "Long-term growth opportunities"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-neutral-200 text-xs font-medium text-neutral-800">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-500 italic">
              The right investment depends on the specific property, location, entry price, market demand, and investment horizon rather than simply choosing a popular area.
            </p>
          </div>
        </div>

        {/* REAL ESTATE INVESTMENT IN GURGAON - KEY FACTORS */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-sm mb-16">
          <div className="flex flex-col items-start mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-[2px] bg-red-500" />
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-red-600">
                Evaluation Metrics
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900">
              Real Estate Investment in Gurgaon: Key Factors
            </h2>
            <p className="text-neutral-600 text-sm mt-2 max-w-3xl">
              <Link href="https://deedivinepropinfra.com/property-investment-in-gurgaon" className="text-neutral-900 font-bold">Real Estate Investment in Gurgaon</Link> can offer investors access to one of the NCR&apos;s most diverse property markets. Established locations provide mature infrastructure, while emerging corridors offer growth linked to future development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFactors.map((k, idx) => (
              <div key={idx} className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-neutral-900 uppercase tracking-wide mb-2">
                    {k.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {k.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROPERTY INVESTMENT OPPORTUNITIES IN GURGAON */}
        <div className="bg-[#0c0d12] text-white rounded-3xl p-8 sm:p-12 mb-16 border border-black/10 relative overflow-hidden shadow-xl">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-red-500" />
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-red-400">
                Asset Classes
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-8">
              Property Investment Opportunities in Gurgaon
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {categories.map((c, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                  <h3 className="font-bold text-base text-white uppercase tracking-wide mb-3">
                    {c.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BEST AREAS FOR PROPERTY INVESTMENT */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-sm mb-16">
          <div className="flex flex-col items-start mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-[2px] bg-red-500" />
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-red-600">
                Micro-Market Analysis
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900">
              Best Areas for Property Investment in Gurgaon
            </h2>
            <p className="text-neutral-600 text-sm mt-2">
              There is no single best location for every investor. <Link href="https://deedivinepropinfra.com/blog/real-estate-investment-in-gurgaon-2026-guide-trends" className="text-neutral-900 font-bold">The Best Areas for Property Investment in Gurgaon</Link> depend on budget, investment horizon, property type, and intended use.
            </p>
          </div>

          <div className="space-y-4">
            {areas.map((a, idx) => (
              <div key={idx} className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <h3 className="font-bold text-sm sm:text-base text-neutral-900 uppercase tracking-wide">
                    {a.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed md:max-w-2xl">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* HOW VASSTA CONSULTANCY HELPS */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-sm mb-16">
          <div className="flex flex-col items-start mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-[2px] bg-red-500" />
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-red-600">
                Consultancy Support
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900">
              How Vassta Consultancy Helps Investors
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {vasstaServices.map((v, idx) => (
              <div key={idx} className="bg-neutral-50 p-5 rounded-2xl border border-neutral-200 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black text-red-600 uppercase tracking-widest block mb-2">
                    {v.step}
                  </span>
                  <h3 className="font-bold text-sm text-neutral-900 uppercase tracking-wide mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROPERTY INVESTMENT CONSULTANT & COMPANY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-sm">
            <h2 className="text-xl font-black uppercase tracking-tight text-neutral-900 mb-4">
              Choosing a Property Investment Consultant in Gurgaon
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
              A professional Property Investment Consultant in Gurgaon can help investors reduce the complexity involved in evaluating multiple properties and locations. Before selecting a property, investors should consider:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-neutral-800">
              {[
                "Project and developer credentials",
                "Applicable approvals and regulatory info",
                "Location and connectivity",
                "Current market pricing",
                "Rental and end-user demand",
                "Construction and possession status",
                "Future infrastructure",
                "Resale and exit considerations"
              ].map((check, i) => (
                <div key={i} className="flex items-center gap-2 bg-neutral-50 p-2.5 rounded-lg border border-neutral-100">
                  <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span>{check}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-black uppercase tracking-tight text-neutral-900 mb-4">
                Property Investment Company in Gurgaon
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                <Link href="https://deedivinepropinfra.com/property-investment-in-gurgaon" className="text-neutral-900 font-bold">Finding the right Property Investment Company in Gurgaon</Link> is important when you need guidance across multiple property options. Vassta Consultancy focuses on a research-led approach to property evaluation, helping clients explore residential, commercial, plotted, and luxury investment opportunities across Gurgaon.
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-medium">
                Our role is to provide clarity around the opportunity, highlight key considerations, and help investors compare suitable options based on their individual requirements.
              </p>
            </div>
          </div>
        </div>

        {/* WHO CAN INVEST */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-sm mb-16">
          <div className="flex flex-col items-start mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-[2px] bg-red-500" />
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-red-600">
                Target Profiles
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900">
              Who Can Invest in Gurgaon Property?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {investorTypes.map((inv, idx) => (
              <div key={idx} className="bg-neutral-50 p-5 rounded-2xl border border-neutral-200">
                <Users className="w-6 h-6 text-red-500 mb-3" />
                <h3 className="font-bold text-xs sm:text-sm text-neutral-900 uppercase tracking-wide mb-2">
                  {inv.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {inv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQS SECTION */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-sm mb-16">
          <div className="flex flex-col items-start mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-[2px] bg-red-500" />
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-red-600">
                FAQs
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-neutral-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left bg-neutral-50 flex items-center justify-between font-bold text-xs sm:text-sm text-neutral-900 uppercase tracking-wide hover:bg-neutral-100 transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="p-5 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-200 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA BANNER */}
        <div className="bg-gradient-to-r from-neutral-900 via-[#0c0d12] to-neutral-900 text-white rounded-3xl p-8 sm:p-12 mb-16 border border-neutral-800 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-4">
              Start Your Gurgaon Property Investment Journey
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
              The right property investment is not necessarily the most expensive property or the most popular project. It is the opportunity that best matches your investment objective, budget, location preference, and time horizon.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-xl active:scale-95"
            >
              <span>Speak With Vassta Consultancy</span>
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
            Property investment involves market risks, and returns are not guaranteed. The information provided by <Link href="https://deedivinepropinfra.com/vassta-consultancy" className="text-neutral-900 font-bold">Vassta Consultancy</Link> is for general informational and consultancy purposes only and should not be considered financial, legal, or investment advice. Investors should independently verify project, regulatory, legal, pricing, tax, and financial information before making any investment decision.
          </p>
        </div>

      </div>
    </section>
  );
}
