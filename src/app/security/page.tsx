import React from "react";
import HeroSection from "./components/HeroSection";
import ComplianceSection from "./components/CompilanceSection";
import ComplianceDetailsSection from "./components/CompilanceDetailsSection";

const page = () => {
    return (
        <div>
            <HeroSection />
            <ComplianceSection />
            <ComplianceDetailsSection />
        </div>
    );
};

export default page;
