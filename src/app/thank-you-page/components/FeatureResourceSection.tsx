import {ArrowRightIcon} from "lucide-react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
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
            <div className="max-w-[961px] mx-auto flex flex-col items-center gap-[60px]">
                <h2 className="text-[32px] font-medium text-[#222222] text-center leading-[43.2px] font-sans">
                    Featured Resources
                </h2>

                <div className="flex flex-wrap items-start justify-center gap-6">
                    {resourceCards.map((card, index) => (
                        <Link
                            key={index}
                            href={card.url}
                            passHref
                            className="flex flex-col w-[90%] md:w-[40%] lg:w-[30%]  items-start h-[400px] gap-8 p-8 bg-white rounded-[32px] border border-[#545058]"
                        >
                            <Image className="w-8 h-8" alt={card.altText} src={card.icon} width={8} height={8} />

                            <div className="flex flex-col items-start gap-4 w-full">
                                <h3 className="font-medium text-[#363338] text-[32px] leading-[40px]">{card.title}</h3>

                                <p className="font-normal text-[#7b7481] text-[14px] leading-[20px]">
                                    {card.description}
                                </p>
                            </div>

                            <div className="inline-flex items-center justify-end gap-2 p-4 rounded-xl border border-[#54505833] shadow-[0px_1px_1px_#5450581a,0px_4px_8px_#54505805,inset_0px_-2px_4px_#0000001f] bg-gradient-to-b from-white to-[#f9f8fa] cursor-pointer">
                                <span className="font-medium text-[#363338] text-[14px] leading-[16px] whitespace-nowrap">
                                    Open tool
                                </span>
                                <ArrowRightIcon className="w-4 h-4" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureResourceSection;
