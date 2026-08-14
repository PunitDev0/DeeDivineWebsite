"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navItems } from "./navbar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // true = dark bg → white text, false = light bg → black text
  const headerRef = useRef(null);
  const pathname = usePathname();

  // Detect background color behind the header
  const checkBackground = useCallback(() => {
    if (!headerRef.current) return;

    const rect = headerRef.current.getBoundingClientRect();
    const centerY = rect.top + rect.height / 2;
    const centerX = rect.left + 80; // Over the logo area

    // Temporarily hide header to get element behind it
    headerRef.current.style.pointerEvents = "none";
    headerRef.current.style.visibility = "hidden";

    const elementBehind = document.elementFromPoint(centerX, centerY);

    headerRef.current.style.pointerEvents = "";
    headerRef.current.style.visibility = "";

    if (!elementBehind) return;

    let isLightBg = false;
    let detected = false;

    // 1. Heuristic: Check computed text color of element behind
    const textColor = window.getComputedStyle(elementBehind).color;
    if (textColor) {
      const match = textColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) {
        const r = parseInt(match[1]);
        const g = parseInt(match[2]);
        const b = parseInt(match[3]);
        const textLuminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        
        if (textLuminance > 0.7) {
          isLightBg = false; // Light text => Dark background => White header
          detected = true;
        } else if (textLuminance < 0.3) {
          isLightBg = true;  // Dark text => Light background => Black header
          detected = true;
        }
      }
    }

    // 2. Main Walk-up: If text color is not conclusive
    if (!detected) {
      let el = elementBehind;
      while (el && el !== document.body) {
        const computed = window.getComputedStyle(el);
        const bg = computed.backgroundColor;

        // A. Check direct children first (for absolute background layers)
        let foundBgInChild = false;
        if (el.children && el.children.length > 0) {
          for (let i = 0; i < el.children.length; i++) {
            const child = el.children[i];
            const childComputed = window.getComputedStyle(child);
            
            if (
              (childComputed.position === "absolute" || childComputed.position === "fixed") &&
              childComputed.backgroundColor &&
              childComputed.backgroundColor !== "rgba(0, 0, 0, 0)" &&
              childComputed.backgroundColor !== "transparent"
            ) {
              const childRect = child.getBoundingClientRect();
              if (
                centerX >= childRect.left &&
                centerX <= childRect.right &&
                centerY >= childRect.top &&
                centerY <= childRect.bottom
              ) {
                const childBg = childComputed.backgroundColor;
                const match = childBg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
                if (match) {
                  const r = parseInt(match[1]);
                  const g = parseInt(match[2]);
                  const b = parseInt(match[3]);
                  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
                  isLightBg = luminance > 0.5;
                  foundBgInChild = true;
                  detected = true;
                  break;
                }
              }
            }
          }
        }

        if (foundBgInChild) {
          break;
        }

        // B. Check the element itself
        if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
          const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
          if (match) {
            const r = parseInt(match[1]);
            const g = parseInt(match[2]);
            const b = parseInt(match[3]);
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            isLightBg = luminance > 0.5;
            detected = true;
            break;
          }
        }

        el = el.parentElement;
      }
    }

    setIsDark(!isLightBg);
  }, []);

  useEffect(() => {
    checkBackground();

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          checkBackground();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", checkBackground);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkBackground);
    };
  }, [checkBackground]);

  useEffect(() => {
    const timer = setTimeout(checkBackground, 100);
    return () => clearTimeout(timer);
  }, [pathname, checkBackground]);

  return (
    <>
      <nav
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md px-6 py-0 md:px-12 transition-colors duration-500 border-b ${
        isDark ? "border-white/5" : "border-black/5"
      }`}
    >
      <div className="max-w-[1500px] mx-auto flex items-stretch justify-between h-24">
        
        {/* LEFT: LOGO WITH IMAGE BLOCK CONTAINER */}
        <div className="flex items-center h-full">
          {/* Square Image Asset Block - Size increased */}
          <div className={`relative w-20 h-full hidden sm:block border-r transition-colors duration-500 ${
            isDark ? "border-white/5" : "border-black/5"
          }`}>
            <Image
              src="/assets/logo.png" 
              alt="Logo Graphic"
              fill
              priority
              className="object-contain p-4"
            />
          </div>
          
          {/* Logo Text Branding - Size & Tracking increased */}
          <Link href="/" className="flex flex-col justify-center pl-4 sm:pl-0">
            <span className={`font-black text-xl md:text-2xl tracking-[0.2em] uppercase font-sans leading-none transition-colors duration-500 ${
              isDark ? "text-white" : "text-[#0c0d12]"
            }`}>
              DEE DIVINE
            </span>
            <span className={`font-bold text-xs tracking-[0.4em] uppercase mt-1 transition-colors duration-500 ${
              isDark ? "text-neutral-400" : "text-neutral-600"
            }`}>
              GROUPS
            </span>
          </Link>
        </div>

        {/* CENTER: DESKTOP BRIEF INFO / SUB-TEXT - Text scale & spacing increased */}
        <div className={`hidden xl:flex items-center max-w-2xl mx-12 space-x-8 text-left transition-colors duration-500 ${
          isDark ? "text-white/60" : "text-[#0c0d12]/60"
        }`}>
          <p className="text-[16px] font-medium leading-relaxed tracking-wide max-w-[240px]">
            Premium plotted developments and luxury residential structures.
          </p>
          <div className={`h-8 w-[1px] transition-colors duration-500 ${
            isDark ? "bg-white/20" : "bg-black/20"
          }`}></div>
          <p className="text-[16px] font-medium leading-relaxed tracking-wide max-w-[240px]">
            Simplifying premium real estate management & operations.
          </p>
        </div>

        {/* RIGHT: DESKTOP NAV LINKS & BUTTON */}
        <div className="hidden md:flex items-center space-x-10">
          
          {/* Pill Shaped CTA Button - Padding, font size and weight increased */}
          <button className="px-8 py-3.5 text-[12px] font-black uppercase tracking-widest text-white bg-black hover:bg-neutral-900 border-2 border-white/10 rounded-full transition-all duration-300 shadow-2xl active:scale-95">
            Get Consultation
          </button>
        </div>

        {/* MOBILE MENU HAMBURGER BUTTON */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`flex flex-col justify-center items-center w-10 h-10 space-y-2 z-50 transition-colors duration-500 ${
              isDark || isOpen ? "text-white" : "text-[#0c0d12]"
            }`}
            aria-label="Toggle Menu"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              isDark || isOpen ? "bg-white" : "bg-[#0c0d12]"
            } ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              isDark || isOpen ? "bg-white" : "bg-[#0c0d12]"
            } ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              isDark || isOpen ? "bg-white" : "bg-[#0c0d12]"
            } ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
          </button>
        </div>

      </div>
    </nav>

    {/* MOBILE FULLSCREEN DROP-DOWN */}
    <div className={`fixed inset-0 bg-[#0c0d12]/98 flex flex-col items-center justify-start overflow-y-auto pt-32 pb-12 space-y-8 text-lg font-bold uppercase transition-transform duration-500 ease-in-out md:hidden z-40 ${
      isOpen ? "translate-x-0" : "translate-x-full"
    }`}>
      {navItems.map((item) => {
        const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
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
      <button 
        onClick={() => setIsOpen(false)} 
        className="mt-4 px-10 py-4 text-xs font-black text-white bg-[#e63946] hover:bg-[#d62837] active:scale-95 transition-all duration-300 rounded-full shadow-[0_0_15px_rgba(230,57,70,0.3)]"
      >
        Get Consultation
      </button>
    </div>
  </>
);
}

export default Header;
