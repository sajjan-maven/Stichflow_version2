import CaseStudyGrid from "./components/CaseStudyGrid";
import HeroSection from "./components/HeroSection";

export default function CaseStudies() {
  return (
    <div className="flex flex-col items-start relative bg-[#f8f5f3]">
      <HeroSection />
      <CaseStudyGrid />
    </div>
  );
};
