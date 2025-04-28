import Image from "next/image";
import Link from "next/link";
import Button from "../../components/Button";
export default function ITtoolsCard() {
    const itTools = [
        {
            label: "License Renewal",
            icon: "/it-tools/log-out.png",
            title: "Renewal tracker",
            url: "/tools/offboard-it",
            description:
                "Free IT Offboarding Checklist: Streamline your org&apos;s offboarding process. Never miss a critical step in your IT offboarding process. Create a customized list of tasks based on the departing employee&apos;s role and department.",
        },
        {
            label: "Employee Offboarding",
            icon: "/it-tools/file-check.png",
            title: "OffboardIT",
            url: "/tools/renewal-tracker",
            description:
                "Free SaaS Contract Renewal Tracker. Never miss a SaaS renewal. Organize contracts in one view, track upcoming renewal dates, and stay ahead with automated reminders.",
        },
        {
            label: "Access Management",
            icon: "/it-tools/log-out.png",
            title: "App Access Matrix",
            url: "/tools/access-matrix",
            description:
                "Free SaaS App Access Policy Matrix for IT Teams. A structured way to define, review, and share the SaaS app access policies that your organization uses per app and per user role, team, department or location.",
        },
        {
            label: "Cost Savings",
            icon: "/it-tools/briefcase.png",
            title: "ROI Calculator",
            url: "/tools/roi-calculator",
            description:
                "Meet your modern IT job board. Every role here is handpicked, vetted, and curated for modern IT pros. Filter by organization size, growth stage, tech stack, and culture fit—we bring you the most relevant jobs at companies that truly value IT.",
        },
    ];

    return (
        <section className="flex flex-col items-center gap-6 pt-14 pb-0 md:py-20 relative w-full z-[2] px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1256px] ">
                {itTools
                .filter((tool) => tool.url)
                .map((tool, index) => (
                    <Link
                        href={tool.url}
                        key={index}
                        className="flex flex-col items-start p-6 md:p-8 bg-white rounded-[32px] border border-solid border-[#545058]"
                    >
                        <div className="bg-[#f1acc0] text-gray-500 px-4 py-1 font-medium rounded-full mb-6">{tool.label}</div>
                        <div className="flex flex-col items-start gap-4 w-full pb-8">
                            <div className="flex items-center gap-4">
                                <Image width={32} height={32} alt={`icon-${index}`} src={tool.icon} />
                                <div className="font-medium text-[#363338] text-3xl">{tool.title}</div>
                            </div>
                            <p className="text-[#7b7481]">{tool.description}</p>
                        </div>

                        <Button variant = "primary" >
                            <span className="font-label-medium text-[#363338]">Try for Free</span>
                            <Image width={14} height={14} className="ml-2" alt="button-icon" src="/it-tools/external.png" />
                        </Button>
                    </Link>
                ))}
            </div>
        </section>
    );
}
