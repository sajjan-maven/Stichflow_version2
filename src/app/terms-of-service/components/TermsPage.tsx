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
            <div>
                <TermsBanner termsData={termsData} />
            </div>
            <section className="pt-12 pb-24 relative px-6">
                <div className="max-w-[1256px] mx-auto mb-8">
                    <div className="relative flex justify-between">
                        <div className="pr-6 top-28 sticky self-start hidden lg:block w-[30%]">
                            <TermsLeftContainer termsData={termsData} activeSection={activeSection} />
                        </div>
                        <div className="self-start w-full lg:w-[70%]">
                            <TermsRightContainer termsData={termsData} onSectionChange={setActiveSection} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TermsPage;
