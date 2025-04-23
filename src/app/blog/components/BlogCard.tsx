import Image from "next/image";
import React from "react";

interface BlogCardProps {
    title: string;
    bannerImage: string;
    altText: string;
    category: string;
    summary: string;
    loading?: "lazy" | "eager";
    useHeading?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
    title,
    bannerImage,
    altText,
    category,
    summary,
    loading = "lazy",
    useHeading = false,
}) => {
    return (
        <div className="blog-card">
            {bannerImage && (
                <Image
                    src={bannerImage}
                    alt={altText}
                    width={500}
                    height={300}
                    className="blog-image"
                    loading={loading}
                />
            )}
            <div className="slug-card-content">
                <div className="blogs-category">{category}</div>
                {useHeading ? <h3 className="card-title">{title}</h3> : <div className="card-title">{title}</div>}
                {/* <div className="card-title">{title}</div> */}
                <p className="blog-summary">{summary}</p>
            </div>
        </div>
    );
};

export default BlogCard;
