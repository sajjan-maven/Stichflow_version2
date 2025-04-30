import React from "react";

export default function HeroSection() {
    return (
        <section className="inline-flex flex-col items-start gap-2 px-6 py-16 relative z-[3] bg-[#e3dad0] w-full">
            <div className="w-full max-w-[876px] mx-auto">
                <div className="flex flex-col items-center gap-4 w-full">
                    <h1 className=" font-semibold text-[#363338] text-[40px] text-center leading-[48px]">
                        Free Tools for IT Teams
                    </h1>
                    <p className=" font-normal text-[#363338] text-lg text-center leading-8">
                        Think of an IT pain point and we&apos;re on a mission to solve it! Stitchflow&apos;s
                        <strong> free tools</strong> tackle specific IT challenges—fast, effective, and built to make
                        your job easier.
                    </p>
                </div>
            </div>
        </section>
    );
}
