import {BlogResponse, INewsLetterSection} from "@/app/types/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogTabProps {
    blogData: BlogResponse;
    newsLetterData: INewsLetterSection;
}

const BlogHeroSection: React.FC<BlogTabProps> = ({blogData}) => {
    const bannerBlogs = blogData.data?.filter((post) => post.heroSection?.isBanner)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    const latestBannerBlog = bannerBlogs.length > 0 ? bannerBlogs[0] : null;

    return (
        <>
            <section className="w-full px-6 py-20 md:py-20 text-4xl font-semibold bg-[#e4dbd0]">
                <h1 className="text-center">Blogs</h1>
            </section>
            <section className="w-full bg-[#f8f5f3] px-6 pt-20 pb-14">
                <div className="max-w-[1256px] mx-auto">
                    <div className="text-4xl font-semibold mb-8">
                        <h2>Featured</h2>
                    </div>
                    {latestBannerBlog && (
                        <Link
                            href={`/blog/${latestBannerBlog.heroSection?.urlSlug}`}
                            key={latestBannerBlog.id}
                            style={{textDecoration: "none"}}
                            rel="noopener noreferrer"
                        >
                            <div className="w-full max-w-[500px] md:max-w-full mx-auto flex flex-col md:flex-row items-center md:items-start justify-between md:justify-start gap-6">
                                {latestBannerBlog?.heroSection?.bannerImage?.url && (
                                    <div className="w-full lg:max-w-1/2">
                                        <Image
                                            src={latestBannerBlog.heroSection.bannerImage.url}
                                            alt={latestBannerBlog.blogTitle || "Banner"}
                                            height={457}
                                            width={590}
                                            className="rounded-4xl"
                                            loading="lazy"
                                        />
                                    </div>
                                )}
                                <div className="w-full lg:max-w-1/2 lg:mt-4 lg:ml-1.5">
                                    <p className="font-semibold text-[#f25c30]">{latestBannerBlog?.heroSection?.category}</p>
                                    <h3 className="text-2xl lg:text-4xl lg:leading-12 font-medium mb-2 mt-1">{latestBannerBlog?.blogTitle}</h3>
                                    <p className="text-xl text-gray-500">{latestBannerBlog?.heroSection?.postedSummary}</p>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </section>
        </>
    );
};

export default BlogHeroSection;
