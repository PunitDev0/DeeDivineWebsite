"use client";

import { useEffect, useRef, useCallback } from "react";
import { Quote, Star } from "lucide-react";

export default function TestimonialsSlider() {
  const testimonials = [
    {
      name: "Monu Boyg",
      rating: 5,
      quote: "I recently had the pleasure of working with DEE DIVINE PROPINFRA PVT LTD, and I couldn't be more satisfied with the experience. From our initial consultation to the final closing, their team demonstrated unparalleled professionalism, transparency, and dedication."
    },
    {
      name: "Kamalika Patra",
      rating: 5,
      quote: "Owners of the company are gems. When you meet them you know the difference. If you are looking for good investment and real estate consultantcy , I recommend this company,one should try once they will never disappoint you."
    },
    {
      name: "Sagar Kumar",
      rating: 5,
      quote: "Dee divine prop infra is a Good real estate company with professional guidelines and Positive environment."
    },
    {
      name: "Kamal Marichi",
      rating: 5,
      quote: "Very professional and experienced team\nhad a great experience with them"
    },
    {
      name: "Prerna Saurabh",
      rating: 5,
      quote: "Great experience with this real estate company in Gurgaon. The team is professional, responsive, and transparent throughout the process. They understand the market well and provide genuine guidance."
    },
    {
      name: "Harpreet Kaur",
      rating: 5,
      quote: "Had a great experience with the plots and the overall service. The staff was extremely helpful, polite, and responsive throughout.\n\nReally appreciate the excellent customer service and professionalism of the team."
    },
    {
      name: "Jeenab Vohra",
      rating: 5,
      quote: "Great experience with dee divine group. The team was professional, transparent,and helpful thoroughly the plot-buying process . Highly recommended for property and plot investments.👍"
    },
    {
      name: "Punit Dev",
      rating: 5,
      quote: "it's a trusted real estate company focused on quality projects, transparent service, and valuable property investment opportunities"
    },
    {
      name: "RITIK KUMAR",
      rating: 5,
      quote: "They are dealing with the deen dyal plot their service is best and all supporting sales people are very polite 🙏"
    },
    {
      name: "Ankit",
      rating: 5,
      quote: "The experience with the company was very good. The team is supportive and transparency and professionalism was seen in the dealing of plots."
    }
  ];

  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);
  const isHovering = useRef(false);
  const scrollPos = useRef(0);
  const jumpPointRef = useRef(0);
  const lastTimeRef = useRef(0);

  // Duplicate testimonials for seamless looping
  const displayTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const calculateJumpPoint = () => {
      // The jump point is the distance from the first item of the first set
      // to the first item of the second set.
      if (container.children.length > testimonials.length) {
        const firstItem = container.children[0];
        const firstItemSecondSet = container.children[testimonials.length];
        jumpPointRef.current = firstItemSecondSet.offsetLeft - firstItem.offsetLeft;
      }
    };

    calculateJumpPoint();

    window.addEventListener('resize', calculateJumpPoint);
    return () => window.removeEventListener('resize', calculateJumpPoint);
  }, [testimonials.length]);

  const startAutoScroll = useCallback(() => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);

    lastTimeRef.current = performance.now();

    const scroll = (time) => {
      const container = scrollContainerRef.current;

      if (!container || !isHovering.current) return;

      const deltaTime = time - lastTimeRef.current;
      lastTimeRef.current = time;

      // Adjust speed: ~0.04 pixels per millisecond (slow and smooth)
      const scrollAmount = 0.04 * deltaTime;

      scrollPos.current += scrollAmount;

      const jumpPoint = jumpPointRef.current;

      // Seamlessly jump back when we've scrolled exactly one set of testimonials
      if (jumpPoint > 0 && scrollPos.current >= jumpPoint) {
        scrollPos.current -= jumpPoint;
      }

      container.scrollLeft = scrollPos.current;

      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);
  }, []);

  const stopAutoScroll = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      // Synchronize manual scrolling position when auto-scroll is not active
      if (!isHovering.current) {
        scrollPos.current = container.scrollLeft;
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    // Only enable auto scroll on devices that support hover
    if (window.matchMedia && window.matchMedia('(hover: hover)').matches) {
      isHovering.current = true;
      startAutoScroll();
    }
  };

  const handleMouseLeave = () => {
    isHovering.current = false;
    stopAutoScroll();
  };

  return (
    <section className="relative bg-[#fcfcfc] py-20 md:py-28 px-4 sm:px-6 md:px-16 overflow-hidden">
      {/* Subtle Premium Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(217,35,62,0.03)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* Title */}
        <div className="flex flex-col items-center mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-[2px] bg-gradient-to-r from-[#8F1230] to-[#FF5A67]" />
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.35em] bg-gradient-to-r from-[#8F1230] to-[#FF5A67] bg-clip-text text-transparent drop-shadow-sm">
              Testimonial
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0c0d12] px-2">
            What Clients Say About Us
          </h2>
        </div>

        {/* Scrollable Container with Fade Masks */}
        <div className="relative w-full mt-8">
          {/* Edge Fade Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-[#fcfcfc] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-[#fcfcfc] to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollContainerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex gap-6 py-5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] touch-pan-x"
          >
            {displayTestimonials.map((t, index) => {
              const isRed = index % 2 !== 0;

              return (
                <div
                  key={index}
                  className="shrink-0 basis-[90%] sm:basis-[48%] md:basis-[31%] relative group cursor-grab active:cursor-grabbing"
                >
                  <div
                    className={`p-8 text-left h-full flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.04)] group-hover:-translate-y-1.5 transition-all duration-500 rounded-3xl border relative overflow-hidden ${
                      isRed
                        ? "bg-gradient-to-br from-[#8F1230]/95 via-[#D9233E]/90 to-[#FF5A67]/80 backdrop-blur-xl border-[#FF5A67]/30 group-hover:border-[#FF5A67]/50 group-hover:shadow-[0_12px_40px_rgba(217,35,62,0.2)]"
                        : "bg-white/70 backdrop-blur-xl border-white/60 group-hover:border-[#D9233E]/20 group-hover:shadow-[0_12px_40px_rgba(217,35,62,0.08)]"
                    }`}
                  >
                    {/* Inner Glass Highlight for Red Cards */}
                    {isRed && (
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.15)_0%,transparent_60%)] pointer-events-none" />
                    )}

                    <div className="relative z-10">
                      <div className="flex justify-between items-center mb-6">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${
                            isRed
                              ? "bg-white/10 text-white border border-white/20"
                              : "bg-gradient-to-br from-[#8F1230]/10 to-[#FF5A67]/10 text-[#D9233E] border border-[#D9233E]/20"
                          }`}
                        >
                          <Quote size={20} />
                        </div>
                        <div className="flex flex-col items-end gap-1.5">
                          <span className="text-xs font-black uppercase tracking-widest text-[#0c0d12]">
                            Google Review
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="flex gap-1">
                              {[...Array(t.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    isRed
                                      ? "fill-white/80 text-white/80"
                                      : "fill-[#D9233E]/80 text-[#D9233E]/80"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className={`text-[11px] font-black tracking-wide ${isRed ? 'text-white/90' : 'text-[#0c0d12]/70'}`}>
                              5/5
                            </span>
                          </div>
                        </div>
                      </div>
                      <p
                        className={`text-sm md:text-[15px] leading-relaxed italic whitespace-pre-line ${
                          isRed ? "text-[#f9f9fa]" : "text-[#5F6065]"
                        }`}
                      >
                        “{t.quote}”
                      </p>
                    </div>

                    <div className="relative z-10 mt-8 pt-5">
                      <div className={`absolute top-0 left-0 w-12 h-[1px] ${isRed ? "bg-white/20" : "bg-neutral-200"}`} />
                      <h4
                        className={`font-black text-[13px] uppercase tracking-wider ${
                          isRed ? "text-white" : "text-[#0c0d12]"
                        }`}
                      >
                        {t.name}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* View More Reviews Button */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://www.google.com/search?q=dee+divine+group&rlz=1C5CHFA_enIN994IN996&oq=dee+divine+&gs_lcrp=EgZjaHJvbWUqBggBECMYJzIGCAAQRRg5MgYIARAjGCcyBggCECMYJzIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABNIBCTc3ODBqMGoxNagCCLACAfEFMzo8dAFP0fs&sourceid=chrome&source=chrome.rb&ie=UTF-8#sv=CAESzQEKuQEStgEKd0FKaVQ0dEtPOWlHakI0N1RKNlZwT1htbU1TenZ6dWlJdjBVM3U0MG02czZaU3pzOUlmR2FqVlBzMk54M0RjOXJHNzd5bExpOVBYWWR4R0sxODZCcm1MT0VwalBKNkVucm9VUG53Zlg5RThHNnZpdGRpalMtTU9nEhdWTDZmYXJ5S0pmaWI0LUVQdXIzb3FRbxoiQURzcjlmUVlPbUdIVXR1Y0Q4X1pTMWVOVHVmRnhiRFd6URIEODA1MRoBMyoAMAA4AUAAGAAg5_KuuwVKAhAC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#8F1230] via-[#D9233E] to-[#FF5A67] hover:shadow-[0_8px_25px_rgba(217,35,62,0.4)] hover:-translate-y-[2px] text-white rounded-xl text-xs font-black uppercase tracking-[0.2em] transition-all duration-300"
          >
            View More Reviews →
          </a>
        </div>
      </div>
    </section>
  );
}
