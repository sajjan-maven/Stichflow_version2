import React from "react";
import ThankyouHeroSection from "./components/ThankyouHeroSection";
import FeatureResourceSection from "./components/FeatureResourceSection";

const page = () => {
    return (
        <div className="flex flex-col items-start relative ">
            <ThankyouHeroSection />
            <FeatureResourceSection />
        </div>
    );
};

export default page;
