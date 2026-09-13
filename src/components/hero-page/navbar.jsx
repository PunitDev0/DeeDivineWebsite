"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PhoneCall, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Blogs", href: "/blog" },
    { label: "Career", href: "/career" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-4 md:top-6 left-4 right-4 md:left-8 md:right-8 z-50 rounded-2xl backdrop-blur-xl px-6 py-2 transition-all duration-500 border shadow-2xl ${
          isScrolled 
            ? "bg-white/70 border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)]" 
            : "bg-white/20 border-white/30"
        }`}
      >
        <div className="max-w-[1500px] mx-auto flex items-center justify-between h-16 md:h-20">
          
          {/* LEFT: LOGO */}
          <div className="flex items-center h-full">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                <Image
                  src="/assets/logo.png" 
                  alt="Logo"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-black text-base md:text-xl tracking-[0.2em] uppercase text-[#0c0d12] leading-none">
                  DEE DIVINE
                </span>
                <span className="font-bold text-[8px] md:text-[10px] tracking-[0.35em] text-[#0c0d12]/70 uppercase mt-1">
                  PROPINFRA
                </span>
              </div>
            </Link>
          </div>

          {/* CENTER: DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center space-x-10 text-sm font-semibold tracking-wider">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative py-2 uppercase text-[12px] font-bold transition-all duration-300 ${
                    isActive 
                      ? "text-[#0c0d12] font-black" 
                      : "text-[#0c0d12]/60 hover:text-[#0c0d12]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-gradient-to-r from-transparent via-[#D9233E] to-transparent rounded-full opacity-90 shadow-[0_2px_8px_rgba(217,35,62,0.5)]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* RIGHT: CONSULTATION BUTTON */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:+919211496111"
              className="group relative overflow-hidden px-8 py-3.5 text-[11px] font-black uppercase tracking-widest text-[#0c0d12] rounded-xl transition-all duration-500 flex items-center gap-2 active:scale-95 shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_25px_rgba(217,35,62,0.4)] border border-white/50"
            >
              {/* Premium Red Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#8F1230] via-[#D9233E] to-[#FF5A67] opacity-90"></div>
              {/* Hover Highlight */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
              
              <PhoneCall className="w-3.5 h-3.5 relative z-10 text-white" />
              <span className="relative z-10 text-white">+91-9211496111</span>
            </a>
          </div>

          {/* MOBILE HAMBURGER */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0c0d12] p-2 focus:outline-none bg-white/30 backdrop-blur-sm rounded-lg border border-white/40"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </nav>

      {/* MOBILE DRAWERS */}
      <div 
        className={`fixed inset-0 bg-[#0c0d12]/98 flex flex-col items-center justify-center space-y-8 text-lg font-bold uppercase transition-transform duration-500 ease-in-out md:hidden z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`transition-all duration-300 relative py-2 ${
                isActive 
                  ? "text-white scale-105 font-black tracking-[0.2em]" 
                  : "text-white/50 hover:text-white/90 tracking-widest"
              }`}
            >
              {item.label}
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-gradient-to-r from-transparent via-[#D9233E] to-transparent rounded-full shadow-[0_2px_8px_rgba(217,35,62,0.5)]" />
              )}
            </Link>
          );
        })}
        
        <a 
          href="tel:+919211496111"
          onClick={() => setIsOpen(false)}
          className="px-8 py-3.5 text-xs font-black text-white bg-gradient-to-r from-[#8F1230] to-[#FF5A67] hover:to-[#D9233E] active:scale-95 transition-all duration-300 rounded-xl flex items-center gap-2 shadow-[0_4px_15px_rgba(217,35,62,0.3)]"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Call: +91-9211496111</span>
        </a>
      </div>
    </>
  );
}
