import React from "react";
const featureCards = [
    {
        id: 1,
        title: "Connect",
        description: "Connects any app with any system of record—seamlessly and without the complexity.",
        icons: [
            {
                position: "top-[52px] left-44",
                size: "w-24 h-24",
                bgColor: "bg-[#363338]",
                rounded: "rounded-[48px]",
                iconSrc: "/icon-5.svg",
                iconSize: "w-[34px] h-[34px]",
                iconPosition: "top-[3px] left-[3px]",
            },
            {
                position: "top-[68px] left-[296px]",
                size: "w-16 h-16",
                bgColor: "bg-[#00a1e0]",
                rounded: "rounded-[32px]",
                iconSrc: "/vector-8.svg",
                iconSize: "w-8 h-[22px]",
                iconPosition: "top-1 left-0",
            },
            {
                position: "top-[68px] left-96",
                size: "w-16 h-16",
                bgColor: "bg-black",
                rounded: "rounded-[32px]",
                iconSrc: "/group-1-1.png",
                iconSize: "w-[26px] h-[19px]",
                iconPosition: "top-1.5 left-0",
            },
            {
                position: "top-[68px] left-0",
                size: "w-16 h-16",
                bgColor: "bg-[#e1dfd9]",
                rounded: "rounded-[32px]",
                iconSrc: "/logo-1.png",
                iconSize: "w-[25px] h-8",
                iconPosition: "top-0 left-[7px]",
            },
            {
                position: "top-[68px] left-[88px]",
                size: "w-16 h-16",
                bgColor: "bg-[#fbf8fe]",
                rounded: "rounded-[32px]",
                iconSrc: "/frame-6.svg",
                iconSize: "w-7 h-7",
                iconPosition: "top-0.5 left-0.5",
            },
        ],
        type: "connect",
    },
    {
        id: 2,
        title: "Reconcile",
        description:
            "Provides an instantly reconciled view of SaaS user data—so you always have a single source of truth.",
        icons: [
            {
                position: "top-11 left-[77px]",
                size: "w-20 h-20",
                bgColor: "bg-black",
                rounded: "rounded-3xl",
                border: "border border-solid border-[#54505833]",
                rotate: "-rotate-12",
                blur: "blur-[2px]",
                iconSrc: "/vector-4.svg",
                iconSize: "w-[31px] h-[38px]",
                iconPosition: "top-[-3px] left-0",
                iconRotate: "rotate-12",
            },
            {
                position: "top-[52px] left-[117px]",
                size: "w-20 h-20",
                bgColor: "bg-[#00a1e0]",
                rounded: "rounded-3xl",
                border: "border border-solid border-[#54505833]",
                rotate: "-rotate-12",
                blur: "blur-[1px]",
                iconSrc: "/vector-3.svg",
                iconSize: "w-[31px] h-[29px]",
                iconPosition: "top-px left-px",
                iconRotate: "rotate-12",
            },
            {
                position: "top-[60px] left-[157px]",
                size: "w-20 h-20",
                bgColor: "bg-[#0b5cff]",
                rounded: "rounded-3xl",
                border: "border border-solid border-[#54505833]",
                rotate: "-rotate-12",
                blur: "blur-[0.5px]",
                iconSrc: "/frame-5.svg",
                iconSize: "w-[27px] h-[34px]",
                iconPosition: "-top-px left-0.5",
                iconRotate: "rotate-12",
            },
            {
                position: "top-[68px] left-[205px]",
                size: "w-20 h-20",
                bgColor: "bg-black",
                rounded: "rounded-3xl",
                border: "border border-solid border-[#54505833]",
                rotate: "-rotate-12",
                backdrop:
                    "backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]",
                iconSrc: "/vector-7.svg",
                iconSize: "w-[31px] h-[39px]",
                iconPosition: "top-[-3px] left-0",
                iconRotate: "rotate-12",
            },
            {
                position: "top-[76px] left-[245px]",
                size: "w-20 h-20",
                bgColor: "[background:url(/images/Avatar.svg)_50%_50%_/_cover]",
                rounded: "rounded-3xl",
                border: "border border-solid border-[#54505833]",
                rotate: "-rotate-12",
            },
        ],
        type: "reconcile",
    },
    {
        id: 3,
        title: "Customize",
        description: "Accounts for all your organization's custom configurations, policies, and exceptions.",
        imageSrc: "/group-16-1.png",
        type: "customize",
    },
];
const HomeMagicSection = () => {
    return (
        <section className="flex flex-col items-start gap-14 py-20 px-6 md:px-12 lg:px-20 xl:px-[236px] relative w-full bg-white">
            <div className="flex flex-col w-full items-start gap-10 mx-auto max-w-[1256px]">
                <h2 className="w-full font-['Geist',Helvetica] font-semibold text-[#363338] text-[40px] text-center leading-[48px]">
                    The Stitchflow Magic
                </h2>

                <div className="flex flex-col md:flex-row items-start justify-center gap-6 w-full flex-wrap">
                    {featureCards.map((card) => (
                        <div
                            key={card.id}
                            className="flex flex-col w-full md:w-[402.67px] bg-[#f8f5f3] rounded-[32px] overflow-hidden"
                        >
                            <div className="relative w-full h-[200px] overflow-hidden">
                                {/* CONNECT */}
                                {card.type === "connect" && (
                                    <div className="relative w-[448px] h-[200px] left-[-23px]">
                                        {card.icons.map((icon, index) => (
                                            <div
                                                key={index}
                                                className={`absolute ${icon.size} ${icon.position} ${icon.bgColor} ${icon.rounded}`}
                                            >
                                                <div className="relative w-full h-full">
                                                    <img
                                                        className={`absolute ${icon.iconSize} ${icon.iconPosition}`}
                                                        src={icon.iconSrc}
                                                        alt="icon"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                        <div className="w-[403px] left-[23px] absolute h-[200px] top-0 bg-gradient-to-r from-[#f8f5f3] via-transparent to-[#f8f5f3]" />
                                    </div>
                                )}

                                {/* RECONCILE */}
                                {card.type === "reconcile" && (
                                    <div className="relative w-[402px] h-[200px]">
                                        {card.icons.map((icon, index) => (
                                            <div
                                                key={index}
                                                className={`absolute ${icon.size} ${icon.position} ${icon.bgColor} ${
                                                    icon.rounded
                                                } ${icon.border || ""} ${icon.rotate || ""} ${icon.blur || ""} ${
                                                    icon.backdrop || ""
                                                }`}
                                            >
                                                {!icon.bgColor.includes("url") && (
                                                    <div className="relative w-8 h-8 top-6 left-6 overflow-hidden">
                                                        <img
                                                            className={`absolute ${icon.iconSize} ${
                                                                icon.iconPosition
                                                            } ${icon.iconRotate || ""}`}
                                                            src={icon.iconSrc}
                                                            alt="icon"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                        <div className="w-[402px] absolute h-[200px] top-0 left-0 bg-[linear-gradient(146deg,rgba(248,245,243,1)_0%,rgba(248,245,243,0)_100%)]" />
                                    </div>
                                )}

                                {/* CUSTOMIZE */}
                                {card.type === "customize" && (
                                    <div className="relative w-[403px] h-[346px]">
                                        <img
                                            className="absolute w-[403px] h-[271px] top-0 left-0 object-cover"
                                            src={card.imageSrc}
                                            alt="Customize"
                                        />
                                        <div className="absolute w-[402px] h-[346px] top-0 left-px bg-[linear-gradient(1deg,rgba(248,245,243,1)_25%,rgba(248,245,243,0)_100%)]" />
                                    </div>
                                )}
                            </div>

                            <div className="p-6 flex flex-col items-start gap-2">
                                <h3 className="text-[#363338] text-lg font-semibold">{card.title}</h3>
                                <p className="text-[#7b7481] text-base leading-6 font-normal font-['Geist',Helvetica]">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeMagicSection;
