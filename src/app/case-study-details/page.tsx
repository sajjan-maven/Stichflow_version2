import Image from "next/image";
import Link from "next/link";
export default function CaseStudiesDetails() {
    // Case study stats
    const statsData = [
        {
            value: "312",
            description: "high-sensitivity app access gaps closed within 90 days",
        },
        {
            value: "100%",
            description: "compliance with Turing&apos;s security policies",
        },
        {
            value: "220",
            description: "hours of manual IT work eliminated in a quarter—equivalent to a half-time IT staff member",
        },
        {
            value: "0",
            description: "false positives in reporting",
        },
        {
            value: "40k",
            description: "saved in license costs",
        },
    ];

    // More stories data
    const moreStoriesData = [
        {
            name: "Spoton",
            color: "#1763f5",
            logoSrc: "/case-study-details/spoton-logo.png",
            description:
                "Global Payment Technology Company Transforms License Management and Offboarding Process, Saving $160,000+ with Stitchflow in 6 months.",
        },
        {
            name: "Starburst",
            color: "#824cf5",
            logoSrc: "/case-study-details/starburst-logo.png",
            description:
                "How Starburst fixed 350 user access gaps and saved $57,000 on underused licenses in 2 months.",
        },
    ];

    return (
        <div className="flex flex-col items-start relative bg-[#f8f5f3]">
            {/* Main Content */}
            <main className="relative w-full">
                <div className="flex justify-center gap-20 pt-20 pb-40 px-6 max-w-[1272px] mx-auto">
                    <div className="flex flex-col w-[830px] items-start gap-16">
                        {/* Case Study Header */}
                        <header className="flex flex-col w-full items-start gap-6 bg-transparent">
                            <Link href="/case-studies" passHref>
                                <div className="flex px-4 py-3 text-black items-center gap-2 rounded-xl border border-[#54505833]">
                                    <Image width={12} height={10} alt="Icon" src="/case-study-details/icon.png" />
                                    Case studies
                                </div>
                            </Link>
                            <h1 className="md:text-[34px] text-3xl font-medium text-[#363338] text-center">
                                How Stitchflow enabled Turing&apos;s IT and security team to adapt to business scale
                            </h1>

                            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full">
                                <div className="flex items-start gap-1">
                                    <span className="font-medium text-[#7b7481] whitespace-nowrap">Company size:</span>
                                    <span className="font-regular text-[#363338] md:px-2">
                                        700 employees and 8000 contractors
                                    </span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <span className="font-caption-medium text-[#7b7481]">Industry:</span>
                                    <span className="font-caption-regular text-[#363338] px-2">
                                        AI / Technology / Software
                                    </span>
                                </div>
                            </div>
                        </header>

                        {/* Case Study Content */}
                        <div className="flex flex-col items-start gap-14 w-full">
                            {/* Quote Card */}
                            <div className="w-full bg-white rounded-[32px] border border-solid border-[#545058]">
                                <div className="flex flex-col items-start gap-12 pt-6 p-8 md:pt-10 md:p-14">
                                    <Image width={41} height={40} alt="Quote" src="/case-study-details/quotation.png" />
                                    <div className="flex flex-col items-start gap-6 w-full">
                                        <p className=" font-normal text-[#363338] text-lg leading-[26px]">
                                            Our biggest challenge wasn&apos;t just managing access gaps and maintaining
                                            stringent security standards with our dynamic workforce. Our manual
                                            processes couldn&apos;t keep up with the scale.
                                        </p>
                                        <div className="flex items-center gap-4 w-full">
                                            <div className="w-12 h-12 rounded-[100px] border border-solid border-[#54505833] overflow-hidden">
                                                <Image
                                                    width={48}
                                                    height={48}
                                                    src="/case-study-details/Avatar.png"
                                                    alt="Amit Sharma"
                                                />
                                            </div>
                                            <div className="flex flex-col items-start gap-1 flex-1">
                                                <p className=" font-medium text-[#7b7481] text-base leading-6">
                                                    Amit Sharma
                                                </p>
                                                <p className=" font-normal text-[#7b7481] text-xs leading-4">
                                                    Manager of IT Systems, Turing
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Challenge Section */}
                            <section className="flex flex-col items-start gap-6 w-full">
                                <h2 className="text-2xl font-medium text-[#363338]">Turing&apos;s challenge</h2>
                                <p className=" font-normal text-[#363338] text-base leading-6">
                                    To support Turing&apos;s rapid company growth, the nuances that&nbsp;&nbsp;their IT
                                    and security teams needed to deal with included:
                                    <br />
                                    <br />
                                    Dual IDPs—one for employees and another cost-effective IDP to support hypergrowth
                                    for contractors
                                    <br />
                                    Unique security policies around contractors (like revoking Google Group roles when
                                    offboarding)&nbsp;&nbsp;which were not automatable
                                    <br />
                                    <br />
                                    These nuances created significant challenges for their IT team, including multiple
                                    hours a week on manual spreadsheet-based reconciliation, and access vulnerabilities
                                    due to delayed security audits.
                                </p>
                            </section>

                            {/* Response Section */}
                            <section className="flex flex-col items-start gap-6 w-full">
                                <h2 className="text-2xl font-medium text-[#363338]">Turing&apos;s Response</h2>
                                <p className=" font-normal text-[#363338] text-base leading-6">
                                    Stitchflow&apos;s customized SaaS management solution met Turing&apos;s needs and:
                                    <br />
                                    <br />
                                    Completed initial setup in 30 minutes
                                    <br />
                                    Stitched together all of Turing&apos;s tools, including different IDPs
                                    <br />
                                    Mapped Turing&apos;s IT and security processes
                                    <br />
                                    Automated security policy enforcement
                                    <br />
                                    Streamlined offboarding by automating deprovisioning and revoking roles and
                                    permissions
                                    <br />
                                    Identified orphaned and underutilized accounts that were leading to waste in SaaS
                                    spending
                                    <br />
                                    Provided real-time alerts and remediation (as opposed to waiting for quarterly
                                    audits)
                                </p>
                            </section>

                            {/* Stats Card */}
                            <div className="w-full bg-[#e4dbd0] rounded-[32px]">
                                <div className="flex flex-col items-start gap-4 p-6 md:gap-6 md:p-10">
                                    <div className="grid grid-cols-2 gap-x-4 md:gap-x-20 gap-y-6 w-full">
                                        {statsData.slice(0, 4).map((stat, index) => (
                                            <div key={index} className="flex flex-col items-start gap-2">
                                                <h3 className="text-3xl font-medium text-[#363338]">{stat.value}</h3>
                                                <p className=" font-normal text-[#7b7481] text-base leading-6">
                                                    {stat.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex items-start gap-20 w-full">
                                        <div className="flex flex-col items-start gap-2 flex-1">
                                            <h3 className="text-3xl font-medium text-[#363338]">
                                                {statsData[4].value}
                                            </h3>
                                            <p className=" font-normal text-[#7b7481] text-base leading-6">
                                                {statsData[4].description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* More Stories Section */}
                        <section className="flex flex-col w-full items-start gap-14 pt-16 border-t border-[#eee8e1]">
                            <h2 className="text-4xl w-full text-[#7b7481]">More stories</h2>

                            <div className="flex flex-col md:flex-row items-start gap-6 w-full">
                                {moreStoriesData.map((story, index) => (
                                    <div
                                        key={index}
                                        className="flex-1 bg-white rounded-[32px] h-full overflow-hidden border border-solid border-[#545058]"
                                    >
                                        <div className="flex flex-col items-start gap-10 p-4 pb-6 md:p-6 md:pb-10">
                                            <div
                                                className="w-full h-[200px] rounded-3xl flex items-center justify-center"
                                                style={{backgroundColor: story.color}}
                                            >
                                                <Image
                                                    height={40}
                                                    width={40}
                                                    alt={`${story.name} logo`}
                                                    src={story.logoSrc}
                                                />
                                            </div>
                                            <div className="flex flex-col gap-4 px-8 w-full">
                                                <h3 className="font-semibold text-[#363338] text-center">
                                                    {story.name}
                                                </h3>
                                                <p className="text-[#7b7481] text-center">{story.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
