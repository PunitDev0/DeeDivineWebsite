"use client";
import Image from "next/image";

const teamMembers = [
  { name: "Mr. Diwakar Dixit", role: "Director", image: "/assets/diwakar-dixit.webp" },
  { name: "Kavita Dixit", role: "Chairman", image: "/assets/kavita.jpg" },
  { name: "Dhananjay Arya", role: "MD (Managing Director)", image: "/assets/dj.JPG" },
  // { name: "Himanshu Sharma", role: "Associate Director & MD", image: "/assets/himanshu.JPG" },
  { name: "Anil Singh", role: "Head of Corporate Affairs", image: "/assets/anil.JPG" },
  { name: "Aditya Singh", role: "VP", image: "/assets/aditya.jpg" },
  { name: "Poonam Yadav", role: "AVP", image: "/assets/poonam.jpg" },
  { name: "Saurav Kumar", role: "General Manager", image: "/assets/sourav.jpg" },
  { name: "Sagar Gola", role: "AVP", image: "/assets/sagar.jpg" },
  { name: "Manish Sharma", role: "Vice President (VP) – Finance / Accounts", image: "/assets/manish.JPG" },
  { name: "Akshay Chauhan", role: "VP – Marketing", image: "/assets/akshay.jpg" }, // ab image daal dena
];

export default function TeamSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading + Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            A TEAM OF <br />
            <span className="text-gray-900">DEE DIVINE</span>
          </h2>
          <div className="text-gray-600 text-base sm:text-lg space-y-4 leading-relaxed">
            <p>BLOCKJOY STARTED AS A PROJECT TO MANAGE STAKING WITH FRIENDS AND FAMILY.</p>
            <p>We built automated tooling to optimize validator management for teams at scale. Now, we’re building the best validator management platform in Web3.</p>
            <p>We’ve already saved 1000s of staff hours for networks because of our automated provisioning, validator upgrades, and monitoring systems.</p>
          </div>
        </div>

        {/* Team Grid – Sab Images Exact Same Size */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-20">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center group"
            >
              {/* Fixed Size Image Container – Yeh sabse important hai */}
              <div className="w-40 h-52 sm:w-48 sm:h-60 md:w-56 md:h-72 lg:w-64 lg:h-80 relative overflow-hidden rounded-2xl shadow-lg mb-4">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
                    priority={idx < 6} // first 6 images fast load
                  />
                ) : (
                  <div className="bg-gray-200 border-2 border-dashed rounded-2xl w-full h-full flex items-center justify-center">
                    <span className="text-gray-500 text-xs">No Image</span>
                  </div>
                )}
              </div>

              {/* Name & Role */}
              <p className="font-semibold border1 border-black text-center text-sm sm:text-base text-gray-900 leading-tight">
                {member.name}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 text-center mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}