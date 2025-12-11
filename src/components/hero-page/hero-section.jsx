'use client'

import Image from "next/image";
import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function HeroSection() {
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
      location: "Sector 72   Gurgaon",
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
    <>
      {/* 🏠 Hero Section */}
      <section className="relative w-full md:h-[70vh] sm:h-[40vh] h-[25vh]  flex items-center overflow-hidden rounded-2xl sm:mt-5 mt-2">
        {/* Background Image */}
        <Image
          src="/assets/heroslide2.webp"
          alt="Background"
          unoptimized
          fill
          className="object-cover absolute inset-0"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-0"></div>

        {/* Text Content */}
        <div className="relative z-10 w-full px-6 md:px-16">
          <div className="max-w-lg text-left space-y-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl text-white leading-tight drop-shadow-lg">
              Turning Dreams into <br /> Reality – Step by Step
            </h2>
            <p className="text-sm sm:text-base text-gray-200 max-w-md">
              Discover the most luxurious and reliable residential projects in Gurgaon
              with <span className="text-purple-300 font-medium">DeeDivine Propinfra</span>.
            </p>
            <button className="mt-4 bg-purple-600 sm:text-sm text-xs hover:bg-purple-700 text-white px-6 py-2 rounded-sm shadow-lg transition-all duration-300">
              Explore Properties
            </button>
          </div>
        </div>
      </section>

      {/* 🏢 Property Slider */}
      <div className="sm:py-12 p-5 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            // navigation
            breakpoints={{
              350:{ slidesPerView: 2 },
              400: { slidesPerView: 2 },
              640: { slidesPerView: 4 },
              1024: { slidesPerView: 4 },
            }}
            className="!pb-10"
          >
            {properties.map((property) => (
              <SwiperSlide key={property.id}>
                <Card className="group relative p-0 overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-300">
                  <CardContent className="p-0">
                    {/* Property Image */}
                    <div className="relative sm:h-[150px] h-[100px] w-full overflow-hidden">
                      <Image
                        unoptimized
                        src={property.image}
                        alt={property.title}
                        width={1000}
                        height={1000}
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                    </div>

                    {/* Property Info */}
                    <div className="bg-white p-3">
                      <div className="flex items-center justify-between">
                        <p className="text-gray-900 font-semibold sm:text-sm text-xs truncate">
                          {property.title}
                        </p>
                        {/* <p className="text-sm font-bold text-purple-600">{property.price}</p> */}
                      </div>
                      <div className="flex items-center gap-1 text-gray-600 text-sm mt-1">
                        <MapPin size={14} />
                        <span className="truncate">{property.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
