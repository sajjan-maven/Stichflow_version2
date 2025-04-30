import React from "react";

import AboutMainComponent from "./components/AboutMainComponent";

const About = () => {
    return (
        <div>
            <AboutMainComponent />
        </div>
    );
};

export default About;

export const metadata = {
    title: "About Us | Stitchflow",
    description:
        "Customized SaaS management automation for modern enterprises. Solutions for IT environments with complex business sprawl.",
    openGraph: {
        title: "About Us | Stitchflow",
        description:
            "Customized SaaS management automation for modern enterprises. Solutions for IT environments with complex business sprawl.",
        url: "https://www.stitchflow.com/about",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us | Stitchflow",
        description:
            "Customized SaaS management automation for modern enterprises. Solutions for IT environments with complex business sprawl.",
    },
    alternates: {
        canonical: "https://www.stitchflow.com/about",
    },
};
