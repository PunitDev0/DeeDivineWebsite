"use client";

import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Clock,
  Building2,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#f6ebf6] to-[#f3dff3] text-gray-800 pt-14 pb-8 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 relative z-10">

        {/* Logo + Map */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" aria-label="Home">
            <Image
              unoptimized
              src="/assets/logo.webp"
              width={500}
              height={500}
              alt="DEE DIVINE Logo"
              className="object-contain w-52 mb-4"
              priority
            />
          </Link>

          {/* <p className="text-sm text-gray-600 mb-4 text-center md:text-left">
            Trusted real estate consultancy delivering premium residential
            & commercial projects with complete transparency.
          </p> */}

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245352.8073014646!2d76.73898449453122!3d28.412685900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2323bd5b493b%3A0x556ba537cfc6d921!2sDee%20Divine%20PropInfra%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1766330154769!5m2!1sen!2sin"
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
              { name: "Career", link: "/career" },
              { name: "Contact Us", link: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href={item.link}
                  className="hover:text-[#A13EA1] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4 border-l-4 border-[#A13EA1] pl-3">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "Residential Properties",
              "Commercial Leasing",
              "Land Acquisition",
              "Investment Consulting",
              "RERA Approved Projects",
            ].map((service, i) => (
              <li key={i} className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#A13EA1]" />
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4 border-l-4 border-[#A13EA1] pl-3">
            Contact Info
          </h3>

          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#A13EA1] mt-1" />
              <span>
                6th Floor, B4, Spaze ITech Park, 609-610, <br />
                Sector 49, Gurugram
              </span>
            </li>

            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#A13EA1]" />
              <a href="tel:+919211494111" className="hover:text-[#A13EA1]">
                +91-9211494111
              </a>
            </li>

            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#A13EA1]" />
              <a
                href="mailto:info@deedivinepropinfra.com"
                className="hover:text-[#A13EA1]"
              >
                info@deedivinepropinfra.com
              </a>
            </li>

            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#A13EA1]" />
              Mon – Sat : 10:00 AM – 7:00 PM
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5 text-[#A13EA1]">
            {[
              { icon: <Facebook size={18} />, href: "https://www.facebook.com/profile.php?id=61572325678798" },
              { icon: <Instagram size={18} />, href: "https://www.instagram.com/dee_divine_propinfra/" },
              { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/company/dee-divine-propinfra-pvt-ltd/" },
              { icon: <Twitter size={18} />, href: "#" },
            ].map((social, i) => (
              <Link
                key={i}
                href={social.href}
                className="hover:scale-110 transition-transform"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 mt-12 pt-5 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 gap-2">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-[#A13EA1] font-semibold">
            Dee Divine PropInfra Pvt. Ltd.
          </span>{" "}
          All Rights Reserved.
        </p>

        <div className="flex items-center gap-4">
          <Link href="/privacy-policy" className="flex items-center gap-1 hover:text-[#A13EA1]">
            <ShieldCheck className="w-4 h-4" /> Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[#A13EA1]">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
