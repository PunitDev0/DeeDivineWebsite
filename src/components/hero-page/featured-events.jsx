"use client";

import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

export default function FeaturedEvents() {
  const events = [
    {
      id: 1,
      title: "R&R and Diwali Event",
      date: "18 Oct 2025",
      location: "Gurugram, Haryana",
      image: "/assets/diwali-event.JPG",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-red-500" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#e63946]">
              Past Events
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0c0d12]">
            Events We’ve Organized
          </h2>
          <p className="text-neutral-500 text-sm leading-relaxed max-w-md mt-4">
            A glimpse of the wonderful moments and milestones our company has achieved.
          </p>
        </div>

        {/* Event Cards */}
        <div className="flex justify-center mb-20">
          {events.map((event) => (
            <div
              key={event.id}
              className="group bg-white border border-neutral-100 flex flex-col sm:flex-row overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 max-w-2xl w-full"
            >
              {/* Image wrapper */}
              <div className="relative w-full sm:w-1/2 h-56 bg-neutral-200">
                <Image
                  unoptimized
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-all duration-500"
                />
              </div>

              {/* Contents */}
              <div className="p-8 sm:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-[14px] font-black uppercase tracking-wider text-[#0c0d12] mb-3">
                    {event.title}
                  </h3>

                  <div className="space-y-2 text-xs text-neutral-400 font-medium">
                    <div className="flex items-center gap-2">
                      <Calendar size={13} className="text-red-500" />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={13} className="text-red-500" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* R&R Events Video Section */}
        <div className="mt-16 text-center border-t border-neutral-100 pt-20">
          <div className="flex flex-col items-center mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-red-500" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#e63946]">
                R&R Event
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#0c0d12]">
              Rewards & Recognition Moments
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-2xl mt-4">
              Celebrating the achievements, hard work, and milestones of our team. Here's a glimpse into our R&R event — moments that inspire and connect us.
            </p>
          </div>

          {/* Autoplay muted video */}
          <div className="w-full flex justify-center max-w-4xl mx-auto">
            <div className="w-full aspect-video overflow-hidden border border-neutral-200 shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/JrZN-KXlqb0?si=jtu53wHLrj75O-Yj&autoplay=1&mute=1&loop=1&playlist=JrZN-KXlqb0"
                title="R&R Video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <p className="text-neutral-400 text-[10px] uppercase tracking-wider mt-4">
            *(Video plays automatically — unmute to enjoy audio)*
          </p>
        </div>

      </div>
    </section>
  );
}
