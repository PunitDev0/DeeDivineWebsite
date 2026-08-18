import BlogPageContent from "@/components/blogPage";
import { getBlogs } from "@/lib/blogApi";

export const metadata = {
  title: "Blog & Insights | Dee Divine Propinfra",
  description:
    "Expert real estate insights, DDJAY plot guidelines, property investment tips, and market updates from Dee Divine Propinfra.",
  openGraph: {
    title: "Blog & Insights | Dee Divine Propinfra",
    description:
      "Expert real estate tips, DDJAY guidance, and property investment strategies from Dee Divine Propinfra.",
  },
  alternates: {
    canonical: "/blog",
  },
};

export const revalidate = 60;

export default async function BlogPage() {
  const articles = await getBlogs();

  return <BlogPageContent articles={articles} />;
}
