"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IndianRupee, CheckCircle, Badge } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Link from "next/link";

// ✅ Static Property Data
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
    media: "/assets/heroslide4.jpeg",
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
    media: "/assets/heroslide3.jpg",
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
    media: "/assets/heroslide1.jpg",
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
    media: "/assets/heroslide2.jpg",
    isVerified: true,
  },
];

const FeaturedProperties = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  // Track current carousel slide
  useEffect(() => {
    if (!api) return;
    const handleSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", handleSelect);
    return () => api.off("select", handleSelect);
  }, [api]);

  // Create property URL slug
  const createSlug = (property) => {
    const { basicInfo = {}, _id } = property;
    const type = basicInfo.propertyType?.toLowerCase().replace(/\s+/g, "-") || "property";
    const location = basicInfo.location?.toLowerCase().replace(/\s+/g, "-") || "unknown";
    return `/property/${type}-${location}-${_id}`;
  };

  // Render property cards
  const renderCarouselItems = useCallback(() => {
    return staticProperties.map((property) => (
      <CarouselItem
        key={property._id}
        className="pl-2 basis-full basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/3 max-w-[350px]"
      >
        <Link href={createSlug(property)} passHref>
          <Card className="group cursor-pointer transition-all rounded-sm duration-300 hover:shadow-lg hover:scale-[1.02] p-0">
            <CardContent className="sm:p-4 h-full flex flex-col p-0">
              {/* Image Section */}
              <div className="relative aspect-4/3 overflow-hidden ">
                <Image
                  src={property.media || "/placeholder-image.png"}
                  alt={property.basicInfo?.title || "Property Image"}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>

              {/* Info */}
              <div className="p-2 mt-2 flex-1 space-y-1">
                <h3 className="font-semibold text-base sm:text-lg leading-tight group-hover:text-[#A13EA1] transition-colors truncate">
                  {property.basicInfo?.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 truncate">
                  {property.basicInfo?.description}
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </CarouselItem>
    ));
  }, []);

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 flex sm:flex-row flex-col gap-4 ">
      {/* Section Title */}
      <div className=" sm:mb-10">
        <p className="text-[#A13EA1] font-medium text-lg">PROPERTIES</p>
        <h1 className="text-3xl sm:text-4xl  text-gray-900 leading-tight">
        OUR FEATURED PROPERTIES
        </h1>
      </div>

      {/* Carousel */}
      <div className="max-w-5xl ">
        <Carousel opts={{ align: "start", loop: true }} setApi={setApi} className="w-full">
          <CarouselContent className="-ml-2 flex gap-4">
            {renderCarouselItems()}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedProperties;
