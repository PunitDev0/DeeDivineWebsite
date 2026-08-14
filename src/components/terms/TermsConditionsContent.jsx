"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Scale,
  FileText,
  Building2,
  Tag,
  HelpCircle,
  Briefcase,
  TrendingUp,
  FileCheck,
  Globe,
  ExternalLink,
  ImageIcon,
  Copyright,
  ShieldAlert,
  UserX,
  Server,
  AlertTriangle,
  RefreshCw,
  Gavel,
  Mail,
  Search,
  ChevronRight,
  CheckCircle2,
  XCircle,
  ShieldCheck
} from "lucide-react";

export default function TermsConditionsContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: "about-these-terms",
      number: "01",
      title: "1. About These Terms",
      icon: <FileText className="w-5 h-5 text-blue-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            These Terms & Conditions establish the rules for using the Dee Divine Propinfra website and explain the responsibilities of users when accessing property information or requesting real estate services.
          </p>
          <p className="bg-blue-50/70 border-l-4 border-blue-500 p-3.5 rounded-r-lg text-blue-950 text-xs font-medium">
            These terms should be read together with our <Link href="/privacy-policy" className="underline font-bold hover:text-blue-700">Privacy Policy</Link> and <Link href="/disclaimer" className="underline font-bold hover:text-blue-700">Disclaimer</Link>.
          </p>
        </div>
      ),
    },
    {
      id: "website-use",
      number: "02",
      title: "2. Website Use",
      icon: <Globe className="w-5 h-5 text-blue-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>You may use this website for lawful purposes, including:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-2">
            {[
              "Researching properties and real estate projects",
              "Reviewing property-related information",
              "Making legitimate property enquiries",
              "Requesting information about available services",
              "Contacting Dee Divine Propinfra regarding a property requirement",
            ].map((purpose, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-neutral-50 p-2.5 rounded-lg border border-neutral-100 text-xs font-medium text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>{purpose}</span>
              </div>
            ))}
          </div>
          <p className="font-semibold text-neutral-800 text-xs">
            You must not use the website for any unlawful, fraudulent, abusive, or unauthorized purpose.
          </p>
        </div>
      ),
    },
    {
      id: "property-information",
      number: "03",
      title: "3. Property Information",
      icon: <Building2 className="w-5 h-5 text-blue-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            The website may provide information about residential properties, commercial properties, plots, projects, locations, developers, amenities, prices, payment plans, possession timelines, and other real estate opportunities.
          </p>
          <p>
            While Dee Divine Propinfra makes reasonable efforts to maintain accurate information, property details may change without prior notice.
          </p>
          <p className="bg-amber-50 border-l-4 border-amber-500 p-3.5 rounded-r-lg text-amber-950 text-xs font-medium">
            Users should independently verify important information before making a booking, purchase, investment, or other property-related decision.
          </p>
        </div>
      ),
    },
    {
      id: "property-prices-and-availability",
      number: "04",
      title: "4. Property Prices and Availability",
      icon: <Tag className="w-5 h-5 text-blue-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            Prices, inventory, offers, payment plans, specifications, unit availability, possession schedules, and other project details are subject to change.
          </p>
          <p>
            Any price displayed on the website should be considered indicative unless officially confirmed by the relevant developer or authorized representative.
          </p>
          <p className="text-xs font-semibold text-neutral-800 uppercase tracking-wider">
            The final property cost may include additional charges such as:
          </p>
          <div className="flex flex-wrap gap-2 py-1">
            {[
              "Stamp duty",
              "Registration charges",
              "Applicable taxes",
              "Maintenance charges",
              "Parking charges",
              "Club or facility charges",
              "Development charges",
              "Other applicable fees",
            ].map((charge, idx) => (
              <span key={idx} className="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full font-semibold border border-neutral-200">
                {charge}
              </span>
            ))}
          </div>
          <p className="text-xs font-medium text-neutral-800">
            Users should obtain and review the latest cost sheet and transaction terms before proceeding.
          </p>
        </div>
      ),
    },
    {
      id: "property-enquiries",
      number: "05",
      title: "5. Property Enquiries",
      icon: <HelpCircle className="w-5 h-5 text-blue-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p className="font-semibold text-neutral-800 text-xs uppercase tracking-wider">
            Submitting a property enquiry does not constitute:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              "A property booking",
              "A purchase agreement",
              "A sale agreement",
              "A financial commitment",
              "A guarantee of availability",
              "A guarantee of price",
            ].map((nonConst, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-red-50/60 text-red-950 p-2.5 rounded-lg border border-red-100 text-xs font-medium">
                <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>{nonConst}</span>
              </div>
            ))}
          </div>
          <p>
            An enquiry simply allows Dee Divine Propinfra or an appropriate representative to understand your requirements and respond with relevant information.
          </p>
          <p>
            Any property transaction will be subject to separate documentation and agreements between the relevant parties.
          </p>
        </div>
      ),
    },
    {
      id: "real-estate-services",
      number: "06",
      title: "6. Real Estate Services",
      icon: <Briefcase className="w-5 h-5 text-blue-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>Dee Divine Propinfra may provide or facilitate property-related services such as:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Property consultation",
              "Project information",
              "Property discovery",
              "Residential property assistance",
              "Commercial property assistance",
              "Plot-related assistance",
              "Investment-oriented property information",
              "Property enquiry support",
            ].map((service, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-neutral-50 p-2.5 rounded-lg border border-neutral-100 text-xs font-medium text-neutral-700">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>{service}</span>
              </div>
            ))}
          </div>
          <p>
            The exact scope of services may vary depending on the property, developer, location, and individual enquiry.
          </p>
          <p className="text-xs text-neutral-500 italic">
            Submission of an enquiry does not guarantee that a particular property or service will be available.
          </p>
        </div>
      ),
    },
    {
      id: "no-guarantee-of-returns",
      number: "07",
      title: "7. No Guarantee of Investment Returns",
      icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            Information relating to property investment, appreciation, rental potential, market trends, or future growth is provided for general informational purposes.
          </p>
          <p className="font-semibold text-neutral-800 text-xs uppercase tracking-wider">
            Dee Divine Propinfra does not guarantee:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              "Capital appreciation",
              "Rental returns",
              "Investment profits",
              "Future property prices",
              "Resale value",
              "Rental demand",
              "Guaranteed returns",
            ].map((item, idx) => (
              <div key={idx} className="bg-neutral-900 text-white p-2.5 rounded-lg text-center text-xs font-medium border border-neutral-800">
                {item}
              </div>
            ))}
          </div>
          <p className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r-lg text-amber-950 text-xs font-medium">
            Real estate investments involve financial and market risks. Users should conduct independent due diligence and seek professional advice where appropriate.
          </p>
        </div>
      ),
    },
    {
      id: "rera-and-project-approvals",
      number: "08",
      title: "8. RERA and Project Approvals",
      icon: <FileCheck className="w-5 h-5 text-blue-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            Where applicable, the website may display RERA registration numbers or references to project approvals.
          </p>
          <p>
            Users should verify the latest project registration, approvals, sanctioned plans, developer information, and other regulatory details through the relevant official authority before entering into a transaction.
          </p>
          <p className="text-xs text-neutral-500 font-medium">
            The inclusion of regulatory information on this website does not constitute a guarantee regarding investment performance, completion, appreciation, or future returns.
          </p>
        </div>
      ),
    },
    {
      id: "third-party-information",
      number: "09",
      title: "9. Third-Party Information",
      icon: <Globe className="w-5 h-5 text-blue-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            Some information published on the website may originate from developers, builders, authorized representatives, public sources, third-party service providers, or other external sources.
          </p>
          <p>
            Dee Divine Propinfra attempts to present such information responsibly but does not guarantee that all third-party information will remain accurate, complete, or current.
          </p>
          <p className="font-semibold text-neutral-800 text-xs">
            Users should verify material information with the relevant original source before relying on it.
          </p>
        </div>
      ),
    },
    {
      id: "external-websites-and-links",
      number: "10",
      title: "10. External Websites and Links",
      icon: <ExternalLink className="w-5 h-5 text-blue-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            The website may contain links to third-party websites, platforms, maps, portals, or other online resources for convenience or additional information.
          </p>
          <p>
            Dee Divine Propinfra does not control third-party websites and is not responsible for their content, accuracy, availability, security, privacy practices, or products/services.
          </p>
          <p className="text-xs font-semibold text-neutral-800">
            Accessing external websites is at the user's own discretion.
          </p>
        </div>
      ),
    },
    {
      id: "images-and-visual-content",
      number: "11",
      title: "11. Images and Visual Content",
      icon: <ImageIcon className="w-5 h-5 text-blue-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            Property images, photographs, illustrations, renders, floor plans, site plans, maps, and other visual content may be provided for informational or illustrative purposes.
          </p>
          <p>
            Actual property specifications, finishes, layouts, landscaping, amenities, and surroundings may differ.
          </p>
          <p className="font-semibold text-neutral-800 text-xs">
            Users should rely on official project documentation, approved plans, and contractual documents when making a final property decision.
          </p>
        </div>
      ),
    },
    {
      id: "intellectual-property",
      number: "12",
      title: "12. Intellectual Property",
      icon: <Copyright className="w-5 h-5 text-blue-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            Unless otherwise stated, content published on this website (text, logos, branding, graphics, images, page layouts, website design, original content, videos) may be owned by or licensed to Dee Divine Propinfra.
          </p>
          <p>
            You may view and use website content for personal, non-commercial informational purposes.
          </p>
          <p className="bg-red-50 border-l-4 border-red-500 p-3.5 rounded-r-lg text-red-950 text-xs font-medium">
            You must not reproduce, copy, modify, distribute, republish, sell, or commercially exploit website content without prior written permission, except where permitted by applicable law.
          </p>
        </div>
      ),
    },
    {
      id: "prohibited-activities",
      number: "13",
      title: "13. Prohibited Activities",
      icon: <ShieldAlert className="w-5 h-5 text-blue-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p className="font-semibold text-neutral-800 text-xs uppercase tracking-wider">
            Users must not use this website to:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Conduct fraudulent activities",
              "Submit false property enquiries",
              "Impersonate another person",
              "Attempt unauthorized access",
              "Introduce malware or harmful code",
              "Interfere with website functionality",
              "Scrape or systematically copy website content",
              "Misuse contact forms",
              "Collect info about other users without permission",
              "Use content for unlawful commercial purposes",
            ].map((prohibited, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-red-50/50 text-red-950 p-2 rounded-lg border border-red-100 text-xs font-medium">
                <XCircle className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                <span>{prohibited}</span>
              </div>
            ))}
          </div>
          <p className="text-xs font-semibold text-neutral-800 pt-1">
            Dee Divine Propinfra reserves the right to restrict or terminate access where misuse is identified.
          </p>
        </div>
      ),
    },
    {
      id: "user-provided-information",
      number: "14",
      title: "14. User-Provided Information",
      icon: <UserX className="w-5 h-5 text-blue-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            When submitting an enquiry, you agree to provide information that is reasonably accurate and not intentionally misleading.
          </p>
          <p className="font-semibold text-neutral-800 text-xs">You should not submit:</p>
          <div className="space-y-2">
            {[
              "False identity information",
              "Fraudulent property requirements",
              "Another person's personal information without authorization",
              "Passwords or sensitive financial information through general enquiry forms",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-neutral-50 p-2.5 rounded-lg border border-neutral-100 text-xs font-medium text-neutral-700">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs font-medium text-neutral-800">
            You remain responsible for information voluntarily submitted through the website.
          </p>
        </div>
      ),
    },
    {
      id: "website-availability",
      number: "15",
      title: "15. Website Availability",
      icon: <Server className="w-5 h-5 text-blue-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            We aim to keep the website accessible and functional, but we do not guarantee that the website will always be:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              "Available",
              "Uninterrupted",
              "Error-free",
              "Secure from every threat",
              "Free from technical problems",
            ].map((status, idx) => (
              <div key={idx} className="bg-neutral-100 text-neutral-800 p-2 rounded-lg text-center text-xs font-medium border border-neutral-200">
                {status}
              </div>
            ))}
          </div>
          <p>
            Website access may occasionally be interrupted because of maintenance, hosting issues, technical failures, security measures, or circumstances beyond our reasonable control.
          </p>
        </div>
      ),
    },
    {
      id: "limitation-of-liability",
      number: "16",
      title: "16. Limitation of Liability",
      icon: <Scale className="w-5 h-5 text-blue-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            To the maximum extent permitted by applicable law, Dee Divine Propinfra shall not be responsible for losses arising from reliance on website information, property listings, third-party information, market conditions, changes in property availability, pricing changes, project delays, or other circumstances beyond the company's reasonable control.
          </p>
          <p className="font-semibold text-neutral-800 text-xs">
            This limitation does not apply to any liability that cannot legally be excluded or limited under applicable law.
          </p>
        </div>
      ),
    },
    {
      id: "no-professional-advice",
      number: "17",
      title: "17. No Professional Advice",
      icon: <AlertTriangle className="w-5 h-5 text-blue-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            Information provided through this website does not constitute legal, tax, financial, investment, valuation, architectural, or other professional advice.
          </p>
          <p className="font-semibold text-neutral-800 text-xs">
            Users should consult an appropriately qualified professional before making decisions where professional advice is necessary.
          </p>
        </div>
      ),
    },
    {
      id: "changes-to-website-content",
      number: "18",
      title: "18. Changes to Website Content",
      icon: <RefreshCw className="w-5 h-5 text-blue-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            Dee Divine Propinfra may modify, update, remove, or replace website content, property listings, services, prices, project details, or other information at any time without prior notice.
          </p>
          <p>
            We are not obligated to maintain previously published information indefinitely.
          </p>
        </div>
      ),
    },
    {
      id: "changes-to-these-terms",
      number: "19",
      title: "19. Changes to These Terms",
      icon: <RefreshCw className="w-5 h-5 text-blue-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            These Terms & Conditions may be updated from time to time to reflect changes in our website, services, business practices, or applicable requirements.
          </p>
          <p>
            Updated terms will be published on this page with a revised "Last Updated" date.
          </p>
          <p className="font-semibold text-neutral-800 text-xs">
            Your continued use of the website after an update constitutes your acceptance of the revised terms, to the extent permitted by applicable law.
          </p>
        </div>
      ),
    },
    {
      id: "governing-law",
      number: "20",
      title: "20. Governing Law",
      icon: <Gavel className="w-5 h-5 text-blue-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <div className="bg-neutral-900 text-white p-4 rounded-xl border border-neutral-800 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Jurisdiction & Legal Framework
            </h4>
            <p className="text-xs text-neutral-300">
              These Terms & Conditions shall be interpreted in accordance with the applicable laws of India.
            </p>
            <p className="text-xs text-neutral-300">
              Any dispute arising in connection with the use of this website or services shall be subject to the jurisdiction of the appropriate courts, subject to applicable law and the specific contractual terms governing any property transaction.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "contact-us",
      number: "21",
      title: "21. Contact Us",
      icon: <Mail className="w-5 h-5 text-blue-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            If you have questions regarding these Terms & Conditions, website usage, or our property-related services, you can contact Dee Divine Propinfra through the contact details provided on the website.
          </p>
          <div className="bg-neutral-900 text-white p-5 rounded-xl border border-neutral-800 space-y-2 text-xs">
            <div className="font-bold text-sm text-blue-400">Dee Divine Propinfra</div>
            <div>
              <span className="text-neutral-400">Official Website: </span>
              <a
                href="https://deedivinepropinfra.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-blue-400 font-semibold underline ml-1"
              >
                deedivinepropinfra.com
              </a>
            </div>
            <div>
              <span className="text-neutral-400">Contact Us: </span>
              <Link href="/contact" className="text-white hover:text-blue-400 font-semibold underline ml-1">
                Visit Contact Page
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "acceptance-of-terms",
      number: "22",
      title: "22. Acceptance of Terms",
      icon: <CheckCircle2 className="w-5 h-5 text-blue-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p className="font-medium text-neutral-800">
            By accessing or using the Dee Divine Propinfra website, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.
          </p>
          <p className="text-xs font-semibold text-red-600">
            If you do not agree with these terms, please discontinue use of the website.
          </p>
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
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-extrabold uppercase tracking-[0.25em] mb-6 backdrop-blur-md border border-white/10">
              <Scale className="w-3.5 h-3.5 text-blue-400" />
              <span>Website Terms of Service</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
              Terms & Conditions
            </h1>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 text-neutral-300 text-sm leading-relaxed mb-6">
              <p className="font-medium">
                Welcome to <strong className="text-white font-bold">Dee Divine Propinfra</strong>. These Terms & Conditions govern your access to and use of the Dee Divine Propinfra website and the property-related information and services made available through it. By accessing this website, browsing its pages, submitting an enquiry, or using any service, you agree to comply with these Terms & Conditions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400">
              <div className="flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Document: Website Terms & Conditions</span>
              </div>
              <span className="text-neutral-700">•</span>
              <div className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-blue-400" />
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
                placeholder="Search terms & conditions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-blue-500 focus:bg-white transition"
              />
            </div>

            {/* Quick jump pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider whitespace-nowrap mr-1">
                Jump to:
              </span>
              {[
                { label: "Website Use", id: "website-use" },
                { label: "Enquiries", id: "property-enquiries" },
                { label: "Services", id: "real-estate-services" },
                { label: "Returns", id: "no-guarantee-of-returns" },
                { label: "IP Rights", id: "intellectual-property" },
                { label: "Prohibited", id: "prohibited-activities" },
                { label: "Law", id: "governing-law" },
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
          
          {/* LEFT SIDEBAR: TOC */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-44 bg-white p-5 rounded-2xl border border-neutral-200 shadow-sm space-y-2">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-neutral-400 mb-3 px-2 flex items-center justify-between">
                <span>Table of Contents</span>
                <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-bold">
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
                          ? "text-blue-400 translate-x-0.5"
                          : "text-neutral-300 group-hover:text-neutral-500"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT: SECTIONS */}
          <div className="col-span-1 lg:col-span-8 space-y-6">
            {filteredSections.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-neutral-200">
                <Scale className="w-10 h-10 text-neutral-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-neutral-700">No sections found</h3>
                <p className="text-xs text-neutral-500 mt-1">Try adjusting your search query.</p>
              </div>
            ) : (
              filteredSections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow duration-300 scroll-mt-36"
                >
                  <div className="flex items-start gap-4 mb-4 pb-4 border-b border-neutral-100">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                      {section.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
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

            {/* BOTTOM ACKNOWLEDGEMENT / ACCEPTANCE CARD */}
            <div className="bg-neutral-900 text-white rounded-2xl p-6 sm:p-8 border border-neutral-800 mt-10 shadow-lg">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  <h3 className="font-bold text-white uppercase tracking-wider text-sm">
                    Acceptance of Terms
                  </h3>
                  <p>
                    By accessing or using the Dee Divine Propinfra website, you acknowledge that you have read, understood, and agreed to these Terms & Conditions. If you do not agree with these terms, please discontinue use of the website.
                  </p>
                </div>
              </div>
            </div>

            {/* IMPORTANT LEGAL NOTE BOX */}
            <div className="bg-blue-500/10 border-2 border-dashed border-blue-500/40 rounded-2xl p-6 text-blue-950 text-xs leading-relaxed space-y-2">
              <div className="flex items-center gap-2 font-black uppercase tracking-wider text-blue-800">
                <AlertTriangle className="w-4 h-4 text-blue-600" />
                <span>Important Legal Note</span>
              </div>
              <p className="font-medium text-blue-950">
                Important: These Terms & Conditions are general website terms and should be reviewed by a qualified legal professional before publication to ensure they accurately reflect Dee Divine Propinfra's legal structure, services, contracts, jurisdiction, and applicable laws.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
