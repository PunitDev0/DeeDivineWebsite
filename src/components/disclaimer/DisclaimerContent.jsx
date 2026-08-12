"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  Info,
  Building2,
  Tag,
  TrendingUp,
  AlertTriangle,
  FileCheck,
  Globe,
  ExternalLink,
  ImageIcon,
  MapPin,
  HelpCircle,
  CheckCircle2,
  Scale,
  UserCheck,
  RefreshCw,
  Mail,
  Search,
  ChevronRight,
  ShieldCheck,
  FileText
} from "lucide-react";

export default function DisclaimerContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: "general-information",
      number: "01",
      title: "1. General Information",
      icon: <Info className="w-5 h-5 text-red-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            Dee Divine Propinfra makes reasonable efforts to keep the information available on this website accurate, useful, and up to date. However, property information, project specifications, prices, availability, payment plans, possession timelines, amenities, specifications, and other details may change without prior notice.
          </p>
          <p>
            Information displayed on this website should not be considered a guarantee or final representation unless officially confirmed by the concerned developer, authority, or authorized representative.
          </p>
        </div>
      ),
    },
    {
      id: "property-information",
      number: "02",
      title: "2. Property Information",
      icon: <Building2 className="w-5 h-5 text-red-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            Property-related information published on this website may include details such as:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-3">
            {[
              "Project name and location",
              "Property configuration",
              "Plot, floor, apartment, villa, or commercial unit details",
              "Area and specifications",
              "Price ranges",
              "Payment plans",
              "Possession timelines",
              "Amenities and facilities",
              "Developer information",
              "RERA-related information",
              "Project approvals and registration details",
              "Connectivity and location information",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-2 bg-neutral-50 p-2.5 rounded-lg border border-neutral-100"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                <span className="text-xs font-medium text-neutral-700">{item}</span>
              </div>
            ))}
          </div>
          <p>
            Such information may be collected from developers, authorized sources, public records, project materials, or other third-party sources.
          </p>
          <p className="bg-amber-50 border-l-4 border-amber-500 p-3.5 rounded-r-lg text-amber-900 text-xs font-medium">
            While Dee Divine Propinfra aims to maintain accurate information, users should independently verify important property details before making any purchase, booking, investment, or financial decision.
          </p>
        </div>
      ),
    },
    {
      id: "prices-and-availability",
      number: "03",
      title: "3. Prices and Availability",
      icon: <Tag className="w-5 h-5 text-red-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            Property prices, inventory, offers, discounts, payment schedules, and availability are subject to change.
          </p>
          <p>
            Any price displayed on this website should be treated as indicative unless specifically confirmed by the concerned developer or authorized sales representative.
          </p>
          <p>
            The actual cost of a property may also include applicable charges such as:
          </p>
          <div className="flex flex-wrap gap-2 py-1">
            {[
              "Taxes",
              "Registration charges",
              "Stamp duty",
              "Maintenance charges",
              "Development charges",
              "Parking charges",
              "Club charges",
              "Brokerage",
              "Other applicable fees",
            ].map((charge, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full font-semibold border border-neutral-200"
              >
                {charge}
              </span>
            ))}
          </div>
          <p className="text-xs font-semibold text-neutral-800 pt-1">
            Users are advised to obtain a complete and updated cost sheet before proceeding with a transaction.
          </p>
        </div>
      ),
    },
    {
      id: "investment-disclaimer",
      number: "04",
      title: "4. Investment Disclaimer",
      icon: <TrendingUp className="w-5 h-5 text-red-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            Information published on this website should not be interpreted as financial, investment, legal, tax, or professional advice.
          </p>
          <div className="bg-red-50/70 border border-red-100 rounded-xl p-4 my-2">
            <h4 className="text-xs font-bold text-red-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-red-600" /> Real Estate Investment Risk Factors:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-neutral-700">
              {[
                "Market fluctuations",
                "Changes in property values",
                "Changes in government policies",
                "Regulatory changes",
                "Construction or possession delays",
                "Changes in project specifications",
                "Liquidity limitations",
                "Financing and interest-rate risks",
                "Developer-related risks",
                "Location and market-development risks",
              ].map((risk, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>{risk}</span>
                </div>
              ))}
            </div>
          </div>
          <p>
            Past property performance or market trends do not guarantee future returns.
          </p>
          <p>
            Users should conduct their own due diligence and, where appropriate, seek independent advice from qualified financial, legal, tax, or real estate professionals before making an investment decision.
          </p>
        </div>
      ),
    },
    {
      id: "no-guarantee-of-returns",
      number: "05",
      title: "5. No Guarantee of Returns",
      icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>Dee Divine Propinfra does not guarantee or promise any specific:</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              "Capital appreciation",
              "Rental income",
              "Return on investment",
              "Resale value",
              "Future property price",
              "Rental yield",
              "Investment profit",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-neutral-900 text-white p-3 rounded-lg text-center text-xs font-medium border border-neutral-800 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
          <p>
            Any reference to investment potential, growth prospects, appreciation, rental demand, or market outlook is provided for informational purposes only and should not be considered a guaranteed outcome.
          </p>
        </div>
      ),
    },
    {
      id: "rera-and-regulatory",
      number: "06",
      title: "6. RERA and Regulatory Information",
      icon: <FileCheck className="w-5 h-5 text-red-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            Where applicable, project information may include RERA registration details or references to other regulatory approvals.
          </p>
          <p>
            Users should independently verify the latest registration status, approvals, sanctioned plans, project details, and other regulatory information through the relevant official authority before entering into a transaction.
          </p>
          <p className="bg-blue-50 border-l-4 border-blue-500 p-3.5 rounded-r-lg text-blue-900 text-xs font-medium">
            The presence of a RERA registration number or approval reference on this website should not be interpreted as a guarantee of the property's investment performance or future returns.
          </p>
        </div>
      ),
    },
    {
      id: "third-party-information",
      number: "07",
      title: "7. Third-Party Information",
      icon: <Globe className="w-5 h-5 text-red-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            This website may contain information, references, links, images, project materials, maps, statistics, or other content obtained from third-party sources.
          </p>
          <p>
            Dee Divine Propinfra does not guarantee the accuracy, completeness, reliability, or continued availability of third-party information.
          </p>
          <p>
            Where third-party information is used, users should verify such information with the original source or relevant authority.
          </p>
        </div>
      ),
    },
    {
      id: "external-links",
      number: "08",
      title: "8. External Links",
      icon: <ExternalLink className="w-5 h-5 text-red-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            This website may contain links to third-party websites for additional information or convenience.
          </p>
          <p>
            Dee Divine Propinfra does not control these external websites and is not responsible for their:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              "Content",
              "Accuracy",
              "Privacy practices",
              "Availability",
              "Security",
              "Products or services",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-neutral-100 text-neutral-800 px-3 py-2 rounded-lg text-xs font-semibold text-center border border-neutral-200"
              >
                {item}
              </div>
            ))}
          </div>
          <p className="text-xs font-medium text-neutral-800">
            Visiting an external website is at the user's own discretion and risk.
          </p>
        </div>
      ),
    },
    {
      id: "images-floor-plans",
      number: "09",
      title: "9. Images, Floor Plans and Project Materials",
      icon: <ImageIcon className="w-5 h-5 text-red-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            Images, photographs, illustrations, floor plans, site plans, renders, maps, and other visual materials displayed on this website may be used for informational or illustrative purposes.
          </p>
          <p>
            Actual property specifications, dimensions, finishes, landscaping, amenities, interiors, and surrounding development may differ from images or artistic representations.
          </p>
          <p className="font-semibold text-neutral-800">
            Users should refer to official project documentation and approved plans before making a purchase decision.
          </p>
        </div>
      ),
    },
    {
      id: "location-and-connectivity",
      number: "10",
      title: "10. Location and Connectivity Information",
      icon: <MapPin className="w-5 h-5 text-red-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            Location maps, travel distances, connectivity information, nearby landmarks, infrastructure references, and estimated travel times are provided for general informational purposes.
          </p>
          <p>
            Actual distances and travel times may vary depending on the route, traffic, infrastructure changes, and other factors.
          </p>
          <p>
            Infrastructure projects and proposed developments may also be subject to changes, delays, approvals, or cancellation.
          </p>
        </div>
      ),
    },
    {
      id: "no-professional-advice",
      number: "11",
      title: "11. No Professional Advice",
      icon: <HelpCircle className="w-5 h-5 text-red-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>Nothing published on this website constitutes:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              "Financial advice",
              "Investment advice",
              "Legal advice",
              "Tax advice",
              "Architectural advice",
              "Valuation advice",
              "Loan or financing advice",
            ].map((advice, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-red-50/50 text-red-950 px-3 py-2 rounded-lg text-xs font-semibold border border-red-100"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span>{advice}</span>
              </div>
            ))}
          </div>
          <p>
            Users should obtain professional advice where required for their individual circumstances.
          </p>
        </div>
      ),
    },
    {
      id: "website-accuracy",
      number: "12",
      title: "12. Website Accuracy",
      icon: <CheckCircle2 className="w-5 h-5 text-red-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            Despite reasonable efforts to maintain accurate information, Dee Divine Propinfra does not warrant that the website will always be:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              "Complete",
              "Accurate",
              "Current",
              "Error-free",
              "Uninterrupted",
              "Free from technical issues",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-neutral-50 text-neutral-700 px-3 py-2 rounded-lg text-xs font-medium text-center border border-neutral-200"
              >
                {item}
              </div>
            ))}
          </div>
          <p>
            Information may be corrected, updated, modified, or removed at any time without prior notice.
          </p>
        </div>
      ),
    },
    {
      id: "limitation-of-liability",
      number: "13",
      title: "13. Limitation of Liability",
      icon: <Scale className="w-5 h-5 text-red-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            To the maximum extent permitted under applicable law, Dee Divine Propinfra shall not be liable for any direct, indirect, incidental, consequential, or other loss arising from reliance on information published on this website.
          </p>
          <p>
            This includes losses or claims related to property prices, investment decisions, project delays, changes in inventory, inaccurate third-party information, market conditions, website interruptions, or other circumstances beyond the company's reasonable control.
          </p>
          <p className="font-semibold text-neutral-800">
            Nothing in this Disclaimer is intended to exclude or limit any liability that cannot legally be excluded or limited under applicable law.
          </p>
        </div>
      ),
    },
    {
      id: "user-responsibility",
      number: "14",
      title: "14. User Responsibility",
      icon: <UserCheck className="w-5 h-5 text-red-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            Users are responsible for conducting appropriate due diligence before making any property-related decision.
          </p>
          <p>
            Before booking, purchasing, investing in, or otherwise transacting in relation to a property, users should verify:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-2">
            {[
              "Project approvals",
              "RERA registration",
              "Developer credentials",
              "Property title and documentation",
              "Current pricing",
              "Availability",
              "Payment terms",
              "Possession schedule",
              "Applicable taxes and charges",
              "Agreement terms",
              "Other relevant legal and financial information",
            ].map((check, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 bg-emerald-50/60 p-2.5 rounded-lg border border-emerald-100 text-xs font-medium text-emerald-950"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{check}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "changes-to-disclaimer",
      number: "15",
      title: "15. Changes to This Disclaimer",
      icon: <RefreshCw className="w-5 h-5 text-red-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            Dee Divine Propinfra may update or modify this Disclaimer from time to time to reflect changes in the website, services, business practices, or applicable requirements.
          </p>
          <p>
            Any updated version will be published on this page with a revised "Last Updated" date.
          </p>
        </div>
      ),
    },
    {
      id: "contact-us",
      number: "16",
      title: "16. Contact Us",
      icon: <Mail className="w-5 h-5 text-red-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            If you have questions regarding this Disclaimer or any information published on this website, please contact Dee Divine Propinfra through the contact details provided on the website.
          </p>
          <div className="bg-neutral-900 text-white p-5 rounded-xl border border-neutral-800 space-y-2 text-xs">
            <div className="font-bold text-sm text-red-500">Dee Divine Propinfra</div>
            <div>
              <span className="text-neutral-400">Official Website: </span>
              <a
                href="https://deedivinepropinfra.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-red-400 font-semibold underline ml-1"
              >
                deedivinepropinfra.com
              </a>
            </div>
            <div>
              <span className="text-neutral-400">Contact Page: </span>
              <Link href="/contact" className="text-white hover:text-red-400 font-semibold underline ml-1">
                Visit Contact Us Page
              </Link>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const filteredSections = sections.filter(
    (sec) =>
      sec.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sec.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    <section className="bg-[#fcfcfc] min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* HERO BANNER & HEADER */}
        <div className="bg-[#0c0d12] text-white rounded-3xl p-8 sm:p-12 md:p-16 mb-12 relative overflow-hidden shadow-xl border border-black/10">
          {/* Subtle Background Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-extrabold uppercase tracking-[0.25em] mb-6 backdrop-blur-md border border-white/10">
              <ShieldAlert className="w-3.5 h-3.5 text-red-500" />
              <span>Legal & Regulatory Statement</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
              Disclaimer
            </h1>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 text-neutral-300 text-sm leading-relaxed mb-6">
              <p className="font-medium">
                Welcome to <strong className="text-white font-bold">Dee Divine Propinfra</strong>. The information published on this website is provided for general informational and property-related purposes. By accessing or using this website, you acknowledge and agree to the terms of this Disclaimer.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400">
              <div className="flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-red-500" />
                <span>Document: Website Disclaimer</span>
              </div>
              <span className="text-neutral-700">•</span>
              <div className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-red-500" />
                <span>deedivinepropinfra.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* SEARCH & QUICK NAVIGATION BAR */}
        <div className="sticky top-24 z-40 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-neutral-200/80 shadow-sm mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Box */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Search disclaimer sections..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-red-500 focus:bg-white transition"
              />
            </div>

            {/* Quick jump pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider whitespace-nowrap mr-1">
                Jump to:
              </span>
              {[
                { label: "General", id: "general-information" },
                { label: "Property Info", id: "property-information" },
                { label: "Prices", id: "prices-and-availability" },
                { label: "Investment", id: "investment-disclaimer" },
                { label: "RERA", id: "rera-and-regulatory" },
                { label: "Liability", id: "limitation-of-liability" },
                { label: "Contact", id: "contact-us" },
              ].map((pill) => (
                <button
                  key={pill.id}
                  onClick={() => scrollToSection(pill.id)}
                  className="px-3 py-1 bg-neutral-100 hover:bg-neutral-900 hover:text-white transition rounded-full text-[11px] font-semibold text-neutral-600 whitespace-nowrap"
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN CONTENT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT SIDEBAR: INDEX / TOC */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-44 bg-white p-5 rounded-2xl border border-neutral-200 shadow-sm space-y-2">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-neutral-400 mb-3 px-2 flex items-center justify-between">
                <span>Table of Contents</span>
                <span className="text-[10px] bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-full font-bold">
                  {filteredSections.length}
                </span>
              </h3>

              <div className="space-y-1 max-h-[60vh] overflow-y-auto pr-1 text-xs">
                {filteredSections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl transition flex items-center justify-between group ${
                      activeSection === sec.id
                        ? "bg-neutral-900 text-white font-bold"
                        : "hover:bg-neutral-100 text-neutral-600 font-medium"
                    }`}
                  >
                    <span className="truncate pr-2">{sec.title}</span>
                    <ChevronRight
                      className={`w-3.5 h-3.5 flex-shrink-0 transition-transform ${
                        activeSection === sec.id
                          ? "text-red-500 translate-x-0.5"
                          : "text-neutral-300 group-hover:text-neutral-500"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT: SECTIONS LIST */}
          <div className="col-span-1 lg:col-span-8 space-y-6">
            {filteredSections.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-neutral-200">
                <HelpCircle className="w-10 h-10 text-neutral-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-neutral-700">No sections found</h3>
                <p className="text-xs text-neutral-500 mt-1">Try adjusting your search keywords.</p>
              </div>
            ) : (
              filteredSections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow duration-300 scroll-mt-36"
                >
                  <div className="flex items-start gap-4 mb-4 pb-4 border-b border-neutral-100">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                      {section.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">
                        Section {section.number}
                      </span>
                      <h2 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  <div>{section.content}</div>
                </div>
              ))
            )}

            {/* BOTTOM ACKNOWLEDGEMENT CARD */}
            <div className="bg-neutral-900 text-white rounded-2xl p-6 sm:p-8 border border-neutral-800 mt-10 shadow-lg">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div className="space-y-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  <h3 className="font-bold text-white uppercase tracking-wider text-sm">
                    User Acknowledgment
                  </h3>
                  <p>
                    By continuing to use this website, you acknowledge that you have read and understood this Disclaimer and agree to use the information provided on the website at your own discretion.
                  </p>
                </div>
              </div>
            </div>

            {/* IMPORTANT LEGAL NOTICE BOX */}
            <div className="bg-amber-500/10 border-2 border-dashed border-amber-500/40 rounded-2xl p-6 text-amber-900 text-xs leading-relaxed space-y-2">
              <div className="flex items-center gap-2 font-black uppercase tracking-wider text-amber-800">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Important Legal Notice</span>
              </div>
              <p className="font-medium text-amber-950">
                Important: This Disclaimer is intended as general website information and should be reviewed by a qualified legal professional before publication to ensure it matches the company's actual business structure, services, and applicable laws.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
