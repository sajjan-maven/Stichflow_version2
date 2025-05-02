import React from "react";
import DemoMainComponent from "./components/DemoMainComponent";

export default function DemoDesktop() {
    return (
        <div>
            <DemoMainComponent />
        </div>
    );
}
export const metadata = {
    title: "Schedule a demo | Stitchflow",
    description:
        "See how Stitchflow can transform your IT operations. Get a personalized demo of our customized SaaS management platform.",
    openGraph: {
        title: "Schedule a demo | Stitchflow",
        description:
            "See how Stitchflow can transform your IT operations. Get a personalized demo of our customized SaaS management platform.",
        url: "https://www.stitchflow.com/demo",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Schedule a demo | Stitchflow",
        description:
            "See how Stitchflow can transform your IT operations. Get a personalized demo of our customized SaaS management platform.",
    },
    alternates: {
        canonical: "https://www.stitchflow.com/demo",
    },
};
