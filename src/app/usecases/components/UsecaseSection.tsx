import Image from "next/image";
import React from "react";

const useCases = [
    {
        title: "Accurate License Management",
        description:
            "Managing software licenses can be a real headache, especially as a company grows. Stitchflow has simplified our reporting process immensely and is much more user-friendly.",
        bgColor: "bg-blue-600",
        imageSrc: "/images/users - employees 1.svg",
    },
    {
        title: "Secure Offboarding",
        description:
            "Before Stitchflow, offboarding was a huge manual effort and error-prone. Now, with Stitchflow, we have dashboards that let us instantly see discrepancies—who is deactivated in Google but still active elsewhere—so we can quickly close those gaps. It's a game changer for our team.",
        bgColor: "bg-orange-400",
        imageSrc: "/images/users - employees 1.svg",
    },
    {
        title: "Error-free Compliance",
        description:
            "Stitchflow has helped us ensure compliance (SOC 2, ISO) by making access audits quick and accurate. It's reduced security risks by flagging unnecessary permissions and inactive accounts.",
        bgColor: "bg-yellow-400",
        imageSrc: "/images/users - employees 1.svg",
    },
];

const UsecaseSection = () => {
    return (
        <div className="w-full px-4 lg:px-0">
            <div className="flex justify-center items-center flex-wrap">
                <div className="w-full md:w-[90%] lg:w-[80%]">
                    {useCases.map((useCase, index) => (
                        <section
                            key={index}
                            className={`flex flex-col items-center ${index === 0 ? "pt-40 pb-20" : "py-20"} ${
                                index === 2 ? "pb-40" : ""
                            } `}
                        >
                            <div className="flex flex-col items-center gap-12 w-full">
                                <div className="max-w-3xl text-center space-y-4">
                                    <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                                        {useCase.title}
                                    </h2>
                                    <p className="text-base text-gray-600 leading-relaxed">{useCase.description}</p>
                                </div>
                                <div className={`w-full rounded-3xl p-10 ${useCase.bgColor} overflow-hidden`}>
                                    <Image
                                        src={useCase.imageSrc}
                                        alt="Users employees interface"
                                        className="w-full h-[708px] object-cover rounded-2xl"
                                        width={1439}
                                        height={935}
                                    />
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UsecaseSection;
