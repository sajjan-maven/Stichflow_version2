import Button from "@/app/components/Button";
import Image from "next/image";
import Link from "next/link";
export default function CaseStudyGrid() {
    const caseStudies = [
        {
            id: 1,
            featured: true,
            company: "Turing",
            logo: "/case-study/turing-logo.png",
            logoWidth: 247,
            logoHeight: "40px",
            bgColor: "#1a1a1a",
            description:
                "Ex quis consectetur consectetur amet qui nostrud ea culpa eu exercitation laborum cupidatat. Ut deserunt velit ex laborum et elit reprehenderit dolore. Quis elit sit ut magna fugiat adipisicing anim adipisicing quis ad consectetur id. Laboris aliqua sint consequat laboris sunt eu duis non laborum deserunt.",
        },
        {
            id: 2,
            company: "Spoton",
            logo: "/case-study/spoton-logo.png",
            logoWidth: 133,
            logoHeight: "40px",
            bgColor: "#1763f5",
            description:
                "Global Payment Technology Company Transforms License Management and Offboarding Process, Saving $160,000+ with Stitchflow in 6 months.",
        },
        {
            id: 3,
            company: "Starburst",
            logo: "/case-study/starbust-logo.png",
            logoWidth: 177,
            logoHeight: "35px",
            bgColor: "#824cf5",
            description:
                "How Starburst fixed 350 user access gaps and saved $57,000 on underused licenses in 2 months.",
        },
        {
            id: 4,
            company: "Spoton",
            logo: "/case-study/spoton-logo.png",
            logoWidth: 133,
            logoHeight: "40px",
            bgColor: "#1763f5",
            description:
                "Global Payment Technology Company Transforms License Management and Offboarding Process, Saving $160,000+ with Stitchflow in 6 months.",
        },
        {
            id: 5,
            company: "Starburst",
            logo: "/case-study/starbust-logo.png",
            logoWidth: 177,
            logoHeight: "35px",
            bgColor: "#824cf5",
            description:
                "How Starburst fixed 350 user access gaps and saved $57,000 on underused licenses in 2 months.",
        },
        {
            id: 6,
            company: "Starburst",
            logo: "/case-study/starbust-logo.png",
            logoWidth: 177,
            logoHeight: "35px",
            bgColor: "#824cf5",
            description:
                "How Starburst fixed 350 user access gaps and saved $57,000 on underused licenses in 2 months.",
        },
    ];
    return (
        <section className="w-full px-6 py-20 md:py-40 mx-auto">
            <div className="flex flex-col items-center gap-6 max-w-[1256px] mx-auto">
                {/* Featured Case Study */}
                <div className="w-full">
                    <div className="flex flex-col md:flex-row border border-solid border-[#545058] bg-white rounded-[32px] overflow-hidden">
                        <div className="flex-1 flex justify-center items-center h-[400px] py-20 bg-[#1a1a1a] rounded-3xl">
                            <Image width={248} height={40} alt="Turing logo" src="/case-study/turing-logo.png" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between p-6">
                            <div className="flex flex-col gap-4">
                                <h2 className="text-xl font-semibold text-[#363338]">Turing</h2>
                                <p className="text-[#7b7481]">
                                    Ex quis consectetur consectetur amet qui nostrud ea culpa eu exercitation laborum
                                    cupidatat. Ut deserunt velit ex laborum et elit reprehenderit dolore. Quis elit sit
                                    ut magna fugiat adipisicing anim adipisicing quis ad consectetur id. Laboris aliqua
                                    sint consequat laboris sunt eu duis non laborum deserunt.
                                </p>
                            </div>
                            <Link href="/case-study-details" passHref>
                                <Button
                                    variant="primary"
                                >
                                    Read story
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Second Row - 2 Cards */}
                <div className="w-full flex flex-col md:flex-row gap-6">
                    {caseStudies.slice(1, 3).map((study) => (
                        <div
                            key={study.id}
                            className="flex-1 border border-solid border-[#545058] bg-white rounded-[32px] overflow-hidden"
                        >
                            <div className="p-4 md:p-6 pb-0">
                                <div
                                    className="h-[200px] rounded-3xl flex items-center justify-center"
                                    style={{backgroundColor: study.bgColor}}
                                >
                                    <Image
                                        height={40}
                                        width={study.logoWidth}
                                        alt={`${study.company} logo`}
                                        src={study.logo}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-center px-4 pb-8 md:px-8 md:pb-10">
                                <h2 className="text-xl font-semibold text-[#363338] text-center mt-10 mb-4">
                                    {study.company}
                                </h2>
                                <p className="text-[#7b7481] text-center">{study.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Third Row - 3 Cards */}
                <div className="w-full flex flex-col md:flex-row gap-6">
                    {caseStudies.slice(3, 6).map((study) => (
                        <div
                            key={study.id}
                            className="flex-1 border border-solid border-[#545058] bg-white rounded-[32px] overflow-hidden"
                        >
                            <div className="p-4 md:p-6 pb-0">
                                <div
                                    className="h-[200px] rounded-3xl flex items-center justify-center"
                                    style={{backgroundColor: study.bgColor}}
                                >
                                    <Image
                                        height={40}
                                        width={study.logoWidth}
                                        alt={`${study.company} logo`}
                                        src={study.logo}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-center px-4 pb-8 md:px-8 md:pb-10">
                                <h2 className="text-xl font-semibold text-[#363338] text-center mt-10 mb-4">
                                    {study.company}
                                </h2>
                                <p className="text-[#7b7481] text-center">{study.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
