import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync } from "fs";

const BASE_URL = "https://www.titanicgarage.co.ke";

// List all your pages exactly as in App.jsx
const routes = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/services", changefreq: "weekly", priority: 0.9 },
  { url: "/products", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.7 },
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: BASE_URL });

  // Make sure to write each route into the sitemap
  routes.forEach((route) => sitemap.write(route));
  sitemap.end();

  const data = await streamToPromise(sitemap);

  writeFileSync("public/sitemap.xml", data.toString());

  console.log("✅ Sitemap generated successfully");
}

// Run the generator
generateSitemap();
