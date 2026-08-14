"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <main className="font-sans text-[#0c0d12] bg-white pt-24">
      {/* HERO Banner */}
      <div className="px-6 md:px-16 py-8">
        <div
          className="relative w-full h-[250px] md:h-[380px] flex items-end pb-8 pl-8 overflow-hidden bg-cover bg-center border border-black/5"
          style={{ backgroundImage: "url('/assets/contact-banner.webp')" }}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-0" />
          
          <div className="relative z-10 bg-[#0c0d12]/80 backdrop-blur-sm text-white px-5 py-3 border border-white/10">
            <Link href="/contact" className="flex items-center gap-2 text-xs font-black uppercase tracking-wider">
              Contact Us <ArrowRight size={14} className="text-red-500" />
            </Link>
          </div>
        </div>
      </div>

      {/* CONTACT INFO SECTION */}
      <section className="py-24 px-6 md:px-16 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-red-500" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#e63946]">
              Get In Touch
            </span>
            <div className="w-6 h-[2px] bg-red-500" />
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 uppercase leading-tight">
            Contact Dee Divine Propinfra
          </h2>
          
          <p className="text-neutral-500 text-sm max-w-2xl mx-auto leading-relaxed">
            Have questions or want to discuss your next real estate investment?  
            We’re here to help you with the right guidance, insights, and support.
          </p>
        </div>

        {/* Info Grid Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto text-center">
          
          {/* Card 1 */}
          <div className="bg-[#f8f9fa] border border-neutral-100 p-8 shadow-sm flex flex-col items-center hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-white flex items-center justify-center text-red-500 shadow-sm mb-6">
              <MapPin size={22} />
            </div>
            <h3 className="font-black text-xs uppercase tracking-widest text-[#0c0d12] mb-3">Office Address</h3>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-xs">
              M3M Broadway, 22nd Floor, D Block,
              Sector 71, SPR Road, Gurgaon
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f8f9fa] border border-neutral-100 p-8 shadow-sm flex flex-col items-center hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-white flex items-center justify-center text-red-500 shadow-sm mb-6">
              <Phone size={22} />
            </div>
            <h3 className="font-black text-xs uppercase tracking-widest text-[#0c0d12] mb-3">Call Us</h3>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-xs font-bold">
              +91 9211496111
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f8f9fa] border border-neutral-100 p-8 shadow-sm flex flex-col items-center hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-white flex items-center justify-center text-red-500 shadow-sm mb-6">
              <Mail size={22} />
            </div>
            <h3 className="font-black text-xs uppercase tracking-widest text-[#0c0d12] mb-3">Email Us</h3>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-xs">
              info@deedivinepropinfra.com  
              <br />
              careers@deedivinepropinfra.com
            </p>
          </div>
          
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="bg-white py-24 px-6 md:px-16 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT TEXT */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-red-500" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#e63946]">Inquiry</span>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-black text-[#0c0d12] uppercase leading-tight">
              Let’s Start a <br />Conversation
            </h2>
            
            <p className="text-neutral-500 text-sm leading-relaxed max-w-md">
              Whether you’re looking to buy your dream property, explore investment opportunities, or simply have questions about our services, our team would love to hear from you.
            </p>
          </div>

          {/* RIGHT FORM */}
          <form className="bg-[#f8f9fa] border border-neutral-100 p-10 md:p-14 space-y-6">
            
            <div>
              <label className="block text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-transparent border-b border-neutral-200 focus:border-red-500 pb-3 text-sm text-[#0c0d12] placeholder:text-neutral-300 outline-none transition-colors duration-300"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border-b border-neutral-200 focus:border-red-500 pb-3 text-sm text-[#0c0d12] placeholder:text-neutral-300 outline-none transition-colors duration-300"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full bg-transparent border-b border-neutral-200 focus:border-red-500 pb-3 text-sm text-[#0c0d12] placeholder:text-neutral-300 outline-none transition-colors duration-300"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400 mb-2">
                Message
              </label>
              <textarea
                rows="3"
                placeholder="Write your message..."
                className="w-full bg-transparent border-b border-neutral-200 focus:border-red-500 pb-3 text-sm text-[#0c0d12] placeholder:text-neutral-300 outline-none resize-none transition-colors duration-300"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-[#0c0d12] text-white text-xs font-black uppercase tracking-[0.25em] hover:bg-neutral-800 active:scale-98 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span>Send Message</span>
              <span>→</span>
            </button>
          </form>
          
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="w-full border-t border-neutral-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.217745284304!2d77.0412748114687!3d28.412685875684485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2323bd5b493b%3A0x556ba537cfc6d921!2sDee%20Divine%20PropInfra%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1763623084043!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-none border border-neutral-100"
        ></iframe>
      </section>
    </main>
  );
}
