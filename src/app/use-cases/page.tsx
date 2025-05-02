import HeroSection from "./components/HeroSection";
import UseCaseSection from "./components/UsecaseSection";

const UseCases = () => {
    return (
        <div>
            <HeroSection />
            <UseCaseSection />
        </div>
    );
};

export default UseCases;

export const metadata = {
    title: "Stitchflow for IT: Audits, Renewals, Compliance",
    description:
        "Get 100% visibility into every SaaS account. Stitchflow automates renewals, flags hidden users and delivers audit-ready reports—no costly SSO/SCIM upgrades.",
    openGraph: {
        title: "Stitchflow for IT: Audits, Renewals, Compliance",
        description:
            "Get 100% visibility into every SaaS account. Stitchflow automates renewals, flags hidden users and delivers audit-ready reports—no costly SSO/SCIM upgrades.",
        url: "https://www.stitchflow.com/use-cases",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Stitchflow for IT: Audits, Renewals, Compliance",
        description:
            "Get 100% visibility into every SaaS account. Stitchflow automates renewals, flags hidden users and delivers audit-ready reports—no costly SSO/SCIM upgrades.",
    },
    alternates: {
        canonical: "https://www.stitchflow.com/use-cases",
    },
};
