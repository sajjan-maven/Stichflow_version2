import React from "react";
import Image from "next/image";
const recentPosts = [
    {
        id: 1,
        title: "Modern IT is evolving—so why are job boards still stuck in the past? Meet Fwd IT Job Board",
        description:
            "Fwd IT Job Board cuts through outdated listings to match SaaS-focused IT managers with companies that understand and prioritize modern IT needs.",
        author: "Jay srinivasan",
        date: "Jan 01, 2025",
        category: "IT Tools",
        categoryColor: "bg-[#fce481]",
        image: "/frame-152.svg",
    },
    {
        id: 2,
        title: "An IT Leader&lsquo;s Guide to ISO/IEC 27001 Certification",
        description:
            "This guide empowers IT leaders to achieve ISO/IEC 27001 Certification with detailed steps, risk management techniques, & strategies to safeguard organizational data.",
        author: "Jay srinivasan",
        date: "Jan 01, 2025",
        category: "Security and compliance",
        categoryColor: "bg-[#a3c4f4]",
        image: "/frame-152.svg",
    },
];

// Table of contents data
const tableOfContents = [
    {
        title: "Active section name here",
        isActive: true,
        subsections: ["subsection name here", "subsection name here"],
    },
    {
        title: "section name here",
        isActive: false,
        subsections: [],
    },
    {
        title: "section name here",
        isActive: false,
        subsections: [],
    },
];

// Social sharing icons
const socialIcons = [
    {name: "X", src: "/blog-details/x.png"},
    {name: "LinkedIn", src: "/blog-details/linked.png"},
    {name: "Reddit", src: "/blog-details/reddit.png"},
    {name: "Link", src: "/blog-details/link.png"},
];
const InnerBlog = () => {
    return (
        <div className="w-full min-h-screen bg-[#F8F5F3]">
            <main className="flex w-full items-start gap-20 pt-20 pb-40 px-6 max-w-[1304px] mx-auto relative">
                {/* Main content column */}
                <div className="flex-col w-full lg:w-[829px] items-start gap-16 flex relative">
                    {/* Blog header */}
                    <header className="flex flex-col w-full items-start gap-6 relative bg-transparent">
                        <div className="inline-flex items-center justify-end gap-2 p-4 rounded-xl border border-solid border-[#54505833]">
                            <div className="relative w-4 h-4">
                                <Image width={16} height={16} alt="Icon" src="/blog-details/arrow-left.png" />
                            </div>
                            <span className="font-label-medium text-[#363338]">Blog</span>
                        </div>

                        <h1 className="self-stretch font-h2-medium text-[#363338]">
                            Spring Cleaning for Your SaaS Stack: How to Audit Slack, Zoom, and IDP Assignments at Scale
                        </h1>

                        <div className="flex items-center gap-6 relative self-stretch w-full">
                            <div className="inline-flex items-center gap-2">
                                <div className="w-6 h-6 rounded-[100px] border border-solid border-[#54505833]">
                                    <Image width={24} height={24} alt="avatar" src="/blog-details/Avatar.png" />
                                </div>
                                {/* /avatar-3.png */}
                                <span className="font-caption-medium text-[#363338]">Jay srinivasan</span>
                            </div>

                            <span className="font-caption-regular text-[#7b7481]">Jan 01, 2025</span>
                        </div>
                    </header>

                    {/* Blog content */}
                    <div className="flex flex-col items-start gap-14 relative self-stretch w-full">
                        <p className="relative self-stretch font-normal text-[#363338] text-base leading-6">
                            As organizations grow, their SaaS environments become increasingly complex. Workspaces
                            become cluttered, licenses go underutilized, and access assignments become misaligned.{" "}
                            <br />
                            <br />
                            The challenge for IT teams is not a lack of intent to clean up these gaps but rather the
                            lack of visibility needed to do so effectively.
                            <br />
                            <br />
                            Most SaaS platforms do not provide a customized view of usage, forcing IT teams to either
                            manually compile data or invest in costly, complex solutions. <br />
                            <br />
                            Stitchflow addresses this by providing a unified, flexible, and data-driven approach to SaaS
                            audits. <br />
                            <br />
                            Below, we explore three common areas where organizations struggle with visibility and how
                            Stitchflow enables a more efficient cleanup process.
                        </p>

                        <div className="relative self-stretch w-full h-[400px] bg-[#e4dbd0] rounded-3xl" />

                        <section className="flex flex-col items-start gap-6 relative self-stretch w-full">
                            <h2 className="self-stretch font-h3-medium text-[#363338]">
                                1. Slack Channel Cleanup: Organize and Streamline Your Workspace
                            </h2>

                            <p className="self-stretch font-normal text-[#363338] text-base leading-6">
                                Over time, Slack workspaces accumulate:
                                <br />
                                <br />
                                Empty channels that were created but never used.
                                <br />
                                External channels with vendors or partners that are no longer active.
                                <br />
                                Inactive channels where conversations have stopped for extended periods.
                                <br />
                                <br />
                                The problem is that Slack does not offer a single, centralized view to audit these
                                channels effectively. <br />
                                <br />
                                IT teams lack a way to see channel metadata—such as creator, type (public, private,
                                shared), external participants, and last activity—at scale.
                            </p>

                            <h3 className="self-stretch font-h4-medium text-[#363338]">How Stitchflow helps</h3>

                            <p className="self-stretch font-normal text-[#363338] text-base leading-6">
                                Provides a comprehensive dashboard displaying all channels with key metadata, enabling
                                informed decisions.
                                <br />
                                Enables IT teams to filter and sort channels based on activity, external participation,
                                and creator details.
                                <br />
                                Streamlines the cleanup process, allowing organizations to bulk archive channels that no
                                longer serve a purpose.
                            </p>
                        </section>

                        <section className="flex flex-col items-start gap-6 relative self-stretch w-full">
                            <h2 className="self-stretch font-h3-medium text-[#363338]">
                                2. Zoom License Audits: Optimize Allocations Before Renewal
                            </h2>

                            <p className="self-stretch font-normal text-[#363338] text-base leading-6">
                                Zoom licenses represent a significant cost, and they are often allocated on an annual
                                basis during contract renewals. To optimize spending, IT teams need to determine:
                                <br />
                                <br />
                                How many paid licenses are actively being used.
                                <br />
                                Which users do not require a full license based on their meeting activity.
                                <br />
                                Whether employees could be downgraded to a basic license (which caps meetings at 40
                                minutes).
                            </p>

                            <h3 className="self-stretch font-h4-medium text-[#363338]">
                                The challenge with Zoom&apos;s data
                            </h3>

                            <p className="self-stretch font-normal text-[#363338] text-base leading-6">
                                Zoom&#39;s reporting does not accurately indicate whether a user is actively
                                participating in meetings, as users can join meetings without logging in.
                                <br />
                                Instead, IT teams need to rely on alternative activity proxies, such as whether an
                                employee is regularly hosting meetings and the duration of those meetings.
                            </p>
                        </section>
                    </div>

                    {/* Recent posts section */}
                    <div className="flex flex-col w-full items-start gap-14 pt-16 pb-0 px-0 relative border-t border-[#eee8e1]">
                        <h2 className="flex items-center justify-center gap-2 relative self-stretch w-full">
                            <span className="flex-1 font-h1-regular text-[#7b7481]">Recent posts</span>
                        </h2>

                        <div className="flex flex-col w-full items-start gap-12 relative">
                            {recentPosts.map((post) => (
                                <div
                                    key={post.id}
                                    className="flex flex-col md:flex-row items-center gap-10 self-stretch w-full relative"
                                >
                                    <div className="relative w-full md:w-[280px] h-48 bg-[#e4dbd0] rounded-[32px] overflow-hidden">
                                        {post.id === 1 && (
                                            <>
                                                <div className="inline-flex items-center justify-center gap-2 p-2.5 absolute top-[76px] left-[106px] bg-[#3d3124] rounded-2xl">
                                                    <div className="relative w-fit mt-[-1.00px] font-medium text-[#e4dbd0] text-base leading-6 whitespace-nowrap">
                                                        IT Job Board
                                                    </div>
                                                </div>

                                                <div className="inline-flex items-center justify-center gap-2 p-2.5 absolute top-8 left-8 rounded-2xl border-2 border-solid border-[#d2c3b1]">
                                                    <div className="mt-[-2.00px] font-medium text-[#3d3124] text-base leading-6 relative w-fit whitespace-nowrap">
                                                        IT Tool:
                                                    </div>
                                                </div>

                                                <div className="absolute w-32 h-11 top-[120px] left-[-22px] rounded-2xl border-2 border-solid border-[#d2c3b1]" />
                                                <div className="absolute w-[186px] h-11 top-[164px] left-[106px] rounded-2xl border-2 border-solid border-[#d2c3b1]" />
                                                <div className="absolute w-[133px] h-11 -top-3 left-[106px] rounded-2xl border-2 border-solid border-[#d2c3b1]" />
                                                <div className="absolute w-[116px] h-11 top-8 left-60 rounded-2xl border-2 border-solid border-[#d2c3b1]" />
                                            </>
                                        )}

                                        {post.id === 2 && (
                                            <div className="relative h-[126px] top-[41px]">
                                                <img
                                                    className="absolute w-[280px] h-[110px] top-0 left-0"
                                                    alt="Frame"
                                                    src="/frame-152.svg"
                                                />

                                                <div className="absolute w-[175px] top-[78px] left-6 font-bold text-[#3c3123] text-xl leading-6 tracking-[0]">
                                                    ISO/IEC 27001 Certification
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex flex-col items-start gap-4 relative flex-1 grow">
                                        <h3 className="self-stretch font-h4-semibold text-[#363338]">{post.title}</h3>

                                        <p className="self-stretch font-body-regular text-[#7b7481]">
                                            {post.description}
                                        </p>

                                        <div className="flex items-center gap-6 relative self-stretch w-full flex-wrap">
                                            <div className="inline-flex items-center gap-2">
                                                <div className="w-6 h-6 rounded-[100px] border border-solid border-[#54505833]" />
                                                {/* /avatar-3.png */}
                                                <span className="font-caption-medium text-[#363338]">
                                                    {post.author}
                                                </span>
                                            </div>

                                            <span className="font-caption-regular text-[#7b7481]">{post.date}</span>

                                            <div
                                                className={`${post.categoryColor} inline-flex items-center justify-center gap-2 px-2 py-1 rounded-[100px]`}
                                            >
                                                <span className="font-caption-regular text-[#363338] px-2">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="hidden lg:flex flex-col w-[347px] items-start gap-6 sticky top-20">
                    {/* Author card */}
                    <div className="flex flex-col bg-white items-start gap-4 p-8 w-full rounded-[32px] border border-[#545058]">
                        <div className="p-0">
                            <div className="flex flex-col w-full items-start gap-6">
                                <div className="flex items-center gap-4 relative self-stretch w-full">
                                    <div className="w-12 h-12 rounded-[100px] border border-solid border-[#54505833]">
                                        <Image width={48} height={48} alt="avatar" src="/blog-details/Avatar_1.png" />
                                    </div>
                                    {/* /avatar-3.png */}
                                    <div className="flex flex-col items-start gap-1 flex-1">
                                        <h3 className="self-stretch font-medium text-[#7b7481] text-base leading-6">
                                            Tanya Butani
                                        </h3>
                                        <p className="self-stretch font-normal text-[#7b7481] text-xs leading-4">
                                            Co-founder, Stitchflow
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <p className="self-stretch font-body-regular text-[#363338] mt-4">
                                Tanya is an IT product leader. She previously led product at atSpoke (acquired by Okta),
                                Okta IGA, Workday, and Lever.
                            </p>
                        </div>
                    </div>

                    {/* Table of contents */}
                    <div className="flex flex-col bg-white items-start gap-4 p-8 w-full rounded-[32px] border border-[#545058]">
                        <div className="p-0">
                            <h3 className="font-h6-medium text-[#363338] whitespace-nowrap">Contents</h3>

                            <div className="mt-4 space-y-4">
                                {tableOfContents.map((section, index) => (
                                    <div key={index} className="space-y-4">
                                        <span
                                            className={`font-label-medium ${
                                                section.isActive ? "text-[#f25c30]" : "text-[#7b7481]"
                                            } whitespace-nowrap`}
                                        >
                                            {section.title}
                                        </span>

                                        {section.subsections.length > 0 && (
                                            <div className="flex flex-col items-start gap-4 px-2 py-0">
                                                {section.subsections.map((subsection, subIndex) => (
                                                    <div key={subIndex} className="relative w-[120px] h-4">
                                                        <span className="absolute -top-px left-0 font-label-regular text-[#7b7481] whitespace-nowrap">
                                                            {subsection}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Share article */}
                    <div className="flex flex-col bg-white items-start gap-4 p-8 w-full rounded-[32px] border border-[#545058]">
                        <div className="p-0">
                            <h3 className="font-h6-medium text-[#363338] whitespace-nowrap">Share this article</h3>

                            <div className="flex items-center gap-4 mt-4">
                                {socialIcons.map((icon, index) => (
                                    <Image key={index} width={24} height={24} alt={icon.name} src={icon.src} />
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    );
};

export default InnerBlog;
