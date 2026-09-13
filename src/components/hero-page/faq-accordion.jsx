"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is Gurgaon a good place to invest in real estate in 2026?",
    answer: "Gurgaon remains one of North India's most active real estate markets, backed by strong employment growth in IT, finance, and manufacturing, along with continued infrastructure development along corridors like Dwarka Expressway and New Gurgaon. Property prices and demand have shown steady movement across residential and plotted segments, though like any market, outcomes depend on location, project type, and timing it's worth evaluating each opportunity on its own merits."
  },
  {
    question: "What is DDJAY and how does it work in Gurgaon?",
    answer: "DDJAY (Deen Dayal Jan Awas Yojna) is a Haryana government scheme that allows licensed developers to create affordable, plotted colonies with defined infrastructure standards. Buyers get direct ownership of a plot rather than a built unit, along with access to planned roads, sewage, and other civic amenities as per the scheme's layout norms. It's a popular route for buyers who want land ownership with more construction flexibility."
  },
  {
    question: "Is Dee Divine PropInfra RERA/HARERA registered?",
    answer: "Yes. Dee Divine PropInfra operates under RERA Certificate No. 902 4611 RC/HARERA/GGM/3889/3484/2025/766. This registration means project details, layout plans, and timelines are documented and available for verification, giving buyers a transparent basis to evaluate any project before making a decision."
  },
  {
    question: "What is the price range for DDJAY plots in Gurgaon?",
    answer: "Pricing for DDJAY plots varies based on location, plot size, and the specific phase of development. Rather than quoting a fixed range here, we'd recommend checking current inventory directly, since prices are updated as new phases and sectors open up — this ensures you're working with accurate, current figures rather than outdated estimates."
  },
  {
    question: "Which areas in Gurgaon are best for plotted development investment?",
    answer: "Corridors like New Gurgaon and Dwarka Expressway have seen consistent plotted-development activity due to improving connectivity and civic infrastructure. The right area ultimately depends on your budget, purpose (end-use vs. long-term holding), and how soon you'd want access to developed infrastructure."
  },
  {
    question: "Can NRIs invest in Dee Divine PropInfra projects?",
    answer: "Yes, NRIs can invest in our projects, subject to standard RBI and FEMA guidelines applicable to property purchases by non-resident Indians. Our team can walk you through the documentation and remittance process specific to NRI buyers."
  },
  {
    question: "How do I become a channel partner with Dee Divine PropInfra?",
    answer: "You can apply directly through our channel partner portal by submitting your basic details and KYC documents. Once verified, you get access to project brochures, pricing sheets, and a defined commission structure to start bringing in buyers."
  },
  {
    question: "How do I book a site visit with Dee Divine PropInfra?",
    answer: "You can schedule a site visit by filling out the enquiry form on our website or reaching out via the listed contact number/WhatsApp. Our team will follow up to understand your requirements and arrange a convenient time."
  }
];

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Build JSON-LD structured data for Google FAQ schema markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="relative py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-[#fcfcfc] overflow-hidden">
      {/* Subtle Premium Background Glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(217,35,62,0.03)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      {/* Insert JSON-LD Schema markup into Head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">

          {/* LEFT: Text description */}
          <div className="lg:col-span-5 sticky top-32">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-[2px] bg-gradient-to-r from-[#8F1230] to-[#FF5A67]" />
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.35em] bg-gradient-to-r from-[#8F1230] to-[#FF5A67] bg-clip-text text-transparent">
                Assistance
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#0c0d12] leading-[1.15]">
              Frequently <br className="hidden sm:block" />
              <span className="text-[#8b8c91]">Asked Queries</span>
            </h2>
            <p className="text-[#5F6065] text-sm md:text-base max-w-sm mt-6 leading-relaxed">
              Have doubts about land acquisitions, RERA registration parameters, or registry guidelines? Browse through our responses or contact our representative directly.
            </p>

            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="mt-10 inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#8F1230] via-[#D9233E] to-[#FF5A67] hover:shadow-[0_8px_25px_rgba(217,35,62,0.4)] hover:-translate-y-[2px] text-white rounded-xl text-xs font-black uppercase tracking-[0.2em] transition-all duration-300"
            >
              Ask a Different Question →
            </button>
          </div>

          {/* RIGHT: Accordion Layout */}
          <div className="lg:col-span-7 space-y-4 md:space-y-5">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <div
                  key={index}
                  className={`relative group bg-white/60 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-500 border ${
                    isOpen 
                      ? "border-[#D9233E]/30 shadow-[0_8px_30px_rgba(217,35,62,0.08)] bg-white/80" 
                      : "border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(217,35,62,0.06)] hover:-translate-y-0.5 hover:border-[#D9233E]/20"
                  }`}
                >
                  {/* Subtle hover glow for closed cards */}
                  {!isOpen && (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(217,35,62,0.03)_0%,transparent_60%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                  {/* Subtle active glow for opened card */}
                  {isOpen && (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,35,62,0.05)_0%,transparent_70%)] pointer-events-none transition-opacity duration-500" />
                  )}

                  <button
                    onClick={() => toggleAccordion(index)}
                    className="relative z-10 w-full flex items-center justify-between text-left focus:outline-none p-6 md:p-8"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-[13px] md:text-[14px] font-black uppercase tracking-wide transition-colors duration-300 pr-6 leading-snug ${isOpen ? "text-[#D9233E]" : "text-[#0c0d12]"}`}>
                      {faq.question}
                    </span>
                    <span className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-500 flex-shrink-0 ${isOpen ? "bg-gradient-to-br from-[#8F1230] to-[#FF5A67] text-white shadow-[0_4px_12px_rgba(217,35,62,0.3)] rotate-180" : "bg-gradient-to-br from-[#8F1230]/5 to-[#FF5A67]/5 text-[#D9233E] border border-[#D9233E]/20 group-hover:bg-[#8F1230]/10"}`}>
                      <ChevronDown size={16} />
                    </span>
                  </button>

                  {/* Animated collapse height */}
                  <div
                    className={`relative z-10 transition-all duration-500 ease-in-out overflow-hidden px-6 md:px-8 ${
                      isOpen ? "max-h-[500px] opacity-100 pb-8" : "max-h-0 opacity-0 pb-0"
                    }`}
                  >
                    <div className="w-8 h-[2px] bg-gradient-to-r from-[#8F1230] to-[#FF5A67] mb-5 opacity-60" />
                    <p className="text-[13px] md:text-sm text-[#5F6065] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
