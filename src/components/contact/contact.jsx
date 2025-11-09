import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Badge } from "../ui/badge";

function Contact() {
  return (
    <main className="font-poppins">
      {/* HERO SECTION */}
      <div className="px-1 py-5">
        <div
        className="relative w-full h-[200px] sm:h-[250px] rounded-xl flex items-center justify-center overflow-hidden bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: "url('/assets/contact-banner.jpg')" }} // replace with your image
        >
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 backdrop-blur-sm text-white p-3 rounded-xl hover:bg-opacity-70 transition-all duration-300">
            <Link href="/contact" className="flex items-center gap-2 hover:underline">
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* CONTACT INFO SECTION */}
      <section className="py-16 px-6 md:px-20 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <Badge className="bg-[#9b1b8f] text-white px-4 py-1 rounded-none mb-4">
            GET IN TOUCH
          </Badge>

          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 uppercase ">
            Contact Dee Divine Propinfra
          </h2>
          <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
            Have questions or want to discuss your next real estate investment?  
            We’re here to help you with the right guidance, insights, and support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div className="bg-[#faf5fb] p-6 shadow-md border-t-[6px] border-[#8b1fa9] ">
            <MapPin className="mx-auto mb-4 text-[#8b1fa9]" size={32} />
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">Office Address</h3>
            <p className="text-sm text-gray-700">
              2nd Floor, Bestech Business Tower, Sector 66,  
              Gurugram, Haryana – 122018
            </p>
          </div>

          <div className="bg-[#faf5fb] p-6 shadow-md border-t-[6px] border-[#8b1fa9] ">
            <Phone className="mx-auto mb-4 text-[#8b1fa9]" size={32} />
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">Call Us</h3>
            <p className="text-sm text-gray-700">+91 98100 12345</p>
            <p className="text-sm text-gray-700">+91 98765 67890</p>
          </div>

          <div className="bg-[#faf5fb] p-6 shadow-md border-t-[6px] border-[#8b1fa9] ">
            <Mail className="mx-auto mb-4 text-[#8b1fa9]" size={32} />
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">Email Us</h3>
            <p className="text-sm text-gray-700">
              info@deedivinepropinfra.com  
              <br />
              careers@deedivinepropinfra.com
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-2xl md:text-3xl text-[#4B0082] font-semibold mb-4">
              Let’s Start a Conversation
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
              Whether you’re looking to buy your dream property, explore investment
              opportunities, or simply have questions about our services, our team
              would love to hear from you.
            </p>
       
          </div>

          {/* RIGHT FORM */}
          <form className="bg-[#faf5fb] p-8 rounded-lg shadow-md space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#8b1fa9]"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#8b1fa9]"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#8b1fa9]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#8b1fa9]"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#8b1fa9] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#74197f] transition-all duration-300 text-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0812511164235!2d77.06467587493124!3d28.53728577572461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19b27b4e3ef3%3A0xe0dd3a7e597df24!2sBestech%20Business%20Tower!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-none"
        ></iframe>
      </section>
    </main>
  );
}

export default Contact;
