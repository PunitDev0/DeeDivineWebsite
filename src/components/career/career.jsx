// app/career/page.jsx
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Career() {
  const openings = [
    {
      id: 1,
      title: "Sales Executive",
      location: "Gurugram, Haryana",
      type: "Full-time",
      description:
        "Drive client engagement and property sales with confidence. Ideal for self-motivated professionals with a strong understanding of real estate trends.",
    },
    {
      id: 2,
      title: "Digital Marketing Specialist",
      location: "Remote / Gurugram",
      type: "Full-time",
      description:
        "Manage online marketing campaigns, social media presence, and lead generation for our upcoming real estate projects.",
    },
    {
      id: 3,
      title: "Customer Relationship Manager (CRM)",
      location: "Delhi NCR",
      type: "Full-time",
      description:
        "Build and maintain client relationships, ensure seamless communication and enhance customer experience throughout the buying journey.",
    },
  ];

  return (
    <main className="font-poppins">
      {/* HERO */}
      <div className="px-4 py-8 md:px-20">
        <div
          className="relative w-full h-[250px] md:h-[350px] rounded-2xl flex items-end pb-8 pl-8 overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/careerImage.webp')" }}
        >
          <div className="bg-black/60 backdrop-blur-sm text-white px-5 py-3 rounded-xl">
            <Link href="/career" className="flex items-center gap-2 font-medium">
              Careers <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* INTRODUCTION */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div>
            <Badge className="bg-[#9b1b8f] text-white px-4 py-1 mb-6">JOIN OUR TEAM</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Build Your Career with{" "}
              <span className="text-[#9b1b8f]">Dee Divine Propinfra Pvt. Ltd.</span>
            </h2>
            <p className="text-gray-600 mb-4">
              At Dee Divine Propinfra, we believe that our success is powered by people. We’re always looking for passionate individuals who want to build a meaningful career in real estate.
            </p>
            <p className="text-gray-600">
              Whether you’re experienced or just starting, we offer growth, innovation, and a supportive environment.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-dotted border-pink-300 rounded-full opacity-40 hidden md:block"></div>
            <div className="absolute -bottom-10 -right-8 w-24 h-24 border-4 border-dotted border-pink-300 rounded-full opacity-40 hidden md:block"></div>
            <Image
              src="/assets/career-team.webp"
              alt="Team at Dee Divine"
              width={600}
              height={700}
              className="rounded-lg shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* COMPANY CULTURE */}
      <section className="bg-[#faf5fb] py-20 px-6 md:px-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold uppercase mb-4">Life at Dee Divine Propinfra</h2>
          <p className="text-gray-700">
            Collaboration • Learning • Innovation • Work-Life Balance
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Growth & Learning", "Inclusive Environment", "Work-Life Balance"].map((title, i) => (
            <div key={i} className="bg-white p-8 rounded-lg shadow-lg border-t-8 border-[#8b1fa9]">
              <h3 className="text-xl font-bold mb-4">{title}</h3>
              <p className="text-gray-600 text-sm">
                {i === 0 && "Mentorship, training, and leadership opportunities."}
                {i === 1 && "Diversity and respect for every voice and idea."}
                {i === 2 && "Flexible policies and a positive, supportive culture."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CURRENT OPENINGS */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold uppercase mb-4">Current Openings</h2>
          <p className="text-gray-600">Find your next role with us</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {openings.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-xl overflow-hidden border-t-8 border-[#8b1fa9]"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{job.title}</h3>
                <p className="text-gray-600 mb-6">
                  {job.location} • {job.type}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-8">
                  {job.description}
                </p>
              </div>
              <div className="bg-gray-50 px-8 py-6 border-t">
                <Link
                  href={`/upload-resume?job=${encodeURIComponent(job.title)}`}
                  className="text-[#8b1fa9] font-bold text-lg hover:underline flex items-center gap-2"
                >
                  Apply Now <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#8b1fa9] py-20 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Join Us?
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-lg">
          Be part of a team that’s shaping the future of real estate.
        </p>
        <Link
          href="/upload-resume"
          className="inline-block bg-white text-[#8b1fa9] font-bold px-10 py-4 rounded-lg text-lg hover:bg-gray-100 transition"
        >
          Send Your Resume
        </Link>
      </section>
    </main>
  );
}