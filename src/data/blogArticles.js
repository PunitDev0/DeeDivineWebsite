export const categoryColors = {
  "Real Estate": "#dc2626",
  "DDJAY Plots": "#2563eb",
  Investment: "#d97706",
  Legal: "#059669",
  Architecture: "#7c3aed",
};

export const articles = [
  {
    id: 1,
    slug: "what-is-deen-dayal-jan-awas-yojna-ddjay-guide",
    title: "What is Deen Dayal Jan Awas Yojna? DDJAY Guide 2026-27",
    excerpt:
      "Confused about DDJAY? Learn what Deen Dayal Jan Awas Yojna is, eligibility, registration process, documents, and how to verify plot authenticity.",
    category: "DDJAY Plots",
    date: "August 10, 2026",
    readTime: "8 min read",
    image: "/assets/hero-section.webp",
    featured: true,
    author: "Dee Divine PropInfra Team",
    content: [
      "Deen Dayal Jan Awas Yojna (DDJAY) is an affordable housing policy by the Haryana Government aimed at developing high-density small-sized plotted colonies.",
      "Plot sizes under DDJAY range from 100 sq. yards to 180 sq. yards, making them highly accessible for middle-class home buyers.",
      "All DDJAY projects must be HARERA registered, offering complete legal safety and transparent title deeds.",
    ],
  },
  {
    id: 2,
    slug: "ddjay-eligibility-and-documents-checklist",
    title: "DDJAY Eligibility & Documents Required — Full Checklist",
    excerpt:
      "Check DDJAY eligibility criteria, income limits for EWS/LIG/MIG, NRI rules, and the full list of documents required for plot registration.",
    category: "Legal",
    date: "August 5, 2026",
    readTime: "6 min read",
    image: "/assets/hero-section.webp",
    featured: false,
    author: "Legal Advisory Team",
    content: [
      "Any Indian citizen aged 18 or above can apply for DDJAY plots in licensed colonies across Haryana.",
      "Essential KYC documents include Aadhaar Card, PAN Card, passport-size photographs, and bank account details.",
      "NRIs can also purchase DDJAY plots subject to standard RBI/FEMA guidelines for real estate investments in India.",
    ],
  },
  {
    id: 3,
    slug: "ddjay-loan-financing-guide",
    title: "DDJAY Loan & Financing Guide: How to Fund Your Plot",
    excerpt:
      "Is loan available for DDJAY plots? Learn about SBI, HDFC financing, payment plans, LTV ratio, and down payment for Deen Dayal Jan Awas Yojna.",
    category: "Investment",
    date: "July 28, 2026",
    readTime: "10 min read",
    image: "/assets/hero-section.webp",
    featured: false,
    author: "Financial Advisory Team",
    content: [
      "Leading nationalized and private banks like SBI, HDFC, ICICI, and Axis offer home loans up to 75-80% of the DDJAY plot value.",
      "Constructing a home on DDJAY plots opens up additional construction loan options at competitive interest rates.",
      "Flexible payment plans (CLP, PLP, Subvention) are often offered by developers during launch phases.",
    ],
  },
  {
    id: 4,
    slug: "property-investment-in-gurgaon",
    title: "Property Investment in Gurgaon | Real Estate Investment Guide",
    excerpt:
      "Discover the best property investment opportunities in Gurgaon, top locations, investment options and key factors to consider before investing.",
    category: "Real Estate",
    date: "July 20, 2026",
    readTime: "7 min read",
    image: "/assets/hero-section.webp",
    featured: false,
    author: "Real Estate Research Wing",
    content: [
      "Gurgaon remains the premier commercial and residential real estate destination in North India, fueled by corporate expansion and infrastructure.",
      "Key high-growth corridors include Dwarka Expressway, Southern Peripheral Road (SPR), Golf Course Extension, and New Gurgaon sectors.",
      "Investing in plotted land yields higher capital appreciation and freedom of construction compared to multi-story apartments.",
    ],
  },
];

export function getArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(slug, count = 3) {
  const current = getArticleBySlug(slug);
  if (!current) return articles.slice(0, count);

  const sameCategory = articles.filter(
    (a) => a.slug !== slug && a.category === current.category
  );
  const others = articles.filter(
    (a) => a.slug !== slug && a.category !== current.category
  );

  return [...sameCategory, ...others].slice(0, count);
}
