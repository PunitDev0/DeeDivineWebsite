"use client";

import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
    const projects = [
        {
            id: 1,
            title: "M3M Antalya Hills",
            price: "1.2 Cr* Onwards",
            location: "Dwarka Expressway",
            type: "Residential",
            image:
                "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 2,
            title: "M3M Golf Hills",
            price: "1.49 Cr* Onwards",
            location: "Dwarka Expressway",
            type: "Residential",
            image:
                "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 3,
            title: "Twin Tower Signature Global",
            price: "3.97 - 5.41 Cr*",
            location: "Sohna Road",
            type: "Residential",
            image:
                "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 4,
            title: "Krisumi Waterfall Residences",
            price: "₹4.18 Cr* Onwards",
            location: "Sector 36A, Gurugram",
            type: "Residential",
            image:
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 5,
            title: "BPTP Lutyens",
            price: "On Request",
            location: "Sector 102, Gurgaon",
            type: "Residential",
            image:
                "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 6,
            title: "4S The Aurrum",
            price: "On Request",
            location: "Sector 59, Gurgaon",
            type: "Residential",
            image:
                "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 7,
            title: "Elan Presidential 106",
            price: "₹7.25 Cr*",
            location: "Sector 106, Gurgaon",
            type: "Residential",
            image:
                "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 8,
            title: "DLF Privana South",
            price: "₹7 Cr* Onwards",
            location: "Sector 77, Gurgaon",
            type: "Residential",
            image:
                "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=800&q=60",
        },
    ];

    return (
        <section className="bg-[#f9f9fb] py-5 px-1 sm:px-10">
            <div className="">
                <div
                    className="relative w-full h-[200px] sm:h-[250px] rounded-xl flex items-center justify-center overflow-hidden bg-no-repeat bg-center bg-cover"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60')" }} // change path
                >
                    <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 backdrop-blur-sm text-white p-3 rounded-xl hover:bg-opacity-70 transition-all duration-300">
                        <Link href="/career" className="flex items-center gap-2 hover:underline">
                            Projects <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto py-10">
                <h2 className="text-3xl sm:text-4xl text-gray-800 text-center mb-10">
                    <div className="mb-3">
                        <span className="bg-[#A13EA1] text-white text-xs tracking-wider font-semibold uppercase px-3 py-1 ">
                            Projects
                        </span>
                    </div>

                    Featured <span className="text-purple-700">Projects</span>
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="relative group overflow-hidden h-[400px] shadow-md hover:shadow-xl transition-all duration-300 bg-black"
                        >
                            {/* Project Image */}
                            <div className="relative w-full h-full">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-semibold px-3 py-1 rounded">
                                    {project.type}
                                </div>
                            </div>

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                            {/* Content */}
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <p className="text-sm font-medium mb-1">{project.price}</p>
                                <h3 className="text-lg font-semibold leading-tight">
                                    {project.title}
                                </h3>
                                <div className="flex items-center text-sm text-gray-300 mt-1">
                                    <MapPin size={14} className="mr-1" />
                                    <span>{project.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
