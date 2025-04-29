import {ArrowRightIcon} from "lucide-react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/Button";
const resourceCards = [
    {
        icon: "/thank-you-page/file-check-02.svg",
        title: "Renewal Tracker",
        url: "/tools/renewal-tracker",
        description:
            "Never miss a renewal again. Organize contracts in a single view, track upcoming dates, and get automated reminders.",
        altText: "File check",
    },
    {
        icon: "/thank-you-page/SquaresFour.svg",
        title: "App Access Matrix",
        url: "/tools/access-matrix",
        description:
            "Define, review, and share user access policies by role, team, or location—so everyone has the right access at the right time.",
        altText: "Squares four",
    },
    {
        icon: "/thank-you-page/KeyReturn.svg",
        title: "ROI Calculator",
        url: "/tools/roi-calculator",
        description:
            "Calculate exactly how much time and budget your IT team can save by automating SaaS management with Stitchflow.",
        altText: "Key return",
    },
];

const FeatureResourceSection = () => {
    return (
        <div className="w-full bg-[#e4dbd0] bg-opacity-20 py-[100px]  ">
            {/* <section className="flex flex-col w-full items-center justify-center gap-[60px] px-0 py-[100px] absolute top-[551px] left-0 [background:linear-gradient(0deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.2)_100%),linear-gradient(0deg,rgba(228,219,208,1)_0%,rgba(228,219,208,1)_100%)]"> */}
            <div className="max-w-[1288px] mx-auto flex flex-col items-center gap-[60px]">
                <h2 className="text-[32px] font-medium text-[#222222] text-center leading-[43.2px]">
                    Featured Resources
                </h2>

                <div className="flex flex-wrap items-start justify-center">
                    {resourceCards.map((card, index) => (
                        <Link
                            key={index}
                            href={card.url}
                            passHref
                            className="lg:w-[33.33%] p-4"
                        >
                            <div className="relative flex flex-col p-8 min-h-[400px] bg-white rounded-[32px] border border-[#545058]">
                                <Image className="w-8 h-8" alt={card.altText} src={card.icon} width={8} height={8} />
                                <div className="flex flex-col items-stretch justify-between h-full">
                                    <div className="flex flex-col items-start gap-4 w-full">
                                        <h3 className="font-medium text-[#363338] text-[32px] leading-[40px]">{card.title}</h3>

                                        <p className="font-normal text-[#7b7481] text-[14px] leading-[20px]">
                                            {card.description}
                                        </p>
                                    </div>

                                    <Button variant="primary" className="w-fit absolute right-8 bottom-8">
                                        <span className="font-medium text-[#363338] text-[14px] leading-[16px] whitespace-nowrap">
                                            Open tool
                                        </span>
                                        <ArrowRightIcon className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureResourceSection;
