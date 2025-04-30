import React from "react";

import MainComponent from "./components/MainComponent";

const page = () => {
    return (
        <div>
            <MainComponent />
        </div>
    );
};

export default page;
export const metadata = {
    title: "Thank You for Signing Up for a Demo | Stitchflow",
    description:
        "Thank you for scheduling a demo with Stitchflow. We look forward to showing you how we can transform your IT operations.",
    openGraph: {
        title: "Thank You for Signing Up for a Demo | Stitchflow",
        description:
            "Thank you for scheduling a demo with Stitchflow. We look forward to showing you how we can transform your IT operations.",
        url: "https://www.stitchflow.com/thank-you-page",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Thank You for Signing Up for a Demo | Stitchflow",
        description:
            "Thank you for scheduling a demo with Stitchflow. We look forward to showing you how we can transform your IT operations.",
    },
    alternates: {
        canonical: "https://www.stitchflow.com/thank-you-page",
    },
};
