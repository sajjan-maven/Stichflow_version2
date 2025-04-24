import React from "react";
import { ComplianceDetailsSection } from "./components/ComplianceDetailsSection";
import { ComplianceSection } from "./components/ComplianceSection";
import { HeroSection } from "./components/HeroSection";
import { InsightsSection } from "./components/InsightsSection";
import { InsightsWrapperSection } from "./components/InsightsWrapperSection";

export default function FreePilot() {
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
