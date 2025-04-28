import Image from "next/image";
import Link from "next/link";
import Button from "../../components/Button";
export default function ITtoolsCard() {
    const itTools = [
        {
            label: "License Renewal",
            icon: "/it-tools/license.png",
            title: "Renewal tracker",
            url: "/tools/offboard-it",
            description:
                "Never miss a SaaS renewal. Organize contracts in one view, track upcoming renewal dates, and stay ahead with automated email & calendar reminders.",
        },
        {
            label: "Employee Offboarding",
            icon: "/it-tools/offboardIT.png",
            title: "OffboardIT",
            url: "/tools/renewal-tracker",
            description:
                "Streamline your org’s offboardingprocess. Create a customized list of tasks based on the departing employee's roleand department.",
        },
        {
            label: "Access Management",
            icon: "/it-tools/appAccessMatrix.png",
            title: "App Access Matrix",
            url: "/tools/access-matrix",
            description: "Visualize, track, review, and share app permissions across roles, teams, and locations—without the spreadsheet mess.",
        },
        {
            label: "Cost Savings",
            icon: "/it-tools/ROIcalculator.png",
            title: "ROI Calculator",
            url: "/tools/roi-calculator",
            description: "Estimate your org’s app and business sprawl levels and see how much you could save in license gaps, cost, and IT hours with Stitchflow’s offering.",
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
                        className="flex flex-col relative items-start p-6 md:p-8 bg-white rounded-[32px] border border-solid border-[#545058] min-h-[330px]"
                    >
                        <div className="bg-[#f4eaff] rounded-4xl px-4 py-1 text-[#7b7481] mb-6">{tool.label}</div>
                        <div className="flex flex-col items-start gap-4 w-full pb-12">
                            <div className="flex items-center gap-4">
                                <Image width={36} height={36} alt={`icon-${index}`} src={tool.icon} />
                                <div className="font-medium text-[#363338] text-3xl">{tool.title}</div>
                            </div>
                            <p className="text-[#7b7481]">{tool.description}</p>
                        </div>

                        <Button variant = "primary" className="absolute left-6 bottom-6 md:right-8 w-fit" >
                            <span className="font-label-medium text-[#363338]">Try for Free</span>
                            <Image width={14} height={14} className="ml-2" alt="button-icon" src="/it-tools/external.png" />
                        </Button>
                    </Link>
                ))}
            </div>
        </section>
    );
}
