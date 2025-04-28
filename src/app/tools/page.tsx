import EmailSubscribe from "./components/EmailSubscribe";
import FAQSection from "./components/FAQSection";
import HeroSection from "./components/HeroSection";
import ITtoolsCard from "./components/ITtoolsCard";
import ProductDifference from "./components/ProductDifference";
import ScheduleDemo from "./components/ScheduleDemo";
import WhatItForksShare from "./components/WhatItForksShare";
 
  export default function ItTools() {
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
  