"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { MapPin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/navigation";

const bgImages = [
  "/assets/heroslide2.webp",
  "/assets/heroslide3.webp",
  "/assets/heroslide4.webp",
  "/assets/heroslide5.webp",
];

export default function HeroSection() {
  const [activeBg, setActiveBg] = useState(0);
  const containerRef = useRef(null);

  // Background slideshow timer (crossfade)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Premium text entrance animation on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Badge slide-in
      gsap.fromTo(
        ".hero-badge",
        { opacity: 0, x: -35 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power3.out" }
      );

      // 2. Heading lines reveal
      gsap.fromTo(
        ".hero-title-line",
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          stagger: 0.15, 
          ease: "power4.out",
          delay: 0.1
        }
      );

      // 3. Subtext and metadata fade-in
      gsap.fromTo(
        ".hero-fade-in",
        { opacity: 0, y: 25 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.12, 
          ease: "power3.out", 
          delay: 0.5 
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const properties = [
    {
      id: 1,
      title: "Aaranya Greens",
      type: "Plots",
      price: "₹ 7.25 Cr*",
      location: "Sector 35 Gurgaon",
      image: "/assets/aaranya.jpeg",
    },
    {
      id: 2,
      title: "Elite Home + 02 Homes",
      type: "Residential",
      price: "₹ 5.8 Cr*",
      location: "Sector 24 Gurgaon",
      image: "/assets/elite.jpg",
    },
    {
      id: 3,
      title: "Solitaire - 70",
      type: "Residential",
      price: "₹ 2.9 Cr*",
      location: "Sector 72 Gurgaon",
      image: "/assets/solitaire.jpg",
    },
    {
      id: 4,
      title: "Aura Avenue",
      type: "Residential",
      price: "₹ 1.75 Cr*",
      location: "Sector 79 Gurgaon",
      image: "/assets/AuraAvenue.jpg",
    },
  ];

  return (
    <div ref={containerRef} className="w-full flex flex-col bg-[#f8f9fa] border-b border-black/5">
      {/* 🏠 Main Hero Banner */}
      <section className="relative w-full h-[78vh] min-h-[550px] flex items-center overflow-hidden bg-neutral-900 z-10 border-b border-white/5">
        
        {/* Background Image Slideshow with smooth crossfade */}
        {bgImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              index === activeBg ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={{ transitionProperty: "opacity, transform" }}
          >
            <Image
              src={src}
              alt={`Luxury Property Slide ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover brightness-[0.38] contrast-105 z-0"
            />
          </div>
        ))}

        {/* Visual Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-1"></div>

        {/* Text Content Block */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 flex flex-col justify-end h-full pb-16">
          <div className="max-w-2xl text-left space-y-6">
            
            {/* Sub-heading badge */}
            <div className="hero-badge flex items-center space-x-3 opacity-0">
              <span className="w-8 h-[1px] bg-red-500"></span>
              <span className="text-[10px] font-extrabold tracking-[0.4em] text-neutral-300 uppercase">
                Trusted Real Estate Consultants
              </span>
            </div>

            {/* Custom reveal heading */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-[1.08] overflow-hidden">
              <span className="hero-title-line block opacity-0">Your Trusted Real Estate Partner</span>
              <span className="hero-title-line block opacity-0 text-red-500">in Delhi NCR (Gurgaon)</span>
            </h1>
            
            {/* Description Text */}
            <p className="hero-fade-in text-xs sm:text-sm text-neutral-300 font-medium tracking-wide leading-relaxed max-w-xl opacity-0">
              Dee Divine Propinfra offers trusted real estate consulting in Delhi NCR & Gurgaon — RERA approved plots, verified listings & expert guidance. Book a consultation today.
            </p>

            {/* Minimal Grid Data Table */}
            <div className="hero-fade-in grid grid-cols-3 gap-6 pt-6 border-t border-white/10 max-w-xs sm:max-w-sm opacity-0">
              <div>
                <p className="text-[9px] font-bold text-neutral-500 tracking-widest uppercase mb-1">Expertise</p>
                <p className="text-[11px] font-black text-white tracking-wide uppercase">Plots & Homes</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-neutral-500 tracking-widest uppercase mb-1">Focus</p>
                <p className="text-[11px] font-black text-white tracking-wide uppercase">Gurugram</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-neutral-500 tracking-widest uppercase mb-1">Status</p>
                <p className="text-[11px] font-black text-emerald-400 tracking-wide uppercase flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
                  RERA Appr.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🏢 Property Carousel Strip */}
      <div className="py-12 bg-[#f8f9fa] border-t border-black/5 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="w-4 h-[2px] bg-red-500"></span>
              <span className="text-[10px] font-extrabold tracking-[0.3em] uppercase text-neutral-400">
                Premium Collection
              </span>
            </div>
            <span className="text-[11px] font-bold tracking-wider text-neutral-400 uppercase">
              Swipe to explore
            </span>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1.2}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="w-full"
          >
            {properties.map((property) => (
              <SwiperSlide key={property.id}>
                <div className="group bg-white border border-neutral-100 flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  
                  {/* Image wrapper */}
                  <div className="relative aspect-video w-full overflow-hidden bg-neutral-200">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-[#0c0d12]/80 backdrop-blur-sm px-3 py-1 border border-white/10 text-[9px] uppercase tracking-wider text-white font-bold">
                      {property.type}
                    </div>
                  </div>

                  {/* Info contents */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-[13px] font-black uppercase tracking-wider text-[#0c0d12] mb-1.5 truncate">
                        {property.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-neutral-500 text-xs mt-1">
                        <MapPin size={12} className="text-red-500" />
                        <span className="truncate">{property.location}</span>
                      </div>
                    </div>
                    
                    <div className="border-t border-neutral-100 mt-4 pt-3 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Starting Price</span>
                      <span className="text-xs font-black text-red-500">{property.price}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
