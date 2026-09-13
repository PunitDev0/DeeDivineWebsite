import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getBlogs } from "@/lib/blogApi";
import { categoryColors } from "@/data/blogArticles";

const DEFAULT_CATEGORY_COLOR = "#dc2626";

export default async function HomeBlogSection() {
  const articles = await getBlogs();
  const latestArticles = articles.slice(0, 3);

  return (
    <section className="relative py-16 md:py-24 bg-[#fcfcfc] overflow-hidden">
      {/* Subtle Premium Background Glow */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(217,35,62,0.02)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(143,18,48,0.02)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 md:mb-20 text-center">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-[2px] bg-gradient-to-r from-[#8F1230] to-[#FF5A67]" />
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.35em] bg-gradient-to-r from-[#8F1230] to-[#FF5A67] bg-clip-text text-transparent">
              Market Insights
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#0c0d12] max-w-4xl px-2 leading-[1.15]">
            DDJAY Plots Real Estate Market in Gurgaon: 2026 Trends & Analysis
          </h2>
          <p className="text-[#5F6065] text-sm md:text-base leading-relaxed mt-6 px-2 max-w-2xl">
            Pricing trends, demand drivers, and DTCP approval status shaping the DDJAY plots market in Gurgaon for 2026.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.map((article) => (
            <div
              key={article.id || article.slug}
              className="group relative bg-white/60 backdrop-blur-md border border-white/60 hover:border-[#D9233E]/20 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(217,35,62,0.08)] hover:-translate-y-1 transition-all duration-300 rounded-3xl overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle inner hover glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,35,62,0.03)_0%,transparent_60%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

              <div className="relative z-10 flex flex-col flex-grow">
                {/* Image Area */}
                <div className="relative h-[220px] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />
                  {/* Category Label */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#8F1230]/90 via-[#D9233E]/90 to-[#FF5A67]/90 backdrop-blur-md text-white shadow-sm border border-white/20">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="text-[11px] font-extrabold text-[#8b8c91] uppercase tracking-[0.2em] mb-4">
                    {article.date} • {article.readTime}
                  </div>
                  <h3 className="text-lg font-black text-[#0c0d12] uppercase tracking-wide mb-3 leading-snug group-hover:text-[#D9233E] transition-colors line-clamp-3">
                    <Link href={`/blog/${article.slug}`} className="before:absolute before:inset-0">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-[#6B6D72] text-[13px] leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Footer Area */}
              <div className="px-6 md:px-8 py-5 flex items-center justify-between border-t border-neutral-200/50 relative z-10">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#8b8c91]">
                  {article.author}
                </span>
                <span className="text-[11px] font-black uppercase tracking-[0.2em] bg-gradient-to-r from-[#8F1230] to-[#FF5A67] bg-clip-text text-transparent flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                  READ <span>→</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Blogs Button */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#8F1230] via-[#D9233E] to-[#FF5A67] hover:shadow-[0_8px_25px_rgba(217,35,62,0.4)] hover:-translate-y-[2px] text-white rounded-xl text-xs font-black uppercase tracking-[0.2em] transition-all duration-300"
          >
            Read More Blogs →
          </Link>
        </div>
      </div>
    </section>
  );
}
