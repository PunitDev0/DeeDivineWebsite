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
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 bg-white sm:bg-transparent">
      <div className="text-center max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#0c0d12] mb-4">
          DDJAY Plots Real Estate Market in Gurgaon: 2026 Trends & Analysis
        </h2>
        <p className="text-neutral-600 text-sm md:text-base leading-relaxed mt-4">
          Pricing trends, demand drivers, and DTCP approval status shaping the DDJAY plots market in Gurgaon for 2026.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestArticles.map((article) => (
          <div
            key={article.id || article.slug}
            className="bg-white border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-48 w-full bg-neutral-100">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-white/90 backdrop-blur-sm"
                    style={{
                      color: categoryColors?.[article.category] || DEFAULT_CATEGORY_COLOR,
                    }}
                  >
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-[11px] font-bold text-neutral-400 tracking-wider mb-2">
                  {article.date} • {article.readTime}
                </div>
                <h3 className="text-base font-black text-[#0c0d12] uppercase tracking-wide mb-3 leading-snug hover:text-red-500 transition-colors">
                  <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                </h3>
                <p className="text-neutral-600 text-xs leading-relaxed line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center justify-between border-t border-neutral-100 mt-4">
              <span className="text-[11px] font-bold text-neutral-500">{article.author}</span>
              <Link
                href={`/blog/${article.slug}`}
                className="text-xs font-black uppercase text-red-500 hover:underline flex items-center gap-1"
              >
                Read <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center justify-center px-8 py-3.5 bg-[#0c0d12] hover:bg-red-600 text-white text-sm font-black uppercase tracking-wider transition-colors duration-300 rounded-full"
        >
          Read More Blogs →
        </Link>
      </div>
    </section>
  );
}
