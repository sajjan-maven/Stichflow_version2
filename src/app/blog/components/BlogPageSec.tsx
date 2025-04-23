import React from 'react'
// import BlogHeroSection from './BlogHeroSection'
import BlogTab from './BlogTab'
import { BlogResponse } from '@/app/types/blog';

interface BlogPageProps {
  data: {
    ResourceMainSec: {
      ResourceHeading: string;
      ContentSec: {
        type: string;
        children: { text: string; type: string; }[];
      }[];
    };
    ResourceAfterHero: {
      ResourceBlogText: string;
      CaseStudyText: string;
      ResourceCategory: string;
    };
    SubCategorySection: {
      Category: string;
      SubCategory: string;
    };
  };
  blogData: BlogResponse;
}
const BlogPageSec: React.FC<BlogPageProps> = ({ data, blogData }) => {
  if (!data || !data?.ResourceMainSec) {
    return <div>Error: Data is missing</div>;
  }
  return (
    <div>
      {/* <BlogHeroSection resourceMainSec={data.ResourceMainSec} /> */}
      <BlogTab blogData={blogData} />
    </div>
  )
}

export default BlogPageSec