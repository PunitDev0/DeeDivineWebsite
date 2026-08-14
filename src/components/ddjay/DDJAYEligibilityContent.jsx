"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileCheck,
  UserCheck,
  Building2,
  Globe,
  Briefcase,
  FileText,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Search,
  Compass,
  ArrowRight,
  Sparkles,
  BookOpen,
  Clock,
  ExternalLink,
  Award
} from "lucide-react";

export default function DDJAYEligibilityContent() {
  const [activeSection, setActiveSection] = useState(null);

  const navItems = [
    { id: "who-can-apply", label: "Who Can Apply" },
    { id: "income-limits", label: "Income Categories" },
    { id: "nri-eligibility", label: "NRI Applicants" },
    { id: "govt-employees", label: "Govt Employees" },
    { id: "documents-list", label: "Documents Required" },
    { id: "id-income-proof", label: "ID & Income Proof" },
    { id: "affidavit-format", label: "Affidavit Format" },
    { id: "post-allotment-docs", label: "Post-Allotment Docs" },
    { id: "check-online", label: "Check Online" },
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
        
        {/* HERO BANNER */}
        <div className="bg-[#0c0d12] text-white rounded-3xl p-8 sm:p-12 md:p-16 mb-12 relative overflow-hidden shadow-2xl border border-black/10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.25em] mb-6 backdrop-blur-md border border-white/10">
              <FileCheck className="w-3.5 h-3.5 text-red-500" />
              <span>Official Criteria & Requirements Guide</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
              DDJAY Eligibility & Documents
              <span className="block text-red-500 text-2xl sm:text-3xl md:text-4xl mt-2 font-extrabold">
                Complete Checklist for Plot Buyers
              </span>
            </h1>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                Before you apply for a plot under the <strong className="text-white font-bold">Deen Dayal Jan Awas Yojna</strong>, it helps to know exactly where you stand. DDJAY plot eligibility criteria decide whether you can even enter the draw, and having the right documents ready decides how smoothly your application moves once you&apos;re shortlisted. This guide covers both, so you don&apos;t lose a chance because of a missing form or an unclear rule.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-neutral-400 font-medium">
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <BookOpen className="w-4 h-4 text-red-500" />
                <span>Verified Checklist</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Haryana Govt & RERA Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Updated for 2026–2027</span>
              </div>
            </div>
          </div>
        </div>

        {/* NAVIGATION BAR */}
        <div className="sticky top-24 z-40 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-neutral-200/80 shadow-md mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-neutral-900 flex-shrink-0">
              <Compass className="w-4 h-4 text-red-500" />
              <span>Section Menu:</span>
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

        {/* CONTENT SECTIONS */}
        <div className="space-y-12">

          {/* SECTION 1: WHO CAN APPLY */}
          <div id="who-can-apply" className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-black text-sm border border-red-100">
                01
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900">
                DDJAY Eligibility Criteria: Who Can Apply
              </h2>
            </div>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
              The scheme is built to be accessible, but a few core conditions apply to everyone:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Age & Citizenship",
                  desc: "The applicant must be at least 18 years old and hold Indian citizenship."
                },
                {
                  title: "Non-Ownership Requirement",
                  desc: "Neither the applicant nor their spouse should already own a plot or house allotted under any other government housing scheme in Haryana."
                },
                {
                  title: "Single Application Policy",
                  desc: "One person can apply for only one DDJAY plot per project — applying twice under different names or documents leads to instant disqualification."
                },
                {
                  title: "Active Bank Account",
                  desc: "The applicant should have a valid, active Indian bank account for registration fee payments and instant refund processing."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-neutral-50 p-5 rounded-2xl border border-neutral-200 flex items-start gap-3">
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

            <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white p-5 rounded-2xl border border-neutral-700 text-xs sm:text-sm leading-relaxed">
              <strong className="text-red-400 font-bold">Summary:</strong> If you&apos;re wondering who can apply for a DDJAY plot, the short answer is: <em>any adult Indian citizen who meets the ownership and income conditions for their chosen category.</em>
            </div>
          </div>

          {/* SECTION 2: INCOME LIMITS */}
          <div id="income-limits" className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-black text-sm border border-red-100">
                02
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900">
                DDJAY Income Limit: EWS, LIG, and MIG Explained
              </h2>
            </div>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
              DDJAY plots are split across three income categories, and the income limit decides which one you qualify for:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-neutral-50 p-5 rounded-2xl border border-neutral-200">
                <span className="text-[10px] font-black uppercase tracking-wider bg-red-100 text-red-700 px-2.5 py-1 rounded-full">
                  Category 01
                </span>
                <h3 className="font-bold text-neutral-900 text-base uppercase tracking-wide mt-3 mb-2">
                  EWS (Economically Weaker Section)
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Reserved for applicants with the lowest household income bracket. Plot sizes here are smaller, and pricing is the most subsidised under state guidelines.
                </p>
              </div>

              <div className="bg-neutral-50 p-5 rounded-2xl border border-neutral-200">
                <span className="text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full">
                  Category 02
                </span>
                <h3 className="font-bold text-neutral-900 text-base uppercase tracking-wide mt-3 mb-2">
                  LIG (Lower Income Group)
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  A slightly higher income bracket, offering marginally bigger plot dimensions than EWS with affordable pricing benefits.
                </p>
              </div>

              <div className="bg-neutral-50 p-5 rounded-2xl border border-neutral-200">
                <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">
                  Category 03
                </span>
                <h3 className="font-bold text-neutral-900 text-base uppercase tracking-wide mt-3 mb-2">
                  MIG (Middle Income Group)
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Open to a wider income range and priced closer to market rates, though still lower than a regular licensed colony in the same micro-market.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed bg-neutral-50 p-4 rounded-xl border border-neutral-200">
              * Income proof is usually self-declared through a notarised affidavit, though some projects may ask for salary slips or Income Tax Return (ITR) copies to support the declaration.
            </p>
          </div>

          {/* SECTION 3: NRI APPLICANTS */}
          <div id="nri-eligibility" className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-black text-sm border border-red-100">
                03
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900">
                DDJAY Eligibility for NRI Applicants
              </h2>
            </div>

            <div className="space-y-4 text-neutral-600 leading-relaxed text-sm sm:text-base">
              <p>
                <strong className="text-neutral-900">Non-Resident Indians (NRIs)</strong> are allowed to apply for DDJAY plots, provided they meet the same basic conditions as resident applicants:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200 text-xs">
                  <strong className="block text-neutral-900 mb-1">No Prior Ownership:</strong>
                  No government-allotted plot or house in Haryana.
                </div>
                <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200 text-xs">
                  <strong className="block text-neutral-900 mb-1">Valid Identity Proof:</strong>
                  Passport & OCI or valid visa copy.
                </div>
                <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200 text-xs">
                  <strong className="block text-neutral-900 mb-1">Indian Banking:</strong>
                  Functional NRE/NRO or resident Indian bank account.
                </div>
              </div>

              <p>
                Many NRIs prefer DDJAY plots because the entry cost is lower and the HARERA-backed process adds a strong layer of transparency that&apos;s easier to trust from abroad.
              </p>
            </div>
          </div>

          {/* SECTION 4: GOVT EMPLOYEES */}
          <div id="govt-employees" className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-black text-sm border border-red-100">
                04
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900">
                DDJAY Eligibility for Government Employees
              </h2>
            </div>

            <div className="space-y-4 text-neutral-600 leading-relaxed text-sm sm:text-base">
              <p>
                There is <strong className="text-neutral-900 font-semibold">no blanket restriction</strong> that stops government employees from applying.
              </p>
              <p>
                The same fundamental rule applies to them as to any other applicant: <em>they simply cannot already own a house or plot allotted under a separate government housing scheme in Haryana.</em>
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-2xl text-amber-900 text-xs sm:text-sm">
                If a government employee has already received a plot or flat under a different state scheme (such as HUDA/HSVP or previous government schemes), they become ineligible for a fresh DDJAY allotment.
              </div>
            </div>
          </div>

          {/* SECTION 5: DOCUMENTS LIST */}
          <div id="documents-list" className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-black text-sm border border-red-100">
                05
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900">
                Documents Required for DDJAY Plot Registration
              </h2>
            </div>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
              Once you&apos;ve confirmed eligibility, the next step is putting together your application documents. Here&apos;s what most projects ask for:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
              {[
                { label: "Aadhaar Card & PAN Card", detail: "Primary applicant and co-applicant identity verification" },
                { label: "Passport-size Photographs", detail: "Recent colored passport photographs of applicant" },
                { label: "Proof of Current Address", detail: "Utility bill, bank statement, or registered rent agreement" },
                { label: "Bank Account Details", detail: "Cancelled cheque or passbook copy for refund processing" },
                { label: "Self-Declaration Affidavit", detail: "Confirming no prior ownership under Haryana govt housing schemes" },
                { label: "Income Proof Documents", detail: "Salary slip / income certificate (where applicable for EWS/LIG)" }
              ].map((doc, i) => (
                <div key={i} className="flex items-start gap-3 bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
                  <FileText className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-neutral-900 uppercase tracking-wide">
                      {doc.label}
                    </h4>
                    <p className="text-xs text-neutral-600 mt-0.5">
                      {doc.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 6: ID & INCOME PROOF REQUIREMENTS */}
          <div id="id-income-proof" className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-black text-sm border border-red-100">
                06
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900">
                Aadhaar, PAN, and Income Proof Requirements
              </h2>
            </div>

            <div className="space-y-4 text-neutral-600 leading-relaxed text-sm sm:text-base">
              <p>
                <strong className="text-neutral-900">Aadhaar and PAN are non-negotiable</strong>; nearly every DDJAY project uses them to verify identity and prevent duplicate applications across projects.
              </p>
              <p>
                Income proof is treated a little differently depending on category:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
                  <h4 className="font-bold text-neutral-900 text-xs sm:text-sm uppercase tracking-wide mb-1">
                    EWS & LIG Applicants
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Asked for either a salary slip, an income certificate from a competent authority, or a self-declaration affidavit stating annual household income falls within prescribed limits.
                  </p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
                  <h4 className="font-bold text-neutral-900 text-xs sm:text-sm uppercase tracking-wide mb-1">
                    MIG Applicants
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    MIG applicants rarely need to submit income proof upfront, since their income bracket is broader and open to open-market pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 7: AFFIDAVIT FORMAT */}
          <div id="affidavit-format" className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-black text-sm border border-red-100">
                07
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900">
                DDJAY Affidavit Format
              </h2>
            </div>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
              The affidavit is one of the most important documents in the entire process, since it&apos;s your legal declaration of eligibility. It typically needs to state:
            </p>

            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200 space-y-3 text-xs sm:text-sm font-medium text-neutral-800 mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>That you do not own a plot or house under any other government housing scheme in Haryana.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>Your correct income category (EWS, LIG, or MIG), where applicable.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>That the information provided in the application is true to the best of your knowledge.</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-600">
              * Most developers provide a ready format for this affidavit along with the application form, so you don&apos;t need to draft one from scratch — you just need to get it notarised before submission.
            </p>
          </div>

          {/* SECTION 8: POST ALLOTMENT DOCS */}
          <div id="post-allotment-docs" className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-black text-sm border border-red-100">
                08
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900">
                Documents Needed After Allotment
              </h2>
            </div>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
              Getting selected in the draw isn&apos;t the end of the paperwork. Once allotted, you&apos;ll typically need:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                "The allotment letter issued by the developer",
                "Payment receipts for every instalment made",
                "No Objection Certificate (NOC) from the developer before final registry",
                "Original identity documents for verification at the sub-registrar's office during registry"
              ].map((doc, i) => (
                <div key={i} className="flex items-center gap-3 bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100 text-xs sm:text-sm font-medium text-emerald-950">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 9: CHECK ONLINE */}
          <div id="check-online" className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-black text-sm border border-red-100">
                09
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900">
                How to Check DDJAY Eligibility Online
              </h2>
            </div>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
              Before applying, it&apos;s worth confirming your eligibility status directly rather than assuming. Most project portals let you:
            </p>

            <div className="space-y-3 mb-6">
              {[
                "Enter your Aadhaar number to check for any existing allotment record in Haryana",
                "Verify your income category against the limits published for that specific project",
                "Check the application window dates to make sure you're not applying after the deadline closes"
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3 bg-neutral-50 p-3.5 rounded-xl border border-neutral-200 text-xs sm:text-sm font-medium text-neutral-800">
                  <Search className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span>{step}</span>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-neutral-600">
              Doing this quick check before you submit documents saves you from a rejected application over a technicality.
            </p>
          </div>

          {/* SECTION 10: FINAL THOUGHTS */}
          <div className="bg-[#0c0d12] text-white rounded-3xl p-8 sm:p-12 border border-black/10 relative overflow-hidden shadow-xl">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-[10px] font-extrabold uppercase tracking-widest mb-4 border border-red-500/30">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Final Checklist Summary</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-4">
                Final Thoughts
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl">
                DDJAY eligibility and documentation aren&apos;t complicated, but they are unforgiving of small mistakes: a missing affidavit or a mismatched income proof can cost you a spot in the draw. Keep your Aadhaar, PAN, address proof, and affidavit ready well before the application window opens, and double-check your income category against the project&apos;s published limits. That one extra step is usually what separates a smooth application from a rejected one.
              </p>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-neutral-400">
                  Need help preparing your DDJAY application documents? Speak with Dee Divine Propinfra experts.
                </div>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg active:scale-95 flex-shrink-0"
                >
                  <span>Get Assistance</span>
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
