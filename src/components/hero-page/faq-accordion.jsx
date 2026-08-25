"use client";

import React, { useState } from "react";

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
    <section className="bg-[#fafafa] py-24 px-6 md:px-16 border-t border-neutral-200/50">
      
      {/* Insert JSON-LD Schema markup into Head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Text description */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-red-500" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#e63946]">
                Assistance
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#0c0d12]">
              Frequently <br />
              <span className="text-neutral-400">Asked Queries</span>
            </h2>
            <p className="text-neutral-500 text-sm max-w-sm mt-5 leading-relaxed">
              Have doubts about land acquisitions, RERA registration parameters, or registry guidelines? Browse through our responses or contact our representative directly.
            </p>
            
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="mt-8 px-6 py-4 bg-[#0c0d12] hover:bg-red-500 text-white text-[10px] font-black uppercase tracking-widest transition-colors duration-300"
            >
              Ask a Different Question →
            </button>
          </div>

          {/* RIGHT: Accordion Layout */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-neutral-200/70 p-5 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-[#0c0d12] pr-4 leading-snug">
                      {faq.question}
                    </span>
                    <span className={`text-xs text-neutral-400 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                      ▼
                    </span>
                  </button>

                  {/* Animated collapse height */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[200px] opacity-100 mt-4 border-t border-neutral-100 pt-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-xs md:text-sm text-neutral-500 leading-relaxed">
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
