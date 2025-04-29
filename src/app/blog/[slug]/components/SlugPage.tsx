"use client";

// import React, {useState, useRef} from "react";
import {useParams, useRouter} from "next/navigation";
import styles from "../BlogPost.module.css";
import Image from "next/image";
import TableOfContents from "./TableOfContents";
import {parse} from "node-html-parser";
import Link from "next/link";
import Head from "next/head";
// import {BlogData, BlogResponse, INewsLetterSection} from "@/app/types/blog";
import {BlogData, BlogResponse} from "@/app/types/blog";
import FAQComponent from "./FAQComponent";
import QuotesComponent from "./QuotesComponent";
import CTAComponent from "./CTAComponent";
import BlogCard from "../../components/BlogCard";
// import {toast, Id} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialMediaComponent from "./SocialMediaComponent";

const API_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

const formatSlug = (title: string): string => {
    return title
    .replace(/\*\*/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
};

const formatDate = (dateString: string): string => {
    if (!dateString) return "";

    const parsedDate = new Date(dateString);
    if (isNaN(parsedDate.getTime())) {
        console.error("Invalid date format:", dateString);
        return "Invalid Date";
    }

    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
    }).format(parsedDate);
};

const extractCustomData = (htmlString: string) => {
    const modifyHeadingsWithId = (htmlString: string): string => {
        const root = parse(htmlString);
        root.querySelectorAll("h2").forEach((el) => {
            const title = el.text.trim();
            el.setAttribute("id", formatSlug(title));
        });
        return root.toString();
    };

    // Modify the HTML string to add IDs to headings
    const modifiedHtml = modifyHeadingsWithId(htmlString);

    const ctaRegex = /"_CTA"\s*:\s*(\{[\s\S]*?\})/;
    const quotesRegex = /"_quotes"\s*:\s*(\{[\s\S]*?\})/;

    let ctaData = null;
    let quotesData = null;
    let cleanedHtml = modifiedHtml;

    const ctaMatch = modifiedHtml.match(ctaRegex);
    if (ctaMatch) {
        try {
            ctaData = JSON.parse(ctaMatch[1]);
            cleanedHtml = cleanedHtml.replace(ctaRegex, "");
        } catch (error) {
            console.error("Error parsing CTA JSON:", error);
        }
    }

    const quotesMatch = modifiedHtml.match(quotesRegex);
    if (quotesMatch) {
        try {
            quotesData = JSON.parse(quotesMatch[1]);
            cleanedHtml = cleanedHtml.replace(quotesRegex, "");
        } catch (error) {
            console.error("Error parsing Quotes JSON:", error);
        }
    }

    // Remove any remaining ?? characters
    cleanedHtml = cleanedHtml.replace(/\?\?/g, "").trim();

    return {ctaData, quotesData, cleanedHtml};
};
// interface BlogTabProps {
//     blogData: BlogData;
//     newsLetterData: {data: INewsLetterSection};
//     blogUrl?: string;
//     title?: string;
//     relatedBlogs: BlogResponse;
// }
interface BlogTabProps {
    blogData: BlogData;
    // newsLetterData: {data: INewsLetterSection};
    blogUrl?: string;
    title?: string;
    relatedBlogs: BlogResponse;
}
// const SlugPage: React.FC<BlogTabProps> = ({blogData, newsLetterData, blogUrl, title, relatedBlogs}) => {
const SlugPage: React.FC<BlogTabProps> = ({blogData, blogUrl, title, relatedBlogs}) => {
    // const [value, setValue] = useState("");
    // const toastShown = useRef<Id | null>(null);

    const router = useRouter();
    const {slug} = useParams<{slug: string}>();

    if (!slug) {
        router.replace("/404");
        return <p>Redirecting...</p>;
    }

    const blogPost: BlogData = blogData;

    const metaData = blogPost?.metaData;

    const extractHeadings = (htmlString: string): {title: string; id: string}[] => {
        const root = parse(htmlString);
        return root.querySelectorAll("h2").map((el) => {
            const title = el.text.trim();
            const id = formatSlug(title);
            el.setAttribute("id", id);
            return {title, id};
        });
    };

    const headings = extractHeadings(blogPost?.description || "");

    const {ctaData, quotesData, cleanedHtml: modifiedDescription} = extractCustomData(blogPost?.description || "");

    const formatAuthorSlug = (name: string): string => {
        return name.toLowerCase().replace(/\s+/g, "-");
    };
    const authorSlug = formatAuthorSlug(blogPost?.author?.name || "");
    // const linkedInMedia = blogPost?.author?.socialMediaList?.find((media) => media.mediaList === "LinkedIn");
    // const twitterMedia = blogPost?.author?.socialMediaList?.find((media) => media.mediaList === "Twitter");

    // const handleNewsletterSubmit = async () => {
    //     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //     const subscribedAt = new Date().toISOString();
    //     const errorToastId = "newsletter-error";
    //     const successToastId = "newsletter-success";

    //     console.log("Before dismissing, toastShown.current:", toastShown.current);
    //     toast.dismiss(errorToastId);
    //     toast.dismiss(successToastId);
    //     if (toastShown.current) {
    //         toast.dismiss(toastShown.current);
    //         console.log("Dismissed previous toast:", toastShown.current);
    //         toastShown.current = null;
    //     }
    //     console.log("After dismissing, toastShown.current:", toastShown.current);
    //     if (!value) {
    //         toastShown.current = toast.error("Please enter the email", {
    //             toastId: errorToastId,
    //             position: "top-center",
    //         });
    //         console.log("Error toast shown, new toastShown.current:", toastShown.current);
    //         return;
    //     } else if (!emailRegex.test(value)) {
    //         toastShown.current = toast.warning("Please enter a valid email", {
    //             toastId: errorToastId,
    //             position: "top-center",
    //         });
    //         console.log("Warning toast shown, new toastShown.current:", toastShown.current);
    //         return;
    //     } else {
    //         try {
    //             const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/newsletter-mails`, {
    //                 method: "POST",
    //                 headers: {"Content-Type": "application/json"},
    //                 body: JSON.stringify({data: {email: value, subscribedAt: subscribedAt}}),
    //             });
    //             const result = await response.json();

    //             if (result) {
    //                 setValue("");

    //                 if (toastShown.current) {
    //                     toast.dismiss(toastShown.current);
    //                     toastShown.current = null;
    //                 }

    //                 toastShown.current = toast.success("Your email has been submitted!", {
    //                     toastId: successToastId,
    //                     position: "top-center",
    //                     autoClose: 3000,
    //                 });

    //                 return;
    //             }
    //         } catch (error) {
    //             console.error("Error submitting newsletter:", error);
    //             toastShown.current = toast.error("Failed to submit your email. Please try again.", {
    //                 toastId: errorToastId,
    //                 position: "top-center",
    //             });
    //             console.log("Error toast shown due to fetch error, new toastShown.current:", toastShown.current);
    //         }
    //     }
    // };
    // const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (event.key === "Enter") {
    //         handleNewsletterSubmit();
    //     }
    // };

    return (
        <>
            <Head>
                <title>{metaData?.metaTitle || "Blog | Stitchflow"}</title>
                <meta name="description" content={metaData?.metaDescription || "Default blog description"} />
                <meta property="og:title" content={metaData?.metaTitle || "Blog | Stitchflow"} />
                <meta property="og:description" content={metaData?.metaDescription || "Default blog description"} />
                <meta property="og:type" content="article" />
                <meta name="twitter:title" content={metaData?.metaTitle || "Blog | Stitchflow"} />
                <meta name="twitter:description" content={metaData?.metaDescription || "Default blog description"} />
                {/* {metaData?.googleVerification && (
                    <meta name="google-site-verification" content={metaData.googleVerification} />
                )} */}
                {blogPost?.heroSection?.urlSlug && (
                    <link rel="canonical" href={`${API_BASE_URL}/blog/${blogPost.heroSection.urlSlug}`} />
                )}
            </Head>
            <div className="flex flex-col items-center w-full px-6">
                <main className="flex justify-between w-full max-w-[1256px] mx-auto">
                    <div className="lg:grid lg:grid-cols-[3fr_1fr] lg:gap-4 w-full">
                        <article className="px-4 pt-12">
                            <div
                                // className="inline-block bg-[#F1ACC0] text-gray-600 rounded-4xl mb-4 px-4 py-1"
                                className="inline-block bg-[#f7f1fe] rounded-4xl mb-4 px-4 py-1 text-[#7b7481]"
                            >
                                {blogPost?.heroSection.category}
                            </div>
                            <h1 className="text-xl md:text-2xl font-medium mb-2 md:mb-4">
                                {blogPost?.blogTitle || "Untitled"}
                            </h1>
                            <p className="text-gray-600 text-lg">{blogPost.heroSection.postedSummary}</p>
                            <p className="text-gray-500 text-sm mt-4 mb-2">
                                {blogPost.heroSection?.modifiedDate ? (
                                    <>Modified on {formatDate(blogPost.heroSection.modifiedDate)}</>
                                ) : (
                                    <>Published on {formatDate(blogPost.heroSection.postedDate)}</>
                                )}
                                {blogPost.heroSection?.readTime && ` | ${blogPost.heroSection.readTime} minutes`}
                            </p>

                            <time dateTime={blogPost.heroSection?.postedDate} hidden>
                                Published on {formatDate(blogPost.heroSection?.postedDate)}
                            </time>
                            <time dateTime={blogPost.heroSection?.modifiedDate} hidden>
                                Modified on {formatDate(blogPost.heroSection?.modifiedDate)}
                            </time>

                            <div className="mt-4 mb-6 w-full max-w-xl">
                                <Image
                                    height={250}
                                    width={600}
                                    className={styles.heroImage}
                                    src={blogPost.heroSection?.bannerImage?.url || "/images/default-banner.jpg"}
                                    alt={blogPost?.heroSection?.bannerImage?.alternativeText || "Default Alt Text"}
                                    priority
                                    loading="eager"
                                />
                            </div>

                            <div className={`${styles.content} ${styles.blogContent}`}>
                                <section
                                    className={styles.content}
                                    dangerouslySetInnerHTML={{
                                        __html: modifiedDescription.replace(/<a /g, `<a class="${styles.link}" `),
                                    }}
                                />
                                {quotesData && (
                                    <QuotesComponent
                                        description={quotesData.description}
                                        name={quotesData.name}
                                        role={quotesData.role}
                                    />
                                )}
                                {ctaData && (
                                    <CTAComponent
                                        heading={ctaData.heading}
                                        buttonName={ctaData["button-name"]}
                                        buttonLink={ctaData["button-link"]}
                                    />
                                )}
                            </div>
                            <SocialMediaComponent blogUrl={blogUrl} title={title} />
                            {blogPost?.author && (
                                <div className="rounded-3xl bg-[#F8F5F3] shadow-sm p-6 hidden mt-4 lg:block mb-4">
                                    <div className="flex gap-2 items-center">
                                        <Link href={`/blog/author/${authorSlug}`}>
                                            <Image
                                                height={36}
                                                width={36}
                                                src={
                                                    blogPost?.author?.avatar?.url ||
                                                    "/images/default-avatar.png"
                                                }
                                                alt="Profile"
                                                className={styles.profileImage}
                                                loading="lazy"
                                            />
                                        </Link>
                                        <div>
                                            <div className={styles.profileName}>{blogPost.author.name}</div>
                                            <p className={styles.role}>{blogPost.author.role}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="font-normal text-[14px] leading-[20px] text-[#363338] tracking-[0%] font-[Geist] mt-2" >
                                            {blogPost.author.aboutAuthor}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </article>

                        <div className={styles.rightColumn}>
                            <div className="sticky top-[120px]">
                                <div className="min-h-screen overflow-y-auto pr-2 custom-scrollbar">
                                    <div className="hidden lg:block mb-4">
                                        <div className="rounded-4xl bg-[#F8F5F3] shadow-sm p-6">
                                            <h6
                                                // className="text-xl font-medium mb-4 pb-2 border-b border-[#E6E6E6]"
                                                className="font-medium text-[16px] leading-[20px] text-[#363338] tracking-[0%] font-[Geist] mb-4"
                                                role="heading"
                                                aria-level={2}
                                            >
                                                Contents
                                            </h6>
                                            <TableOfContents sections={headings} />
                                        </div>
                                    </div>
                                </div>
                                {/* {newsLetterData && (
                                    <div className={styles.newsletterCard}>
                                        <div className={styles.newsletterTitle}>
                                            {newsLetterData?.data?.newsLetterHeading}
                                        </div>
                                        <div className={styles.newsletterSubtitle}>
                                            {newsLetterData?.data?.subscribeText}
                                        </div>

                                        <div className={styles.inputWrapper}>
                                            <input
                                                type="email"
                                                placeholder="Enter your e-mail"
                                                className={styles.emailInput}
                                                style={{background: "#F6F6F6"}}
                                                value={value}
                                                onChange={(e) => setValue(e.target.value)}
                                                onKeyDown={handleKeyDown}
                                            />

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="1em"
                                                viewBox="0 0 448 512"
                                                className={styles.inputIcon}
                                                onClick={handleNewsletterSubmit}
                                                style={{cursor: "pointer"}}
                                            >
                                                <path
                                                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </div>

                                        <div className={styles.privacyText}>
                                            {newsLetterData?.data?.newsLetterdescription
                                            .split("Privacy Policy")
                                            .map((text, index, arr) => (
                                                <div key={index}>
                                                    {text}
                                                    {index !== arr.length - 1 && (
                                                        <Link href="/privacy" className={styles.privacyLink}>
                                                            Privacy Policy
                                                        </Link>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )} */}
                            </div>
                        </div>
                    </div>
                </main>

                <div>
                    <FAQComponent faqData={blogPost.faqSection} />
                </div>
                <div className="w-full px-6 py-20">
                    {Array.isArray(relatedBlogs) && relatedBlogs.length > 0 && (
                        <div className="w-full max-w-[1256px] mx-auto">
                            <div className="mb-8 text-4xl text-gray-500 text-center md:text-start">
                                Related Articles
                            </div>
                            <div className="w-full flex flex-col md:flex-row max-w-[360px] md:max-w-full mx-auto gap-6">
                                {relatedBlogs.map((post: BlogData) => (
                                    <Link
                                        href={`/blog/${post.heroSection?.urlSlug}`}
                                        key={post.id}
                                        className="w-full"
                                        rel="noopener noreferrer"
                                    >
                                        <BlogCard
                                            altText={post.heroSection?.bannerImage?.alternativeText || "Banner Image"}
                                            title={post.blogTitle || "Untitled"}
                                            bannerImage={
                                                post.heroSection?.bannerImage?.url || "/images/default-placeholder.png"
                                            }
                                            category={post.heroSection?.category || "Uncategorized"}
                                            summary={post.heroSection?.postedSummary || "No summary available"}
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default SlugPage;
