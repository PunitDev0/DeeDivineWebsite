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
  "/assets/uploaded_slide1.jpg",
  "/assets/uploaded_slide2.jpg",
  "/assets/uploaded_slide3.jpg",
  "/assets/uploaded_slide4.jpg",
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
      price: "₹1.2 Cr*",
      location: "Sector 35 Gurgaon",
      image: "/assets/aaranya.jpeg",
    },
    {
      id: 2,
      title: "Elite Home + 02 Homes",
      type: "Residential",
      price: "₹1.5 Cr*",
      location: "Sector 24 Gurgaon",
      image: "/assets/elite.jpg",
    },
    {
      id: 3,
      title: "Solitaire - 70",
      type: "Residential",
      price: "₹1 Cr*",
      location: "Sector 72 Gurgaon",
      image: "/assets/solitaire.jpg",
    },
    {
      id: 4,
      title: "Aura Avenue",
      type: "Residential",
      price: "₹1.7 Cr*",
      location: "Sector 79 Gurgaon",
      image: "/assets/AuraAvenue.jpg",
    },
    {
      id: 5,
      title: "Om Dream Homes",
      type: "RESIDENTIAL",
      price: "₹ 1 Cr*",
      location: "Sec-27 Jhajjar",
      image: "/assets/om dream home.webp",
    },
    {
      id: 6,
      title: "Shri Krishna Heritage",
      type: "RESIDENTIAL",
      price: "₹ 1 Cr*",
      location: "Sector 9A, Jhajjar",
      image: "/assets/Shri-Krishna-Heritage-jhajjar.webp",
    },
  ];

  const PropertyCard = ({ property }) => (
    <div className="group relative bg-white/70 backdrop-blur-xl border border-white/40 flex flex-col overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(217,35,62,0.12)] hover:-translate-y-1 hover:border-[#D9233E]/20 transition-all duration-500 h-full rounded-3xl p-3 sm:p-4">
      {/* Subtle red gradient glow inside the card on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF5A67]/0 to-[#8F1230]/0 group-hover:from-[#FF5A67]/5 group-hover:to-[#8F1230]/5 transition-colors duration-500 rounded-3xl pointer-events-none z-0"></div>

      {/* Image wrapper */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200 rounded-2xl z-10">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Premium Red Glass Badge */}
        <div className="absolute top-3 right-3 bg-gradient-to-r from-[#8F1230]/90 to-[#D9233E]/90 backdrop-blur-md px-3.5 py-1.5 border border-white/20 text-[9px] uppercase tracking-widest text-white font-black rounded-full shadow-[0_4px_12px_rgba(217,35,62,0.4)]">
          {property.type}
        </div>
      </div>

      {/* Info contents */}
      <div className="pt-5 pb-2 px-2 flex-1 flex flex-col justify-between relative z-10">
        <div>
          <h3 className="text-[14px] sm:text-[15px] font-black uppercase tracking-wider text-[#0c0d12] mb-1.5 line-clamp-1 transition-colors duration-300">
            {property.title}
          </h3>
          <div className="flex items-center gap-1.5 text-neutral-500 text-xs mt-2">
            <MapPin size={13} className="text-[#D9233E]" />
            <span className="truncate font-medium">{property.location}</span>
          </div>
        </div>

        <div className="border-t border-neutral-200/60 mt-5 pt-4 flex items-center justify-between">
          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Starting Price</span>
          <span className="text-[13px] sm:text-[14px] font-black bg-gradient-to-r from-[#8F1230] to-[#FF5A67] bg-clip-text text-transparent">{property.price}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="w-full flex flex-col bg-[#f8f9fa] border-b border-black/5">
      {/* 🏠 Main Hero Banner */}
      <section className="relative w-full min-h-[100svh] flex items-center overflow-hidden bg-neutral-900 z-10 border-b border-white/5 pt-32 pb-16">

        {/* Background Image Slideshow with smooth crossfade */}
        {bgImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${index === activeBg ? "opacity-100 scale-100" : "opacity-0 scale-105"
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
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-16 flex flex-col justify-end h-full pb-10 sm:pb-14 md:pb-20 pt-8 sm:pt-10 md:pt-[50px]">
          <div className="max-w-3xl text-left flex flex-col space-y-6 sm:space-y-10">

            {/* Custom reveal heading */}
            <h1 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-[72px] tracking-tight text-white uppercase leading-[1.15] overflow-hidden drop-shadow-md">
              <span className="hero-title-line block opacity-0">Premium Real Estate Projects</span>
              <span className="hero-title-line inline-block opacity-0 bg-gradient-to-r from-[#8F1230] via-[#FF5A67] to-[#D9233E] bg-clip-text text-transparent pb-2 mt-1">Across India</span>
            </h1>

            {/* Description Text */}
            <p className="hero-fade-in text-sm sm:text-base text-neutral-200 font-light tracking-wide leading-relaxed max-w-2xl opacity-0">
              Explore thoughtfully planned residential and investment opportunities across multiple high-growth locations.
            </p>

            {/* Sub-heading badge moved below description */}
            <div className="hero-badge flex items-start space-x-3 sm:space-x-4 opacity-0 pt-2 sm:pt-4">
              <span className="w-8 h-[1px] bg-red-500 shrink-0 mt-2"></span>
              <span className="text-[10px] sm:text-xs font-extrabold tracking-widest text-neutral-300 uppercase leading-relaxed max-w-lg">
                Trusted Projects Across <span className="text-white font-black">Haryana, Delhi NCR, Uttar Pradesh, Punjab, Madhya Pradesh, Jharkhand, Gujarat, Rajasthan & Goa</span>
              </span>
            </div>

            {/* Premium Glassmorphism Info Panel */}
            <div className="hero-fade-in flex flex-col sm:flex-row w-full max-w-full md:max-w-[850px] gap-6 sm:gap-12 mt-12 sm:mt-20 p-6 sm:p-10 bg-black/40 backdrop-blur-xl border border-white/20 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] opacity-0 relative overflow-hidden">
              {/* Subtle inner highlight */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-3xl"></div>

              <div className="relative z-10 flex flex-col justify-center flex-1">
                <p className="text-[10px] sm:text-[11px] font-medium text-white/60 tracking-[0.2em] uppercase mb-2">Expertise</p>
                <p className="text-sm sm:text-base font-black text-white tracking-widest uppercase">Plots & Homes</p>
              </div>

              <div className="relative z-10 flex flex-col justify-center flex-1 border-t sm:border-t-0 sm:border-l border-white/20 pt-6 sm:pt-0 sm:pl-10">
                <p className="text-[10px] sm:text-[11px] font-medium text-white/60 tracking-[0.2em] uppercase mb-2">Status</p>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D9233E]/20 to-[#FF5A67]/10 border border-[#D9233E]/40 rounded-full px-4 py-2 backdrop-blur-sm self-start">
                  <span className="w-3 h-[2px] rounded-full bg-gradient-to-r from-[#FF5A67] to-[#D9233E] shadow-[0_0_8px_rgba(217,35,62,0.5)]"></span>
                  <span className="text-[10px] font-black text-[#f7ebce] tracking-widest uppercase mt-px">RERA Appr.</span>
                </div>
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

          {/* Mobile Swiper */}
          <div className="md:hidden">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={1.2}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              className="w-full"
            >
              {properties.map((property) => (
                <SwiperSlide key={property.id}>
                  <PropertyCard property={property} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop & Tablet Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <div key={property.id}>
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
