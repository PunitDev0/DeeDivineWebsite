"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PhoneCall, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on link click
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-lg bg-white/80 shadow-md transition-transform duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center" aria-label="Home">
            <Image
              unoptimized
              src="/assets/logo.webp"
              width={500}
              height={500}
              alt="DEE DIVINE Logo"
              className="object-contain sm:w-52 w-32 "
              priority
            />
          </Link>
          {/* <p className="text-sm sm:text-base w-[100px] sm:w-fit font-semibold text-gray-800">
            DEE DIVINE PROPINFRA
          </p> */}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-[#A13EA1] transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#A13EA1] transition-colors">
            About
          </Link>
          {/* <Link href="/projects" className="hover:text-[#A13EA1] transition-colors">
            Projects
          </Link> */}
          <Link href="/career" className="hover:text-[#A13EA1] transition-colors">
            Career
          </Link>
          <Link href="/contact" className="hover:text-[#A13EA1] transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* Phone Number Button (Desktop) */}
        <div className="hidden sm:flex">
          <Button className="flex items-center gap-2 bg-[#A13EA1] hover:bg-[#8b2b8b] text-white font-semibold px-4 py-2 text-sm shadow-md transition-all">
            <PhoneCall className="w-4 h-4" />
            +91-9211494111
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-inner transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-3 text-gray-800 text-sm font-medium">
          <Link href="/" onClick={handleLinkClick} className="hover:text-[#A13EA1]">
            Home
          </Link>
          <Link href="/about" onClick={handleLinkClick} className="hover:text-[#A13EA1]">
            About
          </Link>
          <Link href="/projects" onClick={handleLinkClick} className="hover:text-[#A13EA1]">
            Projects
          </Link>
          <Link href="/career" onClick={handleLinkClick} className="hover:text-[#A13EA1]">
            Career
          </Link>
          <Link href="/contact" onClick={handleLinkClick} className="hover:text-[#A13EA1]">
            Contact Us
          </Link>

          <Button className="mt-2 w-full flex items-center justify-center gap-2 bg-[#A13EA1] hover:bg-[#8b2b8b] text-white font-semibold px-4 py-2 text-sm shadow-md">
            <PhoneCall className="w-4 h-4" />
            +91-9211494111
          </Button>
        </nav>
      </div>
    </header>
  );
}
