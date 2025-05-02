import Image from "next/image";
import React from "react";

const complianceData = [
    {
        id: "soc2",
        title: "SOC 2 Type II",
        description: "Stitchflow meets AICPA SOC 2 Type II criteria for securely managing customer data.",
        src: "/securities/security-1.png"
    },
    {
        id: "gdpr",
        title: "GDPR",
        description: "Stitchflow complies with GDPR standards for protecting personal data and privacy.",
        src: "/securities/security-2.png"
    },
    {
        id: "ccpa",
        title: "CCPA",
        description: "Stitchflow complies with CCPA regulations for safeguarding California consumers' privacy.",
        src: "/securities/security-3.png"
    },
    {
        id: "iso",
        title: "ISO 27001:2002",
        description: "Stitchflow is certified to ISO 27001:2002 standards for information security management.",
        src: "/securities/security-4.png"
    },
];

const ComplianceSection = () => {
    return (
        <section className="py-20 bg-[#e4dbd0] w-full px-6">
            <div className="flex justify-center items-center flex-wrap max-w-[1256px] mx-auto">
                <div className="flex flex-wrap gap-6 items-center justify-center">
                    {complianceData.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col w-full max-w-[294px] overflow-hidden border border-[#545058] rounded-[32px] bg-white"
                        >
                            <Image
                                alt={item.id}
                                src={item.src}
                                width={296}
                                height={200}
                            />
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
        </section>
    );
};

export default ComplianceSection;
