"use client";

import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Clock,
  Building2,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#0c0d12] text-white pt-20 pb-12 px-6 md:px-16 overflow-hidden border-t border-white/5">
      {/* Decorative radial background overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, rgba(230,57,70,0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 relative z-10">
        
        {/* Column 1: Logo & Map */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/assets/logo.png"
                alt="Logo"
                fill
                className="object-contain "
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-black text-sm tracking-[0.2em] uppercase text-white leading-none">
                DEE DIVINE
              </span>
              <span className="font-bold text-[9px] tracking-[0.3em] text-neutral-400 uppercase mt-0.5">
                PROPINFRA
              </span>
            </div>
          </Link>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.5690235420916!2d77.01687877659543!3d28.402082275791372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2323bd5b493b%3A0x556ba537cfc6d921!2sDee%20Divine%20PropInfra%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1780059213352!5m2!1sen!2sin"
            width="100%"
            height="150"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-none border border-white/10 shadow-lg"
          ></iframe>
        </div>

        {/* Column 2: Quick Links */}
        <div className="text-left">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-4 h-[2px] bg-red-500" />
            <h3 className="font-black text-xs uppercase tracking-[0.25em] text-white">
              Quick Links
            </h3>
          </div>
          <ul className="space-y-3 text-xs tracking-wider font-medium">
            {[
              { name: "Home", link: "/" },
              { name: "About Us", link: "/about" },
              { name: "Career", link: "/career" },
              { name: "Contact Us", link: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href={item.link}
                  className="text-neutral-400 hover:text-white transition duration-300 block uppercase"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Our Services */}
        <div className="text-left">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-4 h-[2px] bg-red-500" />
            <h3 className="font-black text-xs uppercase tracking-[0.25em] text-white">
              Our Services
            </h3>
          </div>
          <ul className="space-y-3 text-xs tracking-wider text-neutral-400">
            {[
              { name: "Real Estate Profile", href: "#" },
              { name: "Vassta Consultancy", href: "/vassta-consultancy" },
              { name: "Property Investment", href: "/property-investment-in-gurgaon" },
              { name: "Residential Property", href: "#" },
              { name: "Commercial Property", href: "#" },
            ].map((service, i) => (
              <li key={i}>
                <Link
                  href={service.href}
                  className="flex items-center gap-3 hover:text-white transition-colors duration-300"
                >
                  <span className="w-1.5 h-1.5 bg-neutral-600 rounded-full" />
                  <span>{service.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: DDJAY Resources */}
        <div className="text-left">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-4 h-[2px] bg-red-500" />
            <h3 className="font-black text-xs uppercase tracking-[0.25em] text-white">
              DDJAY Resources
            </h3>
          </div>
          <ul className="space-y-3 text-xs tracking-wider text-neutral-400">
            {[
              { name: "What is DDJAY?", href: "/what-is-deen-dayal-jan-awas-yojna-ddjay-guide" },
              { name: "DDJAY Eligibility & Documents", href: "/ddjay-eligibility-and-documents-checklist" },
              { name: "DDJAY Loan & Financing Guide", href: "/ddjay-loan-financing-guide" },
            ].map((resource, i) => (
              <li key={i}>
                <Link
                  href={resource.href}
                  className="flex items-center gap-3 hover:text-white transition-colors duration-300"
                >
                  <span className="w-1.5 h-1.5 bg-neutral-600 rounded-full" />
                  <span>{resource.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5: Contact Info */}
        <div className="text-left">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-4 h-[2px] bg-red-500" />
            <h3 className="font-black text-xs uppercase tracking-[0.25em] text-white">
              Contact Info
            </h3>
          </div>
          <ul className="space-y-4 text-xs tracking-wide text-neutral-400">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                M3M Broadway, 22nd Floor, D Block,
                Sector 71, SPR Road, Gurgaon
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
              <a href="tel:+919211496111" className="hover:text-white transition">
                +91-9211496111
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
              <a href="mailto:info@deedivinepropinfra.com" className="hover:text-white transition">
                info@deedivinepropinfra.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>Mon – Sat: 10:00 AM – 7:00 PM</span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[
              { icon: <Facebook size={16} />, href: "https://www.facebook.com/profile.php?id=61572325678798" },
              { icon: <Instagram size={16} />, href: "https://www.instagram.com/dee_divine_propinfra/" },
              { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/company/dee-divine-propinfra-pvt-ltd/" },
              { icon: <Twitter size={16} />, href: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom copyright bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[11px] text-neutral-500 tracking-wider">
        <p className="uppercase">
          © {new Date().getFullYear()} DEE DIVINE PROPINFRA PVT. LTD. ALL RIGHTS RESERVED.
        </p>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4 md:mt-0 uppercase">
          <Link href="/disclaimer" className="flex items-center gap-1.5 hover:text-white transition">
            <AlertCircle className="w-3.5 h-3.5" /> Disclaimer
          </Link>
          <Link href="/privacy-policy" className="flex items-center gap-1.5 hover:text-white transition">
            <ShieldCheck className="w-3.5 h-3.5" /> Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-white transition">
            Terms & Conditions
          </Link>
          <Link href="/refund-policy" className="hover:text-white transition">
            Refund Policy
          </Link>
          <Link href="/payment-terms" className="hover:text-white transition">
            Payment Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
