// pages/about.js
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Badge } from '../ui/badge';

function AboutUs() {
  const leaders = [
    {
      id: "01",
      name: "MR. DIWAKAR DIXIT – DIRECTOR & FOUNDER",
      description:
        "A visionary leader who laid the foundation of Dee Divine Propinfra, guiding the company with strategic expertise, futuristic thinking, and unmatched real estate knowledge.",
    },
    {
      id: "02",
      name: "MRS. KAVITA DIXIT – CO-DIRECTOR",
      description:
        "The strength behind smooth operations and project execution. With a keen eye for detail and a deep commitment to customer satisfaction, she ensures that every project reflects excellence and value.",
    },
    {
      id: "03",
      name: "MR. DHANANJAY ARYA – CHIEF EXECUTIVE OFFICER (CEO)",
      description:
        "An innovative leader driving the company’s growth, modern practices, and customer-centric solutions, ensuring Dee Divine Propinfra remains ahead in the competitive property market.",
      learnMore: true,
    },
  ];
  return (
    <main className=" font-playfair">
      <div className='px-1 py-5'>
        <div
          className="relative w-full h-[200px] sm:h-[250px] rounded-xl flex items-center justify-center overflow-hidden bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: "url('/assets/aboutImage.jpg')" }}
        >
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 backdrop-blur-sm text-white p-3 rounded-xl hover:bg-opacity-70 transition-all duration-300">
            <Link href="/listings" className="flex items-center gap-2 hover:underline">
              About Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">

          {/* Left Image Section */}
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-24 h-24 border-dotted border-[3px] border-pink-200 rounded-full opacity-60 hidden md:block"></div>
            <div className="absolute -bottom-8 -right-6 w-20 h-20 border-dotted border-[3px] border-pink-200 rounded-full opacity-60 hidden md:block"></div>

            <div className="relative border-2 border-gray-200 shadow-md rounded-sm w-9/12 mx-auto ">
              <Image
                src="/assets/aboutImage2.jpeg" // replace with your image path
                alt="About Dee Divine Propinfra"
                width={600}
                height={700}
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Text Section */}
          <div>
            {/* Small Badge */}
            <Badge className="bg-[#9b1b8f] text-white px-4 py-1 rounded-none mb-4">
              ABOUT US
            </Badge>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl  tracking-wide text-gray-900 mb-4 leading-snug">
              ABOUT US – <span className="text-[#222]">DEE DIVINE PROPINFRA PVT. LTD.</span>
            </h2>

            {/* Paragraph 1 */}
            <p className="text-gray-600 mb-4 leading-relaxed font-poppins">
              At <span className="font-semibold text-gray-900">Dee Divine Propinfra Pvt. Ltd.</span>, we believe that buying a home or property is one of the most important decisions in life — it’s not just about land or walls, but about
              <span className="font-semibold text-[#9b1b8f]"> dreams, security, and legacy.</span>
              With this philosophy at our core, we have built a reputation as one of the most
              <span className="font-bold text-[#9b1b8f]"> trusted and fast-growing real estate companies,</span> dedicated to providing value-driven and customer-focused property solutions.
            </p>

            {/* Paragraph 2 */}
            <p className="text-gray-600 leading-relaxed">
              Our journey began with a simple yet powerful vision:
              <span className="font-bold text-[#9b1b8f]"> to make real estate transparent, trustworthy, and accessible for everyone.</span>
              Over the years, we have grown from a promising startup into a recognized brand, offering a wide spectrum of real estate services — from
              <span className="font-semibold text-[#9b1b8f]"> affordable housing projects</span>
              to
              <span className="font-semibold text-[#9b1b8f]"> premium developments, commercial spaces, investment opportunities,</span>
              and <span className="font-semibold text-[#9b1b8f]"> end-to-end consultation.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white text-gray-800 px-6 md:px-16 py-20">
        {/* OUR STORY */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 tracking-wide uppercase">
            Our Story
          </h2>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            Every great company has a story, and ours is rooted in{" "}
            <span className="font-semibold">vision, hard work, and trust.</span>{" "}
            Dee Divine Propinfra was founded with the goal of making the
            property-buying process{" "}
            <span className="font-semibold">hassle-free, guided, and reliable.</span>
          </p>

          <p className="text-gray-700 mb-4 text-sm leading-relaxed">
            We noticed a gap in the real estate market — buyers often struggled
            with lack of clarity, complex documentation, and unverified projects.
            Our founders came together to{" "}
            <span className="font-semibold">bridge this gap</span> and build an
            organization that puts{" "}
            <span className="font-semibold">
              customers first, ensures transparency, and delivers on every promise.
            </span>
          </p>

          <p className="text-gray-700 text-sm leading-relaxed">
            Today, Dee Divine Propinfra stands tall as a company that is recognized
            for{" "}
            <span className="font-semibold">
              integrity, quality, and personalized solutions.
            </span>
          </p>
        </div>

        {/* OUR PILLARS OF LEADERSHIP */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl  font-serif font-bold text-gray-900 mb-3 tracking-wide uppercase">
            Our Pillars of Leadership
          </h2>
          <p className="text-gray-700 mb-12 text-sm">
            Behind every milestone achieved by Dee Divine Propinfra is a leadership
            team that brings expertise, vision, and relentless dedication:
          </p>

          <div className="grid md:grid-cols-3 gap-0">
            {/* 01 */}
            <div className="relative bg-white border-t-[6px] border-[#7e2590] px-8 py-10 flex flex-col justify-between text-left shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-none">
              <span className="absolute text-[100px] font-bold text-gray-200 top-0 left-6 -translate-y-7 select-none">
                01
              </span>
              <div className='mt-10'>
                <h3 className="text-base font-semibold text-gray-900 mb-3 uppercase">
                  Mr. Diwakar Dixit – Director & Founder
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  A visionary leader who laid the foundation of Dee Divine Propinfra,
                  guiding the company with strategic expertise, futuristic thinking,
                  and unmatched real estate knowledge.
                </p>
              </div>
            </div>

            {/* 02 */}
            <div className="relative bg-white border-t-[6px] border-[#7e2590] px-8 py-10 flex flex-col justify-between text-left shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-none">
              <span className="absolute text-[100px] font-bold text-gray-200 top-0 left-6 -translate-y-7 select-none">
                02
              </span>
              <div className='mt-10'>
                <h3 className="text-base font-semibold text-gray-900 mb-3 uppercase">
                  Mrs. Kavita Dixit – Co-Director
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  The strength behind smooth operations and project execution. With a
                  keen eye for detail and a deep commitment to customer satisfaction,
                  she ensures that every project reflects excellence and value.
                </p>
              </div>
            </div>

            {/* 03 */}
            <div className="relative bg-white border-t-[6px] border-[#7e2590] px-8 py-10 flex flex-col justify-between text-left shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-none">
              <span className="absolute text-[100px] font-bold text-gray-200 top-0 left-6 -translate-y-7 select-none">
                03
              </span>
              <div className='mt-10'>
                <h3 className="text-base font-semibold text-gray-900 mb-3 uppercase">
                  Mr. Dhananjay Arya – Chief Executive Officer (CEO)
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  An innovative leader driving the company’s growth, modern
                  practices, and customer-centric solutions, ensuring Dee Divine
                  Propinfra remains ahead in the competitive property market.
                </p>
                <a
                  href="#"
                  className="text-[#7e2590] font-semibold text-sm hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Purple Bars */}
        <div className="flex w-full">
          <div className="w-1/3 bg-[#7e2590] h-10"></div>
          <div className="w-1/3 bg-white h-10"></div>
          <div className="w-1/3 bg-[#7e2590] h-10"></div>
        </div>
      </section>

      <section className="font-poppins bg-white text-gray-800 px-6 md:px-16 py-20">
        {/* WHAT MAKES US DIFFERENT */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl uppercase text-[#4B0082] mb-8 tracking-wide font-[Poppins]">
            What Makes Us Different?
          </h2>

          <div className="bg-[#ffffff] border-t-[12px] border-[#8b1fa9] text-sm shadow-md p-6 md:p-10 leading-relaxed">
            <p className="text-gray-700 mb-4">
              In a crowded real estate market,{" "}
              <span className="font-semibold text-[#4B0082]">
                Dee Divine Propinfra Pvt. Ltd.
              </span>{" "}
              stands apart because we don’t just focus on selling properties — we
              focus on <span className="font-semibold">building relationships.</span>
            </p>

            <ul className="list-disc list-inside space-y-1 text-gray-700 font-medium">
              <li>
                <span className="font-semibold text-gray-900">
                  Verified & RERA-approved projects
                </span>{" "}
                only
              </li>
              <li>
                <span className="font-semibold text-gray-900">
                  Affordable and premium housing options
                </span>{" "}
                under one roof
              </li>
              <li>
                <span className="font-semibold text-gray-900">End-to-end support</span>{" "}
                – from consultation to registry
              </li>
              <li>
                <span className="font-semibold text-gray-900">
                  Loan assistance and documentation guidance
                </span>
              </li>
              <li>
                <span className="font-semibold text-gray-900">
                  Commitment to long-term value creation
                </span>
              </li>
            </ul>

            <p className="mt-6 text-gray-700">
              For us, every client is not just a customer, but a partner in growth.
            </p>
          </div>
        </div>

        {/* CORE VALUES & EXPERTISE */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row bg-[#8b1fa9]">
            <div className="hidden md:flex w-1/2 bg-[#8b1fa9] h-6 relative">
              <span className="absolute right-0 top-0 bg-white h-6 w-[6px]"></span>
            </div>
            <div className="hidden md:flex w-1/2 bg-[#8b1fa9] h-6"></div>
          </div>

          <div className="grid md:grid-cols-2 bg-[#ffffff] shadow-md">
            {/* OUR CORE VALUES */}
            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-200 text-sm">
              <h3 className="text-center text-lg font-semibold uppercase text-gray-900 mb-6 tracking-wide">
                Our Core Values
              </h3>

              <p className="text-gray-700 mb-5">
                At Dee Divine Propinfra, everything we do is guided by our{" "}
                <span className="font-semibold">core values:</span>
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  <span className="font-semibold text-gray-900">Trust:</span> The
                  foundation of every deal and relationship.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Transparency:</span>{" "}
                  Complete clarity in processes, promises, and pricing.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Integrity:</span>{" "}
                  Delivering what we commit, every single time.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Customer First:</span>{" "}
                  Tailoring solutions to meet every client’s unique needs.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Excellence:</span>{" "}
                  Going beyond expectations in service and delivery.
                </li>
              </ul>
            </div>

            {/* OUR EXPERTISE */}
            <div className="p-8 md:p-12 text-sm">
              <h3 className="text-center text-lg font-semibold uppercase text-gray-900 mb-6 tracking-wide">
                Our Expertise
              </h3>

              <p className="text-gray-700 mb-5">
                We cater to a wide range of clients — from first-time home buyers to
                seasoned investors and businesses. Our services include:
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  <span className="font-semibold text-gray-900">
                    Residential Solutions:
                  </span>{" "}
                  Affordable housing, luxury apartments, and plotted developments.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Commercial Real Estate:
                  </span>{" "}
                  Offices, retail shops, and business spaces.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Investment Advisory:
                  </span>{" "}
                  Helping clients identify safe, profitable opportunities in real
                  estate.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Documentation & Loan Assistance:
                  </span>{" "}
                  Simplifying the paperwork and financial processes.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Resale & Property Management:
                  </span>{" "}
                  Helping maximize returns on your existing assets.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* COMMITMENT & MISSION/VISION */}
        <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-8">
          {/* OUR COMMITMENT */}
          <div className="p-6 md:p-10 bg-white shadow-md text-sm">
            <h3 className="text-center text-lg font-semibold uppercase text-gray-900 mb-6 tracking-wide">
              Our Commitment
            </h3>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Choosing Dee Divine Propinfra means choosing a partner who walks with
              you throughout your journey. From your very first consultation to the
              final handover and even beyond, we provide{" "}
              <span className="font-semibold text-gray-900">
                personalized guidance and continuous support.
              </span>
            </p>

            <p className="text-gray-700 leading-relaxed">
              We are committed to being more than just a real estate company. We are
              here to be a{" "}
              <span className="font-semibold text-gray-900">
                trusted advisor, a dependable partner, and a lifelong ally
              </span>{" "}
              in helping you make the right property decisions.
            </p>
          </div>

          {/* OUR MISSION & VISION */}
          <div className="p-6 md:p-10 bg-white  text-sm">
            <h3 className="text-center text-lg font-semibold uppercase text-gray-900 mb-6 tracking-wide">
              Our Mission & Vision
            </h3>

            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>
                <span className="font-semibold text-gray-900">Mission:</span> To
                revolutionize the real estate experience by offering{" "}
                <span className="font-semibold text-gray-900">
                  transparent, trustworthy, and customer-centric solutions,
                </span>{" "}
                making homeownership and property investment simple and rewarding.
              </li>
              <li>
                <span className="font-semibold text-gray-900">Vision:</span> To be
                recognized as one of the{" "}
                <span className="font-semibold text-gray-900">
                  most reliable, ethical, and customer-focused real estate companies,
                </span>{" "}
                known for creating opportunities that empower both families and
                investors.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="font-poppins bg-white text-gray-800 px-6 md:px-20 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[300px_1fr] gap-10 items-start">
        {/* Left Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/assets/diwakar-dixit.jpeg" // 👉 replace with your actual image path
            alt="Mr. Diwakar Dixit"
            width={300}
            height={380}
            className="rounded-none shadow-md object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-1">
            Mr. Diwakar Dixit
          </h2>
          <p className="uppercase text-xs font-semibold text-gray-600 mb-6">
            Founder & Director, Dee Divine Propinfra Pvt. Ltd.
          </p>

          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            With over 18 years of extensive experience in the real estate industry,
            Mr. Diwakar Dixit is a seasoned strategist and respected leader in real
            estate consulting, project execution, and land solutions. As the Founder
            & Director of Dee Divine Propinfra Pvt. Ltd., he has positioned the
            company as a key player across North India, particularly in Delhi NCR,
            Gurgaon, and the wider Haryana and Uttar Pradesh regions.
          </p>

          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            Mr. Diwakar has successfully collaborated with some of the most reputed
            developers in the country, including DLF, M3M, Elan, BPTP, AIPL,
            Silverglades, Puri, Smart World, Shapoorji Pallonji, Whiteland,
            Signature Global, Central Park, Trehan, CLS, Spaze, Breeze, Ashiana,
            Ganga Realty, Yashvi Homes, YP Infratech, and many others. These
            partnerships have been built on trust, transparency, and a shared
            commitment to delivering excellence in real estate.
          </p>

          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            A major strength of Mr. Diwakar’s leadership lies in his hands-on
            experience with land liaisoning—facilitating clearances, compliance, and
            smooth coordination between developers, landowners, and government
            authorities. His proficiency in navigating land acquisition processes
            and securing necessary regulatory approvals has been crucial in
            launching and executing several successful projects.
          </p>
        </div>
      </div>
      <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            In addition, he brings specialized knowledge in government-supported
            housing policies, particularly within affordable housing and commercial
            asset development. His approach ensures that every project is aligned
            with market trends, policy frameworks, and the evolving needs of buyers
            and investors.
          </p>

          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            Operating actively across Delhi, Gurgaon, Noida, Ghaziabad, Vaishali,
            Vasundhara, and the broader regions of Haryana and UP, Mr. Diwakar’s
            unwavering focus on ethical practices, personalized service, and
            strategic project management has earned Dee Divine Propinfra a
            distinguished reputation in the real estate ecosystem.
          </p>

          <p className="text-gray-700 text-sm leading-relaxed">
            Under his visionary leadership, the company continues to grow as a
            trusted real estate entity known for end-to-end solutions, strategic
            tie-ups, and long-term client relationships.
          </p>
    </section>
    </main>
  );
}

export default AboutUs;