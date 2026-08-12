"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Database,
  Eye,
  FileText,
  PhoneCall,
  Cookie,
  BarChart2,
  Share2,
  ExternalLink,
  ShieldAlert,
  Clock,
  UserCheck,
  Baby,
  RefreshCw,
  Mail,
  Search,
  ChevronRight,
  Globe,
  CheckCircle2,
  AlertTriangle,
  Building2,
  MessageSquare
} from "lucide-react";

export default function PrivacyPolicyContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: "information-we-collect",
      number: "01",
      title: "1. Information We Collect",
      icon: <Database className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            Dee Divine Propinfra may collect basic information that you voluntarily provide through website forms, enquiries, or other communication methods.
          </p>
          <p className="font-semibold text-neutral-800 text-xs uppercase tracking-wider">
            Depending on the form or enquiry, this may include:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-3">
            {[
              "Name",
              "Mobile number",
              "Email address",
              "Property requirements",
              "Preferred location",
              "Budget or property preferences",
              "Message or enquiry details",
              "Any other information voluntarily provided by you",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-2.5 bg-neutral-50 p-2.5 rounded-lg border border-neutral-100"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                <span className="text-xs font-medium text-neutral-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="bg-emerald-50/70 border-l-4 border-emerald-500 p-3.5 rounded-r-lg text-emerald-950 text-xs font-medium">
            We only request information that is reasonably necessary to respond to your enquiry or provide the requested property-related assistance.
          </p>
        </div>
      ),
    },
    {
      id: "how-we-collect-information",
      number: "02",
      title: "2. How We Collect Information",
      icon: <Eye className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>Information may be collected when you:</p>
          <div className="space-y-2">
            {[
              "Submit a contact form",
              "Submit a property enquiry",
              "Request information about a project",
              "Contact our team through details provided on the website",
              "Communicate with us regarding our property services",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-medium text-neutral-700 bg-white p-2.5 rounded-lg border border-neutral-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-500 italic pt-1">
            You are not required to provide personal information simply to browse publicly available pages of the website.
          </p>
        </div>
      ),
    },
    {
      id: "how-we-use-your-information",
      number: "03",
      title: "3. How We Use Your Information",
      icon: <FileText className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>Information submitted through our website may be used to:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-2">
            {[
              "Respond to your enquiry",
              "Provide requested property information",
              "Contact you regarding your property requirements",
              "Understand your property preferences",
              "Provide information about relevant properties or services",
              "Schedule a consultation or property discussion",
              "Improve our website and user experience",
              "Maintain records of enquiries and communications",
              "Address support or service-related requests",
            ].map((usage, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-neutral-50 p-2.5 rounded-lg border border-neutral-100 text-xs font-medium text-neutral-700">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>{usage}</span>
              </div>
            ))}
          </div>
          <p>
            We do not use information submitted through a contact form for purposes unrelated to the enquiry without an appropriate basis or permission where required by applicable law.
          </p>
        </div>
      ),
    },
    {
      id: "property-enquiries",
      number: "04",
      title: "4. Property Enquiries",
      icon: <Building2 className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            If you submit an enquiry regarding a property, project, plot, residential property, commercial property, or other real estate service, we may use the information you provide to understand your requirements and respond accordingly.
          </p>
          <p>
            Where necessary to fulfil your enquiry, relevant information may be shared with an appropriate property representative, developer, service provider, or authorized partner.
          </p>
          <p className="font-semibold text-neutral-800 text-xs">
            We aim to limit such sharing to information reasonably required to address your enquiry.
          </p>
        </div>
      ),
    },
    {
      id: "communication",
      number: "05",
      title: "5. Communication",
      icon: <PhoneCall className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            If you provide your phone number or email address through a website form, Dee Divine Propinfra may use those details to respond to your enquiry.
          </p>
          <p>Depending on the nature of your request, communication may take place through:</p>
          <div className="flex flex-wrap gap-2 py-1">
            {[
              "Phone",
              "Email",
              "WhatsApp or other messaging channels",
              "Other communication methods voluntarily provided by you",
            ].map((channel, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-neutral-900 text-white text-xs rounded-full font-medium border border-neutral-800"
              >
                {channel}
              </span>
            ))}
          </div>
          <p className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r-lg text-amber-900 text-xs font-medium">
            You may request that we stop non-essential communications at any time.
          </p>
        </div>
      ),
    },
    {
      id: "cookies-and-technologies",
      number: "06",
      title: "6. Cookies and Website Technologies",
      icon: <Cookie className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            Our website may use cookies or similar technologies to support website functionality, security, performance, analytics, or user experience.
          </p>
          <p>
            Cookies may help us understand how visitors use the website and identify technical issues.
          </p>
          <p className="text-xs font-medium text-neutral-800">
            You can manage or restrict cookies through your browser settings. Disabling certain cookies may affect some website functionality.
          </p>
        </div>
      ),
    },
    {
      id: "analytics-and-technical-info",
      number: "07",
      title: "7. Analytics and Technical Information",
      icon: <BarChart2 className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            When you visit the website, certain technical information may be processed automatically by hosting, analytics, security, or other website technologies.
          </p>
          <p className="text-xs font-semibold text-neutral-800 uppercase tracking-wider">
            This may include information such as:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              "IP address",
              "Browser type",
              "Device type",
              "Operating system",
              "Pages visited",
              "Approximate usage info",
              "Referral information",
              "Date & time of access",
            ].map((tech, idx) => (
              <div
                key={idx}
                className="bg-neutral-100 text-neutral-800 p-2.5 rounded-lg text-center text-xs font-semibold border border-neutral-200"
              >
                {tech}
              </div>
            ))}
          </div>
          <p>
            Such information may be used to maintain website security, understand website performance, analyze traffic, and improve the user experience.
          </p>
        </div>
      ),
    },
    {
      id: "third-party-services",
      number: "08",
      title: "8. Third-Party Services",
      icon: <Share2 className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            Our website may use third-party services for functions such as website hosting, analytics, security, communication, maps, forms, or other website features.
          </p>
          <p>
            These third-party providers may process certain information according to their own privacy policies and applicable terms.
          </p>
          <p>
            Dee Divine Propinfra does not control the privacy practices of independent third-party services.
          </p>
          <p className="font-semibold text-neutral-800 text-xs">
            Users should review the relevant third-party privacy policies when interacting with external services.
          </p>
        </div>
      ),
    },
    {
      id: "external-links",
      number: "09",
      title: "9. External Links",
      icon: <ExternalLink className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            Our website may contain links to external websites or third-party platforms.
          </p>
          <p>
            Dee Divine Propinfra is not responsible for the privacy practices, security, content, or data-handling practices of external websites.
          </p>
          <p className="text-xs font-medium text-neutral-800">
            We recommend reviewing the privacy policy of any third-party website before submitting personal information.
          </p>
        </div>
      ),
    },
    {
      id: "data-security",
      number: "10",
      title: "10. Data Security",
      icon: <Lock className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            Dee Divine Propinfra takes reasonable measures to protect information submitted through the website from unauthorized access, misuse, alteration, disclosure, or loss.
          </p>
          <p>
            However, no internet-based website or electronic transmission can be guaranteed to be completely secure.
          </p>
          <div className="bg-red-50 border-l-4 border-red-500 p-3.5 rounded-r-lg text-red-950 text-xs font-medium">
            Therefore, users should avoid submitting sensitive personal, financial, banking, password, or other confidential information through general website enquiry forms unless specifically requested through an appropriate secure channel.
          </div>
        </div>
      ),
    },
    {
      id: "data-retention",
      number: "11",
      title: "11. Data Retention",
      icon: <Clock className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            We may retain enquiry information for as long as reasonably necessary to:
          </p>
          <div className="space-y-2">
            {[
              "Respond to your enquiry",
              "Provide requested services",
              "Maintain business and communication records",
              "Resolve disputes",
              "Meet applicable legal or regulatory requirements",
            ].map((reason, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-neutral-50 p-2.5 rounded-lg border border-neutral-100 text-xs font-medium text-neutral-700">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>{reason}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-500 italic">
            The retention period may vary depending on the nature of the information and the purpose for which it was collected.
          </p>
        </div>
      ),
    },
    {
      id: "sharing-of-information",
      number: "12",
      title: "12. Sharing of Information",
      icon: <Share2 className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <div className="bg-emerald-950 text-white p-4 rounded-xl border border-emerald-900">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
              No Data Sale Commitment
            </h4>
            <p className="text-xs text-neutral-300">
              Dee Divine Propinfra does not intend to sell personal information submitted through its website contact forms.
            </p>
          </div>
          <p>
            Information may be shared where reasonably necessary for legitimate business purposes, including responding to property enquiries, providing requested services, operating the website, maintaining security, or complying with applicable legal requirements.
          </p>
          <p>
            Information may also be disclosed where required by law, regulation, court order, or a lawful governmental request.
          </p>
        </div>
      ),
    },
    {
      id: "your-choices",
      number: "13",
      title: "13. Your Choices",
      icon: <UserCheck className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            Depending on applicable law, you may have rights or choices concerning your personal information.
          </p>
          <p className="font-semibold text-neutral-800 text-xs">You may contact us to:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Ask what information we may hold about you",
              "Request correction of inaccurate information",
              "Request deletion of information where applicable",
              "Withdraw consent where applicable",
              "Request that we stop certain communications",
              "Ask questions about how your information is being used",
            ].map((choice, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-neutral-50 p-2.5 rounded-lg border border-neutral-100 text-xs font-medium text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>{choice}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-500 italic">
            Requests may be subject to applicable legal, contractual, or legitimate business requirements.
          </p>
        </div>
      ),
    },
    {
      id: "childrens-privacy",
      number: "14",
      title: "14. Children's Privacy",
      icon: <Baby className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            Our website is intended for a general audience and is not specifically directed toward children.
          </p>
          <p>
            We do not knowingly request personal information from children through our property enquiry forms.
          </p>
          <p>
            If you believe that a child has submitted personal information to us, please contact us so that the matter can be reviewed and appropriate action can be taken.
          </p>
        </div>
      ),
    },
    {
      id: "changes-to-privacy-policy",
      number: "15",
      title: "15. Changes to This Privacy Policy",
      icon: <RefreshCw className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            Dee Divine Propinfra may update this Privacy Policy from time to time to reflect changes in our website, services, data practices, technology, or applicable legal requirements.
          </p>
          <p>
            Any updated version will be published on this page with a revised "Last Updated" date.
          </p>
          <p className="font-semibold text-neutral-800 text-xs">
            We encourage visitors to review this page periodically.
          </p>
        </div>
      ),
    },
    {
      id: "contact-us",
      number: "16",
      title: "16. Contact Us",
      icon: <Mail className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p>
            If you have questions, concerns, or requests regarding this Privacy Policy or the handling of your information, please contact Dee Divine Propinfra through the contact details available on our website.
          </p>
          <div className="bg-neutral-900 text-white p-5 rounded-xl border border-neutral-800 space-y-2 text-xs">
            <div className="font-bold text-sm text-emerald-400">Dee Divine Propinfra</div>
            <div>
              <span className="text-neutral-400">Official Website: </span>
              <a
                href="https://deedivinepropinfra.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-emerald-400 font-semibold underline ml-1"
              >
                deedivinepropinfra.com
              </a>
            </div>
            <div>
              <span className="text-neutral-400">Contact Us: </span>
              <Link href="/contact" className="text-white hover:text-emerald-400 font-semibold underline ml-1">
                Visit Contact Page
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "consent",
      number: "17",
      title: "17. Consent",
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
          <p className="font-medium text-neutral-800">
            By submitting information through a Dee Divine Propinfra website contact form, you acknowledge that you have read this Privacy Policy and understand how the information you voluntarily provide may be collected, used, and processed as described above.
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
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-extrabold uppercase tracking-[0.25em] mb-6 backdrop-blur-md border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Privacy & Data Security Policy</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
              Privacy Policy
            </h1>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 text-neutral-300 text-sm leading-relaxed mb-6">
              <p className="font-medium">
                <strong className="text-white font-bold">Dee Divine Propinfra</strong> respects your privacy and is committed to protecting the information you provide while using our website. This Privacy Policy explains what information we may collect through our website, how we use that information, how we protect it, and the choices available to you.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400">
              <div className="flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Document: Website Privacy Policy</span>
              </div>
              <span className="text-neutral-700">•</span>
              <div className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-emerald-400" />
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
                placeholder="Search privacy policy sections..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition"
              />
            </div>

            {/* Quick jump pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider whitespace-nowrap mr-1">
                Jump to:
              </span>
              {[
                { label: "Data Collected", id: "information-we-collect" },
                { label: "How Used", id: "how-we-use-your-information" },
                { label: "Cookies", id: "cookies-and-technologies" },
                { label: "Data Security", id: "data-security" },
                { label: "Your Choices", id: "your-choices" },
                { label: "Contact", id: "contact-us" },
                { label: "Consent", id: "consent" },
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
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
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
                          ? "text-emerald-400 translate-x-0.5"
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
                <Lock className="w-10 h-10 text-neutral-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-neutral-700">No sections found</h3>
                <p className="text-xs text-neutral-500 mt-1">Try adjusting your search terms.</p>
              </div>
            ) : (
              filteredSections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow duration-300 scroll-mt-36"
                >
                  <div className="flex items-start gap-4 mb-4 pb-4 border-b border-neutral-100">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                      {section.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">
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

            {/* BOTTOM ACKNOWLEDGEMENT / CONSENT CARD */}
            <div className="bg-neutral-900 text-white rounded-2xl p-6 sm:p-8 border border-neutral-800 mt-10 shadow-lg">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  <h3 className="font-bold text-white uppercase tracking-wider text-sm">
                    User Consent Acknowledgment
                  </h3>
                  <p>
                    By submitting information through a Dee Divine Propinfra website contact form, you acknowledge that you have read this Privacy Policy and understand how the information you voluntarily provide may be collected, used, and processed.
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
                Note: This Privacy Policy is general website content and should be reviewed by a qualified legal professional before publication to ensure that it accurately reflects the company's actual data practices, third-party services, cookies, analytics tools, and applicable privacy obligations.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
