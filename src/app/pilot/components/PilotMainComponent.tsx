import React from "react";
import {HeroSection} from "./HeroSection";
import {InsightsSection} from "./InsightsSection";
import {ComplianceSection} from "./ComplianceSection";
import {InsightsWrapperSection} from "./InsightsWrapperSection";
import {ComplianceDetailsSection} from "./ComplianceDetailsSection";

const PilotMainComponent = () => {
    return (
        <div className="flex flex-col w-full bg-[#f8f5f3]">
            <HeroSection />
            <InsightsSection />
            <ComplianceSection />
            <InsightsWrapperSection />
            <ComplianceDetailsSection />
        </div>
    );
};

export default PilotMainComponent;
