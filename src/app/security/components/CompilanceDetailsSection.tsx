import Image from "next/image";
import React from "react";

// Define data structure for security features
interface SecurityFeature {
    iconSrc: string;
    title: string;
    description: string;
}

const ComplianceDetailsSection = () => {
    const productSecurityFeatures: SecurityFeature[] = [
        {
            iconSrc: "/securities/encryption.svg",
            title: "Encryption",
            description: "Service data is protected during transmission (TLS 1.2+) and at rest (AES-256).",
        },
        {
            iconSrc: "/securities/access-control.svg",
            title: "Role-Based Access Controls",
            description: "We offer fine-grained RBAC to manage who can access specific data.",
        },
        {
            iconSrc: "/securities/csv-sync.svg",
            title: "CSV Synchronization",
            description: "We offer CSV syncs as a flexible alternative to API integrations.",
        },
        {
            iconSrc: "/securities/read-only.svg",
            title: "Read-Only Access",
            description: "We support read-only access for every integration.",
        },
    ];

    // Organizational security features data
    const organizationalSecurityFeatures: SecurityFeature[] = [
        {
            iconSrc: "/securities/security-team.svg",
            title: "Dedicated Security Team",
            description: "A security expert oversees data security and compliance.",
        },
        {
            iconSrc: "/securities/regular-test.svg",
            title: "Regular Penetration Testing",
            description: "We perform third-party assessments to address application security flaws.",
        },
        {
            iconSrc: "/securities/incident-responce.svg",
            title: "Incident Response",
            description: "We have established procedures for promptly detecting and addressing security issues.",
        },
        {
            iconSrc: "/securities/employee-security.svg",
            title: "Employee Security Training",
            description:
                "Our employees receive regular training on information security, data protection, and privacy regulations.",
        },
        {
            iconSrc: "/securities/background-check.svg",
            title: "Background Checks and NDAs",
            description: "All employees go through background checks and sign non-disclosure agreements agreements.",
        },
    ];
    const renderSecurityFeature = (feature: SecurityFeature) => (
        <div className="flex flex-col items-start gap-2 flex-1">
            <Image src={feature.iconSrc} alt={feature.title} className="w-6 h-6" width={6} height={6} />
            <h3 className="font-h5-medium text-[#363338] text-[length:var(--h5-medium-font-size)] tracking-[var(--h5-medium-letter-spacing)] leading-[var(--h5-medium-line-height)]">
                {feature.title}
            </h3>
            <p className="font-['Geist',Helvetica] font-normal text-[#7b7481] text-base leading-6">
                {feature.description}
            </p>
        </div>
    );
    return (
        <section className="flex flex-col gap-20 w-full px-6">
            <div className="flex justify-center items-center flex-wrap max-w-[1256px] mx-auto">
                {/* Product Security Section */}
                <div className="flex flex-col w-full items-start gap-10 pt-25">
                    <h2 className="font-['Geist',Helvetica] font-semibold text-[#363338] text-4xl leading-[48px]">
                        Product Security
                    </h2>

                    <div className="flex flex-col w-full gap-10">
                        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20 w-full">
                            {renderSecurityFeature(productSecurityFeatures[0])}
                            {renderSecurityFeature(productSecurityFeatures[1])}
                        </div>

                        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20 w-full">
                            {renderSecurityFeature(productSecurityFeatures[2])}
                            {renderSecurityFeature(productSecurityFeatures[3])}
                        </div>
                    </div>
                </div>

                {/* Organizational Security Section */}
                <div className="flex flex-col w-full items-start gap-10 pt-20 pb-32">
                    <h2 className="font-['Geist',Helvetica] font-semibold text-[#363338] text-4xl leading-[48px]">
                        Organizational Security
                    </h2>

                    <div className="flex flex-col w-full gap-10">
                        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20 w-full">
                            {renderSecurityFeature(organizationalSecurityFeatures[0])}
                            {renderSecurityFeature(organizationalSecurityFeatures[1])}
                        </div>

                        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20 w-full">
                            {renderSecurityFeature(organizationalSecurityFeatures[2])}
                            {renderSecurityFeature(organizationalSecurityFeatures[3])}
                        </div>

                        <div className="flex items-start w-full">
                            {renderSecurityFeature(organizationalSecurityFeatures[4])}
                            <div className="hidden md:block flex-1"></div> {/* Empty div for layout balance */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComplianceDetailsSection;
