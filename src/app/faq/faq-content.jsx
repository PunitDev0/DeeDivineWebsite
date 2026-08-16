"use client";

import { useState } from "react";
import { Search, ChevronDown, HelpCircle, Phone, Mail, MapPin, ShieldCheck, FileText, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const categories = [
  { id: "all", name: "All Questions" },
  { id: "ddjay", name: "DDJAY & Plotted Development" },
  { id: "legal", name: "HARERA & Legal Compliance" },
  { id: "process", name: "Buying Process" },
  { id: "loans", name: "Financing & Bank Loans" },
  { id: "company", name: "Company & Service" },
];

const faqsData = [
  // ── Category: DDJAY & Plotted Development ──
  {
    id: 1,
    category: "ddjay",
    categoryLabel: "DDJAY & Plotted Development",
    question: "What is Deen Dayal Jan Awas Yojna (DDJAY) in Haryana?",
    answer:
      "Deen Dayal Jan Awas Yojna (DDJAY) is a Haryana government policy that allows licensed developers to create affordable, plotted residential colonies in a phased manner. It offers buyers ownership of freehold land with defined zoning, road width, and infrastructure norms, making it a popular route for plotted development investment in Gurgaon and surrounding sectors."
  },
  {
    id: 2,
    category: "ddjay",
    categoryLabel: "DDJAY & Plotted Development",
    question: "Who is eligible to buy a DDJAY plot in Gurugram?",
    answer:
      "Any Indian resident who meets the developer's documentation requirements can purchase a DDJAY plot in Gurugram. There is no restriction limiting these plots to first-time buyers or a specific income group. Buyers typically need standard KYC documents, PAN, address proof, and funds or loan pre-approval for the booking amount."
  },
  {
    id: 3,
    category: "ddjay",
    categoryLabel: "DDJAY & Plotted Development",
    question: "What is the minimum plot size in DDJAY Gurgaon schemes?",
    answer:
      "DDJAY plots in Gurgaon are generally available starting from 150 sq. yards, going up to 500 sq. yards, depending on the specific licensed colony and sector. Larger corner or park-facing plots may carry a premium over standard-facing plots of the same size."
  },
  {
    id: 4,
    category: "ddjay",
    categoryLabel: "DDJAY & Plotted Development",
    question: "What is the difference between a DDJAY plot and a licensed colony plot?",
    answer:
      "DDJAY plots fall under a specific Haryana government affordable-housing policy with fixed EDC/IDC charges, defined road and park infrastructure, and HARERA registration. A standard licensed colony plot follows general development norms but may not carry the same affordability caps or plot-size framework. Both require HARERA registration, but DDJAY is specifically designed to keep entry pricing accessible."
  },
  {
    id: 5,
    category: "ddjay",
    categoryLabel: "DDJAY & Plotted Development",
    question: "How is a DDJAY plot different from an open-market plot in Delhi NCR?",
    answer:
      "DDJAY plots are developed under a government-approved licensing framework with fixed charges, defined road and park infrastructure, and HARERA registration. Open-market plots in Delhi NCR may lack this regulatory oversight, which can mean unclear titles, inconsistent infrastructure, or unregistered transactions. DDJAY plots generally offer more predictable documentation and bank loan eligibility as a result."
  },
  {
    id: 6,
    category: "ddjay",
    categoryLabel: "DDJAY & Plotted Development",
    question: "What is the price per sq. yard for DDJAY plots in Gurgaon?",
    answer:
      "DDJAY plot prices in Gurgaon vary by sector, proximity to Golf Course Road, Dwarka Expressway, or Sohna Road, and the specific licensed colony's development stage. Corner and park-facing plots typically command a premium over standard-facing plots. Our team shares current per-sq.-yard pricing for each active project during consultation, as rates are revised periodically."
  },
  {
    id: 7,
    category: "ddjay",
    categoryLabel: "DDJAY & Plotted Development",
    question: "Is there a time limit to construct on a DDJAY plot?",
    answer:
      "Yes, DDJAY license conditions typically require construction to begin within a stipulated period after possession, as specified in the colony's license terms. Buyers should confirm the exact construction timeline clause with the developer's agreement before booking."
  },
  {
    id: 8,
    category: "ddjay",
    categoryLabel: "DDJAY & Plotted Development",
    question: "What is the typical possession time for a DDJAY plot?",
    answer:
      "Possession timelines depend on the project's construction and infrastructure development phase as disclosed in its HARERA registration. Buyers should check the specific possession date committed in the builder-buyer agreement, since this varies from project to project and is not standardized across DDJAY colonies."
  },
  {
    id: 9,
    category: "ddjay",
    categoryLabel: "DDJAY & Plotted Development",
    question: "Can I resell a DDJAY plot after purchase?",
    answer:
      "Yes, resale is permitted once the plot is registered in the buyer's name and any applicable transfer conditions in the builder-buyer agreement are met. Some developers may charge a transfer or NOC fee for resale before possession."
  },

  // ── Category: HARERA & Legal Compliance ──
  {
    id: 10,
    category: "legal",
    categoryLabel: "HARERA & Legal Compliance",
    question: "How do you verify that a Gurgaon project is HARERA registered?",
    answer:
      "Our legal team cross-checks every project's registration number directly against the Haryana Real Estate Regulatory Authority (HARERA) database before listing it. We also verify the developer's compliance history, project timelines, and any pending complaints on record."
  },
  {
    id: 11,
    category: "legal",
    categoryLabel: "HARERA & Legal Compliance",
    question: "How do I check a DDJAY plot's HARERA registration number online?",
    answer:
      "Buyers can search the project's registration number directly on the official HARERA (Haryana Real Estate Regulatory Authority) website, which lists approved projects, developer details, and compliance status. Our team also shares the verified registration number for every listed project upfront, so you can cross-check it independently."
  },
  {
    id: 12,
    category: "legal",
    categoryLabel: "HARERA & Legal Compliance",
    question: "What documents should I check before buying a plot in Gurgaon?",
    answer:
      "Key documents include the HARERA registration certificate, the license issued to the developer, the sale/allotment agreement, encumbrance status of the land, and the layout plan approved by the competent authority. We recommend buyers review these with independent legal counsel in addition to our due diligence report."
  },
  {
    id: 13,
    category: "legal",
    categoryLabel: "HARERA & Legal Compliance",
    question: "What is the plot registry process after full payment?",
    answer:
      "Once full payment is made, the developer issues a no-dues certificate, after which the conveyance deed is executed and registered at the local sub-registrar office. Our team coordinates document preparation, stamp duty calculation, and appointment scheduling to help this process go smoothly."
  },
  {
    id: 14,
    category: "legal",
    categoryLabel: "HARERA & Legal Compliance",
    question: "What is the stamp duty on plot registration in Haryana?",
    answer:
      "Stamp duty and registration charges in Haryana vary based on the buyer's gender, municipal area, and property value, and rates are revised periodically by the state government. We advise confirming the current applicable rate with our team or the sub-registrar office at the time of registry."
  },
  {
    id: 15,
    category: "legal",
    categoryLabel: "HARERA & Legal Compliance",
    question: "What if there is a dispute with the developer after booking a DDJAY plot?",
    answer:
      "Buyers can raise a complaint with HARERA if a registered project does not meet its disclosed timelines or terms. As your consultant, we also assist in escalating documentation issues directly with the developer before a formal complaint becomes necessary."
  },

  // ── Category: Buying Process ──
  {
    id: 16,
    category: "process",
    categoryLabel: "Buying Process",
    question: "How do I schedule a plot site visit in Gurgaon?",
    answer:
      "You can schedule a guided site visit by submitting an enquiry through our Contact page or by calling our team directly. We arrange transport support, a dedicated executive, and a comparative walkthrough of shortlisted projects based on your budget and preferences."
  },
  {
    id: 17,
    category: "process",
    categoryLabel: "Buying Process",
    question: "How much is the booking amount for a DDJAY plot?",
    answer:
      "Booking amounts vary by project and plot size, typically ranging from a fixed token amount to a percentage of the total plot value. Our sales team shares the exact figure along with the payment schedule for each specific project during consultation."
  },
  {
    id: 18,
    category: "process",
    categoryLabel: "Buying Process",
    question: "What payment plans are available for plots in Gurgaon?",
    answer:
      "Most projects offer a construction-linked or time-linked payment plan, alongside a down-payment plan for buyers who prefer to pay a larger portion upfront in exchange for a rebate. Specific plan structures differ by project and are shared during the consultation stage."
  },
  {
    id: 19,
    category: "process",
    categoryLabel: "Buying Process",
    question: "How long does the plot buying process take from booking to registry?",
    answer:
      "From initial consultation to registry, the process typically takes a few weeks to a couple of months, depending on loan processing time, document readiness, and the developer's registry scheduling. Our team works to keep this timeline as efficient as possible."
  },
  {
    id: 20,
    category: "process",
    categoryLabel: "Buying Process",
    question: "Which sectors and areas in Gurgaon do you cover?",
    answer:
      "We primarily focus on Gurugram, including sectors along Golf Course Road, Golf Course Extension Road, Dwarka Expressway, Sohna Road, and SPR Road, along with select residential and rental listings across Delhi and Noida."
  },

  // ── Category: Financing & Bank Loans ──
  {
    id: 21,
    category: "loans",
    categoryLabel: "Financing & Bank Loans",
    question: "Can I get a bank loan for a DDJAY plot in Gurgaon?",
    answer:
      "Yes, most major banks and housing finance companies offer plot loans for DDJAY properties in Gurgaon, since these projects are HARERA-registered and carry clear title documentation. Loan-to-value ratio and eligibility depend on the bank's internal policy and the applicant's credit profile."
  },
  {
    id: 22,
    category: "loans",
    categoryLabel: "Financing & Bank Loans",
    question: "What percentage of the plot value can I get as a bank loan?",
    answer:
      "Banks generally finance up to 70-80% of the plot's value for eligible applicants, though this varies based on the lender, the applicant's income profile, and the specific project's approval status with that bank. We recommend confirming the exact figure with your chosen bank during pre-approval."
  },
  {
    id: 23,
    category: "loans",
    categoryLabel: "Financing & Bank Loans",
    question: "What documents are required for a plot loan in Haryana?",
    answer:
      "Typical requirements include income proof (salary slips or ITRs), bank statements, KYC documents, the builder-buyer agreement, and the project's HARERA and title documents. Our team assists in coordinating with banking partners to streamline document submission."
  },
  {
    id: 24,
    category: "loans",
    categoryLabel: "Financing & Bank Loans",
    question: "Do you help with bank loan pre-approval for plots?",
    answer:
      "Yes, we coordinate with our banking partners to guide buyers through loan evaluation, documentation processing, and pre-approval, so financing does not delay your booking or registry timeline."
  },

  // ── Category: Company & Service ──
  {
    id: 25,
    category: "company",
    categoryLabel: "Company & Service",
    question: "Is investing in a DDJAY plot in Gurgaon a good option?",
    answer:
      "Gurugram benefits from proximity to IGI Airport, expanding expressway infrastructure, and a concentration of corporate offices, which together support consistent demand for both residential and plotted developments. DDJAY plots specifically offer HARERA-backed documentation and bank loan eligibility, which many buyers find reassuring for long-term ownership. Historical trends suggest steady appreciation in well-located sectors, though actual returns depend on market conditions and should not be treated as guaranteed."
  },
  {
    id: 26,
    category: "company",
    categoryLabel: "Company & Service",
    question: "Do you charge a fee for property consultation?",
    answer:
      "Initial consultation and property shortlisting with our team is free of charge for buyers. Any applicable service or advisory fees, where relevant, are disclosed transparently before any engagement."
  },
  {
    id: 27,
    category: "company",
    categoryLabel: "Company & Service",
    question: "How does Dee Divine PropInfra verify its property listings?",
    answer:
      "Every listing goes through a due diligence process covering HARERA registration, developer track record, land title status, and municipal approvals before it is added to our portfolio."
  },
  {
    id: 28,
    category: "company",
    categoryLabel: "Company & Service",
    question: "Do you also assist with renting properties in Delhi NCR?",
    answer:
      "Yes, in addition to plotted developments and residential sales, we assist buyers and tenants with verified rental listings across Delhi, Noida, and Gurgaon, including 2BHK, 3BHK, and luxury apartment options."
  },
  {
    id: 29,
    category: "company",
    categoryLabel: "Company & Service",
    question: "How can I contact the Dee Divine PropInfra team directly?",
    answer:
      "You can reach us at +91-9211496111 or via our Contact page. Our office is located at M3M Broadway, 22nd Floor, D Block, Sector 71, SPR Road, Gurgaon, and our team is available Monday to Saturday, 10:00 AM to 7:00 PM."
  },
];

export default function FaqContent() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqId, setOpenFaqId] = useState(1); // Open 1st question by default

  const toggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  // Filter FAQs based on active category and search query
  const filteredFaqs = faqsData.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full pb-20">
      
      {/* ── HERO BANNER SECTION ── */}
      <section className="bg-[#0c0d12] text-white py-20 px-6 md:px-16 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-red-500" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-red-400 font-extrabold">
              Got Questions? We Have Answers.
            </span>
            <div className="w-6 h-[2px] bg-red-500" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-6">
            Frequently Asked <span className="text-red-500">Questions</span>
          </h1>

          <p className="text-neutral-300 text-sm md:text-base font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            Find reliable answers to all your queries regarding DDJAY plots, HARERA legal approvals, plot loans, booking procedures, and real estate investment in Gurgaon.
          </p>

          {/* Search Box Input */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword (e.g. DDJAY, HARERA, Loan, Registry)..."
              className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-neutral-400 text-xs md:text-sm focus:outline-none focus:border-red-500 transition-colors shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 pt-12">
        
        {/* Category Tabs Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar justify-start md:justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-[#0c0d12] text-white shadow-md border border-[#0c0d12]"
                  : "bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-400 hover:text-[#0c0d12]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* FAQ Count Badge */}
        <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-8">
          <div className="flex items-center gap-2">
            <HelpCircle className="text-red-500" size={18} />
            <span className="text-xs font-black uppercase tracking-wider text-[#0c0d12]">
              Showing {filteredFaqs.length} FAQs
            </span>
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs font-bold text-red-500 hover:underline"
            >
              Clear Search
            </button>
          )}
        </div>

        {/* ── ACCORDION FAQS LIST ── */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "border-red-500/60 shadow-md"
                      : "border-neutral-200 hover:border-neutral-300 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-neutral-50/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-black text-red-500 bg-red-50 px-2 py-0.5 rounded border border-red-100 mt-0.5 flex-shrink-0">
                        Q{faq.id}
                      </span>
                      <h3 className="text-sm md:text-base font-black text-[#0c0d12] tracking-wide leading-snug">
                        {faq.question}
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

                  {/* Expandable Answer Body */}
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-xs md:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 bg-neutral-50/30">
                      <p>{faq.answer}</p>
                      <div className="mt-4 pt-3 border-t border-neutral-200/60 flex items-center justify-between">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400">
                          Category: {faq.categoryLabel}
                        </span>
                        <Link
                          href="/contact"
                          className="text-[11px] font-bold text-red-500 hover:underline flex items-center gap-1"
                        >
                          Need more clarification? Contact us <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white border border-neutral-200 rounded-2xl p-12 text-center my-8">
            <HelpCircle className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
            <h3 className="text-lg font-black uppercase text-[#0c0d12] mb-2">No matching questions found</h3>
            <p className="text-xs text-neutral-500 max-w-md mx-auto mb-6">
              We couldn&apos;t find any questions matching &quot;{searchQuery}&quot;. Please try a different search term or contact our expert team directly.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="px-6 py-2.5 bg-[#0c0d12] text-white text-xs font-bold uppercase rounded-full tracking-wider hover:bg-neutral-800 transition"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ── CONTACT HELP DESK CARD ── */}
        <div className="mt-16 bg-[#0c0d12] text-white rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-8 flex flex-col space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-red-500" size={20} />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-red-400">
                  Still Have Unanswered Questions?
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                Talk Directly with Our Real Estate Advisors
              </h3>

              <p className="text-neutral-300 text-xs md:text-sm leading-relaxed max-w-xl">
                Our Gurgaon property experts are available to guide you through HARERA title checks, site visit scheduling, loan pre-approvals, and current per-sq.-yard rates across prime sectors.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col space-y-4 justify-center">
              <a
                href="tel:+919211496111"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-black text-xs uppercase tracking-[0.2em] py-4 rounded-xl shadow-lg flex items-center justify-center gap-3 transition-transform active:scale-95"
              >
                <Phone size={16} /> Call +91 9211496111
              </a>

              <Link
                href="/contact"
                className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl text-center transition"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
