import React from "react";
import HeroSection from "./HeroSection";
import ITtoolsCard from "./ITtoolsCard";
import WhatItForksShare from "./WhatItForksShare";
import EmailSubscribe from "./EmailSubscribe";
import FAQSection from "./FAQSection";
import ProductDifference from "./ProductDifference";

const ToolsMainComponent = () => {
    return (
        <div className="flex flex-col items-start relative">
            <HeroSection />
            <ITtoolsCard />
            <WhatItForksShare />
            <ProductDifference />
            <FAQSection />
            <EmailSubscribe />
            {/* <ScheduleDemo /> */}
        </div>
    );
};

export default ToolsMainComponent;
