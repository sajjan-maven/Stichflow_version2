"use client";
import React, {useState} from "react";
import BlogCard from "./BlogCard";
// import Image from 'next/image';
import Link from "next/link";
import {BlogResponse} from "@/app/types/blog";

// type TabsType = {
//   Blog: string;
//   CaseStudies: string;
// };

type SubTabType = {
    all: string;
    Company: string;
    Product: string;
    SaaS: string;
};

interface BlogTabProps {
    blogData: BlogResponse;
}

const BlogTab: React.FC<BlogTabProps> = ({blogData}) => {
    const [activeTab, setActiveTab] = useState<string>("Blog");
    const [subActiveTab, setSubActiveTab] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState<string>("");

    const allBlogs = blogData?.data || [];

    const filteredBlogs = allBlogs.filter(
        (post) =>
            post.blogTitle.toLowerCase().includes(searchQuery) || post.author.name.toLowerCase().includes(searchQuery)
    );

    // const tabs: TabsType = {
    //   Blog: 'images/blog-icon.svg',
    //   CaseStudies: 'images/cs-icon.svg',
    // };

    const SubTab: SubTabType = {
        all: "Main Content Area",
        Company: "Additional Details Section",
        Product: "Additional Details Section",
        SaaS: "Additional Details Section",
    };

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setSearchQuery(e.currentTarget.value.toLowerCase());
    };
    console.log(setActiveTab);
    return (
        <div className="tab-container">
            <div
                className="tab-headers flex items-center border-b mb-4 tab-parent-sec"
                style={{gap: "15px", alignItems: "center", padding: "10px 0"}}
            >
                {/* {(Object.keys(tabs) as Array<keyof TabsType>).map((tabKey) => (
          <div key={tabKey} className="tab-item flex items-center gap-2" style={{ textAlign: 'center' }}>
            <Image src={tabs[tabKey]} alt={`${tabKey} icon`} width={35} height={25} priority />
            <button
              style={{ background: 'white', cursor: 'pointer' }}
              className={`px-4 py-2 ${activeTab === tabKey ? 'borderBottom' : 'other'}`}
              onClick={() => setActiveTab(tabKey)}
            >
              {tabKey.toLocaleLowerCase() !== 'blog' ? 'Case Studies' : tabKey}
            </button>
          </div>
        ))} */}
            </div>

            <div className="tab-content">
                {activeTab.toLocaleLowerCase() === "blog" && (
                    <>
                        <section
                            className="section pt-0 justifyCenter"
                            style={{marginTop: "4%", paddingBottom: "2rem"}}
                        >
                            <div id="int-search" className="int-search-fb w-form search-input">
                                <form id="wf-form-Search-form" name="wf-form-Search-form" method="get">
                                    <input
                                        className="int-search-input jetboost-list-search-input-24ow w-input search-blog-input"
                                        maxLength={256}
                                        name="Search-2"
                                        placeholder="Search our blog"
                                        type="text"
                                        id="Search-2"
                                        onKeyUp={handleKeyUp}
                                        required
                                    />
                                    <input
                                        type="submit"
                                        data-wait="Please wait..."
                                        className="hide w-button"
                                        defaultValue="Submit"
                                    />
                                </form>
                            </div>
                        </section>

                        <div className="tab-headers flex border-b mb-4 tab-parent-sec" style={{gap: "15px"}}>
                            {Object.keys(SubTab).map((tabKey) => (
                                <button
                                    style={{background: "white"}}
                                    key={tabKey}
                                    className={`px-4 py-2 borderColor ${
                                        subActiveTab === tabKey ? "activeTab" : "text-gray-500"
                                    }`}
                                    onClick={() => setSubActiveTab(tabKey)}
                                >
                                    {tabKey.toLocaleLowerCase() === "all" ? "View all" : tabKey}
                                </button>
                            ))}
                        </div>

                        <div className="tab-content">
                            <div className="card-container">
                                {filteredBlogs.map((post) => {
                                    const slug = post.heroSection?.urlSlug;
                                    // const bannerImageUrl = post.heroSection?.bannerImage?.formats?.small?.url || post.heroSection?.bannerImage?.url || '';

                                    return (
                                        <Link
                                            href={`/blog/${slug}`}
                                            key={post.id || slug}
                                            passHref
                                            style={{textDecoration: "none"}}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <BlogCard
                                                altText={
                                                    post.heroSection?.bannerImage?.alternativeText || "Banner Image"
                                                }
                                                title={post.blogTitle || "Untitled"}
                                                bannerImage={
                                                    post.heroSection?.bannerImage?.url ||
                                                    "/images/default-placeholder.png"
                                                }
                                                category={post.heroSection?.category || "Uncategorized"}
                                                summary={post.heroSection?.postedSummary || "No summary available"}
                                                loading="lazy"
                                            />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default BlogTab;
