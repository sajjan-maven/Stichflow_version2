import React from "react";
import HeroSection from "./HeroSection";
import ITtoolsCard from "./ITtoolsCard";
import WhatItForksShare from "./WhatItForksShare";
import EmailSubscribe from "./EmailSubscribe";
import FAQSection from "./FAQSection";
import ProductDifference from "./ProductDifference";
import ScheduleDemo from "./ScheduleDemo";

const ToolsMainComponent = () => {
    return (
        <div className="flex flex-col items-start relative bg-[#f8f5f3]">
            <HeroSection />
            <ITtoolsCard />
            <WhatItForksShare />
            <EmailSubscribe />
            <FAQSection />
            <ProductDifference />
            <ScheduleDemo />
        </div>
    );
};

export default ToolsMainComponent;
