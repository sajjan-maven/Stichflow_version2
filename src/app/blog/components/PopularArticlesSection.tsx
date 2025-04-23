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
        <section className="w-full max-w-[1256px] mx-auto">
            <div className="text-4xl font-semibold">
                <h3>Editor&rsquo;s picks</h3>
            </div>
            <div className="popular-articles-section">
                {popularData.length > 0 ? (
                    popularData.map((article) => (
                        <Link
                            href={`/blog/${article.heroSection?.urlSlug}`}
                            key={article.id}
                            style={{textDecoration: "none"}}
                            rel="noopener noreferrer"
                        >
                            <div key={article.id} className="popular-article-list">
                                <div className="popular-article-left">
                                    <Image
                                        src={article?.heroSection.bannerImage.url}
                                        alt={article?.blogTitle || "Banner"}
                                        height={146.63}
                                        width={232}
                                        className="popular-img"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="popular-article-right">
                                    <h4 className="popular-article-category">{article?.heroSection?.category}</h4>
                                    <h4 className="blog-title">{article?.blogTitle}</h4>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p>No Editor&rsquo;s picks in here.</p>
                )}
            </div>
        </section>
    );
};

export default PopularArticlesSection;
