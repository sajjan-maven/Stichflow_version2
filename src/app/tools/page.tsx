import HeroSection from "./components/HeroSection";
import ITtoolsCard from "./components/ITtoolsCard";
 
  export default function ItTools() {
    return (
      <div className="flex flex-col items-start relative bg-[#f8f5f3]">
        <HeroSection />
        <ITtoolsCard />
      </div>
    );
  };
  