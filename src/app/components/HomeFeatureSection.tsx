import Image from "next/image";
import React from "react";

const HomeFeatureSection = () => {
    const testimonial = {
        quote: '"Instant SaaS account reconciliation is a non-negotiable for IT teams in fast-changing businesses. In the past we would manually update spreadsheet data, verify it against each app license one at a time, weeks in advance for any user review. Only to find new apps, employees, contractors and roles had crept up in the meantime. We would always be behind the ball. Not any more."',
        author: {
            name: "Edwin Katabaro",
            position: "CIO and CISO, Turing",
            avatar: "/images/Avatar.svg",
        },
    };

    return (
        <section className="w-full pb-10 md:pb-20 z-[5] px-6 bg-gradient-to-b from-[#f8f5f3] to-white bg-[#f8f5f3]">
            <div className="max-w-[800px] mx-auto">
                <div className="flex flex-col items-start gap-6 md:gap-12">
                    <Image className="w-[41px] h-10" alt="Quote icon" src="/images/“.svg" width={41} height={10} />

                    <div className="flex flex-col items-start gap-6">
                        <p className="text-lg text-[#363338] font-normal leading-[26px] max-w-[800px]">
                            {testimonial.quote}
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-[#54505833]">
                                <Image
                                    width={48}
                                    height={48}
                                    src={testimonial.author.avatar}
                                    alt={testimonial.author.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <p className="text-base text-[#7b7481] font-medium leading-6">
                                    {testimonial.author.name}
                                </p>
                                <p className="text-xs text-[#7b7481] font-normal leading-4">
                                    {testimonial.author.position}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeFeatureSection;
