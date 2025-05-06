"use client";

import {useState, useRef, useCallback, useEffect} from "react";
import BlogCard from "./BlogCard";
import {BlogData, BlogResponse} from "@/app/types/blog";
import Link from "next/link";
import {BlogsService} from "@/app/services/blogs.service";

interface BlogTabProps {
    blogData: BlogResponse;
}

const AllBlogs: React.FC<BlogTabProps> = ({blogData}) => {
    const allData = blogData.data;

    const [activeTab, setActiveTab] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [blogs, setBlogs] = useState<BlogData[]>([]);
    const observer = useRef<IntersectionObserver | null>(null);

    const sortedBlogs = blogs.slice().sort((a, b) => {
        const getDate = (post: BlogData) =>
            post.heroSection?.postedDate && post.heroSection.postedDate !== ""
                ? new Date(post.heroSection.postedDate).getTime()
                : new Date(post.createdAt).getTime();

        return getDate(b) - getDate(a);
    });

    const sortedAllBlogs = allData.slice().sort((a, b) => {
        const getDate = (post: BlogData) =>
            post.heroSection?.postedDate && post.heroSection.postedDate !== ""
                ? new Date(post.heroSection.postedDate).getTime()
                : new Date(post.createdAt).getTime();

        return getDate(b) - getDate(a);
    });

    const uniqueCategories = Array.from(
        new Set(sortedAllBlogs.map((blog) => blog?.heroSection?.category).filter(Boolean))
    );

    const formatCategory = (category: string) => category.toLowerCase().replace(/\s+/g, "-");

    const matchesSearchQuery = (post: BlogData) => {
        if (!searchQuery) return true;
        const {heroSection} = post;
        if (!heroSection) return false;

        return (
            post.blogTitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            heroSection.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            heroSection.postedSummary?.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    // const handleClick = (formattedCategory: string) => {
    //     setActiveTab(formattedCategory);
    // };

    useEffect(() => {
        setCurrentPage(1);
        setHasMore(true);
        if (activeTab.toLowerCase() == "all") {
            loadBlogs(1, activeTab);
        } else {
            loadBlogs(1, activeTab);
        }
    }, [activeTab]);

    const loadBlogs = async (page: number, category: string) => {
        setLoading(true);
        try {
            const newBlogsData = await BlogsService.getAllHomeBlogs(page, 20, category);
            console.log("newBlogsData", newBlogsData.data);
            if (newBlogsData?.data?.length > 0) {
                setBlogs((prevBlogs) => (page === 1 ? newBlogsData.data : [...prevBlogs, ...newBlogsData.data]));
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error("Error loading blogs:", error);
        } finally {
            setLoading(false);
        }
    };

    const lastBlogElementRef = useCallback(
        (node: HTMLDivElement | null) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting && hasMore) {
                        const nextPage = currentPage + 1;
                        setCurrentPage(nextPage);
                        loadBlogs(nextPage, activeTab);
                    }
                },
                {threshold: 1.0}
            );

            if (node) observer.current.observe(node);
        },
        [loading, hasMore, currentPage, activeTab]
    );

    const filteredBlogs = sortedBlogs
    .filter(matchesSearchQuery)
    .filter((blog) => activeTab === "all" || (blog.heroSection?.category || "") === activeTab);

    return (
        <div className="w-full px-6 py-10 md:pb-20 ">
            <div className="max-w-[1256px] mx-auto">
                <div className="flex flex-wrap gap-4 items-center justify-center md:justify-between">
                    <div className="flexflex-wrap gap-2 items-center justify-center ">
                        <button
                            className={`${
                                activeTab === "all" ? "bg-gray-600 text-white" : ""
                            } py-2 px-4 rounded-full font-medium`}
                            onClick={() => setActiveTab("all")}
                        >
                            All
                        </button>
                        {uniqueCategories.map((category) => {
                            const formattedCategory = formatCategory(category);
                            return (
                                <button
                                    key={formattedCategory}
                                    className={`${
                                        activeTab === formattedCategory ? "bg-gray-600 text-white" : ""
                                    } py-2 px-4 rounded-full font-medium`}
                                    onClick={() => setActiveTab(formattedCategory)}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>
                    <div id="int-search" className="mb-2">
                        <form id="wf-form-Search-form" name="wf-form-Search-form" method="get">
                            <input
                                className="bg-white text-gray-800 border border-gray-800 rounded-3xl min-h-3 px-6 py-2 text-xl"
                                maxLength={256}
                                name="Search-2"
                                placeholder="Search our blog"
                                type="text"
                                id="Search-2"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                required
                            />
                            <input type="submit" data-wait="Please wait..." className="hidden" defaultValue="Submit" />
                        </form>
                    </div>
                </div>

                <div className="mt-8 mb-4">
                    <div className="border-b border-gray-300 "></div>
                </div>
                <div>
                    {filteredBlogs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {filteredBlogs.map((blog) => (
                                <div className="mt-2 md:mt-10" key={blog.id}>
                                    <Link
                                        href={`/blog/${blog.heroSection?.urlSlug}`}
                                        key={blog.id}
                                        style={{textDecoration: "none"}}
                                        rel="noopener noreferrer"
                                    >
                                        <BlogCard
                                            altText={blog.heroSection?.bannerImage?.alternativeText || "Banner Image"}
                                            title={blog.blogTitle || "Untitled"}
                                            bannerImage={
                                                blog.heroSection?.bannerImage?.url || "/images/default-placeholder.png"
                                            }
                                            category={blog.heroSection?.category || "Uncategorized"}
                                            summary={blog.heroSection?.postedSummary || "No summary available"}
                                            loading="lazy"
                                        />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        // <p className="no-information">No blogs available in this category.</p>
                        <></>
                    )}
                </div>

                {loading && (
                    <div className="loading-spinner">
                        <img
                            src="https://23630480.fs1.hubspotusercontent-na1.net/hub/23630480/hubfs/Stitchflow.png"
                            alt="Stitchflow Logo"
                        />
                    </div>
                )}
                {!hasMore && !loading && (
                    <>
                        {filteredBlogs.length == 0 ? (
                            <p className="no-information">No blogs available in this category.</p>
                        ) : (
                            <p className="text-center text-gray-500 mt-6">No more blogs to load</p>
                        )}
                    </>
                )}

                <div ref={lastBlogElementRef} style={{height: "1px"}} />
            </div>
        </div>
    );
};

export default AllBlogs;
