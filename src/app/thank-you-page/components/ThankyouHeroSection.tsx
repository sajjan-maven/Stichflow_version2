import Image from "next/image";
import React from "react";

const ThankyouHeroSection = () => {
    return (
        <div>
            <div className="flex flex-col w-full max-w-[628px] items-center gap-3  top-[250px] left-1/2 -translate-x-1/2">
                <h2 className=" self-stretch mt-[-1.00px] font-normal text-[#363338] text-2xl text-center tracking-[0] leading-8 font-sans">
                    THANK YOU!
                </h2>

                <div className="flex flex-col items-start gap-3  self-stretch w-full">
                    <h1 className=" self-stretch mt-[-1.00px] font-bold text-[#222222] text-[56px] text-center tracking-[0] leading-[75.6px] font-sans">
                        Your demo is booked.
                    </h1>

                    <p className=" self-stretch font-normal text-[#363338] text-lg text-center tracking-[0] leading-8 font-sans">
                        We&apos;ve received your request. We&#39;re excited to show you how to automate those
                        &#34;unautomatable&#34; parts of your IT environment.
                    </p>
                </div>
            </div>

            <Image
                className="absolute w-[108.84px] h-[24px] top-9 left-0  object-cover"
                alt="Animation"
                src="/images/logo (1).svg"
                width={108.84}
                height={24}
            />
        </div>
    );
};

export default ThankyouHeroSection;
