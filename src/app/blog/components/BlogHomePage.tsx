"use client";

import {BlogResponse, INewsLetterSection} from "@/app/types/blog";
import {useState} from "react";
import BlogHeroSection from "./BlogHeroSection";
import PopularArticlesSection from "./PopularArticlesSection";
import AllBlogs from "./AllBlogs";
import {useSearchParams} from "next/navigation";

interface BlogTabProps {
    blogData: BlogResponse;
    newsLetterData: INewsLetterSection;
}

const BlogHomePage: React.FC<BlogTabProps> = ({blogData, newsLetterData}) => {
    const searchParams = useSearchParams();
    const [blogs] = useState(blogData.data || []);

    const [activeCategory, setActiveCategory] = useState(searchParams.get("category") || "all");

    const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === "production";
    const filteredBlogData = {
        ...blogData,
        data: isProduction ? blogs.filter((blog) => blog.isPublish === true) : blogs,
    };

    return (
        <div className="">
            <BlogHeroSection
                blogData={filteredBlogData}
                newsLetterData={newsLetterData}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />
            <PopularArticlesSection blogData={filteredBlogData} />
            <AllBlogs blogData={filteredBlogData} />
        </div>
    );
};

export default BlogHomePage;
