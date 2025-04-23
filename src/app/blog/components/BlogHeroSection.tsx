import {BlogResponse, INewsLetterSection} from "@/app/types/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogTabProps {
    blogData: BlogResponse;
    newsLetterData: INewsLetterSection;
}

const BlogHeroSection: React.FC<BlogTabProps> = ({blogData}) => {
    const bannerBlogs = blogData.data
    .filter((post) => post.heroSection?.isBanner)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    const latestBannerBlog = bannerBlogs.length > 0 ? bannerBlogs[0] : null;

    return (
        <section className="w-full max-w-[1256px] mx-auto mb-8">
            <div className="text-4xl font-semibold">
                <h1>Blogs</h1>
            </div>

            {latestBannerBlog && (
                <div>
                    <Link
                        href={`/blog/${latestBannerBlog.heroSection?.urlSlug}`}
                        key={latestBannerBlog.id}
                        style={{textDecoration: "none"}}
                        rel="noopener noreferrer"
                    >
                        <div className="hero-banner">
                            <div className="banner-left">
                                {latestBannerBlog?.heroSection?.bannerImage?.url && (
                                    <Image
                                        src={latestBannerBlog.heroSection.bannerImage.url}
                                        alt={latestBannerBlog.blogTitle || "Banner"}
                                        height={303}
                                        width={478.83}
                                        className="banner-img"
                                        loading="lazy"
                                    />
                                )}
                            </div>
                            <div className="banner-right">
                                <p className="banner-category">{latestBannerBlog?.heroSection?.category}</p>
                                <h3 className="banner-blog-tittle">{latestBannerBlog?.blogTitle}</h3>
                                <p>{latestBannerBlog?.heroSection?.postedSummary}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )}
        </section>
    );
};

export default BlogHeroSection;
