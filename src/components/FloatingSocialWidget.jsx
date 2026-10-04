"use client";

import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function FloatingSocialWidget() {
  const socials = [
    {
      name: "Instagram",
      icon: <Instagram size={18} stroke="url(#socialGradient)" />,
      url: "https://www.instagram.com/dee_divine_propinfra/",
    },
    {
      name: "WhatsApp",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="url(#socialGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
      url: "https://wa.me/919211494111",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={18} stroke="url(#socialGradient)" />,
      url: "https://www.linkedin.com/company/dee-divine-propinfra-pvt-ltd/",
    },

    {
      name: "Facebook",
      icon: <Facebook size={18} stroke="url(#socialGradient)" />,
      url: "https://www.facebook.com/profile.php?id=61572325678798",
    },
  ];

  return (
    <>
      {/* SVG Gradient Definition */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <linearGradient id="socialGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B51F3B" />
            <stop offset="50%" stopColor="#E52D4F" />
            <stop offset="100%" stopColor="#FF5C68" />
          </linearGradient>
        </defs>
      </svg>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }
      `}} />
      <div className="fixed bottom-6 right-6 z-[99] flex flex-col gap-3 pointer-events-none">
        {socials.map((social, i) => (
          <div
            key={social.name}
            className="relative group animate-float-gentle pointer-events-auto"
            style={{ animationDelay: `${i * 0.4}s` }}
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200/60 shadow-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_15px_rgba(229,45,79,0.25)] hover:border-[#E52D4F]/40 focus:outline-none focus:scale-110 focus:shadow-[0_4px_15px_rgba(229,45,79,0.25)] focus:border-[#E52D4F]/40 active:scale-105"
            >
              {social.icon}
            </a>

            {/* Tooltip */}
            <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 bg-gradient-to-r from-[#B51F3B] to-[#E52D4F] text-white text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-[0_4px_10px_rgba(229,45,79,0.2)]">
              {social.name}
              <div className="absolute top-1/2 -right-[4px] -translate-y-1/2 border-[5px] border-transparent border-l-[#E52D4F]" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
