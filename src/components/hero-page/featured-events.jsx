"use client";

import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

export default function FeaturedEvents() {
  // ✅ Replace with past events
  const events = [
    {
      id: 1,
      title: "Annual Tech Meetup 2023",
      date: "Mon, 10 Jul 2023",
      location: "New Delhi, India",
      organizer: "Set Your Vendor",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 2,
      title: "Business Growth Summit 2023",
      date: "Wed, 25 Oct 2023",
      location: "Mumbai, India",
      organizer: "Set Your Vendor",
      image:
        "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 3,
      title: "Entrepreneurship Bootcamp",
      date: "Sat, 16 Mar 2024",
      location: "Bangalore, India",
      organizer: "Set Your Vendor",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 4,
      title: "Women in Tech Conference",
      date: "Tue, 05 Dec 2024",
      location: "Gurgaon, India",
      organizer: "Set Your Vendor",
      image:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 5,
      title: "Digital Marketing Workshop",
      date: "Fri, 22 Feb 2025",
      location: "Pune, India",
      organizer: "Set Your Vendor",
      image:
        "https://images.unsplash.com/photo-1515165562835-c4c1b6c6f46b?auto=format&fit=crop&w=900&q=60",
    },
  ];

  return (
    <section className="relative overflow-hidden sm:-mt-[250px]">
      {/* ===== Events Content ===== */}
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

                <p className="text-sm text-gray-600 mb-3">
                  Organized by{" "}
                  <span className="text-pink-600 font-semibold">
                    {event.organizer}
                  </span>
                </p>

                {/* Instead of BUY NOW button, show something more suitable */}
                <button className="w-full mt-2 bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-semibold py-2.5 rounded-lg transition">
                  View Highlights
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
