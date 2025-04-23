import Image from "next/image";
import React from "react";
import Button from "./Button";


const HomeHeroSection = () => {
    return (
        <div>
            <section className="relative w-full py-12 md:py-24 bg-[#f8f5f3] overflow-hidden">
                <div className="flex flex-col w-full max-w-[828px] items-center gap-8 mx-auto px-6">
                    <div className="flex flex-col items-start gap-6 w-full">
                        <h1 className="w-full font-bold text-[#222222] text-[40px] md:text-[64px] text-center leading-12 md:leading-[72px]">
                            Instant SaaS Account
                            <br />
                            Reconciliation
                        </h1>

                        <p className="w-full font-normal text-[#363338] text-lg text-center leading-8">
                            Stitchflow helps you keep pace with business sprawl by automatically reconciling
                            your SaaS user data for effortless audits, license renewals, and access reviews.
                        </p>
                    </div>

                </div>
                <div className="relative w-full px-6 md:px-0 pt-0 md:pt-10 lg:pt-0">
                    <div className="md:absolute top-0 flex justify-center gap-4 items-center mb-10 mt-8 w-full flex-wrap">
                        <div className="flex w-[280px] items-center gap-2 px-3 py-3 bg-white rounded-xl border border-solid border-[#e4dbd0]">
                            <input
                                className="border-0 shadow-none p-0 h-auto font-label-regular text-[#7b7481]"
                                placeholder="Work email address"
                            />
                        </div>

                        <Button variant="primary" className="flex items-center gap-2 px-4 py-1">
                            <div className="relative flex items-center gap-2">
                                <div className="relative w-8 h-8 rounded-[100px] [background:url(/images/Avatar.svg)_50%_50%_/_cover] border border-solid border-[#54505833]" />
                                <div className="absolute w-2.5 h-2.5 -top-px left-[23px] bg-[#30ba70] rounded-[5px] border border-solid border-white" />
                            </div>
                            <span className="font-['Geist',Helvetica] font-medium text-[#363338] text-base leading-4 whitespace-nowrap">
                                Book a 15 min demo
                            </span>
                        </Button>
                    </div>
                    <Image
                        className="hidden md:block object-cover mx-auto"
                        alt="Users employees dashboard"
                        src="/home-page/hero-image.png"
                        width={1728}
                        height={1034}
                    />
                    <Image
                        className="block md:hidden object-cover mx-auto"
                        alt="Users employees dashboard"
                        src="/home-page/hero-image-mobile.png"
                        width={1728}
                        height={1034}
                    />
                </div>
            </section>
        </div>
    );
};

export default HomeHeroSection;
