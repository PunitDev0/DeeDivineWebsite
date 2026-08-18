import { articles as fallbackArticles } from "@/data/blogArticles";

const BLOG_API_URL = process.env.BLOG_API_URL || "https://crm-backend-rxwi.onrender.com/api";
const SITE = "deedivinepropinfra.com";

function isForSite(blog) {
  if (Array.isArray(blog.sites) && blog.sites.length > 0) {
    return blog.sites.some(
      (s) =>
        s === SITE ||
        s === "deedivinepropinfra" ||
        s === `https://${SITE}` ||
        s?.toLowerCase().includes("deedivinepropinfra")
    );
  }
  if (blog.site) {
    const s = blog.site.toLowerCase();
    return s === SITE || s === "deedivinepropinfra" || s.includes("deedivinepropinfra");
  }
  return true;
}

function normalizeBlog(blog) {
  return {
    id: blog._id,
    slug: blog.slug,
    title: blog.title,
    excerpt: blog.excerpt,
    category: blog.category,
    date: new Date(blog.createdAt).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    readTime: blog.readTime,
    image: blog.coverImage || "/assets/hero-section.webp",
    featured: blog.featured,
    author: blog.author,
    sites: blog.sites || (blog.site ? [blog.site] : []),
    isRich: blog.isRich || false,
    content: blog.content || [],
    faqs: blog.faqs || [],
  };
}

export async function getBlogs() {
  try {
    const res = await fetch(`${BLOG_API_URL}/blogs/public?site=${SITE}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`Blog API responded with ${res.status}`);

    const json = await res.json();
    if (!json.success || !Array.isArray(json.data) || json.data.length === 0) {
      return fallbackArticles;
    }

    const filtered = json.data.filter(isForSite);
    const result = filtered.length > 0 ? filtered : json.data;
    return result.map(normalizeBlog);
  } catch (error) {
    console.error("Failed to fetch blogs, using fallback data:", error.message);
    return fallbackArticles;
  }
}

export async function getBlogBySlug(slug) {
  try {
    const res = await fetch(`${BLOG_API_URL}/blogs/public/${slug}?site=${SITE}`, {
      next: { revalidate: 60 },
    });
    if (res.status === 404) {
      return fallbackArticles.find((a) => a.slug === slug) || null;
    }
    if (!res.ok) throw new Error(`Blog API responded with ${res.status}`);

    const json = await res.json();
    if (!json.success || !json.data) {
      return fallbackArticles.find((a) => a.slug === slug) || null;
    }

    if (!isForSite(json.data)) {
      return null;
    }

    return normalizeBlog(json.data);
  } catch (error) {
    console.error("Failed to fetch blog, using fallback data:", error.message);
    return fallbackArticles.find((a) => a.slug === slug) || null;
  }
}

export async function getRelatedBlogs(slug, category, count = 3) {
  const all = await getBlogs();
  const sameCategory = all.filter((a) => a.slug !== slug && a.category === category);
  const others = all.filter((a) => a.slug !== slug && a.category !== category);
  return [...sameCategory, ...others].slice(0, count);
}
