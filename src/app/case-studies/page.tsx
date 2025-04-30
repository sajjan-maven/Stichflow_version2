import CaseStudyMainComponent from "./components/CaseStudyMainComponent";

export default function CaseStudies() {
    return (
        <div>
            <CaseStudyMainComponent />
        </div>
    );
}

export const metadata = {
    title: "Case Studies | Stitchflow",
    description:
        "See how IT teams cut audit prep from days to 15 min, gain 100% visibility, and reclaim two days a week with Stitchflow’s instant reconciliation.",
    openGraph: {
        title: "Case Studies | Stitchflow",
        description:
            "See how IT teams cut audit prep from days to 15 min, gain 100% visibility, and reclaim two days a week with Stitchflow’s instant reconciliation.",
        url: "https://www.stitchflow.com/case-studies",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Case Studies | Stitchflow",
        description:
            "See how IT teams cut audit prep from days to 15 min, gain 100% visibility, and reclaim two days a week with Stitchflow’s instant reconciliation.",
    },
    alternates: {
        canonical: "https://www.stitchflow.com/case-studies",
    },
};
