import PlatformComponent from "./components/PlatformComponent";

export default function Product() {
    return (
        <>
            <PlatformComponent />
        </>
    );
}
export const metadata = {
    title: "Platform | Stitchflow",
    description:
        "Optimize SaaS management with Stitchflow—our IT graph auto-configures to your environment, enabling real-time monitoring and precise SaaS management.",
    openGraph: {
        title: "Platform | Stitchflow",
        description:
            "Optimize SaaS management with Stitchflow—our IT graph auto-configures to your environment, enabling real-time monitoring and precise SaaS management.",
        url: "https://www.stitchflow.com/platform",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Platform | Stitchflow",
        description:
            "Optimize SaaS management with Stitchflow—our IT graph auto-configures to your environment, enabling real-time monitoring and precise SaaS management.",
    },
    alternates: {
        canonical: "https://www.stitchflow.com/platform",
    },
};
