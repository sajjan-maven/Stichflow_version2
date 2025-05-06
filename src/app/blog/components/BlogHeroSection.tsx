import Button from "@/app/components/Button";
import {BlogResponse, INewsLetterSection} from "@/app/types/blog";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogTabProps {
    blogData: BlogResponse;
    newsLetterData: INewsLetterSection;
    activeCategory: string;
    setActiveCategory: (category: string) => void;
}

const BlogHeroSection: React.FC<BlogTabProps> = ({blogData}) => {
    const bannerBlogs = blogData.data
    ?.filter((post) => post.heroSection?.isBanner)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    const latestBannerBlog = bannerBlogs?.length > 0 ? bannerBlogs[0] : null;

    return (
        <>
            <section className="w-full px-6 py-20 md:py-20 bg-[#e4dbd0]">
                <h1 className="text-center text-4xl font-semibold">Blogs</h1>
                <div className="flex justify-center gap-3 items-center mt-8 w-full flex-wrap">
                    <div className="flex w-full max-w-[280px] items-center bg-white rounded-xl border border-solid border-[#e4dbd0] hover:border-gray-600">
                        <input
                            type="email"
                            className="border-0 shadow-none px-3 py-2 h-10 md:h-[45px] outline-none active:outline-none active:border-none font-label-regular text-[#7b7481]"
                            placeholder="Email Address"
                            required
                        />
                    </div>
                    <div className="lg:w-[110px]">
                        <Button variant="primary" className="py-2.5 group active:[&_svg]:translate-x-1.5 hover:[&_svg]:w-4">
                            Subscribe
                            <ArrowRightIcon className="ml-2 h-4 w-0 transition-all ease-in duration-200" />
                        </Button>
                    </div>
                </div>
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
                                <div className="w-full lg:max-w-1/2 lg:mt-4">
                                    <p className="font-semibold text-[#f25c30]">
                                        {latestBannerBlog?.heroSection?.category}
                                    </p>
                                    <h3 className="text-2xl lg:text-4xl lg:leading-12 font-medium mb-2 mt-1">
                                        {latestBannerBlog?.blogTitle}
                                    </h3>
                                    <p className="text-xl text-gray-500">
                                        {latestBannerBlog?.heroSection?.postedSummary}
                                    </p>
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
