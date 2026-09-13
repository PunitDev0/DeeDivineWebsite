"use client";

import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Clock,
  Building2,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#050608] text-white pt-16 md:pt-24 pb-8 md:pb-12 px-6 md:px-12 lg:px-16 overflow-hidden border-t border-white/5">
      {/* Decorative radial background overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050608] via-[#0A0204] to-[#1A0307]" />
        
        {/* Large soft burgundy glow in the center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(58,8,19,0.35)_0%,transparent_70%)] blur-[80px]" />
        
        {/* Deep crimson ambient light in the bottom right */}
        <div className="absolute -bottom-[20%] -right-[10%] w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(143,18,48,0.25)_0%,transparent_70%)] blur-[100px]" />
        
        {/* Subtle edge vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(5,6,8,0.7)_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">

        {/* Column 1: Logo & Map */}
        <div className="flex flex-col items-center md:items-start space-y-8">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11">
              <Image
                src="/assets/logo.png"
                alt="Logo"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-black text-[15px] tracking-[0.2em] uppercase text-white leading-none">
                DEE DIVINE
              </span>
              <span className="font-bold text-[9px] tracking-[0.3em] text-[#8b8c91] uppercase mt-1">
                PROPINFRA
              </span>
            </div>
          </Link>

          {/* Premium Glass Map Frame */}
          <div className="w-full relative group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md p-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(217,35,62,0.1)] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8F1230]/5 to-transparent pointer-events-none z-10" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.5690235420916!2d77.01687877659543!3d28.402082275791372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2323bd5b493b%3A0x556ba537cfc6d921!2sDee%20Divine%20PropInfra%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1780059213352!5m2!1sen!2sin"
              width="100%"
              height="150"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl relative z-0 border-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300 filter grayscale-[20%] contrast-125"
            ></iframe>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="text-left pt-2 md:pt-0">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-5 h-[2px] bg-gradient-to-r from-[#8F1230] to-[#FF5A67] shadow-[0_0_8px_rgba(217,35,62,0.4)]" />
            <h3 className="font-black text-xs uppercase tracking-[0.25em] text-white">
              Quick Links
            </h3>
          </div>
          <ul className="space-y-4 text-[11px] tracking-wider font-bold">
            {[
              { name: "Home", link: "/" },
              { name: "About Us", link: "/about" },
              { name: "Blogs", link: "/blog" },
              { name: "FAQs", link: "/faq" },
              { name: "Career", link: "/career" },
              { name: "Contact Us", link: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href={item.link}
                  className="group flex items-center gap-3 text-[#8b8c91] hover:text-white transition-colors duration-300 block uppercase"
                >
                  <span className="w-1.5 h-1.5 bg-white/10 rounded-full group-hover:bg-gradient-to-r group-hover:from-[#8F1230] group-hover:to-[#FF5A67] group-hover:shadow-[0_0_8px_rgba(255,90,103,0.6)] transition-all duration-300" />
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Our Services */}
        <div className="text-left pt-2 md:pt-0">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-5 h-[2px] bg-gradient-to-r from-[#8F1230] to-[#FF5A67] shadow-[0_0_8px_rgba(217,35,62,0.4)]" />
            <h3 className="font-black text-xs uppercase tracking-[0.25em] text-white">
              Our Services
            </h3>
          </div>
          <ul className="space-y-4 text-[11px] tracking-wider font-bold text-[#8b8c91]">
            {[
              { name: "Real Estate Profile", href: "#" },
              { name: "Vastu Consultancy", href: "/vastu-consultancy" },
              { name: "Property Investment", href: "/property-investment-in-gurgaon" },
              { name: "Residential Property", href: "#" },
              { name: "Commercial Property", href: "#" },
              { name: "Best Real Estate Company in Gurgaon", href: "/best-real-estate-company-in-gurgaon" },
            ].map((service, i) => (
              <li key={i}>
                <Link
                  href={service.href}
                  className="group flex items-center gap-3 hover:text-white transition-colors duration-300 uppercase"
                >
                  <span className="w-1.5 h-1.5 bg-white/10 rounded-full flex-shrink-0 group-hover:bg-gradient-to-r group-hover:from-[#8F1230] group-hover:to-[#FF5A67] group-hover:shadow-[0_0_8px_rgba(255,90,103,0.6)] transition-all duration-300" />
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">{service.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: DDJAY Resources */}
        <div className="text-left pt-2 md:pt-0">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-5 h-[2px] bg-gradient-to-r from-[#8F1230] to-[#FF5A67] shadow-[0_0_8px_rgba(217,35,62,0.4)]" />
            <h3 className="font-black text-xs uppercase tracking-[0.25em] text-white">
              DDJAY Resources
            </h3>
          </div>
          <ul className="space-y-4 text-[11px] tracking-wider font-bold text-[#8b8c91]">
            {[
              { name: "What is DDJAY?", href: "/what-is-deen-dayal-jan-awas-yojna-ddjay-guide" },
              { name: "DDJAY Eligibility & Documents", href: "/ddjay-eligibility-and-documents-checklist" },
              { name: "DDJAY Loan & Financing Guide", href: "/ddjay-loan-financing-guide" },
              { name: "DDJAY Gurgaon Guide 2026", href: "/deen-dayal-plots-gurgaon-ddjay-guide-2026" },
            ].map((resource, i) => (
              <li key={i}>
                <Link
                  href={resource.href}
                  className="group flex items-center gap-3 hover:text-white transition-colors duration-300 uppercase"
                >
                  <span className="w-1.5 h-1.5 bg-white/10 rounded-full flex-shrink-0 group-hover:bg-gradient-to-r group-hover:from-[#8F1230] group-hover:to-[#FF5A67] group-hover:shadow-[0_0_8px_rgba(255,90,103,0.6)] transition-all duration-300" />
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">{resource.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5: Contact Info */}
        <div className="text-left pt-2 md:pt-0">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-5 h-[2px] bg-gradient-to-r from-[#8F1230] to-[#FF5A67] shadow-[0_0_8px_rgba(217,35,62,0.4)]" />
            <h3 className="font-black text-xs uppercase tracking-[0.25em] text-white">
              Contact Info
            </h3>
          </div>
          <ul className="space-y-5 text-xs tracking-wide text-[#8b8c91]">
            <li className="group flex items-start gap-4">
              <MapPin className="w-4 h-4 text-[#FF5A67] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
              <span className="leading-relaxed group-hover:text-white transition-colors duration-300">
                M3M Broadway, 22nd Floor, D Block,
                Sector 71, SPR Road, Gurgaon
              </span>
            </li>
            <li className="group flex items-center gap-4">
              <Phone className="w-4 h-4 text-[#FF5A67] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <a href="tel:+919211496111" className="group-hover:text-white transition-colors duration-300">
                +91-9211496111
              </a>
            </li>
            <li className="group flex items-center gap-4">
              <Mail className="w-4 h-4 text-[#FF5A67] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <a href="mailto:info@deedivinepropinfra.com" className="group-hover:text-white transition-colors duration-300">
                info@deedivinepropinfra.com
              </a>
            </li>
            <li className="group flex items-center gap-4">
              <Clock className="w-4 h-4 text-[#FF5A67] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <span className="group-hover:text-white transition-colors duration-300">Mon – Sat: 10:00 AM – 7:00 PM</span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            {[
              { icon: <Facebook size={16} />, href: "https://www.facebook.com/profile.php?id=61572325678798" },
              { icon: <Instagram size={16} />, href: "https://www.instagram.com/dee_divine_propinfra/" },
              { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/company/dee-divine-propinfra-pvt-ltd/" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#8b8c91] hover:text-white hover:border-transparent hover:bg-gradient-to-br hover:from-[#8F1230] hover:to-[#FF5A67] hover:shadow-[0_4px_15px_rgba(217,35,62,0.4)] transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom copyright bar */}
      <div className="relative z-10 max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[10px] text-[#5F6065] font-bold tracking-[0.1em]">
        <p className="uppercase text-center md:text-left mb-5 md:mb-0">
          © {new Date().getFullYear()} DEE DIVINE PROPINFRA PVT. LTD. ALL RIGHTS RESERVED.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 uppercase">
          <Link href="/disclaimer" className="flex items-center gap-1.5 hover:text-white transition-colors duration-300">
            <AlertCircle className="w-3.5 h-3.5" /> Disclaimer
          </Link>
          <Link href="/privacy-policy" className="flex items-center gap-1.5 hover:text-white transition-colors duration-300">
            <ShieldCheck className="w-3.5 h-3.5" /> Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-white transition-colors duration-300">
            Terms & Conditions
          </Link>
          <Link href="/refund-policy" className="hover:text-white transition-colors duration-300">
            Refund Policy
          </Link>
          <Link href="/payment-terms" className="hover:text-white transition-colors duration-300">
            Payment Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
