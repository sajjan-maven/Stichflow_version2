'use client';

import { BlogResponse, INewsLetterSection } from '@/app/types/blog';
import React from 'react'
import BlogHeroSection from './BlogHeroSection';
import PopularArticlesSection from './PopularArticlesSection';
import AllBlogs from './AllBlogs';

interface BlogTabProps {
    blogData: BlogResponse;
    newsLetterData: INewsLetterSection;
}

const BlogHomePage: React.FC<BlogTabProps> = ({ blogData, newsLetterData }) => {
    const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === 'production';

    const filteredBlogData = {
        ...blogData,
        data: isProduction
            ? blogData?.data.filter(blog => blog.isPublish === true)
            : blogData?.data,
    };
    return (
        <>
            <BlogHeroSection blogData={filteredBlogData} newsLetterData={newsLetterData} />
            <PopularArticlesSection blogData={filteredBlogData} />
            <AllBlogs blogData={filteredBlogData} />
        </>
    )
}

export default BlogHomePage