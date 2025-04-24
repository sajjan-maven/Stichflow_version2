import Image from "next/image";
import Link from "next/link";
export default function ITtoolsCard() {
    const itTools = [
        {
            icon: "/it-tools/log-out.png",
            title: "OffboardIT",
            url: "/tools/offboard-it",
            description:
                "Free IT Offboarding Checklist: Streamline your org&lsquo;s offboarding process. Never miss a critical step in your IT offboarding process. Create a customized list of tasks based on the departing employee&lsquo;s role and department.",
        },
        {
            icon: "/it-tools/file-check.png",
            title: "Renewal tracker",
            url: "/tools/renewal-tracker",
            description:
                "Free SaaS Contract Renewal Tracker. Never miss a SaaS renewal. Organize contracts in one view, track upcoming renewal dates, and stay ahead with automated reminders.",
        },
        {
            icon: "/it-tools/log-out.png",
            title: "App Access Matrix",
            url: "/tools/access-matrix",
            description:
                "Free SaaS App Access Policy Matrix for IT Teams. A structured way to define, review, and share the SaaS app access policies that your organization uses per app and per user role, team, department or location.",
        },
        {
            icon: "/it-tools/briefcase.png",
            title: "Fwd IT Job Board",
            url: "/fwd-it/job-board",
            description:
                "Meet your modern IT job board. Every role here is handpicked, vetted, and curated for modern IT pros. Filter by organization size, growth stage, tech stack, and culture fit—we bring you the most relevant jobs at companies that truly value IT.",
        },
    ];

    return (
        <section className="flex flex-col items-center gap-6 py-6 md:py-40 relative w-full z-[2] px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1256px] ">
                {itTools
                .filter((tool) => tool.url)
                .map((tool, index) => (
                    <Link
                        href={tool.url}
                        key={index}
                        className="flex flex-col items-start gap-8 p-6 md:p-8 bg-white rounded-[32px] border border-solid border-[#545058]"
                    >
                        <Image width={32} height={32} alt={`icon-${index}`} src={tool.icon} />

                        <div className="flex flex-col items-start gap-4 p-0 w-full">
                            <div className="font-semibold text-[#363338]">{tool.title}</div>
                            <p className="text-[#7b7481]">{tool.description}</p>
                        </div>

                        <div className="p-0 mt-auto">
                            <button className="inline-flex items-center justify-end gap-2 px-4 py-3 rounded-xl border border-solid border-[#54505833] shadow-[0px_1px_1px_#5450581a,0px_4px_8px_#54505805,inset_0px_-2px_4px_#0000001f] [background:linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(249,248,250,1)_100%)]">
                                <span className="font-label-medium text-[#363338]">Go to tool</span>
                                <Image width={14} height={14} alt="button-icon" src="/it-tools/external.png" />
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
