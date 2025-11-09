"use client";

import { Home, ShieldCheck, Clock, FileText } from "lucide-react";
import AnimatedWave from "./animated-wave-top";

export default function OurServices() {
  const services = [
    {
      title: "Affordable Property Taxes",
      description:
        "We help you find a new home by offering a smart real estate experience.",
      icon: <Home size={40} />,
      active: true,
    },
    {
      title: "Guaranteed Quality Homes",
      description:
        "We help you find a new home by offering a smart real estate experience.",
      icon: <ShieldCheck size={40} />,
    },
    {
      title: "Fast and Easy Process",
      description:
        "We help you find a new home by offering a smart real estate experience.",
      icon: <Clock size={40} />,
    },
    {
      title: "Property Insurance",
      description:
        "We help you find a new home by offering a smart real estate experience.",
      icon: <FileText size={40} />,
    },
  ];

  return (
    <section className="sm:py-16 py-10  px-6 md:px-12 bg-purple-200">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-gray-900">
          Our Services
        </h2>
        <p className="text-[#A13EA1] text-sm md:text-base mt-2">
          Enhance your property listings and videos with accurate and engaging
          subtitles.
        </p>

        {/* Services Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col items-start rounded-sm p-6 shadow-md transition-all duration-300 hover:shadow-lg border border-gray-400 ${
                service.active
                  ? "bg-[#A13EA1] text-white border-[#A13EA1]"
                  : "bg-[#f9f7fb] text-gray-800 border-gray-100 hover:bg-white"
              }`}
            >
           <div className="flex items-center gap-6">
           <div
              className=""
              >
                {service.icon}
              </div>
              <h3
                className={` text-base md:text-lg ${
                  service.active ? "text-white" : "text-gray-900"
                }`}
              >
                {service.title}
              </h3>
           </div>
              <p
                className={`text-sm mt-2 leading-relaxed ${
                  service.active ? "text-white/80" : "text-gray-600"
                }`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

          
    </section>
  );
}
