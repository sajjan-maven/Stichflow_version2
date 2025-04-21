"use client";
import {ArrowRightIcon} from "lucide-react";
import Image from "next/image";
import {useRouter} from "next/navigation";
import React from "react";

const DemoComponent = () => {
    const router = useRouter();
    return (
        <section className="w-full bg-[#363338] rounded-t-[32px] py-20 px-6 md:px-12 lg:px-24 relative z-[1]">
            <div className="w-full bg-[#565258] rounded-[32px] overflow-hidden relative flex flex-col lg:flex-row items-center justify-between  gap-8">
                {/* Text Section */}
                <div className="w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 pt-8 md:pt-6 lg:pt-0 flex flex-col gap-6 ps-8 z-10">
                    <div className="flex flex-col items-start gap-2 w-full">
                        <h2 className="font-semibold text-white text-2xl sm:text-3xl lg:text-4xl leading-snug">
                            Join Our Free Pilot
                        </h2>
                        <p className="font-normal text-white text-base sm:text-lg leading-relaxed">
                            Schedule the demo that convinced IT leaders in just one sitting.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <button
                            onClick={() => router.push("/schedule-a-demo")}
                            className="cursor-pointer w-[136px] h-[52px] px-6 py-3 rounded-xl border border-[#54505833] shadow-[0px_1px_1px_#5450581a,0px_4px_8px_#54505805,inset_0px_-2px_4px_#0000001f] bg-gradient-to-b from-white to-[#f9f8fa] text-[#363338] font-medium hover:opacity-90 transition-opacity"
                        >
                            Book Demo
                        </button>

                        <button
                            onClick={() => router.push("/pilot")}
                            className="cursor-pointer w-[148px] h-[52px] px-6 py-3 rounded-xl shadow-[0px_2px_12px_#54505840,0px_2px_3px_#54505845,inset_0px_-2px_4px_#00000099] bg-gradient-to-b from-[#545058] to-[#363338] text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
                        >
                            Start Trial
                            <ArrowRightIcon className="ml-2 h-4 w-4" />
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex justify-end relative z-0">
                    <Image
                        src="/images/Frame 2 2.svg"
                        alt="Dashboard preview"
                        width={725}
                        height={400}
                        className="w-full max-w-[725px] h-auto object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default DemoComponent;
