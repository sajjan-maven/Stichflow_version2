import React from "react";

const ThankyouHeroSection = () => {
    return (
        <div className="relative w-full py-12 md:py-24 bg-[#f8f5f3] overflow-hidden flex items-center justify-center">
            <div className="flex flex-col w-full  items-center gap-3 ">
                <h2 className=" self-stretch mt-[-1.00px] font-normal text-[#363338] text-base md:text-2xl text-center tracking-[0] leading-8 font-sans">
                    THANK YOU!
                </h2>

                <h1 className=" self-stretch mt-[-1.00px] font-bold text-[#222222] text-[32px] md:text-[56px] text-center tracking-[0] font-sans">
                    Your demo is booked.
                </h1>

                <p className=" self-stretch font-normal text-[#363338] text-lg text-center tracking-[0] leading-8 font-sans text-wrap">
                    We&apos;ve received your request. We&#39;re excited to show you how to automate
                </p>

                <p className=" self-stretch font-normal text-[#363338] text-lg text-center tracking-[0] leading-8 font-sans text-wrap">
                    those&#34;unautomatable&#34; parts of your IT environment.
                </p>
            </div>
        </div>
    );
};

export default ThankyouHeroSection;
