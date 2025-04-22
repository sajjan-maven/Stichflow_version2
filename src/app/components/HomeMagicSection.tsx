import Image from "next/image";
import React from "react";

type Icon = {
    position: string;
    size: string;
    bgColor: string;
    rounded: string;
    iconSrc?: string;
    iconSize?: string;
    iconPosition?: string;
    iconRotate?: string;
    border?: string;
    rotate?: string;
    blur?: string;
    backdrop?: string;
    width?: number;
    height?: number;
};

type FeatureCard = {
    id: number;
    title: string;
    description: string;
    icons?: Icon[];
    imageSrc?: string;
    type: "connect" | "reconcile" | "customize";
};

const featureCards: FeatureCard[] = [
    {
        id: 1,
        title: "Connect",
        description: "Connects any app with any system of record—seamlessly and without the complexity.",
        imageSrc: "/home-page/magic1.png",
        type: "connect",
    },
    {
        id: 2,
        title: "Reconcile",
        description:
            "Provides an instantly reconciled view of SaaS user data—so you always have a single source of truth.",
        imageSrc: "/home-page/magic2.png",
        type: "reconcile",
    },
    {
        id: 3,
        title: "Customize",
        description: "Accounts for all your organization's custom configurations, policies, and exceptions.",
        imageSrc: "/home-page/magic3.png",
        type: "customize",
    },
];

const HomeMagicSection = () => {
    return (
        // <section className="flex flex-col items-start gap-14 py-20 px-6 md:px-12 lg:px-20 xl:px-[236px] relative w-full bg-white">

        <section className="flex justify-center items-center gap-14 py-20  relative px-4 lg:px-0">
            <div className="w-full">
                <div className="flex flex-col w-full items-start gap-10 mx-auto ">
                    <h2 className="w-full font-semibold text-[#363338] text-[40px] text-center leading-[48px]">
                        The Stitchflow Magic
                    </h2>

                    <div className="grid grid-rows-1 md:grid-cols-3 gap-4 max-w-[1256px] mx-auto">
                        {featureCards.map((card) => (
                            <div key={card.id} className="overflow-hidden rounded-2xl w-full bg-[#F8F5F3] h-full" >
                                <div className="relative w-full pt-[50%]">
                                    <Image
                                        className="absolute top-0 left-0 w-full h-full object-cover"
                                        layout="fill"
                                        src={`${card.imageSrc}`}
                                        alt="tumbnail"
                                    />
                                </div>
                                <div className="p-6 flex flex-col items-start gap-2">
                                    <h3 className="text-[#363338] text-lg font-semibold">{card.title}</h3>
                                    <p className="text-[#7b7481] text-base leading-6 font-normal">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeMagicSection;
