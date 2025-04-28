"use client";
import {ArrowRightIcon} from "lucide-react";
import Image from "next/image";
import {useRouter} from "next/navigation";
import React from "react";
import Button from "./Button";

const DemoComponent = () => {
    const router = useRouter();
    return (
        <section className="w-full bg-[#363338] rounded-t-4xl px-4 py-6 md:py-20 relative -mt-5 z-50">
            <div className="w-full bg-[#565258] rounded-[26px] md:rounded-4xl max-w-[1256px] mx-auto overflow-hidden relative flex flex-col lg:flex-row items-start md:items-center justify-between  gap-8">
                {/* Text Section */}
                <div className="w-full md:w-1/2 pt-5 lg:pt-0 flex flex-col gap-6 z-10 px-5 md:px-10">
                    <div className="flex flex-col items-start gap-2 w-full">
                        <h2 className="font-semibold text-white text-2xl sm:text-3xl lg:text-4xl leading-snug">
                            Join Our Free Pilot
                        </h2>
                        <p className="font-normal text-white text-base sm:text-lg leading-relaxed">
                            Schedule the demo that convinced IT leaders in just one sitting.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <Button
                            variant="primary"
                            onClick={() => router.push("/schedule-a-demo")}
                        >
                            Book Demo
                        </Button>

                        <Button
                            variant="secondary"
                            onClick={() => router.push("/pilot")}
                        >
                            Start Trial
                            <ArrowRightIcon className="ml-2 h-4 w-4" />
                        </Button>
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
