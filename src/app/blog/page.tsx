import {Metadata} from "next";
import React from "react";
import {viewport} from "../../../viewportConfig";
import {BlogsService} from "@/app/services/blogs.service";
import {ResourceContentMetaImageApi} from "../services/resource.service";
import BlogHomePage from "./components/BlogHomePage";
import "./blog.css";

export {viewport};

async function getMetadata(): Promise<Metadata> {
    try {
        const respMetaData = await ResourceContentMetaImageApi.getResourceImage();
        const metaData = respMetaData?.data?.metaData || {};

        return {
            title: metaData.metaTitle || "Blog | Stitchflow, SaaS Management as Customizable as Spreadsheets.",
            description:
                metaData.metaDescription || "Original and curated content focused on topics of interest to IT leaders.",
            openGraph: {
                title: metaData.metaTitle || "Blog | Stitchflow, SaaS Management as Customizable as Spreadsheets.",
                description:
                    metaData.metaDescription ||
                    "Original and curated content focused on topics of interest to IT leaders.",
                type: "website",
                url: metaData.url ? `${metaData.url}/blog` : "https://www.stitchflow.com/blog",
                images: metaData.shareImage?.url ? [{url: metaData.shareImage.url}] : [],
            },
            twitter: {
                title: metaData.metaTitle || "Blog | Stitchflow, SaaS Management as Customizable as Spreadsheets.",
                description:
                    metaData.metaDescription ||
                    "Original and curated content focused on topics of interest to IT leaders.",
                card: "summary_large_image",
                images: metaData.shareImage?.url ? [metaData.shareImage.url] : [],
            },
            // verification: {
            //     google: metaData.googleVerification || "",
            // },
            alternates: {
                canonical: `${metaData.url}/blog` || "https://www.stitchflow.com/blog",
            },
        };
    } catch (error) {
        console.error("Error fetching metadata:", error);
        return {
            title: "Blog | Stitchflow, SaaS Management as Customizable as Spreadsheets.",
            description: "Original and curated content focused on topics of interest to IT leaders.",
            openGraph: {type: "website", url: "https://www.stitchflow.com/blog"},
            twitter: {card: "summary_large_image"},
            verification: {google: ""},
        };
    }
}

export async function generateMetadata(): Promise<Metadata> {
    return await getMetadata();
}

// export default async function BlogPage() {
//     const [blogPageData, newsLetterData] = await Promise.all([
//         BlogsService.getAllHomeBlogs(),
//         BlogsService.getNewsLetter(),
//     ]);
//     return <BlogHomePage blogData={blogPageData} newsLetterData={newsLetterData} />;
// }

export default async function BlogPage({
    searchParams,
}: {
    searchParams: Promise<{[key: string]: string | string[] | undefined}>;
}) {
    const resolvedParams = await searchParams;
    const currentPage =
        typeof resolvedParams?.page === "string"
            ? Number(resolvedParams.page)
            : Array.isArray(resolvedParams?.page)
            ? Number(resolvedParams.page[0])
            : 1;

    const [blogPageData, newsLetterData] = await Promise.all([
        BlogsService.getAllBlogs(),
        BlogsService.getNewsLetter(),
    ]);
    console.log("Fetched Blogs for Page:", currentPage);
    return <BlogHomePage blogData={blogPageData} newsLetterData={newsLetterData} />;
}
