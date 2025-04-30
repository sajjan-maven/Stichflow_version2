import React from "react";

import HomeMainComponent from "./components/HomeMainComponent";

const page = () => {
    return (
        <>
            <HomeMainComponent />
        </>
    );
};

export default page;

export const metadata = {
    title: "Stitchflow | SaaS Management as Customizable as Spreadsheets",
    description:
        "Stitchflow's automated SaaS management maps every access policy and exception across roles and locations in your environment.",
    openGraph: {
        title: "Stitchflow | SaaS Management as Customizable as Spreadsheets",
        description:
            "Stitchflow's automated SaaS management maps every access policy and exception across roles and locations in your environment.",
        url: "https://www.stitchflow.com",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Stitchflow | SaaS Management as Customizable as Spreadsheets",
        description:
            "Stitchflow's automated SaaS management maps every access policy and exception across roles and locations in your environment.",
    },
    alternates: {
        canonical: "https://www.stitchflow.com",
    },
};
