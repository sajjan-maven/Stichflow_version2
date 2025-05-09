import React from "react";

const AboutHeroSection = () => {
    return (
        <>
            <section className="relative w-full z-[3] bg-[#e4dbd0] py-[88px] px-6">
                <div className="relative w-full md:w-[616px] mx-auto">
                    <div className="flex flex-col w-full md:w-[616px] items-center gap-8">
                        <div className="flex flex-col items-center gap-10 w-full">
                            <h1 className="font-semibold text-[#363338] text-3xl md:text-[40px] text-center leading-tight md:leading-[48px]">
                                Helping Modern IT Teams Stay Ahead of Business Sprawl
                            </h1>
                            <p className="font-normal text-[#363338] text-lg text-center leading-8">
                                As a founding team with decades of experience building systems, products, and processes
                                for cloud-native IT teams at companies like Okta, atSpoke, Workday, Lever, and Snorkel,
                                we deeply understand the challenges IT teams face. Modern IT teams wrestle with business
                                and app sprawl, making even simple tasks manual and cumbersome. Our mission is to
                                provide effortless visibility and automation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutHeroSection;
