import Image from "next/image";
import React from "react";

const investors = [
    {
        src: "/about-page/index-ventures.png",
        alt: "Group",
        width: 108,
        height: 48,
    },
    {
        src: "/about-page/akta-ventures.png",
        alt: "Ventures stack rgb",
        width: 122,
        height: 48,
    },
    {
        src: "/about-page/felicis.png",
        alt: "Felicis",
        width: 165,
        height: 48,
    },
    {
        src: "/about-page/garuda.png",
        alt: "Group",
        width: 137,
        height: 46,
    },
];

const AboutInvestorSection = () => {
    return (
        <section className="w-full px-6 pt-20 pb-40">
            <div className="w-full max-w-[1256px] mx-auto">
                <h2 className="font-semibold text-[#363338] text-3xl md:text-[40px] leading-tight md:leading-[48px] mb-6 md:mb-10">
                    Our Investors
                </h2>

                <div className="flex justify-center items-center flex-wrap ">
                    <div className="w-full md:w-[90%] lg:w-[80%]"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {investors.map((investor, index) => (
                            <div
                                key={index}
                                className="h-[200px] w-[296px] bg-white rounded-[32px] border border-solid border-[#545058] flex items-center justify-center"
                            >
                                <div className="flex items-center justify-center h-full p-0">
                                    <Image
                                        alt={investor.alt}
                                        src={investor.src}
                                        width={investor.width}
                                        height={investor.height}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutInvestorSection;