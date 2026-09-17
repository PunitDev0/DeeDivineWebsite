import { notFound } from "next/navigation";
import BlogDetailPage from "@/components/blogDetailPage";
import { getBlogBySlug, getRelatedBlogs } from "@/lib/blogApi";

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = await getBlogBySlug(slug);

  if (!article) {
    return { title: "Article Not Found | Dee Divine Propinfra" };
  }

  return {
    title: `${article.title} | Dee Divine Propinfra`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | Dee Divine Propinfra`,
      description: article.excerpt,
      images: [article.image],
    },
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
  };
}

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const article = await getBlogBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = await getRelatedBlogs(slug, article.category);

  const jsonLd = slug === 'top-5-best-real-estate-companies-in-gurgaon' ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": "https://deedivinepropinfra.com/blog/top-5-best-real-estate-companies-in-gurgaon#blogposting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://deedivinepropinfra.com/blog/top-5-best-real-estate-companies-in-gurgaon"
    },
    "headline": "Top 5 Best Real Estate Companies in Gurgaon in 2026: Projects, Services & Buyer Guide",
    "description": "Explore the top 5 best real estate companies in Gurgaon in 2026. Compare developers, services, project types and key checks before buying property in Gurgaon.",
    "image": {
      "@type": "ImageObject",
      "url": "https://res.cloudinary.com/dwlvsr0zr/image/upload/v1789112859/dee-divine/blogs/t7zwcxigarga2qwfgi6y.png"
    },
    "author": {
      "@type": "Organization",
      "name": "Dee Divine Propinfra",
      "url": "https://deedivinepropinfra.com/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dee Divine Propinfra",
      "url": "https://deedivinepropinfra.com/"
    },
    "datePublished": "2026-09-11",
    "dateModified": "2026-09-11",
    "articleSection": "Real Estate",
    "keywords": [
      "top 5 best real estate companies in Gurgaon",
      "best real estate companies in Gurgaon",
      "top real estate companies in Gurgaon",
      "real estate companies in Gurgaon",
      "best property companies in Gurgaon"
    ],
    "inLanguage": "en-IN"
  } : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <BlogDetailPage article={article} relatedArticles={relatedArticles} />
    </>
  );
}
