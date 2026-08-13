"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  RotateCcw,
  ShieldCheck,
  Clock,
  CreditCard,
  CheckCircle2,
  HelpCircle,
  Mail,
  FileText,
  Building2,
  Phone,
  AlertTriangle,
  ChevronRight,
  Search
} from "lucide-react";

export default function RefundPolicyContent() {
  const [searchTerm, setSearchTerm] = useState("");

  const sections = [
    {
      id: "overview",
      number: "01",
      title: "1. Overview & Policy Objective",
      icon: <RotateCcw className="w-5 h-5 text-red-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            At <strong className="text-neutral-900 font-bold">Dee Divine Propinfra Pvt. Ltd.</strong>, we strive to maintain complete transparency in all customer transactions, Expressions of Interest (EOI), booking tokens, and property advisory payments.
          </p>
          <p>
            This Refund & Cancellation Policy outlines the conditions under which cancellations are processed, refund eligibility, timeline for funds disbursement, and applicable non-refundable components across our property offerings.
          </p>
        </div>
      ),
    },
    {
      id: "cancellation-request",
      number: "02",
      title: "2. How to Submit a Cancellation Request",
      icon: <FileText className="w-5 h-5 text-blue-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            Customers who have submitted an online payment for Expression of Interest (EOI), token amount, or booking advance can request a cancellation by submitting a written notice:
          </p>
          <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200/80 space-y-3">
            <h4 className="font-bold text-neutral-900 text-xs uppercase tracking-wider">Mandatory Details Required:</h4>
            <ul className="space-y-2 text-xs text-neutral-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Full Name of the primary applicant.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Transaction Reference Number / Payment Receipt ID.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Date of transaction & proof of payment.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Bank account details (Account Name, Account Number, IFSC Code, Branch) matching the original applicant's name.</span>
              </li>
            </ul>
          </div>
          <p className="text-xs text-neutral-500 italic">
            Email cancellation requests must be sent directly to <a href="mailto:info@deedivinepropinfra.com" className="text-red-600 font-semibold underline">info@deedivinepropinfra.com</a>.
          </p>
        </div>
      ),
    },
    {
      id: "eligibility",
      number: "03",
      title: "3. Refund Eligibility & Stage Conditions",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            Refund eligibility depends on the stage of the property transaction and timing of cancellation:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            <div className="p-4 rounded-xl border border-neutral-200 bg-white shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Stage 1</span>
              <h4 className="font-bold text-neutral-900 text-sm mt-2 mb-1">Pre-Allotment / EOI</h4>
              <p className="text-xs text-neutral-600 leading-normal">
                100% refund eligible if requested before unit allotment confirmation, minus standard banking processing charges.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 bg-white shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-1 rounded">Stage 2</span>
              <h4 className="font-bold text-neutral-900 text-sm mt-2 mb-1">Provisional Booking</h4>
              <p className="text-xs text-neutral-600 leading-normal">
                Processed subject to standard forfeiture terms outlined in the Provisional Booking Application form prior to BBA execution.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 bg-white shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-1 rounded">Stage 3</span>
              <h4 className="font-bold text-neutral-900 text-sm mt-2 mb-1">Post-BBA Signing</h4>
              <p className="text-xs text-neutral-600 leading-normal">
                Governed strictly by the terms specified in the registered Builder Buyer Agreement and applicable state RERA regulations.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "timeline",
      number: "04",
      title: "4. Processing Window & Disbursement Mode",
      icon: <Clock className="w-5 h-5 text-amber-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-4 flex items-start gap-3">
            <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-neutral-900 text-sm">5 to 7 Business Days Disbursement Window</h4>
              <p className="text-xs text-neutral-600 mt-1">
                Once a cancellation request is reviewed and approved by our accounts team, funds are dispatched within 5 to 7 business days to the original payment source.
              </p>
            </div>
          </div>
          <p>
            Approved refunds are credited directly back to the original source payment method (Credit Card, Debit Card, Net Banking, UPI, or Bank Account). Depending on your bank, funds may take 2-4 additional working days to reflect in your bank statement.
          </p>
        </div>
      ),
    },
    {
      id: "non-refundable",
      number: "05",
      title: "5. Non-Refundable Components",
      icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>The following charges are non-refundable under any circumstances:</p>
          <ul className="space-y-2 text-xs text-neutral-700 list-disc pl-5">
            <li>Government Taxes & Statutory Duties (GST, stamp duty, or registration fees already remitted).</li>
            <li>Banking Gateway Convenience Fees or Currency Conversion Charges.</li>
            <li>Completed customized architectural modifications or personalized legal consultation fees.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "contact",
      number: "06",
      title: "6. Customer Accounts Helpdesk",
      icon: <Building2 className="w-5 h-5 text-neutral-800" />,
      content: (
        <div className="bg-neutral-900 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h4 className="font-black text-base uppercase tracking-wider text-white">Accounts & Refund Helpdesk</h4>
          <p className="text-neutral-400 text-xs leading-relaxed">
            For refund queries or status tracking, please contact our Customer Accounts Desk:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-neutral-300 pt-2 border-t border-neutral-800">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-red-500 shrink-0" />
              <span>Dee Divine Propinfra Pvt. Ltd.</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-red-500 shrink-0" />
              <a href="mailto:info@deedivinepropinfra.com" className="hover:text-white transition">info@deedivinepropinfra.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-red-500 shrink-0" />
              <a href="tel:+919211496111" className="hover:text-white transition">+91-9211496111</a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-500 shrink-0" />
              <span>Mon – Sat: 10:00 AM – 7:00 PM IST</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const filteredSections = sections.filter((sec) =>
    sec.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#fcfcfd] text-neutral-900 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Top Banner Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200/60 text-red-600 text-xs font-bold uppercase tracking-wider mb-6">
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Customer Protection & Refund Guidelines</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-900 uppercase mb-4">
          Refund & Cancellation <span className="text-red-600">Policy</span>
        </h1>
        <p className="text-neutral-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Transparent guidelines on EOI cancellation, refund eligibility stages, disbursement timelines, and dedicated accounts helpdesk support.
        </p>

        {/* Search Bar */}
        <div className="mt-8 max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search refund policy..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white border border-neutral-200 rounded-xl text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-red-500 shadow-sm transition"
          />
        </div>
      </div>

      {/* Policy Content Sections */}
      <div className="max-w-4xl mx-auto space-y-8">
        {filteredSections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className="bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-8 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-100">
              <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-100">
                {section.icon}
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-neutral-900">
                {section.title}
              </h2>
            </div>
            {section.content}
          </div>
        ))}
      </div>
    </div>
  );
}
