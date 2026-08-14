"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { MapPin } from "lucide-react";

const staticProperties = [
  {
    _id: 1,
    basicInfo: {
      title: "Luxury Villa in South Delhi",
      description: "Spacious 4BHK villa with modern design and private garden.",
      propertyType: "Villa",
      location: "South Delhi",
    },
    pricing: { price: "3.5 Cr", propertyStatus: "forSale" },
    media: "/assets/heroslide4.webp",
    isVerified: true,
  },
  {
    _id: 2,
    basicInfo: {
      title: "Fully Furnished Apartment",
      description: "2BHK apartment with premium amenities near Dwarka.",
      propertyType: "Apartment",
      location: "Dwarka",
    },
    pricing: { price: "45,000/mo", propertyStatus: "forRent" },
    media: "/assets/heroslide3.webp",
    isVerified: true,
  },
  {
    _id: 3,
    basicInfo: {
      title: "Modern Studio Flat",
      description: "Compact and cozy flat for young professionals.",
      propertyType: "Studio",
      location: "Noida Sector 18",
    },
    pricing: { price: "25,000/mo", propertyStatus: "forRent" },
    media: "/assets/heroslide1.webp",
    isVerified: false,
  },
  {
    _id: 4,
    basicInfo: {
      title: "Smart Home Apartment",
      description: "3BHK smart apartment with IoT features and balcony.",
      propertyType: "Apartment",
      location: "Gurgaon",
    },
    pricing: { price: "1.2 Cr", propertyStatus: "forSale" },
    media: "/assets/heroslide2.webp",
    isVerified: true,
  },
];

export default function FeaturedProperties() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const handleSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", handleSelect);
    return () => api.off("select", handleSelect);
  }, [api]);

  const renderCarouselItems = useCallback(() => {
    return staticProperties.map((property) => (
      <CarouselItem
        key={property._id}
        className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 max-w-[360px]"
      >
        <div className="group bg-white border border-neutral-100 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full">
          {/* Image Wrapper */}
          <div className="relative aspect-video w-full overflow-hidden bg-neutral-200">
            <Image
              unoptimized
              src={property.media || "/placeholder-image.png"}
              alt={property.basicInfo?.title || "Property Image"}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <div className="absolute top-3 right-3 bg-[#0c0d12]/80 backdrop-blur-sm px-3 py-1 border border-white/10 text-[9px] uppercase tracking-wider text-white font-bold">
              {property.basicInfo?.propertyType}
            </div>
          </div>

          {/* Info Details */}
          <div className="p-5 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-[13px] font-black uppercase tracking-wider text-[#0c0d12] mb-1.5 truncate">
                {property.basicInfo?.title}
              </h3>
              <p className="text-xs text-neutral-400 font-medium leading-relaxed line-clamp-2 mb-3">
                {property.basicInfo?.description}
              </p>
              <div className="flex items-center gap-1.5 text-neutral-500 text-xs mt-1">
                <MapPin size={12} className="text-red-500" />
                <span className="truncate">{property.basicInfo?.location}</span>
              </div>
            </div>

            <div className="border-t border-neutral-100 mt-4 pt-3 flex items-center justify-between">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Value</span>
              <span className="text-xs font-black text-red-500">{property.pricing?.price}</span>
            </div>
          </div>
        </div>
      </CarouselItem>
    ));
  }, []);

  return (
    <section className="py-20 px-6 md:px-16 bg-[#f8f9fa] border-b border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start justify-between">
        
        {/* Left Section Title */}
        <div className="max-w-sm flex-shrink-0">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-red-500" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-red-500">
              Properties
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0c0d12] leading-[1.1] mb-5">
            OUR FEATURED<br />PROPERTIES
          </h2>
          
          <p className="text-neutral-500 text-sm leading-relaxed mb-6">
            Handpicked premium listings in Delhi NCR, verified for transparency and compliance, ensuring value-driven housing.
          </p>
        </div>

        {/* Right Carousel */}
        <div className="flex-1 w-full overflow-hidden">
          <Carousel opts={{ align: "start", loop: true }} setApi={setApi} className="w-full">
            <CarouselContent className="-ml-4 flex">
              {renderCarouselItems()}
            </CarouselContent>
          </Carousel>
        </div>

      </div>
    </section>
  );
}
