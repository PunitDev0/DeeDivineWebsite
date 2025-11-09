"use client"

import * as React from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const properties = [
  {
    type: "Aura Avenue 79",
    count: 8,
    city: "Delhi",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
  },
  {
    type: "Elite Homes + 02 Homes",
    count: 5,
    city: "Noida",
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
  },
  {
    type: "Aaranya Greens",
    count: 1,
    city: "Gurgaon",
    image: "https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg",
  },
]

export default function PropertyCarousel() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="space-y-1 mb-8">
        <h2 className="text-2xl font-semibold text-[#A13EA1]">Apartments, Villas and more</h2>
        <p className="text-sm text-gray-600">in Central Delhi</p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {properties.map((property, index) => (
            <CarouselItem key={property.type} className="pl-2 md:pl-4  basis-1/2 md:basis-1/3">
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="relative aspect-[4/3] bg-gray-100">
                  <Image src={property.image || "/placeholder.svg"} alt={property.type} fill className="object-cover" />
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-sm p-2 text-center">
                    {property.type}
                  </div>
                </div>
               
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 bg-white shadow-lg hover:bg-gray-100" />
        <CarouselNext className="-right-4 bg-white shadow-lg hover:bg-gray-100" />
      </Carousel>
    </div>
  )
}