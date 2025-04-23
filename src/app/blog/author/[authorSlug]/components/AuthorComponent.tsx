"use client";

import React from "react";
import HeroComponent from "./HeroComponent";
import BlogCard from "@/app/blog/components/BlogCard";
import {BlogResponse} from "@/app/types/blog";
import Link from "next/link";
import {AuthorResponse, Author} from "@/app/types/author";
import styles from "../css/authorCard.module.css";
import {useParams, notFound} from "next/navigation";

interface AuthorComponentProps {
    authorData: AuthorResponse;
    blogs: BlogResponse;
}

const AuthorComponent: React.FC<AuthorComponentProps> = ({authorData, blogs}) => {
    const params = useParams();
    const authorSlug = params?.authorSlug as string;
    if (!authorSlug) {
        return notFound();
    }

    const author = authorData?.data?.find((post: Author) => {
        if (!post.name) return false;
        const formattedName = post.name.toLowerCase().replace(/\s+/g, "-");
        return formattedName === authorSlug;
    });

    if (!author) {
        return notFound();
    }

    const matchingBlogs = blogs?.data.filter((blog) =>
        author.slugs?.some((slug) => slug.documentId === blog.documentId)
    );

    return (
        <div>
            <HeroComponent author={author} />
            <div className={styles.authorCards}>
                <h2 className={styles.moreLatestTitle}>Latest Articles</h2>
                <div className="card-container">
                    {matchingBlogs.map((blog) => (
                        <div key={blog.id}>
                            <Link
                                href={`/blog/${blog.heroSection?.urlSlug}`}
                                style={{textDecoration: "none"}}
                                // target="_blank"
                            >
                                {" "}
                                <div className={styles.cardsPparent}>
                                    <BlogCard
                                        altText={blog.heroSection?.bannerImage?.alternativeText || "Banner Image"}
                                        title={blog.blogTitle || "Untitled"}
                                        bannerImage={
                                            blog.heroSection?.bannerImage?.url || "/images/default-placeholder.png"
                                        }
                                        category={blog.heroSection?.category || "Uncategorized"}
                                        summary={blog.heroSection?.postedSummary || "No summary available"}
                                        loading="lazy"
                                        useHeading={true}
                                    />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AuthorComponent;
