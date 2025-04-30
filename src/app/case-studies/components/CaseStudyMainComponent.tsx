import React from "react";
import HeroSection from "./HeroSection";
import CaseStudyGrid from "./CaseStudyGrid";

const CaseStudyMainComponent = () => {
    return (
        <div className="flex flex-col items-start relative bg-[#f8f5f3]">
            <HeroSection />
            <CaseStudyGrid />
        </div>
    );
};

export default CaseStudyMainComponent;
