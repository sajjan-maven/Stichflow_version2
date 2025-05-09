import React from "react";

const HeroSection = () => {
    return (
        <section className="w-full bg-[#e4dbd0] pt-[70px] px-6">
            <div className="flex justify-center items-center flex-wrap">
                <div className="flex justify-center">
                    <div className="max-w-[616px] flex flex-col items-center gap-8">
                        <div className="flex flex-col items-center gap-4 w-full">
                            <h1 className="font-semibold text-[#363338] text-[40px] leading-[48px] text-center">
                                Stitchflow Security Overview: <br />
                                Protecting Your IT Data
                            </h1>

                            <p className="text-[#363338] text-lg leading-8 font-normal text-center">
                                Stitchflow meets the highest industry standards, designed to protect your data with
                                security, privacy, and compliance prioritized from day one.
                            </p>
                        </div>
                        <a
                            href="https://cdn.prod.website-files.com/648b3fb5ff20b9eb641b8ea2/65b21d8c27b8bd6a6f90d79f_Stitchflow%20Security%20Whitepaper.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-4 rounded-xl border border-solid border-[#54505833] bg-transparent no-underline hover:bg-[#54505810] shadow active:shadow-none cursor-pointer"
                        >
                            <span className="font-medium text-[#363338]">Learn more in our whitepaper</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
