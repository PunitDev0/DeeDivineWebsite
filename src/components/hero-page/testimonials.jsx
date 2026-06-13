"use client";

import { Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function TestimonialsSlider() {
  const testimonials = [
    {
      quote:
        "I had been searching for a trustworthy real estate company for months, and I’m so glad I found Dee Divine. Their transparency and ethical approach gave me the confidence I needed to invest. Highly recommended for first-time buyers who want clarity and support at every step.",
      name: "S. Nidhi",
    },
    {
      quote:
        "Dee Divine PropInfra Pvt. Ltd. helped me sell my old property and upgrade to a luxurious flat within my budget. The team offered valuable market insights and negotiated the best deal for me. Excellent service and great people to work with!",
      name: "Arun Verma",
    },
    {
      quote:
        "What impressed me most about Dee Divine is their commitment to customer satisfaction. They guided me patiently through multiple options and never pressured me to make a quick decision. I genuinely felt they had my best interests at heart. Kudos to the entire team!",
      name: "Megha Joshi",
    },
    {
      quote:
        "Exceptional professionalism and genuine care for clients. Dee Divine went above and beyond to ensure my experience was smooth and hassle-free. Highly recommended!",
      name: "Rahul Singh",
    },
    {
      quote:
        "The team’s dedication and honesty really stood out. From property selection to documentation, Dee Divine made everything transparent and easy.",
      name: "Priya Sharma",
    },
  ];

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

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="flex gap-6 py-5">
            {testimonials.map((t, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 md:basis-1/3"
              >
                <div className="bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 p-8 text-left h-full flex flex-col justify-between">
                  <div>
                    <Quote className="w-6 h-6 text-red-500 mb-4" />
                    <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed italic">
                      “{t.quote}”
                    </p>
                  </div>
                  
                  <h4 className="font-black text-xs uppercase tracking-wider text-[#0c0d12] mt-6 border-t border-neutral-100 pt-4">
                    {t.name}
                  </h4>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
