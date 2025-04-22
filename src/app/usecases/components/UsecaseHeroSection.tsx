import Image from "next/image";
import React from "react";

const UsecaseHeroSection = () => {
    return (
        <div>
            <section className="relative w-full h-[680px] z-[5] bg-[#e3dad0] overflow-hidden px-4 lg:px-0">
                <div className="flex justify-center items-center flex-wrap">
                    <div className="w-full md:w-[90%] lg:w-[80%] ">
                        <div className="relative h-[935px] top-35 ">
                            <div className="flex justify-center items-center flex-wrap gap-8">
                                <div className="flex flex-col items-center gap-4 relative self-stretch w-full text-center">
                                    <h1 className="text-center self-stretch mt-[-1.00px] font-semibold text-[#363338] text-[40px] text-center tracking-[0] leading-[48px]">
                                        Accurate. Continuous. Effortless
                                    </h1>
                                    <p className="text-center self-stretch font-normal text-[#363338] text-lg text-center tracking-[0] leading-8">
                                        Discover how Stitchflow&apos;s instant reconciliation makes a difference to any
                                        use case.
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

                            <div className="absolute w-[1439px] h-[783px] top-[152px] left-0">
                                <div className="relative h-[464px]">
                                    <Image
                                        className="absolute w-[1080px] h-[342px] top-[122px] left-0 object-cover"
                                        alt="Users employees"
                                        src="/images/users - employees.svg"
                                        width={1080}
                                        height={342}
                                    />
                                    <Image
                                        className="absolute w-[1080px] h-[464px] top-0 left-[210px] object-cover"
                                        alt="User detail page"
                                        src="/images/user detail page - overview.svg"
                                        width={1080}
                                        height={464}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UsecaseHeroSection;

<a
    href="https://cdn.prod.website-files.com/648b3fb5ff20b9eb641b8ea2/65b21d8c27b8bd6a6f90d79f_Stitchflow%20Security%20Whitepaper.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-4 rounded-xl border border-solid border-[#54505833] bg-transparent no-underline"
>
    <span className="font-h6-medium text-[#363338]">Learn more in our whitepaper</span>
</a>;
