import React from "react";

const categories = [
    {id: "all", name: "All posts", active: true},
    {id: "saas", name: "SaaS Management", active: false},
    {id: "it", name: "IT Tools", active: false},
    {id: "security", name: "Security & Compliance", active: false},
    {id: "product", name: "Product updates", active: false},
];

const featuredPosts = [
    {
        id: 1,
        title: "4 Hidden Gaps in IT: The Cost of Limited Visibility",
        description:
            "IT visibility gaps impact security, costs, and efficiency. Learn how to identify and eliminate them with actionable steps for 2025.",
        author: "Jay srinivasan",
        date: "Jan 01, 2025",
        category: "Saas Management",
        categoryColor: "bg-[#f1acc0]",
        image: "/images/img.svg",
    },
    {
        id: 2,
        title: "Why IT Teams Need a Connected Graph",
        description:
            "Learn how a connected IT graph helps IT teams proactively manage complexity, prevent security risks, and optimize resources efficiently.",
        author: "Jay srinivasan",
        date: "Jan 01, 2025",
        category: "Saas Management",
        categoryColor: "bg-[#f1acc0]",
        image: "/images/img-1.svg",
    },
];

const recentPosts = [
    {
        id: 1,
        title: "Spring Cleaning for Your SaaS Stack: How to Audit Slack, Zoom, and IDP Assignments at Scale",
        description:
            "Struggling with SaaS visibility? Learn how to audit and optimize your Slack, Zoom, and IDP assignments at scale with Stitchflow.",
        author: "Jay srinivasan",
        date: "Jan 01, 2025",
        category: "Saas Management",
        categoryColor: "bg-[#f1acc0]",
        image: "/images/img-2.svg",
    },
    {
        id: 2,
        title: "Modern IT is evolving—so why are job boards still stuck in the past? Meet Fwd IT Job Board",
        description:
            "Fwd IT Job Board cuts through outdated listings to match SaaS-focused IT managers with companies that understand and prioritize modern IT needs.",
        author: "Jay srinivasan",
        date: "Jan 01, 2025",
        category: "IT Tools",
        categoryColor: "bg-[#fce481]",
        image: "/images/img-3.svg",
    },
    {
        id: 3,
        title: "An IT Leader's Guide to ISO/IEC 27001 Certification",
        description:
            "This guide empowers IT leaders to achieve ISO/IEC 27001 Certification with detailed steps, risk management techniques, & strategies to safeguard organizational data.",
        author: "Jay srinivasan",
        date: "Jan 01, 2025",
        category: "Security and compliance",
        categoryColor: "bg-[#a3c4f4]",
        image: "/images/img-4.svg",
    },
    {
        id: 4,
        title: "Identify & Fix IT Gaps with Stitchflow's Free Assessment",
        description:
            "Stitchflow's IT Assessment identifies and remediates gaps in access, compliance, and licenses with automation, saving IT teams time and effort.",
        author: "Jay srinivasan",
        date: "Jan 01, 2025",
        category: "Product updates",
        categoryColor: "bg-[#76cab3]",
        image: "/images/img-5.svg",
    },
];

const BlogContentSection = () => {
    return (
        <section className="flex flex-col items-center gap-14 py-20 px-4 md:px-8 lg:px-16 xl:px-[236px] w-full">
            {/* Categories */}
            <div className="flex flex-wrap items-center gap-2">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className={`rounded-full px-3 py-2 font-medium transition ${
                            category.active ? "bg-[#363338] text-white shadow-md" : "text-[#7b7481] hover:bg-gray-100"
                        }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Featured */}
            <div className="w-full max-w-[829px] flex flex-col gap-14">
                <h2 className="text-[#7b7481] text-2xl font-semibold">Featured</h2>

                {featuredPosts.map((post) => (
                    <div key={post.id} className="flex flex-col md:flex-row items-center gap-10">
                        <div className="flex flex-col gap-4 flex-1">
                            <h3 className="text-[#363338] text-xl font-semibold">{post.title}</h3>
                            <p className="text-[#7b7481]">{post.description}</p>
                            <div className="flex items-center gap-4 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full border border-[#54505833] bg-[url('/images/Avatar.svg')] bg-cover bg-center" />
                                    <span className="text-[#363338] text-sm font-medium">{post.author}</span>
                                </div>
                                <span className="text-sm text-[#7b7481]">{post.date}</span>
                                <span
                                    className={`text-[#363338] text-xs font-medium rounded-full px-2 py-1 ${post.categoryColor}`}
                                >
                                    {post.category}
                                </span>
                            </div>
                        </div>
                        <div
                            className="w-[280px] h-48 rounded-[32px] bg-cover bg-center"
                            style={{backgroundImage: `url(${post.image})`}}
                        />
                    </div>
                ))}
            </div>

            {/* Newsletter */}
            <div className="w-full max-w-[830px] bg-white rounded-[32px] border border-[#545058] p-10 flex flex-col gap-8 items-center">
                <div className="text-center">
                    <h3 className="text-[#363338] text-xl font-semibold mb-2">Subscribe to our newsletter</h3>
                    <p className="text-[#363338]">Get expert-led insights on SaaS management, delivered weekly.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 w-full justify-center">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full sm:w-[280px] p-3 bg-[#f8f5f3] border border-[#e4dbd0] rounded-xl text-[#aca8b2]"
                    />
                    <button className="p-3 px-6 rounded-xl border border-[#54505833] bg-white text-[#363338] font-medium cursor-not-allowed">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* Most Recent */}
            <div className="w-full max-w-[829px] flex flex-col gap-14">
                <h2 className="text-[#7b7481] text-2xl font-semibold">Most recent</h2>

                {recentPosts.map((post) => (
                    <div key={post.id} className="flex flex-col-reverse md:flex-row items-center gap-10">
                        <div
                            className="w-[280px] h-48 rounded-[32px] bg-cover bg-center"
                            style={{backgroundImage: `url(${post.image})`}}
                        />
                        <div className="flex flex-col gap-4 flex-1">
                            <h3 className="text-[#363338] text-xl font-semibold">{post.title}</h3>
                            <p className="text-[#7b7481]">{post.description}</p>
                            <div className="flex items-center gap-4 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full border border-[#54505833] bg-[url('/images/Avatar.svg')] bg-cover bg-center" />
                                    <span className="text-[#363338] text-sm font-medium">{post.author}</span>
                                </div>
                                <span className="text-sm text-[#7b7481]">{post.date}</span>
                                <span
                                    className={`text-[#363338] text-xs font-medium rounded-full px-2 py-1 ${post.categoryColor}`}
                                >
                                    {post.category}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More */}
            <button className="px-6 py-4 rounded-xl border border-[#54505833] shadow-[0px_1px_1px_#5450581a,0px_4px_8px_#54505805,inset_0px_-2px_4px_#0000001f] bg-gradient-to-b from-white to-[#f9f8fa] text-[#363338] font-medium cursor-not-allowed">
                Load more posts
            </button>
        </section>
    );
};

export default BlogContentSection;
