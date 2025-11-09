"use client";
import React from "react";

export default function StatsSection() {
  const stats = [
    { number: "30+", label: "Associated Builders" },
    { number: "1500+", label: "Property Sales" },
    { number: "1250+", label: "Rented Property" },
    { number: "2130+", label: "Happy Customers" },
  ];

  return (
    <section className="w-full bg-purple-300 py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-3xl sm:text-4xl md:text-5xl  text-gray-900">
                {stat.number}
              </h3>
              <p className="mt-2 text-xs sm:text-sm md:text-base tracking-widest text-gray-600 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
