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
  ChevronRight,
  ExternalLink,
  PhoneCall,
  MapPin,
  Clock
} from "lucide-react";

export default function DDJAYGuideContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSection, setActiveSection] = useState(null);

  const navItems = [
    { id: "full-form", label: "Full Form & Origin" },
    { id: "in-detail", label: "Scheme In Detail" },
    { id: "eligibility", label: "Eligibility Criteria" },
    { id: "registration", label: "Registration Process" },
    { id: "documents", label: "Required Documents" },
    { id: "verify-authenticity", label: "Verify Authenticity" },
    { id: "ddjay-vs-licensed", label: "DDJAY vs Licensed" },
    { id: "harera-verification", label: "HARERA Verification" },
  ];

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
      <div className="max-w-6xl mx-auto">
        
        {/* HERO BANNER & HEADER */}
        <div className="bg-[#0c0d12] text-white rounded-3xl p-8 sm:p-12 md:p-16 mb-12 relative overflow-hidden shadow-2xl border border-black/10">
          {/* Background Glow Overlay */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.25em] mb-6 backdrop-blur-md border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-red-500" />
              <span>Affordable Plotted Housing Policy • Haryana</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
              What is Deen Dayal Jan Awas Yojna?
              <span className="block text-red-500 text-2xl sm:text-3xl md:text-4xl mt-2 font-extrabold">
                Complete DDJAY Guide for Plot Buyers
              </span>
            </h1>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                If you are exploring affordable plots in Haryana, chances are you have come across the term <strong className="text-white font-bold">DDJAY</strong>. So <Link href="https://deedivinepropinfra.com/what-is-deen-dayal-jan-awas-yojna-ddjay-guide" className="text-white font-bold">what is Deen Dayal Jan Awas Yojna, exactly?</Link> It is a state government policy that lets private developers build low-rise, plotted colonies for middle-income and lower-income families across Haryana. Instead of buying a flat in a high-rise tower, buyers get an actual plot of land, or in some layouts, an independent floor with its own registry. This guide walks you through the full form, eligibility, registration process, required documents, verification steps, and how DDJAY plots compare with regular licensed colony plots.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-neutral-400 font-medium">
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <BookOpen className="w-4 h-4 text-red-500" />
                <span>Guide 2026–2027</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>HARERA & TCP Haryana Verified</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>8 Min Comprehensive Read</span>
              </div>
            </div>
          </div>
        </div>

        {/* QUICK NAVIGATION & INDEX BAR */}
        <div className="sticky top-24 z-40 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-neutral-200/80 shadow-md mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-neutral-900 flex-shrink-0">
              <Compass className="w-4 h-4 text-red-500" />
              <span>Quick Navigation:</span>
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

        {/* MAIN CONTENT BODY */}
        <div className="space-y-12">
          
          {/* SECTION 1: FULL FORM */}
          <div id="full-form" className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-black text-sm border border-red-100">
                01
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900">
                DDJAY Scheme Full Form & Origin
              </h2>
            </div>
            
            <div className="space-y-4 text-neutral-600 leading-relaxed text-sm sm:text-base">
              <p>
                <strong className="text-neutral-900 font-bold">DDJAY</strong> stands for <Link href="https://deedivinepropinfra.com/what-is-deen-dayal-jan-awas-yojna-ddjay-guide" className="text-neutral-900 font-bold">Deen Dayal Jan Awas Yojna</Link>. In English, it roughly translates to <em>"Deen Dayal Public Housing Scheme."</em>
              </p>
              <p>
                It was introduced by the Haryana government in 2016 under the state&apos;s <strong className="text-neutral-900">Affordable Plotted Housing Policy</strong>, named after the eminent political thinker Pandit Deen Dayal Upadhyaya.
              </p>
              
              <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white rounded-2xl p-6 border border-neutral-700 my-4 shadow-inner">
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-white mb-1">
                      Core Concept of the Policy
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      The scheme&apos;s core idea is simple: encourage private colonizers to develop planned plotted layouts on land parcels starting from 5 acres, in exchange for relaxed development norms and a faster approval process. That trade-off is what keeps plot prices lower than a typical licensed colony.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: WHAT IS DDJAY SCHEME (IN DETAIL) */}
          <div id="in-detail" className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-black text-sm border border-red-100">
                02
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900">
                What is DDJAY Scheme (In Detail)
              </h2>
            </div>

            <div className="space-y-4 text-neutral-600 leading-relaxed text-sm sm:text-base">
              <p>
                At its core, the DDJAY scheme is about planned, affordable land ownership. Developers who take part in the policy must reserve a portion of their plots for <strong className="text-neutral-900 font-semibold">Economically Weaker Sections (EWS)</strong> and <strong className="text-neutral-900 font-semibold">Lower Income Groups (LIG)</strong>, while the rest are sold in the open market to <strong className="text-neutral-900 font-semibold">Middle Income Group (MIG)</strong> buyers. In return, the government allows a higher plot yield and simpler compliance, which is why DDJAY projects tend to be priced well below regular freehold colonies in the same micro-market.
              </p>

              <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-neutral-50 p-5 rounded-2xl border border-neutral-200">
                  <h4 className="font-bold text-neutral-900 text-xs sm:text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500" />
                    Mandatory Infrastructure Norms
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                      <span>Minimum internal road width (9 meters / 30 feet)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                      <span>Separate drinking and recycled water supply pipelines</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                      <span>Underground electrification and sewage network</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                      <span>Mandatory land allocation for green parks & open spaces</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-neutral-50 p-5 rounded-2xl border border-neutral-200">
                  <h4 className="font-bold text-neutral-900 text-xs sm:text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-red-500" />
                    Stilt + 4 Floor Construction
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Most DDJAY projects allow <strong className="text-neutral-800">stilt-plus-four floor construction</strong>, where each floor can carry an independent registry. This enables buyers to own an independent floor with title rights or build an entire multi-floor family residence on their plot.
                  </p>
                </div>
              </div>

              <p>
                Since the scheme is mandatory <strong className="text-neutral-900 font-semibold">HARERA-registered</strong>, buyers get a documented allotment process, a fixed payment schedule tied to construction milestones, and full legal recourse if a developer misses a deadline.
              </p>
            </div>
          </div>

          {/* SECTION 3: ELIGIBILITY CRITERIA */}
          <div id="eligibility" className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-black text-sm border border-red-100">
                03
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900">
                DDJAY Eligibility Criteria
              </h2>
            </div>

            <div className="space-y-4 text-neutral-600 leading-relaxed text-sm sm:text-base">
              <p>
                <Link href="https://deedivinepropinfra.com/ddjay-eligibility-and-documents-checklist" className="text-neutral-900 font-bold">Eligibility under DDJAY</Link> is kept fairly open, which is part of why the scheme sees such heavy demand at every project launch. Here is who can typically apply:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-4">
                {[
                  {
                    title: "Age & Citizenship",
                    desc: "The applicant must be at least 18 years old and a citizen of India."
                  },
                  {
                    title: "Prior Allotment Condition",
                    desc: "Neither the applicant nor their spouse should already own a plot or house allotted under any other government housing scheme in Haryana."
                  },
                  {
                    title: "Employment Types",
                    desc: "Salaried employees, self-employed professionals, business owners, and Non-Resident Indians (NRIs) are all allowed to apply."
                  },
                  {
                    title: "Income Categories",
                    desc: "Household income limits apply mainly to EWS and LIG category reservations; MIG plots are open to a broader income bracket."
                  },
                  {
                    title: "Registration Deposit",
                    desc: "A refundable registration amount is paid at the time of application, which is returned in full if the applicant is not selected in the draw."
                  },
                  {
                    title: "Draw of Lots Allotment",
                    desc: "Meeting eligibility criteria qualifies you for participation in the computerized draw; allotment is transparently finalized through the draw."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-neutral-50 p-4 rounded-2xl border border-neutral-100 flex items-start gap-3">
                    <UserCheck className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-neutral-900 uppercase tracking-wide mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION 4: REGISTRATION PROCESS */}
          <div id="registration" className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-black text-sm border border-red-100">
                04
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900">
                DDJAY Plot Registration Process
              </h2>
            </div>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
              The registration process is designed to be simple enough to complete online, though it does need some paperwork ready in advance:
            </p>

            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "Shortlist & License Verification",
                  desc: "Shortlist a project and confirm it holds a valid DDJAY license from the Town and Country Planning (TCP) Department Haryana."
                },
                {
                  step: "02",
                  title: "Application Submission",
                  desc: "Fill out the application form on the developer's or project's official registration portal within the announced application window."
                },
                {
                  step: "03",
                  title: "Earnest Money Payment",
                  desc: "Pay the earnest money or registration amount, which is usually a small, refundable sum paid via netbanking, UPI, or demand draft."
                },
                {
                  step: "04",
                  title: "Draw of Lots",
                  desc: "Wait for the official draw of lots. Allotment results are typically shared through email, SMS, and published on the official portal."
                },
                {
                  step: "05",
                  title: "Allotment Letter & Payment Schedule",
                  desc: "If selected, sign the allotment letter and follow the fixed, milestone-based payment plan shared by the developer."
                },
                {
                  step: "06",
                  title: "Final Registry",
                  desc: "Complete the plot registry at the sub-registrar's office once the balance payment and paperwork are cleared."
                }
              ].map((st, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                  <div className="w-8 h-8 rounded-xl bg-[#0c0d12] text-white flex items-center justify-center font-black text-xs flex-shrink-0">
                    {st.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-neutral-900 uppercase tracking-wide">
                      {st.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-2xl text-amber-900 text-xs sm:text-sm">
              <strong className="font-bold">Pro Tip:</strong> Application windows for DDJAY projects open and close on fixed dates, so it helps to track a shortlisted project closely rather than waiting for general public announcements.
            </div>
          </div>

          {/* SECTION 5: REQUIRED DOCUMENTS */}
          <div id="documents" className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-black text-sm border border-red-100">
                05
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900">
                DDJAY Plot Documents Required
              </h2>
            </div>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
              Keeping your documents ready before the application window opens saves a lot of last-minute stress. Most DDJAY applications ask for:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                "Aadhaar Card and PAN Card of the primary applicant & co-applicant",
                "Recent passport-size color photographs",
                "Proof of current address (Utility bill, Passport, or Bank statement)",
                "Bank account details & cancelled cheque for refund processing",
                "Income proof or self-declaration (for EWS or LIG category applicants)",
                "Affidavit confirming no prior ownership of a government-allotted plot in Haryana"
              ].map((doc, i) => (
                <div key={i} className="flex items-center gap-3 bg-neutral-50 p-3.5 rounded-xl border border-neutral-100 text-xs sm:text-sm font-medium text-neutral-800">
                  <FileText className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-neutral-500 italic">
              * Once allotted, buyers will also need the allotment letter, payment receipts, and a No Objection Certificate (NOC) from the developer at the time of final registry.
            </p>
          </div>

          {/* SECTION 6: VERIFY AUTHENTICITY */}
          <div id="verify-authenticity" className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-black text-sm border border-red-100">
                06
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900">
                How to Verify DDJAY Plot Authenticity
              </h2>
            </div>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
              Not every project advertised as a &quot;DDJAY plot&quot; is genuinely licensed, so verification matters before you pay a single rupee. A few practical checks go a long way:
            </p>

            <div className="space-y-3.5">
              {[
                {
                  title: "Check TCP License Number",
                  text: "Ask the developer for the project's official DDJAY license number and cross-check it on the Town and Country Planning Department's Haryana website."
                },
                {
                  title: "Verify HARERA Registration",
                  text: "Confirm the project is registered with HARERA and note down the registration number for your own official records."
                },
                {
                  title: "In-Person Site Visit",
                  text: "Visit the site in person, or send someone you trust, to confirm that ground development matches what is shown in the brochure."
                },
                {
                  title: "Cross-check Approved Layout Plan",
                  text: "Check whether the layout plan approved by the competent authority matches the layout being marketed to you."
                },
                {
                  title: "Avoid Unverified Advance Demands",
                  text: "Avoid developers who ask for full payment upfront or refuse to share license and RERA details in writing."
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-emerald-950 uppercase tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-900/80 mt-1 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-[#0c0d12] text-white p-5 rounded-2xl border border-neutral-800 flex items-center gap-4">
              <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0" />
              <p className="text-xs sm:text-sm leading-relaxed text-neutral-300">
                A genuine DDJAY plot will always have a traceable license number, an active HARERA registration, and a payment plan tied strictly to construction milestones.
              </p>
            </div>
          </div>

          {/* SECTION 7: DDJAY VS LICENSED COLONY */}
          <div id="ddjay-vs-licensed" className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-black text-sm border border-red-100">
                07
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900">
                DDJAY vs Licensed Colony Plots
              </h2>
            </div>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
              Buyers often confuse DDJAY plots with plots in a regular licensed colony, but the two differ in pricing, eligibility, allotment, and how the plot reaches you:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-neutral-200 mb-6">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0c0d12] text-white uppercase text-[11px] tracking-wider">
                  <tr>
                    <th className="p-4">Feature</th>
                    <th className="p-4 text-red-400">DDJAY Plots</th>
                    <th className="p-4 text-neutral-300">Regular Licensed Colony Plots</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 bg-white font-medium text-neutral-700">
                  <tr>
                    <td className="p-4 font-bold text-neutral-900">Allotment Mode</td>
                    <td className="p-4 bg-red-50/30">Computerized draw of lots with income reservations</td>
                    <td className="p-4">Direct purchase (First-come, first-served)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-neutral-900">Pricing & Rates</td>
                    <td className="p-4 bg-red-50/30">Regulated & generally lower due to policy norms</td>
                    <td className="p-4">Fully market-driven pricing</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-neutral-900">Plot Sizes</td>
                    <td className="p-4 bg-red-50/30">Smaller, standardized sizes (up to ~180 sq. yards)</td>
                    <td className="p-4">Wide range of plot sizes, including large luxury plots</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-neutral-900">Eligibility Rules</td>
                    <td className="p-4 bg-red-50/30">Income & prior non-ownership conditions apply</td>
                    <td className="p-4">No restrictions beyond purchasing capacity</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-neutral-900">Resale Restrictions</td>
                    <td className="p-4 bg-red-50/30">May carry lock-in periods to prevent speculation</td>
                    <td className="p-4">Free to resell once registered</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-neutral-50 p-5 rounded-2xl border border-neutral-200 text-xs sm:text-sm text-neutral-700 leading-relaxed">
              <strong className="font-bold text-neutral-900">Summary:</strong> Neither option is automatically better. DDJAY suits first-time, budget-conscious buyers who don&apos;t mind the draw-based process, while a licensed colony suits buyers who want a specific location, larger plot size, or immediate resale flexibility.
            </div>
          </div>

          {/* SECTION 8: HARERA VERIFICATION PROCESS */}
          <div id="harera-verification" className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-black text-sm border border-red-100">
                08
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900">
                HARERA Verification Process
              </h2>
            </div>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
              <strong className="text-neutral-900">HARERA</strong> (Haryana Real Estate Regulatory Authority) is the official state body regulating real estate projects and safeguarding buyer interests. Verifying a project&apos;s HARERA status takes just a few minutes:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 mb-6">
              {[
                {
                  step: "Step 1",
                  title: "Visit HARERA Portal",
                  desc: "Go to the official HARERA portal for Gurugram or Panchkula zone based on location."
                },
                {
                  step: "Step 2",
                  title: "Search Public Records",
                  desc: "Search by project name or HARERA registration number in the public project list."
                },
                {
                  step: "Step 3",
                  title: "Check Promoter & Plans",
                  desc: "Review promoter details, sanctioned layout plan, approved timeline, and complaints."
                },
                {
                  step: "Step 4",
                  title: "Confirm Status",
                  desc: "Verify that RERA registration is active and not lapsed or suspended."
                },
                {
                  step: "Step 5",
                  title: "Save Certificate",
                  desc: "Save a copy of the RERA registration certificate for your personal records."
                }
              ].map((hStep, i) => (
                <div key={i} className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200/80 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-red-500">
                      {hStep.step}
                    </span>
                    <h4 className="font-bold text-xs sm:text-sm text-neutral-900 uppercase tracking-wide mt-1">
                      {hStep.title}
                    </h4>
                    <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                      {hStep.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-2xl text-red-950 text-xs sm:text-sm font-medium">
              <strong className="font-bold">Warning:</strong> A project without an active HARERA number should be treated as a red flag, regardless of how attractive the pricing or marketing brochure looks.
            </div>
          </div>

          {/* SECTION 9: FINAL THOUGHTS */}
          <div className="bg-[#0c0d12] text-white rounded-3xl p-8 sm:p-12 border border-black/10 relative overflow-hidden shadow-xl">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-[10px] font-extrabold uppercase tracking-widest mb-4 border border-red-500/30">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Conclusion & Advice</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-4">
                Final Thoughts
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl">
                DDJAY has genuinely widened access to legal, planned land ownership for thousands of families across Haryana, but the scheme rewards buyers who do their homework. Confirm the license, check the HARERA number, understand the eligibility rules, and keep your documents ready before an application window opens. That preparation is what separates a smooth plot purchase from months of avoidable follow-up.
              </p>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-neutral-400">
                  Need guidance on DDJAY projects in Gurgaon & Haryana? Contact Dee Divine Propinfra experts.
                </div>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg active:scale-95 flex-shrink-0"
                >
                  <span>Consult An Expert</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
