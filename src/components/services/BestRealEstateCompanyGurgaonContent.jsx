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
  AlertTriangle,
  Star
} from "lucide-react";

export default function BestRealEstateCompanyGurgaonContent() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const bestPillars = [
    {
      title: "Regulatory compliance",
      desc: "Every project listed is verifiable against HARERA and DTCP records, with registration numbers disclosed upfront, not buried in fine print."
    },
    {
      title: "Transparent pricing",
      desc: "No inflated 'starting from' figures that vanish once you ask for a quote."
    },
    {
      title: "Post-sale accountability",
      desc: "A company that stays reachable after the token amount is paid, not just before."
    },
    {
      title: "Market-specific expertise",
      desc: "Genuine familiarity with Gurgaon's micro-markets, from established sectors to emerging corridors along Dwarka Expressway and SPR."
    }
  ];

  const whyChooseUs = [
    {
      step: "01",
      title: "HARERA-First Documentation",
      desc: "Every property we list or advise on carries verifiable HARERA registration. As a property investment company in Gurgaon, we treat regulatory disclosure as a baseline requirement, not a marketing checkbox. Buyers are shown registration numbers, project timelines, and land-use approvals before any conversation about pricing begins."
    },
    {
      step: "02",
      title: "On-Ground Market Intelligence",
      desc: "Gurgaon isn't one market, it's a collection of them. Sector 58-115 pricing behaves differently from New Gurgaon, and Dwarka Expressway carries its own supply-demand dynamics. Our advisory team tracks these shifts closely, which is what makes Dee Divine a dependable real estate consultant in Gurgaon for both first-time buyers and repeat investors."
    },
    {
      step: "03",
      title: "End-to-End Investment Support",
      desc: "Buying property in Gurgaon involves more than shortlisting a unit. Our team supports clients through site visits, legal due diligence, loan facilitation, and registration—the full cycle that separates a best real estate agency in Gurgaon from a pure listings platform."
    },
    {
      step: "04",
      title: "Channel Partner Network",
      desc: "For brokers and associates, Dee Divine runs a structured channel partner program with clear commission timelines and project access across our Gurgaon and NCR portfolio—built for partners who want a long-term relationship, not a one-off deal."
    }
  ];

  const microMarkets = [
    {
      title: "Established sectors (Golf Course Road, MG Road belt)",
      desc: "Mature infrastructure, premium pricing, limited fresh inventory."
    },
    {
      title: "New Gurgaon (Sectors 82-115)",
      desc: "Expanding infrastructure, competitive entry pricing, strong end-user demand."
    },
    {
      title: "Dwarka Expressway corridor",
      desc: "High investor interest tied to connectivity upgrades and upcoming commercial development."
    },
    {
      title: "Southern Peripheral Road (SPR)",
      desc: "A mixed-use corridor gaining traction for both residential and commercial investment."
    }
  ];

  const howWeWork = [
    {
      title: "Requirement discussion",
      desc: "Understanding budget, purpose (investment vs. end-use), and preferred locations."
    },
    {
      title: "Shortlisting and site visits",
      desc: "Curated options based on verified HARERA status and current market pricing."
    },
    {
      title: "Documentation and due diligence",
      desc: "Title verification, RERA cross-checks, and clear cost breakdowns."
    },
    {
      title: "Post-sale support",
      desc: "Registration assistance and continued point of contact after the transaction closes."
    }
  ];

  const faqs = [
    {
      q: "Which is the best real estate company in Gurgaon for first-time buyers?",
      a: "For first-time buyers, the priority should be a company that explains documentation clearly and doesn't rush the decision. Dee Divine PropInfra focuses on HARERA-verified listings and walks first-time buyers through the full legal and financial process step by step."
    },
    {
      q: "What should I check before choosing a real estate company in Gurgaon?",
      a: "Start with the company's RERA/HARERA registration, its physical office address, and how long it has operated in the market. A genuine property investment company in Gurgaon will disclose all three without hesitation, along with clear documentation for any project it represents."
    },
    {
      q: "Why is Dee Divine considered a reliable property investment company in Gurgaon?",
      a: "Dee Divine PropInfra operates under RERA Certificate No. HARERA/GGM/3889/3484/2025/766, has been active in the Gurgaon-NCR market for over 10 years, and maintains a physical office at M3M Broadway, Sector 71, SPR Road, where clients can verify credentials directly."
    },
    {
      q: "How do I verify if a Gurgaon property is HARERA-registered?",
      a: "Every HARERA-registered project carries a unique registration number that can be checked on the official Haryana RERA portal. A trustworthy real estate consultant in Gurgaon will share this number upfront, before any site visit or booking discussion."
    },
    {
      q: "What is HARERA and why does it matter when buying property in Gurgaon?",
      a: "HARERA (Haryana Real Estate Regulatory Authority) is the state regulatory body that mandates registration, timeline disclosure, and escrow protection for real estate projects in Haryana. Buying only HARERA-registered property significantly reduces the risk of project delays or fund misuse."
    },
    {
      q: "How is a real estate consultant different from a property dealer in Gurgaon?",
      a: "A real estate consultant typically offers end-to-end advisory—market analysis, legal due diligence, and investment planning—while a property dealer usually focuses on transaction facilitation. Dee Divine PropInfra operates as both, combining advisory depth with on-ground transaction support."
    },
    {
      q: "How do I know if a property dealer in Gurgaon is trustworthy?",
      a: "Check whether the dealer discloses RERA registration numbers for every project they represent, has a verifiable office address, and is willing to put payment terms in writing before collecting any advance. Avoid dealers who pressure quick decisions or avoid documentation questions."
    },
    {
      q: "What documents should I ask for when buying property in Gurgaon?",
      a: "Ask for the project's HARERA registration certificate, sanctioned building plan, title deed or chain of ownership documents, and an encumbrance certificate. A reliable real estate agency in Gurgaon will provide these before accepting any booking amount."
    },
    {
      q: "What areas in Gurgaon are best for property investment right now?",
      a: "New Gurgaon sectors and the Dwarka Expressway corridor are currently seeing strong investor interest due to ongoing infrastructure development, though the right choice depends on your budget and investment horizon. A consultation helps match the corridor to your specific goals."
    },
    {
      q: "Which sectors in Gurgaon offer the best rental yield for investors?",
      a: "Sectors along the Dwarka Expressway and New Gurgaon corridor have shown relatively strong rental demand due to proximity to commercial hubs and improving infrastructure, though yields vary by property type and configuration. A location-specific consultation gives a more accurate picture for your investment size."
    },
    {
      q: "Are plots or apartments a better investment in Gurgaon right now?",
      a: "Both have different risk-return profiles. Plots typically offer lower entry cost and long-term appreciation potential in developing corridors, while apartments suit buyers prioritizing immediate livability or rental income. The right choice depends on your investment horizon and end-use."
    },
    {
      q: "Is it safe to invest in under-construction projects in Gurgaon?",
      a: "Under-construction projects can be a safe investment when they carry valid HARERA registration, which legally mandates timeline disclosures and escrow-account protections for buyer payments. Always cross-check the registration status directly on the HARERA portal before booking."
    },
    {
      q: "Does Dee Divine PropInfra offer support beyond Gurgaon?",
      a: "Yes. Alongside our core Gurgaon-NCR portfolio, we support clients across Sonipat and Bhiwadi markets, maintaining the same HARERA/RERA verification standards across all locations."
    },
    {
      q: "How does the channel partner program work with Dee Divine?",
      a: "Brokers and associates can register as channel partners to get access to our project portfolio, commission structures, and marketing support. The program is designed for long-term collaboration rather than one-time referrals."
    },
    {
      q: "Can NRIs invest in Gurgaon real estate through Dee Divine PropInfra?",
      a: "Yes, NRIs can invest in Gurgaon residential and commercial property under FEMA guidelines, and our advisory team supports NRI clients with documentation, remote transaction coordination, and compliance requirements specific to non-resident buyers."
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
              <Star className="w-3.5 h-3.5 text-red-500" />
              <span>Real Estate Guide • Gurugram</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4 leading-tight">
              Best Real Estate Company in Gurgaon
              <span className="block text-red-500 text-2xl sm:text-3xl md:text-4xl mt-2 font-extrabold">
                Your Complete Guide to Smart Property Investment
              </span>
            </h1>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
              <p className="mb-4">
                Gurgaon&apos;s real estate market has grown from a handful of residential pockets into one of North India&apos;s most active property investment corridors. With this growth has come a flood of options—and a flood of confusion. If you&apos;re searching for the best real estate company in Gurgaon, you&apos;re likely trying to solve one problem: who can you actually trust with a decision this size?
              </p>
              <p>
                Founded by Mr. Diwakar Dixit, Dee Divine PropInfra has spent over a decade in the Gurgaon-NCR market answering exactly that question—through HARERA-compliant dealings, transparent documentation, and a portfolio that spans residential plots, developed projects, and investment advisory. We operate under RERA Certificate No. HARERA/GGM/3889/3484/2025/766, and our office at M3M Broadway, 22nd Floor, D Block, Sector 71, SPR Road, Gurgaon, is open for buyers who want to verify credentials in person before making a decision that size. This guide walks you through what separates a genuinely reliable real estate consultant in Gurgaon from the rest, and why that distinction matters more than any brochure ever will.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-lg flex items-center gap-2 active:scale-95"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* WHAT MAKES A REAL ESTATE COMPANY THE BEST */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-sm mb-16">
          <div className="flex flex-col items-start mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-[2px] bg-red-500" />
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-red-600">
                Defining Excellence
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900">
              What Makes a Real Estate Company &quot;the Best&quot; in Gurgaon?
            </h2>
            <p className="text-neutral-600 text-sm mt-2 max-w-3xl">
              The phrase gets used loosely, so it&apos;s worth defining. A top real estate company in Gurgaon isn&apos;t the one with the biggest hoarding on NH-48. It&apos;s the one that consistently delivers on four fronts:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {bestPillars.map((p, idx) => (
              <div key={idx} className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200 flex flex-col">
                <h3 className="font-bold text-sm sm:text-base text-neutral-900 uppercase tracking-wide mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed ml-6">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
          
          <p className="text-neutral-600 text-sm leading-relaxed border-l-4 border-red-500 pl-4">
            <Link href="/" className="font-semibold text-red-600 hover:underline">Dee Divine PropInfra</Link> was built around these four pillars over 10+ years of operating in Gurgaon-NCR, which is why clients searching for a best property dealer in Gurgaon consistently find their way back to a company-first, project-second approach rather than the reverse.
          </p>
        </div>

        {/* WHY CHOOSE DEE DIVINE */}
        <div className="bg-[#0c0d12] text-white rounded-3xl p-8 sm:p-12 mb-16 border border-black/10 relative overflow-hidden shadow-xl">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-red-500" />
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-red-400">
                Our Advantage
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-8">
              Why Investors Choose Dee Divine as Their Gurgaon Real Estate Company
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((w, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                  <span className="text-xs font-black text-red-500 uppercase tracking-widest block mb-2">
                    {w.step}
                  </span>
                  <h3 className="font-bold text-base text-white uppercase tracking-wide mb-3">
                    {w.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {w.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SERVICES OFFERED */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-sm mb-16">
          <div className="flex flex-col items-start mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-[2px] bg-red-500" />
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-red-600">
                Full-Spectrum Services
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900">
              Services Offered by Dee Divine PropInfra
            </h2>
            <p className="text-neutral-600 text-sm mt-2 max-w-3xl">
              As a full-spectrum real estate company in Gurgaon, our services span:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {[
              "Residential plot and project sales across Gurgaon-NCR",
              "Property investment advisory for end-users and investors",
              "Legal and documentation support (RERA verification, title checks, registration)",
              "Channel partner onboarding and broker network management",
              "Market analysis and micro-location assessments"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 bg-neutral-50 p-4 rounded-xl border border-neutral-200 text-xs font-medium text-neutral-800">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0 mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-neutral-600 leading-relaxed">
            This range is what allows us to serve clients not just in Gurgaon, but across the wider NCR footprint—including Sonipat and Bhiwadi—with the same documentation standards and advisory rigor.
          </p>
        </div>

        {/* MICRO-MARKETS */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-sm mb-16">
          <div className="flex flex-col items-start mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-[2px] bg-red-500" />
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-red-600">
                Market Analysis
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900">
              Understanding Gurgaon&apos;s Real Estate Micro-Markets
            </h2>
            <p className="text-neutral-600 text-sm mt-2 max-w-3xl">
              A genuinely useful property investment company in Gurgaon should be able to explain, not just sell. Broadly, Gurgaon&apos;s active corridors fall into a few categories:
            </p>
          </div>

          <div className="space-y-4 mb-6">
            {microMarkets.map((m, idx) => (
              <div key={idx} className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <h3 className="font-bold text-sm sm:text-base text-neutral-900 uppercase tracking-wide">
                    {m.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed md:max-w-2xl">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm text-neutral-600 leading-relaxed bg-neutral-50 p-4 rounded-xl border border-neutral-200">
            Each of these carries a different risk-return profile, and part of our role as a real estate consultant in Gurgaon is matching client goals—end-use, rental yield, or medium-term appreciation—to the right corridor rather than pushing whatever inventory is easiest to move.
          </p>
        </div>

        {/* HOW WE WORK */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-red-500" />
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-red-600">
                Our Process
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900 mb-6">
              How We Work With Clients
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
              The process with Dee Divine PropInfra typically follows four steps:
            </p>
            
            <div className="space-y-4 mb-6">
              {howWeWork.map((h, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs shrink-0">
                      {idx + 1}
                    </div>
                    {idx < howWeWork.length - 1 && <div className="w-0.5 h-full bg-neutral-200 my-1" />}
                  </div>
                  <div className="pb-4">
                    <h4 className="font-bold text-sm text-neutral-900 uppercase">{h.title}</h4>
                    <p className="text-xs text-neutral-600 mt-1">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs font-medium text-neutral-700 italic border-l-2 border-red-500 pl-3">
              This structure is deliberately unhurried. Real estate decisions in Gurgaon typically involve significant capital, and rushing a client toward closure serves the dealer more than it serves the buyer—which is not how we operate.
            </p>
          </div>

          <div className="bg-neutral-900 text-white rounded-3xl p-8 border border-neutral-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-amber-500" />
                <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-amber-400">
                  Expectations
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-6">
                A Note on Realistic Expectations
              </h2>
              <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
                <p>
                  Property values in Gurgaon, like any market, respond to demand, infrastructure timelines, and broader economic conditions—they are not guaranteed to appreciate at any fixed rate.
                </p>
                <p>
                  Any credible best real estate company in Gurgaon will walk you through historical trends and current market context rather than promising fixed returns.
                </p>
                <p className="font-medium text-white border-l-4 border-amber-500 pl-4 py-2 mt-4">
                  We encourage every client to treat real estate as a medium-to-long-term decision backed by due diligence, not a speculative bet based on assurances.
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-4">
               <Link href="/contact" className="px-6 py-3 bg-white text-neutral-900 hover:bg-neutral-200 font-bold text-xs uppercase tracking-wider rounded-full transition-colors">
                 Schedule a Consultation
               </Link>
               <Link href="/deen-dayal-plots-gurgaon-ddjay-guide-2026" className="px-6 py-3 border border-white/20 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider rounded-full transition-colors">
                 Explore DDJAY Plots in Gurgaon
               </Link>
               <a href="https://partner.deedivinegroups.com/" target="_blank" rel="noreferrer" className="px-6 py-3 text-red-400 hover:text-red-300 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2">
                 Become a Channel Partner <ArrowRight className="w-3.5 h-3.5" />
               </a>
            </div>
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
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${openFaq === idx ? "rotate-180" : ""}`} />
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
              Talk to Our Team
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
              If you&apos;re evaluating property investment options in Gurgaon-NCR, our advisory team at M3M Broadway, Sector 71, SPR Road, can walk you through current inventory, HARERA verification, and pricing specific to your requirement. Visit our office, or reach out to schedule a consultation before your next site visit.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-xl active:scale-95"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        
        {/* Schema Markup Injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Best Real Estate Company in Gurgaon: Your Complete Guide to Smart Property Investment",
              "description": "A guide to identifying the best real estate company in Gurgaon, covering HARERA compliance, micro-market analysis, and how Dee Divine PropInfra supports property investors across Gurgaon-NCR.",
              "author": {
                "@type": "Organization",
                "name": "Dee Divine PropInfra"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Dee Divine PropInfra",
                "url": "https://deedivinepropinfra.com"
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://deedivinepropinfra.com/best-real-estate-company-in-gurgaon"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Dee Divine PropInfra",
              "image": "https://deedivinepropinfra.com/logo.png",
              "url": "https://deedivinepropinfra.com",
              "telephone": "",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "M3M Broadway, 22nd Floor, D Block, Sector 71, SPR Road",
                "addressLocality": "Gurgaon",
                "addressRegion": "Haryana",
                "addressCountry": "IN"
              },
              "areaServed": ["Gurgaon", "Sonipat", "Bhiwadi", "NCR"],
              "founder": {
                "@type": "Person",
                "name": "Diwakar Dixit"
              },
              "identifier": {
                "@type": "PropertyValue",
                "name": "RERA Certificate No.",
                "value": "HARERA/GGM/3889/3484/2025/766"
              },
              "foundingDate": "2016"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Which is the best real estate company in Gurgaon for first-time buyers?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For first-time buyers, the priority should be a company that explains documentation clearly and doesn't rush the decision. Dee Divine PropInfra focuses on HARERA-verified listings and walks first-time buyers through the full legal and financial process step by step."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I verify if a Gurgaon property is HARERA-registered?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Every HARERA-registered project carries a unique registration number that can be checked on the official Haryana RERA portal. A trustworthy real estate consultant in Gurgaon will share this number upfront, before any site visit or booking discussion."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What areas in Gurgaon are best for property investment right now?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "New Gurgaon sectors and the Dwarka Expressway corridor are currently seeing strong investor interest due to ongoing infrastructure development, though the right choice depends on your budget and investment horizon. A consultation helps match the corridor to your specific goals."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Dee Divine PropInfra offer support beyond Gurgaon?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Alongside our core Gurgaon-NCR portfolio, we support clients across Sonipat and Bhiwadi markets, maintaining the same HARERA/RERA verification standards across all locations."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does the channel partner program work with Dee Divine?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Brokers and associates can register as channel partners to get access to our project portfolio, commission structures, and marketing support. The program is designed for long-term collaboration rather than one-time referrals."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is property investment in Gurgaon still worth it in 2026?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Gurgaon continues to see infrastructure-led demand, particularly along expressway corridors, but every investment decision should be based on individual financial goals and current market due diligence rather than general market sentiment alone."
                  }
                }
              ]
            })
          }}
        />
      </div>
    </section>
  );
}
