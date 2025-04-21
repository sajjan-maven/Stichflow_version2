import Image from "next/image";
import React from "react";

const investors = [
    {
        logo: (
            <div className="relative w-[183px] h-12">
                <Image
                    className="absolute w-[108px] h-12 top-0 left-1/2 -translate-x-1/2"
                    alt="Group"
                    src="/images/Group 16.svg"
                    width={108}
                    height={48}
                />
            </div>
        ),
    },
    {
        logo: (
            <Image
                className="w-[122px] h-12"
                alt="Ventures stack rgb"
                src="/images/Ventures_stack_rgb_blk 1.svg"
                width={122}
                height={12}
            />
        ),
    },
    {
        logo: (
            <Image
                className="w-[165px] h-12"
                alt="Felicis"
                src="/images/63ff802a284f6464bb752ed0_Felicis Short Small 1.svg"
                width={165}
                height={12}
            />
        ),
    },
    {
        logo: (
            <div className="relative w-[210px] h-12">
                <Image
                    className="absolute w-[137px] h-[46px] top-0 left-1/2 -translate-x-1/2"
                    alt="Group"
                    src="/images/Group 19.svg"
                    width={137}
                    height={46}
                />
            </div>
        ),
    },
];

const AboutInvestorSection = () => {
    return (
        <div className="px-4 md:px-8 flex justify-center pt-20 pb-20 px-4 lg:px-0">
            <section className="w-full">
                <div className="flex justify-center items-center flex-wrap">
                    <div className="w-full md:w-[90%] lg:w-[80%]">
                        <h2 className="font-semibold text-[#363338] text-3xl md:text-[40px] leading-tight md:leading-[48px] mb-6 md:mb-10 font-['Geist',Helvetica]">
                            Our Investors
                        </h2>
                    </div>
                </div>

                <div className="flex justify-center items-center flex-wrap ">
                    <div className="w-full md:w-[90%] lg:w-[80%]"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {investors.map((investor, index) => (
                            <div
                                key={index}
                                className="h-[200px] w-[296px] bg-white rounded-[32px] border border-solid border-[#545058] flex items-center justify-center"
                            >
                                <div className="flex items-center justify-center h-full p-0">{investor.logo}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutInvestorSection;
