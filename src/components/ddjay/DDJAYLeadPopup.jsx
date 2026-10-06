"use client";

import React, { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";

export default function DDJAYLeadPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#0c0d12]/40 backdrop-blur-sm"
        onClick={() => setIsVisible(false)}
      />
      
      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-md bg-white border border-white/70 rounded-[28px] p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.1)] overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#B51F3B]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-6 right-6 text-neutral-400 hover:text-[#0c0d12] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative z-10 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-4 h-[2px] bg-gradient-to-r from-[#B51F3B] to-[#FF5364]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#B51F3B]">
              Free Consultation
            </span>
          </div>
          <h3 className="text-2xl font-black uppercase tracking-tight text-[#0c0d12] mb-3">
            Interested in DDJAY?
          </h3>
          <p className="text-sm font-medium text-neutral-500 leading-relaxed">
            Get expert guidance on Deen Dayal Jan Awas Yojna plots, loans, and eligibility.
          </p>
        </div>

        <form 
          className="space-y-4 relative z-10"
          onSubmit={(e) => {
            e.preventDefault();
            // UI only implementation
            setIsVisible(false);
          }}
        >
          <div>
            <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-[#0c0d12] mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-[#f8f9fa] border border-neutral-200/60 rounded-2xl px-4 py-3 text-sm font-medium text-[#0c0d12] placeholder:text-neutral-400 outline-none focus:border-[#B51F3B] focus:ring-4 focus:ring-[#B51F3B]/10 transition-all duration-300"
              required
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-[#0c0d12] mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#f8f9fa] border border-neutral-200/60 rounded-2xl px-4 py-3 text-sm font-medium text-[#0c0d12] placeholder:text-neutral-400 outline-none focus:border-[#B51F3B] focus:ring-4 focus:ring-[#B51F3B]/10 transition-all duration-300"
              required
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-[#0c0d12] mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full bg-[#f8f9fa] border border-neutral-200/60 rounded-2xl px-4 py-3 text-sm font-medium text-[#0c0d12] placeholder:text-neutral-400 outline-none focus:border-[#B51F3B] focus:ring-4 focus:ring-[#B51F3B]/10 transition-all duration-300"
              required
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-[#0c0d12] mb-1.5">
              Requirement
            </label>
            <textarea
              rows="3"
              placeholder="How can we help you?"
              className="w-full bg-[#f8f9fa] border border-neutral-200/60 rounded-2xl px-4 py-3 text-sm font-medium text-[#0c0d12] placeholder:text-neutral-400 outline-none resize-none focus:border-[#B51F3B] focus:ring-4 focus:ring-[#B51F3B]/10 transition-all duration-300"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="group w-full h-12 bg-gradient-to-r from-[#B51F3B] to-[#FF5364] text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full shadow-[0_6px_20px_rgba(229,45,79,0.3)] hover:shadow-[0_10px_30px_rgba(229,45,79,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 mt-2"
          >
            <span>Submit Request</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </div>
  );
}
