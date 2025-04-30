import React from "react";
import HeroSection from "./HeroSection";
import StepsSection from "./StepsSection";

const PlatformComponent = () => {
    return (
        <div className="flex flex-col items-start bg-[#f8f5f3]">
            <HeroSection />
            <StepsSection />
        </div>
    );
};

export default PlatformComponent;
