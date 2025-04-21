import React from "react";
import HomeHeroSection from "./components/HomeHeroSection";
import HomeFeatureSection from "./components/HomeFeatureSection";
import HomeMagicSection from "./components/HomeMagicSection";
import HomeWorkSection from "./components/HomeWorkSection";
import HomeTestimonialSection from "./components/HomeTestimonialSection";

const page = () => {
    return (
        <div>
            <HomeHeroSection />
            <HomeFeatureSection />
            <HomeMagicSection />
            <HomeWorkSection />
            <HomeTestimonialSection />
        </div>
    );
};

export default page;
