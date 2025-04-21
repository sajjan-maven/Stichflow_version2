import React from "react";

const HeroSection = () => {
    return (
        <section className="w-full bg-[#e4dbd0] pt-[130px] px-4 lg:px-0">
            <div className="flex justify-center items-center flex-wrap">
                <div className="w-full md:w-[90%] lg:w-[80%]">
                    <div className="flex justify-center">
                        <div className="max-w-[616px] flex flex-col items-center gap-8">
                            <div className="flex flex-col items-center gap-4 w-full">
                                <h1 className="font-semibold text-[#363338] text-[40px] leading-[48px] font-['Geist',Helvetica] text-center">
                                    Stitchflow Security Overview: <br />
                                    Protecting Your IT Data
                                </h1>

                                <p className="text-[#363338] text-lg leading-8 font-['Geist',Helvetica] font-normal text-center">
                                    Stitchflow meets the highest industry standards, designed to protect your data with
                                    security, privacy, and compliance prioritized from day one.
                                </p>
                            </div>
                            <a
                                href="https://cdn.prod.website-files.com/648b3fb5ff20b9eb641b8ea2/65b21d8c27b8bd6a6f90d79f_Stitchflow%20Security%20Whitepaper.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-4 rounded-xl border border-solid border-[#54505833] bg-transparent no-underline"
                            >
                                <span className="font-h6-medium text-[#363338]">Learn more in our whitepaper</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
