"use client";
import Image from "next/image";
import React, {useState} from "react";

const comparisonData = {
    licenseManagement: [
        {
            manual: "Manual cross-referencing of user counts against available licenses is time-consuming.",
            withStitchflow: "All users are reconciled with the system of record—no need for spreadsheets or VLOOKUPs.",
        },
        {
            manual: "Not dynamic enough for companies with frequent employee or org changes.",
            withStitchflow: "Real-time insights and alerts adapt to company changes, policies, and exceptions.",
        },
        {
            manual: "Inaccurate data disrupts license management, affecting renewals and cost savings.",
            withStitchflow: "Accurate, up-to-date data prevents license gaps and maximizes cost efficiency.",
        },
    ],
    secureOffboarding: [
        {
            manual: "Manual cross-referencing of user counts against available licenses is time-consuming.",
            withStitchflow: "All users are reconciled with the system of record—no need for spreadsheets or VLOOKUPs.",
        },
        {
            manual: "Not dynamic enough for companies with frequent employee or org changes.",
            withStitchflow: "Real-time insights and alerts adapt to company changes, policies, and exceptions.",
        },
        {
            manual: "Inaccurate data disrupts license management, affecting renewals and cost savings.",
            withStitchflow: "Accurate, up-to-date data prevents license gaps and maximizes cost efficiency.",
        },
    ],
    complianceAudits: [
        {
            manual: "Manual cross-referencing of user counts against available licenses is time-consuming.",
            withStitchflow: "All users are reconciled with the system of record—no need for spreadsheets or VLOOKUPs.",
        },
        {
            manual: "Not dynamic enough for companies with frequent employee or org changes.",
            withStitchflow: "Real-time insights and alerts adapt to company changes, policies, and exceptions.",
        },
        {
            manual: "Inaccurate data disrupts license management, affecting renewals and cost savings.",
            withStitchflow: "Accurate, up-to-date data prevents license gaps and maximizes cost efficiency.",
        },
    ],
};

const HomeWorkSection = () => {
    const [activeTab, setActiveTab] = useState<keyof typeof comparisonData>("licenseManagement");

    const handleTabChange = (tab: keyof typeof comparisonData) => {
        setActiveTab(tab);
    };

    return (
        <section className="flex justify-center items-center gap-20 py-6 md:py-16 w-full bg-white z-10 relative px-4">
            <div className="w-full max-w-[1256px]">
                <div className="flex flex-col w-full max-w-4xl items-center gap-10 mx-auto">
                    <div className="text-center">
                        <h2 className="text-4xl font-semibold text-gray-900 leading-tight">
                            How Stitchflow Makes a Difference
                        </h2>
                    </div>

                    {/* Scrollable tabs for mobile */}
                    <div className="flex items-center md:gap-2 justify-center flex-wrap bg-gray-100 p-2 rounded-4xl md:rounded-full w-fit mx-auto">
                        <button
                            className={`whitespace-nowrap cursor-pointer px-4 py-2 ${
                                activeTab === "licenseManagement" ? "text-white bg-gray-800" : "text-gray-500"
                            } rounded-full transition-colors ${
                                activeTab === "licenseManagement" ? "shadow-md" : ""
                            }`}
                            onClick={() => handleTabChange("licenseManagement")}
                        >
                            License Management
                        </button>
                        <button
                            className={`whitespace-nowrap cursor-pointer px-4 py-2 ${
                                activeTab === "secureOffboarding" ? "text-white bg-gray-800" : "text-gray-500"
                            } rounded-full transition-colors ${
                                activeTab === "secureOffboarding" ? "shadow-md" : ""
                            }`}
                            onClick={() => handleTabChange("secureOffboarding")}
                        >
                            Secure Offboarding
                        </button>
                        <button
                            className={`whitespace-nowrap cursor-pointer px-4 py-2 ${
                                activeTab === "complianceAudits" ? "text-white bg-gray-800" : "text-gray-500"
                            } rounded-full transition-colors ${
                                activeTab === "complianceAudits" ? "shadow-md" : ""
                            }`}
                            onClick={() => handleTabChange("complianceAudits")}
                        >
                            Compliance Audits
                        </button>
                    </div>
                </div>
                <div className="flex mt-8 md:mt-[72px] flex-col md:flex-row w-full border border-[#545058] rounded-3xl overflow-hidden">
                    {/* Manual Side */}
                    <div className="w-full md:w-1/2">
                        <div className="border-b md:border-b-0 md:border-r border-[#545058]">
                            <div className="flex items-center justify-center gap-4 px-8 py-4 md:py-6 border-b border-[#545058]">
                                <Image
                                    src="/home-page/manual.svg"
                                    alt="Icon"
                                    className="w-6 h-6"
                                    width={6}
                                    height={6}
                                />
                                <h3 className="text-[#363338] text-lg font-medium">Manual Reconciliation</h3>
                            </div>
                            {comparisonData[activeTab].map((item, index) => (
                                <div
                                    key={`manual-${index}`}
                                    className={`p-4 md:p-8 ${
                                        index !== comparisonData[activeTab].length - 1
                                            ? "border-b border-[#545058]"
                                            : ""
                                    }`}
                                >
                                    <p className="text-[#383f3b] text-lg leading-relaxed">{item.manual}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stitchflow Side */}
                    <div className="w-full md:w-1/2">
                        <div className="bg-blue-50">
                            <div className="flex items-center justify-center gap-4 px-8 py-4 md:py-6 border-b border-[#545058]">
                                {/* <div className="w-6 h-6 bg-blue-500 rounded-full"></div> */}
                                <Image
                                    src="/home-page/with-SF.svg"
                                    alt="Icon"
                                    className="w-6 h-6"
                                    width={6}
                                    height={6}
                                />
                                <h3 className="text-[#363338] text-lg font-medium">With Stitchflow</h3>
                            </div>
                            {comparisonData[activeTab].map((item, index) => (
                                <div
                                    key={`stitchflow-${index}`}
                                    className={`p-4 md:p-8 bg-blue-50 ${
                                        index !== comparisonData[activeTab].length - 1
                                            ? "border-b border-[#545058]"
                                            : ""
                                    }`}
                                >
                                    <p className="text-[#383f3b] text-lg leading-relaxed">
                                        {item.withStitchflow}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="h-2 border-b border-[#E4DFDC] py-6 md:py-10"></div>
            </div>
        </section>
    );
};

export default HomeWorkSection;
