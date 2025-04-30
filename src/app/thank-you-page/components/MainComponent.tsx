import React from "react";
import ThankyouHeroSection from "./ThankyouHeroSection";
import FeatureResourceSection from "./FeatureResourceSection";

const MainComponent = () => {
    return (
        <div className="flex flex-col items-start relative ">
            <ThankyouHeroSection />
            <FeatureResourceSection />
        </div>
    );
};

export default MainComponent;
