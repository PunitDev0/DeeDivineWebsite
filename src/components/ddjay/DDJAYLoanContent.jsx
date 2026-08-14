"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  Landmark,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Clock,
  Compass,
  ArrowRight,
  Sparkles,
  BookOpen,
  TrendingUp,
  Percent,
  Coins,
  MapPin,
  FileText,
  UserCheck,
  Scale,
  Award,
  HelpCircle
} from "lucide-react";

export default function DDJAYLoanContent() {
  const [activeSection, setActiveSection] = useState(null);

  const navItems = [
    { id: "loan-available", label: "Is Loan Available?" },
    { id: "how-it-works", label: "Loan Types" },
    { id: "sbi-loan", label: "SBI Plot Loans" },
    { id: "hdfc-loan", label: "HDFC Financing" },
    { id: "nationalized-vs-private", label: "Bank Comparison" },
    { id: "loan-eligibility", label: "Eligibility Criteria" },
    { id: "payment-plan", label: "Payment Milestones" },
    { id: "ltv-ratio", label: "LTV & 80% Financing" },
    { id: "investment-returns", label: "Returns & Resale" },
    { id: "best-sectors", label: "Best Sectors 2026" },
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
              <Landmark className="w-3.5 h-3.5 text-red-500" />
              <span>Plot Loan & Bank Financing Guide</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
              DDJAY Loan & Financing Guide
              <span className="block text-red-500 text-2xl sm:text-3xl md:text-4xl mt-2 font-extrabold">
                How to Fund Your Plot Purchase
              </span>
            </h1>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                Buying a plot under the <strong className="text-white font-bold">Deen Dayal Jan Awas Yojna</strong> is affordable by design, but most buyers still don&apos;t pay the full amount upfront. This guide covers home loans for DDJAY plot options, DDJAY plot loan eligibility, how the payment plan works, and what to expect from banks when you apply for financing.
              </p>
              <div className="flex flex-wrap gap-3 mt-4 text-xs font-medium">
                <Link href="/ddjay-eligibility-and-documents-checklist" className="text-red-400 hover:text-red-300 underline flex items-center gap-1">
                  <span>DDJAY Eligibility & Documents Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <span className="text-neutral-600">•</span>
                <Link href="/what-is-deen-dayal-jan-awas-yojna-ddjay-guide" className="text-red-400 hover:text-red-300 underline flex items-center gap-1">
                  <span>Full DDJAY Overview</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-neutral-400 font-medium">
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <BookOpen className="w-4 h-4 text-red-500" />
                <span>Financing & LTV Guide</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>SBI, HDFC, ICICI & PNB Bank Approved</span>
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

          {/* SECTION 1: IS LOAN AVAILABLE */}
          <div id="loan-available" className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-black text-sm border border-red-100">
                01
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900">
                Is Loan Available for DDJAY Plots?
              </h2>
            </div>

            <div className="space-y-4 text-neutral-600 leading-relaxed text-sm sm:text-base">
              <p>
                <strong className="text-neutral-900 font-bold text-lg">Yes, loans are available for DDJAY plots</strong>, and this is one of the key reasons the scheme sees such strong investor and homebuyer demand.
              </p>
              <p>
                Since DDJAY projects are <strong className="text-neutral-900">HARERA-registered</strong> and carry a valid license from the Town and Country Planning (TCP) Department Haryana, most nationalized and private banks treat them as eligible collateral for a plot loan or a composite home loan.
              </p>

              <div className="bg-neutral-50 p-5 rounded-2xl border border-neutral-200 my-4">
                <h4 className="font-bold text-xs sm:text-sm text-neutral-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-red-500" />
                  Key Requirements Banks Look For:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                    <span>Clean, marketable title & encumbrance-free land status</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                    <span>Active HARERA registration certificate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                    <span>Executed Builder-Buyer Agreement specifying payment milestones</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SECTION 2: HOW IT WORKS */}
          <div id="how-it-works" className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-black text-sm border border-red-100">
                02
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900">
                Bank Loan for DDJAY Plot: How It Works
              </h2>
            </div>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
              A bank loan for DDJAY plot purchases usually falls into one of two categories:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-neutral-50 p-5 rounded-2xl border border-neutral-200">
                <span className="text-[10px] font-black uppercase tracking-wider bg-red-100 text-red-700 px-2.5 py-1 rounded-full">
                  Option A
                </span>
                <h3 className="font-bold text-neutral-900 text-base uppercase tracking-wide mt-3 mb-2">
                  Plot Loan (Land Only)
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Covers only the cost of the land, disbursed either as a lump sum or in tranches tied to the developer&apos;s payment plan. Construction, if planned later, needs a separate loan application.
                </p>
              </div>

              <div className="bg-neutral-50 p-5 rounded-2xl border border-neutral-200">
                <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">
                  Option B
                </span>
                <h3 className="font-bold text-neutral-900 text-base uppercase tracking-wide mt-3 mb-2">
                  Composite Loan (Plot + Construction)
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Covers both the plot purchase and construction cost together under one repayment structure — useful if you intend to build a house on the plot within a fixed timeline set by the lender.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-600 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-2xl text-amber-900">
              * Most banks disburse the loan amount directly to the developer according to the construction milestones in your allotment letter, rather than handing the full amount to the buyer upfront.
            </p>
          </div>

          {/* SECTION 3 & 4: SBI & HDFC LOANS */}
          <div id="sbi-loan" className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-black text-sm border border-red-100">
                03
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900">
                SBI & Private Bank Loans for DDJAY Plots
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-neutral-50 p-5 rounded-2xl border border-neutral-200">
                <div className="flex items-center gap-2 mb-3">
                  <Landmark className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-neutral-900 text-base uppercase tracking-wide">
                    SBI Home Loan for DDJAY Plot
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  State Bank of India (SBI) offers home/plot loans against DDJAY plots as long as the project is RERA-registered and holds a valid DDJAY license. SBI verifies title, checks developer approvals, and sanctions the loan based on applicant income. SBI typically requests the allotment letter, payment receipts made, and RERA certificate.
                </p>
              </div>

              <div id="hdfc-loan" className="bg-neutral-50 p-5 rounded-2xl border border-neutral-200">
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="w-5 h-5 text-red-600" />
                  <h3 className="font-bold text-neutral-900 text-base uppercase tracking-wide">
                    HDFC Loan for Haryana Govt Plots
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Private lenders like HDFC finance DDJAY and similar Haryana government-notified plots. HDFC verifies developer track record, construction timeline, and layout clearances. Comparing 2-3 banks for interest rates and processing fees is recommended.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 5: BANK COMPARISON */}
          <div id="nationalized-vs-private" className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-black text-sm border border-red-100">
                04
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900">
                Nationalized Bank Loan vs Private Bank Loan for DDJAY
              </h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-neutral-200 mb-6">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0c0d12] text-white uppercase text-[11px] tracking-wider">
                  <tr>
                    <th className="p-4">Parameter</th>
                    <th className="p-4 text-red-400">Nationalized Banks (SBI, PNB, BOB)</th>
                    <th className="p-4 text-neutral-300">Private Lenders (HDFC, ICICI, Axis)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 bg-white font-medium text-neutral-700">
                  <tr>
                    <td className="p-4 font-bold text-neutral-900">Interest Rates</td>
                    <td className="p-4 bg-red-50/30">Generally lower & policy-subsidized rates</td>
                    <td className="p-4">Slightly higher competitive market rates</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-neutral-900">Processing Speed</td>
                    <td className="p-4 bg-red-50/30">Standard verification turnaround (7-14 days)</td>
                    <td className="p-4">Faster turnaround & digital processing (3-7 days)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-neutral-900">Documentation Ease</td>
                    <td className="p-4 bg-red-50/30">Familiar with govt scheme policy paperwork</td>
                    <td className="p-4">Stricter developer track record & title checks</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-neutral-900">Repayment Flexibility</td>
                    <td className="p-4 bg-red-50/30">Standard EMI structures</td>
                    <td className="p-4">Flexible tenures & custom repayment plans</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* SECTION 6: LOAN ELIGIBILITY */}
          <div id="loan-eligibility" className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-black text-sm border border-red-100">
                05
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900">
                DDJAY Plot Loan Eligibility
              </h2>
            </div>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
              Loan eligibility depends on standard banking parameters rather than anything unique to DDJAY itself:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
              {[
                { title: "Stable Income Proof", detail: "Salaried or self-employed with salary slips, ITR filings, or Audited P&L" },
                { title: "CIBIL / Credit Score", detail: "A healthy credit score meeting the bank's minimum benchmark (typically 750+)" },
                { title: "Age & Tenure Capacity", detail: "Age bracket allowing loan tenure servicing before retirement" },
                { title: "RERA Verified Title", detail: "Clean, encumbrance-free title on the plot being purchased" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
                  <UserCheck className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-neutral-900 uppercase tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-xs text-neutral-600 mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 7 & 8: PAYMENT PLAN & LTV RATIO */}
          <div id="payment-plan" className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-black text-sm border border-red-100">
                06
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900">
                DDJAY Plot Payment Plan & Down Payment
              </h2>
            </div>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
              Most DDJAY projects follow a milestone-linked payment plan rather than asking for full payment upfront:
            </p>

            <div className="space-y-3 mb-6">
              {[
                { step: "Stage 1", text: "Booking amount paid at allotment confirmation" },
                { step: "Stage 2", text: "Next installment due on execution of Builder-Buyer Agreement" },
                { step: "Stage 3", text: "Subsequent installments tied to development milestones (internal roads, utilities)" },
                { step: "Stage 4", text: "Final installment due at plot registry and possession" }
              ].map((m, i) => (
                <div key={i} className="flex items-center gap-3 bg-neutral-50 p-3.5 rounded-xl border border-neutral-200 text-xs sm:text-sm">
                  <span className="font-black text-red-500 text-xs uppercase tracking-wider">{m.step}:</span>
                  <span className="text-neutral-800 font-medium">{m.text}</span>
                </div>
              ))}
            </div>

            <div id="ltv-ratio" className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white p-6 rounded-2xl border border-neutral-700">
              <h3 className="font-bold text-base uppercase tracking-wide mb-2 flex items-center gap-2">
                <Percent className="w-5 h-5 text-red-400" />
                DDJAY Plot 80% Loan Financing (LTV Ratio)
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Several nationalized and private banks extend up to <strong className="text-white">80% Loan-to-Value (LTV) financing</strong> for RERA-registered DDJAY plot projects. The exact percentage depends on evaluated plot value, income profile, and lender policy.
              </p>
            </div>
          </div>

          {/* SECTION 9: INVESTMENT RETURNS & RESALE */}
          <div id="investment-returns" className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-black text-sm border border-red-100">
                07
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900">
                DDJAY Plot Investment Returns & Appreciation
              </h2>
            </div>

            <div className="space-y-4 text-neutral-600 leading-relaxed text-sm sm:text-base">
              <p>
                <strong className="text-neutral-900 font-bold">DDJAY plot investment returns</strong> are driven by proximity to highways, speed of infrastructure rollout (roads, water, electricity), and neighborhood development.
              </p>
              <p>
                Because plots are sold at policy-linked rates at allotment, early buyers in well-located corridors often see strong long-term appreciation as surrounding sectors mature.
              </p>
            </div>
          </div>

          {/* SECTION 10: BEST SECTORS */}
          <div id="best-sectors" className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-black text-sm border border-red-100">
                08
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900">
                Evaluating Best DDJAY Sectors in Gurgaon (2026)
              </h2>
            </div>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
              Score any DDJAY sector against this criteria before shortlisting:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
              {[
                { title: "Highway & Expressway Access", detail: "Proximity to operational highways (Dwarka Expressway, SPR, NH-48)" },
                { title: "Licensing & RERA Stage", detail: "Active HARERA registration and approved builder-buyer agreements" },
                { title: "Development Pace", detail: "Visible on-site work: internal roads, drainage, sewage, & power lines" },
                { title: "Developer Track Record", detail: "Past completion record of DDJAY projects on scheduled timelines" }
              ].map((c, i) => (
                <div key={i} className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
                  <h4 className="font-bold text-xs sm:text-sm text-neutral-900 uppercase tracking-wide mb-1">
                    {c.title}
                  </h4>
                  <p className="text-xs text-neutral-600">{c.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FINAL CALLOUT */}
          <div className="bg-[#0c0d12] text-white rounded-3xl p-8 sm:p-12 border border-black/10 relative overflow-hidden shadow-xl">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-4">
                Ready to Fund Your DDJAY Plot?
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl">
                Financing a DDJAY plot is straightforward once you align the payment plan with bank disbursement schedules. Contact our expert team for live bank tie-up details, current LTV slabs, and sector evaluations across Gurgaon corridors.
              </p>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-neutral-400">
                  Get custom plot loan guidance and project tie-up details.
                </div>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg active:scale-95 flex-shrink-0"
                >
                  <span>Talk to Our Experts</span>
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
