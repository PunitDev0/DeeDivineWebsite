"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { categoryColors } from "@/data/blogArticles";

const DEFAULT_CATEGORY_COLOR = "#dc2626";

export default function BlogDetailPage({ article, relatedArticles = [] }) {
  if (!article) return null;

  return (
    <div className="bg-[#f8f9fa] text-[#0c0d12] min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-bold text-neutral-400 uppercase tracking-wider mb-8">
          <Link href="/" className="hover:text-red-500 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-red-500 transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-[#0c0d12] truncate max-w-[200px]">{article.title}</span>
        </nav>

        {/* Title & Metadata */}
        <div className="mb-8">
          <span
            className="inline-block text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 mb-4"
            style={{
              color: categoryColors[article.category] || DEFAULT_CATEGORY_COLOR,
              backgroundColor:
                (categoryColors[article.category] || DEFAULT_CATEGORY_COLOR) + "15",
            }}
          >
            {article.category}
          </span>
          <h1 className="text-2xl md:text-4xl font-black text-[#0c0d12] uppercase tracking-tight leading-snug mb-4">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-xs font-bold text-neutral-500">
            <span>By {article.author}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-[320px] md:h-[450px] w-full mb-10 overflow-hidden rounded-md bg-neutral-900 shadow-md">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Excerpt */}
        <p className="text-neutral-700 text-base md:text-lg leading-relaxed font-medium mb-10 pb-8 border-b border-neutral-200">
          {article.excerpt}
        </p>

        {/* Body Content */}
        {article.isRich ? (
          <div className="blog-rich-content text-neutral-800 text-sm md:text-base leading-relaxed space-y-6 mb-12">
            <style dangerouslySetInnerHTML={{ __html: `
              .blog-rich-content h2 {
                font-size: 1.5rem;
                font-weight: 800;
                color: #0c0d12;
                margin-top: 2rem;
                margin-bottom: 0.75rem;
                text-transform: uppercase;
                border-bottom: 2px solid #ef4444;
                padding-bottom: 0.25rem;
                display: inline-block;
              }
              .blog-rich-content h3 {
                font-size: 1.2rem;
                font-weight: 700;
                color: #1f2937;
                margin-top: 1.5rem;
                margin-bottom: 0.5rem;
              }
              .blog-rich-content p {
                color: #374151;
                line-height: 1.8;
                margin-bottom: 1rem;
              }
              .blog-rich-content ul {
                list-style-type: disc;
                padding-left: 1.5rem;
                margin-bottom: 1rem;
              }
              .blog-rich-content li {
                margin-bottom: 0.5rem;
              }
              .blog-rich-content strong {
                color: #0c0d12;
                font-weight: 700;
              }
              .blog-rich-content a {
                color: #dc2626;
                text-decoration: underline;
                font-weight: 600;
              }
            `}} />
            {article.content.map((block, i) => (
              <div key={i} dangerouslySetInnerHTML={{ __html: block }} />
            ))}
          </div>
        ) : (
          <div className="space-y-6 mb-12">
            <h3 className="text-sm uppercase tracking-widest text-red-500 font-extrabold mb-4">
              Key Highlights & Information
            </h3>
            {article.content.map((point, i) => (
              <div key={i} className="flex items-start gap-4 pb-6 border-b border-neutral-200">
                <span className="text-sm font-black text-red-500 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-neutral-700 text-sm md:text-base leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* FAQs Section */}
        {article.faqs && article.faqs.length > 0 && (
          <div className="mt-12 pt-8 border-t border-neutral-200 mb-12">
            <h3 className="text-base font-black text-[#0c0d12] uppercase tracking-wider mb-6">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {article.faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-neutral-200 p-6 rounded-md shadow-sm">
                  <h4 className="text-sm md:text-base font-black text-[#0c0d12] mb-2">
                    Q: {faq.question}
                  </h4>
                  <p className="text-neutral-600 text-xs md:text-sm leading-relaxed pl-3 border-l-2 border-red-500">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-16 pt-12 border-t border-neutral-200">
            <h3 className="text-lg font-black uppercase text-[#0c0d12] mb-8">
              Related Articles
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <motion.div
                  key={rel.id || rel.slug}
                  whileHover={{ y: -4 }}
                  className="bg-white border border-neutral-200 p-4 rounded-md shadow-sm"
                >
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 inline-block mb-2"
                    style={{
                      color: categoryColors[rel.category] || DEFAULT_CATEGORY_COLOR,
                      backgroundColor:
                        (categoryColors[rel.category] || DEFAULT_CATEGORY_COLOR) + "15",
                    }}
                  >
                    {rel.category}
                  </span>
                  <h4 className="text-xs font-black uppercase tracking-wide text-[#0c0d12] mb-2 line-clamp-2 hover:text-red-500">
                    <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                  </h4>
                  <Link
                    href={`/blog/${rel.slug}`}
                    className="text-[11px] font-bold text-red-500 uppercase flex items-center gap-1 mt-3"
                  >
                    Read →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
