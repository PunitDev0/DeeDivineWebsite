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
    <div className="bg-[#FDFDFD] text-[#0c0d12] min-h-screen pt-36 md:pt-40 pb-24 font-sans relative overflow-hidden">
      {/* 1. PAGE BACKGROUND (Subtle Crimson Radial Glow) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(181,31,59,0.03),transparent_60%)] blur-3xl" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(229,45,79,0.02),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(181,31,59,0.025),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* 2. BLOG HERO */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-20">
          <div className="text-center max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-gradient-to-r from-[#B51F3B] to-[#FF5364]" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#0c0d12]">
                Insights & Articles
              </span>
              <div className="w-8 h-[2px] bg-gradient-to-l from-[#B51F3B] to-[#FF5364]" />
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#0c0d12] mb-6 relative inline-block lg:whitespace-nowrap">
              <span className="relative z-10">Real Estate & DDJAY Insights</span>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(229,45,79,0.1),transparent_70%)] blur-2xl z-0" />
            </h1>
            
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto">
              Stay informed with expert guidance on property investments, DDJAY plot guidelines, market trends, and legal checklists in Delhi NCR.
            </p>
          </div>
        </section>

        {/* 3. FEATURED ARTICLE */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
          {featuredArticle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 backdrop-blur-[16px] border border-white/65 rounded-[28px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] grid lg:grid-cols-[1.2fr_1fr] gap-0 relative group"
            >
              <div className="relative h-[300px] md:h-[400px] lg:h-full min-h-[300px] overflow-hidden bg-neutral-100">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>
              
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#B51F3B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6 flex-wrap">
                    {/* 4. FEATURED BADGE */}
                    <span className="bg-gradient-to-br from-[#B51F3B] to-[#FF5364] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[0_4px_12px_rgba(229,45,79,0.3)]">
                      Featured
                    </span>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B51F3B]">
                      {featuredArticle.category}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#0c0d12] uppercase tracking-tight mb-5 leading-snug">
                    {featuredArticle.title}
                  </h2>
                  
                  <p className="text-neutral-500 text-sm leading-relaxed mb-8 font-medium">
                    {featuredArticle.excerpt}
                  </p>
                </div>
                
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-neutral-200/60">
                  <span className="text-xs font-bold text-neutral-400">
                    {featuredArticle.date} <span className="mx-1">•</span> {featuredArticle.readTime}
                  </span>
                  
                  {/* 5. FEATURED CTA */}
                  <Link
                    href={`/blog/${featuredArticle.slug}`}
                    className="inline-block px-7 py-3 bg-gradient-to-r from-[#B51F3B] to-[#FF5364] text-white text-[11px] font-black uppercase tracking-[0.15em] rounded-full shadow-[0_4px_15px_rgba(229,45,79,0.25)] hover:shadow-[0_8px_25px_rgba(229,45,79,0.4)] hover:-translate-y-0.5 transition-all duration-300 text-center"
                  >
                    Read Article &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </section>

        {/* 6. CATEGORY FILTERS & 7. BLOG ARTICLE GRID */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Category Buttons */}
          <div className="flex items-center justify-center flex-wrap gap-3 mb-16">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2.5 text-[11px] font-black uppercase tracking-wider transition-all duration-300 rounded-full border ${
                    isActive
                      ? "bg-gradient-to-r from-[#B51F3B] to-[#FF5364] text-white border-transparent shadow-[0_6px_20px_rgba(229,45,79,0.25)] -translate-y-0.5"
                      : "bg-white/60 backdrop-blur-md text-[#0c0d12] border-neutral-200/60 hover:-translate-y-0.5 hover:border-[#B51F3B]/30 hover:shadow-sm"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* 8. BLOG CARD GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredArticles.map((article) => (
              <motion.div
                key={article.id || article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="group flex flex-col justify-between bg-white/80 backdrop-blur-[14px] border border-white/60 rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(229,45,79,0.08)] hover:-translate-y-[5px] hover:border-[#B51F3B]/20 transition-all duration-500 ease-out"
              >
                <div>
                  {/* 9. BLOG CARD IMAGE */}
                  <div className="relative h-56 w-full bg-neutral-100 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    />
                  </div>
                  
                  {/* 10. BLOG CARD CONTENT */}
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#B51F3B]">
                        {article.category}
                      </span>
                    </div>
                    
                    <div className="text-[10px] font-bold text-neutral-400 tracking-wider mb-3">
                      {article.date} <span className="mx-1">•</span> {article.readTime}
                    </div>
                    
                    <h3 className="text-[17px] font-black text-[#0c0d12] uppercase tracking-tight mb-4 leading-snug group-hover:text-[#B51F3B] transition-colors duration-300">
                      <Link href={`/blog/${article.slug}`} className="line-clamp-2">
                        {article.title}
                      </Link>
                    </h3>
                    
                    <p className="text-neutral-500 text-xs leading-relaxed font-medium line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-4 flex items-center justify-between border-t border-neutral-100/60 mt-auto">
                  <span className="text-[10px] font-extrabold text-neutral-400 uppercase tracking-widest">{article.author}</span>
                  
                  {/* 11. READ LINK */}
                  <Link
                    href={`/blog/${article.slug}`}
                    className="group/btn flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#B51F3B] to-[#FF5364]"
                  >
                    <span>Read</span>
                    <span className="text-[#FF5364] transition-transform duration-300 group-hover/btn:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
