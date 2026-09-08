"use client";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function FloatingSocialWidget() {
  const socials = [
    {
      name: "Instagram",
      icon: <Instagram size={18} />,
      url: "https://www.instagram.com/dee_divine_propinfra/",
      color: "hover:text-white hover:bg-[#E4405F] hover:border-[#E4405F]",
    },
    {
      name: "WhatsApp",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      ),
      url: "#",
      color: "hover:text-white hover:bg-[#25D366] hover:border-[#25D366]",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={18} />,
      url: "https://www.linkedin.com/company/dee-divine-propinfra-pvt-ltd/",
      color: "hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2]",
    },
    {
      name: "Twitter / X",
      icon: <Twitter size={18} />,
      url: "#",
      color: "hover:text-white hover:bg-black hover:border-black",
    },
    {
      name: "Facebook",
      icon: <Facebook size={18} />,
      url: "https://www.facebook.com/profile.php?id=61572325678798",
      color: "hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2]",
    },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
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
              className={`w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/90 backdrop-blur-sm border border-neutral-200 shadow-sm flex items-center justify-center text-[#e63946] transition-all duration-300 hover:scale-110 hover:shadow-md ${social.color}`}
            >
              {social.icon}
            </a>
            
            {/* Tooltip */}
            <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-2 py-1 bg-[#e63946] text-white text-[10px] md:text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
              {social.name}
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-[4px] border-transparent border-l-[#e63946]" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
