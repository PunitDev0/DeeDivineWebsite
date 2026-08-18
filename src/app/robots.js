export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/dashboard/",
          "/auth/",
          "/wp-admin/",
        ],
      },
      {
        userAgent: "Amazonbot",
        disallow: ["/"],
      },
      {
        userAgent: "PetalBot",
        disallow: ["/"],
      },
    ],
    sitemap: "https://deedivinepropinfra.com/sitemap.xml",
  };
}
