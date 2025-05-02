export const runtime = "nodejs"; // Ensure server execution

import {NextResponse} from "next/server";
import fs from "fs";
import path from "path";
import {BlogData} from "../types/blog";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://website-steel-xi-84.vercel.app";
const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "https://content.stitchflow.com"; // e.g., "https://your-strapi.com"

if (!STRAPI_API_URL) {
    console.warn("⚠️ Warning: STRAPI_API_URL is not defined. Dynamic pages may not be listed in the sitemap.");
}

type Author = {
    id: number;
    documentId: string;
    name: string;
    email: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    aboutAuthor: string | null;
    role: string;
};

type AuthorResponse = {
    data: Author[];
};
/**
 * Get single-type pages from app/<folder> (only direct subfolders)
 */
const getSinglePagesFromAppFolder = (): string[] => {
    const appDir = path.join(process.cwd(), "src/app");
    try {
        const folders = fs
        .readdirSync(appDir, {withFileTypes: true})
        .filter((dirent) => dirent.isDirectory() && !dirent.name.startsWith("(")) // Ignore dynamic routes
        .map((dirent) => `/${dirent.name}`);

        return folders;
    } catch (error) {
        console.error("Error reading app folder:", error);
        return [];
    }
};

/**
 * ==============================
 * 🚀 Strapi API Fetching (Disabled for Now)
 * ==============================
 */

// type StrapiItem = {
//   attributes: {
//     slug: string;
//   };
// };

// /**
//  * Fetch slugs from Strapi collections
//  */
// const fetchSlugsFromCollection = async (collection: string): Promise<string[]> => {
//   try {
//     const res = await fetch(`${STRAPI_API_URL}/${collection}?fields[0]=slug`);
//     if (!res.ok) throw new Error(`Failed to fetch ${collection}: ${res.statusText}`);
//     const data: { data: StrapiItem[] } = await res.json();
//     return data?.data?.map((item) => `/${collection}/${item.attributes.slug}`) || [];
//   } catch (error) {
//     console.error(`Error fetching ${collection} slugs:`, error);
//     return [];
//   }
// };

const fetchSlugsFromCollection = async (): Promise<string[]> => {
    if (!STRAPI_API_URL) return [];

    try {
        const url = `${STRAPI_API_URL}/api/slugs?populate[heroSection][populate]=*`;
        console.log(`Fetching: ${url}`);

        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to fetch slugs: ${res.statusText}`);

        const data: {data: BlogData[]} = await res.json();

        return data?.data
        .map((item) => item?.heroSection?.urlSlug)
        .filter(Boolean)
        .map((slug) => `/blog/${slug}`);
    } catch (error) {
        console.error(`Error fetching blog slugs:`, error);
        return [];
    }
};
const fetchAuthorSlugs = async (): Promise<string[]> => {
    if (!STRAPI_API_URL) return [];

    try {
        const url = `${STRAPI_API_URL}/api/authors?populate=*`; // Fetch authors from Strapi
        console.log(`Fetching: ${url}`);

        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to fetch authors: ${res.statusText}`);

        const data: AuthorResponse = await res.json();
        return data?.data
        .map((author) => {
            const name = author.name;
            if (!name) return null;
            const slug = name.toLowerCase().replace(/\s+/g, "-");
            return `/blog/author/${slug}`;
        })
        .filter((slug): slug is string => slug !== null);
    } catch (error) {
        console.error(`Error fetching author slugs:`, error);
        return [];
    }
};

// /**
//  * Fetch all slugs from Strapi collections
//  */
// const fetchAllStrapiRoutes = async (): Promise<string[]> => {
//   const collections = ["blogs"]; // Add your Strapi collection names here
//   const allRoutes = await Promise.all(collections.map(fetchSlugsFromCollection));
//   return allRoutes.flat();
// };

export async function GET() {
    // Fetch only static routes from `app/` folder
    // const staticRoutes = getSinglePagesFromAppFolder();
    let staticRoutes = getSinglePagesFromAppFolder(); // assign const to let variable

    // Define the list of paths to exclude
    const excludePaths = ["/components", "/types", "/services", "/home", "/api", "/thank-you-page"]; //new

    // Filter out excluded paths
    staticRoutes = staticRoutes.filter((route) => !excludePaths.includes(route)); //new

    const dynamicRoutes = await fetchSlugsFromCollection();
    const authorRoutes = await fetchAuthorSlugs(); // Fetch author slugs dynamically

    const additionalRoutes = [
        "/tools/renewal-tracker",
        "/tools/offboard-it",
        "/tools/roi-calculator",
        "/tools/access-matrix",
        "/fwd-it/job-board",
    ];

    //  const subdomainRoutes = ["https://fwd-it.stitchflow.com/"];
    // 🚀 If enabling Strapi later, use: fetchAllStrapiRoutes()
    const allRoutes = [
        "/",
        ...staticRoutes,
        ...dynamicRoutes,
        ...authorRoutes,
        ...additionalRoutes /*(Uncomment when using Strapi) */,
    ];

    const urls = allRoutes
    .map(
        (route) => `
    <url>
      <loc>${SITE_URL}${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>${route === "/" ? "1.0" : "0.8"}</priority>
    </url>
  `
    )
    .join("");

    //     const externalUrls = ""
    //     .map(
    //         (route) => `
    //     <url>
    //       <loc>${route}</loc>
    //       <lastmod>${new Date().toISOString()}</lastmod>
    //       <priority>0.8</priority>
    //     </url>
    //   `
    //     )
    //     .join("");
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

    return new NextResponse(sitemap, {
        headers: {"Content-Type": "application/xml"},
    });
}
