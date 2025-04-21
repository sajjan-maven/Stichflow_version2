import Image from "next/image";
import React from "react";

const complianceData = [
    {
        id: "soc2",
        title: "SOC 2 Type II",
        description: "Stitchflow meets AICPA SOC 2 Type II criteria for securely managing customer data.",
        headerContent: (
            <div className="w-36 h-36 relative mx-auto mt-7">
                <div className="absolute w-[126px] top-[27px] left-[9px] font-mono font-medium text-[#363338] text-2xl text-center leading-10">
                    AICPA
                </div>
                {/* <div className="absolute top-[62px] left-[18px] w-24 h-[1px] bg-[#363338] opacity-40" /> */}
                <div className="absolute w-[126px] top-[75px] left-[9px] font-mono font-medium text-[#363338] text-2xl text-center leading-10">
                    SOC2
                </div>
                <Image
                    className="absolute top-0 left-0 w-36 h-36"
                    alt="Vector"
                    src="/images/Framecircle 103.svg"
                    width={114}
                    height={114}
                />
            </div>
        ),
    },
    {
        id: "gdpr",
        title: "GDPR",
        description: "Stitchflow complies with GDPR standards for protecting personal data and privacy.",
        headerContent: (
            <div className="relative w-[158px] h-[158px] mx-auto mt-[21px]">
                <div className="absolute w-[126px] top-[58px] left-4 font-mono font-medium text-[#363338] text-2xl text-center leading-10">
                    GDPR
                </div>
                <Image
                    className="absolute w-[158px] h-[158px] top-0 left-0"
                    alt="Group"
                    src="/images/Group 13.svg"
                    width={158}
                    height={158}
                />
            </div>
        ),
    },
    {
        id: "ccpa",
        title: "CCPA",
        description: "Stitchflow complies with CCPA regulations for safeguarding California consumers' privacy.",
        headerContent: (
            <div className="relative w-[134px] h-[136px] mx-auto mt-8">
                <Image
                    className="absolute w-[32px] h-[46px] top-0 right-0"
                    alt="Vector"
                    src="/images/Group 14.svg"
                    width={32}
                    height={46}
                />
                <Image
                    className="absolute w-[118px] h-[136px] top-0 left-0"
                    alt="Vector"
                    src="/images/Vector 27.svg"
                    width={118}
                    height={136}
                />
                <div className="absolute w-8 h-[46px] top-[11px] left-[102px] bg-[url(/union.svg)] bg-cover" />
            </div>
        ),
    },
    {
        id: "iso",
        title: "ISO 27001:2002",
        description: "Stitchflow is certified to ISO 27001:2002 standards for information security management.",
        headerContent: (
            <div className="w-[204px] h-[156px] relative mx-auto mt-4">
                {/* Image center-aligned */}
                <div className="absolute top-[20px] left-1/2 transform -translate-x-1/2 w-[144px] h-[144px]">
                    <Image
                        alt="ISO globe"
                        src="/images/Frame 103.svg"
                        width={144}
                        height={144}
                        className="w-full h-full object-contain top-0 left-0"
                    />
                    {/* Overlay text inside image */}
                    {/* <div className="absolute inset-0 flex flex-col items-center justify-center font-mono text-[#363338] text-[20px] font-bold leading-[24px]"> */}
                    <div className="absolute w-[126px] top-[47px] left-[9px] font-mono font-medium text-[#363338] text-2xl text-center leading-10">
                        ISO
                    </div>
                    <div className="absolute w-[126px] top-[79px] left-[9px] font-mono font-medium text-[#363338] text-2xl text-center leading-10">
                        27001
                    </div>
                    {/* </div> */}
                </div>

                {/* Badge */}
                {/* <div className="absolute top-[12px] right-[12px] bg-[#fde48b] text-black text-[10px] font-normal rounded-xl px-2 py-1 font-mono leading-5 shadow-sm"> */}
                <div className="absolute top-0 left-32 bg-[#fde48b] text-black text-[10px] font-normal rounded-xl px-2 py-1 font-mono leading-5">
                    In process
                </div>
            </div>
        ),
    },
];

const ComplianceSection = () => {
    return (
        <section className="py-20 bg-[#e4dbd0] w-full px-4 lg:px-0">
            <div className="flex justify-center items-center flex-wrap">
                <div className="w-full md:w-[90%] lg:w-[80%]">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {complianceData.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex flex-col overflow-hidden border border-[#545058] rounded-[32px] bg-white"
                                >
                                    <div className="p-0 h-[200px] bg-[#a3c4f4] flex items-center justify-center">
                                        {item.headerContent}
                                    </div>
                                    <div className="flex flex-col items-center gap-2 p-8">
                                        <h3 className="text-[#363338] text-xl font-semibold text-center">
                                            {item.title}
                                        </h3>
                                        <p className="text-[#7b7481] text-sm text-center">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComplianceSection;
