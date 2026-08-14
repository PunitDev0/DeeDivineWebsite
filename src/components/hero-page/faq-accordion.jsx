"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "Why is Gurugram the top choice for real estate investments in North India?",
    answer: "Gurugram has emerged as the premier investment hub due to massive infrastructural growth, proximity to the IGI Airport, and the expansion of key expressway corridors like Dwarka Expressway and Golf Course Road Ext. It offers high appreciation rates (10%-15% annually), premium corporate headquarters, and high rental yield opportunities."
  },
  {
    question: "How does Dee Divine Propinfra ensure properties are verified and RERA-approved?",
    answer: "Our legal and sales compliance teams verify every listing against the Haryana Real Estate Regulatory Authority (HARERA) database before onboarding. We audit registration numbers, developer records, land titles, and project compliance timelines so that your investment is 100% safe and secure."
  },
  {
    question: "What financial and documentation assistance do you offer to property buyers?",
    answer: "We offer end-to-end guidance through our strategic banking partnerships. Our advisory team coordinates the entire property buying lifecycle, including loan evaluations, documentation processing, legal title reviews, registry formatting, and final execution checks."
  },
  {
    question: "Are there plotted developments under Deen Dayal Jan Awas Yojna (DDJAY) available?",
    answer: "Yes, we deal extensively in plotted developments under Haryana's DDJAY scheme. These plots offer excellent zoning features, gated community parameters, bank loan capabilities up to 80%, and modular construction options across sectors of Gurugram."
  },
  {
    question: "How can I schedule a site visit or consultation with a Dee Divine expert?",
    answer: "You can schedule a private, guided site tour by clicking the 'Book Consultation' button or submitting an enquiry on our Contact form. We provide personalized transport support, detailed pricing summaries, brochures, and dedicated executive assistance on-site."
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
