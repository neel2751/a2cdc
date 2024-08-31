export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/Admin/",
    },
    // sitemap: "https://cdc.construction/sitemap.xml", // sitemap location
    sitemap: "http://cdc.construction/sitemap.xml", // sitemap location
  };
}
