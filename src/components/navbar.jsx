"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "PROJECTS", href: "/projects" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
];

export { navItems };

function RightVerticalNavbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(true); // true = dark bg → white text, false = light bg → black text
  const navRef = useRef(null);

  // Detect background color behind the navbar
  const checkBackground = useCallback(() => {
    if (!navRef.current) return;

    const navRect = navRef.current.getBoundingClientRect();
    const navCenterY = navRect.top + navRect.height / 2;
    const navCenterX = navRef.current.offsetLeft + navRect.width / 2;

    // Temporarily hide navbar to get element behind it
    navRef.current.style.pointerEvents = "none";
    navRef.current.style.visibility = "hidden";

    const elementBehind = document.elementFromPoint(navCenterX, navCenterY);

    navRef.current.style.pointerEvents = "";
    navRef.current.style.visibility = "";

    if (!elementBehind) return;

    let isLightBg = false;
    let detected = false;

    // 1. Heuristic: Check the computed text color of the element behind.
    const textColor = window.getComputedStyle(elementBehind).color;
    if (textColor) {
      const match = textColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) {
        const r = parseInt(match[1]);
        const g = parseInt(match[2]);
        const b = parseInt(match[3]);
        const textLuminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        
        // If the text is clearly light/white (luminance > 0.7) or clearly dark/black (luminance < 0.3)
        if (textLuminance > 0.7) {
          isLightBg = false; // Light text => Dark background => White navbar
          detected = true;
        } else if (textLuminance < 0.3) {
          isLightBg = true;  // Dark text => Light background => Black navbar
          detected = true;
        }
      }
    }

    // 2. Main Walk-up: If text color is not conclusive, walk up the DOM
    if (!detected) {
      let el = elementBehind;
      while (el && el !== document.body) {
        const computed = window.getComputedStyle(el);
        const bg = computed.backgroundColor;

        // A. Check direct children first (for absolute background layers like in HowWeWorkSection)
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
              const rect = child.getBoundingClientRect();
              if (
                navCenterX >= rect.left &&
                navCenterX <= rect.right &&
                navCenterY >= rect.top &&
                navCenterY <= rect.bottom
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
    // Check on mount
    checkBackground();

    // Check on scroll
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

  // Re-check when route changes
  useEffect(() => {
    // Small delay to let new page render
    const timer = setTimeout(checkBackground, 100);
    return () => clearTimeout(timer);
  }, [pathname, checkBackground]);

  return (
    <nav
      ref={navRef}
      className="fixed right-6 md:right-12 top-1/2 -translate-y-1/2 z-50 flex-col items-end space-y-6 text-right select-none hidden md:flex transition-colors duration-500"
    >
      {navItems.map((item) => {
        const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
        return (
          <Link
            key={item.label}
            href={item.href}
            className="group relative flex items-center py-1 pl-4"
          >
            <span
              className={`text-sm md:text-base font-black tracking-[0.25em] uppercase font-sans transition-all duration-500 block
              ${isActive
                ? isDark ? "text-white scale-105" : "text-[#0c0d12] scale-105"
                : isDark ? "text-white/40 hover:text-white/90" : "text-[#0c0d12]/40 hover:text-[#0c0d12]/90"
              }`}
            >
              {item.label}
            </span>

            <span
              className={`w-1.5 h-1.5 rounded-full ml-4 transition-all duration-500
              ${isActive
                ? isDark
                  ? "bg-white scale-125 shadow-[0_0_8px_#fff]"
                  : "bg-[#0c0d12] scale-125 shadow-[0_0_8px_rgba(0,0,0,0.3)]"
                : isDark
                  ? "bg-white/20 group-hover:bg-white/60"
                  : "bg-[#0c0d12]/20 group-hover:bg-[#0c0d12]/60"
              }`}
            ></span>
          </Link>
        );
      })}
    </nav>
  );
}

export default RightVerticalNavbar;
