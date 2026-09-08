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
    <section className="bg-[#f8f9fa] py-24 px-6 md:px-16 border-t border-black/5">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-red-500" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#e63946]">
              Testimonial
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0c0d12]">
            What Clients Say About Us
          </h2>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollContainerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex gap-6 py-5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] touch-pan-x"
        >
          {displayTestimonials.map((t, index) => (
            <div
              key={index}
              className="shrink-0 basis-full sm:basis-1/2 md:basis-1/3"
            >
              <div className="bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 p-8 text-left h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="w-6 h-6 text-red-500" />
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#fbbc04] text-[#fbbc04]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed italic whitespace-pre-line">
                    “{t.quote}”
                  </p>
                </div>
                
                <h4 className="font-black text-xs uppercase tracking-wider text-[#0c0d12] mt-6 border-t border-neutral-100 pt-4">
                  {t.name}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* View More Reviews Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://www.google.com/search?q=dee+divine+group&rlz=1C5CHFA_enIN994IN996&oq=dee+divine+&gs_lcrp=EgZjaHJvbWUqBggBECMYJzIGCAAQRRg5MgYIARAjGCcyBggCECMYJzIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABNIBCTc3ODBqMGoxNagCCLACAfEFMzo8dAFP0fs&sourceid=chrome&source=chrome.rb&ie=UTF-8#sv=CAESzQEKuQEStgEKd0FKaVQ0dEtPOWlHakI0N1RKNlZwT1htbU1TenZ6dWlJdjBVM3U0MG02czZaU3pzOUlmR2FqVlBzMk54M0RjOXJHNzd5bExpOVBYWWR4R0sxODZCcm1MT0VwalBKNkVucm9VUG53Zlg5RThHNnZpdGRpalMtTU9nEhdWTDZmYXJ5S0pmaWI0LUVQdXIzb3FRbxoiQURzcjlmUVlPbUdIVXR1Y0Q4X1pTMWVOVHVmRnhiRFd6URIEODA1MRoBMyoAMAA4AUAAGAAg5_KuuwVKAhAC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#0c0d12] hover:bg-red-600 text-white text-sm font-black uppercase tracking-wider transition-colors duration-300 rounded-full"
          >
            View More Reviews →
          </a>
        </div>
      </div>
    </section>
  );
}
