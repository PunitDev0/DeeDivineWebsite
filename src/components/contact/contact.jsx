"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <main className="font-sans text-[#0c0d12] bg-[#FDFDFD] min-h-screen pt-28 md:pt-36 overflow-hidden relative">
      
      {/* GLOBAL BACKGROUND GLOW */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(181,31,59,0.04),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(229,45,79,0.03),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="px-6 md:px-16 pb-12 md:pb-20 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-gradient-to-r from-[#B51F3B] to-[#FF5364]" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#0c0d12]">
                Contact Us
              </span>
              <div className="w-8 h-[2px] bg-gradient-to-l from-[#B51F3B] to-[#FF5364]" />
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0c0d12] mb-6 relative inline-block whitespace-nowrap">
              <span className="relative z-10">Contact Dee Divine Propinfra</span>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(229,45,79,0.06),transparent_70%)] blur-2xl z-0 pointer-events-none" />
            </h1>
            
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto">
              Have questions or want to discuss your next real estate investment? We’re here to help you with the right guidance, insights, and support.
            </p>
          </div>
        </section>

        {/* MAIN LAYOUT: INFO + FORM */}
        <section className="px-6 md:px-16 pb-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-10 md:gap-16 items-start">
            
            {/* LEFT: CONTACT INFO */}
            <div className="flex flex-col gap-6">
              <div className="mb-4">
                <h2 className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-neutral-400 mb-2">Get In Touch</h2>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#0c0d12]">
                  Reach Out To Us
                </h3>
              </div>
              
              {/* Card 1: Address */}
              <div className="bg-white/80 backdrop-blur-[16px] border border-white/65 rounded-[24px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(229,45,79,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#B51F3B] to-[#FF5364] flex items-center justify-center text-white shadow-[0_4px_15px_rgba(229,45,79,0.3)] shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-black text-[11px] uppercase tracking-widest text-[#0c0d12] mb-2">Office Address</h4>
                  <p className="text-sm font-medium text-neutral-500 leading-relaxed">
                    M3M Broadway, 22nd Floor, D Block,
                    <br />Sector 71, SPR Road, Gurgaon
                  </p>
                </div>
              </div>

              {/* Card 2: Phone */}
              <div className="bg-white/80 backdrop-blur-[16px] border border-white/65 rounded-[24px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(229,45,79,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#B51F3B] to-[#FF5364] flex items-center justify-center text-white shadow-[0_4px_15px_rgba(229,45,79,0.3)] shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-black text-[11px] uppercase tracking-widest text-[#0c0d12] mb-2">Call Us</h4>
                  <p className="text-sm font-bold text-neutral-600 leading-relaxed">
                    +91 9211496111
                  </p>
                </div>
              </div>

              {/* Card 3: Email */}
              <div className="bg-white/80 backdrop-blur-[16px] border border-white/65 rounded-[24px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(229,45,79,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#B51F3B] to-[#FF5364] flex items-center justify-center text-white shadow-[0_4px_15px_rgba(229,45,79,0.3)] shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-black text-[11px] uppercase tracking-widest text-[#0c0d12] mb-2">Email Us</h4>
                  <p className="text-sm font-medium text-neutral-500 leading-relaxed">
                    info@deedivinepropinfra.com  
                    <br />
                    careers@deedivinepropinfra.com
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: INQUIRY FORM */}
            <div className="bg-white/82 backdrop-blur-[18px] border border-white/70 rounded-[28px] p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#B51F3B]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-4 h-[2px] bg-gradient-to-r from-[#B51F3B] to-[#FF5364]" />
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#B51F3B]">Inquiry</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#0c0d12] mb-4">
                  Let’s Start a Conversation
                </h3>
                <p className="text-sm font-medium text-neutral-500 leading-relaxed">
                  Whether you’re looking to buy your dream property, explore investment opportunities, or simply have questions about our services, our team would love to hear from you.
                </p>
              </div>

              <form className="space-y-6 relative z-10">
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-[#0c0d12] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-white/75 border border-neutral-100/50 rounded-2xl px-5 py-4 text-sm font-medium text-[#0c0d12] placeholder:text-neutral-400 outline-none focus:border-[#B51F3B] focus:ring-4 focus:ring-[#B51F3B]/10 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-[#0c0d12] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-white/75 border border-neutral-100/50 rounded-2xl px-5 py-4 text-sm font-medium text-[#0c0d12] placeholder:text-neutral-400 outline-none focus:border-[#B51F3B] focus:ring-4 focus:ring-[#B51F3B]/10 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-[#0c0d12] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full bg-white/75 border border-neutral-100/50 rounded-2xl px-5 py-4 text-sm font-medium text-[#0c0d12] placeholder:text-neutral-400 outline-none focus:border-[#B51F3B] focus:ring-4 focus:ring-[#B51F3B]/10 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-[#0c0d12] mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Write your message..."
                    className="w-full bg-white/75 border border-neutral-100/50 rounded-2xl px-5 py-4 text-sm font-medium text-[#0c0d12] placeholder:text-neutral-400 outline-none resize-none focus:border-[#B51F3B] focus:ring-4 focus:ring-[#B51F3B]/10 transition-all duration-300"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group w-full h-14 bg-gradient-to-r from-[#B51F3B] to-[#FF5364] text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full shadow-[0_6px_20px_rgba(229,45,79,0.3)] hover:shadow-[0_10px_30px_rgba(229,45,79,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 mt-4"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </div>
            
          </div>
        </section>

        {/* MAP SECTION */}
        <section className="px-6 md:px-16 pb-24">
          <div className="max-w-7xl mx-auto relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B51F3B]/10 to-transparent blur-3xl rounded-[2.5rem] pointer-events-none" />
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/80 bg-white/40 backdrop-blur-md p-3 shadow-[0_10px_50px_rgba(0,0,0,0.05)]">
              <div className="relative w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden bg-neutral-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.217745284304!2d77.0412748114687!3d28.412685875684485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2323bd5b493b%3A0x556ba537cfc6d921!2sDee%20Divine%20PropInfra%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1763623084043!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-[2rem] filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
