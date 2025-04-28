import {BlogResponse} from "@/app/types/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogTabProps {
    blogData: BlogResponse;
}

const PopularArticlesSection: React.FC<BlogTabProps> = ({blogData}) => {
    const popularData = blogData.data.filter((post) => post.heroSection?.isPopularArticle === true);

    return (
        <section className="w-full px-6 bg-gradient-to-b from-[#f8f5f3] to-white bg-[#f8f5f3]">
            <div className="w-full max-w-[1256px] mx-auto">
                <div className="text-4xl font-semibold mb-8">
                    <h3>Editor&rsquo;s picks</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 p-6 gap-5 rounded-3xl border border-[#545058] bg-[#f8f5f3]">
                    {popularData.length > 0 ? (
                        popularData.map((article) => (
                            <Link
                                href={`/blog/${article.heroSection?.urlSlug}`}
                                key={article.id}
                                style={{textDecoration: "none"}}
                                rel="noopener noreferrer"
                                className="w-full max-w-[500px] md:max-w-full mx-auto"
                            >
                                <div key={article.id} className="lg:flex gap-5">
                                    <div className="rounded-sm w-full overflow-hidden lg:max-w-[232px]">
                                        <div className="w-full pt-[77.58%] relative">
                                            <Image
                                                src={article?.heroSection.bannerImage.url}
                                                alt={article?.blogTitle || "Banner"}
                                                layout="fill"
                                                className="absolute top-0 left-0 w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="mt-2 md:mb-2.5 text-lg text-gray-500 font-medium">
                                            {article?.heroSection?.category}
                                        </h4>
                                        <h4 className="text-xl font-medium">{article?.blogTitle}</h4>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p>No Editor&rsquo;s picks in here.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PopularArticlesSection;
