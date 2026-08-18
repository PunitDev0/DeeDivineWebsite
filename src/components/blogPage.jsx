"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { categoryColors } from "@/data/blogArticles";

const DEFAULT_CATEGORY_COLOR = "#dc2626";

export default function BlogPageContent({ articles = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  const featuredArticle = articles.find((a) => a.featured) || articles[0];

  return (
    <div className="bg-[#f8f9fa] text-[#0c0d12] min-h-screen pt-28 pb-20">
      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-red-500" />
            <span className="text-xs font-extrabold uppercase tracking-[0.35em] text-red-500">
              Insights & Articles
            </span>
            <div className="w-6 h-[2px] bg-red-500" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#0c0d12] mb-4">
            Real Estate & DDJAY Insights
          </h1>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
            Stay informed with expert guidance on property investments, DDJAY plot guidelines, market trends, and legal checklists in Delhi NCR.
          </p>
        </div>

        {/* Featured Article Card */}
        {featuredArticle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-neutral-200 overflow-hidden shadow-lg grid lg:grid-cols-2 gap-0"
          >
            <div className="relative h-[300px] lg:h-full min-h-[300px] bg-neutral-900">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1">
                Featured
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-between">
              <div>
                <span
                  className="inline-block text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 mb-4"
                  style={{
                    color: categoryColors[featuredArticle.category] || DEFAULT_CATEGORY_COLOR,
                    backgroundColor:
                      (categoryColors[featuredArticle.category] || DEFAULT_CATEGORY_COLOR) + "15",
                  }}
                >
                  {featuredArticle.category}
                </span>
                <h2 className="text-xl md:text-3xl font-black text-[#0c0d12] uppercase tracking-tight mb-4 leading-snug">
                  {featuredArticle.title}
                </h2>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-neutral-100">
                <span className="text-xs font-bold text-neutral-400">
                  {featuredArticle.date} • {featuredArticle.readTime}
                </span>
                <Link
                  href={`/blog/${featuredArticle.slug}`}
                  className="px-6 py-2.5 bg-[#0c0d12] hover:bg-red-600 text-white text-xs font-black uppercase tracking-wider transition-colors duration-300 rounded-full"
                >
                  Read Article →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </section>

      {/* Category Filter & Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Category Buttons */}
        <div className="flex items-center justify-center flex-wrap gap-2 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full border ${
                selectedCategory === cat
                  ? "bg-red-500 text-white border-red-500 shadow-md"
                  : "bg-white text-neutral-600 border-neutral-200 hover:border-red-500 hover:text-red-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <motion.div
              key={article.id || article.slug}
              whileHover={{ y: -6 }}
              className="bg-white border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
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
                        color: categoryColors[article.category] || DEFAULT_CATEGORY_COLOR,
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
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
