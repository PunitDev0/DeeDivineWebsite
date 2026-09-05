"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  FileText,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  Search,
  Scale,
  Award,
  AlertTriangle,
  UserCheck,
  Compass,
  ArrowRight,
  Sparkles,
  BookOpen,
  ChevronDown,
  ExternalLink,
  PhoneCall,
  MapPin,
  Clock,
  Landmark,
  BadgeAlert,
  Percent,
  Check,
  X,
  Layers,
  FileCheck
} from "lucide-react";

export default function DeenDayalPlotsGurgaon2026Content() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const navItems = [
    { id: "quick-answer", label: "Quick Answer" },
    { id: "scheme-guarantees", label: "What DDJAY Guarantees" },
    { id: "corridors", label: "Top Corridors & Sizes" },
    { id: "legal-checklist", label: "Legal Verification" },
    { id: "financing", label: "Bank Financing" },
    { id: "buyer-mistakes", label: "3 Costly Mistakes" },
    { id: "plots-vs-apartments", label: "Plots vs Apartments" },
    { id: "faqs", label: "Buyer FAQs" },
  ];

  const corridors = [
    {
      name: "Sohna Road",
      size: "150 – 300 sq. yd",
      highlight: "Closer to NH-48 & Golf Course Ext",
      factor: "Faster appreciation belt with mature connectivity and ready social infrastructure.",
      tag: "High Demand",
      tagColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
    },
    {
      name: "Dwarka Expressway Extensions",
      size: "200 – 400 sq. yd",
      highlight: "Direct IGI Airport & Delhi Link",
      factor: "Infrastructure still catching up in select pockets; ideal for medium-to-long term holding.",
      tag: "High Growth Potential",
      tagColor: "bg-blue-500/10 text-blue-600 border-blue-500/20"
    },
    {
      name: "Pataudi Road",
      size: "150 – 250 sq. yd",
      highlight: "Accessible Capital Entry",
      factor: "More affordable entry point; social and civic infrastructure rapidly developing.",
      tag: "Affordable Entry",
      tagColor: "bg-amber-500/10 text-amber-600 border-amber-500/20"
    },
    {
      name: "Sector 95 – 99 Belt",
      size: "180 – 350 sq. yd",
      highlight: "New Gurgaon Hub",
      factor: "Mid-range pricing with established arterial connectivity to NH-48 and Dwarka Expressway.",
      tag: "Established Sector",
      tagColor: "bg-purple-500/10 text-purple-600 border-purple-500/20"
    },
  ];

  const legalSteps = [
    {
      title: "Cross-Check DTCP License Number",
      desc: "Verify the developer's license on the official Town & Country Planning (TCP) Haryana portal, not just on marketing brochures.",
      critical: "Ensure the licensee name matches the current land-owning entity."
    },
    {
      title: "Confirm HARERA Registration Status",
      desc: "Search the HARERA Gurugram portal directly using the project's RERA certificate number to ensure active approval.",
      critical: "Never book if the project is in 'Pending' or 'Applied' status."
    },
    {
      title: "Review the Sanctioned Layout Plan",
      desc: "Obtain the DTCP-approved layout demarcation map and check green belts, road widths, and community facility allocations.",
      critical: "Verify that your plot number exists on the officially approved map."
    },
    {
      title: "Inspect Channel Partner Authorization",
      desc: "Ensure the channel partner or agency carries a signed, valid authorization letter on the official developer letterhead.",
      critical: "Avoid paying token money to unauthorized third-party intermediaries."
    },
    {
      title: "Examine Land Revenue & Encumbrance Records",
      desc: "Review the non-encumbrance certificate (NEC) and revenue records via the local tehsil to ensure the land parcel is dispute-free.",
      critical: "Confirms title clarity and eliminates prior bank liens or court stays."
    },
  ];

  const comparisonRows = [
    {
      factor: "Entry Cost",
      plot: "Generally lower upfront land value with customizable phased spend",
      apartment: "Higher initial ticket size; includes full construction cost upfront",
      advantage: "plot"
    },
    {
      factor: "Control Over Build",
      plot: "Full architectural freedom (Stilt + 4 floors) per Haryana norms; build at your own pace",
      apartment: "Fixed builder layout; zero exterior or structural flexibility",
      advantage: "plot"
    },
    {
      factor: "Loan Processing",
      plot: "Slower, project-dependent due to land title and bank panel audits",
      apartment: "Faster, pre-standardized builder subvention or APF approvals",
      advantage: "apartment"
    },
    {
      factor: "Appreciation Pattern",
      plot: "Higher capital appreciation upside in emerging Gurgaon expressways",
      apartment: "Steadier, but capped by building depreciation over time",
      advantage: "plot"
    },
    {
      factor: "Immediate Livability",
      plot: "Requires individual floor construction after handover",
      apartment: "Move-in ready upon builder possession",
      advantage: "apartment"
    },
  ];

  const faqs = [
    {
      q: "How much EMI applies on DDJAY plots in Gurgaon?",
      a: "EMI depends on the plot's total cost, down payment amount, loan tenure, and the interest rate offered by your chosen bank. Most banks finance up to 70–80% of the registered value, with tenures stretching up to 15–20 years. We recommend obtaining a pre-approval and personalized EMI estimate before committing to token money."
    },
    {
      q: "Is there a time limit for construction on DDJAY plots?",
      a: "Yes, most DDJAY allotments specify a construction timeline in the builder-buyer agreement and state policy, typically requiring construction to commence within a defined period (usually 2 to 5 years) following possession. Always verify the exact construction clause in your specific allotment letter."
    },
    {
      q: "What is the difference between DDJAY and other affordable housing schemes?",
      a: "DDJAY (Deen Dayal Jan Awas Yojna) specifically focuses on low-rise plotted development with defined plot-size caps (up to 150–180 sq. yds) and independent floor registry permissions under Haryana government norms. Other affordable housing schemes (like PMAY or Haryana Affordable Housing 2013) typically mandate high-rise built apartments with fixed lottery allocations."
    },
    {
      q: "How much stamp duty applies when registering a DDJAY plot?",
      a: "Stamp duty rates in Haryana vary based on the buyer's gender (typically 5% for female buyers, 7% for male buyers in municipal limits, and 6% for joint ownership) plus registration fees. Rates are updated periodically by the state government, so check with your advisor or sub-registrar office at the time of registry."
    },
    {
      q: "Can NRIs invest in DDJAY plots in Gurgaon?",
      a: "Yes, Non-Resident Indians (NRIs) and Overseas Citizens of India (OCIs) can legally invest in DDJAY residential plots in Haryana under standard RBI and FEMA guidelines. Funds must be routed via NRE/NRO banking channels, and all documentation follows standard KYC requirements."
    },
    {
      q: "What is the resale value potential of DDJAY plots?",
      a: "Plotted land historically yields significant capital appreciation in Gurgaon's growth corridors (like Dwarka Expressway, Sohna Road, and New Gurgaon) because land supply remains finite while independent floor demand is strong. However, actual resale yields depend on infrastructure completion, connectivity, and developer execution."
    },
    {
      q: "What is the difference between DTCP and HARERA approval?",
      a: "DTCP (Department of Town and Country Planning, Haryana) grants the license, approves layout plans, and sets zoning parameters for the colony. HARERA (Haryana Real Estate Regulatory Authority) regulates the sale process, audits escrow accounts, mandates delivery timelines, and safeguards buyer financial interests. A safe project must have both approvals active."
    },
    {
      q: "What should I do if possession is delayed on a DDJAY plot?",
      a: "If a developer delays possession past the deadline specified in your builder-buyer agreement (and the HARERA milestone date), you can file an online grievance with HARERA Gurugram. Under RERA provisions, buyers can claim interest for delayed periods or seek a legal refund with interest."
    },
    {
      q: "Do banks offer 100% loan on DDJAY plots?",
      a: "No. Under RBI guidelines, banks do not offer 100% funding for land or plotted purchases. Typically, lenders finance 70% to 80% of the registered plot value as a plot loan (Loan-to-Value ratio). The remaining 20% to 30% plus stamp duty and registry costs must be paid as down payment."
    },
    {
      q: "How have DDJAY plot prices changed in Gurgaon in 2026?",
      a: "In 2026, plotted developments in Gurgaon have experienced steady price movement driven by opening sections of Dwarka Expressway, expansion of SPR corridors, and heightened demand for builder-floor construction. Price adjustments vary across sectors and licensing phases, making direct inventory verification essential."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#fcfcfc] min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-12 font-sans text-neutral-800">
      
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-6xl mx-auto">
        
        {/* HERO BANNER */}
        <div className="bg-[#0c0d12] text-white rounded-3xl p-8 sm:p-12 md:p-16 mb-12 relative overflow-hidden shadow-2xl border border-black/10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.25em] mb-6 backdrop-blur-md border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-red-500" />
              <span>Comprehensive Buyer Intelligence • Gurugram 2026</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
              Deen Dayal Plots in Gurgaon
              <span className="block text-red-500 text-2xl sm:text-3xl md:text-4xl mt-2 font-extrabold">
                Complete Guide for Buyers (2026)
              </span>
            </h1>

            <p className="text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mb-8">
              Deen Dayal Plots Gurgaon are residential plots developed under Haryana&apos;s <strong>Deen Dayal Jan Awas Yojna (DDJAY)</strong>—a DTCP-regulated scheme created to offer affordable, legally verified land ownership across licensed colonies in Gurugram. For buyers comparing land versus built-up property, this guide covers everything from legal checks to financing before you book a plot.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-neutral-400 font-medium">
              <div className="flex items-center gap-2 bg-white/5 px-3.5 py-2 rounded-xl border border-white/10">
                <BookOpen className="w-4 h-4 text-red-500" />
                <span>Buyer Guide 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3.5 py-2 rounded-xl border border-white/10">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>DTCP & HARERA Verified</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3.5 py-2 rounded-xl border border-white/10">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>9 Min Actionable Read</span>
              </div>
            </div>
          </div>
        </div>

        {/* QUICK NAVIGATION */}
        <div className="sticky top-24 z-40 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-neutral-200/80 shadow-md mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-neutral-900 flex-shrink-0">
              <Compass className="w-4 h-4 text-red-500" />
              <span>Guide Navigation:</span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto w-full pb-1 md:pb-0 scrollbar-none text-xs">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-[#0c0d12] text-white shadow-sm"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── SECTION 1: QUICK ANSWER CALLOUT ── */}
        <div id="quick-answer" className="mb-14 scroll-mt-36">
          <div className="bg-gradient-to-br from-neutral-900 to-[#12131a] rounded-3xl p-8 sm:p-10 border border-neutral-800 text-white shadow-xl relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center flex-shrink-0 text-red-400 mt-1">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <div className="inline-block px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-[10px] font-black uppercase tracking-widest">
                  Executive Summary
                </div>
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                  Quick Answer: Is DDJAY a Good Option in Gurgaon?
                </h2>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  <strong>Yes, provided the specific colony holds an active DTCP license and current HARERA registration.</strong> The scheme itself is government-regulated, but approval status varies project to project. Always verify documentation before booking, not after paying token money.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── SECTION 2: WHAT DDJAY GUARANTEES (AND WHAT IT DOESN'T) ── */}
        <div id="scheme-guarantees" className="mb-16 scroll-mt-36">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-red-500" />
            <span className="text-xs font-black uppercase tracking-[0.25em] text-red-600">
              Regulatory Realities
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-neutral-900 mb-6">
            What the DDJAY Scheme Actually Guarantees (and What It Doesn&apos;t)
          </h2>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm text-neutral-700 text-sm sm:text-base leading-relaxed space-y-4 mb-8">
            <p>
              A common misconception is that <strong className="text-neutral-900">&quot;DDJAY&quot;</strong> as a scheme name automatically means a plot is safe. That&apos;s only partly true. The scheme sets the framework—defined plot sizes, internal infrastructure norms, and pricing caps for affordable categories—but individual compliance still depends on the developer executing within that framework correctly.
            </p>
            <p>
              When evaluating <Link href="https://deedivinepropinfra.com/deen-dayal-plots-gurgaon-ddjay-guide-2026"><strong>Deen Dayal Plots Gurgaon</strong></Link>, separate two things: <em>the scheme&apos;s regulatory intent</em>, and <em>the specific project&apos;s actual approval paperwork</em>. A DTCP license number that doesn&apos;t match the marketed project name, or a HARERA registration still shown as &quot;pending,&quot; are red flags regardless of how well the scheme itself is designed.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-6">
              <div className="flex items-center gap-2.5 mb-3 text-emerald-800 font-black text-sm uppercase tracking-wide">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>What DDJAY Guarantees</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-950">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Minimum 9-meter to 12-meter planned internal road networks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Freehold title with Stilt + 4 Floor building approval (per Haryana norms).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Mandatory green spaces, sewage lines, and electricity substation norms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Direct registry eligibility under the sub-registrar office.</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50/60 border border-red-200/80 rounded-2xl p-6">
              <div className="flex items-center gap-2.5 mb-3 text-red-800 font-black text-sm uppercase tracking-wide">
                <X className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>What DDJAY Does NOT Guarantee</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-red-950">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Automatic bank loan approval without individual developer screening.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Instant possession if the developer faces execution or cash-flow delays.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Protection against unapproved brochure modifications unless cross-checked on HARERA.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Immunity from resale lock-in conditions stipulated in private allotment letters.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── SECTION 3: WHERE DDJAY PLOTS ARE CONCENTRATED ── */}
        <div id="corridors" className="mb-16 scroll-mt-36">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-red-500" />
            <span className="text-xs font-black uppercase tracking-[0.25em] text-red-600">
              Location Matrix
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-neutral-900 mb-6">
            Where DDJAY Plots for Sale Gurgaon Are Concentrated
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-8">
            Before shortlisting any <strong>DDJAY plots for sale Gurgaon</strong>, match each corridor against your personal horizon. A micro-market with infrastructure still under construction usually offers lower entry prices but requires a longer holding period for full livability and capital appreciation.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {corridors.map((c, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/80 hover:border-neutral-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-neutral-400 uppercase tracking-widest">
                      Corridor #{idx + 1}
                    </span>
                    <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full border ${c.tagColor}`}>
                      {c.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black uppercase text-neutral-900 mb-2">
                    {c.name}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-bold text-red-600 mb-4 bg-red-50/70 px-3 py-1.5 rounded-lg w-fit">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Plot Sizes: {c.size}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                    {c.factor}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] font-bold text-neutral-500">
                  <span>Key Factor:</span>
                  <span className="text-neutral-800">{c.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 4: LEGAL VERIFICATION CHECKLIST ── */}
        <div id="legal-checklist" className="mb-16 scroll-mt-36">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-red-500" />
            <span className="text-xs font-black uppercase tracking-[0.25em] text-red-600">
              Risk Mitigation
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-neutral-900 mb-6">
            Legal Verification Checklist (Do This Before Paying Token Money)
          </h2>

          <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 mb-8 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              <strong>Crucial Advisory:</strong> Skipping any one of the following steps is where most property disputes originate in Gurgaon—not from the DDJAY policy itself, but from unverified builder-broker execution.
            </p>
          </div>

          <div className="space-y-4">
            {legalSteps.map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0c0d12] text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-neutral-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                <div className="md:w-72 bg-neutral-50 p-3 rounded-xl border border-neutral-200/60 flex-shrink-0">
                  <span className="text-[10px] font-black uppercase tracking-widest text-red-600 block mb-0.5">
                    Actionable Check
                  </span>
                  <p className="text-xs text-neutral-700 font-medium leading-snug">
                    {step.critical}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 5: FINANCING ── */}
        <div id="financing" className="mb-16 scroll-mt-36">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-red-500" />
            <span className="text-xs font-black uppercase tracking-[0.25em] text-red-600">
              Bank Appraisal
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-neutral-900 mb-6">
            Financing: What Banks Actually Check
          </h2>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm text-neutral-700 text-sm sm:text-base leading-relaxed space-y-4 mb-8">
            <p>
              Loan approval on <strong>Deen Dayal Plots Gurgaon</strong> isn&apos;t automatic just because the scheme is government-backed. Leading financial institutions (including SBI, HDFC, ICICI, and Axis Bank) independently assess:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200/60 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="block text-neutral-900 font-bold mb-0.5">HARERA Validity</strong>
                  <span>Whether the specific project holds an active, unexpired HARERA registration at the time of loan disbursal.</span>
                </div>
              </div>

              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200/60 flex items-start gap-3">
                <Landmark className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="block text-neutral-900 font-bold mb-0.5">Bank Panel Approval</strong>
                  <span>Whether the developer&apos;s colony is on the lender&apos;s approved project facility (APF) panel.</span>
                </div>
              </div>

              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200/60 flex items-start gap-3">
                <Percent className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="block text-neutral-900 font-bold mb-0.5">Loan-To-Value (LTV) Cap</strong>
                  <span>Plot loans typically carry an LTV of 70%–80%, lower than the 85%–90% offered on built-up apartments.</span>
                </div>
              </div>

              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200/60 flex items-start gap-3">
                <UserCheck className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="block text-neutral-900 font-bold mb-0.5">Income & Credit Auditing</strong>
                  <span>CIBIL score verification, existing EMI exposure, and valid income tax returns.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-5 bg-gradient-to-r from-red-50 to-neutral-50 border-l-4 border-red-500 rounded-r-xl">
              <p className="text-xs sm:text-sm text-neutral-800">
                <strong>Practical Advisor Tip:</strong> Ask your property consultant which nationalized or private banks have already sanctioned and disbursed loans in that specific colony.{" "}
                <Link
                  href="/ddjay-loan-financing-guide"
                  className="text-red-600 font-black hover:underline inline-flex items-center gap-1"
                >
                  Loan approval on Deen Dayal Plots Gurgaon isn&apos;t automatic <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                —working with pre-paneled lenders speeds up loan disbursement noticeably compared to first-time applications.
              </p>
            </div>
          </div>
        </div>

        {/* ── SECTION 6: THREE MISTAKES ── */}
        <div id="buyer-mistakes" className="mb-16 scroll-mt-36">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-red-500" />
            <span className="text-xs font-black uppercase tracking-[0.25em] text-red-600">
              Buyer Hazards
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-neutral-900 mb-6">
            Three Mistakes That Cost Buyers the Most
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-red-100 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="w-2 h-full bg-red-500 absolute left-0 top-0" />
              <div>
                <span className="text-red-600 text-xs font-black uppercase tracking-widest block mb-2">
                  Mistake #1
                </span>
                <h3 className="text-base sm:text-lg font-black uppercase text-neutral-900 mb-3">
                  Booking Before HARERA Is Active
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                  Some developers open soft-launch bookings during the application stage. If registration is later delayed, revised, or rejected, refund processing can drag on for months.
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-100 text-[11px] font-bold text-neutral-700">
                <strong>Remedy:</strong> Never issue checks without an official HARERA registration certificate number in hand.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-red-100 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="w-2 h-full bg-red-500 absolute left-0 top-0" />
              <div>
                <span className="text-red-600 text-xs font-black uppercase tracking-widest block mb-2">
                  Mistake #2
                </span>
                <h3 className="text-base sm:text-lg font-black uppercase text-neutral-900 mb-3">
                  Treating Verbal Assurances as Proof
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                  Brokers claiming <em>&quot;Sab clear hai sir, file lag chuki hai&quot;</em> does not constitute legal proof. Always demand physical or digital copies of sanctioned DTCP license agreements.
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-100 text-[11px] font-bold text-neutral-700">
                <strong>Remedy:</strong> Match layout demarcations directly against TCP Haryana portal records.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-red-100 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="w-2 h-full bg-red-500 absolute left-0 top-0" />
              <div>
                <span className="text-red-600 text-xs font-black uppercase tracking-widest block mb-2">
                  Mistake #3
                </span>
                <h3 className="text-base sm:text-lg font-black uppercase text-neutral-900 mb-3">
                  Ignoring Resale Lock-In Clauses
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                  Certain DDJAY allotment letters carry strict conditions or builder transfer fees for early resale before completion. Assuming you can trade or flip immediately can lead to unexpected transfer fee deductions.
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-100 text-[11px] font-bold text-neutral-700">
                <strong>Remedy:</strong> Read builder-buyer transfer fee policies prior to signing.
              </div>
            </div>
          </div>
        </div>

        {/* ── SECTION 7: PLOTS VS APARTMENTS ── */}
        <div id="plots-vs-apartments" className="mb-16 scroll-mt-36">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-red-500" />
            <span className="text-xs font-black uppercase tracking-[0.25em] text-red-600">
              Comparative Analysis
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-neutral-900 mb-6">
            How Deen Dayal Plots Compare to Built-Up Apartments
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200/80 shadow-sm bg-white">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#0c0d12] text-white uppercase text-[11px] tracking-wider">
                  <th className="py-4 px-6 font-black">Factor</th>
                  <th className="py-4 px-6 font-black text-red-400">DDJAY Plot</th>
                  <th className="py-4 px-6 font-black text-neutral-300">Ready Apartment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-neutral-50/80 transition-colors">
                    <td className="py-4 px-6 font-black text-neutral-900 whitespace-nowrap">
                      {row.factor}
                    </td>
                    <td className="py-4 px-6 text-neutral-700 leading-relaxed bg-red-50/20">
                      {row.plot}
                    </td>
                    <td className="py-4 px-6 text-neutral-600 leading-relaxed">
                      {row.apartment}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── BOTTOM LINE SUMMARY ── */}
        <div className="mb-16 bg-neutral-900 rounded-3xl p-8 sm:p-12 text-white border border-neutral-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-400 block mb-3">
              Final Verdict
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-4">
              Bottom Line for Gurgaon Land Investors
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
              <strong>Deen Dayal Plots Gurgaon</strong> offers a documented, government-monitored path into Gurgaon&apos;s plotted-development market, but the scheme&apos;s regulatory intent doesn&apos;t replace individual project due diligence. If you&apos;re evaluating DDJAY plots for sale Gurgaon, the difference between a smooth purchase and a stalled one usually comes down to verifying paperwork before booking, not after.
            </p>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
              Our advisory team cross-checks DTCP and HARERA records for every plot we recommend and reaches out with a curated shortlist of currently verified options.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-black text-xs uppercase tracking-[0.2em] rounded-xl shadow-lg transition-transform active:scale-95 inline-flex items-center gap-2"
              >
                <span>Request Verified Plot Shortlist</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+919211496111"
                className="px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition inline-flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-red-400" />
                <span>Call +91 9211496111</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── SECTION 8: FAQS ACCORDION ── */}
        <div id="faqs" className="mb-16 scroll-mt-36">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-red-500" />
            <span className="text-xs font-black uppercase tracking-[0.25em] text-red-600">
              Common Questions
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-neutral-900 mb-6">
            Frequently Asked Questions by DDJAY Plot Buyers
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-red-500/60 shadow-md"
                      : "border-neutral-200/80 hover:border-neutral-300 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 flex items-center justify-between text-left gap-4 hover:bg-neutral-50/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-black text-red-500 bg-red-50 px-2 py-0.5 rounded border border-red-100 mt-0.5 flex-shrink-0">
                        Q{index + 1}
                      </span>
                      <h3 className="text-sm sm:text-base font-black text-neutral-900 tracking-wide leading-snug">
                        {faq.q}
                      </h3>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? "bg-red-500 text-white rotate-180" : "bg-neutral-100 text-neutral-600"
                      }`}
                    >
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 bg-neutral-50/30">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── RELATED DDJAY GUIDES ── */}
        <div className="pt-10 border-t border-neutral-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-red-600 block mb-1">
                Explore More
              </span>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-neutral-900">
                Related DDJAY Resources
              </h3>
            </div>
            <Link
              href="/faq"
              className="text-xs font-bold text-red-600 hover:underline flex items-center gap-1"
            >
              <span>View All FAQs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <Link
              href="/what-is-deen-dayal-jan-awas-yojna-ddjay-guide"
              className="bg-white p-6 rounded-2xl border border-neutral-200/80 hover:border-red-500 hover:shadow-md transition-all group"
            >
              <FileCheck className="w-6 h-6 text-red-500 mb-3" />
              <h4 className="font-black text-sm uppercase text-neutral-900 group-hover:text-red-600 transition mb-2">
                What is DDJAY?
              </h4>
              <p className="text-xs text-neutral-500 line-clamp-2">
                Learn how Haryana&apos;s plotted policy functions, zoning laws, and floor registry framework.
              </p>
            </Link>

            <Link
              href="/ddjay-eligibility-and-documents-checklist"
              className="bg-white p-6 rounded-2xl border border-neutral-200/80 hover:border-red-500 hover:shadow-md transition-all group"
            >
              <UserCheck className="w-6 h-6 text-red-500 mb-3" />
              <h4 className="font-black text-sm uppercase text-neutral-900 group-hover:text-red-600 transition mb-2">
                Eligibility & Documents
              </h4>
              <p className="text-xs text-neutral-500 line-clamp-2">
                Complete checklist for Indian residents, NRIs, affidavits, and bank KYC verification.
              </p>
            </Link>

            <Link
              href="/ddjay-loan-financing-guide"
              className="bg-white p-6 rounded-2xl border border-neutral-200/80 hover:border-red-500 hover:shadow-md transition-all group"
            >
              <Landmark className="w-6 h-6 text-red-500 mb-3" />
              <h4 className="font-black text-sm uppercase text-neutral-900 group-hover:text-red-600 transition mb-2">
                Loan & Financing Guide
              </h4>
              <p className="text-xs text-neutral-500 line-clamp-2">
                Bank loan eligibility, LTV ratios, interest rates, and construction loan pre-approvals.
              </p>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
