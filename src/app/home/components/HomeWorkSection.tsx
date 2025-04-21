import React from "react";

const comparisonData = [
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
];

const HomeWorkSection = () => {
    return (
        <section className="flex flex-col items-center gap-20 py-20 px-6 md:px-12 lg:px-[236px] w-full bg-white z-10 relative">
            <div className="flex flex-col w-full max-w-[830px] items-center gap-10">
                <div className="text-center">
                    <h2 className="text-4xl font-semibold text-[#222222] leading-tight">
                        How Stitchflow Makes a Difference
                    </h2>
                </div>

                {/* Replace this with your own custom tab component if you're not using one */}
                <div className="flex items-center gap-2 bg-[#f8f5f3] p-2 rounded-full w-full">
                    <button className="flex-1 px-3 py-2 text-white bg-[#363338] rounded-full shadow-md">
                        License Management
                    </button>
                    <button className="flex-1 px-3 py-2 text-[#7b7481] rounded-full">Secure Offboarding</button>
                    <button className="flex-1 px-3 py-2 text-[#7b7481] rounded-full">Compliance Audits</button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row w-full border border-[#545058] rounded-[32px] overflow-hidden">
                {/* Manual Side */}
                <div className="w-full md:w-1/2">
                    <div className="border-b md:border-b-0 md:border-r border-[#545058]">
                        <div className="flex items-center justify-center gap-4 px-8 py-6 border-b border-[#545058]">
                            <img src="/icon-6.svg" alt="Icon" className="w-6 h-6" />
                            <h3 className="text-[#363338] text-lg font-medium">Manual Reconciliation</h3>
                        </div>
                        {comparisonData.map((item, index) => (
                            <div key={`manual-${index}`} className="p-8 border-b border-[#545058]">
                                <p className="text-[#383f3b] text-lg leading-[26px]">{item.manual}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stitchflow Side */}
                <div className="w-full md:w-1/2">
                    <div className="bg-[#deeaf9]">
                        <div className="flex items-center justify-center gap-4 px-8 py-6 border-b border-[#545058]">
                            <img src="/logo-icon.svg" alt="Logo icon" className="w-6 h-6" />
                            <h3 className="text-[#363338] text-lg font-medium">With Stitchflow</h3>
                        </div>
                        {comparisonData.map((item, index) => (
                            <div key={`stitchflow-${index}`} className="p-8 bg-[#f2f6fc] border-b border-[#545058]">
                                <p className="text-[#383f3b] text-lg leading-[26px]">{item.withStitchflow}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeWorkSection;
