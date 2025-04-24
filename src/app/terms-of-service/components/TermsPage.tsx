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
                <section className="section px-6">
                    <div className="max-w-[1256px] mx-auto mb-8">
                        <div className="relative flex justify-between">
                            <div className="left-div _30cent hide-mobile sticky-left">
                                <TermsLeftContainer termsData={termsData} activeSection={activeSection} />
                            </div>
                            <div className="right-div _70cent right-container">
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
