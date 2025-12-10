"use client";

import { MessageSquare, FileText, Briefcase, Shield, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function FeatureSections() {
  return (
    <section className="relative  py-6 px-3 md:px-12 overflow-hidden">
      <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 items-center">
        {/* ---------- LEFT CONTENT ---------- */}
        <div className="flex flex-col space-y-10">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-[#A13EA1]">
              Delhi NCR Properties
            </h2>
            <h1 className="text-2xl md:text-3xl  text-gray-900 leading-tight mt-3">
              Find Your Dream Home <br />
              <span className="text-[#A13EA1]">with DeeDivine Propinfra</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base mt-4 leading-relaxed max-w-lg">
              We bring you verified listings, trusted agents, and a wide range of properties to make your dream of owning or renting a perfect home a reality.
            </p>
          </div>

          {/* ---------- FEATURE CARDS ---------- */}
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                icon: <MessageSquare size={22} />,
                title: "Verified Listings",
                description:
                  "Browse 2BHK, 3BHK, and luxury apartments in Delhi NCR with trusted verification.",
              },
              {
                icon: <FileText size={22} />,
                title: "Diverse Options",
                description:
                  "From affordable flats in Chattarpur to luxury villas in South Delhi — we’ve got it all.",
              },
              {
                icon: <Briefcase size={22} />,
                title: "Expert Assistance",
                description:
                  "Our experienced agents in Delhi, Noida, and Gurgaon make your property journey seamless.",
              },
              {
                icon: <Shield size={22} />,
                title: "Personalized Service",
                description:
                  "Tailored recommendations designed to match your unique lifestyle and budget.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-sm border border-gray-400 bg-white shadow-md hover:shadow-lg transition-all duration-300 p-6 ${
                  index === 1
                    ? "bg-[#A13EA1]  hover:bg-[#b74ebb]"
                    : ""
                }`}
              >
                <div
                  className={`inline-flex items-center justify-center rounded-xl p-3 mb-3 transition-transform duration-300 ${
                    index === 1
                      ? "bg-white text-[#A13EA1]"
                      : "bg-[#F3E5F5] text-[#A13EA1]"
                  } group-hover:scale-105`}
                >
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-base mb-1">{feature.title}</h3>
                <p
                  className={`text-sm leading-snug ${
                    index === 1 ? "text-gray-600" : "text-gray-600"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- RIGHT IMAGE + CTA ---------- */}
        <div className="relative flex flex-col space-y-6 items-center justify-center">
          {/* Image Card */}
          <Card className="overflow-hidden rounded-3xl shadow-xl border-none p-0">
            <Image
              unoptimized
              src="/assets/featureSection1.webp"
              alt="Luxury Modern House"
              width={700}
              height={450}
              className="object-cover w-full h-[360px] hover:scale-105 transition-transform duration-700 ease-out"
            />
          </Card>

          {/* Text Content */}
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-4 text-center max-w-md">
            At DEE DIVINE PROPINFRA, we connect you with homes that fit your style and
            budget — from luxury apartments to cozy studios across Delhi NCR.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              className="bg-[#A13EA1] hover:bg-[#b74ebb] text-white rounded-sm border border-gray-300 px-8 py-3 text-sm font-medium shadow-md transition-all duration-300 hover:shadow-lg"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Explore Properties
            </Button>

            <div className="flex items-center gap-2 bg-white rounded-sm  shadow-md px-4 py-2 border border-gray-300">
              <div className="rounded-sm bg-[#A13EA1] p-2 text-white">
                <Phone size={16} />
              </div>
              <div className="leading-tight">
                <p className="text-[11px] text-gray-600">Call Us Anytime</p>
                <p className="text-sm font-semibold text-gray-900">
                  +91 9818381295
                </p>
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-5 left-6">
            <div className="rounded-sm not-[]: bg-white shadow-lg border border-gray-300 px-6 py-2 flex items-center gap-2">
              <span className="text-xs text-[#A13EA1]">49+</span>
              <span className="text-xs text-gray-700">
                Top Rated Around the Globe
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
