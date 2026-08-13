"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CreditCard,
  CheckCircle2,
  FileCheck,
  ShieldCheck,
  Building2,
  Phone,
  Mail,
  Clock,
  HelpCircle,
  Search,
  AlertCircle
} from "lucide-react";

export default function PaymentTermsContent() {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    {
      title: "1. Expression of Interest (EOI)",
      desc: "An EOI payment is an advance token deposit submitted by an interested buyer to register priority intent for upcoming real estate projects, plotted developments, or commercial units prior to public allotment.",
      details: [
        "Secures priority queue for unit selection.",
        "Refundable as per our Refund & Cancellation Policy if allotment is not finalized.",
        "Clearly itemized on official payment receipt.",
      ],
    },
    {
      title: "2. Provisional Booking Amount / Token Money",
      desc: "A Provisional Booking Amount is paid after selecting a specific plot, apartment, or commercial unit to block the unit and initiate the provisional allotment process.",
      details: [
        "Adjusted against the total property consideration value.",
        "Initiates drafting of the Builder Buyer Agreement (BBA).",
        "Subject to statutory KYC verification.",
      ],
    },
    {
      title: "3. Service & Consultation Charges",
      desc: "Professional fees charged for specialized real estate advisory, land feasibility reports, site visit coordination, or legal title verification assistance.",
      details: [
        "Explicitly quoted prior to transaction execution.",
        "Covers professional advisory hours and documentation.",
        "Non-refundable once consultation service is rendered.",
      ],
    },
    {
      title: "4. Documentation & Registration Charges",
      desc: "Administrative fees associated with document drafting, legal vetting, title verification, or government portal registration assistance.",
      details: [
        "Itemized separately from plot core cost.",
        "Remitted directly for legal processing.",
      ],
    },
  ];

  const rules = [
    {
      title: "No Generic Payments Disclaimer",
      content: "Dee Divine Propinfra Pvt. Ltd. never collects payments without explicit transaction breakdowns. Every checkout screen or payment link details the exact unit number, project name, or service category for which the customer is remitting funds.",
    },
    {
      title: "Currency & Payment Modes",
      content: "All transactions on deedivinepropinfra.com are processed in Indian Rupees (INR - ₹). We accept major Credit Cards, Debit Cards, Net Banking, Unified Payments Interface (UPI), and authorized Bank Transfer methods via PCI-DSS Level 1 compliant gateways.",
    },
    {
      title: "Digital Receipts & Confirmations",
      content: "Upon successful payment completion, an automated digital receipt containing the Payment Transaction ID, transaction date, customer name, and itemized amount is dispatched to the customer's registered email address and mobile number.",
    },
    {
      title: "Failed Transactions & Security",
      content: "If a transaction fails or funds are debited without receipt generation, the amount will be automatically reversed by your issuing bank within 3 to 5 working days. For unresolved payment queries, contact info@deedivinepropinfra.com.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfd] text-neutral-900 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Header Banner */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
          <CreditCard className="w-3.5 h-3.5" />
          <span>Transparent Payment & Booking Terms</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-900 uppercase mb-4">
          Payment & Booking <span className="text-red-600">Terms</span>
        </h1>
        <p className="text-neutral-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Clear itemization of Expression of Interest (EOI), booking tokens, consultation charges, currency rules, and transaction guidelines for Dee Divine Propinfra Pvt. Ltd.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Payment Categories Grid */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2 uppercase tracking-wide">
            <FileCheck className="w-5 h-5 text-red-500" />
            What You Are Paying For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-white border border-neutral-200/90 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded">Category 0{idx + 1}</span>
                  <h3 className="text-base font-bold text-neutral-900 mt-3 mb-2">{cat.title}</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">{cat.desc}</p>
                </div>
                <ul className="space-y-2 border-t border-neutral-100 pt-4 text-xs text-neutral-500">
                  {cat.details.map((d, di) => (
                    <li key={di} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Rules & Transparency */}
        <div className="bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2 uppercase tracking-wide border-b border-neutral-100 pb-4">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            Transaction Rules & Security Guidelines
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {rules.map((r, ri) => (
              <div key={ri} className="space-y-2">
                <h4 className="font-bold text-neutral-900 text-sm">{r.title}</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">{r.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Helpdesk */}
        <div className="bg-neutral-900 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h4 className="font-black text-base uppercase tracking-wider text-white">Payment & Sales Support Desk</h4>
          <p className="text-neutral-400 text-xs leading-relaxed">
            Have questions regarding EOI receipts, booking breakdowns, or transaction verification?
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
      </div>
    </div>
  );
}
