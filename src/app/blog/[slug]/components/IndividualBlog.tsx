import {Metadata} from "next";
import {BlogsService} from "@/app/services/blogs.service";

import {BlogData, SocialMedia} from "@/app/types/blog";
import SlugPage from "./SlugPage";

export type PageParams = Promise<{slug: string}>;

export interface PageProps {
    params: PageParams;
    searchParams?: Record<string, string[] | undefined>;
}

export async function generateMetadata({params}: {params: PageParams}): Promise<Metadata> {
    const {slug} = await params;

    const data = await BlogsService.getAllHomeBlogs();
    const blogPost = data?.data?.find((post: BlogData) => post.heroSection?.urlSlug === slug);
    const blogMeta = blogPost?.metaData || {};

    const publishedDate = blogPost?.heroSection?.postedDate
        ? new Date(blogPost.heroSection.postedDate).toISOString()
        : blogPost?.publishedAt
        ? new Date(blogPost.publishedAt).toISOString()
        : null;

    const modifiedDate = blogPost?.heroSection?.modifiedDate
        ? new Date(blogPost.heroSection.modifiedDate).toISOString()
        : blogPost?.updatedAt
        ? new Date(blogPost.updatedAt).toISOString()
        : publishedDate || new Date().toISOString();

    return {
        title: blogMeta.metaTitle || "Blog | Stitchflow, SaaS Management as Customizable as Spreadsheets.",
        description:
            blogMeta.metaDescription || "Original and curated content focused on topics of interest to IT leaders.",
        other: {
            "article:published_time": publishedDate ?? "",
            "article:modified_time": modifiedDate ?? "",
        },
        openGraph: {
            title: blogMeta.metaTitle || "Blog | Stitchflow, SaaS Management as Customizable as Spreadsheets.",
            description:
                blogMeta.metaDescription || "Original and curated content focused on topics of interest to IT leaders.",
            type: "article",
            url: blogMeta.url ? `${blogMeta.url}/blog/${slug}` : `https://www.stitchflow.com/blog/${slug}`,
            images: blogMeta?.shareImage?.url ? [{url: blogMeta.shareImage.url}] : [],
            publishedTime: publishedDate || undefined,
            modifiedTime: modifiedDate || undefined,
        },
        twitter: {
            title: blogMeta.metaTitle || "Blog | Stitchflow, SaaS Management as Customizable as Spreadsheets.",
            description:
                blogMeta.metaDescription || "Original and curated content focused on topics of interest to IT leaders.",
            card: "summary_large_image",
            images: blogMeta?.shareImage?.url ? [blogMeta.shareImage.url] : [],
        },
        // verification: {
        //     google: blogMeta.googleVerification || "",
        // },
        alternates: {
            canonical: blogMeta.url ? `${blogMeta.url}/blog/${slug}` : `https://www.stitchflow.com/blog/${slug}`,
        },
    };
}

export default async function IndividualBlog({params}: {params: PageParams}) {
    const {slug} = await params;
    // const [blogPageData, newsLetterData] = await Promise.all([
    //     BlogsService.getAllHomeBlogs(),
    //     BlogsService.getNewsLetter(),
    // ]);

    const [blogPageData] = await Promise.all([
        BlogsService.getAllHomeBlogs(),
    ]);
    const blogPost = blogPageData?.data?.find((post: BlogData) => post.heroSection?.urlSlug === slug);

    if (!blogPost) {
        return <p>Blog not found</p>;
    }
    function getWordCount(text: string): number {
        return text ? text.trim().split(/\s+/).length : 0;
    }

    function generateSlug(name: string): string {
        return name
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
    }

    const publishedDate = blogPost?.heroSection?.postedDate
        ? new Date(blogPost.heroSection.postedDate).toISOString()
        : blogPost?.publishedAt
        ? new Date(blogPost.publishedAt).toISOString()
        : null;
    const modifiedDate = blogPost?.heroSection?.modifiedDate
        ? new Date(blogPost.heroSection.modifiedDate).toISOString()
        : blogPost?.updatedAt
        ? new Date(blogPost.updatedAt).toISOString()
        : publishedDate || new Date().toISOString();
    const individualBlog = await BlogsService.getIndividualBlog(blogPost.documentId);

    const matchedBlogs = blogPageData?.data?.filter((post: BlogData) =>
        individualBlog?.data?.blogs?.some((blog: BlogData) => blog.documentId === post.documentId)
    );
    const authorData = individualBlog?.data?.author || null;
    const blogContent = individualBlog?.data?.description || "";
    const wordCount = getWordCount(blogContent);
    const readingTime = Math.ceil(wordCount / 200);

    const authorSlug = authorData ? generateSlug(authorData.name) : "";
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BlogPosting",
                "@id": `https://www.stitchflow.com/blog/${blogPost.heroSection.urlSlug}#article`,
                url: `https://www.stitchflow.com/blog/${blogPost.heroSection.urlSlug}`,
                headline: blogPost.metaData?.metaTitle || "",
                description: blogPost.metaData?.metaDescription || "",
                datePublished: publishedDate || "",
                dateModified: modifiedDate || "",
                wordCount: wordCount,
                timeRequired: `PT${readingTime}M`,
                mainEntityOfPage: {
                    "@id": `https://www.stitchflow.com/blog/${blogPost.heroSection.urlSlug}#webpage`,
                },
                image: {
                    "@id": `https://www.stitchflow.com/blog/${blogPost.heroSection.urlSlug}#primaryimage`,
                },
                thumbnailUrl: blogPost.heroSection.bannerImage?.formats?.thumbnail?.url || "",
                author: {
                    "@type": "Person",
                    "@id": authorData ? `https://www.stitchflow.com/blog/author/${authorSlug}#person` : "",
                    name: authorData?.name || "",
                    url: authorData ? `https://www.stitchflow.com/blog/author/${authorSlug}` : "",
                    sameAs: authorData?.socialMediaList?.map((social: SocialMedia) => social.mediaLink) || [],
                    description: authorData?.aboutAuthor || "",
                    jobTitle: authorData?.role || "",
                    image: authorData?.avatar?.url || "",
                },
                publisher: {
                    "@id": "https://www.stitchflow.com/#organization",
                },
                isPartOf: {
                    "@id": "https://www.stitchflow.com/#website",
                },
                speakable: {
                    "@type": "SpeakableSpecification",
                    cssSelector: ["h1", ".content", ".blogContent"],
                },
                potentialAction: [
                    {
                        "@type": "ReadAction",
                        target: [`https://www.stitchflow.com/blog/${blogPost.heroSection.urlSlug}`],
                    },
                ],
                articleSection: blogPost.heroSection?.category ? [blogPost.heroSection.category] : ["General"],
                inLanguage: "en-US",
            },
            {
                "@type": "WebPage",
                "@id": `https://www.stitchflow.com/blog/${blogPost.heroSection.urlSlug}#webpage`,
                url: `https://www.stitchflow.com/blog/${blogPost.heroSection.urlSlug}`,
                name: blogPost.metaData?.metaTitle || "",
                description: blogPost.metaData?.metaDescription || "",
                isPartOf: {
                    "@id": "https://www.stitchflow.com/#website",
                },
                primaryImageOfPage: {
                    "@id": `https://www.stitchflow.com/blog/${blogPost.heroSection.urlSlug}#primaryimage`,
                },
                about: {
                    "@id": `https://www.stitchflow.com/blog/${blogPost.heroSection.urlSlug}#article`,
                },
                datePublished: publishedDate || "",
                dateModified: modifiedDate || "",
                inLanguage: "en-US",
            },
            {
                "@type": "ImageObject",
                "@id": `https://www.stitchflow.com/blog/${blogPost.heroSection.urlSlug}#primaryimage`,
                url: blogPost.metaData?.shareImage?.url || "",
                width: 1200,
                height: 630,
            },
            {
                "@type": "WebSite",
                "@id": "https://www.stitchflow.com/#website",
                url: "https://www.stitchflow.com/",
                name: "Stitchflow",
                potentialAction: [
                    {
                        "@type": "SearchAction",
                        target: "https://www.stitchflow.com/?s={search_term_string}",
                        "query-input": "required name=search_term_string",
                    },
                ],
            },
            {
                "@type": "Organization",
                "@id": "https://www.stitchflow.com/#organization",
                name: "Stitchflow",
                url: "https://www.stitchflow.com/",
                logo: {
                    "@type": "ImageObject",
                    "@id": "https://www.stitchflow.com/#logo",
                    url: "https://www.stitchflow.com/logo.png",
                    width: 600,
                    height: 200,
                },
                sameAs: ["https://x.com/stitchflowHQ", "https://www.linkedin.com/company/stitchflowhq"],
            },
        ],
    };

    return (
        <>
            <SlugPage
                blogData={individualBlog?.data}
                // newsLetterData={newsLetterData}
                blogUrl={blogPost.heroSection.urlSlug}
                title={blogPost.blogTitle}
                relatedBlogs={matchedBlogs}
            />

            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
        </>
    );
}
