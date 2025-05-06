import React from "react";
import Image from "next/image";

export default function UseCaseSection() {
    // Use case sections data
    const useCases = [
        {
            title: "Accurate License Management",
            description:
                '"Managing software licenses can be a real headache, especially as a company grows. Stitchflow has simplified our reporting process immensely and is much more user-friendly."',
            bgColor: "bg-[#247CC0]",
            imageSrc: "/use-cases/section.png",
        },
        {
            title: "Secure Offboarding",
            description:
                '"Before Stitchflow, offboarding was a huge manual effort and error-prone.Now, with Stitchflow, we have dashboards that let us instantly see discrepancies—who is deactivated in Google but still active elsewhere—so we can quickly close those gaps. It&apos;s a game changer for our team."',
            bgColor: "bg-[#F6A36D]",
            imageSrc: "/use-cases/section.png",
        },
        {
            title: "Error-free Compliance",
            description:
                '"Stitchflow has helped us ensure compliance (SOC 2, ISO) by making access audits quick and accurate. It&apos;s reduced security risks by flagging unnecessary permissions and inactive accounts."',
            bgColor: "bg-[#F8BE65]",
            imageSrc: "/use-cases/section.png",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center bg-[#f8f5f3] pb-20 md:pb-32">
            {useCases.map((useCase, index) => (
                <section
                    key={index}
                    className="inline-flex flex-col items-center justify-center gap-6 md:gap-20 pt-14 md:pt-40 px-6 w-full"
                >
                    <div className="max-w-[1256px] mx-auto">
                        <div className="flex flex-col items-center gap-2 max-w-[878px] mx-auto pb-10 md:pb-20">
                            <h2 className="font-semibold text-[#363338] text-3xl md:text-[40px] text-center md:leading-[48px]">
                                {useCase.title}
                            </h2>
                            <p className=" font-normal text-[#7b7481] text-base text-center leading-6">
                                {useCase.description}
                            </p>
                        </div>

                        <div
                            className={`flex flex-col gap-2 p-6 md:p-20 ${useCase.bgColor} rounded-2xl md:rounded-[48px] border-none`}
                        >
                            <Image width={1096} height={708} alt="Users employees" src={useCase.imageSrc} />
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}
