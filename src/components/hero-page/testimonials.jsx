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
    <section className="bg-purple-200 py-16 px-6 md:px-10 z-[1000]">
       
      <div className="max-w-6xl mx-auto text-center">
        {/* Subtitle */}
        <div className="mb-3">
          <span className="bg-[#A13EA1] text-white text-xs tracking-wider font-semibold uppercase px-3 py-1 ">
            Testimonial
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl  text-gray-900 ">
          What Clients Say About Us
        </h2>

        {/* Carousel (No autoplay) */}
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
                <div className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all p-8 text-left h-full flex flex-col justify-between">
                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-[#A13EA1] mb-3" />
                    <p className="text-gray-700 text-sm leading-relaxed italic">
                      “{t.quote}”
                    </p>
                  </div>
                  <h4 className="font-semibold text-sm text-[#A13EA1] mt-4">
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
