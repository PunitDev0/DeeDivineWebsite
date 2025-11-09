"use client";

import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#f6ebf6] to-[#f3dff3] text-gray-800 pt-14 pb-8 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
        {/* Logo + Map */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex flex-col items-center md:items-start mb-3">
            <Image
              src="/assets/deedivine-logo.png"
              alt="Dee Divine PropInfra Pvt Ltd"
              width={130}
              height={130}
              className="rounded-xl"
            />
            <h2 className="font-extrabold text-xl tracking-wide text-[#A13EA1] uppercase mt-2">
              Dee Divine
            </h2>
            <p className="text-sm text-gray-700 font-medium mb-4">
              PropInfra Pvt Ltd
            </p>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.411563528497!2d77.054224!3d28.585963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19f0e42cdb3b%3A0x45dbbb7e5a28dd67!2sDee%20Divine%20PropInfra%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1709899000000!5m2!1sen!2sin"
            width="270"
            height="160"
            allowFullScreen
            loading="lazy"
            className="rounded-lg border border-gray-300 shadow-md hover:shadow-lg transition-all"
          ></iframe>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 border-l-4 border-[#A13EA1] pl-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", link: "/" },
              { name: "About Us", link: "/about" },
              { name: "Blogs", link: "/blogs" },
              { name: "Career", link: "/career" },
              { name: "Contact Us", link: "/contact" },
              { name: "Privacy Policy", link: "/privacy-policy" },
              { name: "Terms & Condition", link: "/terms" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href={item.link}
                  className="hover:text-[#A13EA1] transition-all duration-200 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#A13EA1] rounded-full opacity-0 group-hover:opacity-100 transition" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Property Types */}
        <div>
          <h3 className="font-semibold text-lg mb-4 border-l-4 border-[#A13EA1] pl-3">
            Property Types
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/properties/residential"
                className="hover:text-[#A13EA1] transition"
              >
                Residential
              </Link>
            </li>
            <li>
              <Link
                href="/properties/commercial"
                className="hover:text-[#A13EA1] transition"
              >
                Commercial
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4 border-l-4 border-[#A13EA1] pl-3">
            Contact Info
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#A13EA1] mt-0.5 flex-shrink-0" />
              <span className="leading-snug">
                6th Floor, B4, Spaze ITech Park, 609-610, <br />
                Badshahpur Sohna Rd, Sector 49
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#A13EA1]" />
              <a
                href="tel:+919211494111"
                className="hover:text-[#A13EA1] transition"
              >
                +91-9211494111
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#A13EA1]" />
              <a
                href="mailto:info@deedivinepropinfra.com"
                className="hover:text-[#A13EA1] transition"
              >
                info@deedivinepropinfra.com
              </a>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-6 text-[#A13EA1]">
            {[
              { icon: <Facebook size={18} />, href: "#" },
              { icon: <Instagram size={18} />, href: "#" },
              { icon: <Linkedin size={18} />, href: "#" },
              { icon: <Twitter size={18} />, href: "#" },
            ].map((social, i) => (
              <Link
                key={i}
                href={social.href}
                className="hover:scale-110 transition-transform duration-200"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-300 mt-12 pt-5 text-center text-sm text-gray-600">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#A13EA1] font-semibold">
          Dee Divine PropInfra Pvt. Ltd.
        </span>{" "}
        All Rights Reserved.
      </div>

    </footer>
  );
}
