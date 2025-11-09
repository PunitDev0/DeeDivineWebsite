// components/PrimeLocations.js
"use client";
import Image from "next/image";

const locations = [
  {
    name: "Golf Course Road",
    image: "/assets/golf-course-road.webp",
  },
  {
    name: "Dwarka Expressway",
    image: "/assets/dwarka-expressway.webp",
  },
  {
    name: "Golf Course Ext. Road",
    image: "/assets/golf-course-ext.webp",
  },
  {
    name: "Sonha Road",
    image: "/assets/sonha-road.webp",
  },
  {
    name: "SPR Road",
    image: "/assets/spr-road.webp",
  },
];

export default function PrimeLocations() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-xl md:text-3xl  mb-10  uppercase sm:w-xl text-center mx-auto">
        Explore Properties Across Prime Locations
      </h2>

      <div className="flex justify-center sm:gap-10 gap-3 px-6">
        {locations.map((loc, index) => (
          <div
            key={index}
            className="flex flex-col items-center group hover:scale-105 transition-transform duration-300"
          >
            <div className="sm:w-40 sm:h-40 w-16 h-16 rounded-full overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <Image
                src={loc.image}
                alt={loc.name}
                width={200}
                height={200}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="mt-4 text-gray-700 font-medium sm:text-lg text-[10px]">{loc.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
