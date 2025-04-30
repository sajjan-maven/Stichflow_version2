import React from "react";
import HomeHeroSection from "./HomeHeroSection";
import HomeFeatureSection from "./HomeFeatureSection";
import HomeMagicSection from "./HomeMagicSection";
import HomeWorkSection from "./HomeWorkSection";
import TestimonialCarousel from "./HomeTestimonialSection";

const HomeMainComponent = () => {
    return (
        <div>
            <HomeHeroSection />
            <HomeFeatureSection />
            <HomeMagicSection />
            <HomeWorkSection />
            <TestimonialCarousel />
        </div>
    );
};

export default HomeMainComponent;
