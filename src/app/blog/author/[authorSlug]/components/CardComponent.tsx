import React from "react";
import styles from "../css/authorCard.module.css";
import Link from "next/link";
import Image from "next/image";
// import { SimpleAuthor } from '@/app/types/author';
interface ImageFormat {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
    sizeInBytes?: number;
}

interface Image {
    id: number;
    documentId: string;
    name: string;
    alternativeText?: string;
    caption?: string;
    width: number;
    height: number;
    formats?: {
        small?: ImageFormat;
        thumbnail?: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string | null;
    provider: string;
    // provider_metadata?: any;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

interface HeroSection {
    id: number;
    postedDate: string;
    heading: string;
    urlSlug: string;
    isBanner: boolean;
    isPopularArticle: boolean;
    category: string;
    modifiedDate: string;
    readTime: string;
    postedSummary: string;
    bannerImage: Image;
}

interface SocialMedia {
    id: number;
    mediaLink?: string | null;
    mediaText?: string | null;
}

interface Slug {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    description: string;
}

interface Author {
    id: number;
    documentId: string;
    name: string;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    aboutAuthor?: string | null;
    role: string;
    avatar: Image;
    slugs: Slug[];
    // company: any[];
    socialMediaList: SocialMedia[];
}

interface MetaData {
    id: number;
    metaTitle: string;
    metaDescription: string;
    googleVerification?: string | null;
    url?: string | null;
    shareImage: Image;
}

interface Article {
    id: number;
    documentId: string;
    blogTitle: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    description: string;
    heroSection: HeroSection;
    author: Author;
    metaData: MetaData;
}

// interface ApiResponse {
//     data: Article[];
// }

interface CardComponentProps {
    blogs: Article[];
    author: Author;
}

const CardComponent: React.FC<CardComponentProps> = ({blogs, author}) => {
    const filterByAuthor = (dataArray: Article[], authorName: string) => {
        return dataArray.filter((item) => item.author?.name === authorName);
    };
    const filteredData = filterByAuthor(blogs, author.name);

    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {filteredData.map((article) => (
                    <>
                        <Link
                            key={article.id}
                            href={`/blog/${article.heroSection?.urlSlug}`}
                            style={{textDecoration: "none"}}
                            target="_blank"
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={article.heroSection?.bannerImage?.url}
                                    alt={article.heroSection?.bannerImage?.alternativeText || ""}
                                    width={300}
                                    height={180}
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.content}>
                                <p className={styles.category}>{article?.heroSection?.category}</p>
                                <h3 className={styles.title}>{article?.blogTitle}</h3>
                                <p className={styles.summary}>{article?.heroSection?.postedSummary}</p>
                            </div>
                        </Link>
                    </>
                ))}
            </div>
        </div>
    );
};

export default CardComponent;
