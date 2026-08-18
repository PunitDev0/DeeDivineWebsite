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

  return <BlogDetailPage article={article} relatedArticles={relatedArticles} />;
}
