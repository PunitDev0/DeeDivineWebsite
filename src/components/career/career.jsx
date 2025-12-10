import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";

function Career() {
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
        "Build and maintain client relationships, ensure seamless communication, and enhance the customer experience throughout the buying journey.",
    },
  ];

  return (
    <main className="font-poppins">
      {/* HERO SECTION */}
      <div className="px-1 py-5">
        <div
         className="relative w-full h-[200px] sm:h-[250px] rounded-xl flex items-center justify-center overflow-hidden bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: "url('/assets/careerImage.webp')" }} // change path
        >
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 backdrop-blur-sm text-white p-3 rounded-xl hover:bg-opacity-70 transition-all duration-300">
            <Link href="/career" className="flex items-center gap-2 hover:underline">
              Careers <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* INTRODUCTION SECTION */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">
          {/* Left Text Section */}
          <div>
            <Badge className="bg-[#9b1b8f] text-white px-4 py-1 rounded-none mb-4">
              JOIN OUR TEAM
            </Badge>

            <h2 className="text-2xl md:text-3xl tracking-wide text-gray-900 mb-4 leading-snug">
              Build Your Career with{" "}
              <span className="text-[#9b1b8f] ">
                Dee Divine Propinfra Pvt. Ltd.
              </span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              At Dee Divine Propinfra, we believe that our success is powered by
              people. We’re always looking for passionate individuals who want to
              build a meaningful career in the ever-evolving world of real estate.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm">
              Whether you’re an experienced professional or just starting your
              journey, we provide an inspiring environment where innovation, growth,
              and excellence are encouraged at every step.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-24 h-24 border-dotted border-[3px] border-pink-200 rounded-full opacity-60 hidden md:block"></div>
            <div className="absolute -bottom-8 -right-6 w-20 h-20 border-dotted border-[3px] border-pink-200 rounded-full opacity-60 hidden md:block"></div>

            <div className="relative border-2 border-gray-200 shadow-md rounded-sm w-9/12 mx-auto">
              <Image
                unoptimized
                src="/assets/career-team.webp" // replace with your image
                alt="Career at Dee Divine Propinfra"
                width={600}
                height={700}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY CULTURE */}
      <section className="bg-[#faf5fb] px-6 md:px-20 py-20 text-gray-800">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl   mb-4 uppercase">
            Life at Dee Divine Propinfra
          </h2>
          <p className="text-gray-700 text-sm md:text-base max-w-3xl mx-auto">
            We take pride in fostering a workplace that celebrates collaboration,
            learning, and innovation. Our team thrives in an open, supportive
            environment that empowers every individual to grow personally and
            professionally.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 shadow-md border-t-[6px] border-[#8b1fa9]">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">
              Growth & Learning
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We provide mentorship, continuous training, and opportunities to
              enhance your skills and leadership potential.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md border-t-[6px] border-[#8b1fa9]">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">
              Inclusive Environment
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We value diversity and inclusivity — everyone’s voice matters, and
              every idea is respected.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md border-t-[6px] border-[#8b1fa9]">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">
              Work-Life Balance
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We ensure a healthy balance between work and personal life through
              flexible policies and a positive team culture.
            </p>
          </div>
        </div>
      </section>

      {/* CURRENT OPENINGS */}
      <section className="bg-white px-6 md:px-20 py-20">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl uppercase mb-4">
            Current Openings
          </h2>
          <p className="text-gray-700 text-sm md:text-base">
            Explore our latest opportunities and find a role that matches your skills
            and ambitions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {openings.map((job) => (
            <div
              key={job.id}
              className="bg-white shadow-md border-t-[6px] border-[#8b1fa9] p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {job.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  📍 {job.location} | {job.type}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {job.description}
                </p>
              </div>

              <Link
                href="mailto:careers@deedivinepropinfra.com"
                className="text-[#8b1fa9] font-semibold text-sm hover:underline"
              >
                Apply Now →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-[#8b1fa9] py-16 px-6 md:px-20 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Ready to Build Your Future with Us?
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-sm md:text-base">
          Join Dee Divine Propinfra and be part of a passionate team that’s shaping
          the future of real estate through innovation, trust, and excellence.
        </p>
        <Link
          href="mailto:careers@deedivinepropinfra.com"
          className="bg-white text-[#8b1fa9] font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition-all duration-300"
        >
          Send Your Resume
        </Link>
      </section>
    </main>
  );
}

export default Career;
