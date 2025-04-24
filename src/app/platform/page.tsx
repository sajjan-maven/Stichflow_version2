import HeroSection from "./components/HeroSection";
import StepsSection from "./components/StepsSection";

export default function Product() {

  return (
    <div className="flex flex-col items-start bg-[#f8f5f3]">
      <HeroSection />
      <StepsSection />
    </div>
  );
};
