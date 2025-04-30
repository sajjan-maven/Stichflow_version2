import React from "react";
import SecurityMainComponent from "./components/SecurityMainComponent";

const page = () => {
    return (
        <div>
            <SecurityMainComponent />
        </div>
    );
};

export default page;

export const metadata = {
    title: "Security | Stitchflow",
    description:
        "Enterprise-grade SaaS management with continuous monitoring, real-time alerts, and automated access reviews for compliance.",
    openGraph: {
        title: "Security | Stitchflow",
        description:
            "Enterprise-grade SaaS management with continuous monitoring, real-time alerts, and automated access reviews for compliance.",
        url: "https://www.stitchflow.com/security",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Security | Stitchflow",
        description:
            "Enterprise-grade SaaS management with continuous monitoring, real-time alerts, and automated access reviews for compliance.",
    },
    alternates: {
        canonical: "https://www.stitchflow.com/security",
    },
};
