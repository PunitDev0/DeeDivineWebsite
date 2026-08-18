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
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md px-6 py-0 md:px-12 transition-all duration-500 border-b ${
          isScrolled 
            ? "bg-white/90 border-black/10 shadow-sm" 
            : "bg-white/50 border-black/5"
        }`}
      >
        <div className="max-w-[1500px] mx-auto flex items-stretch justify-between h-20">
          
          {/* LEFT: LOGO */}
          <div className="flex items-center h-full">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/assets/logo.png" 
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-black text-lg md:text-xl tracking-[0.2em] uppercase text-[#0c0d12] leading-none">
                  DEE DIVINE
                </span>
                <span className="font-bold text-[10px] tracking-[0.35em] text-neutral-500 uppercase mt-1">
                  PROPINFRA
                </span>
              </div>
            </Link>
          </div>

          {/* CENTER: DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wider">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative py-2 uppercase text-[12px] font-bold transition-all duration-300 ${
                    isActive 
                      ? "text-[#0c0d12] font-black" 
                      : "text-neutral-500 hover:text-[#0c0d12]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* RIGHT: CONSULTATION BUTTON */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:+919211496111"
              className="px-6 py-2.5 text-[11px] font-black uppercase tracking-widest text-white bg-black hover:bg-neutral-800 rounded-full transition-all duration-300 flex items-center gap-2 active:scale-95 shadow-md"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>+91-9211496111</span>
            </a>
          </div>

          {/* MOBILE HAMBURGER */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0c0d12] p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
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
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_8px_#ef4444]" />
              )}
            </Link>
          );
        })}
        
        <a 
          href="tel:+919211496111"
          onClick={() => setIsOpen(false)}
          className="px-8 py-3.5 text-xs font-black text-white bg-[#e63946] hover:bg-[#d62837] active:scale-95 transition-all duration-300 rounded-full flex items-center gap-2"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Call: +91-9211496111</span>
        </a>
      </div>
    </>
  );
}
