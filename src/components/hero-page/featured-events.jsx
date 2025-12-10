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
      organizer: "Set Your Vendor",
      image:
        "/assets/diwali-event.JPG",
    },
    // {
    //   id: 2,
    //   title: "Business Growth Summit 2023",
    //   date: "Wed, 25 Oct 2023",
    //   location: "Mumbai, India",
    //   organizer: "Set Your Vendor",
    //   image:
    //     "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=900&q=60",
    // },
    // {
    //   id: 3,
    //   title: "Entrepreneurship Bootcamp",
    //   date: "Sat, 16 Mar 2024",
    //   location: "Bangalore, India",
    //   organizer: "Set Your Vendor",
    //   image:
    //     "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=60",
    // },
    // {
    //   id: 4,
    //   title: "Women in Tech Conference",
    //   date: "Tue, 05 Dec 2024",
    //   location: "Gurgaon, India",
    //   organizer: "Set Your Vendor",
    //   image:
    //     "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=60",
    // },
    // {
    //   id: 5,
    //   title: "Digital Marketing Workshop",
    //   date: "Fri, 22 Feb 2025",
    //   location: "Pune, India",
    //   organizer: "Set Your Vendor",
    //   image:
    //     "https://images.unsplash.com/photo-1515165562835-c4c1b6c6f46b?auto=format&fit=crop&w=900&q=60",
    // },
  ];

  return (
    <section className="relative overflow-hidden sm:-mt-[250px]">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12">
          <p className="text-pink-600 font-semibold text-sm mb-2">
            Past Events
          </p>
          <h2 className="text-4xl font-bold text-gray-800">
            Events <span className="text-purple-700">We’ve Organized</span>
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            A glimpse of the wonderful moments and milestones our company has achieved.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  unoptimized
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {event.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                  <Calendar size={16} />
                  <span>{event.date}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>

                {/* <p className="text-sm text-gray-600 mb-3">
                  Organized by{" "}
                  <span className="text-pink-600 font-semibold">
                    {event.organizer}
                  </span>
                </p> */}

                {/* <button className="w-full mt-2 bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-semibold py-2.5 rounded-lg transition">
                  View Highlights
                </button> */}
              </div> 
            </div>
          ))}
        </div>

        {/* ===== R&R Events Section ===== */}
        <div className="mt-20 text-center">
          <p className="text-pink-600 font-semibold text-sm mb-2">R&R Event</p>
          <h3 className="text-3xl font-bold text-gray-800 mb-3">
            Rewards & Recognition Moments
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
            Celebrating the achievements, hard work, and milestones of our team.  
            Here's a glimpse into our R&R event — moments that inspire and connect us.
          </p>

          {/* ===== Autoplay YouTube Video (muted) ===== */}
          <div className="w-full flex justify-center">
            <div className="w-full aspect-video overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/JrZN-KXlqb0?si=jtu53wHLrj75O-Yj&autoplay=1&mute=1&loop=1&playlist=JrZN-KXlqb0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <p className="text-gray-400 text-xs mt-3">
            *(Video plays automatically — unmute to enjoy the audio)*
          </p>
        </div>
      </div>
    </section>
  );
}
