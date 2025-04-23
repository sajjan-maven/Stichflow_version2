"use client";

import React, {useState} from "react";
import TermsRightContainer from "./TermsRightContainer";
import TermsLeftContainer from "./TermsLeftContainer";
import TermsBanner from "./TermsBanner";
import {TermsOrPrivacyData} from "@/app/types/termsOrPrivacy";

interface TermsOfServiceProps {
    termsData: {data: TermsOrPrivacyData};
}

const TermsPage: React.FC<TermsOfServiceProps> = ({termsData}) => {
    const [activeSection, setActiveSection] = useState<string>("");

    return (
        <>
            <div className="fixed-header">
                <TermsBanner termsData={termsData} />
            </div>
            <div className="main-content">
                <section className="section">
                    <div className="my-contain">
                        <div className="relative flex justify-between">
                            <div className="w-full max-w-[310px] hidden md:block sticky top-2">
                                <TermsLeftContainer termsData={termsData} activeSection={activeSection} />
                            </div>
                            <div className="w-full max-w-[725px]">
                                <TermsRightContainer termsData={termsData} onSectionChange={setActiveSection} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default TermsPage;
